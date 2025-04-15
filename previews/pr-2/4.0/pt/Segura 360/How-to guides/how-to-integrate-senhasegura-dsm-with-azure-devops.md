# Como integrar o DSM com Azure DevOps

## Sobre o Azure DevOps e a integração com o Segura DSM

O Azure Pipelines automatiza a construção e teste de projetos de desenvolvimento de software, tornando-os prontamente disponíveis para outros usuários. Assim, temos uma ferramenta versátil, funcionando com praticamente qualquer linguagem ou tipo de projeto.

Ao combinar a integração contínua (CI) e a entrega contínua (CD), o Azure Pipelines realiza testes e construções de forma constante e consistente, permitindo o envio do código para qualquer destino desejado, o que , com a integração do DSM CLI no Azure DevOps, torna possível a injeção de segredos em tempo real durante a execução de um pipeline, eliminando a necessidade de expor informações sensíveis e eliminando as preocupações com a rotação de segredos.

Adicionalmente, essa integração intercepta todas as variáveis do pipeline, possibilitando aos administradores identificar informações sensíveis não gerenciadas pelo Segura DSM. Além disso, registra todos os segredos como variáveis de ambiente de maneira transparente para os desenvolvedores. Essa abordagem visa fortalecer a segurança e facilitar o gerenciamento de segredos em todo o ciclo de vida do desenvolvimento.

Na imagem abaixo, temos um diagrama do funcionamento da integração entre o Segura DSM e o Azure DevOps.

![Integração do Azure DevOps com o DSM do Segura](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-I0NCCURD.png)

## Como integrar o DSM ao Azure DevOps usando a DSM CLI

:::(info) (Info)
Por padrão, a Azure DevOps não permite o uso de variáveis em todas as etapas do pipeline. Para que outras etapas deste pipeline tenham acesso às secrets, deve defini-las como variáveis de ambiente.
:::

1. Acesse um projeto em sua conta do Azure DevOps.
2. Adicione o executável, o arquivo de configuração e o arquivo `Segura-mapping.json` (se necessário) ao repositório do projeto.
3. Edite seu arquivo `azure-pipelines.yml` localizado na pasta do projeto.
4. Inclua o código necessário para executar a CLI do DSM no ponto desejado em seu pipeline.
5. Vá para as configurações de variáveis do pipeline.
6. Registre as variáveis necessárias para executar a DSM CLI, seguindo as diretrizes fornecidas no guia do usuário.
7. Execute o pipeline no Azure DevOps para concluir o processo.

:::(info) (Info)
Caso não possua os arquivos runb e Segura-mapping.json, solicite-os ao time de suporte Segura.
:::

Exemplo de um arquivo `azure-pipelines.yaml` usando DSM CLI:

```
# This file is an example to demonstrate the usage of DSM CLI inside a Azure DevOps pipeline
# Make sure to upload the executable and the configuration files to your project
# For more information on its usage, please visit https://docs.Segura.io/

trigger:
- main

pool:
  default

steps:
- script: |
    dsm runb \
      --app-name $APPLICATION \
      --system $SYSTEM \
      --environment $ENVIRONMENT \
      --config .config.yml \
      --tool-name azure-devops \
    rm .runb.vars
  displayName: 'DSM CLI Running Belt execution'
  env:
    APPLICATION: $(APPLICATION)
    SYSTEM: $(SYSTEM)
    ENVIRONMENT: $(ENVIRONMENT)
```

:::(info) (Info)
Certifique-se de selecionar OAuth 2.0 como o método de autenticação no Segura DSM, pois a CLI o usa para buscar informações.
:::

## Como usar o DSM CLI para injetar Segredos em pipelines no Azure DevOps

Após configurar o DSM CLI no projeto,  siga as instruções abaixo:

1. Acesse **Pipelines > Pipelines** para executar o pipeline.
2. Selecione o pipeline desejado e clique em **Run Pipeline**.
3. Na etapa subsequente, clique em **Run**.
4. Em seguida, clique sobre o nome do trabalho para visualizar detalhes e resultados da execução.

A saída da execução será parecida com a mostrada abaixo:

```
Starting: Segurao CLI Running Belt execution
========================================================================
Task		: Command 1ine
Description 	: Run a comand line script using Bash on Linux and macOS and cmd.exe on Windows
Version:	: 2.201.1
Author		: Microsoft Corporation
Help		: https://docs.microsoft.com/azure/devoos/oipelines/tasks/utility/comand-line
========================================================================
Generating script.
============== Starting Command Output ==============
usr/bin/bash --noprofile --norc /home/admin/azure-runner/work/temp/S0e477c1-6798-4F26-ba37-374b0c1bbOSS.sh
Using config file: .config.yml
Registering Application on DevSecOps
Trying to authenticate on Segura DevSecOps API
Authenticated successfully
Application register success
Posting variables in Segura...
Trying to authenticate on Segura DevSecOps API
Athenticated successfully
Posting variables successfully
Finding secrets from application
Trying to authenticate on Segura DevSecOps API
Athenticated successfully
Injecting secrets!
No secrets to be injected!
Deleting azure-devops variables...
No variables to be deleted!
Finishing: Segura CLI Running Belt execution

```

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).