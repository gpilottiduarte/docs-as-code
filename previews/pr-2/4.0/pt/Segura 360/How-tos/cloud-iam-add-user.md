# Adicionar usuário

Os usuários são aqueles com acesso ao console pessoal das contas dos provedores de nuvem.

:::(Warning) (Atenção)
O sincronismo dos usuários e contas de serviço não removerão permissões e papéis adicionados diretamente na nuvem. Neste caso, as permissões serão sincronizadas trazendo as novas para o Segura. Se a permissão foi inativada ou removida dentro do Segura, também será removida do *Cloud Service Provider*.
:::

## Adicionar um usuário

Para adicionar um usuário, siga os passos: 

1. Acesse **Cloud IAM \> Gerenciamento de identidade \> Usuários**.  
2. Clique em **Adicionar**.  
3. No campo **Usuário \***, selecione o usuário.
    :::(Warning) (Atenção)
    Caso você esteja dentro de um grupo de acesso que tenha um *template* definido, a lista de usuários pode estar exibindo apenas usuários do departamento selecionado no template.
    :::
4. No campo **Usuário responsável**, selecione qual usuário do Segura é responsável pela conta de serviço.
    :::(Info) (Info)
    Este campo também define qual usuário Segura poderá iniciar uma sessão em uma instância na máquina virtual utilizando este usuário da nuvem.
    :::
5. No campo **TTL (segundos)**, insira o tempo de vida da conta de serviço e suas credenciais.  
6. (Opcional): No campo **Descrição**, insira uma descrição.  
7. (Opcional): No campo **Tags**, insira *tags*.  
8. Navegue até a aba do provedor que deseja adicionar.

:::(Info) (Info)
Você pode registrar contas da [AWS](/v4/docs/pt/add-user#adicionar-um-usuário-aws), [Azure](/v4/docs/pt/add-user#adicionar-um-usuário-azure) e [Google Cloud](/v4/docs/pt/add-user#adicionar-um-usuário-google-cloud) na mesma tela ao mesmo tempo.
:::

## Adicionar um usuário AWS

Para adicionar um usuário AWS, siga os passos: 

1. Acesse **Cloud IAM \> Gerenciamento de identidade \> Usuários**.  
2. Clique em **Adicionar**.  
3. Vá para a aba **AWS**.  
4. Na seção **Contas**, selecione em quais contas este usuário deverá ser criado.  
5. Na seção **Políticas**, selecione as políticas (grupo de permissões) que este usuário deverá possuir na conta. A AWS limita em até 10 políticas por usuário.  
6. Navegue para a aba **Revisão** e clique em **Salvar**.

## Adicionar um usuário Azure

Para adicionar um usuário Azure, siga os passos: 

1. Acesse **Cloud IAM \> Gerenciamento de identidade \> Usuários**.  
2. Clique em **Adicionar**.  
3. Vá para a aba **Azure**.  
4. Na seção **Tipo de criação**, selecione qual tipo de usuário deseja criar. As opções são: *Criar usuário* ou *Convidar usuário*.  
5. Na seção **Funções**, selecione quais funções (grupos de permissões) o usuário deverá ser adicionado.  
6. Na seção **Grupos**, selecione em quais grupos o usuário deverá ser adicionado.  
7. Navegue para a aba **Revisão** e clique em **Salvar**.

## Adicionar um usuário Google Cloud

Para adicionar um usuário Google Cloud, siga os passos: 

1. Acesse **Cloud IAM \> Gerenciamento de identidade \> Usuários**.  
2. Clique em **Adicionar**.  
3. Vá para a aba **Google Cloud**.  
4. Na seção **Papéis de organização**, selecione quais roles (grupos de permissões), contas e organizações o usuário deverá ser adicionado.  
5. Na seção **Papéis de projeto**, selecione quais roles (grupos de permissões), contas e projetos o usuário deverá ser adicionado.  
6. Navegue para a aba **Revisão** e clique em **Salvar**.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).