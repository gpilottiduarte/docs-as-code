# Parâmetros do sistema

# Referência para Parâmetros do GO Endpoint Manager

Acesse a configuração de parâmetros do **PEDM GO Endpoint Manager** através do caminho **Grid Menu** > **GO Endpoint Manager** > **Configurações** > **Parâmetros** > **GO Endpoint Manager**. Na tela, você encontrará as seguintes informações:

:::(Info) (Info)
O caminho indicado acima é exclusivo para o senhasegura v.3.32 e o agente do **PEDM GO Endpoint Manager** para Windows v.3.32. Usuários de versões inferiores a essa devem acessar a configuração de parâmetros através do caminho **Grid Menu** > **GO Endpoint Manager** > **Configurações** > **Parâmetros** > **go Windows**.
:::


| **Parâmetro** | **Descrição** | **Valor esperado**  |
|---------------|---------------|---------------------|
| `Token do cofre` | Token de autenticação do senhasegura.go client, utilizado para registro da estação de trabalho no senhasegura. | String (fixo). |
| `Habilitar credenciais?\*`                                      | Permita ou proíba o usuário do senhasegura.go client de ver e copiar credenciais, e iniciar sessões remotas de acordo com seu grupo de acesso. | **Sim** ou **Não**. |
| `Habilitar aplicações?\*`                                       | Permita ou proíba usuários do senhasegura.go client de fazer execuções, elevações de privilégio e impersonações.| **Sim** ou **Não**. |
| `Habilitar desinstalação?*`                                    | Permita ou proíba usuários do senhasegura.go client de acessar o módulo de desinstalar aplicações.| **Sim** ou **Não**. |
| `Habilitar compartilhamento de rede?*`                         | Permita ou proíba o usuário do senhasegura.go client de acessar o módulo de compartilhamento de rede.| **Sim** ou **Não**. |
| `Habilitar interface de rede?*`                                | Permita ou proíba o usuário do senhasegura.go client de acessar a configuração dos adaptadores de rede do sistema operacional.| **Sim** ou **Não**. |
| `Habilitar painel de controle?*`                               | Permita ou proíba o usuário do senhasegura.go client de acessar o painel de controle do sistema operacional.| **Sim** ou **Não**. |
| `Habilitar uso offline?*`                                      | Permita ou proíba que o usuário do senhasegura.go client execute aplicações mesmo sem conexão ou registro da estação de trabalho no senhasegura. É preciso ter a estação de trabalho registrada antes de ficar offline pela primeira vez.| **Sim** ou **Não**. |
| `Habilitar integração UAC?*`                                   | Permita ou proíba a integração com o provedor de credenciais (UAC), onde o usuário do senhasegura.go client pode utilizar credenciais do senhasegura para executar aplicações no sistema operacional.| **Sim** ou **Não**. |
| `Permitir a gravação de sessão?*`                              | Permita ou proíba a gravação de tela das estações de trabalho com sessões inicializadas através do senhasegura.go client.| **Sim** ou **Não**. |
| `Habilitar scan de malware e reputação de aplicações?*`        | Permita ou proíba a análise de malwares antes da execução de aplicações pelo senhasegura.go client.| **Sim** ou **Não**. |
| `Habilitar cofre?*`                                            | Permita ou proíba as funcionalidades do cofre de credenciais, limitando os momentos em que o senhasegura.go client sincroniza as credenciais com o senhasegura e determinando um intervalo de armazenamento local das mesmas. Indicado para volumes altos de credenciais registradas.         | **Sim** ou **Não**. |
| `Intervalo de minutos para solicitar credenciais`               | Intervalo de busca das credenciais no senhasegura.| Número.             |
| `Bloquear o acesso à rede?*`                                   | Permita ou proíba o bloqueio de processos que estejam se comunicando com outro destino que não seja o senhasegura.| **Sim** ou **Não**. |
| `Bloquear usuário`                                              | Permita ou proíba o bloqueio de usuários no senhasegura.go client quando esses executam processos que passam do limite de processos que se comunicam com servidores além do senhasegura. Só pode ser habilitado se o bloqueio de rede estiver ativado.| **Sim** ou **Não**. |
| `Ocorrências (mínimo)`                                          | A quantidade mínima de processos que podem ser finalizados na sessão do usuário antes dele ser bloqueado.| Número.             |
| `Habilitar análise de DLL?*`                                   | Permita ou proíba a análise de DLLs dos processos do sistema operacional. Deve ser utilizado em conjunto com as listas de acessos para bloqueio de aplicações. Se este parâmetro for ativado, as políticas das listas de acessos também serão aplicadas à análise de DDLs.                    | **Sim** ou **Não**. |
| `Habilitar acesso JIT?*`                                       | Permita ou proíba um usuário não administrador de ser inserido no grupo de administradores por uma sessão. O usuário perde acesso de administrador ao pedir para ser removido do grupo, sair da sessão ou reiniciar a máquina.| **Sim** ou **Não**. |
| `Novo diretório confiável`                                      | Lista de diretórios considerados confiáveis na análise da lista de acesso.| String (caminho).   |
| `Diretório a ignorar`                                           | Lista de diretórios que devem ser ignorados ao fazer o scan de aplicações para a lista de aplicações na elevação de privilégio.| String (caminho).   |
| `Token da API virus total`                                      | Campo para inserir token da API do VirusTotal, para que a análise de malwares ocorra com sucesso.| String.             |
| `Ativar autenticação de multifator no login?*`                 | Permita ou proíba a solicitação do token de múltiplo fator quando o usuário faz login no sistema operacional.| **Sim** ou **Não**. |
| `Habilitar autenticação multifator para elevar aplicações?*`   | Habilitar solicitação do token de múltiplo fator quando o usuário quer fazer elevações.| **Sim** ou **Não**. |
| `Habilitar Single Sign-On?*`                                   | Permita ou proíba que a mesma autenticação já realizada ao logar no Windows e no senhasegura.go client seja utilizada para logar no senhasegura.| **Sim** ou **Não**. |
| `Usuário pode elevar aplicações`                                | Habilite a elevação de aplicações através do senhasegura.go client.| **Sim** ou **Não**. |
| `Requer justificativa para elevar aplicações`   | Solicitar justificativa para que o usuário possa elevar uma aplicação. Só pode ser habilitada se o parâmetro `Usuário pode elevar aplicações` também estiver habilitado.| **Sim** ou **Não**. |
| `Requer aprovação para elevar aplicações` | Permita ou proíba o fluxo de aprovação quando o usuário for elevar uma aplicação. Só pode ser habilitado quando os parâmetros `Usuário pode elevar aplicações` e `Requer justificativa para elevar aplicações` também estiverem habilitados.| **Sim** ou **Não**. |
| `Aprovações necessárias`                                        | Quantidade mínima de aprovadores que precisam aprovar a solicitação de elevação do usuário para que a execução seja realizada. Só pode ser habilitado quando os parâmetros `Usuário pode elevar aplicações` e `Requer justificativa para elevar aplicações` também estiverem habilitados. | Número. |
| `Reprovações necessárias para cancelar`                         | Defina quantas reprovações são necessárias para não elevar o privilégio da aplicação.| Número.             |
| `Aprovação em níveis`                                           | Permita ou proíba as aprovações em níveis.| **Sim** ou **Não**. |
| `Permitir acesso emergencial`                                   | Permita ou proíba o usuário de realizar acessos emergenciais. | **Sim** ou **Não**. |
| `Obrigatório especificar código de governança ao justificar?*` | Defina se é necessário que o usuário informe o código de governança para justificar seus acessos.                               | **Sim** ou **Não**. |
| `Sempre adicionar o gestor do usuário aos aprovadores?*`       | Defina se adicionar o gestor do usuário ao grupo de usuários aprovadores sempre será necessário.    | **Sim** ou **Não**. |
| `Mensagem de execução`                                          | Defina a mensagem que deverá aparecer ao usuário quando uma aplicação estiver em execução pelo senhasegura.go client.  | String.             |
| `Mensagem de bloqueio de execução`                              | Defina a mensagem que deverá aparecer ao usuário quando uma aplicação bloqueada pelo senhasegura.go client for executada. | String.             |

:::(Info) (Info)
Algumas funcionalidades do PEDM, como a configuração de adaptadores de rede, necessitam que o parâmetro `Habilitar aplicações?` esteja ativado. Nesses casos, ao executar outras configurações, que precisem do módulo de aplicações ativadas, o senhasegura.go client retorna a mensagem `O parâmetro de elevação deve estar habilitado para executar essa aplicação`.
:::
