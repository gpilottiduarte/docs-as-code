# Chaves de acesso

Este documento fornece informações sobre a tela do relatório **Chaves de acesso** que exibe as chaves de acesso criadas para integrar uma aplicação ao **MySafe**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **MySafe.**  
2. No menu lateral, selecione **Integrações \> Meus apps.**  
   
---

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela **Adicionar chave de acesso.** |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV* e *Agendar relatório.* |

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Aplicação** | Campo de texto | Filtra as chaves de acesso pelo nome de identificação da aplicação. |
| **Tags** | Campo de texto | Filtra as chaves de acesso pelas palavras-chave associadas. |
| **Criptografado** | Menu suspenso | Filtra as chaves de acesso com base no uso em chamadas de API, considerando se informações sensíveis, como senhas e anotações, retornam criptografadas. As opções disponíveis são **Sim** (informações criptografadas) ou **Não** (informações não criptografadas). Limpe o campo para habilitar a opção **Todos.**  |
| **Data de expiração** | Seletor de data | Filtra as chaves de acesso pelo período de expiração. |
| **Data de criação** | Seletor de data | Filtra as chaves de acesso pelo período em que foram adicionadas ao **MySafe**. |
 

## Campos do relatório

* **Aplicação**.  
* **Tags**.  
* **Informações**: itens a que a chave tem acesso.  
* **Método de autenticação**: método de autenticação usado. Por padrão, o **MySafe** utiliza o método vOAuth 2.0.  
* **Criptografado**.  
* **Data de expiração**.  
* **Data de criação**.  
* **Ações**:  
  * **Visualizar**: abre a tela **Visualizar segredo** com informações sobre a chave de acesso.  
  * **Editar:** abre a tela **Editar chave de acesso.**  
  * **Chave de descriptografia:** abre o pop-up de confirmação de download da chave de descriptografia com as opções **Sim** ou **Não.** Disponível para chaves de acesso com a opção **Criptografar dados sensíveis** ativada.  
  * **Clonar:** abre o pop-up de confirmação de clonagem da chave de acesso com as opções **Sim** ou **Não.**  
  * **Revogar:** abre o pop-up de confirmação de revogação da chave de acesso com as opções **Sim** ou **Não.**  
    
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

## Tela Visualizar segredo

Esta tela exibe detalhes sobre a chave de acesso selecionada.

| Item | Descrição |
| :---- | :---- |
| **Método de autenticação** | Exibe o método de autenticação usado pela chave de acesso. Por padrão, o **MySafe** usa o método OAuth 2.0. |
| **Aplicação** | Exibe o nome de identificação da aplicação vinculada à chave de acesso. |
| **Client ID** | Exibe o código de identificação da aplicação cliente (`client_id`) no fluxo de autorização OAuth 2.0. |
| **Client Secret** | Exibe a senha (`client_secret`) utilizada para autenticar a aplicação cliente no fluxo de autorização OAuth 2.0. |
| **Descrição** | Exibe informações sobre a aplicação vinculada à chave de acesso. |
| **Data de expiração** | Exibe a data e hora de expiração da chave de acesso. |
| **Criptografar dados sensíveis?** | Indica se informações sensíveis, como senhas e anotações, retornarão criptografadas nas chamadas à API realizadas com a chave de acesso. As opções são **Sim** ou **Não.** |
| **Validação de certificados?** | Indica a existência de um *fingerprint* do certificado. As opções são **Sim** ou **Não.** |
| **IPs autorizados** | Exibe os endereços de IP autorizados a realizar chamadas à API com a chave de acesso. |
| **HTTP referrers autorizados** | Exibe as URLs autorizadas a utilizar a chave de acesso com base no cabeçalho `HTTP referrer`. |
| **Dados** | Exibe os dados que podem ser acessados com a chave de acesso. |



## Telas Adicionar/Editar chave de acesso

As telas **Adicionar chave de acesso** e **Editar chave de acesso** compartilham os mesmos campos.

### Aba Aplicação

Nesta aba, o usuário define as configurações da aplicação vinculadas à chave de acesso.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome\*** | Campo de texto | Sim | Nome de identificação da aplicação. |
| **Descrição** | Campo de texto | Não | Informações gerais sobre a aplicação. |
| **Tags** | Campo de texto | Não | Palavras-chave para categorizar a aplicação.  |

### Aba Segurança

Nesta aba, o usuário define as configurações de segurança da chave de acesso.
                                                                                                                                                                                                                                                                                                          
#### Seção Criptografar dados sensíveis

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Criptografar dados sensíveis** | Caixa de seleção | Não | Ativa ou desativa a criptografia de informações sensíveis como senhas e anotações nas respostas das chamadas à API.  |

#### Seção IPs autorizados (use * para permitir qualquer IP)


| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Adicionar**   | Botão | Não | Habilita o campo  **Endereço** para inserir endereços de IP autorizados a utilizar a chave de acesso. O uso do caractere **\*** (asterisco) permite o acesso de qualquer endereço IP. |
| **Selecionar itens** | Botão | Não | Seleciona endereços de IP adicionados e habilita o botão **Remover selecionados**.  |


#### Seção HTTP referrers autorizados (por padrão, qualquer origem é autorizada)



| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Adicionar**   | Botão | Não | Habilita o campo  **Endereço** para inserir URLs autorizadas a utilizar a chave de acesso usando um `HTTP referer`. Se nenhuma URL for inserida, qualquer origem será permitida. |
| **Selecionar itens** | Caixa de seleção | Não | Seleciona URLs autorizadas adicionadas e habilita o botão **Remover selecionados**.  |

#### Seção Validação de certificados



| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Fingerprint do certificado**  | Campo de texto | Não | Insere o *fingerprint* do certificado para proteção adicional.  |


### Aba Dados

Nesta aba, o usuário define os dados do **MySafe** a que a chave terá acesso.


| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Acesso total** | Caixa de seleção | Não | Ativa ou desativa o acesso da aplicação a todos os dados do **MySafe.**  |
| **Especificar dados** | Menu suspenso | Não | Exibe um menu suspenso para selecionar as informações a que a aplicação terá acesso. Disponível caso a caixa de seleção **Acesso total** esteja desmarcada. |

### Aba Período

Nesta aba, o usuário define o período de expiração da chave de acesso. Se não for definida, a expiração deverá ser feita manualmente através da opção **Revogar**.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Dia** | Seletor de data | Não | Define o dia de expiração da chave de acesso. |
| **Hora** | Seletor de hora | Não | Define a hora de expiração da chave de acesso. |

### Aba Revisão

Esta aba exibe um resumo das configurações do cadastro de uma chave de acesso com botões para **Voltar** ou **Salvar.**