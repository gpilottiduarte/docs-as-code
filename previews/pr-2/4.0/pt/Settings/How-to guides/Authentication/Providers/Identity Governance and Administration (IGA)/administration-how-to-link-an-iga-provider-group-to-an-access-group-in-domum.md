# Como vincular um grupo do provedor de IGA a um grupo de acesso no Domum

Para finalizar o provisionamento de terceiros no **Domum Remote Acess** via IGA, o último passo é vincular um grupo do seu provedor de IGA a um grupo de acesso no **Domum**. Neste artigo, você encontra um guia passo a passo para essa tarefa.
:::(Info) (Info)
Se você estiver provisionando um grupo de usuários internos, você pode ignorar este tutorial. Os usuários internos são vinculados aos grupos de acesso no momento do seu cadastro na plataforma. 
:::

* * *

## Requisitos 

* [Grupo de acesso previamente configurado no **Domum**](/v4/docs/pt/domum-create-access-group-for-vendor)
:::(Warning) (Atenção)
Se o mesmo usuário estiver em mais de um fornecedor, ele será colocado no último grupo encontrado na sincronização.
:::

1. 1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Domum Remote Access**.
2. No menu lateral, acesse **Configurações > Fornecedores**.
3. Na lista, localize o **Fornecedor** referente ao [grupo que você ativou no provedor de acesso de IGA](/v4/docs/pt/administration-how-to-create-a-scim-application-with-okta).
4. Na coluna de ação à direita, clique no ícone **Alterar**.
5. Na janela de atualização, complete as informações na aba **Dados cadastrais**:
    1. **Fabricante*** : já vem preenchido.
    2. **Grupo de acesso***: selecione um [grupo previamente cadastrado no **Domum**.](/v4/docs/pt/domum-create-access-group-for-vendor)
    3. **Início de contrato***: selecione uma data.
    4. **Status***: marque **Ativo**.
6. Clique em **Salvar**.

Será exibida uma mensagem de confirmação indicando a conclusão do processo. Agora você pode usar sua aplicação para realizar operações de gerenciamento de identidade, como criação, atualização e exclusão de usuários. Seu provedor de IGA se encarregará de sincronizar essas alterações com a aplicação que você criou.

* * *
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).



