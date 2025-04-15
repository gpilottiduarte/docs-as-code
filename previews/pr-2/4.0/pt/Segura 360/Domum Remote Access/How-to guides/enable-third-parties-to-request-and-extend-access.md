# Como habilitar usuários terceiros a solicitar e prorrogar acessos

Você pode habilitar usuários terceiros a solicitar seu próprio acesso a uma credencial ou a um dispositivo já aprovados. Também é possível permitir que o usuário prorrogue um acesso já autorizado no **Domum Remote Access**.

## Pré-requisitos

- O terceiro poderá solicitar acesso ou prorrogação apenas para ele mesmo.  
- A solicitação deve partir do desktop do terceiro. Assim, apenas terceiros com links ativos poderão solicitar um acesso ou sua prorrogação.  
- Apenas terceiros com a autorização no cadastro da empresa poderão solicitar o acesso ou sua prorrogação.  
- O terceiro poderá solicitar acesso apenas a credenciais ou dispositivos que já tenham acesso aprovado no passado.  
- O terceiro poderá solicitar a prorrogação apenas a acessos que estejam ativos.  

## Habilitar usuários terceiros a solicitar seus próprios acessos

A solicitação do acesso segue a mesma regra da prorrogação, e as duas ações são habilitadas no mesmo parâmetro. A diferença é que na nova solicitação, o acesso já expirou; e na prorrogação, o acesso à credencial ou dispositivo ainda está ativo.

1. No Segura, na barra de navegação, passe o mouse sobre o Menu de produtos e selecione **Domum Remote Access**.
2. No menu lateral, selecione **Controle de acesso** > **Políticas de acesso** > **Grupos**.  
3. Siga as instruções para [Como criar um grupo de acesso para fornecedores](/v4/docs/pt/create-vendor-access-group).  
   * Como alternativa, localize um grupo de acesso já existente e clique no botão **Editar** na coluna à direita.  
4. No campo **Configurações da solicitação de acesso**, marque **Sim** na opção **Terceiros podem solicitar seus próprios acessos?\***  
5. Clique em **Salvar.**
:::(info) (Info)
Uma vez registradas, as solicitações vão seguir o mesmo workflow de aprovação definido no Grupo de Acesso.
:::

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/)