import os
import re
from collections import Counter

# --- Configurações ---
# Defina o diretório raiz onde seus arquivos Markdown estão localizados
# Pode ser a pasta 'en' ou a pasta 'pt' do seu corpus.
corpus_root_dir = './4.0/en' # Ajuste para o caminho correto

# Defina o tamanho dos n-gramas (ex: 2 para bigramas, 3 para trigramas)
N_GRAM_SIZE = 3 # Ajuste conforme necessário

# Número de n-gramas mais frequentes para exibir
TOP_N_NGRAMS = 50 # Ajuste conforme necessário

# --- Função para limpar e tokenizar o texto ---
def clean_and_tokenize(text):
    """
    Remove tags HTML, pontuação, converte para minúsculas e divide o texto em palavras.
    """
    if not isinstance(text, str):
        return []
    # Remover tags HTML e URLs
    text = re.sub(r'<.*?>', ' ', text)
    text = re.sub(r'http[s]?://\S+', ' ', text)
    text = re.sub(r'cdn.document360.io/\S+', ' ', text)

    # Converter para minúsculas
    text = text.lower()
    # Substituir pontuação e caracteres não alfanuméricos por espaço
    text = re.sub(r'[\W_]+', ' ', text)
    # Dividir em palavras e remover strings vazias resultantes de múltiplos espaços
    words = text.split()
    return words

# --- Função para gerar n-gramas a partir de uma lista de palavras ---
def generate_ngrams(words, n):
    """
    Gera uma lista de n-gramas a partir de uma lista de palavras.
    """
    if len(words) < n:
        return []
    # Cria n-gramas como tuplas de palavras
    # Ex: words = ['a', 'b', 'c', 'd'], n=2 -> [('a', 'b'), ('b', 'c'), ('c', 'd')]
    # Ex: words = ['a', 'b', 'c', 'd'], n=3 -> [('a', 'b', 'c'), ('b', 'c', 'd')]
    return [tuple(words[i:i+n]) for i in range(len(words) - n + 1)]

# --- Lógica Principal do Buscador de N-gramas ---
if __name__ == "__main__":
    print("--- Buscador de N-gramas de Corpus Markdown ---")

    all_ngrams = []

    # Percorrer o diretório do corpus recursivamente
    print(f"Processando arquivos em '{corpus_root_dir}' para encontrar {N_GRAM_SIZE}-gramas...")
    for root, dirs, files in os.walk(corpus_root_dir):
        for filename in files:
            if not filename.endswith('.md'):
                continue # Ignorar arquivos que não são Markdown

            filepath = os.path.join(root, filename)

            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Limpar e tokenizar o conteúdo do arquivo
                words = clean_and_tokenize(content)

                # Gerar n-gramas para este arquivo
                ngrams_in_file = generate_ngrams(words, N_GRAM_SIZE)

                # Adicionar os n-gramas encontrados à lista total
                all_ngrams.extend(ngrams_in_file)

            except Exception as e:
                print(f"Erro ao processar arquivo {filepath}: {e}")

    # Contar a frequência de cada n-grama
    ngram_counts = Counter(all_ngrams)

    print(f"\n--- {TOP_N_NGRAMS} N-gramas ({N_GRAM_SIZE} palavras) Mais Frequentes ---")

    if ngram_counts:
        # Obter os n-gramas mais comuns e suas contagens
        top_ngrams = ngram_counts.most_common(TOP_N_NGRAMS)

        # Imprimir os resultados
        for ngram_tuple, count in top_ngrams:
            # Converter a tupla de volta para uma string para exibição
            ngram_string = " ".join(ngram_tuple)
            print(f"'{ngram_string}': {count}")

    else:
        print("Nenhum n-grama encontrado (verifique N_GRAM_SIZE e o conteúdo dos arquivos).")

    print("--- Fim da Análise ---")
