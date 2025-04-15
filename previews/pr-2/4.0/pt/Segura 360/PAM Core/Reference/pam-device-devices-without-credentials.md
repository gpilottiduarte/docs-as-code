# Dispositivos sem credenciais

Este documento fornece informações sobre a tela do relatório **Dispositivos sem credenciais**, que exibe os dispositivos cadastrados sem credenciais.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **PAM Core.**  
2. No menu lateral, selecione **Dispositivos > Dispositivos sem credenciais.**

ou

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Dispositivos**.  
2. No menu lateral, selecione **Dispositivos sem credenciais.**

---
## Menu de ações

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela **Cadastro do dispositivo.** |
| **Ações** | Menu suspenso | Exibe as opções, *Imprimir relatório, Exportar CSV* e *Agendar relatório.* |

## Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as importações pelo seu código de identificação dentro do Segura. |
| **Nome** | Campo de texto  | Filtra pelo nome do dispositivo cadastrado no Segura.  |
| **Gerenciamento** | Campo de texto | Filtra pelo endereço de rede, nome de host ou endereço IP para que o Segura se conecte a esse dispositivo. |
| **Tipo** | Menu suspenso | Filtra pelo tipo de dispositivo cadastrado. |
| **Fabricante** | Menu suspenso | Filtra pelo fabricante do dispositivo escolhido pelo usuário. |
| **Modelo** | Campo de texto | Filtra pelo modelo escolhido pelo usuário. |
| **Site** | Menu suspenso | Filtra pelo localidade de acesso ao dispositivo. |
| **Conectividade** | Menu suspenso | Filtra pelo tipo de conexão associada ao dispositivo. |
| **Domínios** | Campo de texto | Filtra pelos domínios cadastrados pelo usuário. |
| **Tags** | Campo de texto | Filtra pelas tags de identificação do dispositivo. |
| **Conectável** | Menu suspenso | Filtra pelo status de conexão do dispositivo. As opções são **Sim** e **Não**. Limpe o campo para habilitar a opção **Todos**. |
| **Status** | Menu suspenso | Filtra os dispositivos em seu estado de conexão, sejam eles conectados ou não. As opções são **Ativo** e **Inativo**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código**.  
* **Nome**.  
* **Gerenciamento**.  
* **Tipo**.  
* **Fabricante**.  
* **Modelo.**  
* **Site.**  
* **Conectividade:** informa se o dispositivo é conectável. As opções são *Conectável* e *Não conectável*.  
* **Domínio.**  
* **Tags.**  
* **Status.**  
* **Ações:**  
  * **Editar:** abre a tela [Cadastro de dispositivo](/v4/docs/pt/pam-device-device-registration), para que as alterações necessárias sejam realizadas.  
  * **Clonar:** cria uma cópia idêntica do registro que está sendo clonado.  
  * **Visualizar:** abre a tela [Credenciais de acesso](/v4/docs/pt/pam-credential-all-credentials).  
  * **Desativar:** desativa o dispositivo, no pop-up clique em **Sim** para confirmar a ação.  
  * **Adicionar credencial:** abre a tela [Cadastro da credencial](/v4/docs/pt/pam-credential-credentials-registration) para que seja cadastrado uma credencial para este dispositivo.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::