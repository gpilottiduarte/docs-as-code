# Email de itens compartilhados

Neste documento, você vai encontrar todas as informações sobre o email e telas em que um item é compartilhado com um uma pessoa que não possui conta no **MySafe**.

## Email de acesso
 
Quando um item do **MySafe** é compartilhado de forma temporária com uma pessoa que não possui conta no **MySafe**, essa pessoa recebe um email com a notificação do compartilhamento cujo título é "**Uma nova informação foi compartilhada com você**".


No corpo do email, o destinatário verá uma caixa de texto do senhasegura com os detalhes do item compartilhado.


| Item | Descrição |
| --- | --- |
| **Introdução** | Mensagem introdutória informando o nome da pessoa que compartilhou o novo item. |
| **Nome** | Nome do item compartilhado. |
| **Tipo** | Tipo do item compartilhado. As opções possíveis são: *Senha, Anotação, Arquivo* e *Segredo de API*. |
| **Data de expiração** | Data e hora em que o link com o acesso ao item expirará. Formatos `DD/MM/AAAA` e `HH:MM:SS`. |
| **Máximo de visualizações** | O número máximo de vezes que o item poderá ser acessado através do link disponibilizado até a expiração. |
| **Acessar agora** | Botão que direciona o destinatário à tela de autenticação. |
| **Link** | Link de acesso alternativo para o caso de não funcionamento do botão **Acessar agora**. |


## Email com token de autenticação

Após clicar em **Acessar agora** ou copiar e colar em seu navegador, o destinatário receberá outro email com o título **MySafe - Seu token de autenticação**.


No corpo do email, o destinatário verá uma caixa de texto do senhasegura com os detalhes do token de acesso.


| Item | Descrição |
| --- | --- |
| **Introdução** | Mensagem introdutória informando a validade do token de autenticação. |
| **Token de autenticação** |Token de autenticação de 8 dígitos que deve ser copiado e colado na tela de autenticação.|

## Tela Autenticação

Em posse do **Token de autenticação**, o destinatário deverá colá-lo na tela de autenticação que contém as seguintes informações.

| Item | Descrição |
| --- | --- |
| **Token** | Caixa de texto para inserção do token de autenticação.  |
| **Token de autenticação** |Caixa de texto para inserção do token de autenticação de 8 dígitos. Caso deseje, utilize o botão **Teclado virtual**.|
| **Não recebeu? Clique aqui para reenviar** |Texto clicável para novo envio do token de autenticação em caso de não recebimento. Após clicado, o texto muda para **"Não recebeu? Enviado!** |
| **Enter** | Botão que direciona para a tela com os detalhes do item compartilhado. |


### Tela de senha compartilhada

Ao acessar um item compartilhado temporariamente do tipo **senha**, o destinatário terá acesso à tela que exibe os seguintes detalhes.

| Item | Descrição |
| --- | --- |
| **Nome** | Localizado abaixo de **MySafe**, exibe o nome da senha. |
| **Tempo de expiração** | Data e hora em que o acesso à senha expirará. Formatos `DD/MM/AAAA` e `HH:MM:SS`. |
| **Visualizações restantes** |O número de vezes que a senha ainda poderá ser acessada através do link disponibilizado até a expiração.|
| **Url** | Campo que exibe a URL do site onde a senha será utilizada e um ícone de **link externo** que direciona para o site. |
| **Nome do usuário** | Campo que exibe o nome do usuário associado à senha e um ícone de **duas folhas de papel** que copia essa informação. |
| **Senha** | Campo que exibe a senha. Essa informação é sensível. O ícone de **olho** exibe a senha e o ícone de **duas folhas de papel** copia a senha para a área de transferência. |
| **Token** | Campo que exibe o token TOTP associada à senha em caso de conta com autenticação multi-fator e um relógio que mostra a validade de token.|
| **Observações** |Observações gerais sobre a senha juntamente com um ícone para visualizar as observações em outra tela e outro ícone para copiá-las para a área de transferência. |

### Tela de segredo de API compartilhado

Ao acessar um item compartilhado temporariamente do tipo **segredo de API**, o destinatário terá acesso à tela que exibe os seguintes detalhes.

| Item | Descrição |
| --- | --- |
| **Nome** | Localizado abaixo de **MySafe**, exibe o nome do segredo de API. |
| **Tempo de expiração** | Data e hora em que o acesso o segredo de API expirará. Formatos `DD/MM/AAAA` e `HH:MM:SS`. |
| **Visualizações restantes** |O número de vezes que segredo de API ainda poderá ser acessado através do link disponibilizado até a expiração.|
| **Url** | Campo que exibe a URL do site onde o segredo de API será utilizado e um ícone de **link externo** que direciona para o site. |
| **Método** | Campo que exibe o método HTTP na chamade de API.|
| **ID do cliente** | Campo que o `Client ID` e o ícone de **duas folhas de papel** para copiar o segredo de API para a área de transferência. |
| **Client secret** | Campo que exibe o `Client secret`. Essa informação é sensível. O ícone de **olho** exibe o conteúdo e o ícone de **duas folhas de papel** o copia para a área de transferência. |
| **Observações** |Observações gerais sobre o segredo de API juntamente com um ícone para visualizar as observações em outra tela e outro ícone para copiá-las para a área de transferência. |

### Tela de arquivo compartilhado
 
Ao acessar um item compartilhado temporariamente do tipo **arquivo**, o destinatário terá acesso à tela que exibe os seguintes detalhes.

| Item | Descrição |
| --- | --- |
| **Nome** | Localizado abaixo de **MySafe**, exibe o nome do arquivo. |
| **Tempo de expiração** | Data e hora em que o acesso ao arquivo expirará. Formatos `DD/MM/AAAA` e `HH:MM:SS`. |
| **Visualizações restantes** |O número de vezes que o arquivo ainda poderá ser acessado através do link disponibilizado até a expiração.|
| **Baixar** |Campo que exibe o nome do arquivo e um ícone de **download** para baixar o arquivo em seu dispositivo.|
| **Observação** |Observações gerais sobre o arquivo juntamente com um ícone para visualizar as observações em outra tela e outro ícone para copiá-las para a área de transferência.|

###  Tela de anotação compartilhada

Ao acessar um item compartilhado temporariamente do tipo **anotação**, o destinatário terá acesso à tela que exibe os seguintes detalhes.

| Item | Descrição |
| --- | --- |
| **Nome** | Localizado abaixo de **MySafe**, exibe o nome da anotação. |
| **Tempo de expiração** | Data e hora em que o acesso à anotação expirará. Formatos `DD/MM/AAAA` e `HH:MM:SS`. |
| **Visualizações restantes** |O número de vezes que a anotação ainda poderá ser acessada através do link disponibilizado até a expiração.|
| **Observação** |O conteúdo da anotação juntamente com um ícone para visualizar as observações em outra tela e outro ícone para copiá-las para a área de transferência. |

