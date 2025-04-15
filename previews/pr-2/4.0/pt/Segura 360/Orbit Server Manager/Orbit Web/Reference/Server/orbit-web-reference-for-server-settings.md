# Configurações do servidor



Este documento fornece informações sobre o formulário **Configurações do servidor** que exibe informações sobre o servidor da aplicação e permite configurar informações sobre o servidor.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Orbit Server Manager**.  
2. No menu lateral, selecione **Servidor \> Configurações**.

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Alterar** | Botão | Direciona para a tela **Configuração do servidor** em modo de edição. |

## Configurações da aplicação

### Informações Gerais

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Hostname** | Campo de texto | Nome do host do servidor configurado. |
| **Fuso horário** | Campo de texto | Fuso horário definido para o servidor. |
| **Idioma** | Campo de texto | Idioma padrão configurado no servidor. |

### Configuração de DNS

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Servidor primário** | Campo de texto | Endereço IP do servidor DNS primário configurado. |
| **Servidor secundário** | Campo de texto | Endereço IP do servidor DNS secundário configurado. |
| **Servidor terciário** | Campo de texto | Endereço IP do servidor DNS terciário, se configurado. |
| **Informações de domínio** | Campo de texto | Nome do domínio associado ao servidor. |
| **Informações de busca** | Campo de texto | Parâmetros de busca DNS configurados. |

### Configuração de NTP

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Servidor primário** | Campo de texto | Endereço do servidor NTP primário, se configurado. |
| **Servidor secundário** | Campo de texto | Endereço do servidor NTP secundário, se configurado. |

### Configuração de SNMP

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Servidor** | Campo de texto | Endereço do servidor SNMP, se configurado. |
| **IPs permitidos** | Campo de texto | Lista de IPs autorizados para SNMP, se configurado. |
| **Comunidade** | Campo de texto | Comunidade SNMP configurada para o servidor. |

## Configurações do servidor

Ao clicar em **Alterar**, você será direcionado para a janela de Configurações do servidor em modo de edição. Nessa janela você poderá alterar as configurações do servidor.

### Aba Configurações

#### Informações gerais

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Hostname** | Campo de texto | Não | Define o nome identificador do host do servidor configurado. |
| **Fuso horário** | Menu suspenso | Sim | Define o fuso horário definido para o servidor. |
| **Idioma** | Menu suspenso | Sim | Define o idioma padrão configurado no servidor. |

#### Configuração de NTP

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Servidor primário** | Campo de texto | Não | Define o endereço do servidor NTP primário. |
| **Servidor secundário** | Campo de texto | Não | Define o endereço do servidor NTP secundário. |

#### Configuração de SNMP

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Servidor** | Campo de texto | Não | Define o endereço do servidor SNMP. |
| **IPs permitidos** | Campo de texto | Não | Define uma lista de IPs autorizados para SNMP. |
| **Comunidade** | Campo de texto | Não | Define a comunidade SNMP configurada para o servidor. |

### Aba Configuração de DNS

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Servidor primário** | Campo de texto | Não | Define o endereço IP do servidor DNS primário configurado. |
| **Servidor secundário** | Campo de texto | Não | Define o endereço IP do servidor DNS secundário configurado. |
| **Servidor terciário** | Campo de texto | Não | Define o endereço IP do servidor DNS terciário, se configurado. |
| **Informações de domínio** | Campo de texto | Não | Define o nome do domínio associado ao servidor. |
| **Informações de busca** | Campo de texto | Não | Define os parâmetros de busca DNS configurados. |
| **Adicionar** | Botão | Não se aplica | Adiciona uma entrada vazia ao final da listagem. |
| **Search name** | Campo de texto | Não | Define o nome de pesquisa associado à configuração de DNS. |

