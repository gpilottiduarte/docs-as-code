# Minha custódia

Este documento fornece informações sobre a tela do relatório **Credenciais sob minha custódia** que exibe todas as credenciais que estão sob a custódia do usuário.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **PAM Core.**  
2. No menu lateral, selecione **Credenciais > Minha custódia.**

---
## Menu de ações
| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as credenciais pelo seu código de identificação dentro do Segura. |
| **Tipo de credencial** | Menu suspenso | Filtra as credenciais pelo seu tipo. As opções são *Usuário do domínio, Administrador local, Local user* e *Chave SSH.*  Limpe o campo para habilitar a opção **Todos**. |
| **Dispositivo** | Campo de texto | Filtra as credenciais pelo dispositivo do qual a credencial faz parte. |
| **Nome de usuário** | Campo de texto | Filtra as credenciais pelo nome de usuário cadastrado para a credencial. |
| **Informação adicional** | Campo de texto | Filtra as credenciais pelas informações adicionais cadastradas. |
| **Situação** | Menu suspenso | Filtra as credenciais pelo sua situação. As opções são **Ativo** e **Inativo**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório
* **Código**.
* **Nome de usuário**.
* **Informação adicional.**
* **Tipo de credencial**.
* **Data de expiração:** data e hora em que a credencial expira.
* **Última troca:** data e hora da última troca de custódia da credencial.
* **Início da custódia:** data e hora de início da custódia.
* **Última consulta:** data e hora da última consulta à credencial.
* **Duração**: duração da última consulta à credencial.
* **Situação.**
* **Ações:**
  * **Liberar custódia da senha:** abre uma janela pop-up de confirmação com as opções **Sim** e **Não** para liberação da custódia da credencial, possibilitando que outros usuários obtenham a custódia.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::