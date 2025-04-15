# Parâmetros do sistema - Segurança

Neste documento, você encontrará todas as informações sobre a tela **Parâmetros do sistema** aba de **Segurança**. 

***
## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. Selecione **Parâmetros do sistema** > **Parâmetros do sistema** > **Segurança**.
***

:::(warning) (**Cuidado**)
Todos os campos vêm preenchidos com um valor padrão recomendado pelo senhasegura. Contudo, você pode fazer modificações conforme sua necessidade. 
:::

## Aba Segurança
**Item**|**Descrição**
|---|---|
**Forçar Autenticação de multifator para visualizar senha?***|Força a autenticação de dois fatores para visualizar senhas. Opção padrão: **Não**.
**Tempo entre solicitação de token para custódia (minutos)**|Define o intervalo de tempo em que os tokens devem ser solicitados para a visualização de senhas. Escolha entre **0** e **60** minutos. Opção padrão: **5 minutos**.
**Ignorar a opção 'Confiar neste computador' para visualizar senha?***|Indica se o checkbox presente ao realizar o login no ambiente do senhasegura pode ser ignorado ao visualizar senhas. Opção padrão: **Não**.
**Forçar autenticação de multifator para iniciar sessão?***|Força o uso de um token 2FA para iniciar sessões proxy. Opção padrão: **Não**.
**Tempo entre solicitação de token para sessões (minutos)**| Define o intervalo de tempo em que os tokens devem ser solicitados para realizar a sessão. Escolha entre **0** e **60** minutos. Opção padrão: **5 minutos**.
**Ignorar a opção 'Confiar neste computador' para iniciar sessão?***|Indica se o checkbox presente ao realizar o login no ambiente do senhasegura pode ser ignorado ao iniciar uma sessão. Opção padrão: **Não**.
**Forçar conexão segura (SSL) nas execuções de troca de senha?***|Força a utilização de uma conexão segura (Secure Sockets Layer) durante as trocas de senha. Opção padrão: **Sim**.
**Habilitar troca de senha após abertura da sessão?***|Habilita a alteração de senha, pelo senhasegura, logo após o início da sessão proxy. Opção padrão: **Não**.
**Forçar autenticação com certificado para o Proxy RDP?***|Força a autenticação usando um certificado digital ao se conectar através do Proxy RDP. Opção padrão: **Não**.
**Forçar autenticação com certificado para o Proxy SSH/Telnet?***|Força a autenticação da sessão usando um certificado digital ao se conectar através do Proxy SSH/Telnet. Opção padrão: **Não**.
**Modo de segurança RDP***|Nível de segurança das conexões RDP de destino. Escolha entre: *Automático*, *RDP*, *NLA* ou *TLS*. Opção padrão: **Automático**. Nessa opção, o cliente e o servidor determinarão o nível de segurança. Por ser uma ponte, o cliente, nesse caso, é a plataforma senhasegura. Para configurar o nível de segurança das conexões que chegam ao senhasegura, consulte as documentaçãoes sobre RDP Proxy.
**Tempo de inatividade da sessão***|Define o período de inatividade de uma sessão para que a mesma seja desconectada automaticamente. Escolha um valor entre **0** e **60**; sendo estes expressos em *Minutos, Horas* e *Dias*. Opção padrão: **1 dia**.
**Habilitar filtro de IPs com permissão para iniciar uma sessão**|Habilita a ativação de um filtro baseado em um endereço IP que controla os endereços IPs com permissão para iniciar sessões de proxy. Opção padrão: **Desabilitado**.
**IPs com permissão para iniciar sessão**|Caso a opção **Habilitar filtro de IPs com permissão para iniciar uma sessão** seja habilitada, este campo será usado para determinar uma lista de IPs, individuais ou em intervalos, que terão permissão para iniciar uma sessão proxy. Opção padrão: **Vazio**.

### Na seção Criptografia
:::(info) (**Info**)
Note que se o valor do campo **Modo de criptografia** for **HSM**, você deve selecionar um dispositivo de HSM.
:::
**Item**|**Descrição**
|---|---|
**Modo de criptografia***|Indica se o modo de criptografia será Padrão ou HSM. Opção padrão: **Padrão**.
**Selecione um HSM**|Selecione o dispositivo de hardware usado para gerenciar as chaves de criptografia.

