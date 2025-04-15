# Como gerenciar provedores de autenticação por usuário

Definir um provedor por usuário é uma medida de segurança destinada a cenários específicos. Por exemplo, é aplicável quando lidamos com usuários de alta confiança que devem configurar um mecanismo de fallback (reserva) para autenticação. O sistema deve possibilitar a esses usuários o uso de uma opção alternativa sempre que a autenticação primária falhar.

Outra situação que requer essa medida é a definição de um provedor diferente do padrão para um usuário específico. Para maiores informações, acesse o documento sobre [Como gerenciar provedores de autenticação](/v4/docs/pt/user-management-enable-authentication-providers).

:::(error) (Alerta!)
Perceba que, caso o usuário tenha algum provedor de autenticação por usuário previamente cadastrado, o Segura irá ignorar o provedor do sistema e fará a tentativa utilizando apenas o provedor de autenticação do usuário.
:::

:::(info) (Info)
O usuário admin instalado por padrão no Segura tem o provedor Local como provedor de autenticação primário.
:::

## Definir um provedor para usuário

Para definir um provedor para usuário, siga os passos abaixo:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Usuários por provedor**.
3. No relatório **Usuários por provedor**, clique no botão **Adicionar**.
4. Na tela **Novo provedor por usuário**:
    1. Provedor de autenticação: selecione o provedor de autenticação para o usuário.
    2. Ordem: defina a prioridade desse provedor.
    3. Para adicionar usuários ao provedores, clique no botão **Adicionar** que irá abrir o modal **Usuários**.
    4. No modal **Usuários do Sistema**, localize os usuários desejados.
    5. Marque a caixa à esquerda ao lado do código do usuário para selecioná-lo.
    6. Clique em **Adicionar**.
5. Clique em **Salvar**.

Os usuários selecionados aparecerão listados na página principal, com o provedor e a ordem definidos.