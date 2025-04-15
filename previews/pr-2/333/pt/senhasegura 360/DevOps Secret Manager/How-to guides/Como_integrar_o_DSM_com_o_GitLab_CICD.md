# Como integrar o DSM com o GitLab CI/CD

## Sobre o GitLab e a integração com o senhasegura DSM

No senhasegura DSM, a integração com pipelines de CI/CD é realizada por meio da CLI. Esta ferramenta captura todas as variáveis de ambiente em execução durante uma compilação ou implantação específica, proporcionando uma descoberta de variáveis sensíveis e, de maneira dinâmica, injetando segredos provenientes de um cofre seguro diretamente nas variáveis de ambiente. Essa abordagem dinâmica contribui para um gerenciamento seguro e eficiente dos segredos em ambientes de desenvolvimento e produção.

Na imagem abaixo, temos um diagrama do funcionamento da integração entre o senhasegura DSM CLI e o GitLab CI/CD:

![Integração do GitLab CI/CD com o DSM do senhasegura](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-FETKVZ3B.png)

## Requisitos

* Um usuário com acesso ao GitLab com permissão para adição e edição de arquivos do projeto.
* que o servidor onde está o GitLab tenha acesso ao senhasegura.
* Arquivos runb e senhasegura-mapping.json devidamente configurados.
* A máquina onde o plugin estiver rodando precisa ter os seguintes pacotes instalados: `bash`, `jq`, `sed` e `curl`.

:::(info) (Info)
Caso não possua os arquivos `runb` e `senhasegura-mapping.json`, solicite-os ao time de suporte senhasegura.
:::

## Como integrar o DSM ao GitLab CI/CD usando a DSM CLI

Para integrar o DSM ao GitLab usando CLI, siga estas etapas:

1. Acesse um projeto em sua conta do GitLab.
2. Adicione o executável, o arquivo de configuração e, opcionalmente, o arquivo `senhasegura-mapping.json` no repositório do projeto.
3. No senhasegura, acesse as **Variáveis de CI/CD** do seu projeto através de **Grid Menu >Configurações > Segredos > Ações**.
4. Registre as variáveis necessárias para a execução do DSM CLI conforme descrito no guia de uso.
5. Edite seu arquivo `.gitlab-ci.yml` na pasta do seu projeto;
6. Durante o trabalho desejado de seu pipeline, adicione o código para executar o DSM CLI e confirme a alteração do arquivo.
7. Execute o pipeline do GitLab para concluir.

Exemplo de um arquivo de configuração .gitlab-ci.yml usando a DSM CLI:

```
# This file is an example to demonstrate the usage of DSM CLI inside a GitLab pipeline
# Make sure to upload the executable and the configuration files to your project
# For more information on its usage, please visit https://docs.senhasegura.io/

default:
  image: debian

build:
  script:
    - dsm runb \
        --app-name "$APPLICATION" \
        --system "$SYSTEM" \
        --environment "$ENVIRONMENT" \
        --config .config.yml
    - source .runb.vars # After this command the secrets should be available
```

:::(info) (Info)
Certifique-se de selecionar OAuth 2.0 como o método de autenticação no senhasegura DSM, pois a CLI o usa para buscar informações.
:::

## Como usar o DSM CLI para injetar segredos em pipelines no GitLab

Após concluir a configuração da CLI no seu projeto, siga as instruções abaixo:

1. Acesse o menu **CI/CD > Pipelines**.
2. Clique em **Run Pipeline**.
3. Na etapa seguinte, escolha a ramificação desejada e clique novamente em **Run Pipeline**.
4. Em seguida, vá para **Status > Nome do Trabalho** para visualizar detalhes e resultados da execução.

A saída da execução será parecida com a mostrada abaixo:

```
Using config file: senhasegura/.config.yml
Registering Application on DevSecops
Trying to authenticate on senhasegura DevSecOps API
Authenticated successfully
Application register success
Posting variables in senhasegura...
Trying to authenticate on senhasegura DevSecOps API
Authenticated successfully
Posting variables successfully
Finding secrets from application
Trying to authenticate on senhasegura DevSecOps API
Authenticated successfully
Injecting secrets!
Injecting secret: password... Sucess
Injecting secret: PORT... Sucess
Injecting secret: VERSION... Sucess
Injecting secret: ip... Sucess
Injecting secret: hostname... Sucess
Injecting secret: username... Sucess
Injecting secret: additional information... Sucess
Secrets injected!
Deleting linux variables...
Is not possible to delete linux variables!
Finish
```

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).