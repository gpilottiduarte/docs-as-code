# Identidades de máquina

Este documento fornece informações sobre o relatório **Identidades de máquina** no painel **Relatórios**, que exibe informações sobre todas as identidades de máquina dos módulos **DevOps Secret Manager (DSM)**, **Certificate Manager**, **PAM Core** e **Discovery**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Relatórios**.  
2. No menu lateral, selecione **Identidades de máquina**.

## Menu de ações	

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório*, *Exportar CSV* e *Agendar relatório*. |

## Campos de busca

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Identificador** | Campo de texto | Filtra as identidades pelo identificador. |
| **Tipo** | Menu suspenso | Filtra as identidades pelo tipo. Os tipos são: *Chave SSH*, *Certificado*, *Credencial Cloud*, *Credencial* e *Conta de serviço*. |
| **Proprietário** | Campo de texto | Filtra as identidades pelo proprietário. |
| **Status** | Menu suspenso | Filtra as identidades pelo *status*. As opções são: **Ativo** ou **Inativo**. |
| **Gerenciada?** | Menu suspenso |  Filtra as identidades com base em sua gestão pelo Segura. Uma identidade é considerada gerenciada nos seguintes casos: <br>- **Certificados**: quando configurados para publicação automática ao se aproximarem da data de expiração.<br>- **Senhas ou segredos**: quando estão configurados para rotação periódica.<br>- **Credenciais ou Credenciais Cloud**: quando o Segura tem custódia da senha.<br><br>O Segura não gerencia identidades que não se enquadram nessas categorias. As opções são: **Sim** ou **Não**.  |
| **Última mudança** | Campo de texto | Filtra as identidades pela data da última alteração. |

### Campos do relatório

- **Identificador.**  
- **Tipo.**  
- **Proprietário.**  
- **Status.**  
- **Gerenciada?.**  
- **Última mudança.**  
- **Origem**: origem da identidade.  
- **Ações**: As opções vão variar de acordo com o tipo de identidade, exceto o tipo **Conta de serviço** que não possui ação disponível.  
    - **Chave SSH**  
        - **Editar**: abre a tela [Cadastro da chave SSH](/v4/docs/pt/pam-credential-ssh-keys-registration).
        - **Detalhes**: abre a tela [Detalhes chave SSH](/v4/docs/pt/pam-credential-ssh-keys-details).
        - **Histórico**: abre a tela [Histórico da chave SSH](/v4/docs/pt/pam-credential-ssh-keys).
    - **Certificado**  
        - **Informações do certificado**: abre a tela [Informações do certificado](/v4/docs/pt/certificate-manager-certificate-information)
        - **E-mails enviados**: abre a tela [Caixa de saída](/v4/docs/pt/outbox).
    - **Credencial Cloud**  
        - **Detalhes**: abre a tela [Credenciais](/v4/docs/pt/cloud-iam-credentials). 
        - **Excluir**: abre um pop-up e exclui a credencial cloud.  
    - **Credencial**  
        - **Visualizar**: abre a tela [Visualizar credencial](/v4/docs/pt/pam-credential-view-credential).
        - **Detalhes**: abre a tela [Detalhes credencial](/v4/docs/pt/pam-credential-credentials-details).
        - **Histórico**: abre a tela [Histórico de senhas da credencial](/v4/docs/pt/pam-credential-all-credentials).
        - **Editar**: abre a tela [Cadastro da credencial](/v4/docs/pt/pam-credential-credentials-registration). 
        - **Clonar**: abre um pop-up e clona a credencial.  
    - **Conta de serviço**

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::