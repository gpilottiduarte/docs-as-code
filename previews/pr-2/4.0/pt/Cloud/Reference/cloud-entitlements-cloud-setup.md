# Configuração

Em **Configuração**, você pode conectar seus Provedores de Serviços em Nuvem (CSPs) e obter informações sobre eles.

## Caminho para acesso

Para configurar CSPs em um tenant:

1. Acesse o **Cloud Security**.  
2. No produto **Cloud Entitlements**, clique em **Acessar**.   
3. No menu lateral, clique em **Configuração** e selecione o provedor desejado.

## Amazon Web Services

No menu lateral clique em **Configuração** > **Amazon Web Services** para consultar as seguintes informações:

| Item | Descrição |
| :---- | :---- |
| **Tipo** | Exibe o tipo da conta conectada ao **Cloud Entitlements**. Você pode conectar tanto uma conta AWS ou uma organização AWS. |
| **Código da conta** | Exibe o código da conta AWS, ou, para organizações AWS, o ID da conta de gerenciamento da Unidade organizacional (UO). |
| **Nome** | Informa o nome da conta ou organização dentro do **Cloud Entitlements**. |
| **Chave de acesso** | Exibe a chave de acesso da conta AWS. Este campo está disponível apenas para administradores do **Cloud Entitlements**. Organizações conectadas não contém uma chave de acesso. |
| **Conectado em** | Indica a data e hora em que a conta ou organização foi conectada ao **Cloud Entitlements**. |
| **Sincronização** | Indica o status da sincronização da conta ou organização com **Cloud Entitlements**. A sincronização começa automaticamente a cada 15 minutos após ela ser concluída ou depois que um reprocessamento é iniciado. |
| **Status** | *Switch* para ativar ou desativar a conta ou organização no **Cloud Entitlements**. **Nota**: desativar a conta ou organização removerá as identidades e recomendações da conta do relatório.  |

Na coluna **Ações**, representada pelos três pontos verticais, você tem três opções:

- **Editar**: edita as informações da conta ou organização AWS.  
- **Políticas de Segurança**: redireciona para a tela de políticas de segurança da conta ou organização selecionada.  
- **Reprocessar**: reprocessa as contas ou organizações, sincronizando os dados com o CSP.

## Google Cloud Platform

No menu lateral, clique em **Configuração** > **Google Cloud Platform** para consultar as seguintes informações:

| Item | Descrição |
| :---- | :---- |
| **Tipo** | Exibe o tipo da conta conectada ao **Cloud Entitlements**. Você pode conectar tanto um projeto GCP ou uma organização GCP. |
| **ID do projeto** | Exibe o ID do projeto ou organização GCP. |
| **Nome** | Informa o nome do projeto ou organização dentro do **Cloud Entitlements**. |
| **Conectado em** | Indica a data e hora em que o projeto ou organização foi conectado ao **Cloud Entitlements**. |
| **Sincronização** | Indica o status da sincronização do projeto ou organização com **Cloud Entitlements**. A sincronização começa automaticamente a cada 15 minutos após ela ser concluída ou depois que um reprocessamento é iniciado. |
| **Status** | *Switch* para ativar ou desativar o projeto ou organização no **Cloud Entitlements**. **Nota**: desativar a conta ou organização removerá as identidades e recomendações da conta do relatório.  |

Na coluna **Ações**, representada pelos três pontos verticais, você tem três opções:

- **Editar**: edita as informações do projeto GCP.  
- **Políticas de Segurança**: redireciona para a tela de políticas de segurança do projeto selecionado.  
- **Reprocessar**: reprocessa o projeto, sincronizando os dados com o CSP.

## Microsoft Azure

No menu lateral, clique em **Configuração** > **Microsoft Azure** para consultar as seguintes informações:

| Item | Descrição |
| :---- | :---- |
| **ID do tenant** | Exibe ID do tenant. |
| **Nome** | Informa o nome do tenant dentro do **Cloud Entitlements**. |
| **Conectado em** | Indica a data e hora em que o tenant foi conectado ao **Cloud Entitlements**. |
| **Sincronização** | Indica o status da sincronização do tenant com **Cloud Entitlements**. A sincronização começa automaticamente a cada 15 minutos após ela ser concluída ou depois que um reprocessamento é iniciado. |
| **Status** | *Switch* para ativar ou desativar o tenant no **Cloud Entitlements**. **Nota**: desativar a conta ou organização removerá as identidades e recomendações da conta do relatório. |

Na coluna **Ações**, representada pelos três pontos verticais, você tem três opções:

- **Editar**: edita as informações do tenant Azure.  
- **Políticas de Segurança**: redireciona para a tela de políticas de segurança do tenant selecionado.  
- **Reprocessar**: reprocessa o tenant, sincronizando os dados com o CSP.

:::(Warning) (Atenção)
Caso uma chave de acesso inválida seja utilizada para conectar provedores ao tenant no **Cloud Security**, o usuário responsável pela conexão receberá uma notificação por e-mail. Além disso, um alerta será exibido na lista. Contas com chaves de acesso inválidas não terão seus dados atualizados no **Cloud Entitlements**.
:::

## Oracle Cloud (OCI)

No menu lateral, clique em **Configuração** > **Oracle Cloud (OCI)** para consultar as seguintes informações:

| Item | Descrição |
| :---- | :---- |
| **Tipo** | Exibe o tipo da conta conectada ao **Cloud Entitlements**. Você pode se conectar com um compartimento da Oracle Cloud. |
| **ID do compartimento** | Exibe o ID do compartimento da Oracle Cloud. |
| **Nome** | Informa o nome do compartimento dentro do **Cloud Entitlements**. |
| **Conectado em** | Indica a data e hora em que o compartimento foi conectado ao **Cloud Entitlements**. |
| **Sincronização** | Indica o status da sincronização do compartimento com **Cloud Entitlements**. A sincronização é iniciada automaticamente a cada 15 minutos, seja após a conclusão de um processo ou após o início de um reprocessamento. |
| **Status** | *Switch* para ativar ou desativar o compartimento no **Cloud Entitlements**. **Nota**: desativar a conta ou organização removerá as identidades e recomendações da conta do relatório. |

Na coluna **Ações**, representada pelos três pontos verticais, você tem três opções:

- **Editar**: edita as informações do compartimento OCI.  
- **Políticas de Segurança**: redireciona para a tela de política de segurança do compartimento selecionado.  
- **Reprocessar**: reprocessa o compartimento, sincronizando os dados com o CSP.
