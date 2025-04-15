# Cadastro de parâmetros segregados

Este documento fornece informações sobre a tela do formulário para cadastro dos **Parâmetros Segregados**, seja por grupos, por credencial, por dispositivo ou por origem.

Ao criar uma parametrização segregada, independentemente do tipo, você pode escolher entre **Padrão do sistema**, que irá manter o que foi configurado no Parâmetros do sistema - Global, ou então as opções **Sim** e **Não** que irá sobrepor o que foi escolhido globalmente para aquele tipo específico de segregação que está sendo criada. 

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Controle de acesso > Parâmetros segregados**  
   1. **Nova segregação para grupos.**  
   2. **Nova segregação para dispositivos.**  
   3. **Nova segregação para credenciais.**  
   4. **Nova segregação por origem.**

ou

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Parâmetros do sistema > Segregado**  
   1. **Nova segregação para grupos.**  
   2. **Nova segregação para dispositivos.**  
   3. **Nova segregação para credenciais.**  
   4. **Nova segregação por origem.**

---
## Seção Geral

Esta seção fornece informações que são comuns em qualquer tipo de parâmetro segregado que está sendo criado, seja ele por grupo, por credencial, por dispositivo ou por origem.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Nome*** | Campo de texto | Sim | Nome de identificação do parâmetro cadastrado. |
| **Situação*** | Botão de opção | Sim | Define o estado do parâmetro. As opções são **Ativo** e **Inativo**. |

## Seção Sessão remota

Esta seção fornece informações que são comuns em qualquer tipo de parâmetro segregado que está sendo criado, seja ele por grupo, por credencial, por dispositivo ou por origem.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Permitir o uso de credenciais pessoais?*** | Botão de opção | Sim | Habilita a permissão para que o usuário possa usar credenciais pessoais para iniciar sessões remotas. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Habilitar transferência de arquivos para Download?*** | Botão de opção | Sim | Habilita a transferência de arquivos entre o dispositivo e a estação de trabalho de origem. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Habilitar transferência de arquivos para Upload?*** | Botão de opção | Sim | Habilita a transferência de arquivos entre a estação de trabalho de origem e o dispositivo. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Habilitar uso de Ctrl+Alt+Del?*** | Botão de opção | Sim | Habilita a permissão para que o usuário operador possa pressionar a sequência de teclas `ctrl+alt+del` e acessar os controles avançados do dispositivo em sessões gráficas RDP. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Habilitar copiar e colar?*** | Botão de opção | Sim | Habilita a permissão para que o usuário operador possa copiar e colar o conteúdo de sua área de transferência para o dispositivo de destino, ou vice e versa. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Ignorar erros de certificado?*** | Botão de opção | Sim | Indica se certificados inválidos em conexões RDP devem ser ignorados. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Habilitar automação de SUDO em sessões Linux?*** | Botão de opção | Sim | Habilita a automação de elevação de privilégios utilizando o comando `SUDO`. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Habilitar gatilhos para transferência de arquivos?*** | Botão de opção | Sim | Habilita a permissão para que a transferência de arquivos seja avaliada por plugins externos. A demanda por esses plugins externos deve ser encaminhada para nossa equipe Comercial. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Habilitar RAIL para sessões RDP?*** | Botão de opção | Sim | Habilita que a tecnologia Rails para sessões RDP, quando ativa, fará a conexão RemoteApp ter uma melhor usabilidade. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Habilitar wallpaper em sessões RDP?*** | Botão de opção | Sim | Habilita se o papel de parede da sessão RDP será apresentado durante a sessão. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Tipo de terminal SSH** | Botão de opção | Não | Indica o tipo de terminal que será utilizado nas sessões do tipo SSH e Telnet. As opções são **Padrão do sistema**, **Linux** e **Xterm**. |
| **Incluir hostname no login local em sessões RDP?*** | Botão de opção | Sim | Permite ao sistema incluir o hostname da máquina para fazer o login. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Converter /r/n para /n em sessões SSH realizadas no navegador?*** | Botão de opção | Sim | Habilita que os caracteres de fim de linha padrão do Microsoft® Windows (\r\n) sejam substituídos pelo formato Unix (\r), ao copiar e colar textos em sessões de Web Proxy no Segura com protocolo SSH. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Profundidade de cor** | Menu suspenso | Não | Profundidade de cor que será usada apenas em sessões HTTP VNC. O usuário pode escolher entre 8 e 32 bits, conforme o desempenho que deseja alcançar. As opções são **8 bits, 16 bits, 24 bits e 32 bits.** |
| **Letra da unidade RDP*** | Menu suspenso | Sim | Letra que representa a unidade de disco remoto criada. As opções são de D à Z. O padrão do sistema é a letra G. |
| **Keyboard Layout*** | Menu suspenso | Sim | Indica qual o layout de teclado será utilizado na sessão. Escolha entre uma das 21 opções disponíveis. |
| **Idioma dos textos da sessão (OCR)*** | Menu suspenso | Sim | Indica qual idioma será utilizado durante a sessão. Escolha entre uma das 15 opções disponíveis. |
| **Quantidade de sessões simultâneas do usuário (zero indica ilimitado)*** | Seletor de quantidade | Sim | Indica quantas sessões proxy os usuários podem executar simultaneamente. Você pode escolher um valor de  0 a 99. |
| **Habilitar suporte para credenciais de domínio SSH?*** | Botão de opção | Sim | Habilita a permissão para acesso com credenciais de domínio para conexões SSH. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Máscara para string de conexão ao utilizar credenciais de domínio SSH** | Campo de texto | Não | Após a habilitação do campo acima, a caixa de texto estará disponível para que a máscara da string relacionada à conexão seja inserida. É necessário preencher este campo com os valores user, domain e um separador. Exemplo: user@domain ou domain\user. |
| **Banner de conexão** | Campo de texto | Não | Mensagem apresentada ao usuário ao iniciar uma sessão proxy. |

## Seção Gravação

Esta seção fornece informações que são comuns em qualquer tipo de parâmetro segregado que está sendo criado, seja ele por grupo, por credencial, por dispositivo ou por origem.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Habilitar gravação de input do usuário?*** | Botão de opção | Sim | Diferente das configurações de indexação de texto, esta propriedade sinaliza se as entradas serão registradas individualmente na sessão, sem estarem disponíveis no relatório que cruza todos os textos de todas as sessões. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Habilitar gravação de sessão?*** | Botão de opção | Sim | Habilita a gravação em vídeo da sessão. Este vídeo é uma cópia binária otimizada do protocolo que foi transferido. Não é o arquivo MP4 exportado. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Indexar textos das sessões?*** | Botão de opção | Sim | Indica se os textos da sessão devem ser indexados.  Essa configuração deve ser usada em conjunto com as outras duas abaixo. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Habilitar importação de índice de textos Input?*** | Botão de opção | Sim | Habilita a indexação dos textos de entrada do usuário operador. Ou seja, tudo o que for digitado será capturado, independentemente se o campo de destino estiver mascarado. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Habilitar importação de índice de textos Output?*** | Botão de opção | Sim | Habilita a indexação dos textos de saída apresentados na tela para o usuário. Vale lembrar que o texto digitado pelo usuário será gravado se também for uma saída. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Habilitar livestream em tempo real?*** | Botão de opção | Sim | Habilita o monitoramento de transmissão ao vivo na sessão de proxy. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Permitir o uso de macro em sessão?*** | Botão de opção | Sim | Habilita gravações de sessões que utilizam *scripts* macro. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Habilitar o download do vídeo da sessão?*** | Botão de opção | Sim | Somente usuários com as permissões adequadas podem solicitar o download das gravações do vídeo da sessão caso esse parâmetro esteja habilitado. As opções são **Padrão do sistema**, **Sim** e **Não**. |

## Seção Segurança

Esta seção fornece informações que são comuns em qualquer tipo de parâmetro segregado que está sendo criado, seja ele por grupo, por credencial, por dispositivo ou por origem.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Forçar Autenticação de multifator para visualizar senha?*** | Botão de opção | Sim | Força a autenticação de dois fatores para visualizar senhas. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Forçar autenticação de multifator para iniciar sessão?*** | Botão de opção | Sim | Força o uso de um token 2FA para iniciar sessões proxy. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Ignorar a opção 'Confiar neste computador' para visualizar senha?*** | Botão de opção | Sim | Indica se o checkbox presente ao realizar o login no ambiente do Segura pode ser ignorado ao visualizar senhas. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Ignorar a opção 'Confiar neste computador' para iniciar sessão?*** | Botão de opção | Sim | Indica se o checkbox presente ao realizar o login no ambiente do Segura pode ser ignorado ao iniciar uma sessão. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Forçar conexão segura (SSL) nas execuções de troca de senha?*** | Botão de opção | Sim | Força a utilização de uma conexão segura *(Secure Sockets Layer*) durante as trocas de senha. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Habilitar troca de senha após abertura da sessão?*** | Botão de opção | Sim | Habilita a alteração de senha, pelo Segura, logo após o início da sessão proxy. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Forçar autenticação com certificado para o Proxy RDP?*** | Botão de opção | Sim | Força a autenticação usando um certificado digital ao se conectar através do Proxy RDP. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Forçar autenticação com certificado para o Proxy SSH/Telnet?*** | Botão de opção | Sim | Força a autenticação da sessão usando um certificado digital ao se conectar através do Proxy SSH/Telnet. As opções são **Padrão do sistema**, **Sim** e **Não**. |
| **Tempo de inatividade da sessão*** | Seletor de quantidade e Menu suspenso | Sim | Define o período de inatividade de uma sessão para que a mesma seja desconectada automaticamente. Você pode escolher um valor de **0** e **60**; sendo estes expressos em **Minutos**, **Horas** e **Dias**. |
| **Modo de segurança RDP*** | Menu suspenso | Sim | Nível de segurança das conexões RDP de destino. Podendo escolher entre: **Automático**, **RDP**, **NLA** ou **TLS**. Por padrão é deixado como **Automático** Nessa opção o cliente e o servidor determinarão o nível de segurança.  Por ser uma ponte, o cliente, nesse caso, é a plataforma Segura. Para configurar o nível de segurança das conexões que chegam ao Segura, consulte as documentações sobre RDP Proxy. |
| **Habilitar filtro de IPs com permissão para iniciar uma sessão** | Caixa de seleção | Sim | Habilita a ativação de um filtro baseado em um endereço IP que controla os endereços IPs com permissão para iniciar sessões de proxy. |
| **IPs com permissão para iniciar sessão** | Campo de texto | Sim | Caso a opção **Habilitar filtro de IPs com permissão para iniciar uma sessão** seja habilitada, este campo será usado para determinar uma lista de IPs, individuais ou em intervalos, que terão permissão para iniciar uma sessão proxy. |

---
## Seção Grupos

Esta seção fornece informações que são exclusivamente para o parâmetro segregado por grupo.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Políticas de acesso** | Campo de texto | Não | Busca pelo grupo na lista de grupos incluídos. |
| **Adicionar** | Botão | Não | Abre a tela de grupos do Segura, para que sejam incluídos. |
| **Tabela de políticas** | Tabela | Não | Dados de cada grupo adicionado contendo *os campos caixa de seleção*, *Código, Nome*, *Tipo* e *Parameter*. |

---
## Seção Dispositivos

Esta seção fornece informações que são exclusivamente para o parâmetro segregado por dispositivo.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Dispositivos** | Campo de texto | Não | Busca pelo dispositivo na lista de dispositivos incluídos. |
| **Adicionar** | Botão | Não | Abre a tela de dispositivos do Segura, para que sejam incluídos. |
| **Tabela de dispositivos** | Tabela | Não | Dados de cada dispositivo adicionado contendo *os campos caixa de seleção, Código*, *Nome do dispositivo*, *gerenciamento*, *Site*, *Modelo*, *Tipo*, *Fabricante* e  *Parameter.* |

---
## Seção credencial

Esta seção fornece informações que são exclusivamente para o parâmetro segregado por credencial.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Credenciais** | Campo de texto | Não | Busca pela credencial na lista de credenciais incluídas. |
| **Adicionar** | Botão | Não | Abre a tela de credenciais do Segura, para que sejam incluídas. |
| **Tabela de credenciais** | Tabela | Não | Dados de cada credencial adicionada contendo *os campos caixa de seleção, Código*, *Tipo de credencial*, *Nome de usuário*, *Dispositivo*, *Modelo*, *Fabricante*, *Site* e *Parameter.* |

---
## Seção Origens

Esta seção fornece informações que são exclusivamente para o parâmetro segregado por origem.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Buscar** | Campo de texto | Não | Busca pelo número IP na lista de IPs incluídos. |
| **Adicionar** | Botão | Não | Abre uma linha a mais na listagem da tabela para que seja incluído o número de IP. |
| **Tabela de origem** | Tabela | Não | Dados de cada número IP adicionado contendo *os campos caixa de seleção* e *Origem.* |

---
## Seção Revisão

Esta seção, é comum nos cadastros de qualquer tipo de parâmetro segregado, nela estão as informações que foram adicionadas nos passos anteriores, para que seja analisada e caso necessite de alguma mudança já seja feita antes de finalizar o cadastro.