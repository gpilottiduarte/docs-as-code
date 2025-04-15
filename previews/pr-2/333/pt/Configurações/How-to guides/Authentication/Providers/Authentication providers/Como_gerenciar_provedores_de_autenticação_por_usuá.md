# Como gerenciar provedores de autenticação por usuário

Definir um provedor por usuário é uma medida de segurança destinada a cenários específicos. Por exemplo, é aplicável quando lidamos com usuários de alta confiança que devem configurar um mecanismo de fallback (reserva) para autenticação. O sistema deve possibilitar a esses usuários o uso de uma opção alternativa sempre que a autenticação primária falhar.

Outra situação que requer essa medida é a definição de um provedor diferente do padrão para um usuário específico. Para maiores informações, acesse o documento sobre [Como gerenciar provedores de autenticação](/v3-33/docs/pt/user-management-enable-authentication-providers).

:::(error) (Alerta!)
Perceba que, caso o usuário tenha algum provedor de autenticação por usuário previamente cadastrado, o senhasegura irá ignorar o provedor do sistema e fará a tentativa utilizando apenas o provedor de autenticação do usuário.
:::

:::(info) (Info)
O usuário admin instalado por padrão no senhasegura tem o provedor Local como provedor de autenticação primário.
:::

## Definir um provedor para usuário

Para definir um provedor para usuário, siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Autenticação > Provedor por usuário**.
3. No canto superior direito, clique em **Exibir ações**, representado pelo ícone dos três pontos verticais e selecione **Novo**.
4. Na janela **Provedor por Usuário** selecione uma das opções disponíveis.
5. Em **Ordem**, defina a prioridade desse provedor.
6. Clique no ícone de soma, ao lado da palavra **Usuários** para abrir o modal **Usuários do Sistema**.
7. No modal **Usuários do Sistema**, localize os usuários desejados.
8. Marque a caixa à esquerda ao lado do código do usuário para selecioná-lo.
9. Clique em **Adicionar**.
10. Clique em **Salvar**.

Os usuários selecionados aparecerão listados na página principal, com o provedor e a ordem definidos.