# Tokens de autenticação de usuários

Este documento apresenta uma visão geral da funcionalidade **Tokens de autenticação de usuários**.

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados,e selecione **Configurações**
2. No menu lateral, selecione **Autenticação > Tokens de autenticação de usuários**.

## Barra superior

| Item                     | Descrição                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| **Mostrar os filtros**  | Representado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela.          |
| **Atualizar**           | Representado pelo ícone da seta no sentido anti-horário. Atualiza a página.                   |
| **Exibir ações**      | Representado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Imprimir relatório** | Representado pelo ícone de impressora. Abre uma nova página para impressão do relatório.     |
| **Exportar CSV**        | Representado pelo ícone de folha de papel, baixa o relatório.                                  |
| **Agendar relatório**  | Representado pelo ícone do relógio. Abre a janela para efetuar o agendamento do relatório.    |

## Campos de busca

| Item                       | Descrição                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Usuário**         | Utilizado para pesquisar o token pelo nome pessoal do usuário.                                                                                                                                                                                                                                                                                                                    |
| **Nome do usuário** | Utilizado para pesquisar o token pelo nome de usuário da pessoa.                                                                                                                                                                                                                                                                                                                  |
| **Validado**         | Utilizado para pesquisar o token pela validação. Pode ser**Todos** (para mostrar todos os tokens), **Sim** (sim, para buscar apenas tokens validados) ou **Não** (para buscar apenas por tokens não validados). **Nota**: um usuário é considerado como validado quando este fez o procedimento de geração do token e o validou com o código gerado. |

## Campos do relatório

Os resultados são exibidos em formato de lista na tela, com colunas nomeadas conforme os campos correspondentes. A lista apresenta informações que não constam nos campos de busca:

* **Usuário**.
* **Nome do usuário.**
* **Definido em**: data da configuração de autenticação.
* **Validado**.
* **Confiar no IP**: endereço IP de onde o usuário pode logar.
* **Confiar** até: data definida conforme configuração nos parâmetros do sistema.
* Na coluna **Ação**, você tem a opção de **Excluir Token** clicando na opção representada pelo ícone da lixeira.

## Rodapé

No canto inferior direito, você tem mais duas opções:

| Item                                     | Descrição                                                                                               |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Excluir Token**                       | Abre o modal de confirmação para exclusão do token.                                                    |
| **Excluir tokens e inativar usuários** | Abre o modal de confirmação para exclusão do registro e a inativação do usuário vinculado ao token. |