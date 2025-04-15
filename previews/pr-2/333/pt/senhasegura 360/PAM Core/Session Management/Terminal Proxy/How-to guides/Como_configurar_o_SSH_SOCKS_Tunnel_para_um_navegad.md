# Como configurar o SSH SOCKS Tunnel para um navegador privativo

Neste artigo, você encontra um passo a passo sobre como criar um SSH Tunnel criptografado e configurar o seu navegador para utilizar o proxy SOCKS.

Você irá rotear o seu navegador de tráfego local com uma criptografia proxy SOCKS, assim todas suas aplicações que utilizam um proxy irá se conectar com um servidor SSH e encaminhar ao seu destino. Desta forma, seu provedor de internet (ISP) e outros não poderão inspecionar o seu tráfego ou bloquear seu acesso à sites.

### Requisitos

* Um servidor rodando qualquer Linux, com acesso SSH para rotear o tráfego.
* Usar um navegador Firefox ou Google Chrome.
* SSH client.
***

## Configurar o SSH SOCKS Tunnel

Em sua máquina local, você irá criar um SSH tunnel para assegurar o tráfego na porta 9090 para o servidor SSH na porta 22.

:::(info) (**Info**)
Você pode utilizar qualquer número maior do que 1024. Somente a porta raiz poderá abrir as portas privilegiadas.
:::

### Usuário Linux and macOS

1. Inicie uma sessão SSH.
2. Digite o seguinte comando:
3. `$ ssh -N -D 9090 [USER]@[SERVER_IP]`

Onde `-N` é para dizer ao SSH para não executar um comando remoto, `-D 9090` irá abrir um SOCKS tunnel no número de porta específico e `[USER]@[SERVER_IP]` é o usuário SSH remoto eo seu endereço IP.

:::(info) (**Info**)
Você pode rodar o comando em segundo plano. Use a opção `-f`.
:::

:::(warning) (**Cuidado**)
Se o seu servidor SSH responde a uma porta diferente de 22 (padrão), você deve usar o comando `-p [PORT_NUMBER]`.
:::

Uma vez realizado o comando, entre com sua senha. Você agora estará logado e o SSH tunnel está habilitado.
***

### Usuário Windows

1. Abra a aplicação **PuTTY**. Você pode realizar o download [aqui](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html){target="_blank"}.
2. Na categoria **Session**, preencha o campo:
    1. **Host Name (or IP address)**: entre com o endereço IP.
3. Na categoria **Connection** > **SSH** > **Tunnels**, preencha os campos:
    1. **Source port**: 9090.
    2. Selecione a opção **Dynamic**.
    3. Clique em **Add**.
    4. O número da porta será adicionado na caixa de texto **Forwarded ports**.
4. Volte para a categoria **Session**, preencha o campo:
    1. **Saved Session**: digite o nome para a sessão criada.
    2. Clique em **Save**.
    3. A nova sessão estará visivel na lista.
5. Selecione na lista sessão desejada e clique em **Open**.
6. Uma janela de terminal **PuTTY** irá se abrir. Digite seu **usuário** e **senha**.

Você agora estará logado e o SSH tunnel está habilitado.
***

## Configurando o navegador
Após configurar o SSH SOCKS tunnel, escolha o navegador de sua preferência para realizar a configuração.

### Firefox
A configuração deste navegador será a mesma para qualquer sistema operacional (Linux, macOS e Windows).

1. No navegador **Firefox**, no canto superior direito, cliquei no ícone representado pelo **hambúrguer**.
2. No dropdown menu, selecione **Configurações**.
3. Desça até **Configurações de rede** e clique em **Configurar conexão**.
4. A janela **Configuração de conexão** irá abrir.
    1. Selecione  a opção **Configuração manul de proxy**.
    2. No campo **Domínio SOCKS**, digite 127.0.0.1 e 9090 no campo **Porta**.
    3. Selecione a opção **SOCKS v5**.
5. Clique em **OK** para salvar.

Seu navegador Firefox está configurado e você pode navegar pela internet através do SSH tunnel. Digite “qual é o meu IP” na barra de pesquisa da Google para verificar o endreço IP do servidor.

Para reverter para a configuração padrão, volte para Configurações de rede e escolha a opçao Usar as configurações de proxy do sistema, e clique em OK.
***

### Google Chrome
O navegador Google Chrome usa uma configuração proxy padrão do sistema. Você pode usar um software adicional ou iniciar um navegador web através das linhas de comando ao invés de modificar as configurações proxy do seu sistema operacional.

Para iniciar o Chrome usando um novo perfil e seu SSH tunnel, em uma aplicação de terminal, digite as seguintes linhas de código de acordo com o seu sistema operacional.

#### Linux:
```
/usr/bin/google-chrome \
    --user-data-dir="$HOME/proxy-profile" \
    --proxy-server="socks5://localhost:9090"
```

#### macOS:
```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
    --user-data-dir="$HOME/proxy-profile" \
    --proxy-server="socks5://localhost:9090"
```

#### Windows:
```
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" ^
    --user-data-dir="%USERPROFILE%\proxy-profile" ^
    --proxy-server="socks5://localhost:9090"
```
O novo perfil será criado automaticamente. Deste modo, você pode rodar multiplas instâncias do Chrome simultaneamente, e será possível navegar na internet através do SSH tunnel. Digite “qual é o meu IP” na barra de pesquisa da Google para verificar o endreço IP do servidor. 
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target="_blank"}.