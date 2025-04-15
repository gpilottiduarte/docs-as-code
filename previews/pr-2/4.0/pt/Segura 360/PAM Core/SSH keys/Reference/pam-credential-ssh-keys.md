# Chaves SSH

Este documento fornece informações sobre a tela do relatório **Chaves SSH**, que exibe a lista de chaves SSH cadastradas no Segura.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Credenciais > Chaves SSH > Chaves SSH.**

---
## Menu de ações
| Item  | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela Cadastro da chave SSH. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de Busca
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra a chave SSH por seu código de identificação dentro do Segura. |
| **Dispositivo** | Campo de texto | Filtra pelo dispositivo cadastrado no Segura ao qual a chave SSH está atrelada. |
| **Nome de usuário** | Campo de texto | Filtra pelo de nome de usuário da chave SSH cadastrado no Segura. |
| **Nome da chave** | Campo de texto | Filtra pelo nome de cadastro da chave SSH. |
| **Tipo de dispositivo** | Menu suspenso | Filtra de acordo com o tipo de dispositivo. |
| **Modelo** | Campo de texto | Filtra de acordo com o modelo do dispositivo ao qual a chave SSH está atrelada. |
| **Site** | Menu suspenso | Filtra pelo site que está cadastrado no Segura. |
| **Tags da credencial** | Campo de texto | Filtra de acordo com as tags que estão atreladas à chave SSH. |
| **Tags do dispositivo** | Campo de texto | Filtra de acordo com as tags que estão atreladas ao dispositivo. |
| **Status** | Menu suspenso | Filtra as chaves SSH por seu estado de ativação. As opções são **Ativo** e **Inativo**. Limpe o campo para habilitar a opção **Todos**. |
| **Última utilização** | Seletor de data | Selecione a última data em que a chave SSH foi utilizada. Essa data servirá como data inicial do intervalo do filtro. |

## Campos do relatório
* **Nome do dispositivo:** indica o nome do dispositivo no Segura seguido do endereço de IP ou hostname, quando aplicável, por exemplo: `Debian10 (127.0.0.1)`.  
  * O nome do dispositivo é seguido por algumas informações sobre o dispositivo, obedecendo a ordem: Tipo de dispositivo | Modelo do dispositivo | Site do dispositivo | Código do dispositivo, por exemplo: `Server | Ubuntu | Local | 100`.  
    :::(info) (**Info**)  
    Note que o nome do dispositivo é clicável. Ao clicar no nome do dispositivo você será direcionado para a janela de Cadastro do dispositivo. Para maiores informações sobre essa janela, acesse a referência sobre dispositivos ou o documento sobre como adicionar um dispositivo ao Segura.  
    :::  
* **Código.**  
* **Nome de usuário.**  
* **Nome da chave.**  
* **Tags.**  
* **Última consulta.**  
* **Estado da sessão.**  
* **Ações:**  
  * **Iniciar uma sessão com a chave:** inicia a sessão remota utilizando a chave SSH.  
  * **Visualizar chave:** abre a tela **Visualizar chave SSH**.  
  * **Editar:** abre a tela [Cadastro da chave SSH](/v4/docs/pt/pam-credential-ssh-keys-registration).  
  * **Detalhes:** abre a tela [Chave SSH](/v4/docs/pt/pam-credential-ssh-keys-details).  
  * **Histórico:** abre a tela **Histórico da chave SSH**.  
  * **Desativar:** desativa o registro da chave SSH, na janela pop-up clique em **Sim** para confirmar a ação.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
## Tela Visualizar chave SSH
| **Item** | **Descrição** |
| :---- | :---- |
| **Solicitante** | Informação do usuário que solicitou a visualização dos detalhes da credencial, com o nome e-mail de cadastro. |
| **Dispositivo** | O dispositivo onde está relacionado a credencial. |
| **Protocolo** | O protocolo utilizado pelo dispositivo. |
| **Senha** | Senha da chave SSH com os botões de atalho para *Visualizar senha*, *Copiar senha* e *Soletrar a senha*. |
| **Chave privada** | Chave privada com os botões de atalho para *Visualizar chave*, *Copiar chave* e *Download da chave*. |
| **Chave pública** | Exibe o texto da chave pública cadastrada. |

:::(info) (**Info**)  
Caixa de avisos são exibidas juntamente com a informação do nome de usuário da credencial, um dos avisos informa que ao copiar a senha ela fica disponível na área de transferência e pode ser acessada por outros programas e o outro aviso informa se a senha possui ou não configuração de troca automática.  
:::

---
## Tela Histórico da chave SSH
| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Data do histórico** | Seletor de data | Selecione o período de busca das ações realizadas na chave SSH. |
* **Código:** código de identificação dentro do Segura.  
* **Dispositivo:** dispositivo cadastrado no Segura ao qual a credencial está atrelada.  
* **Nome de usuário:** nome de usuário da chave SSH.  
* **Origem:** o tipo de ação que foi realizada na chave SSH.  
* **Data do histórico:** data e hora em que a ação ocorreu.  
* **Atual:** indicador se aquele registro é a ação mais atual realizada na chave SSH. As informações podem ser **Sim** ou **-**.  
* **Ações:**  
  * **Visualizar:** abre a tela **Visualizar chave SSH**.