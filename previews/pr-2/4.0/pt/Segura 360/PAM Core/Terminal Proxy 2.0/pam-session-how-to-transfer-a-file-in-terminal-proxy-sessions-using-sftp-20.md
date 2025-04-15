# Como transferir um arquivo em sessões Terminal Proxy 2.0 usando SFTP

Este documento fornece informações sobre o passo a passo para realizar a transferência de arquivos usando o SFTP em sessões remotas de Terminal Proxy 2.0.

:::(warning) (**Atenção**)  
Algumas ferramentas SSH, como o MobeXterm, definem automaticamente uma conexão SFTP para transferir arquivos após o login com SSH. Essas conexões SFTP **não funcionarão**, pois o proxy Segura as trata separadamente.  
:::

## Requisitos

* Credencial do tipo Terminal Proxy ativa.  
* Iniciar uma conexão via Terminal Proxy do tipo Multihop.

:::(info) (**Info**)  
Para transferência de arquivos diretamente para um servidor de destino usando SFTP, é necessário usar a conexão *Multihop* porque os binários que viajam sob SFTP não têm como interagir com o terminal intermediário.  
:::

---
## Transferência via SFTP no terminal  
Devido a limitações do protocolo, o usuário **não pode** usar uma credencial pessoal para realizar a transferência do arquivo. Apenas com uma credencial cadastrada no Segura será possível realizar a transferência.

Também não será possível gravar a sessão, mas ainda é possível habilitar o log com relatório de arquivos transferidos. Para saber como habilitar esse log, acesse a documentação *Transferência de arquivos em sessão*.

Para iniciar realizar os passos substitua as strings pelos valores descritos na tabela abaixo.

| **String** | **Descrição** |
| :---- | :---- |
| **usuario_senhasegura** | Usuário do cofre Segura. |
| **instancia_senhasegura** | Hostname ou endereço IP do cofre Segura. |
| **credencial** | Usuário da credencial que você deseja usar para acesso. |
| **dispositivo_alvo** | Hostname ou endereço IP do dispositivo que você deseja acessar. |
| **mfa_token** | Código gerado pelo MFA Token. |
| **nome_do_arquivo** | Nome do arquivo a ser transferido. |

## Acesso utilizando Proxy 2.0  
Fazendo o uso do Proxy 2.0 ao realizar uma transferência de arquivos via Terminal Proxy no qual o dispositivo acessado tenha **mais de um** tipo de conectividade cadastrada, para realizar a conexão o usuário terá que informar o protocolo que será utilizado e a porta.

1. Abra o aplicativo de **prompt de comando** de sua preferência.  
   1. Digite `sftp usuario_senhasegura[credencial@dispositivo_alvo{ssh.22}]@instancia_senhasegura`  
   2. Caso esteja cadastrado o uso do **token OTP**, ele deve ser inserido antes da instância Segura: `sftp usuario_senhasegura[credencial@dispositivo_alvo{ssh.22}]token@instancia_senhasegura`.  
   3. Para uso com ***multi-tenant***, o nome do tenant deverá ser incluído após o usuário Segura: `sftp usuario_senhasegura%nome_tenant[credencial@dispositivo_alvo{ssh.22}]@instancia_senhasegura`  
2. Utilize os comandos abaixo para:  
   1. Realizar o **upload** de um arquivo, digite:  
      1. `put [nome_do_arquivo]`  
      2. Aperte a tecla **Enter** para iniciar a ação.  
      3. Quando o arquivo estiver completo, uma mensagem de `nome_do_arquivo 100%` será exibida.  
   2. Realizar o **download** de um arquivo, digite:  
      1. `get [nome_do_arquivo]`  
      2. Aperte a tecla **Enter** para iniciar a ação.  
      3. Quando o arquivo estiver completo uma mensagem de `nome_do_arquivo 100%` será exibida.  
3. Ao finalizar digite:  
   1. `exit`

O Terminal Proxy do Segura também oferece outro tipo de transferência de arquivo via SCP, para saber como acesse o documento [Como transferir um arquivo em sessões Terminal Proxy usando SCP](/v4/docs/pt/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-scp-20).

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.