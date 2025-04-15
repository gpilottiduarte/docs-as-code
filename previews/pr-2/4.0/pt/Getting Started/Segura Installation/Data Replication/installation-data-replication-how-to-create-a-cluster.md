# Como criar um cluster

Neste artigo você encontra instruções sobre como criar um cluster no Segura.


:::(error) (Importante)
Antes de configurar um cluster, certifique-se sempre de fazer o [backup](/v4/docs/pt/installation-backup-overview) e tirar um snapshot da instância para garantir uma opção de recuperação em caso de falha.

:::

:::(Warning) (Atenção)
Durante a configuração, é possível que a instância do Segura que você está configurando tenha períodos de indisponibilidade.

:::

:::(Info) (Info)
A replicação de dados com um cluster externo está em fase experimental. Caso necessite utilizar esse recurso, entre em contato com nossa equipe de suporte.

:::

## Requisitos

Para criar um cluster, você precisa atender aos seguintes requisitos:

* Realizar o download da aplicação do Segura no [PAM Solution Center](https://suporte.Segura.com.br/en/support/login){target="_blank"} na seção de **Virtual Appliances**.
* Alterar a senha padrão da aplicação.
* Configurar o [hostname](/v4/docs/pt/installation-how-to-set-up-the-network-and-change-the-hostname) da aplicação.
* Configurar a [Rede](/v4/docs/pt/installation-how-to-set-up-the-network-and-change-the-hostname).
* Configurar o [Servidor NTP](/v4/docs/pt/orbit-cli-how-to-configure-ntp-servers).
* Configurar o [DNS](/v4/docs/pt/orbit-cli-how-to-configure-dns).


## Como criar um cluster
Para criar um cluster, siga estes passos:
:::(Info) (Info)
Ao seguir estes passos, você pode criar um novo cluster ou adicionar membros a um cluster existente.

:::

1. Vá para **Orbit Server Manager > Replicação > Configurações**.
2. Em **Modo de operação**, selecione **Cluster**.
3. Clique em **Ativar replicação**.
4. Ative os **Sincronizadores de arquivos**. 
5. Defina o **Sync Timeout** em segundos. O valor padrão para o Sync Timeout é 15 segundos, mas você pode personalizar esse intervalo, conforme necessário. 
6. Adicione os  **IPs dos Membros do cluster**.
:::(Warning) (Atenção)
 Certifique-se de adicionar os IPs na mesma ordem em todos os membros do cluster.

:::
7. Se os membros estiverem em diferentes datacenters, habilite a opção **Membros estão em diferentes datacenters**.

 :::(Warning) (Atenção)
Para clusters com membros em diferentes datacenters, é recomendado utilizar uma **latência alta** entre os membros. 

:::

8. Defina os **Segmentos de rede** com um número entre 1 e 9.

:::(Info) (Info)
É importante que os membros de um mesmo datacenter sejam configurados com o mesmo segmento. Caso haja apenas um membro em cada datacenter, deixe o campo **Segmentos de rede** em branco.

:::

9. Defina uma **Mensagem de exibição da tela de recovery** para casos de falha.

10. Clique em **Salvar**.
11. Clique em **Sim** para confirmar que deseja fazer alterações nas configurações do seu banco de dados e reiniciar o serviço.

12. Caso essa seja a instância primária, clique em **Assumir como Primário**.

:::(Warning) (Atenção)
Configure apenas um membro como primário. Em caso de falha,  configure outro membro para assumir o papel de primário.

:::

13. Verifique se o status indica que o sistema já foi restabelecido e que o membro do cluster foi criado com sucesso.

:::(error) (Importante)
Antes de iniciar a configuração dos próximos membros do cluster, aguarde o restabelecimento da instância configurada, pois o banco de dados da aplicação será reiniciado e atualizado com as novas configurações. Acesse **Orbit Server Manager > Replicação > Status** para verificar se a criação do cluster foi concluída. Se sim, siga para a próxima instância.

:::

14. Repita o processo com os próximos membros do cluster.


Após configurar o primeiro membro e os seguintes, eles terão seu sistema reiniciado e o banco de dados atualizado, sendo agregados ao cluster com a mesma senha que o membro primário do cluster.

:::(error) (Importante)
All cluster members will share the database information from the primary member.
:::

Para obter informações adicionais sobre a arquitetura do cluster, consulte o artigo sobre a [Arquitetura do Cluster](/v4/docs/pt/installation-architecture-high-availability-and-disaster-recovery).


* * *
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target="_blank"}.