# Como transferir ou fazer download de um arquivo em sessões Web Proxy HTTP

Este documento fornece informações sobre o passo a passo para realizar a transferência de arquivos uma sessão web proxy HTTP/HTTPS no Segura.

## Requisitos

* Ter uma sessão web disponível.
* Ter o campo **Habilitar transferência de arquivos para Download?** e **Habilitar transferência de arquivos para Upload?** habilitados. Para maiores informações de como habilitar este campo, acesse o documento [Parâmetros do sistema - Sessão Remota](/v4/docs/pt/pam-session-proxy-settings).

---
## Transferir um arquivo
:::(warning) (**Atenção**)
Antes da transferência iniciar, o arquivo é alocado na memória disponível do servidor Segura, e então a transferência é iniciada na sessão. A limitação da memória e o limite de transferência por arquivo pode variar de acordo com a workstation e o navegador utilizado.
:::
:::(info) (**Info**)
Para os navegadores Chrome e Edge o limite é de 1.6 GB. Já para o Firefox o limite é de 4 GB. Nos três navegadores há uma variação de 20%, para mais ou para menos, conforme os recursos disponíveis na workstation utilizada.
:::

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais** > **Todas credenciais**.
3. Na lista, selecione uma sessão que seja do tipo web.
4. Na coluna **Ações**, clique no **botão Ações**.
    1. Selecione **Iniciar sessão**.
5. Deixe a janela web aberta.
6. Abra a pasta onde o arquivo a ser transferido está localizado.
7. Arraste o arquivo para dentro da janela web.
    1. No canto inferior direito aparecerá uma mensagem de confirmação.
    :::(info) (**Info**)
    Se em sua sessão houver um campo de upload, você pode navegar pela pasta principal, onde encontrará todos os arquivos carregados.
    :::
Os arquivos transferidos estarão salvos na pasta home no driver remoto do Segura. Por padrão a letra **G** está relacionada a este driver.

## Download de um arquivo

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais** > **Todas credenciais**.
3. Na lista, selecione uma sessão que seja do tipo web.
4. Na coluna **Ações**, clique no **botão Ações**.
    1. Selecione **Iniciar sessão**.
5. Na janela da sessão web aberta, procure o arquivo que deseja realizar o download.
    1. Clique com o botão direito. Na janela que se abre clique em **Salvar arquivo**.
6. No canto inferior direito aparecerá um link **“Clique aqui para Download”**, ao clicar, o arquivo é baixado para a máquina do usuário
7. Ao final no canto superior direito aparecerá uma mensagem de confirmação.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.