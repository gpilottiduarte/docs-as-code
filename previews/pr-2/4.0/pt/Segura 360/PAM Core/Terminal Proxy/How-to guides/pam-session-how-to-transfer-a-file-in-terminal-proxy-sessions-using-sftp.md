# Como transferir um arquivo em sessões Terminal Proxy usando SFTP

Este documento fornece informações sobre o passo a passo para realizar a transferência de arquivos usando o SFTP em sessões remotas de Terminal Proxy.

:::(warning) (**Atenção**)
Algumas ferramentas SSH, como o MobeXterm, definem automaticamente uma conexão SFTP para transferir arquivos após o login com SSH. Essas conexões SFTP **não funcionarão**, pois o proxy Segura as trata separadamente.
:::

## Requisitos

* Credencial do tipo Terminal Proxy ativa.
* Iniciar uma conexão via Terminal Proxy do tipo Multihop.

:::(info) (**Info**)
Para transferência de arquivos diretamente para um servidor de destino usando SFTP, é necessário usar a conexão [Multihop](/v4/docs/pt/pam-session-how-to-make-an-ssh-multihop-connection-via-terminal-proxy) porque os binários que viajam sob SFTP não têm como interagir com o terminal intermediário.
:::

---
## Transferência via SFTP no terminal
Devido a limitações do protocolo, o usuário não pode usar uma credencial pessoal para realizar a transferência do arquivo. Apenas com uma credencial cadastrada no Segura será possível realizar a transferência.

Também não será possível gravar a sessão, mas ainda é possível habilitar o log com relatório de arquivos transferidos. Para saber como habilitar esse log, acesse a documentação [Transferência de arquivos em sessão](/v4/docs/pt/pam-session-activate-remote-session-file-transfer-triggers).

Para realizar os passos substitua as strings pelos valores descritos na tabela abaixo.

**String**|**Descrição**
---|---
`usuario_senhasegura`|Usuário do cofre Segura.
`instancia_senhasegura`|Hostname ou endereço IP do cofre Segura.
`credencial`|Usuário da credencial que você deseja usar para acesso.
`dispositivo_alvo`|Hostname ou endereço IP do dispositivo que você deseja acessar.
`mfa_token`|Código gerado pelo MFA Token.
`nome_do_arquivo`|Nome do arquivo a ser transferido.

1. Abra o aplicativo de **prompt de comando** de sua preferência.
    1. Digite `sftp usuario_senhasegura[credencial@dispositivo_alvo]@instancia_senhasegura`
        :::(warning) (**Atenção**)
        Caso esteja cadastrado o uso do **token OTP**, ele deve ser inserido conforme exemplo: `sftp username[credencial@dispositivo]token@instancia_senhasegura`.
        :::
2. Utilize os comandos abaixo para:
    1. Realizar o upload de um arquivo, digite:
        1. `put [nome_do_arquivo]`
        2. Aperte a tecla Enter para iniciar a ação.
        3. Quando o arquivo estiver completo, uma mensagem de `<nome_do_arquivo> 100%` será exibida.
    2. Realizar o download de um arquivo, digite:
        1. `get [nome_do_arquivo]`
        2. Aperte a tecla Enter para iniciar a ação.
        3. Quando o arquivo estiver completo uma mensagem de `<nome_do_arquivo> 100%` será exibida.
3. Ao finalizar digite:
    1. `exit`

Após a conclusão os arquivos estarão salvos. No caso de upload estará salvo dentro da máquina alvo e no caso de download estará salvo dentro da máquina do usuário. Para que os arquivos sejam salvos dentro do **Segura shell** é necessário realizar o `sftp` sem o uso do Multihop.

---
## Via aplicativo WinSCP

1. Abra o aplicativo WinSCP em sua máquina.
2. Na tela Login preencha os campos presentes em Sessão.
    1. **Protocolo de aquivo**: selecione SFTP.
    2. **Host**: digite o hostname ou o endereço IP da instância do Segura.
    3. **Porta**: digite 22.
    4. **Usuário**: digite `sftp usuario_senhasegura[credencial@dispositivo_alvo]@instancia_senhasegura`
    5. **Senha**: digite sua senha de acesso do Segura
3. Clique em **Login**.

Após esses passos a conexão estará pronta para o uso, siga as instruções da própria ferramenta para realizar a transferência dos arquivos.

:::(info) (**Info**)
Se o usuário tiver um token OTP configurado, use o token na cadeia de conexão. `sftp usuario_senhasegura[credencial@dispositivo]mfa_token@instancia_senhasegura`.
:::


O Terminal Proxy do Segura também oferece outro tipo de transferência de aquivo via SCP, para saber como acesse o documento [Como transferir um arquivo em sessões Terminal Proxy usando SCP](/v4/docs/pt/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-scp).

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.