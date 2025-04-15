# Como atualizar versões anteriores à 3.29 offline

Clientes que possuem versões anteriores à 3.29 do Segura e desejam atualizar offline sua aplicação para a versão 3.29 ou posterior devem seguir as instruções fornecidas neste artigo.

## Requisitos


* Ajustar o horário do servidor corretamente.
* Tirar um snapshot antes da atualização.
* O Arbitrator deve ser removido do cluster (somente para ambientes com um Arbitrator).

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
2. Quando a instância estiver completamente desligada, faça o snapshot no hipervisor.
3. Reinicie a sua instância do Segura e atualize a aplicação.

* * *
## Como atualizar versões anteriores à 3.29 offline 

:::(Warning) (Atenção)
Antes de atualizar o Segura, execute sempre um snapshot no seu hipervisor e faça o [backup usando o Orbit CLI](/v4/docs/pt/orbit-cli-how-to-configure-backup).

:::
:::(Warning) (Atenção)
Se você utiliza o Segura Arbitrator, remova-o do cluster antes de atualizar o Segura. [Saiba mais em nossa documentação](/v4/docs/pt/arbitrator-remove-arbitrator).
:::

Para atualizar o Segura offline, siga estes passos:

1. Em outra máquina com acesso à internet, baixe o pacote de atualização em um dispositivo separado: 
```Shell
wget https://repo:HpRh0BVMNVAq@repo.Segura.com/bullseye-se-update.sh --no-check-certificate

```
2. Crie uma pasta para os arquivos de atualização dentro do diretório `/var/update`. Use o seguinte comando:

```Shell
sudo install -d /var/update -g mt4adm -o mt4adm
```
3. Faça o upload do arquivo baixado no primeiro passo para o servidor do Segura (via `scp`, por exemplo):

```Shell
scp -P 59022 <update_file_name>  mt4adm@<IP>:/var/update
```
4. Adicione o caractere **#** em cada linha em `resolv.conf` para evitar que ele tente se conectar à internet durante a atualização:

```Shell
sudo vim /etc/resolv.conf
```
5. Conceda permissão ao usuário para executar o arquivo de atualização:
```Shell
sudo chmod +x <update_file_name>
```
6. Em nosso exemplo, nomeamos o arquivo de atualização como `bullseye-se-update.sh`, portanto, nosso comando seria:
```Shell
bullseye-se-update.sh
```
7. Execute o pacote utilizando o seguinte comando:
```Shell
sudo bash <update_file_name>
```
8. Execute o seguinte comando para reiniciar o dispositivo:
```Shell
sudo orbit shutdown --reboot
```
9. Execute o pacote novamente utilizando o seguinte comando:
```Shell
sudo bash <update_file_name>
```
10. Digite **Y** para concordar com os termos do EULA.

11. Após executar o arquivo de atualização, volte para `resolv.conf` e remova o caractere **#** de todas as linhas previamente modificadas.


12. Execute o seguinte comando para reiniciar o dispositivo:
```Shell
sudo orbit shutdown --reboot
```
13. Após a conclusão da reinicialização, execute o seguinte comando e digite **Y** para confirmar:

```Shell
sudo orbit application init
```

14. Uma mensagem no terminal indicará que a atualização foi bem sucedida. Se desejar verificar a versão atual, execute o seguinte comando:

```Shell
sudo orbit version
```

* * *

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).