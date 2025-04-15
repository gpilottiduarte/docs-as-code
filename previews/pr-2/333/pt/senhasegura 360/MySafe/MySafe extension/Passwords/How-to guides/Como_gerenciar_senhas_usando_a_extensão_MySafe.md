# Como gerenciar senhas usando a extensão MySafe

Neste documento você encontra um guia passo a passo sobre como adicionar, editar, visualizar e copiar as informações de uma senha no **MySafe** usando a **extensão MySafe**. Além disso, fornece instruções sobre como usar a **extensão MySafe** para fazer login em sites usando as credenciais armazenadas no **MySafe**.

## Requisitos

- A **extensão MySafe** instalada e ativada no seu navegador. Para mais informações, acesse o documento sobre os [Primeiros passos](/v3-33/docs/pt/mysafe-extension-first-steps).

:::(Error) (Importante!)
 A detecção automática de campos de nome de usuário e senha pela **extensão MySafe** pode não ser compatível com todos os sites, pois dependemos dos padrões de detecção para esses campos.

Devido aos mecanismos de segurança de aplicativos de terceiros, não podemos garantir a funcionalidade em todas as situações. No entanto, estamos continuamente melhorando a extensão para expandir o suporte para um maior número de sites.
:::

---


## Adicionar uma senha fazendo login em um site (automaticamente)

## Requisitos

- A opção **Habilitar sugestão automática de salvamento de senhas** habilitada na tela **Configurações**. Acesse o documento [Configurações](/v3-33/docs/pt/mysafe-extension-settings) para mais informações.
---
Use este método se você souber suas credenciais de login. Ao fazer login no site, a **extensão MySafe** solicitará que você adicione a senha automaticamente. Siga os passos abaixo:


1. No seu navegador, navegue até o site.
2. Digite seu nome de usuário e senha para o site e prossiga para fazer login.
3. Após o login, a **extensão MySafe** solicitará a pergunta "**Adicionar uma nova senha ao MySafe?**".
4. Clique em **Sim** para adicionar a senha ao cofre.
5. Para visualizar as senhas adicionadas na **extensão MySafe**, clique em **MySafe**, representado pelo ícone de chave na barra inferior da extensão. Em seguida, localize-as na seção **Senhas**.

---

## Adicionar uma senha manualmente via extensão MySafe

Para adicionar manualmente uma senha ao cofre da **extensão MySafe**, siga os passos abaixo:

1. No menu inferior da **extensão MySafe**, clique em **Novo item**, representado pelo ícone de mais.
2. Na tela **Nova senha**, preencha:

   - **Nome***: insira um nome para a senha.
   - **Url***: insira a URL do site onde as credenciais serão usadas.
   - **Nome de usuário***: insira o nome de usuário da credencial.
   - **Senha**: insira a senha da credencial. Clique no ícone de olho para visualizar a senha digitada. Clique no ícone de atualização para que o senhasegura gere automaticamente uma senha segura para você.
   - **Segredo**: se sua conta estiver configurada para usar autenticação multifator, insira a chave secreta usada para gerar o TOTP (Time-based One-Time Password) ou clique no ícone de QR code para ler a chave secreta de um QR code na tela.

    :::(Info) (Info)
    Para garantir que o recurso funcione corretamente, certifique-se de que o relógio do seu dispositivo está sincronizado com a hora correta. Desvios de tempo podem afetar a geração e validação do TOTP.
    :::


    :::(Warning) (Atenção)
    A chave secreta deve conter pelo menos 10 caracteres e ser codificada em base32, ou seja, deve incluir apenas letras maiúsculas de A a Z, números de 2 a 7 e o caractere "=".
    :::


3. **Tags**: insira palavras-chave associadas à senha.
4. **Anotação**: insira observações sobre a senha.

:::(Info) (Info)
Os itens com asterisco são obrigatórios.
:::


5. Clique em **Enviar**.
6. A mensagem **Senha criada** confirma a ação.
7. Para visualizar as senhas adicionadas na **extensão MySafe**, clique em **MySafe**, representado pelo ícone de chave na barra inferior da extensão. Em seguida, localize-as na seção **Senhas**.



## Editar uma senha

Para editar uma senha armazenada no **MySafe** via extensão, siga os passos abaixo:

1. No menu inferior da **extensão MySafe**, clique em **MySafe**, representado pelo ícone de chave.
2. Dentro da seção **Senhas**, localize o card da senha que deseja editar, ou clique em **Buscar no cofre**, representado pelo ícone de lupa na barra superior, e digite uma palavra-chave para procurá-la.
3. Clique no card da senha para expandi-lo.
4. Clique em **Editar senha**, representado pelo ícone de lápis e papel.
5. Na tela **Editar senha**, faça as alterações necessárias.


:::(Info) (Info)
Por ser uma informação sensível, a chave secreta usada para gerar o TOTP para autenticação multifator não é exibida ao editar as informações de uma senha. Deixe o campo vazio para manter o valor anterior ou insira um novo valor para editá-lo.
:::

6. Clique em **Enviar**.
7. A mensagem **Senha atualizada** confirma a ação.



## Visualizar os detalhes de uma senha

Para visualizar os detalhes de uma senha armazenada no MySafe via extensão, siga os passos abaixo:

1. No menu inferior da extensão MySafe, clique em **MySafe**, representado pelo ícone de chave.
2. Dentro da seção **Senhas**, localize o card da senha que deseja visualizar, ou clique em **Buscar no cofre**, representado pelo ícone de lupa na barra superior, e digite uma palavra-chave para procurá-la.
3. Clique no card da senha para expandi-lo e visualizar detalhes como **Nome**, **Url**, **Nome de usuário**, **Token**, **Tags** e os botões de ação para **Copiar nome de usuário**, **Copiar senha** e **Editar senha**.
4. Clique no card expandido para retorná-lo ao formato compacto.



## Copiar uma senha e um nome de usuário

Para copiar a senha e o nome de usuário das suas credenciais armazenadas no **MySafe** via extensão, siga os passos abaixo:

1. No menu inferior da **extensão MySafe**, clique em **MySafe**, representado pelo ícone de chave.
2. Dentro da seção **Senhas**, localize o cartão contendo a senha cujas informações deseja copiar. Alternativamente, clique em **Buscar no cofre**, representado pelo ícone de lupa na barra superior, e digite uma palavra-chave para procurá-la.
3. Clique no card da senha para expandi-lo.
4. Clique em **Copiar nome de usuário**, representado pelo ícone de duas folhas de papel.
5. Clique em **Copiar senha**, representado pelo ícone de duas folhas de papel.
6. A mensagem **Copiado** confirma ambas as ações.

:::(Warning) (Atenção)
Clicar em **Copiar senha** e **Copiar nome de usuário** adiciona as informações à sua área de transferência, permitindo que outros programas tenham acesso a elas.
:::




### Fazer login em um site usando a extensão MySafe

Para fazer login em um site usando as credenciais armazenadas no **MySafe** via extensão, siga os passos abaixo:

1. No menu inferior da **extensão MySafe**, clique em **MySafe**, representado pelo ícone de chave.
2. Dentro da seção **Senhas**, localize o card da senha cujas credenciais deseja usar. Alternativamente, clique em **Buscar no cofre**, representado pelo ícone de lupa na barra superior, e digite uma palavra-chave para procurá-la.
3. Clique em **Login**, representado pelo ícone de login. Isso preencherá os campos de login na página da web atual com os respectivos dados da credencial.

:::(Info) (Info)
O botão **Ir para URL**, localizado à esquerda do botão **Login**, direciona para o site associado à URL registrada no card de senha selecionado, mas não realiza o login automático por si só.

Se a configuração **Preencher campos de login automaticamente** estiver habilitada, ela será aplicada ao acessar o site. Caso contrário, o usuário terá duas opções:

* Preencher manualmente suas credenciais no site.
*  Retornar à interface do gerenciador de senhas e clicar no botão **Login** na credencial desejada.
:::

---

Você ainda tem dúvida? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target="_blank"}. 

