# How to integrate DSM with GitHub Actions

## About GitHub Actions and integration with DSM

GitHub is a widely used platform for hosting source code and files. It provides Git-based version control, allowing programmers, utilities, and users to contribute to private and open source projects, regardless of location. GitHub Actions is a powerful tool that enables the automation, customization, and execution of development workflows directly in the repositories. This integrated functionality significantly improves the efficiency and consistency of the software development process.

By integrating senhasegura DSM with GitHub Actions, all environment variables can be intercepted and secrets can be injected directly into pipelines during automation execution. This approach eliminates the need to expose secrets, reinforcing security during development.

The image below shows a diagram of how senhasegura DSM and GitHub Actions are integrated:

![GitHub Actions integration with senhasegura DSM](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-3BBDT2C4.png)

## Integrate DSM with GitHub Actions

To integrate senhasegura DSM with GitHub Actions, using the DSM CLI, follow the instructions below:

1. Access a project from your GitHub account.
2. Add the executable, the configuration file, and, optionally, the `senhasegura-mapping.json` file to the project's repository.
3. In senhasegura, access your project's **CI/CD Variables** via **Grid Menu > DevOps Secret Manager > Settings > Secrets > Actions**.
4. Register the variables needed to run the DSM using CLI, as described in the user guide.
5. Edit your `.github/workflows/pipeline.yml` file in your project folder
6. During the desired work of your pipeline, add the code to run the DSM and confirm the change to the file.
7. Run the GitHub pipeline to finish.

:::(info) (Info)
If you don't have the runb and senhasegura-mapping.json files, ask the senhasegura support team for them.
:::

Example for .github/workflows/pipeline.yaml file for using with DSM CLI:

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
Ensure you select OAuth 2.0 as the authentication method in senhasegura DSM, as the CLI uses it to fetch information.
:::

## Use DSM and CLI to inject secrets into pipelines

After configuring the DSM CLI in the project, go to the Actions menu on GitHub to run the pipeline and inject the secrets. To do this, follow the instructions below:

1. Select the workflow and the **Run workflow** option.
2. Choose the branch to run the workflow and click on **Run workflow.**
3. Finally, click on **Workflow > Job** to display the result of the run.

Example of an output from the GitHub Actions workflow:

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

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).