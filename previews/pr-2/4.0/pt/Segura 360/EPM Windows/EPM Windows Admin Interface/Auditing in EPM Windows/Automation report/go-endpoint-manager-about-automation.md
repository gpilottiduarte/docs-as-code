# Sobre automação

Neste artigo, exploraremos o funcionamento, características e principais funcionalidades da automação, fornecendo uma visão abrangente sobre o assunto.

* * *

## O que é a automação do EPM Windows?
A aplicação de automação permite que você automatize a autenticação em aplicativos instalados ou páginas web acessadas. Essa automação funciona para aplicações e páginas acessadas diretamente em sua workstation com o **EPM Windows** instalado. A automação preenche automaticamente o usuário e senha usando a credencial selecionada.

* * *

## Como funciona a automação do EPM Windows?
A Automação executa tanto as automações configuradas no módulo **EPM Windows** como as automações configuradas no **RemoteApp** no **PAM Core**. O **Automation** eleva privilégios quando executa a automação.

* * *

## Como a gravação de sessão de automações funciona?
Para gravar a automação cadastrada no **EPM Windows**, ative a opção de gravação nos parâmetros gerais e na lista de acesso. Para entender mais sobre como a gravação funciona, suponha que você ative apenas o parâmetro geral e deixe a lista de acesso inativa. Nesse caso, o sistema registrará apenas a execução da automação do **RemoteApp**. Assim, a tabela abaixo mostra quatro situações possíveis:


| Lista de acesso - Gravar a sessão desses aplicativos? | Parâmetro geral/Parâmetro segregado - Permitir a gravação de sessão? | Automação |
| --- | --- | --- |
| 	Ativo	|	Inativo	|	Não grava.	|
| 	Ativo	|	Ativo	|	Grava.	|
| 	Inativo	|	Ativo	|	Grava apenas RemoteApp.	|
| 	Inativo	|	Inativo	|	Não grava.	|

* * *

## Máscaras para o RemoteApp no EPM Windows
Esta tabela mostra as máscaras suportadas para o **RemoteApp** no **EPM Windows** na execução da automação.

| TAGs | Descrição |
| --- | --- |
| 	[username]	|	Utiliza o campo nome do usuário da credencial.	|
| 	[password]	|	Utiliza o campo senha da credencial.	|
| 	[domain]	|	Utiliza o campo domínio da credencial.	|
| 	[hostname]	|	Utiliza o nome do dispositivo.	|
| 	[host_ip]	|	Utiliza o IP do dispositivo.	|

* * *

## Descrição dos campos de cadastro da automação
Ao cadastrar uma automação alguns campos devem ser preenchidos. Veja a descrição de cada um desses campos que podem te ajudar no processo de preenchimento. 

### TAGs
Esta seção contém uma breve explicação sobre o que é cada uma das TAGs que podem ser usadas no cadastro da automação. As TAGs utilizadas iram variar conforme a finalidade para qual a automação está sendo criada.

#### Descrição
Você pode utilizar as TAGs abaixo para construir sua automação:

* **[#USERNAME#]:** username da credencial.
* **[#PASSWORD#]:** senha da credencial.
* **[#DOMAIN#]:** domínio da credencial.
* **[#HOSTNAME#]:** nome do hostname.
* **[#HOST_IP#]:** IP do hostname.

### Script 
Nesta seção você terá uma explicação de como o Script é criado e quais ações podem estar contidas.

#### Descrição
O campo **Script** é a sequência já programada de ações que compõem a automação. As ações podem ser reorganizadas clicando e arrastando, alterando a ordem de execução. Ao clicar em uma determinada ação, essa será aberta para edição de suas propriedades.

Você pode escolher as ações que deseja automatizar. Por exemplo, você pode automatizar cliques usando a ação "Button", navegar até o menu desejado utilizando a ação "Menu" e inserir textos utilizando a ação "Input". Ao clicar em uma das ações, ela é adicionada como último elemento no **Script**. Suas propriedades podem ser editadas ou excluídas.

### Ações
Nesta seção você terá uma breve descrição sobre cada ação que pode fazer parte do campo Script.

#### Descrição

* **Button:** quando se deseja realizar um “click” em um elemento que atua como botão. A propriedade **label** deve ser preenchida com o texto visível que o define.
* **Menu:** caminho do menu da aplicação. Coloque o caminho na propriedade **path**. Separe os níveis com ponto e vírgula. Por exemplo, escrever:  `Editar;Preferências;Fonte` é o equivalente a automatizar o caminho **Editar ➔ Preferências ➔ Fonte.**
* **Input:** texto da aplicação. Preencha a propriedade **label** com o nome visível ao usuário, que identifica o campo. E preencha **value** com o valor a ser inserido no campo da aplicação destino utilizando as **TAGs**.

* * *

:::(Internal) (Private notes)
## Próximos passos 

* Como configurar os parâmetros para gravação
* Como criar uma automação para RemoteApp
* Como criar uma automação para aplicativo
* Como criar uma automação para web
:::

