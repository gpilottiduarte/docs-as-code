# Como transferir um arquivo em sessões Terminal Proxy 2.0 usando SCP

Este documento fornece informações sobre o passo a passo para realizar a transferência de arquivos usando o comando SCP em sessões remotas de Terminal Proxy.

## Requisitos

* Credencial do tipo Terminal Proxy ativa.

---
## Transferência via SCP  
Para transferir um arquivo usando SCP de uma estação de trabalho para um servidor de destino, são necessárias duas etapas.

1. Na primeira etapa, o arquivo é carregado no Segura usando o proxy do terminal do usuário.  
2. Segunda etapa, o usuário deve se conectar ao Segura Terminal Proxy para fazer upload do mesmo arquivo para um servidor de destino.

Para usar o comando `scp`, use a sintaxe abaixo, substituindo as strings por:

| **String** | **Descrição** |
| :---- | :---- |
| **nome_do_arquivo** | Arquivo a ser transferido. |
| **instancia_senhasegura** | Hostname ou endereço IP do cofre Segura. |
| **usuario_senhasegura** | Usuário do cofre Segura. |
| **caminho_arquivo** | Local onde se encontra o arquivo a ser transferido. |
| **caminho_destino_arquivo** | Local para onde o arquivo deve ser transferido. |
| **usuario_credencial** | Nome de usuário da credencial. |
| **ip_dispositivo** | Endereço de IP do dispositivo. |

## Acesso utilizando Proxy 2.0  
Fazendo o uso do Proxy 2.0 ao realizar uma transferência de arquivos via Terminal Proxy no qual o dispositivo acessado tenha **mais de um** tipo de conectividade cadastrada, para realizar a conexão o usuário terá que informar o protocolo que será utilizado e a porta.

1. Abra o aplicativo de **prompt de comando** de sua preferência.  
2. Digite a linha de comando a seguir para **realizar o upload** de um arquivo para a instância Segura:  
   1. `scp nome_do_arquivo usuario_senhasegura[usuario_credencial@ip_dispositivo{ssh.22}]@instancia_senhasegura:caminho_arquivo`  
3. Caso esteja utilizando o ***multi-tenant***, o nome do tenant deve ser inserido após o usuário Segura:  
   1. `scp nome_do_arquivo usuario_senhasegura%nome_tenant[usuario_credencial@ip_dispositivo{ssh.22}]@instancia_senhasegura:caminho_arquivo`  
4. Digite sua senha.  
5. Aperte a tecla **Enter** para iniciar a ação.  
6. Digite o comando a seguir para **realizar o download** de um arquivo da instância Segura para a estação de trabalho do solicitante:  
   1. `scp usuario_senhasegura[usuario_credencial@ip_dispositivo{ssh.22}]@instancia_senhasegura:caminho_arquivo caminho_destino_arquivo`  
7. Caso esteja utilizando o ***multi-tenant***, o nome do tenant deve ser inserido após o usuário Segura:  
   1. `scp usuario_senhasegura%nome_tenant[usuario_credencial@ip_dispositivo{ssh.22}]@instancia_senhasegura:caminho_arquivo caminho_destino_arquivo`  
8. Digite sua senha.  
9. Aperte a tecla **Enter** para iniciar a ação.

:::(warning) (**Atenção**)  
A sintaxe SCP não suporta cadeia de conexão multihop, sendo assim essas duas etapas se tornam obrigatórias. Use a transferência SFTP para uma melhor experiência.  
:::

O Terminal Proxy do Segura também oferece outro tipo de transferência de arquivo via SFTP, para saber como acesse o documento [Como transferir um arquivo em sessões Terminal Proxy 2.0 usando SFTP](/v4/docs/pt/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-sftp-20).

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.