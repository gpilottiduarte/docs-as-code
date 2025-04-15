# Como realizar acesso remoto com chave SSH via web proxy

Neste documento, você será apresentado aos passos necessários para acessar remotamente, via web proxy e utilizando uma chave SSH, um dispositivo no senhasegura.

## Requisitos

Para iniciar uma sessão com chaves SSH é preciso atender os seguintes requisitos:

- Credenciais de acesso válidas.
- Ter a permissão de usuário no senhasegura.
- Pertencer a um grupo de acesso que tenha permissão para utilizar credenciais e dispositivos que possam fazer sessões remotas.

## Realizar acesso remoto com chave SSH via web proxy

### Configurar o dispositivo utilizando o senhasegura

1. No canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral selecione **Credenciais > Todas**.
3. No relatório **Credenciais de acesso**, identifique o dispositivo e a credencial que servirão para a configuração do acesso remoto.
4. Uma vez identificado o dispositivo e a credencial, na coluna **Ação**, clique em **Iniciar sessão**, representado pelo ícone do computador. Você será conectado ao dispositivo utilizando essa credencial.

:::(info) (Info)
Caso você queira realizar esse procedimento diretamente no dispositivo, conecte-se usando SSH com o comando `ssh user@servidor`.
:::

No dispositivo você deverá realizar as seguintes operações:

1. Crie uma chave SSH com o comando `ssh-keygen -t RSA -m PEM`.
2. Copie tanto os valores da chave pública e a chave privada recém-criada.
3. Ainda no dispositivo, você precisará copiar a chave SSH pública para o dispositivo. Para isso execute o comando `ssh-copy-id localhost`. Você pode testar a conexão utilizando o comando `ssh -i .ssh/id_rsa localhost`.
    1. Se não for feita a cópia da chave SSH utilizando o comando `ssh-copy-id` não será possível iniciar uma sessão remota.

No senhasegura, cadastre uma chave SSH. Para isso siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Chaves SSH > Chaves SSH**.
3. Na barra superior, clique em **Exibir ações**, representado pelos três pontos verticais, e selecione **Novo**.
4. Na janela **Cadastro de chave ssh** preencha os campos:
    1. Na aba **Informações**:
        1. **Username (dono da chave)**: preencha com o usuário dono da chave. Este usuário deve existir no dispositivo utilizado anteriormente.
        2. **Dispositivo**: indique em qual dispositivo foi gerada a chave.
        3. **Nome da chave**: nome da chave SSH. Por exemplo, `id_rsa`.
        4. **Situação**: selecione Ativo.
    2. Na aba **Dados da Chave**:
        1. **Chave Privada**: cole o valor da chave privada que você copiou anteriormente. **Nota:** ao copiar a chave, não se esqueça de copiar todo o conteúdo desta, desde o `Begin` até o `End RSA PRIVATE KEY`.
        2. **Chave Pública**: cole o valor da chave pública que você criou anteriormente. Nota: essa chave tem a extensão `.pub`.
        3. Caso a chave possua uma senha, clique em **Definir senha atual** e adicione a senha da chave no campo **Senha.**
    3. Na aba **Dispositivos**:
        1. **Dispositivos**: clique no ícone de soma para abrir o modal **Dispositivos**.
        2. No modal **Dispositivos**, marque os dispositivos que você deseja que acessem a chave SSH.
            1. **Nota**: A chave pública deve estar publicada nos dispositivos selecionados no modal
5. Clique em **Salvar**.

### Iniciar uma sessão remota com uma chave SSH

Tendo feito os passos anteriores com sucesso, agora você será capaz de iniciar uma sessão remota com a sua chave SSH, para isso siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Chaves SSH > Chaves SSH**.
3. No relatório **Chaves SSH**, identifique a chave SSH que você deseja utilizar.
4. Na coluna **Ação**, clique nos três pontos verticais e selecione Iniciar sessão com uma chave.
5. Na janela **Chaves SSH: Acesso remoto** identifique o dispositivo que você deseja acessar com a chave SSH e clique em **Iniciar sessão**, representado pelo ícone do computador.
6. Você será conectado ao dispositivo utilizando a chave SSH que você cadastrou.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).