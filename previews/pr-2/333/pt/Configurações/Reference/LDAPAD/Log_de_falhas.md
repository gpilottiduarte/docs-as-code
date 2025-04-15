# Log de falhas

Neste documento, você encontrará um guia de referência para o **Log de falhas** dos servidores LDAP/AD.

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2.  No menu lateral, selecione **Autenticação \> Active Directory \> Log de falhas.**

## Barra superior

| Item  | Descrição |
| :---- | :---- |
| **Mostrar os filtros** | Representado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário. Atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Imprimir relatório** | Representado pelo ícone de impressora. Abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone de folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio. Abre a janela para efetuar o agendamento do relatório. |

## Campos de busca

Ao clicar em **Mostrar filtros**, uma série de campos é mostrada. Eles são utilizados para refinar os resultados da sua busca. São eles:

| Item | Descrição |
| :---- | :---- |
| **Cód. Erro** | Código de erro de autenticação. |
| **Usuário** | Usuário que realizou a tentativa de autenticação |
| **Data da tentativa** | Abre um calendário para inserir a data inicial do filtro de tentativas de autenticação. |
| **até** | Abre um calendário para inserir a data final do filtro de tentativas de autenticação. |

Além dessas opções, você tem dois botões: **Filtrar**, que aplica os parâmetros que foram passados nos campos e **Limpar**, que limpa todos os parâmetros.

## Campos do relatório

Na listagem de falhas de autenticação, você tem os seguintes campos:

* **Data:** data em que ocorreu a falha de autenticação.  
* **Cód. Erro.**  
* **Erro AD:** código do erro no AD.  
* **Usuário.**  
* **Mensagens:** mensagens de erros recebidas pelo senhasegura**.**  
* **Mensagem de erro:** mensagens de erros recebidas pelo senhasegura exibidas com tratamento para melhor legibilidade.