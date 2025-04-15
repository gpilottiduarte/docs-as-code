# Como atualizar o Segura offline

::: (error) (Importante)
Se você está usando uma versão anterior à 3.33 e deseja atualizar o Segura para a versão 3.33 ou posterior, consulte o artigo [Como atualizar versões anteriores à 3.33](/v4/docs/pt/how-to-update-Segura-in-stages).
:::
::: (error) (Importante)
Se você utiliza o Zabbix será necessário reconfigurá-lo após atualizar o Segura para a versão 3.30 via Interface de Linha de Comando (CLI). Para instruções sobre como configurar o Zabbix via Orbit CLI, consulte o artigo [Como configurar o Zabbix via Orbit CLI](/v4/docs/pt/orbit-cli-how-to-configure-zabbix-via-orbit-cli).
:::

Se o seu cofre não está conectado à internet, siga os passos deste guia para atualizar sua aplicação offline.

## Requisitos

* **Regras de Firewall:** Certifique-se de que as configurações do seu firewall permitam a comunicação com os repositórios do Segura. As [regras de firewall](/v4/docs/pt/installation-firewall-rules) detalhadas podem ser encontradas na documentação.
* **Hora do Servidor:** Verifique se a hora do servidor está configurada corretamente.
* **(Situacional) Árbitro:** Se o seu ambiente inclui um Árbitro, remova-o do cluster.
* **Snapshot:** Tire um snapshot do sistema antes de prosseguir com a atualização.
* **Atualização Sequencial:** Para versões que estão pelo menos duas versões atrás da atual, atualize sequencialmente conforme instruído neste [artigo](/v4/docs/pt/how-to-update-Segura-in-stages).
* **Novo Repositório Segura**: saiba como configurar o [novo repositório Segura](/v4/docs/pt/installation-how-to-change-Segura-to-use-the-new-repository).

:::(error) (Aplicação indisponível durante a atualização)
Quando o Segura iniciar o processo de atualização, todos os recursos estarão indisponíveis até que todos os nós do cluster sejam totalmente atualizados.
:::

* * *

## Tirar snapshot

Os snapshots devem ser feitos somente quando as instâncias do Segura estiverem offline. Isso garante a capacidade de reverter para uma versão anterior, se necessário.

1. Para desligar uma instância do Segura, utilize o seguinte comando:
```Shell
sudo orbit shutdown
```
2. Quando a instância estiver completamente desligada, faça o snapshot no hipervisor.
3. Reinicie a sua instância do Segura e atualize a aplicação.

* * *
## Como atualizar o Segura offline

:::(Warning) (Atenção)
Antes de atualizar o Segura, execute sempre um snapshot no seu hipervisor e faça o [backup usando o Orbit CLI](/v4/docs/pt/orbit-cli-how-to-configure-backup).

:::
:::(Warning) (Atenção)
Se você utiliza o Segura Arbitrator, remova-o do cluster antes de atualizar o Segura. [Saiba mais em nossa documentação](/v4/docs/pt/arbitrator-remove-arbitrator).
:::

Para atualizar o Segura offline usando uma máquina Linux, siga estas etapas e consulte os exemplos fornecidos abaixo:

1. Em outra máquina com acesso à internet, baixe o pacote de atualização em um dispositivo separado: 
    ```bash
    wget https://storage.googleapis.com/Segura-packages-sp/packages/bookworm-stable-se-update.sh
    ```
2. Crie uma pasta para os arquivos de atualização dentro do diretório `/var/update`. Use o seguinte comando:
    ```bash
    sudo install -d /var/update -g mt4adm -o mt4adm
    ```
3. Faça o upload do arquivo baixado no primeiro passo para o servidor do Segura (via `scp`, por exemplo):
    ```bash
    scp -P 59022 <update_file_name>  mt4adm@<IP>:/var/update
    ```
4. Adicione o caractere **#** em cada linha em `resolv.conf` para evitar que ele tente se conectar à internet durante a atualização:
    ```bash
    sudo vim /etc/resolv.conf
    ```
5. Conceda permissão ao usuário para executar o arquivo de atualização:
    ```bash
    sudo chmod +x <update_file_name>
    ```
6. Em nosso exemplo, nomeamos o arquivo de atualização como `bookworm-stable-se-update.sh`.
7. Execute o pacote utilizando o seguinte comando:
    ```bash
    sudo bash <update_file_name>
    ```
8. Digite **Y** para concordar com os termos do EULA.

9. Após executar o arquivo de atualização, volte para `resolv.conf` e remova o caractere **#** de todas as linhas previamente modificadas.

10. Execute o seguinte comando para reiniciar o dispositivo:
    ```bash
    sudo orbit shutdown --reboot
    ```
11. Após a conclusão da reinicialização, execute o seguinte comando e digite **Y** para confirmar:
    ```bash
    sudo orbit application init
    ```

12. Uma mensagem no terminal indicará que a atualização foi bem sucedida. Se desejar verificar a versão atual, execute o seguinte comando:
    ```bash
    sudo orbit version
    ```

* * *

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).