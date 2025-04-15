# Como atualizar o Segura online

::: (error) (Importante)
Se você está usando uma versão anterior à 3.33 e deseja atualizar o Segura para a versão 3.33 ou posterior, consulte o artigo [Como atualizar versões anteriores à 3.33](/v4/docs/pt/how-to-update-Segura-in-stages).
:::
::: (error) (Importante)
Se você utiliza o Zabbix será necessário reconfigurá-lo após atualizar o Segura para a versão 3.30 via Interface de Linha de Comando (CLI). Para instruções sobre como configurar o Zabbix via Orbit CLI, consulte o artigo [Como configurar o Zabbix via Orbit CLI](/v4/docs/pt/orbit-cli-how-to-configure-zabbix-via-orbit-cli).
:::

Neste artigo você encontra um guia para atualizar sua aplicação Segura online.

## Requisitos

* **Regras de Firewall:** Certifique-se de que as configurações do seu firewall permitam a comunicação com os repositórios do Segura. As [regras de firewall](/v4/docs/pt/installation-firewall-rules) detalhadas podem ser encontradas na documentação.
* **Hora do Servidor:** Verifique se a hora do servidor está configurada corretamente.
* **(Situacional) Árbitro:** se o seu ambiente inclui um Árbitro, remova-o do cluster.
* **Snapshot:** tire um snapshot do sistema antes de prosseguir com a atualização.
* **Atualização Sequencial:** para versões que estão pelo menos duas versões atrás da atual, atualize sequencialmente conforme instruído neste [artigo](/v4/docs/pt/how-to-update-Segura-in-stages).
* **Novo Repositório Segura**: saiba como configurar o [novo repositório Segura](/v4/docs/pt/installation-how-to-change-Segura-to-use-the-new-repository).

:::(error) (Aplicação indisponível durante a atualização)
Quando o Segura iniciar o processo de atualização, todos os recursos estarão indisponíveis até que todos os nós do cluster sejam totalmente atualizados.
:::
:::(Warning) (Atenção)
Antes de atualizar o Segura, tire sempre um snapshot no seu hipervisor e faça o [backup usando o Orbit CLI](/v4/docs/pt/orbit-cli-how-to-configure-backup).
:::
:::(Warning) (Atenção)
Se você utiliza o Segura Arbitrator, remova-o do cluster antes de atualizar o Segura. [Saiba mais em nossa documentação](/v4/docs/pt/arbitrator-remove-arbitrator).
:::

* * *

## Tirar snapshot

Os snapshots devem ser feitos somente quando as instâncias do Segura estiverem offline. Isso garante a capacidade de reverter para uma versão anterior, se necessário.

1. Para desligar uma instância do Segura, utilize o seguinte comando:
    ```bash
    sudo orbit shutdown
    ```
2. Quando a instância estiver completamente desligada, tire o snapshot no hipervisor.  
3. Reinicie a sua instância do Segura e atualize a aplicação.

* * *

## Como atualizar o Segura online

:::(Info) (Baixar pacotes de atualização para instalação posterior)
Como uma opção, você pode baixar os pacotes de atualização para instalar mais tarde. [Baixar pacotes de atualização para instalação posterior](/v4/docs/pt/orbit-cli-how-to-update-the-platform#download-update-packages-to-install-later)
:::

1. Na plataforma Segura, vá para **Configurações > Processos de execução** e desligue os seguintes itens:
    * Expired password.
    * Expired operation cancellation. 
    * Operation executor.
    * Operation executor: Retry.

2. Tire um snapshot.
3. [Inicie uma sessão SSH como usuário administrador do Segura.](/v4/docs/pt/administration-ssh-access)

4. Execute o comando abaixo:
    ```bash
    apt-get update
    ```
5. Em seguida, execute o seguinte comando:
    ```bash
    apt-get install orbit-cli
    ```
6. Execute o comando abaixo para atualizar o Segura para a versão mais recente:
    ```bash
    orbit update
    ```
7. Após a atualização, reinicie o sistema para garantir que todas as mudanças sejam aplicadas corretamente. Para isso, execute o comando abaixo:
    ```bash
    orbit shutdown -r
    ```


* * *

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).
