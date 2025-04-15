# Como configurar uma chave SSH

Este documento fornece informações sobre como acessar remotamente, via *web proxy* e utilizando uma chave SSH, um dispositivo no senhasegura.

## Requisitos

* Credenciais de acesso válidas.  
* Ter a permissão de usuário no senhasegura.  
* Pertencer a um grupo de acesso que tenha permissão para utilizar credenciais e dispositivos que possam fazer sessões remotas.

## Configuração inicial da chave SSH

Para realizar o acesso através de chaves SSH nos dispositivos cadastrados no senhasegura, você deverá, primeiro, gerar a chave SSH da credencial. Essa chave SSH deve ser gerada no dispositivo \-alvo \- ou seja, o dispositivo que deverá ser acessado com a chave SSH através do cofre do senhasegura.

:::(info) (Info)  
Você deve ter acesso ao terminal no Linux, macOS ou Windows. Para sistemas baseados em Unix, como o Linux e o macOS, não é necessário instalar nenhum aplicativo adicional. Para o Windows você deverá utilizar o aplicativo que melhor se adequar ao seu uso diário. Nos exemplos iremos utilizar o Linux na distribuição Debian 11\.  
:::

1. Para gerar uma chave SSH nova, digite: `ssh-keygen -t RSA -m PEM`.  
2. Após, copie a chave para que o dispositivo a reconheça para login. Para isso, digite: `ssh-copy-id localhost`.  
   1. Este comando indica que a chave será aceita como login. Para cada dispositivo que você deseja acessar via senhasegura, você precisa repetir esse comando, substituindo o parâmetro `localhost` de acordo com o endereço do servidor que você deseja acessar.

:::(error) (Alerta)  
Se não for feita a cópia da chave SSH utilizando o comando `ssh-copy-id` não será possível iniciar uma sessão remota.
:::

3. Adicionalmente, você precisa dos valores da sua chave privada e da sua chave pública (vamos utilizar os parâmetros padrão para os diretórios e nomes das chaves, se você os modificou no ato da criação das chaves, utilize-os de acordo).  
   1. Digite `cat .ssh/id_rsa` e copie os valores. Essa é a sua chave privada.  
   2. Digite `cat .ssh/id_rsa.pub` e copie os valores. Essa é a sua chave pública.

## Cadastrar credencial com chave SSH no senhasegura

Após a criação das chaves, você precisará criar uma credencial de chave SSH. Para isso, faça o seguinte:

1. No senhasegura, passe o mouse sobre o **Menu de Produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Chaves SSH \> Chaves SSH**.  
3. No relatório Chaves SSH, clique em **Adicionar**.  
4. No formulário **Cadastro de chave SSH**:  
   1. Na aba **informações**:  
      1. **Nome da chave**: nome identificador para a chave SSH.  
      2. **Situação**: deixe ativada.  
   2. Na aba **Dados da Chave**  
      1. **Nome do usuário:** nome do usuário que criou a chave no dispositivo.  
      2. **Definir senha atual:** se você protegeu a sua chave SSH com uma senha, ative essa opção e insira a senha da chave SSH.  
      3. **Chave privada:** cole o conteúdo da chave privada que você copiou anteriormente.  
      4. **Chave pública:** cole o conteúdo da chave pública que você copiou anteriormente.  
   3. Na aba **Dispositivos**:  
      1. **Dispositivo principal**: selecione, no menu suspenso, o dispositivo onde foi gerada a chave privada.  
      2. Você agora precisa indicar o dispositivo onde a chave pública está. Esse deve ser o mesmo dispositivo que você realizou a cópia da chave com o comando `ssh-copy-id locahost`. Para adicionar o dispositivo clique em **Adicionar** e, no modal **Dispositivos**, procure pelo dispositivo que você usou anteriormente.  
   4. Na aba **Revisão**:  
      1. Clique em **Salvar**.

As abas **Configurações da sessão** e **Renovação da Chave** não serão utilizadas nesse guia.

## Iniciar uma sessão remota utilizando uma chave SSH

Tendo feito os passos anteriores com sucesso, agora você será capaz de iniciar uma sessão remota com a sua chave SSH. Para isso, faça o seguinte:

1. No senhasegura, passe o mouse sobre o **Menu de Produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Chaves SSH \> Chaves SSH**.  
3. No relatório **Chaves SSH**, identifique a chave SSH que você deseja utilizar.  
4. Em **Ações**, selecione **Iniciar uma sessão com uma chave SSH**.  
   1. Os dispositivos listados serão todos os que você selecionou no passo `c.ii` da sessão anterior.  
5. Na janela **Chaves SSH: Acesso remoto**: identifique o dispositivo que você deseja acessar com a chave SSH e clique em **Ações** e selecione **Iniciar sessão**.

Você será conectado ao dispositivo utilizando a chave SSH que você cadastrou.