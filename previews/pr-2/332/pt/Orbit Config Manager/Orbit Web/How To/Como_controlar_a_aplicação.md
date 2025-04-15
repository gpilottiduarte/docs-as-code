# Como controlar a aplicação

## Controle de status da instância

Uma instância pode estar *Ativada* ou *Desativada*. O status *Ativada* indica que esta instância pode ser acessada por usuários em todas as funcionalidades. Quando *Desativada*, apenas os usuários administradores podem fazer login e serão limitados a usar apenas a interface web do **Orbit**.

:::(warning) (Atenção)
O fato de a aplicação estar ativa não significa que os serviços assíncronos (chamados de robôs) estejam ativos nesta instância. No entanto, sempre que a aplicação estiver *desativada*, os serviços assíncronos também serão desativados.
:::

Para alterar seu valor, vá para o menu **Orbit Config Manager** > **Configurações** > **Aplicativo** e altere o controle **Habilitar aplicativo**.

Além do status da instância, outros controles importantes relacionados ao funcionamento da instância podem ser vistos nesta tela:
- **Habilitar Robôs**: Este interruptor determina se a instância executará as tarefas assíncronas ou não. Se estiver em um cluster e for a instância Primária, todas as tarefas assíncronas podem ser ativadas ou desativadas com este interruptor. Se não for a instância Primária, será limitada a executar apenas alguns serviços assíncronos.
- **Reiniciar processo a cada minuto**: Indica se os serviços assíncronos devem ser reiniciados a cada minuto durante o período ocioso. Este interruptor é usado apenas em casos de solução de problemas. Não é recomendado manipular este controle sem a supervisão da equipe de Suporte.
- **Desativar log do processo no banco de dados**: Indica se os logs de execução do serviço assíncrono serão salvos no banco de dados ou no sistema de arquivos. Por padrão, os logs são salvos no sistema de arquivos para melhor desempenho do banco de dados. Não é recomendado manipular este controle sem a supervisão da equipe de Suporte.
- **Habilitar cache**: Indica se o senhasegura deve usar o cache para os dados básicos do aplicativo. Por padrão, o cache não é usado para evitar problemas no processo pós-atualização. Não é recomendado manipular este controle sem a supervisão da equipe de Suporte.
- **Limpar todo o cache**: Este botão limpará os caches gerados pelo senhasegura. Use após as atualizações se o cache estiver habilitado no controle Habilitar cache.

## Dados gerais da aplicação

Dados como URL da aplicação, título visível para o usuário e notificação por e-mail em caso de incidentes, ainda podem ser configurados na tela acessível pelo menu **Orbit Config Manager** > **Configurações** > **Aplicativo**.

- **Título da aplicação**: Este título será apresentado como títulos de página e pode ser personalizado pelo cliente.
- **URL da aplicação**: É a URL que será usada na configuração de outros serviços do senhasegura para comunicação. Por exemplo, esta URL será fornecida às instalações senhasegura.go para que possam localizar o servidor senhasegura.
- **E-mail de notificação**: É a lista de e-mails que receberão as notificações de incidentes emitidas pelo **Orbit**.

### Dados de conexão com o banco de dados

Através do menu **Orbit Config Manager** > **Configurações** > **Banco de Dados**, você pode alterar os dados de conexão do aplicativo para o banco de dados local.

:::(warning) (Atenção)
Esta ação é desencorajada. Esta tela é usada apenas pela equipe de suporte do senhasegura em casos de chamadas extremamente críticas. O uso indevido desta tela pode causar a falha de todo o serviço.
:::

### VIP (Virtual IP)

Para permitir o acesso a um Balanceador de Carga VIP (IP Virtual), siga estas etapas:

1. Vá para o Menu Principal **Orbit Config Manager** > **Configurações** > **Aplicação**.
2. Preencha o campo **Endereço IP Virtual**.
3. Clique em **Salvar**.

### Lista de licenças ativas

Embora a ativação da licença seja a primeira tarefa realizada após a implantação das senhas de segurança, é necessário acessar esta tela novamente para renovar a licença.

Para obter detalhes da licença aplicada à instância, vá para o menu **Orbit Config Manager** > **Aplicação** > **Licenças**. Nesta tela, você pode ver todas as licenças aplicadas, sua data de expiração e quais módulos estão ativos.

Quando a licença está prestes a expirar, um incidente será criado automaticamente pelo **Orbit** e os usuários configurados para receber a notificação serão alertados.

### Ativação de Licença

Para instalar uma nova licença, vá para **Orbit Config Manager** > **Menu de Ativação da aplicação**.

### Listagem de Versões Instaladas

O senhasegura é versionado como um pacote completo de soluções. No entanto, em sua composição modularizada, vários outros componentes podem apresentar versões diferentes. Esta versionamento é uma informação importante na solução de problemas.

Através do menu **Orbit Config Manager** > **Aplicação** > **Versões da Aplicação** você tem acesso ao senhasegura, **Orbit** e seus grupos de módulos e módulos individuais. Ainda nesta tela, há um botão no canto superior direito chamado **Download do Arquivo de Versão**.
:::(Info) (Info)
Este download pode ser solicitado pela equipe de suporte. O arquivo baixado deve ser encaminhado para o ticket de suporte criado.
:::
:::(warning) (Atenção)
Para listar as versões dos pacotes instalados no sistema operacional, é necessário fazer login via SSH da instância.
:::

## Atualizações do Sistema

As atualizações do sistema podem ser visualizadas através do menu **Orbit Config Manager** > **Aplicação** > **Atualizações do Sistema**. Nesta tela, você pode ver a versão que está atualmente instalada e a versão mais moderna candidata para instalação. Use o botão **Verificar Atualizações** para pesquisar em nosso espelho oficial quais são as versões candidatas.

O próprio **Orbit** verificará as atualizações de tempos em tempos, mas não as aplicará. Por motivos de segurança, a atualização do senhasegura só pode ser realizada através da [**Linha de Comando do Orbit**](/v3-32/docs/orbit-cli) em uma conexão SSH.

## Configurações de Proxy

Os sistemas de proxy têm uma seção de menu dedicada para centralizar seus controles e logs.

- **senhasegura Web Proxy**: É responsável pelo acesso proxy usando o navegador **HTML5** do usuário.
- **senhasegura Terminal Proxy**: É responsável pelo acesso proxy a dispositivos com conexão **SSH** e Telnet através de uma conexão **SSH** segura do cliente ao senhasegura.
- **senhasegura RDP Proxy**: É responsável pelo acesso proxy a dispositivos **RDP** através de uma conexão **RDP** segura do cliente ao senhasegura.

Através do menu **Orbit Config Manager** > **Acesso Proxy** > **Configurações** você tem acesso à seguinte opção de configuração:
- **RDP Proxy: Nível de Criptografia**: Indica qual nível de criptografia será aceito pelos clientes que tentarem se conectar ao **RDP Proxy** do senhasegura.

## Versões e Serviços do Proxy

Através do menu **Orbit Config Manager** > **Acesso Proxy** > **Serviços de Proxy** você pode verificar a versão dos sistemas de proxy instalados e seu software subjacente. Como o **Web Proxy** e o **RDP Proxy** do senhasegura dependem de serviços em execução continuamente, você pode controlar o status de seus serviços nesta tela.

:::(Info) (Info)
O **Terminal Proxy** do senhasegura não depende de um serviço dedicado na instância. Sua execução está vinculada ao servidor **SSH** das próprias senhas.
:::

## Logs dos Proxies

Como mencionado, todas as tecnologias de proxy fazem uso da sabedoria. Seus logs podem ser acessados através do menu **Orbit Config Manager** > **Acesso Proxy** > **API - Solicitações de Proxy**.

Neste mesmo menu, você poderá acessar os logs de acesso dos sistemas **PEDM** para **Windows** e **Linux**.