# LDAP/Active Directory - Parâmetros de Sistema

Neste documento, você vai encontrar todas as informações dos parâmetros de configuração para servidores de LDAP/Active Directory.

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações.**  
2. No menu lateral, selecione **Parâmetros de sistemas \> Parâmetros de sistema.**  
3. No relatório **Parâmetros de sistema**, selecione **LDAP/Active Directory.**

## LDAP/AD

Neste relatório é possível configurar diversos aspectos de servidores e autenticação LDAP e AD no senhasegura.

### Configuração de serviço LDAP

| Item | Descrição |
| :---- | :---- |
| **Inativar usuários sem grupo ao sincronizar?\*** | Radio button. Ao ativar essa opção todos os usuários sem grupo serão inativados na sincronização LDAP/AD. |
| **Utilizar uma credencial do cofre na autenticação?** | Radio button.Caso você escolha a opção **Sim**, o campo de servidor irá usar uma credencial no cofre, caso escolha a opção **Não**, a tela exibirá um campo de usuário e outro de senha |

### Opções de login

| Item | Descrição |
| :---- | :---- |
| **Atualizar nome do usuário ao logar?\*** | *Radio button.* Ao ativar essa opção, o nome do usuário será atualizado após o logon. |
| **Atualizar e-mail de contato ao logar?\*** | *Radio button.* Ao ativar essa opção, o endereço e-mail do usuário será atualizado após o logon. |
| **Atualizar senha local ao logar?\*** | *Radio button.* Ao ativar essa opção, a senha local do usuário será atualizado após o logon. |
| **Ativar usuário local ao logar?\*** | *Radio button.* Ao ativar essa opção, o usuário local será ativado após o logon. |
| **Bloquear o login quando usuário estiver inativo no sistema?\*** | *Radio button.* Ao ativar essa opção, os usuários que estiverem inativos no sistema terão o seu login bloqueado no senhasegura. |

### Configuração de domínios

| Item | Descrição |
| :---- | :---- |
| **Novo domínio \+** | Representado pelo ícone de adição, habilita os campos para adicionar dominíos no senhasegura. |
| **Domínio** | Campo de texto. Preencha com o endereço completo para o domínio. |
| **Domínio (Short Name)** | Campo de texto. Preencha com o endereço curto para o domínio. |
| **Ícone de lixeira.** | Apaga o registro de domínio. |