# Como habilitar uma transferência de arquivo em sessões remotas

Neste documento, você encontra um guia passo a passo sobre como habilitar a transferência de arquivos em sessões remotas.

:::(info) (**Info**)
Habilitar a transferência de arquivos não habilita os logs. Para habilitar o log dos arquivos transferidos em sessão, acesse o documento [Como habilitar gatilhos para transferência de arquivo em sessões remotas](/v3-33/docs/pt/pam-session-activate-remote-session-file-transfer-triggers).
:::
***
## Habilitar a transferência

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral selecione **Parâmetros do sistema** >  **Parâmetros do sistema**. 
3. Na aba **Sessão remota**, na sessão **Geral**:
    1. Localize o campo **Habilitar transferência de arquivos?*** e escolha a opção **Sim**.
4. No canto inferior esquerdo clique em **Salvar**.

:::(info) (**Info**)
Durante a transferência, quando há muitos arquivos, pode levar um pouco mais de tempo do que o habitual para os arquivos serem processados. Assim que o upload for concluído, a sessão voltará ao normal.
:::

Ao concluir, será possível realizar a transferência de arquivos de sua máquina para a sessão remota ou até mesmo entre sessões.

Para saber mais sobre o recurso de habilitar apenas para grupos, dispositivos, credenciais e origens específicas, acesse o documento sobre [Níveis de segregação](/v3-33/docs/pt/pam-session-segregation-level).
***

### Próximos passos:
[Como habilitar gatilhos para transferência de arquivo em sessões remotas](/v3-33/docs/pt/pam-session-activate-remote-session-file-transfer-triggers)
[Arquivos trafegados](/v3-33/docs/pt/pam-session-transferred-files)
[Como criar uma nova segregação para grupos](/v3-33/docs/pt/pam-session-create-segregation-group)
[Como criar uma nova segregação para dispositivo](/v3-33/docs/pt/pam-session-create-segregation-device)
[Como criar uma nova segregação para credenciais](/v3-33/docs/pt/pam-session-create-segregation-credentials)
[Como criar uma nova segregação por origem](/v3-33/docs/pt/pam-session-create-segregation-origin)

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target="_blank"}.