# Referência para perfis de provisionamento dinâmico

Você pode acessar a listagem de todos os perfis disponíveis através do caminho **Grid Menu > PAM Core > Provisionamento Dinâmico > Perfis.** Na tela, você encontrará as seguintes informações:

## Barra superior

| Campo                         | Descrição                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------- |
| **Mostrar filtros**     | Representado pelo botão em forma de lupa, esconde ou mostra as opções de filtro.   |
| **Atualizar**           | Representado pela seta em sentido anti-horário, atualiza as informações na tela.   |
| **Exibir ações**      | Representado pelos três pontos verticais, abre um menu suspenso com quatro opções. |
| **Novo perfil**         | Abre a janela**Perfil de provisionamento de credencial**.                       |
| **Imprimir relatório** | Imprime o relatório.                                                                 |
| **Exportar CSV**        | Exporte o relatório em formato `.CSV`.                                             |
| **Agendar relatório**  | Abre o formulário para agendar o relatório.                                         |

## Campos de busca

Ao clicar em **Mostrar filtros**, uma série de campos é mostrada. Eles são utilizados para refinar os resultados da sua busca. São eles:

| Campo                   | Descrição                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------- |
| **Código**       | Código do registro do perfil no senhasegura.                                          |
| **Identificador** | Nome do perfil indicado no momento do cadastro no senhasegura.                         |
| **Tipo**          | Menu suspenso. Permite escolher entre os tipos de template cadastrados no senhasegura. |
| **Ativo**         | Menu suspenso. Indica o status do perfil. Pode ser**Sim** ou **Não**.     |

Além dessas opções, você tem dois botões: **Filtrar**, que aplica os parâmetros que foram passados nos campos e **Limpar**, que limpa todos os parâmetros.

## Campos do relatório

Na listagem de perfis, você tem os seguintes campos:

* **Código**.
* **Identificador**.
* **Tipo**.
* **TTL padrão**: tempo de vida do perfil, em segundos.
* **Ativo**.
* A coluna **Ação** contém a opção **Alterar perfi**l, representada pelo ícone do papel e lápis.

## Janela  Perfil de provisionamento de credencial

| Campo                   | Descrição                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------- |
| **Identificador** | Nome para identificar o perfil de provisionamento dinâmico dentro do senhasegura. |
| **Ativo**         | Indica o status do perfil. Pode ser**Sim** ou **Não**.                |

### Seção Tipo

| Campo                                                                       | Descrição                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tipo                                                                        | Menu suspenso para selecionar o tipo de provisionamento dinâmico.                                                                                                                                                                                                                                                           |
| **Utilizar credencial cadastrada para acessar todos os dispositivos** | Caixa de seleção. Selecione-a se você deseja utilizar uma credencial já existente para acesso aos dispositivos utilizando o perfil de provisionamento dinâmico.                                                                                                                                                         |
| **Credencial de acesso cadastrada do sistema**                        | Menu suspenso para selecionar a credencial de acesso previamente cadastrada no PAM. Nota: esse menu só fica habilitado casovocê selecione a opção de**Utilizar credencial cadastrada para acessar todos os dispositivos**.                                                                                         |
| **Username da credencial**                                            | Campo de texto para indicar o nome de usuário da credencial que será utilizada no acesso aos dispositivos através do perfil de provisionamento dinâmico. Nota: esse campo de texto só fica habilitado caso vocênão selecione a opção de**Utilizar credencial cadastrada para acessar todos os dispositivos**. |

### Seção Modelo

| Campo                                         | Descrição                                                                                                                                        |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Template de criação da credencial** | Menu suspenso para selecionar o template que será responsável pela criação da credencial de provisionamento dinâmico.                         |
| **Ícone de adição**                  | Ao lado do menu suspensoTemplate de criação da credencial. Ao clicar no ícone você é direcionado para o formulário de cadastro de templates. |
| **Template de remoção da credencial** | Menu suspenso para selecionar o template que será responsável pela remoção da credencial de provisionamento dinâmico.                         |
| **Ícone de adição**                  | Ao lado do menu suspensoTemplate de remoção da credencial. Ao clicar no ícone você é direcionado para o formulário de cadastro de templates. |
| **Papéis**                             | Campo de texto para adicionar os papéis aos quais a credencial de provisionamento dinâmico estará atrelada. Separe os papéis com vírgulas.    |
| **Ícone do ponto de interrogação**   | Abre um modal de explicação sobre os papéis.                                                                                                    |
| **Botão de inserção numérica**      | Serve para determinar o tempo de vida, sem segundos, da credencial de provisionamento dinâmico. O valor padrão é 3600 segundos.                 |