# Referência para aplicações

Acesse o relatório de listagem de segredos através do caminho **Product Menu > DevOps Secret Manager > Aplicações > Aplicações**.

Na tela **Aplicações**, você encontrará as seguintes informações:

## Barra superior

| Item                          | Descrição                                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Mostrar filtros**     | Representado pelo ícone de lupa, oculta ou mostra as opções de filtro.                                        |
| **Atualizar**           | Representado pela ícone de seta em sentido anti-horário, atualiza as informações na tela.                    |
| **Exibir ações**      | Representado pelo ícone de três pontos verticais, abre um menu suspenso com as opções para as **Aplicações**. |
| **Novo**                | Abre a janela de cadastro de novo segredo.                                                                       |
| **Imprimir relatório** | Identificado pelo ícone de impressora. Abre uma nova página para impressão do relatório.                     |
| **Exportar CSV**        | Identificado pelo ícone de folha de papel, baixa o relatório.                                                  |
| **Agendar relatório**  | Identificado pelo ícone de relógio, abre o formulário Agendar relatório.                                      |

Ao clicar em **Mostrar filtros**, uma série de campos é mostrada. Eles são utilizados para refinar os resultados da sua busca por:

| Item                                | Descrição                                                                                                                                                         |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Código**                   | Código da aplicação no Segura.                                                                                                                              |
| **Nome**                      | Nome da aplicação.                                                                                                                                                |
| **Sistema**                   | Sistema da aplicação.                                                                                                                                             |
| **Ambiente**                  | Ambiente da aplicação.                                                                                                                                            |
| **Linha de negócios**        | Menu suspenso com as opções de linhas negócios, conforme foram cadastradas no DSM.                                                                               |
| **Tipo de aplicação**       | Menu suspenso com as opções de tipos de aplicação, conforme foram cadastradas no DSM.                                                                           |
| **Tags**                      | Tags inseridas na aplicação no momento do registro.                                                                                                               |
| **Método de autenticação** | Menu suspenso com os métodos de autenticação disponíveis no Segura. As opções disponíveis são: S*em autenticação, OAuth 1.0, OAuth 2.0* e *AWS*. |
| **Ativo**                     | Menu suspenso com o estado da aplicação no Segura. As opções disponíveis são: **Sim** ou **Não**.                                                     |
| **Criada em**                 | Abre um calendário para que você escolha a data de criação. Isso indicará que serão filtradas todas as aplicações criadas a partir desta data.              |
| **até**                      | Abre um calendário para que você escolha uma data final para o filtro. Isso indicará que serão filtradas todas as aplicações criadas até esta data.          |

Além dessas opções, você tem dois botões: **Filtrar**, que aplica os parâmetros que foram passados nos campos e **Limpar**, que limpa todos os parâmetros.

Na listagem de segredos, você ainda tem os seguintes campos:

* **Descrição**: descrição da aplicação.
* Coluna **Ação**: exibe as opções para visualizar as autorizações dessa aplicação, alterar essa aplicação e visualizar essa aplicação.

## Janela Configuração da aplicação

A janela **Configuração da aplicação** será mostrada sempre que você for registrar ou alterar uma aplicação. Ela contém os seguintes campos:

### Aba configurações

| Campo                               | Descrição                                                                                                                                                |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nome da aplicação**       | Campo de texto para que inserirum nome para identificar a sua aplicação.                                                                                 |
| **Método de autenticação** | Menu suspenso com as possibilidades de métodos de autenticação.  As opções disponíveis são:*Sem autenticação, OAuth 1.0, OAuth 2.0* ou *AWS*. |
| **Linha de negócios**        | Menu suspenso com as linha de negócios disponíveis para a aplicação. Você pode cadastrar as suas linhas de negócios.                                 |
| **Tipo de aplicação**       | Menu suspenso com os tipos de aplicação disponíveis para a aplicação. Você pode cadastrar os seus tipos de aplicação.                              |
| **Ativo**                     | Seletor de estado para criação ou alteração da aplicação.  As opções disponíveis são: **Sim** ou **Não.**                          |
| **Tags**                      | Campo de texto para inserção de tags. Ajudam a organizar e filtrar as aplicações.                                                                      |
| **Descrição**               | Campo de texto para inserção da descrição da aplicação.                                                                                              |
| **Amazon AWS ARNs**           | Utilizado quando o método de autenticação for o AWS. Insira aqui o ARN da credencial AWS.                                                               |

### Aba provisionamento automático

| Campo                                             | Descrição                                                                                                                                          |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ativo**                                   | Indica o estado do provisionamento automático. As opções disponíveis são:**Sim** ou **Não**.                                      |
| **Perfil de provisionamento em cloud**      | Indica quais perfis de nuvem podem ser usados na aplicação. Disponível apenas se o provisionamento automático estiver marcado como**Sim**. |
| **Perfil de provisionamento de credencial** | Indica quais perfis de credenciais podem ser usados na aplicação. Disponível apenas se o provisionamento automático estiver marcado como **Sim**. |