# Política de proteção de dados

## Segurança e privacidade dos dados

## Detecção e monitoramento de ameaças

A Segura utiliza um serviço robusto de detecção de ameaças para proteger o ambiente em nuvem que hospeda seus modelos SaaS. Isso continua a monitorar continuamente por ameaças potenciais ou atividades não autorizadas, garantindo uma infraestrutura segura.

## Controle de acesso

O acesso aos dados do Segura é restrito apenas ao cliente. Mesmo a equipe de suporte da Segura precisa do envolvimento do cliente para realizar quaisquer ações que envolvam seus dados, aderindo estritamente aos processos de aprovação do cliente.

## Obrigações de confidencialidade

Todos os membros da equipe da Segura estão sujeitos a rigorosos acordos de confidencialidade. Estes são reforçados durante a integração e treinamentos regulares de atualização focados em segurança da informação e conformidade com o GDPR. O acesso da equipe de suporte ao console de um cliente requer aprovação explícita e específica por parte do cliente, com todo o acesso registrado para fins de auditoria.

## Políticas operacionais e notificação de violação

A Segura implementou políticas e procedimentos operacionais para prevenir erros, obtendo certificação ISO-27001. No improvável caso de uma violação, os clientes serão prontamente notificados de acordo com as obrigações legais.

## Backup

O Segura realiza snapshots diários do sistema às 3h (GMT-3), mantendo snapshots dos últimos cinco dias para garantir a continuidade e restauração rápida em caso de quaisquer interrupções.

## Coleta de dados

Para fornecer o serviço SaaS, a Segura coleta as seguintes informações não públicas (NPI) e informações pessoalmente identificáveis (PII):

## Para dispositivos:

* Nome do computador.  
* Endereço MAC do computador.  
* Nomes de usuários e grupos.  
* Usuário atualmente conectado.  
* Endereços IP do endpoint.  
* Endereço IP usado para conectar ao SaaS.  
* Programas instalados.  
* Detalhes sobre aplicativos lançados (regidos por políticas).  
* Vídeos de captura de tela das sessões.

### Para usuários:

* Nome completo.  
* Nome de usuário no SaaS.  
* Senha.  
* Endereço de e-mail.

A interface web da Segura inclui opções para que administradores anonimizem dados de usuários, assegurando conformidade com o requisito de 'direito ao esquecimento'.

## Retenção de dados e período de carência

Os prazos de retenção de dados são determinados pela capacidade de armazenamento do pacote de serviço selecionado. Após a expiração da licença, os clientes têm um período de carência de duas semanas para extrair seus dados antes que o tenant do proprietário seja desativado. Os snapshots são mantidos por três meses após a expiração da licença.

## Extração de dados

Quando as senhas mudam, backups de credenciais são criados automaticamente e armazenados na rede do cliente. A responsabilidade pela segurança e gestão dos dados é transferida para o cliente após a extração.

:::(Error) (Importante)
Após a extração dos dados, o cliente torna-se totalmente responsável por sua segurança e gestão ao longo de seu ciclo de vida.
:::

## Procedimentos de exclusão de dados

* A exclusão de dados é iniciada nos seguintes cenários:  
* Automaticamente, três meses após a rescisão ou não renovação do contrato.  
* Mediante uma solicitação por escrito específica de exclusão de dados por parte do cliente.

Uma vez que a exclusão de dados é acionada:

* O tenant da máquina virtual do cliente é encerrado.  
* Todos os dados relacionados ao cliente são permanentemente excluídos da nuvem dentro de algumas horas, com o processo registrado para possíveis auditorias.  
* Os clientes recebem notificações sobre a desativação do tenant e a conclusão da exclusão de dados.

:::(Warning) (Atenção)
Este processo de exclusão é registrado para futuras auditorias, se solicitado pelo cliente.
:::

## Cronograma de exclusão de dados

O Segura adere à política de exclusão do Google Cloud, equilibrando alto desempenho e exclusão de dados em tempo hábil. Tipicamente, os dados são marcados para exclusão dentro de 24 horas após a solicitação. Os dados de backup expiram dentro de seis meses após a marcação, em conformidade com os ciclos do Google. Para informações detalhadas, consulte a documentação do Google Cloud.