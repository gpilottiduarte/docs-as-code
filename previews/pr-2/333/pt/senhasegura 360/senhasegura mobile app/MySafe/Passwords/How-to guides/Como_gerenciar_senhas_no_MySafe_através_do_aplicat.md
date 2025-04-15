# Como gerenciar senhas no MySafe através do aplicativo móvel senhasegura

Neste documento, você encontra um guia passo a passo sobre como adicionar, visualizar, copiar e editar as informações de uma senha no **MySafe** através do aplicativo móvel **senhasegura**.

## Requisitos

* O aplicativo móvel **senhasegura** conectado à sua conta e habilitado em seu dispositivo móvel. Acesse o documento [Primeiros passos](/v3-33/docs/pt/senhasegura-mobile-app-first-steps) para mais informações.

## Caminho para acesso
1. No aplicativo móvel **senhasegura**, clique em **Produtos** e selecione **MySafe**.
2. Na barra superior, clique no ícone das três barras verticais e selecione **Senhas**. 

***

## Adicionar senha
Para adicionar uma senha ao **MySafe** através do aplicativo móvel **senhasegura**, siga os passos a seguir:


1. No canto inferior direito da tela **Senhas**, clique no sinal de adição.

1. Na tela **Adicionar nova senha**, preencha as seguintes informações:
    1. **Nome***: insira um nome para identificar a senha
    2. **URL***: insira a URL do site em que a senha será usada.
    3. **Nome de usuário***: insira o nome de usuário da conta.
    4. **Senha***: insira a senha.
    5. **Secret key (TOTP)**: se sua conta estiver configurada para usar autenticação de múltiplos fatores, insira a chave secreta usada para gerar o TOTP (*Time-based One-Time Password*).
     ::: (warning) (Atenção)
     * Para garantir o correto funcionamento do recurso, certifique-se de que o relógio do seu dispositivo esteja sincronizado com o horário correto. Desvios de horário podem afetar a geração e validação do TOTP.
    <br>
     * A chave secreta deve conter pelo menos 10 caracteres e ser codificada em base32, ou seja, deve incluir apenas letras maiúsculas de A a Z, números de 2 a 7, e o caractere =.
    :::

    6. **Tags**: insira palavras-chaves para ajudar a identificar a senha.
    7. **Anotações**: insira observações sobre a senha.

:::(Info) (Info)
Os itens com asterisco são obrigatórios.
:::

3. No canto superior direito da tela **Adicionar nova senha**, clique no ícone de **check** para salvar a senha.

Para cancelar a ação, clique no ícone de **x** no canto superior esquerdo da tela.

Ao finalizar, você será direcionado para a tela **Senhas** onde poderá visualizar todas as senhas adicionadas, listadas por nome.
***

## Visualizar e/ou copiar  as informações da credencial

Nesta seção, você encontra informações detalhadas sobre como visualizar e/ou copiar as informações de uma credencial, como senha, nome de usuário e TOTP.

## Requisitos

* Uma senha salva no **MySafe**. Para mais informações sobre como adicionar uma senha através do aplicativo móvel **senhasegura**, consulte a seção [Adicionar senha](/v3-33/docs/pt/senhasegura-mobile-app-how-to-manage-passwords-in-mysafe#adicionar-senha) deste documento.

Para visualizar e/ou copiar uma senha no **MySafe** através do aplicativo móvel **senhasegura**, siga os passos abaixo:

1. Na tela **Senhas**, localize a senha que você deseja visualizar e clique no seu respectivo nome.

1. Um card expandido exibirá outras informações sobre a senha como sua **URL**, **TOTP**, **Tags** e **Observações** bem como os botões **Visualizar senha** e **Copiar nome de usuário**.

1. Para visualizar e/ou copiar a senha:
    1. Clique em **Visualizar senha**.
    2. Na parte inferior da tela, você visualizará um card com o nome da senha, o botão copiar, representado pelo ícone de duas folhas de papel, e o botão visualizar, representado por um ícone de olho.
    3. Clique no ícone de **olho** para visualizar a senha.
    4. Clique no ícone de **duas folhas de papel**, para copiar a senha para sua área de transferência.
    
    :::(info) (Info)
    Você também pode copiar a senha a partir da versão compacta do card clicando no ícone de **duas folhas de papel**.
    :::
    A mensagem **“Senha copiada”** na       parte inferior da tela confirma a ação.

<br>

4. Para copiar o nome de usuário:
    1. Clique em **Copiar nome de usuário**.
    A mensagem **“Username copiado”** na parte inferior da tela confirma a ação.
 
<br>
5. Para copiar o TOTP:
    1. Clique em **Copiar TOTP**.
    A mensagem **“TOTP copiado”** na parte inferior da tela confirma a ação.

:::(info)  (Info)
Esse botão estará disponível apenas se você tiver informado uma *secret key* válida ao adicionar uma senha ao **MySafe**.
:::
 <br>
5. Clique fora do card para fechá-lo.

:::(Warning) (Atenção)

Ao copiar uma informação, ela é adicionada à sua área de transferência, dando acesso a outras aplicações do seu dispositivo.
:::


## Editar senha

## Requisitos

* Uma senha salva no **MySafe**. Para mais informações sobre como adicionar uma senha através do aplicativo móvel **senhasegura**, consulte a seção [Adicionar senha](/v3-33/docs/pt/senhasegura-mobile-app-how-to-manage-passwords-in-mysafe#adicionar-senha) deste documento.
***
Para editar uma senha salva no **MySafe** através do aplicativo móvel **senhasegura**, siga os passos abaixo:

1. Na tela **Senhas**, localize a senha que você deseja editar.

1. Do lado direito do nome da senha e ao lado do botão de copiar, clique no ícone de **lápis e papel**.

1. Na tela **Editar senha**, faça as alterações necessárias.

1. No canto superior direito, clique no ícone de **check** para salvar as alterações feitas.

Para cancelar as alterações feitas, clique no ícone de **x**, no canto superior esquerdo da tela **Editar senha**.

A mensagem **“Senha editada”** na parte inferior da tela confirma a ação.

Ao finalizar, você será direcionado para a tela **Senhas** onde poderá visualizar todas as senhas adicionadas, listadas por nome.

***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
