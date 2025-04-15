# How to integrate DSM with Azure DevOps

## About Azure DevOps and its integration with senhasegura DSM

Azure Pipelines is a tool that automates the process of building and testing software development projects, making them available to other users. It is a versatile tool that can work with practically any language or type of project.

Azure Pipelines combines continuous integration (CI) and continuous delivery (CD) to perform tests and builds constantly and consistently, allowing the developer to send code to any desired destination. Additionally, the integration of the DSM CLI in Azure DevOps makes it possible to inject secrets in real-time during the execution of a pipeline. This eliminates the need to expose sensitive information and eliminates concerns about the rotation of secrets.

Moreover, this integration intercepts all pipeline variables, enabling administrators to identify sensitive information not managed by senhasegura DSM. Additionally, it records all secrets as environment variables in a transparent way to developers. With this approach, security is strengthened and secrets management is made easier throughout the development lifecycle.

The image below shows how the integration between senhasegura DSM and Azure DevOps works.

![Azure DevOps integration with senhasegura DSM](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-I0NCCURD.png)

## How to integrate DSM with Azure DevOps using the DSM CLI

INFO
By default, Azure DevOps doesn't allow using variables at all stages of the pipeline. For other stages of this pipeline to access secrets, you must define them as environment variables.

1. Access a project in your Azure DevOps account.
2. Add the `runb` executable, the configuration file, and the `senhasegura-mapping.json` file (if necessary) to the project repository.
3. Edit your `azure-pipelines.yml` file located in the project folder.
4. Include the code needed to run the DSM CLI at the desired point in your pipeline.
5. Go to the pipeline variable settings.
6. Register the variables needed to run the DSM CLI, following the guidelines provided in the user guide.
7. Run the pipeline in Azure DevOps to complete the process.

:::(info) (Info)
If you don't have the `runb` and `senhasegura-mapping.json` files, ask the senhasegura support team for them.
:::

Example of an `azure-pipelines.yaml` file using DSM CLI:

```
# This file is an example to demonstrate the usage of DSM CLI inside a Azure DevOps pipeline
# Make sure to upload the executable and the configuration files to your project
# For more information on its usage, please visit https://docs.senhasegura.io/

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
Ensure you have selected the OAuth 2.0 authentication method in the senhasegura DSM, as the CLI uses it to fetch information.
:::

## How to use DSM CLI to inject Secrets into pipelines in Azure DevOps

After configuring the DSM CLI in the project, follow the instructions below:

1. Access Pipelines > Pipelines to run the pipeline.
2. Select the pipeline you want and click **Run Pipeline**.
3. In the next step, click **Run**.
4. Then click on the job name to view the details and results of the execution.

The execution output will look like this:

```bash
Starting: senhasegura CLI Running Belt execution
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
Trying to authenticate on senhasegura DevSecOps API
Authenticated successfully
Application register success
Posting variables in senhasegura...
Trying to authenticate on senhasegura DevSecOps API
Athenticated successfully
Posting variables successfully
Finding secrets from application
Trying to authenticate on senhasegura DevSecOps API
Athenticated successfully
Injecting secrets!
No secrets to be injected!
Deleting azure-devops variables...
No variables to be deleted!
Finishing: senhasegura CLI Running Belt execution

```

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).