# Como atualizar um cluster em versões anteriores à 3.29

Clientes que possuem um ambiente em cluster com versões anteriores à 3.29 do senhasegura e que desejam atualizar para a versão 3.29 ou posterior, devem seguir as instruções contidas neste artigo. 

## Requisitos

* Todos os membros do cluster devem estar sincronizados.
* As [regras do firewall](/v3-33/docs/pt/installation-firewall-rules) devem permitir a comunicação através da porta 443 para estabelecer uma conexão com o repositório do senhasegura (apenas para atualizações online).
* O horário do servidor de cada membro do cluster deve estar ajustado corretamente.
* O Arbitrator deve ser removido do cluster (somente para ambientes com um Arbitrator)
* Tirar snapshots de cada membro do cluster antes da atualização.


:::(Warning) (Aplicação indisponível durante a atualização)
Quando o senhasegura iniciar o processo de atualização, ele ficará indisponível até que a atividade seja concluída.

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
```Shell
sudo orbit shutdown
```
2. Quando a instância estiver completamente desligada, tire o snapshot no hipervisor.  
3. Em seguida, inicie a instância do senhasegura e atualize a aplicação, após executar o snapshot de todas as instâncias do cluster.


* * *

## Como atualizar um cluster em versões anteriores à 3.29

:::(Warning) (Atenção)
Antes de atualizar o senhasegura, tire sempre um snapshot no seu hipervisor e faça o [backup usando o Orbit CLI](/v3-33/docs/pt/orbit-cli-how-to-configure-backup).
:::
:::(Warning) (Atenção)
Se você utiliza o senhasegura Arbitrator, remova-o do cluster antes de atualizar o senhasegura. [Saiba mais em nossa documentação](/v3-33/docs/pt/arbitrator-remove-arbitrator).
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




5. Execute o seguinte comando para atualizar o sistema operacional para a versão mais recente do Debian:

```Shell
apt-get update
```
5.1.  O comando a seguir deve ser inserido duas vezes, como demonstrado:

 
```Shell
apt-get install orbit-cli
apt-get install orbit-cli
```
6. Para atualizar o kernel, utilize o seguinte comando:
```Shell
orbit update
```
7. Após a atualização, reinicie o sistema para carregar a nova versão do kernel:
```Shell
orbit shutdown -r
```
8. Execute o comando abaixo para atualizar o senhasegura para a versão mais recente:
```Shell
orbit update
```
9. Após a atualização do senhasegura, reinicie o sistema mais uma vez para garantir que todas as mudanças foram aplicadas corretamente:


```Shell
orbit shutdown -r
```
:::(Error) (Importante)
Ao atualizar o senhasegura em um ambiente em cluster, não atualize os membros como entidades standalone (independentes). Certifique-se de atualizar cada membro do cluster individualmente, iniciando pelo membro primário e prosseguindo sequencialmente para os outros membros. Por exemplo, atualize o Membro primário, depois atualize o Membro 2 e, finalmente, atualize o Membro 3.

**Não seguir essas etapas durante a atualização pode prejudicar o cluster.**

:::

10. Repita os passos de **5 a 9 com todos os outros membros do cluster**.
11. Volte para **Configurações > Processos de execução** e reative os itens:


* Expired password.
* Expired operation cancellation.
* Operation executor.
* Operation executor: Retry.

12. Volte para **Orbit Config Manager > Replicação > Status** e verifique o status de cada membro para confirmar que eles estão ligados e sincronizados.


* * *

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).