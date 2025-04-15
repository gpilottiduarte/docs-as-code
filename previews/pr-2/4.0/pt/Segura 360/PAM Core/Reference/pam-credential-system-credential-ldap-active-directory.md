# Parâmetros do sistema - LDAP/Active directory

Este documento fornece informações sobre a tela do formulário **Parâmetros do sistema**, da aba **LDAP / Active Directory**, que se refere às parametrizações para servidores de LDAP/Active directory no Segura.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Parâmetros do sistema > Global > LDAP / Active Directory**.

ou

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Gerenciamento > Credenciais > Domínio**.

:::(warning) (**Atenção**)  
Todos os campos vêm preenchidos com um valor padrão, recomendado pelo Segura. Contudo, você pode fazer modificações conforme sua necessidade.  
::: 

---
## Aba LDAP / Active Directory
#### Seção Configuração do serviço LDAP
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Inativar usuários sem grupo ao sincronizar?*** | Botão de opção | Sim | Opção para que todos os usuários sem grupo sejam inativados na sincronização LDAP/AD. Opção padrão: **Sim**. |
| **Utilizar uma credencial do cofre na autenticação?*** | Botão de opção | Sim | Caso você escolha a opção Sim, o campo de servidor irá usar uma credencial no cofre. Caso escolha a opção Não, a tela exibirá um campo de usuário e outro de senha. Opção padrão: **Sim**. |

#### Seção Opções de login
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Atualizar nome do usuário ao logar?*** | Botão de opção | Sim | Opção para que o nome do usuário seja atualizado após o logon. Opção padrão: **Sim**. |
| **Atualizar e-mail de contato ao logar?*** | Botão de opção | Sim | Opção para que o endereço e-mail do usuário seja atualizado após o logon. Opção padrão: **Sim**. |
| **Atualizar a senha local ao logar?*** | Botão de opção | Sim | Opção para que a senha local do usuário seja atualizado após o logon. Opção padrão: **Sim**. |
| **Ativar o usuário local ao logar?*** | Botão de opção | Sim | Opção para que o usuário local seja ativado após o logon. Opção padrão: **Sim**. |
| **Bloquear o login quando usuário estiver inativo no sistema?*** | Botão de opção | Sim | Opção para que os usuários que estiverem inativos no sistema tenham o seu login bloqueado no Segura. Opção padrão: **Sim**. |

#### Seção Configuração dos domínios
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Buscar** | Campo de texto | Não | Busca os domínios adicionados na lista. |
| **Adicionar / Remover selecionados** | Botão | Não | Adiciona uma linha para que um novo domínio seja adicionado. |
| **Lista de domínios** | Campo de texto | Não | Lista com os domínios adicionados, contendo os campos *Domínio* e *Domínio (short name)*. |

:::(info) (**Info**)  
Os domínios associados aos dispositivos e credenciais não serão excluídos.  
:::