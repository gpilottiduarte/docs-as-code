# Aplicações

Este documento fornece informações sobre a tela do relatório **Aplicações**, que exibe informações sobre as aplicações autorizadas a consumir as APIs disponíveis.  

Saiba mais em [APIs A2A](/v4/docs/pt/apis-a2a).

## Pré-requisitos
* Permissão de administrador do sistema.


## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **A2A**.  
2. No menu lateral, selecione **Aplicações > Aplicações.**

---
## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela **Adicionar aplicação**. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as aplicações por seu código de identificação no Segura. |
| **Nome** | Campo de texto | Filtra as aplicações por seu nome de identificação. |
| **Sistema** | Campo de texto | Filtra as aplicações pelo sistema em que podem ser utilizadas. |
| **Ambiente** | Campo de texto | Filtra as aplicações pelo ambiente em que podem ser utilizadas. |
| **Tags** | Campo de texto | Filtra as aplicações pelas palavras-chaves associadas. |
| **Método de autenticação** | Menu suspenso | Filtra as aplicações pelo método de autenticação utilizado. As opções são *Não, OAuth 1.0, OAuth 2.0* e *AWS.* |
| **Status** | Menu suspenso | Filtra as aplicações por seu estado de ativação. As opções são **Ativo** e **Inativo.** Limpe o campo para habilitar a opção **Todos**. |
| **Criada em** | Seletor de data | Filtra as aplicações pelo período em que foram criadas. |



## Campos do relatório

* **Código.**  
* **Nome.**  
* **Sistemas.**  
* **Ambientes.**  
* **Tags.**  
* **Status.**  
* **Método de autenticação.**  
* **Criada em.**  
* **Ações:**  
  * **Autorizações:** abre a tela **Autorização da aplicação**.  
  * **Editar:** abre a tela **Editar aplicação**.  
  * **Visualizar:** abre a tela **Configuração da aplicação**.

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

### Tela Adicionar/Editar aplicação

Esta seção fornece informações sobre as telas **Adicionar aplicação** e **Editar aplicação** que compartilham os mesmos campos.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome da aplicação\*** | Campo de texto | Sim | Nome de identificação da aplicação. |
| **Utilizar assinatura OAuth\*** | Menu suspenso | Sim | Seleciona o método de autenticação utilizado. As opções são: *Não, OAuth 1.0, OAuth 2.0* e *AWS*.   |
| **Status\*** | Botões de opção | Sim | Define o status da aplicação como **Ativo** ou **Inativo**. |
| **Tags** | Campo de texto | Não | Palavras-chave para categorizar a aplicação. |
| **Descrição** | Campo de texto | Não | Informações adicionais sobre a aplicação. |
| **Adicionar (Amazon AWS ARNs)** | Botão | Não | Adiciona ARNs à aplicação caso o método de autenticação escolhido seja AWS. Saiba mais em [Credenciais de segurança da AWS](https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/security-creds.html#access-keys-and-secret-access-keys). |

####  Seção Amazon AWS ARNs

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Adicionar**  | Botão | Não | Adiciona ARNs à aplicação caso o método de autenticação escolhido seja AWS. Saiba mais em [Credenciais de segurança da AWS](https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/security-creds.html#access-keys-and-secret-access-keys). |
| **Selecionar itens** | Caixa de seleção | Não | Seleciona os registros na tabela **ARN** e habilita o botão **Remover selecionados.** |



### Tela Configuração da aplicação 

A tela **Configuração da aplicação** exibe todos os detalhes relacionados à aplicação criada.

* **Método de autenticação:** método de autenticação utilizado pela aplicação.  
* **Aplicação:** nome de identificação da aplicação.  
* **Identificador do cliente:** código único que identifica a aplicação, variando conforme o método de autenticação:  
  * **Client ID:** usado para autenticação via OAuth 2.0.  
  * **Consumer key:** usado para autenticação via OAuth 1.0.  
  * **Access key ID/ID de chave de acesso:** usado para autenticação via AWS.  
* **Chave secreta:** segredo utilizado para autenticar a aplicação, variando conforme o método de autenticação:  
  * **Client Secret:** usado para autenticação via OAuth 2.0. Informação sensível. Clique em **Exibir** para visualizar.  
  * **Secret Access Key/Chave de acesso secreta:** usado para autenticação via AWS. Informação sensível. Clique em **Exibir** para visualizar.  
* **Token:** utilizado para autenticação via OAuth 1.0.  
* **Token secret:** utilizado para autenticação via OAuth 1.0.  
* **Amazon ARNs:** identificadores únicos para os recursos da Amazon.  
* **Sistema:** sistema onde a autorização da aplicação será utilizada. Informação disponível após a criação de uma autorização para a aplicação.  
* **Ambiente:** ambiente onde a autorização da aplicação será utilizada. Informação disponível após a criação de uma autorização para a aplicação.  
* **Credenciais:** informações das credenciais que a autorização tem acesso.

