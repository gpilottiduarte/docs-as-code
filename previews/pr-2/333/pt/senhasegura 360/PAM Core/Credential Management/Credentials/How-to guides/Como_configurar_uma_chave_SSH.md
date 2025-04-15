# Como configurar uma chave SSH

# Como gerenciar chaves SSH

Usar uma chave SSH como método de autenticação é a alternativa mais segura aos logins baseados em senha. Essas chaves consistem em um par de chaves, uma pública e uma privada, que são usadas para estabelecer uma conexão criptografada entre o cliente e o servidor.

O processo de troca de chaves SSH garante conveniência e segurança, já que ao gerar uma nova chave SSH, o plugin senhasegura automatiza a geração da chave e copia a chave pública para o dispositivo primário. É neste dispositivo que a chave SSH está registrada.

:::(info) (Info)
A chave privada é mantida exclusivamente no senhasegura, garantindo proteção adequada.
:::

## Requisitos

* Uma chave SSH do tipo RSA. Para gerar a chave, digite em um terminal a seguinte linha de comando: `ssh-keygen -t RSA -m PEM`.

:::(info) (Info)
É importante observar que, ao executar o comando ssh-copy-id, apenas a chave pública é copiada para os dispositivos, enquanto a chave privada permanece no senhasegura.
:::

## Configurar uma chave SSH no senhasegura

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, indicado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais > Chaves SSH > Chaves SSH**.
3. Clique em **Visualizar ações**, identificado pelo ícone de três pontos verticais, e selecione **+ Novo**.

Na janela **Registro de chave SSH**, configure sua chave SSH. Siga os passos abaixo:

### Aba Informações

1. **Username (dono da chave)**: preencha o nome de usuário associado à chave SSH.
2. **Dispositivo**: selecione o dispositivo que manterá a chave SSH.
3. **Nome da chave**: preencha um nome de identificação para rastrear detalhes, visualizações e outras aparições no senhasegura.
4. **Situação**: selecione **Ativo** ou **Inativa**.
5. **Tags**: adicione tags para facilitar futuras buscas.

### Aba Dados da chave

1. **Definir senha atual:** habilite Definir senha atual e insira seu valor no campo Senha, caso a chave tenha uma senha.
2. **Exibir senha:** selecione para revelar a senha.
3. **Renovar a chave e definir uma senha?**: indique se você deseja definir uma senha **quando a renovação automática estiver ativada**. Por padrão, essa opção vem marcada como **Sim**.

Adicione a chave SSH nos campos de **Chave Privada** e **Chave Pública** para realizar o registro.

### Aba Configurações da sessão

1. **Restringir o acesso apenas a aplicativos remotos:** marque essa opção para que apenas aplicativos remotos inscritos no dispositivo de destino com essa configuração tenham acesso usando essa chave SSH.
2.** Macro de automação (RemoteApp):** clique no ícone de soma ao lado de **Macro de automação (RemoteApp)** para adicionar dois menus suspensos. Nesses dois menus, você selecionará quais macros do RemoteApp estão vinculadas à chave SSH, selecionando a **Macro** e a **Conectividade**.
3. **Utilizar a própria credencial para se conectar:** selecione para usar a mesma chave para se autenticar no dispositivo de destino.
4. **Credencial de autenticação:** preencha o endereço de IP, o nome de host ou o nome de usuário da credencial usada.
5. **Dispositivo de autenticação:** preencha o endereço de IP ou o nome do host do dispositivo que será usado.

### Seção de Configurações adicionais

1. **Usuário dono da credencial:** no menu suspenso, selecione o usuário que será cadastrado como dono da chave SSH.
2. **Configuração da renovação da chave SSH:**
   1. **Ativar troca automática:** ative essa opção para que a chave SSH seja renovada automaticamente.
   2. **Utilizar a própria chave para conectar:** selecione para usar a chave que está sendo criada/editada no momento.
   3. **Credencial ou chave SSH para autenticação:** Escolha o dispositivo que contém a chave de autenticação no menu suspenso. Essa opção estará disponível apenas se a opção **Utilizar a própria chave para conectar** estiver desativada.

:::(warning) (Atenção)
* Apenas o usuário dono da credencial poderá resgatar o par de chaves, ver sua senha e usá-la em sessões de proxy. Observe que este usuário sempre terá acesso à chave.
* O campo **Utilizar a própria chave para conectar** e o menu suspenso **Credencial ou chave SSH para autenticação** só serão ativados se a opção **Ativar troca automática** estiver ativada.
:::

### Aba Dispositivos

1. Na seção **Dispositivos**, selecione aqueles para os quais você deseja autorizar o uso da chave para iniciar uma sessão de proxy. Para isso, siga os passos abaixo:
   1. Clique no ícone de soma, para abrir o modal **Dispositivos**.
   2. No modal **Dispositivos**, selecione os dispositivos que você deseja atrelar à chave SSH.
   3. Clique em **Adicionar**.
2. Clique em **Salvar**.

:::(info) (Info)
Se houver vários dispositivos registrados para conexão com a chave SSH mencionada, eles serão classificados com base em seus respectivos IDs. A troca de chaves ocorrerá primeiro no dispositivo original e, em seguida, prosseguirá na ordem dos IDs, um de cada vez.
:::

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
