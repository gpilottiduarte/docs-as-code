# Credenciais

Este documento fornece informações sobre o relatório **Credenciais** que apresenta as informações sobre os backups de credenciais realizados no Segura.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Backup \> Credenciais.**

## Menu de Ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as credenciais pelo seu código identificador. |
| **Dispositivo** | Campo de texto | Filtra pelo nome ou endereço de IP do dispositivo no Segura. |
| **Nome de usuário** | Campo de texto | Filtra pelo nome de usuário do usuário no Segura. |
| **Integridade** | Menu suspenso | Filtra pela situação da integridade da credencial no Segura. As opção são  *Empty, Corrupted ou Healthy.*  |
| **Conformidade** | Menu suspenso | Filtra os registros por seu estado de conformidade. As opções são **Sim** ou **Não**. Limpe o campo para habilitar a opção **Todos**. |
| **Política de senha** | Menu suspenso | Filtra de acordo com a política de senha cadastrada no Segura. |
| **Último backup** | Campo de data | Filtra de acordo com o período selecionado. |
| **Situação** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Sim** e **Não**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório
* **Código.**  
* **Dispositivo.**  
* **Nome de usuário.**  
* **Tipo:** tipo de usuário.  
* **Última troca:** data e hora da última troca de senha realizada na credencial. Formato: DD/MM/AAAA HH:MM:SS.  
* **Última consulta:** data e hora da última consulta realizada à credencial. Formato DD/MM/AAAA HH:MM:SS.  
* **Último backup:** data e hora de realização do último backup da credencial. Formato DD/MM/AAAA HH:MM:SS.  
* **Ativo:** situação da credencial.  
* **Integridade.**  
* **Política de senha.**  
* **Conformidade.**  
* **Detalhe:** exibe uma mensagem com informações sobre a senha da credencial. Se a senha não atender aos requisitos de conformidade, a mensagem especificará o que está faltando para que ela se torne compatível.
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::