# Chaves de acesso

Neste documento, você vai encontrar todas as informações sobre a tela **Chaves de acesso** do **MySafe** que exibe um relatório com as chaves de acesso criadas para integrar sua aplicação ao **MySafe**.


:::(Info) (Info)
Para mais informações sobre as APIs do **MySafe**, acesse a documentação APIs [MySafe](/v3-33/docs/pt/api-mysafe).
:::

## **Caminho para acesso**

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **MySafe**.  
2. No menu lateral, selecione **Integrações > Chaves de acesso**.

## Barra superior


| Item | Descrição |
| --- | --- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página.|
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Nova** | Representado pelo sinal de adição, abre a tela **[Nova chave de acesso](/v3-33/docs/pt/mysafe-access-keys-screen#tela-novaatualizar-chave-de-acesso)** para criar uma nova autorização de chave de acesso|
| **Imprimir relatório** |Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** |Representado pelo ícone do relógio, abre a tela **[Agendar relatório](/v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports)**. |

## Campos de busca


| Item | Descrição |
| --- | --- |
| **Aplicação** | Campo que filtra as chaves de acesso pelo seu nome. |
| **Tags** | Campo que filtra as chaves de acesso pelas palavras-chave associadas. |
| **Criptografado** |Campo que filtra as chaves de acesso pela opção de criptografia da chave. As opções disponíves são **Sim** e **Não**. Clique em **Limpar** para habilitar a opção **Todos**. |
| **Data de expiração** | Campo que filtra as chaves de acesso pelo período de expiração. Formato `DD/MM/AAAA`. Utilize esse campo para inserir a data inicial do período. A seta que aponta para baixo abre um calendário.
| **até** | Campo que filtra as chaves de acesso pelo período de expiração. Formato `DD/MM/AAAA`. Utilize esse campo para inserir a data final do período. A seta que aponta para baixo abre um calendário.
| **Data de criação** | Campo que filtra as chaves de acesso pelo período de criação. Formato `DD/MM/AAAA`. Utilize esse campo para inserir a data inicial do período. A seta que aponta para baixo abre um calendário.
| **até** | Campo que filtra as chaves de acesso pelo período de criação. Formato `DD/MM/AAAA`. Utilize esse campo para inserir a data final do período. A seta que aponta para baixo abre um calendário.

## Campos do relatório

* **Aplicação**.
* **Tags**.
* **Informações**: quantidade de itens a que a chave tem acesso. 
* **Método de autenticação**: método de autenticação usado. Por padrão, o **MySafe** utiliza o método vOAuth 2.0.
* **Criptografado**.
* **Data de expiração**.
* **Data de criação**.
* **Ação**:  nessa coluna, você encontra as seguintes opções:
    * **Visualizar**: representado pelo ícone de chave, abre a janela **[Autorização da aplicação](/v3-33/docs/pt/mysafe-access-keys-screen#autorização-da-aplicação)** com informações sobre a chave de acesso.
    * **Três pontos verticais**: menu suspenso com as opções: *Alterar*, *Chave de descriptografia*, caso o campo **Criptografado** esteja marcado como **Sim**, *Clonar* e *Revogar*.


:::(Info) (Info)
O relatório exibe 30 registros por tela. Para ir para as próximas telas, clique no botão de avançar ao final do relatório.
:::



### Tela Nova/Atualizar chave de acesso
Nessa seção, você vai encontrar todas as informações sobre as telas **Nova chave de acesso** e **Atualizar chave de acesso** que possuem os mesmos campos.

#### Passo 1 - Aplicação
| Item | Descrição |
| --- | --- |
| **Nome*** |Caixa de texto para inserção de um nome para a aplicação. |
| **Descrição** | Caixa de texto para inserção de uma descrição para a aplicação.
| **Tags** | Caixa de texto para inserção de palavras-chaves associadas à aplicação.

#### Passo 2 - Segurança
| Item | Descrição |
| --- | --- |
| **Criptografar dados sensíveis*** |Caixa de seleção para definir se as informações sensíveis de cada item serão retornadas criptografadas. |
| **IPs autorizados** | Botão de **adição** que habilita o campo **Endereço** para inserção dos endereços IPs autorizados a utilizar a chave de acesso. O uso do asterisco *  permite o acesso a qualquer endereço IP.
| **HTTP referers autorizados** | Botão de **adição** que habilita o campo **Referer** para inserção dos URLs que terão acesso permitido à autorização de chave de acesso. Por padrão, qualquer origem é permitida.
| **Validação de certificados** | Campo para inserção de uma impressão digital do certificado para uma camada adicional de proteção.


#### Passo 3 - Dados
| Item | Descrição |
| --- | --- |
| **Acesso total*** |Caixa de seleção para definir se a aplicação poderá acessar todos os itens do **MySafe** a que o usuário tem acesso. A não marcação dessa caixa, habilita o campo **Especificar dados** em que é possível buscar as informações desejadas. |

#### Passo 4 - Validade
| Item | Descrição |
| --- | --- |
| **Validade*** |Campos para definição de data e hora em que a chave será revogada automaticamente. Formatos DD/MM/AAAA e HH:MM. As setas que apontam para baixo abrem um calendário e uma lista de horários. Se deixado em branco, a chave de acesso expira apenas se você sair da aplicação ou revogar a chave manualmente.|

#### Passo 4 - Revisão

Campos com todas as informações inseridas nos passos 1 a 4.
* **Nome**.
**Descrição**.
* **Tags**.
* **Criptografar dados sensíveis**.
* **IPs autorizados**.
* **Referenciadores HTTP autorizados**.
* **Validação de certificados**.
* **Informações**.
* **Expiração**.




### Autorização da aplicação

Nessa seção, você vai encontrar todas as informações sobre a tela **Autorização da aplicação** que exibe os detalhes da chave de acesso criada.

| Item | Descrição |
| --- | --- |
| **Método de autenticação** | Campo que exibe o método de autenticação usado. |
| **Aplicação** | Campo que exibe o nome da aplicação cliente que está usando a chave de acesso. |
| **Client ID** | Campo que exibe o identificador único da aplicação cliente. Clique no ícone de **olho** para exibir o código. |
| **Client Secret** | Campo que exibe a chave secreta para autenticar a aplicação ao servidor. Clique no ícone de **olho** para exibir o código. |
| **Descrição** | Campo que exibe a descrição da autorização da chave de acesso.  |
| **Data de expiração** | Campo que exibe a data de expiração para a autorização da chave de acesso.|
| **Criptografar dados sensíveis?*** | Campo que informa se as informações estão criptografadas. As opções são **Sim** e **Não**.|
| **Validação do certificado?** | Campo que informa se uma impressão digital do certificado foi fornecida. As opções são **Sim** e **Não**. |
| **IPs autorizados** | Campo que informa os endereços IP permitidos a utilizar a chave de acesso. |
| **Referenciadores HTTP autorizados** | Campo que exibe os referenciadores HTTP permitidos a utilizar a chave de acesso.|
| **Tags** | Campo que as palavras-chave associadas à chave de acesso. |
| **Tipo** | Campo que exibe as informações que a chave pode acessar. Pode exibir **Acesso total** ou informações específicas dos itens selecionados.|

