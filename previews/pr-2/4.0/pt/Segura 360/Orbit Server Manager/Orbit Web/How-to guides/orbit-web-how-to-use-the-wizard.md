# Como usar o Wizard

O **Orbit Wizard** é um facilitador de três etapas que estabelece a rede central e os serviços  do ambiente Segura.
:::(Info) (Info)
Todas as configurações do **Orbit Wizard** podem ser alteradas posteriormente através de telas específicas no sistema **Orbit**.
:::

Em uma nova instância do Segura, logo após a ativação através da licença, você será apresentado à primeira etapa do **Orbit Wizard**. Se, por algum motivo, desejar revisar os procedimentos do **Orbit Wizard**, um botão no **Painel** principal pode ser usado para reiniciar suas etapas.

## Etapa 1
Nesta primeira etapa, você pode definir o **Hostname**, **Nome da empresa**, **URL da aplicação**, **Título da aplicação**, **Idioma padrão**, **Fuso horário**, **Configurações de NTP** e **Configurações de DNS**.
:::(Warning) (Atenção)

* Ao alterar o **Hostname**, o servidor será reiniciado.

* Ao alterar o **servidor NTP**, o serviço NTP será reiniciado, e os usuários serão desconectados.

* Ao alterar o **servidor DNS**, certifique-se de que o Segura tenha acesso aos outros elementos de rede já configurados.
:::

## Etapa 2
Na segunda etapa, você pode configurar o **Backup**. Se deseja que o backup seja exportado para uma partição de disco remoto, você pode configurá-lo através de **CIFS**, **NFS** ou envio direto usando **RSYNC**.
:::(Warning) (Atenção)
Não é necessário instalar software de terceiros para gerenciar o backup. E essa atitude deve ser desencorajada, pois a plataforma é homologada com software de terceiros restritos.
:::
Se o cliente tiver um agente de backup, indicamos que esse agente seja instalado no servidor que contém a pasta remota que receberá a cópia de backup.
:::(Warning) (Atenção)
Se o sistema perder o acesso ao diretório de backup remoto, será enviada uma notificação por e-mail e SIEM.
:::

## Etapa 3
Nesta terceira e última etapa, você pode adicionar a instância a um cluster existente.

O cluster do Segura é restrito ao banco de dados. No entanto, você pode configurar para que os arquivos gerados pela instância também sejam replicados para outros membros.
:::(Warning) (Atenção)
O serviço de banco de dados será reiniciado se você optar por configurar o cluster.
:::

As etapas desta terceira etapa do **Wizard** podem ser resumidas da seguinte forma:

1. Se você deseja ativar o cluster, selecione sim em ativar alta disponibilidade e/ou ambiente de contingência;

1. Por padrão, o Segura apenas replicará a camada de banco de dados entre as instâncias. Se você também deseja replicar os arquivos de vídeo, selecione sim em habilitar replicação de arquivos de sessão;

1. Na seção membros do ambiente de alta disponibilidade ou contingência, indique o IP dos membros do cluster;
:::(Warning) (Atenção)
A ordem desses membros deve ser a mesma entre todos os membros.
:::

4. Se os membros do cluster estiverem em diferentes data centers, selecione sim nos campos membros estão em datacenters diferentes.
    1. Configure a latência entre clusters no campo opções **Latência entre nós**.
    * Além disso, defina o indicador de instância no campo **Segmento de rede** se você tiver mais de uma instância de Segura no mesmo data center;

1. Clique em **Concluir** para que o **Orbit** aplique as configurações do cluster;

1. Você será direcionado para a tela de status de replicação para verificar os resultados.

Quando você terminar a terceira etapa, aguarde a normalização da instância, e estará pronto para ativar a aplicação e usar todas as funcionalidades.
