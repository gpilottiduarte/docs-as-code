# Como criar uma aplicação

Este tutorial apresenta um passo a passo sobre como criar uma aplicação no módulo **A2A**.

## Criar uma aplicação

1. Na plataforma senhasegura, no canto superior esquerdo, clique no **Grid Menu**, identificado pelos nove quadrados, e selecione **A2A**.
2. No menu lateral, selecione **Aplicações**.
3. No canto superior direito, clique nos três pontos verticais para abrir um menu suspenso.
4. No menu suspenso, clique em **+ Nova**.
5. Na janela **Configuração da aplicação**, preencha os campos:
    1. **Nome da aplicação***: um nome personalizado para a aplicação.
    2. **Utilizar assinatura OAuth***: o método de autenticação usado pela aplicação. Os métodos disponíveis são **OAuth 1.0, OAuth 2.0**, e **AWS**. Para mais informações, acesse as documentações [Autenticação](/v3-32/docs/pt/a2a-authentication) e [Como autenticar uma aplicação](/v3-32/docs/pt/a2a-how-to-authenticate-an-application).
    
 
    :::(Info) (Info)
    Para mais segurança, o senhasegura recomenda o uso do método de autenticação **OAuth v2.0**. 
    :::
    c. **Ativo***: a situação da aplicação. As opções são **Sim** e **Não**. Quando inativa, a aplicação não pode ser autenticada ou acessar os recursos do senhasegura.
    d. **Tags**: palavras-chave atribuídas à aplicação.
    e. **Descrição**: descrição detalhada da aplicação como seu propósito, função, ou qualquer outra informação relevante que auxilie no entendimento e gerenciamento da aplicação.
    f. **Amazon AWS ARNs**: caso você escolha o método de autenticação **AWS**, clique no sinal de adição ao lado de **Amazon AWS ARNs** para adicionar ARNs à aplicação. As ARNs adicionadas podem ser visualizadas na lista **ARN** desta tela. Para deletar uma **ARN**, clique no ícone de lixeira. Para mais informações, acesse o documento [Autenticador da AWS](/v3-32/docs/pt/dsm-how-to-configure-authenticators). 
    
 6. Clique em **Salvar**.

Visualize as aplicações criadas no relatório disponível na tela **Aplicações**.


**Próximos passos:**

[Como editar uma aplicação](/v3-32/docs/pt/a2a-how-to-edit-an-application)
[Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application)
[Como autenticar uma aplicação](/v3-32/docs/pt/a2a-how-to-authenticate-an-application)
[Como inativar uma aplicação](/v3-32/docs/pt/a2a-how-to-deactivate-an-application)


Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).



