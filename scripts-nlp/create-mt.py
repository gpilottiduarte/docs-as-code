import csv
import os
import sys
from translate.storage import tmx
from translate.storage.tmx import tmxfile
from translate.storage.tmx import tmxunit

# Print version information for debugging
print(f"Python version: {sys.version}")
print(f"Translate-toolkit version (if available): {getattr(tmx, '__version__', 'unknown')}")

# --- Configurações ---
# Nome do arquivo CSV de entrada gerado pelo script de alinhamento
input_csv_file = "aligned_segments.csv"

# Nome do arquivo TMX de saída
output_tmx_file = "my_translation_memory_from_csv.tmx"

# Códigos de idioma para os segmentos fonte e alvo no TMX
source_lang_code = 'en'
target_lang_code = 'pt-BR'

# --- Lógica Principal: Ler CSV e Gerar TMX ---
if __name__ == "__main__":
    print("--- Conversor de CSV Alinhado para TMX ---")

    # Lista para armazenar os pares de segmentos lidos do CSV
    aligned_segments_from_csv = []

    # Verificar se o arquivo CSV de entrada existe
    if not os.path.exists(input_csv_file):
        print(f"Erro: Arquivo CSV de entrada '{input_csv_file}' não encontrado.")
        print("Execute o script de alinhamento primeiro para gerar este arquivo.")
        exit()

    # Ler os pares de segmentos do arquivo CSV
    print(f"Lendo pares alinhados do arquivo '{input_csv_file}'...")
    try:
        with open(input_csv_file, 'r', newline='', encoding='utf-8') as f:
            reader = csv.reader(f)
            header = next(reader)  # Pular a linha de cabeçalho

            for row in reader:
                if len(row) == 2:
                    src_seg, tgt_seg = row
                    aligned_segments_from_csv.append((src_seg, tgt_seg))
                else:
                    print(f"Aviso: Linha ignorada no CSV devido a formato incorreto: {row}")

        print(f"Lidos {len(aligned_segments_from_csv)} pares de segmentos do CSV.")

    except Exception as e:
        print(f"Erro ao ler arquivo CSV '{input_csv_file}': {e}")
        exit()

    # Gerar o arquivo TMX a partir dos pares alinhados
    print(f"Gerando arquivo TMX '{output_tmx_file}'...")
    try:
        # Inicializar o arquivo TMX
        tm = tmxfile()
        
        # Tentar definir idiomas (verifique os métodos disponíveis)
        # Algumas versões usam header.setsourcelanguage, outras usam diretamente setsourcelanguage
        try:
            tm.setsourcelanguage(source_lang_code)
            tm.settargetlanguage(target_lang_code)
            print("Idiomas definidos diretamente no arquivo TMX.")
        except AttributeError:
            try:
                if hasattr(tm, 'header') and hasattr(tm.header, 'setsourcelanguage'):
                    tm.header.setsourcelanguage(source_lang_code)
                    tm.header.settargetlanguage(target_lang_code)
                    print("Idiomas definidos no cabeçalho do arquivo TMX.")
                else:
                    print("Aviso: Não foi possível definir idiomas no arquivo TMX.")
            except Exception as e:
                print(f"Aviso: {e}")

        # Exibir métodos disponíveis para debug
        print("\nMétodos disponíveis em tmxfile:")
        for method in dir(tm):
            if not method.startswith('__'):
                print(f"  - {method}")

        # Adicionar unidades de tradução
        for idx, (src_seg, tgt_seg) in enumerate(aligned_segments_from_csv):
            # Usar tmxunit diretamente em vez de criar via método
            tu = tmxunit(src_seg)  # Inicializa com o texto fonte
            
            # Tentar diferentes métodos para definir idioma fonte e texto fonte
            try:
                tu.setsource(src_seg, source_lang_code)
            except Exception as e1:
                try:
                    tu.source = src_seg
                    tu.sourcelang = source_lang_code
                except Exception as e2:
                    print(f"Aviso: Não foi possível definir idioma fonte: {e1} / {e2}")
            
            # Tentar diferentes métodos para definir idioma alvo e texto alvo
            try:
                tu.settarget(tgt_seg, target_lang_code)
            except Exception as e1:
                try:
                    tu.target = tgt_seg
                    tu.targetlang = target_lang_code
                except Exception as e2:
                    print(f"Aviso: Não foi possível definir idioma alvo: {e1} / {e2}")
            
            # Adicionar a unidade de tradução ao TMX
            tm.addunit(tu)
            
            # Mostrar progresso para arquivos grandes
            if idx % 1000 == 0 and idx > 0:
                print(f"Processados {idx} de {len(aligned_segments_from_csv)} segmentos...")

        # Tentar diferentes métodos para salvar o arquivo
        try:
            # Método 1: Abrir arquivo e usar serialize
            with open(output_tmx_file, 'wb') as file_handle:
                tm.serialize(file_handle)
            print(f"Método 1: Arquivo TMX salvo com sucesso.")
        except Exception as e1:
            print(f"Método 1 falhou: {e1}")
            try:
                # Método 2: Usar save em alguns casos
                tm.savefile(output_tmx_file)
                print(f"Método 2: Arquivo TMX salvo com sucesso.")
            except Exception as e2:
                print(f"Método 2 falhou: {e2}")
                try:
                    # Método 3: Importações alternativas e salvamento
                    from translate.storage.base import savefile
                    savefile(tm, output_tmx_file)
                    print(f"Método 3: Arquivo TMX salvo com sucesso.")
                except Exception as e3:
                    print(f"Todos os métodos de salvamento falharam: {e3}")
                    raise

        print(f"Memória de Tradução salva com sucesso em '{output_tmx_file}'")

    except Exception as e:
        print(f"\nErro ao gerar arquivo TMX '{output_tmx_file}': {e}")
        # Print traceback para mais detalhes sobre o erro
        import traceback
        traceback.print_exc()

    print("--- Fim da Conversão ---")