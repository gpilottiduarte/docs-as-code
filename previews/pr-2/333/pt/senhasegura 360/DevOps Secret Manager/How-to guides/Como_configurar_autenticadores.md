# Como configurar autenticadores

:::(info) (Info)
Apesar de não recomendado, é possível não integrar nenhum autenticador na sua aplicação do DSM.
:::

## Configurar o OAuth 1.0

O OAuth 1.0 é um método de autenticação que envolve o uso de quatro tokens para identificar e autorizar o acesso de um aplicativo. Ao optar pelo OAuth 1.0, é imprescindível escolher `HMAC-SHA1` como método de assinatura e 1.0 como versão. Os itens `Timestamp`, `Nonce` e `Signature` são obrigatórios e devem ser fornecidos.

Para empregar este método de autenticação, acesse **Grid Menu >DevOps Secret Manager > Aplicações > Aplicações** e siga estas etapas:

1. Edite ou crie uma aplicação.
2. Selecione OAuth 1.0 como método de autenticação.
3. Forneça os dados necessários no caso de uma nova aplicação, conforme está descrito no documento sobre [Aplicações](/v3-33/docs/pt/how-to-manage-an-application-in-devops-secret-manager).
4. Clique em **Salvar**. 

:::(warning) (Atenção)
Para garantir a integridade dos dados, sempre use um método de autenticação moderno. O senhasegura desaconselha o uso do OAuth 1.0 devido às suas medidas de segurança desatualizadas e recomenda a atualização dos aplicativos legados para oferecer suporte a métodos de autenticação modernos.
:::

## Configurar o OAuth 2.0

O OAuth 2.0 é um método de autenticação que requer um `Client ID` e um `Client Secret` para obter um token que permite o acesso aos recursos do senhasegura por um tempo limitado. Ao usar o OAuth 2.0 como um método de autenticação, selecione **Client Credentials** como o **Tipo de concessão**.

Para empregar este método de autenticação, acesse **Grid Menu >DevOps Secret Manager > Aplicações > Aplicações** e siga estas etapas:

1. Edite ou crie uma aplicação.
2. Selecione OAuth 2.0 como método de autenticação.
3. Forneça os dados necessários no caso de uma nova aplicação, conforme está descrito no documento sobre [Aplicações](/v3-33/docs/pt/how-to-manage-an-application-in-devops-secret-manager).
4. Clique em **Salvar**.

:::(info) (Info)
Tanto para o OAuth 1.0 quanto para o OAuth 2.0, quando um recurso precisar acessar um segredo, ele poderá usar seus tokens OAuth 1.0/OAuth 2.0 para solicitar informações ao senhasegura. Se os dados forem válidos, o senhasegura permitirá que o aplicativo interaja com os segredos e as autorizações do DSM.
:::

## Configurar o autenticador da AWS

A utilização do método AWS como método de autenticação permite que os aplicativos recuperem dados armazenados por meio do uso do `AWS Access Keys ID` e das `Secret Access Keys` com uma chave exclusiva gerada pelo senhasegura DSM.

Para empregar este método de autenticação, acesse **Grid Menu >DevOps Secret Manager > Aplicações > Aplicações** e siga estas etapas:

1. Edite ou crie uma aplicação.
2. Selecione AWS como o método de autenticação.
3. Forneça os dados necessários no caso de uma nova aplicação, conforme está descrito no documento sobre [Aplicações](/v3-33/docs/pt/how-to-manage-an-application-in-devops-secret-manager).
4. Na seção **Amazon AWS ARNs**, forneça um ARN de credencial válido.
5. Clique em **Salvar**.

O AWS ARN, ou *Amazon Resource Name*, é um identificador único atribuído a recursos dentro do ecossistema da Amazon Web Services (AWS). Esse identificador é usado para identificar e acessar recursos de maneira precisa e segura na plataforma AWS. O ARN é composto por vários campos que fornecem informações detalhadas sobre o recurso associado. A estrutura geral de um ARN é a seguinte: `arn:partition:service:region:account-id:resource-type/resource-id`, onde cada campo refere-se a:

* `arn`:  valor/número fixo que indica que é um *Amazon Resource Name*.
* `partition`: representa a partição da AWS em que o recurso está localizado.
* `service`: indica o serviço da AWS ao qual o recurso pertence.
* `region`: especifica a região geográfica em que o recurso está localizado.
* `account-id`: identifica, de forma exclusiva, a conta da AWS que possui o recurso.
* `resource-type`: identifica o recurso específico dentro do serviço.
* `resource-id`: identifica o recurso. Indica qual é o nome, ID ou caminho do recurso.

:::(info) (Info)
É possível que o AWS ARN possua apenas `resource-type`, apenas `resource-id` ou ambos. Quando possuir ambos os valores, será apresentado na forma: `arn:partition:service:region:account-id:resource-type:resource-id`.
:::

Quando um recurso requer acesso a dados confidenciais, ele pode solicitá-lo usando as suas `AWS Access Key ID`, `Secret Access Key` e uma `unique key` gerada pelo senhasegura DSM. A solicitação então é enviada ao senhasegura, que verifica se as informações fornecidas correspondem aos ARNs da AWS configurados no aplicativo. Se a correspondência for confirmada, o DSM concede autorização ao aplicativo para acessar os segredos.

:::(info) (Info)
O DSM utiliza **Acesso Programático** para verificar se a informação fornecida é válida. Para mais informações sobre como gerar **Chaves de Acesso AWS**, [acesse o guia da AWS](https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/security-creds.html#access-keys-and-secret-access-keys)
:::

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).