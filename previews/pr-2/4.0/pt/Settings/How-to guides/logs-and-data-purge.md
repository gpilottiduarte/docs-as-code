# Logs e expurgo de dados

o *log rotate* e o expurgo de dados do Segura possuem, por padrão, tabelas de banco de dados específicas que são rotacionadas por período. Muitas dessas tabelas são usadas pela equipe de suporte do Segura para diagnóstico e resolução de problemas, sem impacto na operação do cliente. A única tabela que interage diretamente com a operação do cliente refere-se aos e-mails enviados e registros recebidos, os quais podem ser indexados pelo provedor SMTP e POP3 do cliente.

## Tempo de expurgo de logs

* Por padrão, os logs do sistema são mantidos no Segura indefinidamente. A retenção para backup seguirá as políticas aplicadas ao local de backup utilizado, podendo variar, por exemplo, para mais de 2 anos em casos de backup externo.

## Solicitações de tarefas assíncronas

Todas as tabelas operacionais e de registro utilizadas pelas **Orbini Asynchronous Tasks** são rotacionadas. O módulo que solicitou a operação manterá seus registros, porém, os dados expurgados não contêm informações sensíveis ou detalhes operacionais do cliente.

| Entidade | Período de rotação | Descrição |
| :---- | :---- | :---- |
| **Orbini Assync PIDs** | 7 dias | Contém o *timestamp* de execução e o *PID* interno utilizado. |
| **Orbini Assync Logger** | 15 dias | Contém as informações de processos e mensagens de erro. |
| **Orbini Assync Tasks** | 30 dias | Contém as requisições de execução fornecidas pelos módulos dos clientes. |
| **Orbini User Notification** | 30 dias | Contém as mensagens do sistema enviadas aos usuários. |
| **Device Connectivity Tests** | 30 dias | Registra testes de conexão de dispositivos conforme o protocolo registrado. |
| **LDAP Sync Logs** | 30 dias | Utilizado pelo **Orbini LDAP Synchronizer** para diagnóstico e solução de problemas. |
| **Orbini WebService A2A Requests** | 30 dias | Contém todas as solicitações dos clientes para o **WebService A2A**. |
| **Orbini Events** | 30 dias | Registra *timestamps* de interação de dados do usuário. |
| **Orbini Changed Data** | 30 dias | Registra *timestamps* de interação de dados do usuário. |
| **Orbini SMTP Emails** | 180 dias | Contém todos os e-mails enviados pelo Segura, incluindo informações sensíveis ou específicas do módulo. Estes e-mails também podem ser recuperados através do servidor SMTP do cliente. |
| **Orbini POP3 Emails** | 180 dias | Contém todos os e-mails recebidos pela conta configurada do Segura. Estes e-mails podem ter informações sensíveis ou específicas do módulo. Estes e-mails também podem ser recuperados através do servidor SMTP do cliente. |
| **Orbini User Actions** | 300 dias | Contém registros de interação do usuário, incluindo login/logout. |

## Sessão de expurgo de dados

Todas as sessões de proxy são registradas no formato bruto e armazenadas no banco de dados do Segura. Esses dados podem ser copiados para o repositório de backup do cliente durante o procedimento de backup.

* O armazenamento desses dados consome espaço proporcional ao tráfego de rede durante a sessão de proxy. Não há um valor fixo para o tamanho dos arquivos de replay.  
* o Segura é configurado por padrão para armazenar as sessões por 90 dias. Sessões com mais de 90 dias são automaticamente expurgadas.

## Relatório de arquivos de sessão

É possível acessar um relatório dos arquivos armazenados através do caminho **Menu de produtos > Configurações > Serviços > Arquivos do armazém.**

| Campo | Descrição |
| :---- | :---- |
| **Código** | Identificador do arquivo. |
| **Nome** | Nome gerado para o arquivo. |
| **Tipo** | Extensão do arquivo. |
| **Conta** | Não editável pelo usuário padrão; relatório não permite criação de novas contas. |
| **Upload** | Data e hora em que ocorreu o upload. |
| **Expurgado** | Indica se o arquivo foi expurgado. |
| **Estado** | Se o arquivo está ativo no sistema. |
| **Path** | Caminho onde o arquivo está localizado no sistema. |

## Evitar o expurgo da sessão

No relatório **Sessões remotas**, o administrador pode evitar o expurgo de uma sessão específica, acesse o caminho **Menu de produtos** > **PAM Core > Credenciais > Controle de acesso > Sessões remotas** e clique na ação **Impedir expurgo** sobre o registro da sessão desejada.

## Definir intervalo de expurgo

Para definir o intervalo de expurgo de mudanças acesse **Menu de produtos** > **Configurações > Parâmetros de sistema > Global.** Na seção **Sessão remota** altere o campo **Quantidade de dias para expurgo** (o valor deve estar entre 1 e 1000 dias).