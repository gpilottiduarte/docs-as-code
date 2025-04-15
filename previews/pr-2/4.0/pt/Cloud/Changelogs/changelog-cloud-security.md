# Changelog Cloud Security

Verifique abaixo as novas funcionalidades, melhorias e erros corrigidos.

## 1 de Abril de 2025

### Atualizações do Produto

| Item | Descrição |
| ----- | ----- |
| 1743 | Atualizada a plataforma **Cloud Security** para se adequar à nova marca do produto. |

### Novas Funcionalidades

| Item | Descrição |
| ----- | ----- |
| 1525 | Adicionado um novo recurso que permite aos administradores do **Cloud Security** atribuir proprietários a identidades. |

### Removido

| Item | Description |
| ----- | ----- |
| 1735 | Removida a seção **Assinatura** do menu **Configurações** para melhorar a experiência do usuário. |

## 20 de Dezembro de 2024

### Atualizações do Produto

| Item | Descrição |
| ----- | ----- |
| 1525 | Adicionado um novo recurso que permite aos administradores do **Cloud Entitlements** atribuir proprietários a identidades. |

## 28 de Novembro de 2024

### Atualizações do Produto

| Item | Descrição |
| ----- | ----- |
| 1516 | Removida a opção **Theme config**. |
| 1524 | Atualizado o design das mensagens de notificações da plataforma. |

## 22 de Dezembro de 2023

### Bug fixes

| Item | Descrição |
| ----- | ----- |
| 565 | Corrigido um erro no **Cloud Security** ao adicionar um novo administrador de organização. |
| 597 | Corrigido um problema no **Cloud Security** em que os usuários não podiam criar um nome de organização com apenas duas letras, ajustando os parâmetros para permitir um comprimento mínimo de nome de organização de duas letras. |
| 629 | Corrigido o problema em que a página de **Preferências de usuário** enviava um e-mail de convite em vez de um e-mail para alterar a senha ao atualizar as senhas. |
| 687 | Corrigido um erro no e-mail de convite que exibia o nome do novo usuário incorretamente. |

### Atualizações do Produto

| Item | Descrição |
| ----- | ----- |
| 532 | Foi atualizado o **Cloud Security** para permitir que usuários já cadastrados e não associados a um tenant sejam administradores de uma organização, garantindo a eles acesso às funcionalidades administrativas. |
| 408 | Atualizado o layout dos ícones no painel de administração para garantir uma experiência visual consistente, independentemente do tamanho da tela. |
| 591 | Ajustados os parâmetros de envio de e-mails para aumentar a taxa de recebimento, garantindo assim que os usuários recebam os e-mails de convite. Também foi adicionado um sistema de monitoramento para rastrear o envio de e-mails. |
| 497 | Atualizado o mecanismo de carregamento do relatório de auditoria para apresentar exclusivamente informações pertinentes para o usuário específico que acessa o relatório. Essa melhoria aprimora o desempenho no carregamento dos relatórios, reduzindo o risco de travamento da página. |
| 583 | Atualizada a seção de configurações pessoais do **Cloud Security**. Agora, as configurações pessoais estão localizadas na página de **Preferências de usuário**. |
| 742 | Atualizadas as telas de auto cadastro de usuários para aprimorar a experiência do usuário. |
| 1405 | Melhorado a **Central de Notificações** com mais recursos. Saiba mais em \[Centro de Notificações\](https://docs.senhasegura.io/v3-33/docs/pt/notification-center). |

### Novas Funcionalidades

| Item | Descrição |
| ----- | ----- |
| 496 | Adicionada ao **Cloud Security** uma funcionalidade de auditoria para auxiliar administradores da organização a rastrearem mudanças realizadas dentro da organização. As ações monitoradas são: *Novo tenant criado*, *Administrador da organização adicionado*, e *Administrador da organização removido*. |
| 660 | Adicionada uma nova funcionalidade que permite aos usuários se registrarem de forma autônoma para o **Cloud Security**. Após o registro, os usuários podem escolher entre três opções: *Iniciar em um ambiente simulado*, *Solicitar acesso a um ambiente específico*, ou *Criar uma nova organização*. |
| 1390 | Adicionado a integração entre a Central de Notificações e o Slack. |
| 1185 | Adicionado uma Central de Notificações para ajudar os usuários com atualizações de software, alertas específicos, e anúncios importantes. |

## 1 de Setembro de 2023

### Bug fixes

| Item | Descrição |
| ----- | ----- |
| 191 | Corrigido o erro de preenchimento automático com informações de login salvas ao alterar senha, nos campos **Nome de usuário** e **Senha atual**. |
| 203 | Corrigido o erro que impedia a adição e remoção das permissões dos usuários no **Cloud Security**. |
| 268 | Corrigido o erro que impedia a escolha do idioma dos e-mails de convite, enviados para novos usuários ao realizar uma importação em lote. |
| 313 | Corrigido o erro em que e-mails de convite, enviados a um novo usuário, estavam sendo entregues com configurações de idioma incorretas. |

### Atualizações do Produto

| Item | Descrição |
| ----- | ----- |
| 477 | Atualizado o **Cloud Security** para apresentar uma mensagem instruindo os usuários que realizam login na plataforma, mas que não estão ativos em nenhum tenant. |
| 465 | Adicionada uma barra de pesquisa à tela de relatório de usuários. Essa barra de pesquisa substituiu a aba **Users**. |
| 298 | Atualizada a URL do Roadmap Público, disponível para usuários no **Cloud Security**. O link agora abrirá em outra aba do navegador. |
| 350 | Atualizado o processo de autenticação no **Cloud Security** para melhorar a experiência do usuário. Agora os hiperlinks estão mais visíveis, a política de senhas foi alterada e recursos de visualização de senha e alerta de Caps Lock foram adicionados. |
| 504 | Atualizado o **Cloud Security** para exibir as funcionalidades do **Meu perfil** em uma nova página e não mais no menu lateral. |
| 530 | Atualizados os termos de serviço do **Cloud Security** para melhor adequação às características e casos de uso da plataforma. Os Termos de Serviço estão disponíveis apenas em inglês. |

### Novas Funcionalidades

| Item | Descrição |
| ----- | ----- |
| 444 | Adicionada uma nova funcionalidade que automaticamente notifica usuários já cadastrados na plataforma, quando eles são adicionados a um novo tenant. |
| 241 | Adicionado ao **Cloud Security** um relatório de auditoria para monitorar e rastrear ações feitas pelos usuários nos tenants. |
| 182 | Adicionada uma nova funcionalidade ao **Cloud Security** que fornece detalhes de auditoria sobre qualquer ação realizada em um tenant. Os detalhes são exibidos em um arquivo `.json` que contém os estados antes e depois da ação. |
| 59 | Adicionada funcionalidade que permite aos administradores desativar usuários no **Cloud Security**. |
| 188 | Adicionada uma funcionalidade que detecta quando a tecla Caps Lock está ativada e uma opção para exibir a senha ao digitar. A senha não é exibida quando no modo de preenchimento automático. |
| 180 | Adicionada uma nova funcionalidade ao **Cloud Security** que sinaliza usuários com cadastro incompleto na plataforma. |
| 361 | Adicionada a autenticação Single Sign-On utilizando contas do Google. Essa funcionalidade está disponível somente para usuários já cadastrados no **Cloud Security**. |
| 343 | Adicionada a autenticação Single Sign-On utilizando contas Microsoft e GitHub. Essa funcionalidade está disponível somente para usuários já cadastrados no **Cloud Security**. |
| 376 | Adicionada uma nova funcionalidade para exibir os termos de uso e exigir sua aceitação no momento do primeiro acesso ao **Cloud Security**. |
| 500 | Adicionada a opção de filtrar relatórios de auditoria na plataforma por data e hora. |
| 411 | Adicionado o papel de administrador da organização. Essa nova função permite que os usuários com essa permissão gerenciem todos os tenants dentro de uma organização. |
