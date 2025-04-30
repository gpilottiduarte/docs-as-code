import os
import re

# --- Configurações ---
# Defina o diretório raiz onde seus arquivos Markdown estão localizados
# Pode ser a pasta 'en' ou a pasta 'pt' do seu corpus.
corpus_root_dir = './4.0/en' # Ajuste para o caminho correto

# --- Função para limpar o texto para busca ---
def clean_text_for_search(text):
    """Remove tags HTML e converte para minúsculas para facilitar a busca."""
    if not isinstance(text, str):
        return ""
    # Remover tags HTML (como as <p> e <img>)
    text = re.sub(r'<.*?>', ' ', text)
    # Converter para minúsculas
    text = text.lower()
    return text

# --- Função para buscar o termo e extrair contexto ---
def find_term_in_file(filepath, search_term):
    """
    Busca um termo em um arquivo e retorna as ocorrências com contexto.
    Retorna uma lista de tuplas: (linha_numero, contexto_da_linha).
    """
    occurrences = []
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            # Ler o arquivo linha por linha
            for line_num, line in enumerate(f, 1):
                # Limpar a linha para a busca (remover tags, minúsculas)
                cleaned_line = clean_text_for_search(line)

                # Usar regex para encontrar o termo, garantindo limites de palavra
                # re.escape() lida com caracteres especiais no termo de busca
                # \b garante que ele casa palavras inteiras
                # re.IGNORECASE torna a busca case-insensitive
                if re.search(r'\b' + re.escape(search_term.lower()) + r'\b', cleaned_line):
                    # Encontrou o termo na linha limpa.
                    # Adicionar a linha original (sem limpeza) e o número da linha.
                    occurrences.append((line_num, line.strip())) # strip() remove espaços/quebras de linha extras

    except Exception as e:
        print(f"Erro ao ler arquivo {filepath}: {e}")

    return occurrences

# --- Lógica Principal do Concordanciador ---
if __name__ == "__main__":
    print("--- Concordanciador de Corpus Markdown ---")

    # Obter o termo de busca do usuário
    search_term = input(f"Digite o termo ou frase para buscar no diretório '{corpus_root_dir}': ")

    if not search_term:
        print("Termo de busca não pode ser vazio.")
        exit()

    all_occurrences = []

    # Percorrer o diretório do corpus recursivamente
    print(f"Buscando por '{search_term}' em {corpus_root_dir}...")
    for root, dirs, files in os.walk(corpus_root_dir):
        for filename in files:
            if not filename.endswith('.md'):
                continue # Ignorar arquivos que não são Markdown

            filepath = os.path.join(root, filename)

            # Encontrar ocorrências neste arquivo
            occurrences_in_file = find_term_in_file(filepath, search_term)

            # Adicionar as ocorrências encontradas (incluindo o caminho do arquivo)
            for line_num, context in occurrences_in_file:
                all_occurrences.append((filepath, line_num, context))

    print(f"\n--- Resultados da Busca para '{search_term}' ---")
    if all_occurrences:
        print(f"Total de ocorrências encontradas: {len(all_occurrences)}")
        print("-" * 30)
        for filepath, line_num, context in all_occurrences:
            # Exibir o caminho do arquivo, número da linha e o contexto
            print(f"Arquivo: {filepath}")
            print(f"Linha {line_num}: {context}")
            print("-" * 30)
    else:
        print("Nenhuma ocorrência encontrada.")

    print("--- Fim da Busca ---")
