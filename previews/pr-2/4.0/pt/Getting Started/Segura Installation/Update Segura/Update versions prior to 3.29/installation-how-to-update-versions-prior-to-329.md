# Como atualizar versões anteriores à 3.29 online

Clientes com versões anteriores à 3.29 do Segura que desejam atualizar para a versão 3.29 ou posterior devem seguir as instruções contidas neste artigo. 

## Requisitos

* As [regras de firewall](/v4/docs/pt/installation-firewall-rules) devem permitir a comunicação com os repositórios do Segura.
* O horário do servidor deve estar ajustado corretamente.
* O Arbitrator deve ser removido do cluster (somente para ambientes com um Arbitrator).
* Tirar um snapshot antes da atualização.


:::(Warning) (Aplicação indisponível durante a atualização)
Quando o Segura iniciar o processo de atualização, ele ficará indisponível até que a atividade seja concluída.

:::

* * *

## Tirar snapshot

Os snapshots devem ser feitos somente quando as instâncias do Segura estiverem offline. Isso garante a capacidade de reverter para uma versão anterior, se necessário.


1. Para desligar uma instância do Segura, utilize o seguinte comando:
```Shell
sudo orbit shutdown
```
2. Quando a instância estiver completamente desligada, tire o snapshot no hipervisor.  
3. Reinicie a sua instância do Segura e atualize a aplicação.

* * *

## Como atualizar versões anteriores à 3.29


:::(Warning) (Atenção)
Antes de atualizar o Segura, tire sempre um snapshot no seu hipervisor e faça o [backup usando o Orbit CLI](/v4/docs/pt/orbit-cli-how-to-configure-backup).
:::
:::(Warning) (Atenção)
Se você utiliza o Segura Arbitrator, remova-o do cluster antes de atualizar o Segura. [Saiba mais em nossa documentação](/v4/docs/pt/arbitrator-remove-arbitrator).
:::

1. Na plataforma Segura, vá para **Configurações > Processos de execução** e desligue os seguintes itens:


* Expired password.
* Expired operation cancellation. 
* Operation executor.
* Operation executor: Retry.


2. Tire um snapshot.
3. [Inicie uma sessão SSH como usuário administrador do Segura.](/v4/docs/pt/administration-ssh-access)




4. Execute os seguintes comandos para atualizar o sistema operacional para a versão mais recente do Debian:

```Shell
apt-get update
```
4.1.  O comando a seguir deve ser inserido duas vezes, como demonstrado:

 
```Shell
apt-get install orbit-cli
apt-get install orbit-cli
```
5. Para atualizar o kernel, utilize o seguinte comando:
```Shell
orbit update
```
6. Após a atualização, reinicie o sistema para carregar a nova versão do kernel:
```Shell
orbit shutdown -r
```
7. Execute o comando abaixo para atualizar o Segura para a versão mais recente:
```Shell
orbit update
```
8. Após a segunda atualização do Segura, reinicie o sistema mais uma vez para garantir que todas as mudanças sejam aplicadas corretamente. Para isso, execute o comando abaixo:

```Shell
orbit shutdown -r
```
9. Retorne para **Configurações > Processos de execução** e reative os itens desativados no passo 1:


* Expired password.
* Expired operation cancellation.
* Operation executor.
* Operation executor: Retry.

* * *

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).