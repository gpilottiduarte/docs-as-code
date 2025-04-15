# Como cadastrar um provedor de autenticação multifator AuthID

O senhasegura permite integrar o AuthID como provedor de autenticação multifatorial.

## Requisitos

* Ter o papel de System Administrator.

## Cadastrar um provedor MFA do tipo AuthID

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Autenticação de multifator \> Provedores**.  
3. No relatório **Provedores de autenticação multifator**, na barra superior, clique em **Exibir ações**, representado pelo ícone dos três pontos verticais, e selecione **Novo**.  
4. Na janela **Selecione o provedor,** selecione **AuthID**.  
5. Na janela **Registro Provider**, preencha os campos:  
   1. **Nome**: nome identificador do provedor AuthID.  
   2. **Ativo**: indica se o provedor está ativo ou inativo. Selecione **Sim**.  
   3. **External ID**: identificador único externo fornecido pelo AuthID para este provedor específico.  
   4. **API Key Value**: Chave de API fornecida pelo AuthID para autenticar as requisições deste provedor.  
6. Clique em **Salvar**.

## Alterar um provedor AuthID

1. Para alterar um dispositivo previamente cadastrado, acesse o relatório **Provedores de autenticação de multifator** e, na coluna **Ação**, clique em **Alterar**, representado pelo ícone do lápis e papel.  
2. A janela **Registro Provider** será aberta em modo de edição.  
3. Altere o que for necessário e clique em **Salvar**.

## Desativar um provedor AuthID

1. Para desativar um dispositivo previamente cadastrado, acesse o relatório **Provedores de autenticação de multifator** e, na coluna **Ação**, clique em **Alterar**, representado pelo ícone do lápis e papel.  
2. A janela **Registro Provider** será aberta em modo de edição.  
3. No campo **Ativo**, selecione **Não**.  
4. Clique em **Salvar**.

## Ativar um provedor AuthID

1. Para ativar um dispositivo previamente cadastrado, que esteja inativo no momento, acesse o relatório **Provedores de autenticação de multifator**.  
2. Na barra de filtros, selecione **Não** no menu suspenso **Ativo** e clique em **Filtrar**.  
3. Na coluna **Ação**, clique em **Alterar**, representado pelo ícone do lápis e papel.  
4. A janela **Registro Provider** será aberta em modo de edição.  
5. No campo **Ativo**, selecione **Sim**.  
6. Clique em **Salvar**.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).