# Como cadastrar um provedor de autenticação de multifator (MFA)

Registrar um provedor de autenticação de multifator (MFA) é um passo crucial para fortalecer a segurança dos sistemas de informação e garantir que apenas usuários autorizados tenham acesso a dados sensíveis e recursos críticos. O MFA adiciona uma camada extra de proteção ao processo de autenticação, exigindo que os usuários forneçam dois ou mais fatores de verificação antes de conceder acesso aos sistemas. Esta abordagem combina algo que o usuário sabe (como uma senha), algo que o usuário tem (como um token de segurança ou um aplicativo de smartphone) e, às vezes, algo que o usuário tem (como uma impressão digital ou reconhecimento facial).

## Requisitos

* Ter o papel de *System Administrator*.

## Cadastrar um provedor MFA

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Autenticação de multifator \> Provedores**.  
3. No relatório **Provedores de autenticação multifator**, na barra superior, clique em **Exibir ações**, representado pelo ícone dos três pontos verticais, e selecione **Novo**.  
4. Na janela **Selecione o provedor.** As opções são *RSA Authenticator, Duo Security, Radius* e *AuthID* .

:::(info) (Info)  
Os passos seguintes podem ser usados para todos os provedores de autenticação de multifator, **exceto** os provedores **AuthID e Radius** que tem campos próprios. Para informações, acesse o documento sobre  como cadastrar um provedor **AuthID e Radius.**   
:::

###  Cadastrar um provedor

1. Na janela **Registro Provider**, preencha os campos:  
   1. **Nome:** nome do provedor de autenticação.  
   2. **Ativo:** selecione **Sim**.  
   3. **Endpoint**: indique o endpoint do provedor.  
   4. **Client ID**: indique o valor da **Client ID** do provedor.  
   5. **Chave**: indique a chave do provedor.  
2. Clique em **Salvar**.

## Alterar um provedor MFA

1. Para alterar um provedor previamente cadastrado, acesse o relatório **Provedores de autenticação de multifator** e, na coluna **Ação**, clique em **Alterar**, representado pelo ícone do lápis e papel.  
2. A janela **Registro Provider** será aberta em modo de edição.  
3. Altere o que for necessário e clique em **Salvar**.

## Desativar um provedor MFA

1. Para desativar um dispositivo previamente cadastrado, acesse o relatório **Provedores de autenticação de multifator** e, na coluna **Ação**, clique em **Alterar**, representado pelo ícone do lápis e papel.  
2. A janela **Registro Provider** será aberta em modo de edição.  
3. No campo **Ativo**, selecione **Não**.  
4. Clique em **Salvar**.

## Ativar um dispositivo MFA

1. Para ativar um dispositivo previamente cadastrado, que esteja inativo no momento, acesse o relatório **Provedores de autenticação de multifator**.  
2. Na barra de filtros, selecione **Não** no menu suspenso **Ativo** e clique em **Filtrar**.  
3. Na coluna **Ação**, clique em **Alterar**, representado pelo ícone do lápis e papel.  
4. A janela **Registro Provider** será aberta em modo de edição.  
5. No campo **Ativo**, selecione **Sim**.  
6. Clique em **Salvar**.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).