# Primeiros passos com o MySafe web

Boas-vindas ao **MySafe**, o gerenciador de senhas corporativas do Segura que permite que você armazene e gerencie suas informações com segurança. 

Esse documento fornece um guia passo a passo para começar a usar o **MySafe** web no armazenamento e gerenciamento de senhas corporativas, sejam elas pessoais ou de equipe, como as credenciais de seu email corporativo ou das redes sociais da empresa. Além disso, fornece orientações sobre como utilizar as senhas salvas para acessar sites, aplicativos ou programas de computador e preencher campos de login de forma prática e segura, eliminando a necessidade de memorizar ou expor informações confidenciais.

O **MySafe** também conta com uma extensão para navegadores e o aplicativo móvel **Segura** integrado ao **MySafe** que permitem que você faça login automaticamente em sites de maneira prática e segura. Saiba mais em [Como fazer login usando a extensão MySafe](/v4/docs/pt/how-to-log-in-using-the-mysafe-extension) e Como fazer login usando o MySafe no app Segura.

## Requisitos

* Conexão com o servidor Segura via rede local ou VPN.  
* Usuário e senha iniciais fornecidos pelo administrador do sistema. Caso enfrente problemas com a URL ou com as suas credenciais de acesso iniciais, consulte o administrador do sistema.

---

## Acessar o MySafe web pela primeira vez

1. Acesse a URL do Segura fornecida pelo administrador.  
2. Na tela de login, insira seu usuário e senha iniciais fornecidos.  
3. No primeiro acesso, altere sua senha conforme solicitado.  
4. Para aumentar a segurança da sua conta, acesse o **Menu de usuário > Configurar MFA** e habilite a autenticação multifator que solicitará um token temporário em todos os seus acessos. 
5. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **MySafe**.

**Resultado**: você acessou o **MySafe** web e configurou sua conta com segurança.



## Gerenciar senhas no MySafe web

Agora que você configurou sua conta e possui acesso ao **MySafe**, você pode começar a gerenciar suas senhas.

### Importar senhas do LastPass ou Keeper para o MySafe

Se você tem senhas salvas em outro gerenciador, como LastPass ou Keeper, importe-as para o  **MySafe**:

1. Acesse o LastPass ou Keeper e siga as instruções para exportar suas senhas em formato `.csv`.  
2. Acesse **MySafe \>** **Importação em lote.**  
3. Clique em **Importar.**  
4. Selecione **LastPass** ou **Keeper.**  
5. Carregue o arquivo .csv exportado.  
6. Clique em **Salvar.**

:::(warning) (Atenção)  
Exclua o arquivo baixado do seu dispositivo após a importação para evitar que terceiros acessem suas senhas.  
:::

**Resultado:** você importou suas senhas para o **MySafe** e pode utilizá-las com segurança.

### Importar senhas de outros gerenciadores ou de outros locais (como planilhas ou bloco de notas)

Se você tem senhas armazenadas em outro gerenciador ou em outros locais, como uma planilha do Excel ou bloco de notas, você deve adaptar o formato das informações ao formato aceito pelo **MySafe** antes de importá-las:

1. Acesse **MySafe \>** **Importação em lote.**  
2. Clique em **Importar.**  
3. Selecione a opção **Senha**.  
4. Na tela **Adicionar nova importação em lote**, clique em **Arquivo de modelo** para baixar a planilha no formato `.xlsx` aceito pelo **MySafe**.  
5. Preencha a planilha conforme o exemplo a seguir.

**Exemplo:**

Se no seu bloco de notas ou na planilha exportada de outro gerenciador, as informações de uma senha estão assim:

| Site | Usuário | Senha |
| ----- | :---: | ----- |
| `https://www.instagram.com/accounts/login` | marketing@email.com | dw5d78D\*$AFJ |

Na planilha modelo do **MySafe**, insira as informações nas colunas correspondentes:

| Nome\* | URL | Nome do usuário\* | Senha\* |
| :---: | ----- | ----- | ----- |
| Instagram \[da empresa\] | `https://www.instagram.com/accounts/login` | marketing@email.com | dw5d78D\*$AFJ |

Se desejar, adicione informações como **Tags, Notas, Usuários** e **Grupos**.  Saiba mais sobre esses campos em [Como gerenciar senhas no MySafe web](/v4/docs/pt/how-to-manage-passwords-on-mysafe-web).

6. Após preencher a planilha com os dados obrigatórios (**Nome, Nome do usuário** e **Senha**), salve o arquivo em um lugar acessível do seu computador.  
7. Retorne à tela **Adicionar nova importação em lote**.  
8. Carregue a planilha `.csv` no campo de upload.  
9. Clique em **Salvar.**

:::(warning) (Atenção)  
Exclua o arquivo do seu dispositivo após a importação para evitar que terceiros acessem suas senhas.  
:::

**Resultado:** você preencheu a planilha modelo em formato `.xlsx`,  importou suas senhas para o **MySafe** e pode utilizá-las com segurança.

### Adicionar senha

Você pode adicionar senhas manualmente ao **MySafe**:

1. Na **Página inicial** do **MySafe** web, clique em **Adicionar** **senha.**  
2. Preencha os campos obrigatórios:  
   1. **Nome\***: dê um nome para identificar a senha. Exemplo: **Email corporativo**.  
   2. **Nome de usuário\***: insira o nome de usuário associado à conta. Exemplo: **davidmiller@empresa.com**  
   3. **Senha\***: insira a senha. Saiba mais em Como gerar senhas seguras.  
   4. **URL**: insira o endereço do site. Exemplo: **https://email.empresa.com/account/login**  
3. Clique em **Salvar** para armazenar a informação com segurança.

**Resultado:** você adicionou uma senha manualmente ao **MySafe** e pode utilizá-la com segurança.

## Fazer login usando o MySafe 

Você pode acessar um site, app ou programa de computador utilizando as informações de login armazenadas no **MySafe** de três maneiras:

1. **Usar a extensão MySafe**  
   A extensão **MySafe** para navegadores permite que você faça login de forma prática e segura através do salvamento e preenchimento automático de suas credenciais. Saiba mais em [Como fazer login usando a extensão MySafe](/v4/docs/pt/how-to-log-in-using-the-mysafe-extension).

2. **Usar o MySafe no aplicativo móvel Segura**  
   Ao acessar o **MySafe** no aplicativo **Segura**, você pode fazer login de forma prática e segura através do salvamento e preenchimento automático de suas credenciais. Saiba mais em Como fazer login usando o MySafe no app Segura.

3. **Usar o MySafe web**  
   Caso prefira utilizar o **MySafe** web:  
   1. Acesse **MySafe \>** **Senhas**.  
   2. Encontre a senha desejada ou use os filtros de pesquisa. Exemplo: digite **Email corporativo** no filtro **Nome**.   
   3. Clique no **botão Ações** \> **Visualizar senha**.  
   4. Na tela **Detalhes da senha**:   
      1. No campo **Url**, clique em **Ir para URL** para abrir o site, app ou programa em uma nova aba.  
      2. Copie o **Nome de usuário** e cole-o no campo correspondente da página de login.  
      3. Clique em **Copiar a senha** e cole-a no campo correspondente da tela de login.  
   5. Conclua o login.

**Resultado**: você fez login com segurança utilizando a senha armazenada no **MySafe**.

---

### Próximos passos

Explore outros recursos disponíveis para maximizar a produtividade e a segurança dos seus dados:

* **Compartilhar senhas**: envie senhas para outros usuários. Saiba mais em [Como gerenciar senhas no MySafe web](/v4/docs/pt/how-to-manage-passwords-on-mysafe-web) e [Como gerenciar o compartilhamento externo de um item](/v4/docs/pt/how-to-manage-the-external-share-of-an-item).   
* **Conectar dispositivos adicionais**: utilize a extensão **MySafe** para navegadores ou o aplicativo móvel **Segura** para gerenciar suas senhas e preencher campos de login automaticamente. Saiba mais em [Como fazer login usando a extensão MySafe](/v4/docs/pt/how-to-log-in-using-the-mysafe-extension) e Como fazer login usando o MySafe no app Segura.
* **Gerenciar anotações:** adicione e gerencie anotações importantes com segurança. Saiba mais em [Como gerenciar anotações no MySafe web](/v4/docs/pt/how-to-manage-notes-on-mysafe-web).

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).