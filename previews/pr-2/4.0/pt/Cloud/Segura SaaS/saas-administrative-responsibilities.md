# Responsabilidades Administrativas

Este documento descreve a divisão de responsabilidades entre os clientes e a Segura no que diz respeito à gestão e operação do ambiente SaaS.

## Responsabilidades do Cliente

### Gerenciamento de Acesso

* **Controle de identidade do usuário**: os clientes são responsáveis por controlar o acesso gerenciando as identidades dos usuários, incluindo a configuração de políticas, grupos e permissões.  
* **Desativação de usuários**: a desativação imediata de usuários que não precisam mais de acesso à aplicação é crucial para manter a segurança e a conformidade.

### Rede e Segurança

* **Configuração de rede**: os clientes devem configurar as redes para garantir um acesso contínuo dos usuários à aplicação.  
* **Políticas de segurança**: os clientes são responsáveis por manter políticas de segurança robustas em seu ambiente e por designar pontos focais para a comunicação com a equipe de suporte da Segura.

## Responsabilidades da Segura

### Operação

* **Snapshots e atualizações**: o Segura é responsável por realizar snapshots do sistema, conduzir atualizações e restaurar serviços em caso de indisponibilidade.

### Monitoramento

* **Saúde do ambiente:** garantir a saúde geral do ambiente é uma responsabilidade central da Segura.  
* **Monitoramento do cliente**: os clientes são responsáveis por monitorar o comportamento dos usuários, eventos auditáveis e cumprimento das políticas de segurança. Os clientes também podem configurar o SIEM/Syslog para receber eventos de segurança.

### Backup

* **Backup de dados:** o Segura é responsável por efetuar o backup dos ambientes dos clientes através de snapshots do sistema para garantir a integridade e disponibilidade dos dados.

### Alta Disponibilidade

* **Provisão e restauração**: a Segura lida com a provisão do ambiente, facilita restaurações e supervisiona as atualizações do produto. A garantia de alta disponibilidade abrange exclusivamente o lado da conexão da Segura.

Ao delinear claramente as responsabilidades, tanto a Segura quanto seus clientes podem garantir um ambiente SaaS seguro, eficiente e bem gerido, facilitando a proteção e gestão eficaz de identidades.