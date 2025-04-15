# Todas credenciais

Este documento fornece informações sobre a tela do relatório **Credenciais de acesso**, que exibe a lista de credenciais cadastradas no Segura e disponíveis para uso.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Credenciais > Todas credenciais.**

---
## Menu de ações
| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela [Cadastro da credencial](/v4/docs/pt/pam-credential-credentials-registration). |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## **Campos de Busca**
| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as credenciais por seu código de identificação dentro do Segura. |
| **Dispositivo** | Campo de texto | Filtra pelo dispositivo cadastrado no Segura ao qual a credencial está atrelada. |
| **Nome de usuário** | Campo de texto | Filtra pelo de nome de usuário da credencial cadastrado no Segura. |
| **Tipo de credencial** | Menu suspenso | Filtra pelo tipo de credencial. As opções são: *Usuário do domínio*, *Administrador local* e *Locar User*. |
| **Just in time (JIT)** | Menu suspenso | Filtra levando em conta se credencial tem acesso JIT ativado. As opções são **Sim** e **Não**. Limpe o campo para habilitar a opção **Todos**. |
| **Informação adicional** | Campo de texto | Filtra pela informação adicional que tenha sido cadastrada junto à credencial. |
| **Tipo de dispositivo** | Menu suspenso | Filtra de acordo com o tipo de dispositivo. |
| **Modelo** | Campo de texto | Filtra de acordo com o modelo do dispositivo ao qual a credencial está atrelada. |
| **Fabricante** | Menu suspenso | Filtra pelo fabricante do dispositivo que a credencial está atrelada. |
| **Domínio** | Menu suspenso | Filtra pelo domínio da credencial. |
| **Site** | Menu suspenso | Filtra pelo site que está cadastrado no Segura. |
| **Conectividade** | Menu suspenso | Filtra de acordo com o protocolo de conectividade que a credencial possui. |
| **Tags da credencial** | Campo de texto | Filtra de acordo com as tags que estão atreladas à credencial. |
| **Tags do dispositivo** | Campo de texto | Filtra de acordo com as tags que estão atreladas ao dispositivo. |
| **Identificador** | Campo de texto | filtra de acordo com a Identificação da senha para acesso via webservice. |
| **Status** | Menu suspenso | Filtra as credenciais por seu estado de ativação. As opções são **Ativo** e **Inativo**. Limpe o campo para habilitar a opção **Todos**. |
| **Última utilização** | Seletor de data | Selecione a última data em que a credencial foi utilizada. Essa data servirá como data inicial do intervalo do filtro. |
| **Senha preenchida?** | Menu suspenso | Filtra de acordo com o estado de preenchimento do campo Senha da credencial. As opções são **Sim** e **Não.** Limpe o campo para habilitar a opção **Todos**. |

## **Campos do relatório**
* **Nome do dispositivo:** indica o nome do dispositivo no Segura seguido do endereço de IP ou hostname, quando aplicável, por exemplo: `Debian10 (127.0.0.1)`.  
  * O nome do dispositivo é seguido por algumas informações sobre o dispositivo, obedecendo a ordem: Tipo de dispositivo | Modelo do dispositivo | Site do dispositivo | Código do dispositivo, por exemplo: `Server | Ubuntu | Local | 100`.  
    :::(info) (Info)  
    Note que o nome do dispositivo é clicável. Ao clicar no nome do dispositivo você será direcionado para a janela de Cadastro do dispositivo. Para maiores informações sobre essa janela, acesse a referência sobre dispositivos ou o documento sobre como adicionar um dispositivo ao Segura.  
    :::  
* **Código.**  
* **Tipo.**  
* **Just in time (JIT).**  
* **Nome de usuário.**  
* **Adicional:** refere-se a informação adicional. Este campo é preenchido ao cadastrar uma nova credencial, mais especificamente no campo **Informação adicional** do formulário de cadastro de credencial.  
* **Domínio.**  
* **Tags.**  
* **Última consulta.**  
* **Estado da sessão.**  
* **Ações:**  
  * **Iniciar sessão:** inicia a sessão remota.  
  * **Visualizar:** abre a tela [Visualizar credencial](/v4/docs/pt/pam-credential-view-credential).  
  * **Detalhes:** abre a tela [Detalhes credencial](/v4/docs/pt/pam-credential-credentials-details).  
  * **Histórico:** abre a tela **Histórico de senhas da credencial**.  
  * **Editar:** abre a tela [Cadastro da credencial](/v4/docs/pt/pam-credential-credentials-registration).  
  * **Clonar:** cria uma cópia idêntica do registro. 
  * **Remote Desktop:** realiza o download do arquivo `.rdp` para acessar a sessão via Conexão de Área de Trabalho Remota.  
  * **Putty:** realiza o download do arquivo `.bat`para acessar a sessão via **Putty**.  
  * **Acesso excepcional:** abre a tela de cadastro de Acesso excepcional.  
  * **Excluir:** exclui o registro da credencial, na janela pop-up clique em **Sim** para confirmar a ação.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
## Tela Histórico de senhas da credencial
| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Data do histórico** | Seletor de data | Selecione o período de busca das ações realizadas na credencial. |
* **Código:** código de identificação dentro do Segura.  
* **Dispositivo:** dispositivo cadastrado no Segura ao qual a credencial está atrelada. 
* **Nome de usuário:** nome de usuário da credencial.  
* **Origem:** o tipo de ação que foi realizada na credencial.  
* **Data do histórico:** data e hora em que a ação ocorreu.  
* **Atual:** indicador se aquele registro é a ação mais atual realizada na credencial. As informações podem ser **Sim** ou **-**.  
* **Ações:**  
  * **Visualizar:** abre a tela [Visualizar credencial](/v4/docs/pt/pam-credential-view-credential).
