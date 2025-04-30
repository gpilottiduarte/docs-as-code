import os
import markdown # ou mistune
import re
from collections import Counter
import math # Para usar math.inf
import csv # Importar a biblioteca para trabalhar com CSV

# Removidas importações do translate-toolkit

# --- Configurações ---
# Ajuste os caminhos para suas pastas de corpus
source_root_dir = './4.0/en'
target_root_dir = './4.0/pt' # Ajuste se for pt-br

# Penalidade para segmentos não alinhados (inserção ou deleção)
# Ajuste este valor. Um valor mais negativo penaliza mais segmentos desalinhados.
GAP_PENALTY = -0.7

# Pesos para a função de similaridade combinada
WEIGHT_WORD_SIMILARITY = 0.6
WEIGHT_LENGTH_SIMILARITY = 0.4

# --- Stop Words ---
# Lista de stop words em Português e Inglês (pode expandir)
stop_words = set([
    'a', 'o', 'as', 'os', 'um', 'uma', 'uns', 'umas',
    'de', 'do', 'da', 'dos', 'das', 'em', 'no', 'na', 'nos', 'nas',
    'por', 'pelo', 'pela', 'pelos', 'pelas', 'com', 'para',
    'é', 'e', 'ou', 'mas', 'mais', 'se', 'quando', 'onde', 'como',
    'que', 'qual', 'quem', 'quais', 'ao', 'aos', 'à', 'às',
    'the', 'a', 'an', 'is', 'it', 'of', 'and', 'or', 'but', 'more', 'if', 'when',
    'where', 'how', 'that', 'which', 'who', 'whom', 'whose', 'am', 'are', 'was',
    'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
    'can', 'could', 'will', 'would', 'should', 'may', 'might', 'must', 'at',
    'by', 'for', 'from', 'in', 'into', 'on', 'onto', 'with', 'through', 'about',
    'against', 'between', 'into', 'through', 'during', 'before', 'after',
    'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off',
    'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there',
    'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more',
    'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same',
    'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 'should', 'now'
])

# --- Função para limpar e tokenizar segmentos ---
def clean_segment(segment):
    """Remove pontuação, converte para minúsculas e divide em palavras, removendo stop words."""
    if not isinstance(segment, str):
        return []
    # Remover tags HTML e URLs
    segment = re.sub(r'<.*?>', ' ', segment)
    segment = re.sub(r'http[s]?://\S+', ' ', segment)
    segment = re.sub(r'cdn.document360.io/\S+', ' ', segment)

    segment = segment.lower()
    segment = re.sub(r'[\W_]+', ' ', segment)
    words = segment.split()
    # Remover stop words e strings vazias
    words = [word for word in words if word and word not in stop_words]
    return words

# --- Função para calcular a similaridade entre dois segmentos ---
def segment_similarity(source_seg, target_seg):
    """
    Calcula uma métrica de similaridade combinada entre dois segmentos.
    Combina similaridade por palavras comuns (Jaccard) e similaridade por comprimento.
    Retorna um score entre 0.0 e 1.0.
    """
    source_words = clean_segment(source_seg)
    target_words = clean_segment(target_seg)

    # Tratar caso onde ambos os segmentos originais eram vazios ou só espaço
    if not source_seg.strip() and not target_seg.strip():
         return 1.0

    # --- Similaridade por Palavras Comuns (Coeficiente de Jaccard) ---
    source_word_set = set(source_words)
    target_word_set = set(target_words)

    common_words_count = len(source_word_set.intersection(target_word_set))
    all_words_count = len(source_word_set.union(target_word_set))

    word_similarity = 0.0
    if all_words_count > 0:
        word_similarity = common_words_count / all_words_count

    # --- Similaridade por Comprimento ---
    source_len_words = len(source_words)
    target_len_words = len(target_words)

    length_similarity = 0.0
    if source_len_words > 0 and target_len_words > 0:
         length_similarity = min(source_len_words, target_len_words) / max(source_len_words, target_len_words)
    elif source_len_words == 0 and target_len_words == 0:
         length_similarity = 1.0

    # --- Combinar as métricas ---
    combined_similarity = (WEIGHT_WORD_SIMILARITY * word_similarity) + (WEIGHT_LENGTH_SIMILARITY * length_similarity)

    return combined_similarity

# --- Função Principal de Alinhamento ---
def align_segments_dp(source_segments, target_segments, similarity_func, gap_penalty):
    """
    Realiza o alinhamento de segmentos usando Programação Dinâmica.
    Retorna uma lista de tuplas (segmento_fonte_agrupado, segmento_alvo_agrupado).
    """
    n_source = len(source_segments)
    n_target = len(target_segments)

    # Matriz de scores: score_matrix[i][j] é o score máximo para alinhar
    # os primeiros i segmentos fonte com os primeiros j segmentos alvo.
    score_matrix = [[0.0 for _ in range(n_target + 1)] for _ in range(n_source + 1)]

    # Matriz de caminho: path_matrix[i][j] indica o movimento que levou ao score máximo em (i, j).
    # 1: Diagonal (match 1:1)
    # 2: Horizontal (deleção no alvo, segmento fonte não alinhado)
    # 3: Vertical (inserção no alvo, segmento alvo não alinhado)
    path_matrix = [[0 for _ in range(n_target + 1)] for _ in range(n_source + 1)]

    # Inicializar a primeira linha e coluna (custo de alinhar com segmentos vazios)
    for i in range(1, n_source + 1):
        path_matrix[i][0] = 2 # Deleção no alvo (segmento fonte sem match)
        score_matrix[i][0] = score_matrix[i-1][0] + gap_penalty

    for j in range(1, n_target + 1):
        path_matrix[0][j] = 3 # Inserção no alvo (segmento alvo sem match)
        score_matrix[0][j] = score_matrix[0][j-1] + gap_penalty

    # Preencher a matriz de scores
    for i in range(1, n_source + 1):
        for j in range(1, n_target + 1):
            # Score para um possível alinhamento 1:1
            match_score = score_matrix[i-1][j-1] + similarity_func(source_segments[i-1], target_segments[j-1])

            # Score para um segmento fonte não alinhado (deleção no alvo)
            delete_score = score_matrix[i-1][j] + gap_penalty

            # Score para um segmento alvo não alinhado (inserção no alvo)
            insert_score = score_matrix[i][j-1] + gap_penalty

            # Encontrar o score máximo e registrar o caminho
            max_score = max(match_score, delete_score, insert_score)
            score_matrix[i][j] = max_score

            if max_score == match_score:
                path_matrix[i][j] = 1 # Diagonal (match 1:1)
            elif max_score == delete_score:
                path_matrix[i][j] = 2 # Horizontal (deleção no alvo)
            else: # max_score == insert_score
                path_matrix[i][j] = 3 # Vertical (inserção no alvo)

    # --- Retroceder o caminho para extrair os alinhamentos ---
    aligned_pairs = []
    i, j = n_source, n_target # Começar do canto inferior direito

    # Variáveis para agrupar segmentos em alinhamentos N:M
    current_source_group = []
    current_target_group = []

    while i > 0 or j > 0:
        move = path_matrix[i][j]

        if move == 1: # Alinhamento 1:1 (Diagonal)
            # Finaliza qualquer grupo N:M pendente antes de adicionar o par 1:1
            if current_source_group or current_target_group:
                 aligned_pairs.append((" ".join(reversed(current_source_group)), " ".join(reversed(current_target_group))))
                 current_source_group = []
                 current_target_group = []

            # Adiciona o par 1:1 atual
            aligned_pairs.append((source_segments[i-1], target_segments[j-1]))
            i -= 1
            j -= 1

        elif move == 2: # Deleção no alvo (Horizontal) - Segmento fonte sem match
            # Adiciona o segmento fonte ao grupo atual (para potencial N:M)
            current_source_group.append(source_segments[i-1])
            i -= 1

        elif move == 3: # Inserção no alvo (Vertical) - Segmento alvo sem match
            # Adiciona o segmento alvo ao grupo atual (para potencial N:M)
            current_target_group.append(target_segments[j-1])
            j -= 1
        else: # Caso base (i=0, j=0)
            break

    # Adiciona qualquer grupo N:M restante no início das sequências
    if current_source_group or current_target_group:
         aligned_pairs.append((" ".join(reversed(current_source_group)), " ".join(reversed(current_target_group))))


    # A lista está invertida, então vamos reverter
    aligned_pairs.reverse()

    # Opcional: Filtrar alinhamentos de baixa confiança (ex: score da célula < limite)
    # Isso exigiria armazenar scores por par alinhado durante o retrocesso ou recalcular.
    # Por enquanto, incluímos todos os pares encontrados pelo caminho ótimo.

    return aligned_pairs

# --- Início do Processamento ---
file_pairs = []

# --- Código para encontrar file_pairs (o que você já fez) ---
# Percorrer a estrutura de diretórios da pasta fonte recursivamente
for root, dirs, files in os.walk(source_root_dir):
    for filename in files:
        if not filename.endswith('.md'):
            continue

        source_filepath = os.path.join(root, filename)
        relative_path = os.path.relpath(source_filepath, source_root_dir)
        target_filepath = os.path.join(target_root_dir, relative_path)

        if os.path.exists(target_filepath):
            file_pairs.append((source_filepath, target_filepath))
        else:
            print(f"Aviso: Arquivo alvo não encontrado para: {source_filepath}")

print(f"Encontrados {len(file_pairs)} pares de arquivos .md nas subpastas.")

# Lista para armazenar TODOS os pares alinhados de todos os arquivos
aligned_segments_total = []

# Processar cada par de arquivos para segmentar e alinhar
for source_file, target_file in file_pairs:
    print(f"Processando conteúdo de par: {source_file} <-> {target_file}")

    try:
        with open(source_file, 'r', encoding='utf-8') as f:
            source_content = f.read()

        with open(target_file, 'r', encoding='utf-8') as f:
            target_content = f.read()

        # --- PASSO 1 & 2: Parsing e Segmentação Inicial por Parágrafos/Blocos ---
        # Usar split('\n\n') como segmentação inicial
        source_segments = [s.strip() for s in source_content.split('\n\n') if s.strip()]
        target_segments = [s.strip() for s in target_content.split('\n\n') if s.strip()]

        if not source_segments or not target_segments:
            print(f"  Pulando alinhamento para {source_file}: Um ou ambos os arquivos estão vazios após segmentação.")
            continue

        # --- PASSO 3: ALINHAMENTO - Lógica Central (Usando a função de similaridade) ---
        # Chamar a função de alinhamento DP
        current_file_aligned_pairs = align_segments_dp(
            source_segments,
            target_segments,
            segment_similarity, # Passa a função de similaridade
            GAP_PENALTY
        )

        # Adicionar os pares alinhados deste arquivo à lista total
        aligned_segments_total.extend(current_file_aligned_pairs)
        print(f"  Alinhamento concluído para {source_file}. Pares encontrados: {len(current_file_aligned_pairs)}")


    except Exception as e:
        print(f"Erro ao processar conteúdo de {source_file} e {target_file}: {e}")

# --- PASSO 4: Salvar em CSV (Fora do Loop) ---
# Depois de processar TODOS os pares de arquivos, salvar em um arquivo CSV.

print(f"\nProcessamento de conteúdo concluído. Total de pares de segmentos alinhados: {len(aligned_segments_total)}")

csv_file = "aligned_segments.csv"
try:
    with open(csv_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)

        # Escrever o cabeçalho
        writer.writerow(["Source Segment", "Target Segment"])

        # Escrever os pares alinhados
        for src_seg, tgt_seg in aligned_segments_total:
            writer.writerow([src_seg, tgt_seg])

    print(f"Pares alinhados salvos em {csv_file}")

except Exception as e:
    print(f"\nErro ao salvar arquivo CSV: {e}")