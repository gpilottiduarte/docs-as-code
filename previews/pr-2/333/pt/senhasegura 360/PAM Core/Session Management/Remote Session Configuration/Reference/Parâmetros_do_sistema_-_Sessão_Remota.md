# Parâmetros do sistema - Sessão Remota

Neste documento, você encontrará todas as informações sobre a tela **Parâmetros do sistema** aba de Sessão Remota (proxy). 

:::(info) (**Info**)
Por ser uma tela com vários controles de várias funcionalidades, listaremos aqui apenas os controles que refletem o proxy.
:::
:::(warning) (**Cuidado**)
Alguns parâmetros em versões anteriores do senhasegura não estão mais presentes neste document. Sugerimos que você evite mudar os parâmetros que não estão neste documento.
:::
***
## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. Selecione **Parâmetros do sistema** > **Parâmetros do sistema** > **Sessão Remota**.
***

:::(warning) (**Cuidado**)
Todos os campos vêm preenchidos com um valor padrão recomendado pelo senhasegura. Contudo, você pode fazer modificações conforme sua necessidade. 
:::

## Aba Sessão Remota
### Na seção Geral
:::(error) (**Importante**)
O parâmetro **Habilitar transferência de arquivos** passou por uma atualização beta e foi dividido em dois parâmetros: **Habilitar download de arquivos** e **Habilitar upload de arquivos**. Atualmente, se você selecionar **Sim** para qualquer um desses parâmetros, as funções de download e upload serão ativadas. Para **desativar** completamente a transferência de arquivos, selecione **Não** para **ambos** os parâmetros.
:::

**Item**|**Descrição**
|---|---|
**Habilitar transferência de arquivos para Download?***|Habilita a transferência de arquivos entre o dispositivo e a estação de trabalho de origem. Opção padrão: **Sim**.
**Habilitar transferência de arquivos para Upload?***|Habilita a transferência de arquivos entre a estação de trabalho de origem e o dispositivo. Opção padrão: **Sim**.
**Habilitar uso de Ctrl+Alt+Del?***|Habilita a permisão para que o usuário operador possa pressionar a sequência de teclas `crtl+alt+del` e acessar os controles avançados do dispositivo em sessões gráficas RDP. Opção padrão: **Sim**.
**Habilitar copiar e colar?***|Habilita a permisão para que o usuário operador possa copiar e colar o conteúdo de sua área de transferência para o dispositivo de destino, ou vice e versa. Opção padrão: **Sim**.
**Permitir o uso de credenciais pessoais?***|Habilita a permisão para que o usuário possa usar credenciais pessoais para iniciar sessões remotas. Opção padrão: **Não**.
**Habilitar gatilhos para transferência de arquivos?***|Habilita a permisão para que a transferência de arquivos seja avaliada por plugins externos. A demanda por esses plugins externos deve ser encaminhada para nossa equipe Comercial. Opção padrão: **Não**.
**Converter /r/n para /n em sessões SSH realizadas no navegador?***|Possibilita que os caracteres de fim de linha padrão do Microsoft® Windows (\r\n) sejam substituídos pelo formato Unix (\r), ao copiar e colar textos em sessões de Web Proxy no senhasegura com protocolo SSH. Opção padrão: **Não**.
**Habilitar o download para acesso local?***| Habilita a permisão para que a extensão do arquivo RDP ou o arquivo BAT que estiver executando o PuTTY1 possa ser gerado pelo senhasegura e baixado pelos operadores do usuário, facilitando o acesso a uma credencial. Opção padrão: **Não**.
**Diretório de instalação do PuTTY***|O caminho onde o binário **PuTTY** será normalmente encontrado nas estações de trabalho dos operadores.
**O usuário pode alterar o diretório de instalação PuTTY?***|Permite que os operadores de usuários possam alterar o diretório de localização binária no momento do download. Quando habilitado, os usuários podem escolher um novo local no menu de preferências do usuário. Opção padrão: **Não**.
**Interface do IPv6 do servidor senhasegura***|Nome da interface de rede IPv6 do servidor senhasegura. Por padrão: **eth0**.
**Profundidade de cor**|Profundidade de cor que será usada apenas em sessões HTTP VNC. O usuário pode escolher entre **8** e **32** bits, conforme o desempenho que deseja alcançar. Opção padrão: **16 bits**.
**Letra da unidade RDP***|Letra que representa a unidade de disco remoto criada. Opções de **D** à **Z**. Opção padrão: **G**.
**Habilitar suporte para credenciais de domínio SSH?***|Habilita a permissão para acesso com credenciais de domínio para conexões SSH. Opção padrão: **Não**.
**Máscara para string de conexão ao utilizar credenciais de domínio SSH***|Após a habilitação do campo acima,, a caixa de texto estará disponível para que a máscara da string relacionada à conexão seja inserida. É necessário preencher este campo com os valores user, domain e um separador. Exemplo: user@domain ou domain\user.
**Banner de conexão**|Mensagem apresentada ao usuário ao iniciar uma sessão proxy.

### Na seção Proxy SSH
**Item**|**Descrição**
|---|---|
**Habilitar automação de SUDO em sessões Linux?***|Habilita a automação de elevação de privilégios utilizando o comando `SUDO`. Opção padrão: **Sim**.
**Tipo de terminal SSH***|Indica o tipo de terminal que será utilizado nas sessões do tipo SSH e Telnet. Opção padrão: **Linux**.

### Na seção Proxy RDP
**Item**|**Descrição**
|---|---|
**Ignorar erros de certificado?***|Indica se certificados inválidos em conexões RDP devem ser ignorados. Opção padrão: **Sim**.
**Habilitar RAIL over RDP?***|Possibilita que a tecnologia **Rails over RDP** da Microsoft®, quando ativa, faça a conexão RemoteApp ter uma melhor usabilidade. Opção padrão: **Não**.
**Habilitar wallpaper em sessões RDP?***|Determina se o papel de parede da sessão RDP será apresentado durante a sessão. Opção padrão: **Não**.
**Incluir hostname no login local em sessões RDP?***|Permite ao sistema incluir o hostname da máquina para fazer o login. Opção padrão: **Não**.

### Na seção Gravação
**Item**|**Descrição**
|---|---|
**Indexar textos das sessões?***|Indica se os textos da sessão devem ser indexados. Essa configuração deve ser usada em conjunto com as outras duas abaixo. Opção padrão: **Não**.
**Habilitar importação de índice de textos Input?***|Habilita a indexação dos textos de entrada do usuário operador. Ou seja, tudo o que for digitado será capturado, independentemente se o campo de destino estar mascarado. Opção padrão: **Não**.
**Habilitar importação de índice de textos Output?***|Habilita a indexação dos textos de saída apresentados na tela para o usuário. Vale lembrar que o texto digitado pelo usuário será gravado se também for uma saída. Opção padrão: **Não**.
**Habilitar gravação de input do usuário?***|Diferente das configurações de indexação de texto, esta propriedade sinaliza se as entradas serão registradas individualmente na sessão, sem estarem disponiveis no relatório que cruza todos os textos de todas as sessões. Opção padrão: **Sim**.
**Habilitar gravação de sessão?***|Habilita a gravação em vídeo da sessão. Este vídeo é uma cópia binária otimizada do protocolo que foi transferido. Não é o arquivo MP4 exportado. Opção padrão: **Sim**.
**Habilitar RemoteApp na sessão?***|Habilita gravações de sessões que utilizam o RemoteApp. Opção padrão: **Sim**.
**Ativar expurgo das sessões?***|Ativa o descarte automático de vídeos de sessões que atingiram uma determinada data de expiração. Opção padrão: **Não**.
**Quantidade de dias para expurgo***|Indica quantos dias o vídeo deve ser mantido. Você pode escolher um valor de **0** à **1000** dias.|Opção padrão: **90 dias**.
**Quantidade de sessões simultâneas do usuário (zero indica ilimitado)***|Indica quantas sessões proxy os usuários podem executar simultaneamente. Você pode escolher um valor de **0** à **99**. Opção padrão: **0 (ilimitado)**.
**Qualidade de imagem da sessão Web***|Indica o nível da qualidade da imagem para sessões web. Você pode escolher um valor de **10** à **100**. Opção padrão: **100**.
**Quantidade de quadros do vídeo (fps)***|Indica a quantidade de quadros do vídeo e configura o fps para a gravação de vídeo em sessões. Você pode escolher um valor de **2** à **24**. Opção padrão: **15 fps**.
**Layout do Teclado***|Indica qual o layout de teclado será utilizado na sessão. Escolha entre uma das **21** opções disponíveis.
**Tipo de imagem de sessão Web***|Indica o tipo de imagem nas sessões web, sendo possível escolher entre **PNG** ou **JPEG**. Opção padrão: **PNG**.
**Habilitar livestream em tempo real?***|Habilita o monitoramento de transmissão ao vivo na sessão de proxy. Opção padrão: **Sim**.
**Idioma dos textos da sessão (OCR)***|Indica qual idioma será utilizado durante a sessão. Escolha entre uma das **15** opções disponíveis.
**Ativar fluxo de aprovação para vídeos da sessão?***|Indica a necessidade de um processo de aprovação para vídeos de sessão antes de serem acessados. Opção padrão: **Não**.
**Habilitar o download do vídeo da sessão?***|Determina que somente usuários com as permissões adequadas possam solicitar o download das gravações do vídeo da sessão caso esse parâmetro esteja habilitado. Opção padrão: **Não**

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

