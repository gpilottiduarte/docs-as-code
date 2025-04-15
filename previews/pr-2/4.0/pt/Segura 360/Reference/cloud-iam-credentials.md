# Credenciais

Este documento fornece informações sobre a tela do relatório **Credenciais**, que exibe todas as credenciais de contas cadastradas no Segura, e permite a criação de novas credenciais para todos os *Cloud Service Providers* (CSPs) conectados à sua conta.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Cloud IAM**.  
2. No menu lateral, selecione **Gerenciamento de identidade \> Credenciais.**

## **Menu de ações**

| Item | Tipo | Descrição |
| ---- | ---- | ---- |
| **Adicionar** | Botão | Direciona para a tela [Credencial](/v4/docs/pt/cloud-iam-credentials#credencial). |
| **Ações** | Menu suspenso | Exibe as opções para *Importar credenciais da Azure, Reprocessar contas, Imprimir relatório, Exportar CSV e Agendar relatório.* |

## **Campos de busca**

| Item | Tipo | Descrição |
| ---- | ---- | ---- |
| **Código** | Campo de texto | Filtra as credenciais pelo código de identificação. |
| **Credencial** | Campo de texto | Filtra as credenciais pelo nome. |
| **Conta** | Menu suspenso | Filtra as credenciais pela conta conectada. As opções são todas as contas conectadas ao **Cloud IAM**. |
| **Usuário/Conta de serviço** | Menu suspenso | Filtra as credenciais pelo usuário ou conta de serviço conectada à credencial. As opções são todos os usuários e contas de serviço conectadas ao **Cloud IAM**. |
| **Tag** | Campo de texto | Filtra as credenciais pelas *tags*. |
| **Data de criação** | Seletor de data | Filtra as credenciais pela sua data de criação. |
| **Status** | Menu suspenso | Filtra as credenciais pelo seu status. As opções são: **Ativo** ou **Inativo**. |
| **Deletado** | Menu suspenso | Filtra as credenciais com base em se elas foram deletadas ou não. As opções são: **Sim** ou **Não**. |
| **Provedores** | Menu suspenso | Filtra as credenciais pelo seu provedor. As opções são: *AWS*, *Azure*, e *Google Cloud*. |

## **Campos do relatório**

- **Código**.  
- **Credencial**.  
- **Provedores**.  
- **Conta**.  
- **Tags**.  
- **Data de criação**.  
- **TTL (segundos)**: o tempo de vida da credencial.  
- **Status**.  
- **Deletado**.  
- **Ações**:  
    - **Adicionar nova chave**: abre a tela [Credencial](/v4/docs/pt/cloud-iam-credentials#credencial) com os campos **Provedores**, **Conta**, e **Usuário/Conta de serviço** preenchidos automaticamente.  
    - **Detalhes**: abre a tela [Credencial](/v4/docs/pt/cloud-iam-credentials#credencial1).  
    - **Excluir**: exibe um pop-up de confirmação da exclusão da credencial.

## **Credencial**

Essa seção fornece informações sobre a tela **Credencial**.

| Item | Tipo | Obrigatório | Descrição |
| ---- | ---- | ---- | ---- |
| **Provedores \*** | Menu suspenso | Sim | Provedor da credencial. As opções são: *AWS*, *Google Cloud*, e *Azure*. |
| **Conta \*** | Menu suspenso | Sim | Conta em que a credencial será criada. As opções são todas as contas criadas no **Cloud IAM**. |
| **Usuário/Conta de serviço \*** | Menu suspenso | Sim | Usuário ou conta de serviço em que a credencial será criada. As opções são todos os usuários ou contas de serviços criadas no **Cloud IAM.** |
| **TTL (segundos)** | Seletor de quantidade | Não | O tempo de vida da credencial. O *time-to-live* (TTL) começa a contar a partir da criação e quando expira, a credencial será automaticamente deletada do provedor. |
| **Environment** | Menu suspenso | Não | Ambiente onde a credencial será criada. |
| **System** | Menu suspenso | Não | Sistema configurado como parâmetros do sistema no Segura. |
| **Descrição** | Campo de texto | Não | Descrição da credencial. |
| **Tags** | Campo de texto | Não | *Tags* associadas com a credencial. |

## Credencial

| Item | Descrição |
| ---- | ---- |
| **Conta** | Conta onde a credencial será criada. |
| **Usuário** | Usuário ou conta de serviço onde a credencial será criada. |
| **Sistema** | Sistema configurado. |
| **Ambiente** | Ambiente da credencial. |
| **TTL** | O tempo de vida da credencial. |
| **Ativo** | *Status* da credencial. |
| **Deletado** | Exibe se a credencial foi deletada ou não. |
| **Descrição** | Descrição da credencial. |
| **Tags** | *Tags* da credencial. |
| **ID da chave de acesso** | ID da chave de acesso da credencial. |
| **Secret da chave de acesso** | Secret da chave de acesso da credencial. |
