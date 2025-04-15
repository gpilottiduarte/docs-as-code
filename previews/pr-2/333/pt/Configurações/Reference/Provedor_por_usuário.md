# Provedor por usuário

Este documento apresenta uma visão geral da funcionalidade **Provedor por usuário**.

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique em Grid Menu, representado pelos nove quadrados, e selecione Configurações.
2. No menu lateral, selecione Autenticação > Provedor por usuário.

## Barra superior

| Item                     | Descrição                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| **Mostrar os filtros**  | Representado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela.          |
| **Atualizar**           | Representado pelo ícone da seta no sentido anti-horário. Atualiza a página.                   |
| **Exibir ações**      | Representado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Novo**                | Abre o formulário **Novo provedor por usuário**.                                              |
| **Imprimir relatório** | Representado pelo ícone de impressora. Abre uma nova página para impressão do relatório.     |
| **Exportar CSV**        | Representado pelo ícone de folha de papel, baixa o relatório.                                  |
| **Agendar relatório**  | Representado pelo ícone do relógio. Abre a janela para efetuar o agendamento do relatório.    |

## Campos de busca


| Item                  | Descrição                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Código**          | Utilizado para buscar a configuração (provedor específico para um usuário específico) pelo seu número de identificação no sistema. |
| **Usuário**         | Utilizado para buscar a configuração pelo nome próprio do usuário.                                                                     |
| **Nome do usuário** | Utilizado para buscar a configuração pelo nome de usuário da pessoa.                                                                    |
| **Provedor**         | Utilizado para buscar a configuração pelo provedor configurado.                                                                          |
| **Ativo**            | Utilizado para pesquisar a configuração pelo seu status no sistema. Pode ser **Sim** ou **Não**.                                      |

## Campos do relatório

Os resultados são exibidos em formato de lista na tela, com colunas nomeadas conforme os campos correspondentes. A lista apresenta informações que não constam nos campos de busca:

* **Código**.
* **Usuário**.
* **Nome do usuário.**
* **Provedor**.
* **Ordem**: o número representa a posição do provedor para utilização pelo sistema para autenticar o usuário específico.
* **Ativo**.
* A coluna **Ação** contém duas opções:
  * **Excluir**: Representada pelo ícone da lixeira, abre uma mensagem pop-up para confirmar a exclusão da configuração.
  * **Editar**: representada pelo ícone de lápis e papel, abre o formulário para definir o provedor e a ordem de uso para um usuário específico.