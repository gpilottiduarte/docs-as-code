# Sobre o Painel e seus elementos

O sistema **Orbit Web** apresenta uma interface diferente das demais telas operacionais do sistema. Seus formulários e relatórios, apesar de conter leves mudanças de design, seguem os mesmos princípios de funcionamento.

## Tipo da instância
O tipo de instância determina o uso ao qual ela está destinada. Essa distinção gera variações no comportamento no uso da licença de uso.

### Produção
Este tipo de instância deixar de funcionar 7 dias após o vencimento da licença de uso. Enquanto ativa, todas funcionalidades estarão ativas conforme o tipo de licença aplicada, e os e-mails e notificações serão disparados aos destinatários.

### Contingência
Semelhante à produção, este tipo de instância só será ativada para uso dos usuários por decisão do administrador ou por mecanismos inteligentes de balanceamento. Em versões anteriores ao Segura 3.0.0, a contingência não poderia operar em conjunto da instância de produção. Essa limitação já não mais existe. Os usuários, porém serão alertados por um banner na tela de login indicando que estão acessando uma instância de contingência.

### Homologação
Este tipo de instância deixará de funcionar imediatamente após o vencimento da licença de uso. Mas o destinatário dos e-mails serão sempre substituídos pelo e-mail do usuário solicitante para evitar confusões entre ambiente produtivo e ambiente de homologação que coloquem em risco a operação da corporação.

### POC
Neste tipo de instância, o vencimento da licença imediatamente impede o uso da interface web, sistemas proxy e serviços assíncronos. É uma instância utilizada por clientes em potencial, sendo assim, suas funcionalidades são semelhantes a um ambiente de produção.

## Status da aplicação
A instância do Segura pode distinguir entre *Ativa* e *Inativa*. O status *Ativa* indica que essa instância pode ser acessada pelos usuários em todas as funcionalidades. Quando *Inativa*, apenas usuários administradores podem realizar o login, e estarão limitados a usar apenas a interface **Orbit Web**.
:::(Warning) (Cuidado)
O fato da aplicação estar ativa não significa que os serviços assíncronos (conhecidos como robôs) estejam ativos nesta instância. Porém, toda vez que a aplicação estiver inativa, os serviços assíncronos também estão inativos.
:::
### Status da replicação
Quando em cluster, a instância do Segura pode estar *Ativa* ou *Inativa* quanto sua presença no cluster. Além disso, a instância pode estar configurada como *Cluster Secundária* ou *Cluster Primária*.

### Cluster Primária
Quando a instância atua como instância *Primária*, significa que é nesta instância onde os serviços assíncronos principais serão executados, como backup e procedimento de chave mestra.

### Cluster Secundária
Indica que esta instância não executará os principais serviços assíncronos. Ela pode ser utilizada pelos usuários desde que o **Status da aplicação** esteja *Ativa*.

## Painel principal
Os menus do **Orbit** seguem o mesmo padrão do restante do sistema. Mas algumas ações podem ser acessadas rapidamente através do painel principal.
Neste painel você tem acesso a uma barra de botões que podem apresentar indicadores de pendências em seu canto superior direito. Preste atenção nestes indicadores, pois as pendências de configuração podem influenciar no funcionamento da plataforma.

Algumas Informações da instância e Informações do servidor estão dispostas em quadros para auxiliar o processo de identificação da instância.

* **Exclamação amarela:** Indica itens que são recomendados para configuração, especialmente se a infraestrutura utilizar essa funcionalidade, ou quando uma das configurações estiver desativada.

* **Visto verde:** Indica que todas as configurações estão ativadas.

* **Círculo com números:** Representa a quantidade de itens dentro do botão, geralmente associado a incidentes.
:::(Warning) (Atenção)
Um banner superior de cor vermelha pode ser apresentado toda vez que um incidente ocorrer. Fique atento aos incidentes apresentados neste banner para evitar que indisponibilidades de serviços e dados ocorram. 
:::
:::(Info) (Info)
Caso queira acessar todos os alertas e incidentes, clique no botão de Incidentes.
:::
### Normalizar
O botão **Normalizar** não irá redirecionar para uma tela específica que possa ser acessada pelo menu. Este botão deve ser utilizado caso após uma atualização o sistema apresente a ausência de registros importantes como **WebService A2A**. Nestes casos, ao ativar a normalização, o Segura irá recriar os registros fixos de sistema.
:::(Warning) (Atenção)
Não é recomendado a manipulação deste controle sem a supervisão da equipe de Suporte.
:::

### Wizard
Este botão não direciona para uma página específica, mas sim "agrupa" as principais configurações do sistema em forma de etapas.
:::(Info) (Info)
Ao iniciar uma nova instância do Segura, o **Wizard** é apresentado ao usuário para realizar as principais configurações da instância.
:::


