# Vídeo da sessão

Este documento fornece informações sobre a tela do relatório **Vídeo da sessão** que exibe as informações da sessão remota e possibilita visualizar e baixar a gravação da sessão.

Para baixar o vídeo da sessão, ative o parâmetro **Habilitar o download do vídeo da sessão.** Saiba mais em Parâmetros do sistema - Sessão remota.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Auditoria > Sessões > Sessões remotas**.  
3. Na lista, identifique a sessão desejada, clique no **botão Ações** e selecione **Vídeo da sessão**.

---
## Seção Dados da sessão

| **Item** | **Descrição** |
| :---- | :---- |
| **Código** | Exibe um *hash* único de identificação da sessão realizada. |
| **Início** | Exibe a data e hora do início da sessão. |
| **Fim** | Exibe a data e hora do fim da sessão. |
| **Tipo** | Exibe o protocolo utilizado pela sessão. |
| **Host** | Exibe o endereço do IP do dispositivo acessado. |
| **Nome do usuário** | Exibe o nome de usuário da credencial utilizada. |
| **Mensagem de erro** | Exibe a mensagem de erro exibida ao usuário, se aplicável. |

## Seção Dados do usuário

| **Item** | **Descrição** |
| :---- | :---- |
| **Usuário** | Exibe o nome do usuário que realizou o acesso. |
| **IP do usuário** | Exibe o endereço do IP da máquina que realizou o acesso. |

## Seção Análise de vulnerabilidade 
???

## Seção Sessão

| **Item** | **Descrição** |
| :---- | :---- |
| **Tamanho** | Exibe o tamanho, em B, KB, MB ou GB, do arquivo de vídeo da sessão. |
| **Tempo** | Exibe a duração da sessão ativa. |
| **Vídeo** | Exibe o botão que abre o vídeo da sessão realizada . |
| **Gerar vídeo para download** | Exibe o botão que abre uma tela informando sobre o agendamento da geração do vídeo para download. |

:::(info) (**Info**)  
Assim que a conversão for finalizada, o download do vídeo é disponibilizado por email   
:::

:::(info) (**Info**)  
Se o Segura estiver sendo utilizado em um ambiente de cluster, a sincronização dos vídeos entre os membros pode levar alguns segundos ou minutos. Durante esse período, o vídeo pode não estar disponível para visualização.  
:::  
Após receber o email com o aviso da geração do vídeo, volte para a página de **Vídeo da sessão** para realizar o download do vídeo.

## Seção Vídeo da sessão

| **Item** | **Descrição** |
| :---- | :---- |
| **Tamanho** | Exibe o tamanho final , em KB, MB, B ou GB, do vídeo gerado. |
| **Tempo** | Exibe a duração total do vídeo gerado. |
| **Formato** | Exibe o formato do vídeo gerado. |
| **Download do vídeo** | Exibe o botão para realizar o download do vídeo. |

:::(warning) (**Cuidado**)  
Em sessões do tipo Database Proxy, ao executar consultas em tabelas do banco de dados, os resultados não serão exibidos nos vídeos. Essa medida visa proteger a segurança das informações. No log, será registrada apenas uma mensagem de sucesso, que pode incluir a quantidade de linhas retornadas pela consulta, ou uma mensagem de erro, caso a consulta não seja bem-sucedida.  
:::
