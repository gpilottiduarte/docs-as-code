# Chaves SSH: acesso remoto

Este documento fornece informações sobre a tela do relatório **Chaves SSH: Acesso remoto**, que exibe a lista de chaves SSH cadastradas no Segura.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Credenciais > Chaves SSH > Acesso remoto.**

---
## Menu de ações
| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de Busca
| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código do dispositivo** | Campo de texto | Filtra a chave SSH por seu código de identificação dentro do Segura. |
| **Dispositivo** | Campo de texto | Filtra pelo dispositivo cadastrado no Segura ao qual a chave SSH está atrelada. |
| **Nome de usuário** | Campo de texto | Filtra pelo de nome de usuário da chave SSH cadastrado no Segura. |
| **Nome da chave** | Campo de texto | Filtra pelo nome de cadastro da chave SSH. |
| **Tipo de dispositivo** | Menu suspenso | Filtra de acordo com o tipo de dispositivo. |
| **Fabricante** | Campo de texto | Filtra de acordo com o fabricante do dispositivo. |
| **Modelo** | Campo de texto | Filtra de acordo com o modelo do dispositivo ao qual a chave SSH está atrelada. |
| **Site** | Menu suspenso | Filtra pelo site que está cadastrado no Segura. |
| **Status** | Menu suspenso | Filtra as chaves SSH por seu estado de ativação. As opções são **Ativo** e **Inativo**. Limpe o campo para habilitar a opção **Todos**. |

## **Campos do relatório**
* **Nome da chave SSH.**  
* **Código.**  
* **Dispositivo.**  
* **Tipo de dispositivo.**  
* **Fabricante.**  
* **Modelo.**  
* **Site.**  
* **Ações:**  
  * **Visualizar a senha:** abre a tela **Visualizar chave SSH**.  
  * **Iniciar sessão:** inicia a sessão remota utilizando a chave SSH.

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