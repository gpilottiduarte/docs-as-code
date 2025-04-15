# Como utilizar um arquivo .rdp para iniciar uma sessão remota

Neste artigo você encontra um guia passo a passo sobre como realizar uma conexão utilizando um arquivo `.rdp`.

:::(warning) (**Atenção**)
O arquivo `.rdp` é de uso único e possui o tempo de 30 segundos para ser acessado após o download. Depois do primeiro uso ou do período de tempo o arquivo baixado não poderá mais ser utilizado para iniciar a sessão e terá que ser realizado o download novamente.
:::

---
### Requisitos
Uma credencial com a conectividade do tipo RDP.
O parâmetro Habilitar o download para acesso local? precisa estar selecionado como Sim. Para saber como habilitar esse parâmetro, acesse a documentação [Parâmetros do sistema - Sessão Remota](/v3-33/docs/pt/pam-session-proxy-settings).

---
## Baixar o arquivo .rdp

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais** > **Todas**.
3. Na tela **Credenciais de acesso**, no campo de busca **Conetividade**, escolha a opção **RDP**.
4. Clique em **Filtrar**.
5. Na lista de credenciais apresentada, escolha a credencial da qual deseja baixar o arquivo `.rdp`.
    1. Na coluna **Ação**, clique ícone representado pelos três pontos verticais e escolha a opção **Remote Desktop**.
    2. O download do arquivo `.rdp` irá iniciar.
    :::(info) (**Info**)
    O arquivo `.rdp` estará salvo na pasta Download padrão do computador.
    :::

## Utilizar o arquivo .rdp
Após o download do arquivo, ele poderá ser aberto pelo ícone Download, representado por uma seta apontada para baixo, localizado na parte superior da tela do navegador, ou acessando a pasta Download do seu computador, onde o arquivo está salvo.

1. Clique no arquivo `.rdp` para abrir.
2. Na janela **Conexão de Área de trabalho Remota**, clique em **Conectar**.
3. Na tela de aviso, clique em **Sim**.
4. A janela com a sessão remota será aberta.
    1. Se caso houver uma mensagem de saudação, clique em **OK** para fechar e ter acesso a sessão.

Após esses passos, a sessão terá sido iniciada e estará pronta para  uso.
:::(warning) (**Atenção**)
Caso o arquivo já tenha sido utilizado ou o período de utilização (30 segundos) tenha expirado, ao conectar, o sistema apresentará a mensagem de erro **“Usuário ou senha incorreta”**.
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).