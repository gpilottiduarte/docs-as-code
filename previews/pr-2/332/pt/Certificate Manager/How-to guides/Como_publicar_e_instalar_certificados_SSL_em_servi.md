# Como publicar e instalar certificados SSL em servidores Apache

Neste documento, você aprenderá como publicar e instalar um certificado SSL, gerenciado pelo **Certificate Manager** do senhasegura, em servidores Apache.

## Requisitos

* Servidor Apache com os parâmetros SSL ativados, sem certificado SSL cadastrado.
* Certificado SSL, gerado e assinado por uma Autoridade Certificadora (CA).
* Uma credencial cadastrada no senhasegura **PAM**, com acesso de *superuser* (administrador), em especial de leitura, escrita e execução aos diretórios `/var/www`, `/etc/ssl/private` e `/etc/ssl/private` no servidor Apache.

## Passo a passo

Para publicar um certificado SSL gerenciado pelo senhasegura em servidores Apache, é necessário:

1. Cadastrar o endereço IP ou domínio do servidor como uma **credencial** no senhasegura **PAM**.
2. Cadastrar o certificado no senhasegura **Certificate Manager**.
3. Configurar o perfil de publicação no senhasegura **Certificate Manager**.
4. Publicar o certificado no senhasegura **Certificate Manager**.

Acompanhe os detalhes de cada etapa do processo abaixo:

## 1. Cadastrar endereço do servidor como uma credencial senhasegura PAM

Para cadastrar o endereço do servidor como uma credencial no **PAM** do senhasegura, siga os passos indicados no documento [Como configurar um dispositivo](/docs/pt/pam-devices-management).

## 2. Cadastrar o certificado no Certificate Manager

Para cadastrar um certificado SSL no **Certificate Manager** do senhasegura, siga os passos indicados no documento [Como importar um certificado](/docs/pt/certificates-flow-how-to-import-certificate).

## 3. Configurar perfil de publicação no Certificate Manager

1. No senhasegura, acesse a página dos perfis, através do caminho **Grid menu** > **Certificate Manager** > **Configurações** > **Perfís de publicação**. Clique nos três pontos verticais e selecione a opção `Novo`.
2. Na aba **Configurações**, defina um nome para o novo perfil no campo **Nome do perfil***.
3. Selecione a opção Apache no campo **Plugins de publicação***
4. Marque a opção `Utilizar uma credencial cadastrada para acessar todos os dispositivos`.
5. No campo **Credential de acesso cadastrada do sistema**, selecione a credencial criada (endereço do servidor) anteriormente no senhasegura PAM.
6. No campo site, escreva o nome do arquivo de configuração do servidor. Exemplo: `default-ssl.conf`.
7. No campo **Caminho do arquivo de configuração**, escreva o caminho completo do arquivo, com o nome do arquivo. Exemplo: `/etc/apache2/sites-available/default-ssl.conf`.
8. No campo **Porta**, escreva qual a porta que o servidor está operando.
9. Na aba **Servidores**, clique no botão de mais, representado pelo ícone de +.
10. Na janela de criação de um servidor, selecione o dispositivo referente ao servidor Apache, no campo **Nome do dispositivo**.
11. Selecione o *checkbox* referente ao dispositivo.
11. Clique no botão **Add**.
9. Clique no botão **Salvar**.

## 4. Publicar o certificado no Certificate Manager

1. No senhasegura, acesse a lista de certificados cadastrados no **Certificate Manager**, através do caminho **Grid Menu > Certificate Manager > Certificados > Certificados**.
2. Encontre o certificado desejado e clique nos três pontos verticais.
3. Selecione a opção `Publicar certificado`.
4. Na janela **Publicar certificado**, preencha os campos **Razão***, selecione o perfil criado anteriormente em **Perfil de Publicação** e escreva uma **Justificativa**. Os campos, refentes ao servidor, serão preenchidos automaticamente ao selecionar o perfil de publicação.
5. Clique no botão **Publicar**.

Para acompanhar o processo e o status do certificado, acesse o caminho **Grid Menu** > **Certificate Manager** > **Publishing**.