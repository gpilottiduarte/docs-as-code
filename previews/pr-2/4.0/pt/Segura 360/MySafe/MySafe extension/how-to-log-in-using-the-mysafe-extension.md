# Como fazer login usando a extensão MySafe

A extensão **MySafe** oferece praticidade e segurança, preenchendo automaticamente os campos de login de sites com suas credenciais salvas. Assim, você não precisa memorizar ou expor suas senhas em locais inseguros como planilhas ou blocos de notas.

Este documento fornece um guia passo a passo para fazer login em sites usando a extensão **MySafe.**

## Requisitos

* Extensão **MySafe** instalada, ativada e fixada na barra do navegador.  Saiba mais em [Primeiros passos com a extensão MySafe](/v4/docs/pt/mysafe-extension-first-steps).
* A opção **Preencher campos de login automaticamente?** ativada na tela **Configurações**. Saiba mais em [Configurações](/v4/docs/pt/mysafe-extension-settings).
---
## Usar o preenchimento automático

Se você já possui senhas salvas no **MySafe,** siga os passos abaixo:

1. Acesse a página de login do site desejado. Exemplo: `https://github.com/login.`  
2. Aguarde a extensão **MySafe** preencher os campos automaticamente.  
3. Prossiga para o login.

## Escolher dentre múltiplas credenciais salvas para o mesmo site

Se você tem mais de uma senha salva no **MySafe** para o mesmo site e deseja escolher uma delas, siga os passos abaixo:

**Exemplo**:   
Você tem duas contas no **GitHub**, uma pessoal `githubpessoal@email.com` e uma corporativa `githubcorporativo@empresa.com`, e quer acessar o site com sua conta corporativa. 

1. Acesse a página de login do site desejado. Exemplo: `https://github.com/login`  
2. Limpe os campos de login (**nome de usuário** e **senha**).  
3. Clique sobre um dos campos de login.  
4. Escolha uma das opções:  
   1. Visualize a lista de credenciais disponíveis para o site. Exemplo: `githubpessoal@email.com` e `githubcorporativo@empresa.com`.
      1. Clique sobre a credencial desejada. Exemplo: `githubcorporativo@empresa.com`.  
      2. Aguarde a extensão **MySafe** preencher os campos automaticamente.  
      3. Prossiga para o login.  
   2. Digite palavras-chave em um dos campos de login. Exemplo: digite `empresa` no campo **Username**.  
      1. Visualize todas as credenciais correspondentes à palavra-chave digitada.  
      2. Clique sobre a credencial desejada. Exemplo: `githubcorporativo@empresa.com`.
      3. Aguarde a extensão **MySafe** preencher os campos automaticamente.  
      4. Prossiga para o login.

:::(info) (Info)  
Por padrão, em caso de múltiplas credenciais salvas para o mesmo site, a extensão preenche os campos de login com a última credencial usada para o site.  
:::

##  Usar a opção “Ir para a URL” da extensão

Se você deseja acessar o site através da extensão **MySafe** e preencher as credenciais automaticamente, siga os passos abaixo:

1. No menu inferior da extensão, clique em **MySafe**.  
2. Na listagem de senhas, identifique o *card* da senha desejada ou use a barra de pesquisa.  
3. Clique em **Ir para a URL**.  
4. Aguarde os campos de login serem preenchidos automaticamente.  
5. Prossiga para o login.

## Usar a opção “Preencher credenciais” da extensão

Se você deseja usar uma senha diferente da senha sugerida, siga os passos abaixo:

**Exemplo:**  
Usar as credenciais do Google para fazer login no GitHub.

1. Acesse a página de login do site desejado. Exemplo: `https://github.com/login`  
2. No menu inferior da extensão, clique em **MySafe**.  
3. Na listagem de senhas, identifique o *card* da senha desejada ou use a barra de pesquisa.   
4. Clique em **Preencher credenciais** e aguarde os campos de login serem preenchidos com os dados da senha selecionada.  
5. Prossiga para o login.  
   
:::(info) (Info)

**Autenticação multifator**  
Para todos os tipos de login mencionados, se a sua conta usar autenticação multifator e você tiver configurado a **chave secreta (TOTP)** no **MySafe** siga estes passos após preencher suas informações de login:

1. Abra a extensão **MySafe**.  
2. Clique no *card* da senha usada para fazer login.  
3. Copie o **TOTP**.  
4. Cole-o no campo indicado.  
5. Prossiga para o login.
:::
---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).