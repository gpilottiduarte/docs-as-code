# Como atualizar um cluster

::: (error) (Importante)
Se você está usando uma versão anterior à 3.33 e deseja atualizar o senhasegura para a versão 3.33 ou posterior, consulte o artigo [Como atualizar versões anteriores à 3.33](/v3-33/docs/pt/how-to-update-senhasegura-in-stages).
:::

::: (error) (Importante)
Se você utiliza o Zabbix será necessário reconfigurá-lo após atualizar o senhasegura para a versão 3.30 via Interface de Linha de Comando (CLI). Para instruções sobre como configurar o Zabbix via Orbit CLI, consulte o artigo [Como configurar o Zabbix via Orbit CLI](/v3-33/docs/pt/orbit-cli-how-to-configure-zabbix-via-orbit-cli).
:::
Neste artigo você encontra um guia sobre como atualizar o senhasegura em ambientes em cluster.


## Requisitos

* **Regras de Firewall:** Certifique-se de que as configurações do seu firewall permitam a comunicação com os repositórios do senhasegura. As [regras de firewall](/v3-33/docs/pt/installation-firewall-rules) detalhadas podem ser encontradas na documentação.
* **Sincronização do Cluster:** Todos os membros do cluster devem estar sincronizados.
* **Hora do Servidor:** Verifique se a hora do servidor está configurada corretamente.
* **(Situacional) Árbitro:** Se o seu ambiente inclui um Árbitro, remova-o do cluster.
* **Snapshot:** Tire um snapshot do sistema antes de prosseguir com a atualização.
* **Atualização Sequencial:** Para versões que estão pelo menos duas versões atrás da atual, atualize sequencialmente conforme instruído neste [artigo](/v3-33/docs/pt/how-to-update-senhasegura-in-stages).
* **Novo Repositório senhasegura**: saiba como configurar o [novo repositório senhasegura](/v3-33/docs/pt/installation-how-to-change-senhasegura-to-use-the-new-repository).

:::(error) (Aplicação indisponível durante a atualização)
Quando o senhasegura iniciar o processo de atualização, todos os recursos estarão indisponíveis até que todos os nós do cluster sejam totalmente atualizados.
:::

:::(Warning) (Atenção)
Antes de atualizar o senhasegura, tire sempre um snapshot no seu hipervisor e faça o [backup usando o Orbit CLI](/v3-33/docs/pt/orbit-cli-how-to-configure-backup).
:::
:::(Warning) (Atenção)
Se você utiliza o senhasegura Arbitrator, remova-o do cluster antes de atualizar o senhasegura. [Saiba mais em nossa documentação](/v3-33/docs/pt/arbitrator-remove-arbitrator).
:::

* * *

## Tirar snapshot

:::(Error) (Importante)
* Em ambientes em cluster, tire os snapshots sempre em ordem reversa, partindo do último membro em direção ao membro primário. 
* Sempre tire o snapshot de todas as instâncias do senhasegura separadamente. 
* Desligue uma instância por vez, tire o snapshot, ligue novamente e valide que ela foi ressincronizada antes de prosseguir para a próxima instância.
:::

Os snapshots devem ser feitos somente quando as instâncias do senhasegura estiverem offline. Isso garante a capacidade de reverter para uma versão anterior, se necessário.

1. Para desligar uma instância do senhasegura, utilize o seguinte comando:
    ```bash
    sudo orbit shutdown
    ```
2. Quando a instância estiver completamente desligada, tire o snapshot no hipervisor.  
3. Em seguida, inicie a instância do senhasegura e atualize a aplicação, após executar o snapshot de todas as instâncias do cluster.


* * *

## Como atualizar um cluster

:::(Info) (Baixar pacotes de atualização para instalação posterior)
Como uma opção, você pode baixar os pacotes de atualização para instalar mais tarde. [Baixar pacotes de atualização para instalação posterior](/v3-33/docs/pt/orbit-cli-how-to-update-the-platform#download-update-packages-to-install-later)
:::

1. Na plataforma senhasegura, vá para **Orbit Config Manager > Replicação > Status** e verifique o status de cada membro do cluster. Todos os membros devem estar ligados e sincronizados.

2. Na plataforma senhasegura, vá para **Configurações > Processos de execução** e desligue os seguintes itens:


* Expired password.
* Expired operation cancellation. 
* Operation executor.
* Operation executor: Retry.


3. Tire snapshots de cada membro do cluster. 
:::(Error) (Importante)
Lembre-se de tirar os snapshots em ordem reversa, do último membro para o primeiro.
:::
4. [Inicie uma sessão SSH como usuário administrador do senhasegura.](/v3-33/docs/pt/administration-ssh-access)




5. Execute o seguinte comando:

```Shell
apt-get update
```
6. Em seguida, execute o seguinte comando:


```Shell
apt-get install orbit-cli
```

7. Execute o comando abaixo para atualizar o senhasegura para a versão mais recente:
```Shell
orbit update
```
8. Após a atualização do senhasegura, reinicie o sistema para garantir que todas as mudanças foram aplicadas corretamente:


```Shell
orbit shutdown -r
```
:::(Error) (Importante)
Ao atualizar o senhasegura em um ambiente em cluster, não atualize os membros como entidades standalone (independentes). Certifique-se de atualizar cada membro do cluster individualmente, iniciando pelo membro primário e prosseguindo sequencialmente para os outros membros. Por exemplo, atualize o Membro primário, depois atualize o Membro 2 e, finalmente, atualize o Membro 3.

**Não seguir essas etapas durante a atualização pode prejudicar o cluster.**

:::

9. Repita os passos de **5 a 8 com todos os outros membros do cluster**.
10. Volte para **Configurações > Processos de execução** e reative os itens:


* Expired password.
* Expired operation cancellation.
* Operation executor.
* Operation executor: Retry.

11. Volte para **Orbit Config Manager > Replicação > Status** e verifique o status de cada membro para confirmar que eles estão ligados e sincronizados.


* * *

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
