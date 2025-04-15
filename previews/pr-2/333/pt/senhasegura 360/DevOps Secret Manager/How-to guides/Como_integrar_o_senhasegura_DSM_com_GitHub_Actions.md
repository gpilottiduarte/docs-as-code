# Como integrar o senhasegura DSM com GitHub Actions

## Sobre o GitHub Actions e a integração com o senhasegura DSM

O GitHub é uma plataforma amplamente usada para hospedar códigos-fonte e arquivos. Ele fornece controle de versão baseado no Git, permitindo que programadores, utilitários e usuários contribuam com projetos privados e de código aberto, independentemente do local. O GitHub Actions é uma ferramenta poderosa que permite a automação, a personalização e a execução de fluxos de trabalho de desenvolvimento diretamente nos repositórios. Essa funcionalidade integrada melhora significativamente a eficiência e a consistência do processo de desenvolvimento de software.

Ao integrar o senhasegura DSM com o GitHub Actions, todas as variáveis de ambiente podem ser interceptadas e os segredos podem ser injetados diretamente nos pipelines durante a execução da automação. Essa abordagem elimina a necessidade de expor segredos, reforçando a segurança durante o desenvolvimento.

Na imagem abaixo, é possível visualizar um diagrama de como é feita a integração entre o senhasegura DSM e o GitHub Actions:

![Integração do GitHub Actions com o DSM do senhasegura](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-3BBDT2C4.png)

## Como integrar o senhasegura DSM com GitHub Actions

Para integrar o senhasegura DSM com o GitHub Actions, usando o DSM CLI, siga as instruções abaixo:

1. Acesse um projeto em sua conta do GitHub.
2. Adicione o executável, o arquivo de configuração e, opcionalmente, o arquivo senhasegura-mapping.json no repositório do projeto.
3. No senhasegura, acesse as **Variáveis de CI/CD** do seu projeto através de **Grid Menu > DevOps Secret Manager >Configurações > Segredos > Ações**.
4. Registre as variáveis necessárias para a execução do DSM usando CLI, conforme descrito no guia de uso.
5. Edite seu arquivo `.github/workflows/pipeline.yml` na pasta do seu projeto
6. Durante o trabalho desejado do seu pipeline, adicione o código para executar o DSM e confirmar a alteração do arquivo.
7. Execute o pipeline do GitHub para finalizar.

:::(info) (Info)
Caso não possua os arquivos runb e senhasegura-mapping.json, solicite-os ao time de suporte senhasegura.
:::

Exemplo do arquivo `.github/workflows/pipeline.yaml` para DSM usando CLI:

```
name: senhasegura CLI CI/CD

on:
  push:
    branches: [ main ]

  workflow_dispatch:

jobs:
  build:
    runs-on: self-hosted

    steps:
      - uses: actions/checkout@v2

      - name: Run DSM CLI as Running Belt
        env:
          APPLICATION: ${{ secrets.APPLICATION }}
          SYSTEM: ${{ secrets.SYSTEM }}
          ENVIRONMENT: ${{ secrets.ENVIRONMENT }}
        run: |
          dsm runb \
            --app-name $APPLICATION \
            --system $SYSTEM \
            --environment $ENVIRONMENT \
            --config .config.yml \
            --tool-name github \
          source .runb.vars && rm .runb.vars
```

:::(info) (Info)
Certifique-se de selecionar OAuth 2.0 como o método de autenticação no senhasegura DSM, pois a CLI o usa para buscar informações.
:::

## Como usar DSM e CLI para injetar segredos em pipelines

Após configurar o DSM CLI no projeto, acesse o menu Actions no GitHub para executar o pipeline e injetar os segredos. Para isso, siga as instruções abaixo:

1. Selecione o workflow e a opção **Run workflow**.
2. Escolha a branch para rodar o workflow e clique em **Run workflow**.
3. Por fim, clique em **Workflow >  Job**, para exibir o resultado da execução.

Exemplo de saída do workflow do GitHub Actions:

```
Run chmod +x senseg-cli
Using config file: .config.yml
Registering Application on DevSecOps
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
Injecting secret: SENHASEGURA APPLICATION... Sucess
Injecting secret: SENHASEGURA ENVIRONMENT... Sucess
Injecting secret: SENHASEGURA SYSTEM... Sucess
Secrets injected!
Deleting github variables...
The config GITLAB ACCESS TOKEN is empty
Deletion failed
To delete github variables, you need to define the configs GITLAB ACCESS TOKEN, CI API V4 URL and CI PROJECT TD
Finish

```

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).