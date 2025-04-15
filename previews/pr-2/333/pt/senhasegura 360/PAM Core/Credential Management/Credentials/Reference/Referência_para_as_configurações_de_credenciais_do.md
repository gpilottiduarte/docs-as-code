# Referência para as configurações de credenciais domínio

Acesse  as configurações para credenciais de domínio através do caminho **Grid Menu > PAM Core > Configurações > Credenciais > Domínio.** Essa opção direciona você para a tela de **LDAP/Active Directory.**

## Configuração do servidor LDAP

| Campo | Descrição |
| --- | --- |
| Inativar usuários sem grupo ao sincronizar? | Inativa os usuários que, no ato da sincronização entre o senhasegura e o servidor LDAP, não estejam em nenhum grupo. As opções são **Sim** ou **Não**. Este campo é obrigatório e, por padrão, vem marcado como **Sim**. |
| Utilizar uma credencial do cofre na autenticação? | Utiliza a credencial cadastrada no cofre para autenticação no servidor LDAP. As opções são **Sim** ou **Não**. Este campo é obrigatório e, por padrão, vem marcado como **Sim**. |

## Opções de login

| Campo | Descrição |
| --- | --- |
| Atualizar nome do usuário ao logar? | Atualiza o nome do usuário ao realizar login. As opções são **Sim** ou **Não**. Este campo é obrigatório e, por padrão, vem marcado como **Sim**. |
| Atualizar e-mail de contato ao logar? | Atualiza o e-mail de contato ao realizar login. As opções são **Sim** ou **Não**. Este campo é obrigatório e, por padrão, vem marcado como **Sim**. |
| Atualizar senha local ao logar? | Atualiza a senha local ao realizar login. As opções são **Sim** ou **Não**. Este campo é obrigatório e, por padrão, vem marcado como **Sim**. |
| Ativar usuário local ao logar? | Ativa o usuário local ao logar. As opções são **Sim** ou **Não**. Este campo é obrigatório e, por padrão, vem marcado como **Sim**. |
| Bloquear o login quando usuário estiver inativo no sistema? | Bloqueia um usuário inativo. As opções são **Sim** ou **Não**. Este campo é obrigatório e, por padrão, vem marcado como **Sim**. |

## Configurações dos domínios

Nessa seção, é possível adicionar novos domínios. Estes domínios ficarão disponíveis para o cadastro de credenciais. Para saber mais sobre credenciais e domínios, acesse a documentação sobre **Credenciais de domínio.**

| Campo | Descrição |
| --- | --- |
| Domínio | Campo para adicionar um domínio que será usado posteriormente. |
| Domínio (Short Name) | Campo para adicionar um nome curto para identificar o domínio cadastrado na plataforma senhasegura. |

:::(Info) (Info)
Os domínios associados aos dispositivos e credenciais não serão excluídos.
:::