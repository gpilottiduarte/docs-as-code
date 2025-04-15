# Reference for credentials

Você pode acessar o relatório de listagem de credenciais através do caminho **Grid Menu > PAM Core > Provisionamento dinâmico > Credenciais.**

## Barra superior

| Item                          | Descrição                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------------ |
| **Mostrar os filtros**  | Identificado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela.          |
| **Atualizar**           | Identificado pelo ícone da seta no sentido anti-horário. Atualiza a página.                   |
| **Exibir ações**      | Identificado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Imprimir relatório** | Identificado pelo ícone de impressora. Abre uma nova página para impressão do relatório.     |
| **Exportar CSV**        | Identificado pelo ícone de folha de papel, baixa o relatório.                                  |
| **Agendar relatório**  | Identificado pelo ícone do relógio, abre a janela para efetuar o agendamento do relatório.    |

## Campos de busca

Ao clicar em **Mostrar filtros**, uma série de campos é mostrada. Eles são utilizados para refinar os resultados da sua busca. São eles:

| Item                             | Descrição                                                                                                                  |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Código**                | Filtra pelo código da credencial de provisionamento dinâmico.                                                              |
| **Dispositivo**            | Filtra pelo nome do dispositivo atrelado à credencial de provisionamento dinâmico.                                         |
| **Nome do usuário**       | Filtra pelo nome do usuário da credencial utilizada para acessar os dispositivos.                                           |
| **Tipo de credencial**     | Menu suspenso. Filtra de acordo com com o tipo de usuário da credencial.                                                    |
| **Informação adicional** | Filtra de acordo com as informações adicionais passadas à credencial de provisionamento dinâmico.                        |
| **Tipo de dispositivo**    | Menu suspenso. Filtra de acordo com o tipo de dispositivo.                                                                   |
| **Modelo**                 | Filtro de acordo com o modelo utilizado no provisionamento dinâmico.                                                        |
| **Fabricante**             | Menu suspenso. Filtra de acordo com fabricante do dispositivo.                                                               |
| **Domínio**               | Menu suspenso. Filtra de acordo com os domínios cadastrados no senhasegura.                                                 |
| **Situação**             | Menu suspenso. Filtra de acordo com a situação da credencial no senhasegura. Pode ser**Ativo** ou **Inativa**. |

Além dessas opções, você tem dois botões: **Filtrar**, que aplica os parâmetros que foram passados nos campos e **Limpar**, que limpa todos os parâmetros.

## Campos do relatório

Os resultados da listagem serão agrupados de acordo com o dispositivo o qual a credencial está atrelada. Dessa forma, os resultados serão exibidos em listagem, agrupados de acordo com o dispositivo, conforme abaixo:

* **Código**.
* **Tipo**: mesmo que **Tipo da credencial.**
* **Nome do usuário.**
* **Adicional**: informações adicionais da credencial.
* **Domínio**.
* **Tags**: tags relacionadas com a credencial.