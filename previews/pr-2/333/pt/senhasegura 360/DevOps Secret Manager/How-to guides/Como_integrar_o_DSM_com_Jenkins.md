# Como integrar o DSM com Jenkins

## Sobre o Jenkins e a integração com o senhasegura DSM CLI

O Jenkins tem um recurso que permite que as variáveis de ambiente sejam definidas durante a execução do trabalho e armazenadas de forma segura para uso posterior. No entanto, os administradores devem garantir que essas variáveis sejam rotacionadas regularmente sem interromper o pipeline de DevOps.

O senhasegura DSM possui um plugin Jenkins que usa a arquitetura nativa da plataforma para definir variáveis de ambiente durante o tempo de execução do pipeline. Esse plugin também envia todas as variáveis disponíveis no ambiente de trabalho para o senhasegura DSM para descobrir quaisquer dados confidenciais que estejam sendo executados sem serem notados, ajudando os administradores de sistemas a terem maior controle sobre os seus sistemas.

Na imagem abaixo, é possível visualizar um diagrama de como é feita a integração entre o senhasegura DSM e o Jenkins:

![Integração do Jenkins com o DSM do senhasegura](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-FAFE2PUS.png)

## Como integrar o senhasegura DSM com Jenkins

O senhasegura DevOps Secret Management fornece uma integração nativa para que os jobs do Jenkins possam buscar segredos diretamente do senhasegura, fornecendo assim uma maneira fácil de configurar a injeção dos segredos. Para fazer download, [acesse o portal de suporte](https://suporte.senhasegura.com.br/pt-BR/support/login).

Para instalar a integração do senhasegura Jenkins usando o arquivo .hpi , siga as etapas abaixo:

1. Acesse sua instância do Jenkins.
2. Na página inicial, clique na opção **Manage Jenkins** no menu lateral.
3. Clique na opção **Manage Plugins**.
4. Na guia Advanced, na seção **Upload Plugin**, clique no botão **Upload** e faça upload do arquivo `.hpi`.
5. Para concluir a instalação, reinicie o Jenkins.

:::(error) (Caution)

* A integração do senhasegura com o Jenkins só está disponível para o Jenkins 2.235.1 ou versões mais recentes.
* Certifique-se de selecionar OAuth 2.0 como método de autenticação no senhasegura DSM, pois o plugin o utiliza para buscar informações.
  :::

## Como configurar a integração com o Jenkins

Depois que o plugin estiver instalado, siga as instruções abaixo:

1. Crie um novo trabalho ou selecione um já existente.
2. No menu lateral, clique na opção **Configure**.
3. Role para baixo até a seção **Build Environment** e marque a caixa de seleção **senhasegura DSM Plugin**.
4. No campo **senhasegura URL**, digite a URL usada para acessar a instância do senhasegura.
5. Clique no botão **Add** para criar uma nova credencial do Jenkins.
6. Na janela aberta, selecione **senhasegura Auth Credential**.
7. Preencha os campos **Client ID** e **Client Secret** com os dados fornecidos pelo senhasegura DSM.
8. Opcionalmente, forneça um ID e uma descrição e, em seguida, clique no botão **Add**.
9. No campo **senhasegura Auth Credential**, selecione a credencial criada no passo anterior.

## Como injetar segredos usando o Jenkins

Após configurar a integração no projeto, acesse o menu **Build now** para executar o pipeline e utilizar os segredos. Quando o trabalho terminar, clique em **Job ID > Console** para exibir o resultado da execução.

O resultado execução será parecido com o abaixo:

```
Started by user XXXX
Running as SYSTEM
Building in workspace /var/Lib/jenkins/workspace/DSM
Sending all enviroment variables to senhaseguras' server
API status code is 200
For sending vars: senhasegura returned à successfull responde with code 200
Getting all senhaseguras' secrets and storing it as environment variables
API status code is 200
For getting vars: senhasegura returned a successfull responde with code 200
Analyzing returned variables from Secret 13
Saving variable PASSWD with value ****
Saving variable additional_information with value ****
Saving variable aliases with value ****
Saving variable SECRET_ACCESS_KEY with value ****
Saving variable PORT with value ****
Saving variable ip with value ****
Saving variable HOST with value ****
Saving variable ACCESS_KEY_ID with value ****
Saving variable USER with value ****
Saving variable TTL with value ****
[DsM] $ /bin/sh -xe /tmp/jenkins14979126717851661906.sh
```

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).