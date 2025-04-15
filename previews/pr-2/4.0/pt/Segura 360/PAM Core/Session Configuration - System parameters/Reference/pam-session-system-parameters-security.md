# Parâmetros do sistema - Segurança

Este documento fornece informações sobre a tela do formulário **Parâmetros do sistema**, na aba **Segurança** que se refere às parametrizações de segurança das sessões proxy.

:::(warning) (**Cuidado**)  
Alguns parâmetros em versões anteriores do Segura não estão mais presentes nesta documentação. Sugerimos que você evite mudar os parâmetros que não estão listados neste documento.  
:::

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Parâmetros do sistema > Global > Segurança**

:::(warning) (**Atenção**)  
Todos os campos vêm preenchidos com um valor padrão, recomendado pelo Segura. Contudo, você pode fazer modificações conforme sua necessidade.  
::: 

---
## Aba Segurança

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Forçar Autenticação de multifator para visualizar senha?*** | Botão de opção | Sim | Força a autenticação de dois fatores para visualizar senhas. Opção padrão: **Não**. |
| **Tempo entre solicitação de token para custódia (minutos)** | Seletor de quantidade | Não | Define o intervalo de tempo em que os tokens devem ser solicitados para a visualização de senhas. Podendo escolher entre **0** a 60 minutos. Opção padrão: **5 minutos**. |
| **Ignorar a opção 'Confiar neste computador' para visualizar senha?*** | Botão de opção | Sim | Indica se o checkbox presente ao realizar o login no ambiente do Segura pode ser ignorado ao visualizar senhas. Opção padrão: **Não**. |
| **Forçar autenticação de multifator para iniciar sessão?*** | Botão de opção | Sim | Força o uso de um token 2FA para iniciar sessões proxy. Opção padrão: **Não**. |
| **Tempo entre solicitação de token para sessões (minutos)** | Seletor de quantidade | Não | Define o intervalo de tempo em que os tokens devem ser solicitados para realizar a sessão. Podendo escolher entre **0** a 60 **minutos**. Opção padrão: **5 minutos**. |
| **Ignorar a opção 'Confiar neste computador' para iniciar sessão?*** | Botão de opção | Sim | Indica se o checkbox presente ao realizar o login no ambiente do Segura pode ser ignorado ao iniciar uma sessão. Opção padrão: **Não**. |
| **Forçar conexão segura (SSL) nas execuções de troca de senha?*** | Botão de opção | Sim | Força a utilização de uma conexão segura *(Secure Sockets Layer*) durante as trocas de senha. Opção padrão: **Sim**. |
| **Habilitar troca de senha após abertura da sessão?*** | Botão de opção | Sim | Habilita a alteração de senha, pelo Segura, logo após o início da sessão proxy. Opção padrão: **Não**. |
| **Forçar autenticação com certificado para o Proxy RDP?*** | Botão de opção | Sim | Força a autenticação usando um certificado digital ao se conectar através do Proxy RDP. Opção padrão: **Não**. |
| **Forçar autenticação com certificado para o Proxy SSH/Telnet?*** | Botão de opção | Sim | Força a autenticação da sessão usando um certificado digital ao se conectar através do Proxy SSH/Telnet. Opção padrão: **Não**. |
| **Modo de segurança RDP*** | Menu suspenso | Sim | Nível de segurança das conexões RDP de destino. Podendo escolher entre: **Automático**, **RDP**, **NLA** ou **TLS**. Por padrão é deixado como **Automático** Nessa opção o cliente e o servidor determinarão o nível de segurança.  Por ser uma ponte, o cliente, nesse caso, é a plataforma Segura. Para configurar o nível de segurança das conexões que chegam ao Segura, consulte as documentações sobre RDP Proxy. |
| **Tempo de inatividade da sessão*** | Seletor de quantidade e menu suspenso | Sim | Define o período de inatividade de uma sessão para que a mesma seja desconectada automaticamente. Você pode escolher um valor de **0** e **60**; sendo estes expressos em **Minutos**, **Horas** e **Dias**. Opção padrão: **1 dia**. |
| **Habilitar filtro de IPs com permissão para iniciar uma sessão** | Caixa de seleção | Não | Habilita a ativação de um filtro baseado em um endereço IP que controla os endereços IPs com permissão para iniciar sessões de proxy. Opção padrão: **Desabilitado**. |
| **IPs com permissão para iniciar sessão** | Campo de texto | Não | Caso a opção **Habilitar filtro de IPs com permissão para iniciar uma sessão** seja habilitada, este campo será usado para determinar uma lista de IPs, individuais ou em intervalos, que terão permissão para iniciar uma sessão proxy. Opção padrão: **Vazio**. |

### Seção Criptografia  
:::(info) (**Info**)  
Caso o valor do campo **Modo de criptografia** for **HSM**, você deverá selecionar um dispositivo de HSM.  
:::

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Modo de criptografia*** | Botão de opção | Sim | Indica se o modo de criptografia será **Padrão** ou **HSM.** Opção padrão: **Padrão**. |
| **Selecione um HSM** | Menu suspenso | Não | Opção com os dispositivos de hardware usados para gerenciar as chaves de criptografia. |