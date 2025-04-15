# Como utilizar credenciais de domínio

Credenciais de domínio são utilizadas quando uma credencial necessita acessar diferentes máquinas que estão no mesmo domínio.

## Requisitos

- Ter uma credencial que **não** seja do tipo **Usuário local** cadastrada.
- Ter um dispositivo que esteja no mesmo domínio da credencial.

## Como cadastrar um domínio

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Configurações > Credenciais >**  **Domínios > Configuração dos domínios**.
3. Para cadastrar um novo domínio clique no botão **+**, identificado pelo sinal de soma.
4. Dois campos novos, vazios, serão adicionados logo abaixo do último domínio cadastrado. Preencha as informações:
    1. **Domínio**: URL, endereço de IP ou hostname do domínio.
    2. **Domínio (short name)**: nome amigável para o domínio.
5. Clique em **Salvar**.

## Como adicionar um dispositivo a um domínio

Caso você não tenha nenhum dispositivo cadastrado ainda, cadastre um novo dispositivo. Para mais informações sobre como cadastrar um dispositivo, acesse a documentação [Como configurar um dispositivo](https://docs.senhasegura.io/v3-33/docs/pt/pam-devices-management).

Caso você já tenha um dispositivo cadastrado e queira atrelá-lo ao domínio, acesse a listagem de dispositivos e edite-o. Para isso, siga as instruções a seguir.

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelos nove quadrados, e selecione **Dispositivos**.
2. No menu lateral, selecione **Dispositivos**.
3. Identifique, na listagem de dispositivos, aquele que você deseja editar.

Em ambos os casos, o caminho para adicionar o dispositivo a um domínio é o mesmo:

1. No formulário **Cadastro do dispositivo**, na aba **Informações**, na seção **Configurações de domínios**, clique no sinal de soma ao lado da palavra **Adicionar**.
2. No menu suspenso **Domínio** selecione o domínio ao qual você quer atrelar esse dispositivo. Este deve ser o mesmo domínio que você cadastrou e atrelou a sua credencial anteriormente.
3. Clique em **Salvar**.

## Como cadastrar um tipo de credencial para utilizar com um domínio

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelo ícone de nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Configurações > Credenciais > Tipos de credencial**.
3. Na barra superior, clique no botão **Exibir ações**, identificado pelos três pontos verticais, e selecione **+ Novo**.
4. No formulário **Cadastro de tipos de credencial**, preencha os seguintes campos:
    1. **Nome**: um nome para o tipo de credencial que será cadastrado.
    2. **Usuário local**: para credenciais de domínio, é **obrigatório** marcar essa opção como **Não**. Caso contrário, a credencial não será capaz de conectar-se por domínio.
    3. **Ativo**: marque **Sim**.
5. Clique em **Salvar**.

## Como atrelar uma credencial a um domínio

Para utilizar as credenciais de domínio, é necessário ter a credencial cadastrada no senhasegura e atrelar essa credencial ao domínio que você deseja. Para isso, siga os passos abaixo:

1. No canto superior esquerdo, clique em **Grid Menu**, representado pelo ícone de nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais > Todas**.
3. Na barra superior, clique no ícone **Exibir ações**, representado pelos três pontos verticais, e selecione **+Novo**.
4. Cadastre a sua credencial conforme a documentação [Como configurar uma credencial no senhasegura](https://docs.senhasegura.io/v3-33/docs/pt/pam-how-to-set-up-a-credential-in-senhasegura). Certifique-se de indicar, no menu suspenso **Tipo de senha**, o tipo de credencial cadastrado anteriormente e, no menu suspenso **Domínio**, ****o domínio cadastrado anteriormente.

## Como conectar-se a um dispositivo utilizando uma credencial de domínio

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais > Todas**.
3. Na coluna **Ação** da credencial de domínio, clique em **Iniciar sessão em outro dispositivo**, identificado por uma seta saindo da caixa. Essa ação direciona para a listagem de dispositivos do domínio selecionado.
4. Na tela **Credenciais de domínio**, identifique o dispositivo você deseja usar para iniciar uma sessão.
5. Na coluna **Ação,** clique em **Iniciar sessão**, identificado pelo ícone do computador, para iniciar uma sessão remota com a sua credencial de domínio.

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).