# Como gerenciar senhas do MySafe no app Segura

Este documento fornece informações sobre como adicionar e gerenciar senhas no **MySafe** usando o aplicativo **Segura**.

## Requisitos

* O aplicativo móvel **Segura** conectado à sua conta e habilitado em seu dispositivo móvel. Saiba mais em [Primeiros passos](/v4/docs/pt/senhasegura-mobile-app-first-steps).

## Caminho para acesso

1. Na tela **Produtos** do aplicativo móvel **Segura**, selecione **MySafe**.  
2. Na barra superior, no canto esquerdo, clique no menu lateral e selecione **Senhas**.

## Adicionar senha manualmente 

Para adicionar uma senha manualmente usando o app **Segura**, siga estes passos:

1. Em **MySafe \> Senhas**, clique em **Adicionar** no canto inferior direito.  
2. Na tela **Nova senha**, preencha:  
   :::(error) (Alerta)  
   Os campos com asterisco são obrigatórios.  
   :::  
   1. **Nome**\*: nome para identificar a senha.  
   2. **Url**\*: endereço do site onde a senha será usada.   
   3. **Username**\*:  nome de usuário associado à senha.  
   4. **Senha**: insira a senha.   
      1. Clique em **Mostrar** para visualizar a senha digitada.   
      2. Clique em **Gerar** para gerar uma senha automática conforme os critérios definidos na opção **Configurar**.  
      3. Clique em **Configurar** para definir os critérios de geração de senha.  
      4. Verifique a força da senha na barra de progresso. 
      :::(warning) (Atenção)  
         Gere senhas fortes com, pelo menos, 12 caracteres, letras maiúsculas, minúsculas, dígitos e símbolos.          :::  
   5. **Segredo (TOTP)**: se sua conta está protegida com autenticação multifator, insira a chave para gerar o *token* temporário (TOTP).  
      1. Clique em **Mostrar** para visualizar a chave secreta digitada.   
      2. Clique em **QR code** para escanear a chave secreta gerada a partir de um QR code.  
        :::(error) (Alerta)
        * Insira uma chave secreta com, pelo menos, 10 caracteres, letras maiúsculas de A-Z e números de 2-7.
        * Sincronize o relógio do seu dispositivo com a hora correta. Desvios de horário podem afetar a geração e validação do *token* TOTP.  
         :::  
  6. **Tags**: palavras-chave para categorizar a senha.  
  7. **Anotação**: informações gerais sobre a senha.  
5. Clique em **Salvar** no canto superior direito da tela.

## Visualizar os detalhes da senha

Para visualizar detalhes de uma senha usando o app **Segura**, siga estes passos:

1. Na listagem de senhas, identifique o *card* da senha desejada e visualize Nome e *Username* e os botões de ação para **Copiar** e **Editar senha***.*  
2. Clique no *card* para expandi-lo.  
3. Visualize detalhes como *Tags,* TOTP e os botões de ação para **Ver senha**, **Copiar username** e **Copiar TOTP**.  
4. Clique no *card* expandido para retorná-lo ao formato compacto.

## Editar senha

Para editar informações de uma senha usando o app **Segura**, siga estes passos:

1. Na listagem de senhas, identifique o *card* da senha desejada e clique em **Editar senha**.  
2. Na tela **Editar senha**, faça as alterações necessárias.
    :::(info) (Info)  
       Por ser uma informação sensível, não é possível visualizar o **Segredo** da senha. Deixe o campo vazio para manter o valor ou insira um novo valor para editá-lo.  
     :::

3. Clique em **Salvar** no canto superior direito da tela.

## Copiar detalhes de login

Para copiar detalhes de login usando o app **Segura**, siga estes passos:

1. Na listagem de senhas, clique no *card* da senha desejada e clique em:  
   1. **Copiar senha**.  
   2. **Copiar username**.  
   3. **Copiar TOTP**. Disponível se houver um segredo (*secret key*) associado.
        :::(warning) (Atenção)  
        As informações de login copiadas ficam armazenadas temporariamente na área de transferência do seu dispositivo móvel, podendo ser acessadas por outros programas.  
        :::

___

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).

