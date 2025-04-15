# Servidores

Neste documento, você vai encontrar todas as informações sobre o relatório **Servidores de backup**, que exibe informações sobre os servidores e diretórios de backup.

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelo nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Backup \> Servidores**.

## Barra superior

| Item | Descrição |
| :---- | :---- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Novo** | Representado pelo ícone de soma, abre a tela **Servidor de Backup** que realiza o cadastro de um novo servidor de backup. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio, abre o formulário **Agendar relatório**). |

## Campos de busca

| Item | Descrição |
| :---- | :---- |
| **Código** | Campo de texto. Filtra pelo código do servidor no senhasegura. |
| **Modo** | Menu suspenso. Filtra pelo modo de backup no senhasegura. As opções são **Diretório Local** ou **SSH \- RSYNC**. |
| **Host** | Campo de texto. Filtra pelo host do servidor de backup. |
| **Porta** | Campo de texto. Filtra pela porta do servidor de backup. |
| **Path** | Campo de texto. Filtra pelo caminho do diretório no servidor de backup. |
| **Ativo** | Menu suspenso. Filtra pelo status do servidor de backup no senhasegura. As opções são **Sim** ou **Não**. |

## Campos do relatório

* **Código.**  
* **Modo.**  
* **Host.**  
* **Porta.**  
* **Path.**  
* **Ativo.**  
* Na coluna **Ação**, você tem a opção **Alterar,** representada pelo ícone de lápis e papel, que abre a janela **Servidor de Backup** em modo de edição.

## Janela Servidor de Backup

Ao clicar em **Novo**, na barra superior ou ao clicar em **Alterar** na coluna **Ação**, você é direcionado para a janela **Servidor de Backup**, que contém estes campos:

| Item | Descrição |
| :---- | :---- |
| **Modo** | Menu suspenso. Seleciona o modo de backup. As opções são **Diretório Local** ou **SSH \- RSYNC**. |
| **Ativo** | *Radio button*. Seleciona o status do servidor de backup no senhasegura. As opções são **Sim** ou **Não**. |
| **Caminho Diretório** | Campo de texto. Indique o caminho do diretório de backup no servidor de backup. |
| **Host** | Campo de texto. Apenas para a opção SSH \- RSYNC. Indique o servidor onde os arquivos serão salvos |
| **Porta** | Campo de texto. Apenas para a opção SSH \- RSYNC. Indique a porta SSH do servidor |
| **Credencial para autenticação** | Menu suspenso. Apenas para a opção SSH \- RSYNC. Indique a credencial para acessar o servidor remoto |

