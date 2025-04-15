# Autorizações

Este documento fornece informações sobre a tela do relatório **Autorizações**, que exibe as autorizações vinculadas às aplicações que consumirão as APIs **A2A**.

Saiba mais em [APIs A2A](/v4/docs/pt/apis-a2a).

##  Pré-requisitos

* Permissão de administrador do sistema.


## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **A2A**.  
2. No menu lateral, selecione **Aplicações \> Autorizações.**

---
## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar aplicação** | Botão | Direciona para a tela **Adicionar aplicação**. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Aplicação** | Menu suspenso | Filtra as autorizações vinculadas a aplicações específicas. |
| **Cód. Autorização** | Campo de texto | Filtra as autorizações pelo código de identificação no Segura. |
| **Nome** | Campo de texto | Filtra as autorizações por seu nome de identificação. |
| **Ambiente** | Campo de texto | Filtra as autorizações pelo ambiente em que são utilizadas. |
| **Sistema** | Campo de texto | Filtra as autorizações pelo sistema que consumiu os dados da API. |
| **Data de criação** | Seletor de data | Filtra as autorizações pelo período em que foram criadas. |
| **Status** | Menu suspenso | Filtra as autorizações por seu estado de ativação. As opções são **Ativo** e **Inativo.** Limpe o campo para habilitar a opção **Todos**. |



## Campos do relatório

* **Cód. Autorização:** exibe a **Aplicação** vinculada à(s) autorização(ões) e o código de identificação da(s) autorização(ões).  
* **Nome.**  
* **Ambiente.**  
* **Sistema.**  
* **Data de criação:** exibe a data e hora de criação da autorização  
* **Permissão do recurso PAM:** exibe a permissão de acesso ao **PAM Core**. As opções são **Apenas leitura** e **Leitura e escrita**.   
* **Status.**  
* **Ações:**  
  * **Adicionar autorização:** abre a tela **Adicionar autorização.**  
  * **Download:** exibe a chave de descriptografia para visualizar informações sensíveis protegidas nas respostas às chamadas de API. As informações consideradas sensíveis são **credenciais** do recurso **PAM Core** e ***fingerprint*** do recurso **Sistema.** Saiba mais em Como descriptografar dados sensíveis usando uma chave privada.  
  * **Visualizar:** abre a tela **Autorização da aplicação.**  
  * **Editar:** abre a tela **E	ditar autorização.**

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

### Tela Autorização da aplicação

Esta tela exibe informações sobre a autorização da aplicação selecionada.

* **Método de autenticação:** método de autenticação utilizado pela autorização.  
* **Aplicação:** nome de identificação da aplicação.  
* **Identificador do cliente:** código único que identifica a aplicação, variando conforme o método de autenticação:  
  * **Client ID:** utilizado para autenticação via OAuth 2.0.  
  * **Consumer key:** utilizado para autenticação via OAuth 1.0.  
  * **Client ID:** utilizado para autenticação via AWS.  
* **Chave secreta:** segredo utilizado para autenticar a aplicação, variando conforme o método de autenticação:  
  * **Client Secret:** utilizado para autenticação via OAuth 2.0. Informação sensível. Clique em **Exibir** para visualizar.  
  * **Consumer Secret:** utilizado para autenticação via OAuth 1.0. Informação sensível. Clique em **Exibir** para visualizar.  
  * **Secret Access Key/Chave de acesso secreta:** utilizado para autenticação via AWS. Informação sensível. Clique em **Exibir** para visualizar.  
* **Token:** utilizado para autenticação via OAuth 1.0.  
* **Token secret:** utilizado para autenticação via OAuth 1.0.  
* **Amazon ARNs:** identificadores únicos para os recursos da Amazon.  
* **Credenciais:** informações das credenciais que a autorização tem acesso.

### Tela Adicionar/Editar autorização

As telas **Adicionar autorização** e **Editar autorização** compartilham os mesmos campos.

#### Aba Configurações

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Data de expiração** | Seletores de data e hora | Não | Define o dia e hora de expiração da autorização.  Deixe em branco e utilize o componente **Status \> Inativo** para desativar a autorização manualmente.  |
| **Status\*** | Botão de opção | Sim | Define o status da autorização como **Ativo** ou **Inativo.**   |
| **Sistema** | Menu suspenso | Não | Seleciona o sistema que irá consumir os dados da API. |
| **Ambiente** | Menu suspenso | Não | Seleciona o ambiente em que a aplicação será utilizada. |

####  Aba Segurança 

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Recursos autorizados** | Caixas de seleção | Não | Seleciona os recursos disponíveis para a aplicação. As opções são *PAM Core, Certificate Manager, Task Manager, Dashboards, Web Proxy Session, Usuários, Sistema* e *A2A.* |
| **Ativar a criptografia de informações sensíveis?\*** | Botão de opção | Sim | Define se as informações sensíveis serão criptografadas. As opções são **Sim** ou **Não.**   |
| **Permissão do recurso PAM\*** | Botão de opção | Sim | Define o acesso ao **PAM Core** como **Apenas leitura** ou **Leitura e escrita.** |

#### Seção IPs autorizados (use \* para permitir qualquer IP)


| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Adicionar**   | Botão | Não | Habilita o campo  **Endereço** para inserir endereços de IP autorizados a utilizar a autorização. O uso do caractere **\*** (asterisco) permite o acesso de qualquer endereço IP. |
| **Selecionar itens** | Caixa de seleção | Não | Seleciona endereços de IP adicionados e habilita o botão **Remover selecionados**.  |



#### Seção HTTP referrers autorizados (por padrão, qualquer origem é autorizada)


| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Adicionar**   | Botão | Não | Habilita o campo  **Endereço** para inserir URLs autorizadas a utilizar a autorização usando um `HTTP referrer`. Se nenhuma URL for inserida, qualquer origem será permitida. |
| **Selecionar itens** | Caixa de seleção | Não | Seleciona URLs autorizadas adicionadas e habilita o botão **Remover selecionados**.  |

#### Seção Validação de certificados



| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Fingerprint do certificado**  | Campo de texto | Não | Insere o *fingerprint* do certificado para proteção adicional.  |


#### Aba Credencial

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Credencial de acesso** | Menu suspenso | Não | Seleciona a credencial vinculada à autorização. |
| **Criar uma credencial nova** | Caixa de seleção | Não | Permite criar uma nova credencial de acesso para a autorização.   |
| **Dispositivo** | Menu suspenso | Não | Seleciona o dispositivo vinculado à nova credencial de acesso. |
| **Nome de usuário** | Campo de texto | Não | Define o nome de usuário da nova credencial de acesso. |
| **Senha** | Campo de texto | Não | Define a senha da nova credencial de acesso. |
| **Adicionar** | Botão | Não | Adiciona a credencial à autorização. |
| **Credenciais** | Tabela | Não | Lista as credenciais adicionadas e suas informações: *Código, Credencial, Dispositivo* e *Tipo*.  |
| **Selecionar itens** | Caixa de seleção | Não | Seleciona as credenciais na tabela **Credenciais** e habilita o botão **Remover selecionados.** |

#### Aba Dispositivos

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Adicionar**  | Botão | Não | Abre o modal **Dispositivos**. |
| **Selecionar itens** | Caixa de seleção | Não | Seleciona os registros na tabela **Dispositivos** e habilita o botão **Remover selecionados.** |
| **Dispositivos** | Tabela | Não | Lista os dispositivos adicionados e suas informações: *Código, Nome, Gerenciamento, Tipo* e *Fabricante.*   |

#### Aba Informações protegidas

:::(info) (Info)  
A partir da versão 3.26, o módulo **Informações protegidas** foi substituído pelo **MySafe.** Saiba mais em [MySafe](/v4/docs/pt/mysafe).  
:::

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Adicionar**  | Botão | Não | Abre o modal **Informações protegidas**. |
| **Selecionar itens** | Caixa de seleção | Não | Seleciona as informações na tabela **Informações protegidas** e habilita o botão **Remover selecionados.** |
| **Informação protegida** | Tabela | Não | Lista as informações protegidas e seus detalhes: *Código, Nome, Tipo e* *Proprietário.*   |

#### Aba Revisão

Esta aba exibe um resumo das configurações da autorização com botões para **Voltar** ou **Salvar.**
