# Referência para autorização por aplicação

Você pode acessar o relatório de listagem de segredos através do caminho **Product Menu > DevOps Secret Manager > Aplicações > Autorização por aplicação**.

Na tela, você encontrará as seguintes informações.

## Barra superior

| Campo                    | Descrição                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **Mostrar filtros**     | Representado pelo ícone  de lupa, ocultaou mostra as opções de filtro.                     |
| **Atualizar**           | Representado pelo ícone de seta em sentido anti-horário, atualiza as informações na tela. |
| **Exibir ações**      | Representado pelo ícone de três pontos verticais, abre um menu suspenso.                    |
| **Nova aplicação**    | Abre a janela de cadastro para uma nova aplicação..                                         |
| **Imprimir relatório** | Identificado pelo ícone de impressora. Abre uma nova página para impressão do relatório.  |
| **Exportar CSV**        | Identificado pelo ícone de folha de papel, baixa o relatório.                               |
| **Agendar relatório**  | Identificado pelo ícone de relógio, abre o formulário **Agendar relatório.**                   |

Ao clicar em **Mostrar filtros**, uma série de campos é mostrada. Eles são utilizados para refinar os resultados da sua busca por:

| Campo                    | Descrição                                                                                                                                                                                    |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Aplicação**         | Nome da aplicação.                                                                                                                                                                           |
| **Cód. Autorização** | Código da autorização.                                                                                                                                                                      |
| **Nome**                | Nome da autorização.                                                                                                                                                                         |
| **Sistema**             | Este campo é utlizado para segmentação dentro do Segura DSM. Você pode cadastrar sistemas através de **Product Menu > Configurações > Parâmetros de sistema > Segmentação > Sistemas**. |
| **Ambiente**            | Este campo é utlizado para segmentação dentro do Segura DSM. Você pode cadastrar sistemas através de **Product Menu > Configurações > Parâmetros de sistema > Segmentação > Sistemas**. |
| **Data de criação**   | Abre um calendário para que você escolha a data de criação. Isso indicará que serão filtradas todas as autorizações criadas a partir desta data.                                       |
| **até**                | Abre um calendário para que você escolha uma data final para o filtro. Isso indicará que serão filtradas todas as autorização criadas até esta data.                                    |
| **Ativo**               | Indica o estado da autorização. As opções disponíveis são: **Sim** ou **Não**.                                                                                                                     |

Além dessas opções, você tem dois botões: **Filtrar**, que aplica os parâmetros que foram passados nos campos e **Limpar**, que limpa todos os parâmetros.

As autorizações são agrupadas de acordo com a aplicação à qual elas pertencem. Quando uma aplicação possuir mais de uma autorização, elas serão listadas abaixo do nome da aplicação.

:::(info) (Info)
O nome da aplicação é clicável. Caso você clique no nome da aplicação, será direcionado para a janela **Configuração de aplicação** no modo de edição.
:::

## Janela Autorização da aplicação

A janela **Autorização da aplicação** será mostrada sempre que você for registrar ou alterar uma autorização por aplicação. Ela contém os seguintes campos:

### Aba Segurança

| Campo                                                 | Descrição                                                                                                                                                                                                     |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Authorized resources**                        | Três caixas de seleção: **Aplicação, CI/CD e Gestão de segredos**. Indica quais os recursos que aquela aplicação terá acesso.                                                                    |
| **Data/Hora Validade**                               | Dois campos. O primeiro abre um calendário para que seja indicada a data de expiração dessa autorização. O segundo abre um menu suspenso para que seja indicada a hora de expiração dessa autorização. |
| **Ativo**                                            | Indica o estado da autorização. As opções disponíveis são: **Sim** ou **Não**.                                                                                                                                      |
| **Ativar criptografia de informações sensíveis?** | Indica se as informações marcadas como sensíveis sejam criptografadas pelo Segura. As opções disponíveis são **Sim** ou **Não**.                                                                            |
| **Habilitar criação de aplicações DSM?**         | Indica se a aplicação será capaz de criar aplicações DSM. As opções disponíveis são **Sim** ou **Não**.                                                                                                          |
| **Ambiente**                                         | Menu suspenso para seleção do ambiente da autorização.                                                                                                                                                      |
| **Sistema**                                          | Menu suspenso para seleção do sistema da autorização.                                                                                                                                                       |
| **IPs permitidos**                                   | Campo para indicar quais serão os endereços de IP permitidos na autorização. Preencha o campo com `*` para permitir qualquer endereço.                                                                        |
| **Referers permitidos**                              | Campo para indicar quais serão os referers HTTP permitidos na autorização. Preencha com um a lista vazia (deixe o campo em branco) para permitir qualquer *referer*.                                          |
| **Fingerprint do certificado**                       | Na seção **Validação de certificados**. Permite que você insira o *fingerprint* do certificado.                                                                                                          |

### Aba Secrets

Ao clicar na aba **Secrets**, você tem o ícone de soma ao lado da palavra **Secrets**. Ao clicar nesse ícone, você é direcionado para o modal **Secrets**, onde pode adicionar um segredo à autorização.

No modal **Secrets**, você tem os seguintes campos:

| Campo             | Descrição                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| **Código** | Código do secret. Pode ser usado para filtrar os secrets de acordo com o código ou trechos do código. |
| **Secret**  | Nome do secret. Pode ser usado para filtrar os secrets de acordo com o nome ou trechos do nome.          |
| **Filtrar** | Botão para aplicar os parâmetros do filtro.                                                            |
| **Limpar**  | Botão para limpar os parâmetros do filtro.                                                             |

Abaixo, você tem a listagem dos secrets de acordo com os parametros passados.

| Campo                   | Descrição                     |
| ----------------------- | ------------------------------- |
| **Caixa de seleção** | Usado para selecionar o secret. |
| **Código**            | Código do secret.              |
| **Secret**             | Nome do secret.                 |

Abaixo da listagem, hádois botões: **Cancelar**, que cancela a busca e fecha o modal, e **Adicionar**, que adiciona os secrets que foram selecionados através da caixa de seleção. Os segredos adicionados através deste modal serão associados à autorização e exibidos na listagem da aba Secrets.

### Aba Chaves criptográficas

Ao clicar na aba **Chaves criptográficas**, você tem o ícone de soma ao lado da palavra **Chaves criptográficas**. Ao clicar nesse ícone, você é direcionado para o modal **Chaves criptográficas**, onde pode adicionar um segredo à autorização.

No modal **Chaves criptográficas**, você tem os seguintes campos:

| Campo                         | Descrição                                                       |
| ----------------------------- | ----------------------------------------------------------------- |
| **Código**                  | Código de registro da chave criptográfica no Segura.       |
| **Chave criptográfica**     | Nome da chave criptográfica, conforme registrada no Segura. |
| **Algoritmo criptográfico** | Algoritmo utilizado na chave criptográfica.                      |

Abaixo, você tem a listagem das chaves criptográficas de acordo com os parâmetros passados.

| Campo                         | Descrição                                          |
| ----------------------------- | ---------------------------------------------------- |
| **Caixa de seleção**       | Usado para selecionar a chave criptográfica.        |
| **Código**                  | Código da chave criptográfica.                     |
| **Chave de criptografia**    | Nome da chave criptográfica.                        |
| **Algoritmo criptográfico** | Algoritmo utilizado por aquela chave criptográfica. |

Abaixo da listagem você tem dois botões: **Cancelar**, que cancela a busca e fecha o modal e **Adicionar**, que adiciona as chaves criptográficas que foram selecionados através da caixa de seleção. Os segredos adicionados através deste modal serão associados à autorização e  exibidos na listagem da aba **Chaves criptográficas**.

## Janela de view authorization

Na listagem das autorizações por aplicação, é possível visualizar detalhes sobre essa autorização. Para isso, na coluna **Ação**, clique no ícone de chave para abrir a janela de **Autorização da aplicação** em modo de visualização. Nesta janela, você tem os seguintes campos:

| Campo                          | Descrição                                                                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Método de autenticação** | Informa o método de autentição da autorização.                                                                                      |
| **Aplicação**               | Informa a qual aplicação aquela autorização está associada.                                                                         |
| **Unique key**                | Valor disponível apenas quando a aplicação está configurada para utilizar a autenticação AWS e possui pelo menos um ARN associado. |
| **Cliente ID**                | Identificação do cliente. Para visualizar, clique no ícone de olho.                                                                   |
| **Cliente secret**            | Secret do cliente. Para visualizar, clique no ícone de olho.                                                                            |

### Seção Segredos

| Campo           | Descrição                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------- |
| **Código**    | Código do segredo associado à autorização.                                                |
| **Nome**       | Nome do segredo associado à autorização.                                                   |
| **Identidade** | A identidade do secret. Ao criar um segredo, é obrigatório adicionar o nome e a identidade. |
| **Lupa**       | O ícone de lupa abre a janela para pedir autorização de visualização do segredo.         |