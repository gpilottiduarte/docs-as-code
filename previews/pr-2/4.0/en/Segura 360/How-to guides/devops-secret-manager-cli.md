# Hot to use DevOps Secret Manager CLI

The DSM CLI is a consolidated tool for managing the services offered by senhasegura. This utility allows the services to be used using command lines, allowing automation via scripts. The main purpose of this tool is to be an agnostic plugin capable of intercepting environment variables and inserting secrets into CI/CD systems and pipelines.

The agnostic nature of the DSM CLI means that it can be used in any CI/CD environment or tool. However, the DSM CLI already has some additional settings, simplifying integration with various tools.

This plug-in allows DevOps teams to centralize secret and application data effectively through DSM senhasegura, establishing a secure approach to consuming sensitive variables during the build and deployment phases.

Download the tool from our repository at [senhasegura/dsmcli](https://github.com/senhasegura/dsmcli).

## DSM CLI as Running Belt

:::(info) (Info)
If you don't have the `runb` and `senhasegura-mapping.json` files, ask the senhasegura support team for them.
:::

So far, the senhasegura DSM CLI can only run as a Running Belt. In other words, the DSM CLI will read the secrets of the senhasegura DSM module and inject them as environment variables.

To implement the DSM CLI plugin, you must set up an application with OAuth 2.0 and authorization in senhasegura DSM.

After configuring the application, upload the executable to a directory in your environment or CI/CD tool. Also, ensure that a configuration file for authentication in senhasegura DSM is included. The DSM CLI needs information about the configured application, such as its name, system, and environment, to retrieve the secrets.

The configuration file must be in `.yaml` format and contain the following details about senhasegura DSM:

* `SENHASEGURA_URL`: URL of your senhasegura where DSM is enabled.
* `SENHASEGURA_CLIENT_ID`: Client ID for authentication authorization.
* `SENHASEGURA_CLIENT_SECRET`: client secret for authentication authorization.

Example of a `.config.yaml` file:

```
SENHASEGURA_URL: "<senhasegura URL>"
SENHASEGURA_CLIENT_ID: "<senhasegura Client ID>"
SENHASEGURA_CLIENT_SECRET: "<senhasegura Client Secret>"
SENHASEGURA_MAPPING_FILE: "<Secrets variable name mapping file with path>"
SENHASEGURA_SECRETS_FILE: "<File name with path to inject Secret>"
SENHASEGURA_DISABLE_RUNB: 0
```

:::(info) (Info)
Instead of a configuration file, the DSM CLI can obtain authentication information via environment variables, making the file optional.
:::

To use the binary, you can run the following command line providing the necessary information:

```bash
dsm runb \
    --application <nome da aplicação> \
    --system <nome do sistema> \
    --environment <nome do ambiente> \
    --config <caminho para o arquivo de configuração>
```

After executing the binary with the essential information, all the environment variables available during the execution of the pipeline are collected and forwarded to the senhasegura DSM.

Subsequently, all the secrets recorded by the application are consulted and integrated into a file called .runb.vars. This file can be sent to the system to update the environment variables with the new values using the following command: `source.runb.vars`

This allows developers to not worry about injecting secrets during pipelines, since they can be managed directly through the API or the DSM interface, which is accessible to any member of the development or security team.

:::(warning) (Important)
Ensure that you have deleted the environment variables file to avoid data leakage.
:::

:::(info) (Info)
By default, the DSM CLI can discover secrets and inject them into tools such as GitHub, Azure DevOps, Bamboo, BitBucket, CircleCI, TeamCity, and Linux (default option). You can change the default option with the `--tool-name` argument during execution.
:::

## DSM CLI to record secrets

The DSM CLI also allows creating or updating secret values directly from the pipeline. To do this, use a mapping file called senhasegura-mapping.json. This file simplifies the identification of sensitive variables by their names, automatically registering them as secrets in the DSM.

The only additional configuration required consists of providing the mapping file, the executable, and the configuration file. Below is an example of the contents of the mapping file:

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

This file can be divided into three main blocks:

1. `access_keys`: an array of objects comprising the attributes name, type, and subobject called fields. The last one is composed of the `access_key_id` and `secret_access_key` attributes. The values of these attributes must be the names of the variables that contain the values, allowing senhasegura DSM to validate the existence of this data in the Cloud IAM module. If the data exists, it will be recorded as a secret for the authorization provided. It will be recorded as a key/value if it doesn't.
2. `credentials`: an array of objects comprising the name attribute and a sub-object called fields. The last one includes the `user`, `password`, and `host` attributes. The values of these attributes must be the names of the variables containing this information, allowing senhasegura DSM to validate the existence of this data in the PAM module. If the data exists, it will be recorded as a secret for the authorization provided. It will be recorded as a key/value if it doesn't.
3. `key_value`: is an array of objects composed of the name attribute and a fields subobject. The values of the array must be the names of the variables to be registered as secrets of the key/value type in senhasegura DSM.

:::(warning) (Important)

* This file must be named `senhasegura-mapping.json` and be at the same directory level as the executable.
* Currently, the senhasegura DSM only supports access keys via integration with AWS, Azure, or GCP, which means that the type attribute provided must be one of the supported ones.
  :::

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).