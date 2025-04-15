# Parâmetros do sistema - Sessão Remota

Este documento fornece informações sobre a tela do formulário **Parâmetros do sistema**, na aba **Sessões Remotas** que se referem às parametrizações de sessões proxy.

:::(warning) (**Cuidado**)  
Alguns parâmetros em versões anteriores do Segura não estão mais presentes nesta documentação. Sugerimos que você evite mudar os parâmetros que não estão listados neste documento.  
:::

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Parâmetros do sistema > Global > Sessão Remotas.**

:::(warning) (**Atenção**)  
Todos os campos vêm preenchidos com um valor padrão, recomendado pelo Segura. Contudo, você pode fazer modificações conforme sua necessidade.  
::: 

---
## Aba Sessão Remota

### Seção Geral  
:::(error) (**Importante**)  
O parâmetro **Habilitar transferência de arquivos** passou por uma atualização **beta** e foi dividido em dois parâmetros: **Habilitar download de arquivos** e **Habilitar upload de arquivos**. Atualmente, se você selecionar **Sim** para qualquer um desses parâmetros, as funções de download e upload serão **ativadas**. Para **desativar** completamente a transferência de arquivos, selecione **Não** para **ambos** os parâmetros.  
:::

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Ativar livestream em tempo real?*** | Botão de opção | Sim | Habilita o monitoramento de transmissão ao vivo na sessão de proxy. Opção padrão: **Sim**. |
| **Ativar RemoteApp na sessão?*** | Botão de opção | Sim | Habilita gravações de sessões que utilizam o RemoteApp. Opção padrão: **Sim**. |
| **Quantidade de sessões simultâneas do usuário (zero indica ilimitado)*** | Seletor de quantidade | Sim | Indica quantas sessões proxy os usuários podem executar simultaneamente. Você pode escolher um valor de  **0** a 99\. Opção padrão: **0 (ilimitado)**. |
| **Ativar transferência de arquivos para Download?*** | Botão de opção | Sim | Habilita a transferência de arquivos entre o dispositivo e a estação de trabalho de origem. Opção padrão: **Sim**. |
| **Ativar transferência de arquivos para Upload?*** | Botão de opção | Sim | Habilita a transferência de arquivos entre a estação de trabalho de origem e o dispositivo. Opção padrão: **Sim**. |
| **Ativar copiar e colar?*** | Botão de opção | Sim | Habilita a permissão para que o usuário operador possa copiar e colar o conteúdo de sua área de transferência para o dispositivo de destino, ou vice e versa. Opção padrão: **Sim**. |
| **Permitir o uso de credenciais pessoais?*** | Botão de opção | Sim | Habilita a permissão para que o usuário possa usar credenciais pessoais para iniciar sessões remotas. Opção padrão: **Não**. |
| **Ativar gatilhos para transferência de arquivos?*** | Botão de opção | Sim | Habilita a permissão para que a transferência de arquivos seja avaliada por plugins externos. A demanda por esses plugins externos deve ser encaminhada para nossa equipe Comercial. Opção padrão: **Não**. |
| **Ativar o download para acesso local?*** | Botão de opção | Sim | Habilita a permissão para que a extensão do arquivo RDP ou o arquivo BAT que estiver executando o PuTTY1 possa ser gerado pelo Segura e baixado pelos operadores do usuário, facilitando o acesso a uma credencial. Opção padrão: **Não**. |
| **O usuário pode alterar o diretório de instalação PuTTY?*** | Botão de opção | Sim | Permite que os operadores de usuários possam alterar o diretório de localização binária no momento do download. Quando habilitado, os usuários podem escolher um novo local no menu de preferências do usuário. Opção padrão: **Não**. |
| **Ativar suporte para credenciais de domínio SSH?*** | Botão de opção | Sim | Habilita a permissão para acesso com credenciais de domínio para conexões SSH. Opção padrão: **Não**. |
| **Máscara para string de conexão ao utilizar credenciais de domínio SSH*** | Campo de texto | Sim | Após a habilitação do campo acima, a caixa de texto estará disponível para que a máscara da string relacionada à conexão seja inserida. É necessário preencher este campo com os valores user, domain e um separador. Exemplo: user@domain ou domain\\user. |
| **Interface do IPv6 do servidor Segura*** | Campo de texto | Sim | Nome da interface de rede IPv6 do servidor Segura. Por padrão: **eth0**.credenciais |
| **Diretório de instalação do PuTTY*** | Campo de texto | Sim | O caminho onde o binário **PuTTY** será normalmente encontrado nas estações de trabalho dos operadores. |
| **Layout do Teclado*** | Menu suspenso | Sim | Indica qual o layout de teclado será utilizado na sessão. Escolha entre uma das **21** opções disponíveis. |
| **Idioma dos textos da sessão (OCR)***  | Menu suspenso | Sim | Indica qual idioma será utilizado durante a sessão. Escolha entre uma das **15** opções disponíveis. |
| **Banner de conexão** | Campo de texto | Não | Mensagem apresentada ao usuário ao iniciar uma sessão proxy. |

### Seção Web Proxy

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Converter /r/n para /n em sessões SSH realizadas no navegador?\*** | Botão de opção | Sim | Habilita que os caracteres de fim de linha padrão do Microsoft® Windows (\r\n) sejam substituídos pelo formato Unix (\r), ao copiar e colar textos em sessões de Web Proxy no Segura com protocolo SSH. Opção padrão: **Não**. |
| **Profundidade de cor** | **Menu suspenso** | **Não** | Profundidade de cor que será usada apenas em sessões HTTP VNC. O usuário pode escolher entre **8** e **32 bits**, conforme o desempenho que deseja alcançar. Opção padrão: **16 bits**. |

### Seção Terminal Proxy

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Ativar automação de SUDO em sessões Linux?\*** | Botão de opção | Sim | Habilita a automação de elevação de privilégios utilizando o comando `SUDO`. Opção padrão: **Sim**. |
| **Tipo de terminal SSH\*** | Botão de opção | Sim | Indica o tipo de terminal que será utilizado nas sessões do tipo SSH e Telnet. Opção padrão: **Linux**. |

### Seção Proxy RDP

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Ignorar erros de certificado?*** | Botão de opção | Sim | Indica se certificados inválidos em conexões RDP devem ser ignorados. Opção padrão: **Sim**. |
| **Letra da unidade RDP*** | Menu suspenso | Sim | Letra que representa a unidade de disco remoto criada. Opções de D à Z. Opção padrão: **G**. |
| **Ativar uso de Ctrl+Alt+Del?*** | Botão de opção | Sim | Habilita a permissão para que o usuário operador possa pressionar a sequência de teclas `ctrl+alt+del` e acessar os controles avançados do dispositivo em sessões gráficas RDP. Opção padrão: **Sim**. |
| **Ativar Rail para sessões RDP?*** | Botão de opção | Sim | Habilita que a tecnologia **Rails** para sessões **RDP**, quando ativa, fará a conexão RemoteApp ter uma melhor usabilidade. Opção padrão: **Não**. |
| **Ativar wallpaper em sessões RDP?*** | Botão de opção | Sim | Habilita se o papel de parede da sessão RDP será apresentado durante a sessão. Opção padrão: **Não**. |
| **Incluir hostname no login local em sessões RDP?*** | Botão de opção | Sim | Permite ao sistema incluir o hostname da máquina para fazer o login. Opção padrão: **Não**. |

### Seção Gravação

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Indexar textos das sessões?*** | Botão de opção | Sim | Indica se os textos da sessão devem ser indexados.  Essa configuração deve ser usada em conjunto com as outras duas abaixo. Opção padrão: **Não**. |
| **Ativar importação de índice de textos Input?*** | Botão de opção | Sim | Habilita a indexação dos textos de entrada do usuário operador. Ou seja, tudo o que for digitado será capturado, independentemente se o campo de destino estiver mascarado. Opção padrão: **Não**. |
| **Ativar importação de índice de textos Output?*** | Botão de opção | Sim | Habilita a indexação dos textos de saída apresentados na tela para o usuário. Vale lembrar que o texto digitado pelo usuário será gravado se também for uma saída. Opção padrão: **Não**. |
| **Ativar gravação de input do usuário?*** | Botão de opção | Sim | Diferente das configurações de indexação de texto, esta propriedade sinaliza se as entradas serão registradas individualmente na sessão, sem estarem disponíveis no relatório que cruza todos os textos de todas as sessões. Opção padrão: **Sim**. |
| **Ativar gravação de sessão?*** | Botão de opção | Sim | Habilita a gravação em vídeo da sessão. Este vídeo é uma cópia binária otimizada do protocolo que foi transferido. Não é o arquivo MP4 exportado. Opção padrão: **Sim**. |
| **Ativar expurgo das sessões?*** | Botão de opção | Sim | Ativa o descarte automático de vídeos de sessões que atingiram uma determinada data de expiração. Opção padrão: **Não**. |
| **Quantidade de dias para expurgo*** | Seletor de quantidade | Sim | Indica quantos dias o vídeo deve ser mantido. Você pode escolher um valor de  **0** a 1000 dias. Opção padrão: **90 dias**. |
| **Qualidade de imagem da sessão Web*** | Seletor de quantidade | Sim | Indica o nível da qualidade da imagem para sessões web. Você pode escolher um valor de  **10** a **100**. Opção padrão: **100**. |
| **Quantidade de quadros do vídeo (fps)*** | Seletor de quantidade | Sim | Indica a quantidade de quadros do vídeo e configura o fps para a gravação de vídeo em sessões. Você pode escolher um valor de  **2** a **24**. Opção padrão: **15 fps**. |
| **Tipo de imagem de sessão Web*** | Botão de opção | Sim | Indica o tipo de imagem nas sessões web, sendo possível escolher entre PNG ou JPEG. Opção padrão: **PNG**. |
| **Ativar o download do vídeo da sessão?*** | Botão de opção | Sim | Somente usuários com as permissões adequadas podem solicitar o download das gravações do vídeo da sessão caso esse parâmetro esteja habilitado.Opção padrão: **Não** |