# Configurações da aplicação

Este documento fornece informações sobre o formulário **Configurações da aplicação**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Orbit Server Manager**.  
2. No menu lateral, selecione **Configurações \> Aplicação**.

## Menu de Ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Alterar** | Botão | Direciona para a tela **Configuração da aplicação**. |

## Configurações da aplicação

### Seção Informações da aplicação

| Item | Descrição |
| ----- | ----- |
| **Application title** | Nome atribuído à aplicação. |
| **Application Status** | Status atual da aplicação. |
| **Company Name** | Nome da empresa associada à aplicação. |
| **Virtual IP Address** | Status da configuração do endereço IP virtual. |
| **Application URL** | URL para acesso à aplicação. |
| **Notification e-mail** | Endereço de e-mail configurado para notificações. |

### Seção Configuração do Zabbix

| Item | Descrição |
| ----- | ----- |
| **Listen IP** | Endereço IP configurado para ouvir conexões Zabbix. |
| **Listen Port** | Número da porta configurada para o Zabbix. |

### Configuração de Syslog

| Item | Descrição |
| ----- | ----- |
| **Formato das mensagens** | Status da configuração do formato das mensagens. |
| **Protocol** | Protocolo de comunicação configurado (UDP). |

## Configurações da aplicação

### Aplicação

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Ativar aplicação** | Botão toggle | Não | Define se a aplicação estará ativada ou desativada. |
| **Nome da empresa** | Campo de texto | Não | Nome da empresa associada à aplicação. |
| **Título da aplicação** | Campo de texto | Não | Nome ou título da aplicação configurada no sistema. |
| **URL da aplicação** | Campo de texto | Não | URL de acesso à aplicação. |
| **IP virtual (VIP)** | Campo de texto | Não | Endereço de IP virtual configurado para a aplicação. |
| **Email para notificação** | Campo de texto | Não | E-mail configurado para envio de notificações do sistema. |

### Zabbix

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Usar TLS** | Botão toggle | Não | Define se o TLS será ativado na conexão com o servidor Zabbix. |

#### Endereço da interface do Segura

| Listen IP | Campo de texto | Não | Endereço de IP usado pelo servidor Zabbix para escutar conexões. |
| :---- | :---- | :---- | :---- |
| **Listen Port** | Campo de texto | Não | Porta para comunicação com o servidor Zabbix. |

#### Servidor Zabbix

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Adicionar** | Botão | Não se aplica | Adiciona uma nova entrada vazia ao final da listagem. |
| **IP** | Campo de texto | Não | Endereço de IP do servidor Zabbix configurado. |
| **Porta** | Campo de texto | Não | Porta para conexão com o servidor Zabbix. |

### Syslog

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Formato das mensagens** | Menu suspenso | Não | Define o formato das mensagens enviadas pelo Syslog. |
| **Plugin de notificação** | Campo de texto | Não | Plugin utilizado para enviar notificações. |
| **Protocolo de envio de mensagens** | Botão de opção | Não | Protocolo utilizado para envio das mensagens. |
| **Usar Network Connector?** | Botão toggle | Não | Define se será utilizado o Network Connector para envio das mensagens. |
| **Network Connector** | Menu suspenso | Não | Selecione o Network Connector caso esteja habilitado. |

#### Servidores para Envio das Mensagens

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Adicionar** | Botão | Não se aplica | Adiciona uma nova entrada vazia ao final da listagem. |
| **IP** | Campo de texto | Não | Endereço de IP do servidor para envio das mensagens. |
| **Porta** | Campo de texto | Não | Porta para conexão com o servidor. |

