# Como montar uma partição de backup via CIFS ou NFS

Neste artigo, você encontrará instruções sobre como criar e montar uma partição de backup via CIFS ou NFS.

## Requisitos

* O servidor de backup deve estar configurado com uma pasta compartilhada.
* As [regras do firewall](/v4/docs/pt/installation-firewall-rules) devem estar abertas entre o servidor de backup e o servidor do senhasegura.
* As credenciais devem ter permissão de escrita.

:::(warning) (Local de Backup de Segredos)

Sempre certifique-se de que os backups sejam salvos em um local diferente para proteger as informações sensíveis e manter a continuidade dos negócios.
Para o senhasegura com o appliance cripto, os backups não devem ser armazenados no próprio appliance porque:

1. **Ponto Único de Falha**: Se o appliance falhar, você pode perder tanto os dados quanto o backup.
2. **Opções Limitadas de Recuperação**: No caso de um mau funcionamento de hardware ou software, ter backups em um dispositivo externo garante que você tenha múltiplas opções para recuperação de dados.
3. **Melhores Práticas**: Armazene os backups em um local separado e seguro para cumprir com certificações e padrões de proteção de dados e garantir a disponibilidade.

:::

:::(Warning) (Cuidado)
CIFS e NFS não são suportados pelo Network Connector. Usar esses protocolos resultará em problemas de incompatibilidade.
:::

## Como montar uma partição de backup via CIFS ou NFS

Para montar uma partição de backup via CIFS ou NFS, siga estes passos:

1. No canto superior esquerdo da tela, clique no **Grid menu**, identificado pelos nove quadrados, e selecione **Orbit Server Manager**. 
2. No menu lateral, selecione **Configurações > Backup**.
3. Configure o parâmetro **Gostaria de montar uma partição remota?** para **Sim**.
4. Em **Como enviar os arquivos de backup?**, selecione **Montar uma partição remota (via CIFS ou NFS)**.
5. Clique em **Adicionar partição remota**. Isso abrirá uma nova janela.
6. Preencha os campos **Host remoto** e **Path remoto** com os detalhes do servidor que armazenará o backup. Por exemplo:

* **Host Remoto**: `meuserver.com` ou `10.10.1.5`.
* **Path Remoto**: `/files/backup/senhasegura`.


::: (info) (Info)
Para servidores Windows, verifique o caminho de rede da pasta.
:::

7. Selecione o protocolo:

* **Samba (CIFS)**: requer um usuário com privilégios suficientes para escrever arquivos no diretório especificado no **Caminho remoto**. Caso contrário, o senhasegura não poderá montar a partição ou criar o backup. **Opcional**: adicione um domínio se o servidor host exigir.
* **Network File System (NFS)**: se você escolher uma montagem NFS, não se esqueça de adicionar o endereço IP do senhasegura nas configurações do seu Host NFS Remoto. Caso contrário, o senhasegura não conseguirá montar a partição ou criar o backup.


::: (warning) (Cuidado)
Não use senhas que contenham os caracteres `\` , `&`, e `!` em mapeamentos de partição remota.
:::

Ao concluir as etapas, o sistema gerará um arquivo chamado `write_test`, indicando que a partição tem permissões de escrita.

