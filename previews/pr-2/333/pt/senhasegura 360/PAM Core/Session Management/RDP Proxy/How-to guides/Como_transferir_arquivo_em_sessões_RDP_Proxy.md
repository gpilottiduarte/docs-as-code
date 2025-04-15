# Como transferir arquivo em sessões RDP Proxy

Neste documento, você encontra um guia passo a passo sobre como realizar transferência de arquivos em sessões RDP Proxy.

O senhasegura RDP Proxy utiliza o protocolo RDP nativo. Portanto, todos os recursos compartilhados entre o lado cliente e o lado servidor funcionarão como uma conexão RDP normal, mesmo com as camadas de monitoramento do senhasegura.

---
## Transferir arquivo
:::(warning) (**Atenção**)
A transferência de arquivos deve estar habilitada nos **Parâmetros do sistema** na seção de **Sessões remotas** para funcionar. Para mais informações sobre como realizar essa ação acesse o documento [Como habilitar uma transferência de arquivo em sessões remotas](/v3-33/docs/pt/pam-session-activate-remote-session-file-transfer).
:::

1. Abra o aplicativo de **Conexão de Área de Trabalho Remota** de sua preferência.
2. No campo **Computador**, digite o endereço de IP.
3. No campo **Nome de usuário**, digite o nome de usuário utilizado para o acesso ao cofre.
4. Acesse **Recursos locais**, na seção **Dispositivos e recursos locais**, clique em **Mais** e selecione o driver para compartilhamento.

Para transferir um arquivo do lado do cliente para o dispositivo de destino, copie o arquivo desejado e cole-o em uma pasta da máquina local, localizada sob **Este computador**. O senhasegura irá então registrar esta ação e, se qualquer plugin de transferência de arquivo estiver ativo, ele será acionado antes que o arquivo atinja o destino.

Para os dados de texto armazenados na área de transferência, os dados serão registrados em textos indexados pela sessão, mas nenhum plugin será acionado.
Você também pode transferir recursos locais para a máquina destino utilizando a conexão de área remota do Microsoft®Windows®.

---
### Próximos passos
Como realizar uma conexão a um dispositivo remoto
Como realizar uma conexão utilizando Multihop

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.