# Email de itens compartilhados


Este documento fornece informações sobre o email e telas em que um item é compartilhado com um uma pessoa que não possui conta no **MySafe**.

## Requisitos

* Ser o destinatário do compartilhamento de um item por um usuário **MySafe**.

## Email de acesso

Quando um item do **MySafe** é compartilhado de forma temporária com uma pessoa que não possui conta no **MySafe**, essa pessoa recebe um email com a notificação do compartilhamento cujo título é "**Uma nova informação foi compartilhada com você**".

No corpo do email, o destinatário verá uma caixa de texto do Segura com os seguintes detalhes do item compartilhado:

| Item | Descrição |
| :---- | :---- |
| **Introdução** | Mensagem introdutória informando o nome da pessoa que compartilhou o novo item. |
| **Nome** | Nome do item compartilhado. |
| **Tipo** | Tipo do item compartilhado. As opções são *Senha, Anotação, Arquivo* e *Segredo de API*. |
| **Data de expiração** | Data e hora em que o link com o acesso ao item expirará.  |
| **Máximo de visualizações** | O número máximo de vezes que o item poderá ser acessado através do link disponibilizado até a expiração. |
| **Acesse agora** | Botão que direciona o destinatário à tela de autenticação. |
| **Link** | Link de acesso alternativo caso o botão **Acesse agora** não funcione. |

## Email com token de autenticação

Após clicar em **Acesse agora** ou copiar e colar o link alternativo em seu navegador, o destinatário receberá outro email com o título **MySafe \- Seu token de autenticação**.

No corpo do email, o destinatário verá uma caixa de texto do Segura com os seguintes detalhes do token de autenticação:

| Item | Descrição |
| :---- | :---- |
| **Introdução** | Mensagem introdutória informando a validade do token de autenticação. |
| **Token de autenticação** | Token de autenticação de 8 dígitos que deve ser copiado e colado na tela de autenticação. |

## Tela Autenticação

Em posse do **Token de autenticação**, o destinatário deverá colá-lo na tela de autenticação que contém as seguintes informações:

| Item | Descrição |
| :---- | :---- |
| **Token de autenticação** | Caixa de texto para inserção do token de autenticação de 8 dígitos. Caso deseje, utilize o botão **Teclado virtual**. |
| **Não recebeu? Clique aqui para reenviar** | Texto clicável para novo envio do token de autenticação em caso de não recebimento. Após clicado, o texto muda para **"Não recebeu? Enviado\!** |
| **Enter** | Botão que direciona para a tela com os detalhes do item compartilhado. |

### Tela de senha compartilhada

Ao acessar um item compartilhado temporariamente do tipo **senha**, o destinatário terá acesso à tela que exibe os seguintes detalhes:

| Item | Descrição |
| :---- | :---- |
| **Nome** | Localizado abaixo de **MySafe**, exibe o nome da senha. |
| **Tempo de expiração** | Exibe a data e hora em que o acesso à senha expirará.  |
| **Visualizações restantes** | Exibe o número de vezes que a senha ainda poderá ser acessada através do link disponibilizado até a expiração. |
| **Url** | Exibe a URL do site onde a senha será utilizada. Clique no botão **Link externo** para acessar o site. |
| **Nome do usuário** | Exibe o nome do usuário associado à senha e o botão **Copiar** que enviar a informação para a área de transferência. |
| **Senha** | Exibe a senha. Essa informação é sensível. Para visualizá-la, clique em **Exibir.** Clique em **Copiar** para enviar a senha para a área de transferência. |
| **Token** | Exibe o token TOTP associado à senha em caso de conta com autenticação multi-fator e um **relógio** que exibe o tempo restante do token. Por padrão, o token é atualizado a cada 30 segundos.  |
| **Observações** | Exibe observações gerais sobre a senha. Clique no botão **Link externo** para abrir as observações em outra aba. Clique em **Copiar** para enviar a informação para a área de transferência.  |

### Tela de segredo de API compartilhado

Ao acessar um item compartilhado temporariamente do tipo **segredo de API**, o destinatário terá acesso à tela que exibe os seguintes detalhes:

| Item | Descrição |
| :---- | :---- |
| **Nome** | Localizado abaixo de **MySafe**, exibe o nome do segredo de API. |
| **Tempo de expiração** | Exibe a data e hora em que o acesso o segredo de API expirará.  |
| **Visualizações restantes** | Exibe o número de vezes que segredo de API ainda poderá ser acessado através do link disponibilizado até a expiração. |
| **Url** | Exibe a URL do site onde o segredo de API será utilizado. Clique no botão **Link externo** para acessar a aplicação em que o segredo de API está cadastrado.  |
| **Método** | Exibe o método HTTP na chamada de API. |
| **ID do cliente** | Exibe o `Client ID` . Clique em **Copiar** para enviar a informação para a área de transferência. |
| **Client secret** | Exibe o `Client secret`. Essa informação é sensível. Para visualizá-la, clique em **Exibir.** Clique em **Copiar** para enviar a a informação para a área de transferência.  |
| **Observações** | Exibe observações gerais sobre o segredo de API. Clique no botão **Link externo** para abrir as observações em outra aba. Clique em **Copiar** para enviar a informação para a área de transferência. |

### Tela de arquivo compartilhado

Ao acessar um item compartilhado temporariamente do tipo **arquivo**, o destinatário terá acesso à tela que exibe os seguintes detalhes:

| Item | Descrição |
| :---- | :---- |
| **Nome** | Localizado abaixo de **MySafe**, exibe o nome do arquivo. |
| **Tempo de expiração** | Exibe a data e hora em que o acesso ao arquivo expirará.  |
| **Visualizações restantes** | Exibe o número de vezes que o arquivo ainda poderá ser acessado através do link disponibilizado até a expiração. |
| **Baixar** | Exibe o nome do arquivo e o botão **Download** para baixar o arquivo em seu dispositivo. |
| **Observação** | Exibe observações gerais sobre o arquivo. Clique no botão **Link externo** para abrir as observações em outra aba. Clique em **Copiar** para enviar a informação para a área de transferência. |

### Tela de anotação compartilhada

Ao acessar um item compartilhado temporariamente do tipo **anotação**, o destinatário terá acesso à tela que exibe os seguintes detalhes:

| Item | Descrição |
| :---- | :---- |
| **Nome** | Localizado abaixo de **MySafe**, exibe o nome da anotação. |
| **Tempo de expiração** | Exibe a data e hora em que o acesso à anotação expirará. |
| **Visualizações restantes** | Exibe o número de vezes que a anotação ainda poderá ser acessada através do link disponibilizado até a expiração. |
| **Observação** | Exibe o conteúdo da anotação. Clique no botão **Link externo** para abrir as observações em outra aba. Clique em **Copiar** para enviar a informação para a área de transferência. |
