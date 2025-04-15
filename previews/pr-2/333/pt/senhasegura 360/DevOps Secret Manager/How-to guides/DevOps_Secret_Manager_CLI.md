# DevOps Secret Manager CLI

O DSM CLI é uma ferramenta consolidada para a administração dos serviços oferecidos pelo senhasegura. Esse utilitário possibilita a utilização dos serviços via linhas de comando, permitindo a automação via scripts. O objetivo principal dessa ferramenta é ser um plugin agnóstico capaz de interceptar variáveis de ambiente e inserir segredos em sistemas e pipelines de CI/CD.

A natureza agnóstica da CLI do DSM significa que ela pode ser usada em qualquer ambiente ou ferramenta de CI/CD. No entanto, a CLI do DSM já tem algumas configurações adicionais, simplificando a integração com várias ferramentas.

Esse plug-in permite que as equipes de DevOps centralizem dados secretos e de aplicativos de forma eficaz por meio do senhasegura DSM, estabelecendo uma abordagem segura para o consumo de variáveis confidenciais durante as fases de compilação e implementação.

Baixe a ferramenta em nosso repositório em [senhasegura/dsmcli](https://github.com/senhasegura/dsmcli).

## DSM CLI como Running Belt

:::(info) (Info)
Caso não possua os arquivos `runb` e `senhasegura-mapping.json`, solicite-os ao time de suporte senhasegura.
:::

Até o momento, o senhasegura DSM CLI só pode ser executado como Running Belt. Ou seja, o DSM CLI irá ler os segredos do módulo senhasegura DSM e os injetará como variáveis de ambiente.

Assim, para você implementar o plugin DSM CLI, você deve configurar uma aplicação com OAuth 2.0 e uma autorização no senhasegura DSM. Para saber como fazer isso, consulte as instruções da seção Aplicativos e Autorizações.

Após configurar a aplicação, você deve fazer o upload do executável para um diretório em seu ambiente ou ferramenta de CI/CD. Além disso, certifique-se de que um arquivo de configuração para autenticação no senhasegura DSM esteja incluído. A CLI do DSM precisa de informações sobre o aplicativo configurado, como nome, sistema e ambiente, para recuperar os segredos.

O arquivo de configuração deve estar no formato .yaml e conter os seguintes detalhes sobre o senhasegura DSM:

* `SENHASEGURA_URL`: URL de seu senhasegura onde o DSM está habilitado.
* `SENHASEGURA_CLIENT_ID`: ID do cliente para autorização de autenticação.
* `SENHASEGURA_CLIENT_SECRET`: segredo do cliente para autorização de autenticação.

Exemplo de um arquivo `.config.yaml`:

```
SENHASEGURA_URL: "<senhasegura URL>"
SENHASEGURA_CLIENT_ID: "<senhasegura Client ID>"
SENHASEGURA_CLIENT_SECRET: "<senhasegura Client Secret>"
SENHASEGURA_MAPPING_FILE: "<Secrets variable name mapping file with path>"
SENHASEGURA_SECRETS_FILE: "<File name with path to inject Secret>"
SENHASEGURA_DISABLE_RUNB: 0
```

:::(info) (Info)
Ao invés de usar um arquivo de configuração, o DSM CLI pode obter informações de autenticação por meio de variáveis de ambiente, tornando o arquivo opcional.
:::

Para utilizar o binário, você pode executar a seguinte linha de comando fornecendo as informações necessárias:

```bash
dsm runb \
    --application <nome da aplicação> \
    --system <nome do sistema> \
    --environment <nome do ambiente> \
    --config <caminho para o arquivo de configuração>
```

Após a execução do binário com as informações essenciais, é realizada a coleta de todas as variáveis de ambiente disponíveis durante a execução do pipeline, encaminhando-as para o senhasegura DSM.

Posteriormente, é realizada uma consulta a todos os segredos registrados pela aplicação, integrando-os em um arquivo denominado .runb.vars. Esse arquivo pode ser enviado ao sistema para atualizar as variáveis de ambiente com os novos valores por meio do seguinte comando: `source.runb.vars`

Assim, os desenvolvedores podem despreocupar-se com a injeção de segredos durante os pipelines, uma vez que estes podem ser gerenciados de maneira direta, seja através da API ou pela interface do DSM, acessível a qualquer membro da equipe de desenvolvimento ou de segurança.

:::(warning) (Importante)
Certifique-se de excluir o arquivo de variáveis do ambiente para evitar vazamento de dados.
:::

:::(info) (Info)
Por padrão, o DSM CLI pode descobrir os segredos e injetá-los em ferramentas como GitHub, Azure DevOps, Bamboo, BitBucket, CircleCI, TeamCity e Linux (opção padrão). Você pode alterar a opção padrão com o argumento `--tool-name` durante sua execução.
:::

## DSM CLI para registrar segredos

O DSM CLI também possibilita criar ou atualizar valores de segredos diretamente a partir da pipeline. Para isso, utilize um arquivo de mapeamento denominado `senhasegura-mapping.json`. Este arquivo simplifica a identificação de variáveis sensíveis por meio de seus nomes, registrando-as automaticamente como segredos no DSM.

A única configuração adicional necessária consiste em fornecer o arquivo de mapeamento juntamente com o executável e o arquivo de configuração. Abaixo, segue um exemplo do conteúdo do arquivo de mapeamento:

```json
{
  "access_keys": [
    {
      "name": "AWS_VARIABLES",
      "type": "aws",
      "fields": {
        "access_key_id": "AWS_ACCESS_KEY_ID_VARIABLE",
        "secret_access_key": "AWS_SECRET_ACCESS_KEY_VARIABLE"
      }
    }
  ],
  "credentials": [
    {
      "name": "CREDENCIAL_VARIABLES",
      "fields": {
        "user": "USER_VARIABLE",
        "password": "PASSWORD_VARIABLE",
        "host": "HOST_VARIABLE"
      }
    }
  ],
  "key_value": [
    {
      "name": "SECRET_VARIABLES",
      "fields": ["KEY_VALUE_VARIABLE"]
    }
  ]
}

```

Este arquivo pode ser dividido em três blocos principais:

1. `access_keys`: é uma matriz de objetos, composta pelos atributos name, type, e um subobjeto chamado fields. Este último é constituído pelos atributos `access_key_id` e `secret_access_key`. Os valores desses atributos devem ser os nomes das variáveis que contêm os valores, permitindo ao senhasegura DSM validar a existência desses dados no módulo Cloud IAM. Se os dados existirem, serão registrados como segredo para a autorização fornecida. Caso contrário, serão registrados como chave/valor.
2. `credentials`: é uma matriz de objetos, composta pelo atributo name e um subobjeto chamado fields. Este último é constituído por `user`, `password` e `host`. Os valores desses atributos devem ser os nomes das variáveis que contêm essas informações, permitindo ao senhasegura DSM validar a existência desses dados no módulo PAM. Se os dados existirem, serão registrados como segredo para a autorização fornecida. Caso contrário, serão registrados como chave/valor.
3. `key_value`: é uma matriz de objetos, composta pelo atributo name e um subobjeto de fields. Os valores da matriz devem ser os nomes das variáveis a serem registradas como segredos do tipo chave/valor no senhasegura DSM.

:::(warning) (Importante)

* Esse arquivo deve ser nomeado como `senhasegura-mapping.json` e estar no mesmo nível de diretório que o executável.
* Atualmente o senhasegura DSM suporta apenas chaves de acesso por meio de integração com AWS, Azure ou GCP, portanto o atributo type informado deve ser um dos suportados.
  :::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).