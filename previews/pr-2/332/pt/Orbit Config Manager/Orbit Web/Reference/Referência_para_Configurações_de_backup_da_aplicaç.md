# Referência para Configurações de backup da aplicação

Neste documento, você encontrará todas as informações sobre o menu de **Configurações** da interface **Orbit Web**.

:::(info) (Info)
O Backup será realizado de forma automática, sem a interrupção da solução.
:::

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Orbit Config Manager**.
1. No menu lateral, selecione **Configurações >** **Backup**.

### Configurações de backup da aplicação
| Item                            | Descrição                                                                                                                      |
|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| **Habilitar backup da aplicação?** | Ao habilitar essa opção, serão executados backups dos dados, logs e arquivos de configuração. Certifique-se de que há espaço suficiente no sistema de armazenamento. |
| **Ativar backup de arquivos da sessão?** | Ao habilitar essa opção, os arquivos da sessão também serão incluídos no backup.                                        |
| **Diretório de backup**         | Diretório onde o serviço de backup irá armazenar os arquivos gerados.                                                          |
| **Prefixo do nome do arquivo**  | Os arquivos serão nomeados com o prefixo mostrado neste campo.                                                                 |
| **Modo do backup de arquivos**  | Os arquivos serão sincronizados via RSYNC.                                                                                      |
| **Diretório do modo RSYNC**     | Diretório onde os arquivos serão sincronizados via RSYNC.                                                                       |
| **Total de backups**            | Número de backups.                                                                                                             |
| **Montar uma partição remota?** | Habilitando essa opção, através do modo de envio dos arquivos de backup configurado, os arquivos serão transferidos para o armazenamento externo. |
| **Salvar**                      | Botão para salvar as configurações.                                                                                            |
