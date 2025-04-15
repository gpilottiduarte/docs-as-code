# Citrix - Troubleshooting

Neste documento, você encontra um guia passo a passo sobre como verificar e solucionar possíveis problemas relacionados com o **Citrix Bridge Server**.

---
### O desktop que você quer conectar está indisponível

**Cenário**: Citrix XenApp Application Launch Error: O desktop que você quer conectar está indisponível no momento. Por favor, tente mais tarde ou contate um administrador se o problema persistir.
**Solução**: Verifique se o servidor do aplicativo está funcionando ou que não existem sessões travadas. No Citrix, acesse Delivery Groups, e (caso tenham sessões em uso) clique duas vezes no delivery group, selecione a sessão e clique na opção Log Off.

---
### Não consegue conectar ao "192.168.1.1 - AppName"

**Cenário**: Não consegue conectar ao "192.168.1.1 - AppName". Sem arquivo ou diretório. Verifique as configurações de conexão e tente novamente
**Solução**: Verifique a conexão de rede entre o Bridge Server e o servidor de aplicativos.

---
### Não é possível conectar-se à URL do servidor remoto

**Cenário**: Citrix XenApp - Cannot Contact the Citrix Server: Não é possível conectar-se à URL do servidor remoto `https://citrixstore/Citrix/Store/PNAgent/config.xml`. O URL do servidor remoto pode ter sido inserido errado ou o servidor remoto está inativo. Deseja inserir novamente o URL do servidor?
**Solução**: Verifique a conexão entre o Citrix Bridge Server e o Citrix Store. Você pode tentar usar o endereço IP em vez do nome do host da loja. Por exemplo: `http://192.168.0.100/Citrix/senhasegurasf/PNAgent/config.xml`

---
### O servidor de área de trabalho remota encontrou um erro

**Cenário**: O servidor de área de trabalho remota encontrou um erro e fechou a conexão. Tente novamente ou entre em contato com o administrador do sistema.
**Solução**: verifique se o contêiner do Docker está em execução: `sudo docker ps`. Caso contrário, inicie-o usando o seguinte comando: `sudo docker start xrdp-citrix-senhasegura-image_0.9.5-8`.

---
### Não pode transferir arquivos

**Cenário**: a opção de transferir arquivos não está funcionando.
**Solução**: verifique se você instalou o módulo Fuse no Bridge Server Linux. Se você instalou o módulo Fuse, verifique se ele está executando, digite: `lsmod | grep fuse` ou inicie-o digitando: `modprobe fuse`.

---
Você ainda tem dúvidas? Entre em contato com a Comunidade senhasegura.