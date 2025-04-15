# Todas as operações

Este documento fornece informações sobre a tela do relatório **Todas as operações**, que exibe as operações realizadas no Segura.

## Caminho para acessar

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Executions**.  
2. No menu lateral, selecione **Operações de senhas > Todas as operações.** 

---
## Menu de ações

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Solicitar troca de senha** | Botão | Direciona para a tela **Solicitar troca de senha**. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV* e *Agendar relatório.* |

## Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as operações por seu código de identificação dentro do Segura. |
| **Nome do usuário** | Campo de texto | Filtra as operações pelo nome do usuário da credencial. |
| **Dispositivo** | Campo de texto | Filtra as operações dispositivo relacionado a credencial. |
| **Fabricante** | Menu suspenso | Filtra as operações pelo fabricante do dispositivo. |
| **Modelo** | Campo de texto | Filtra as operações pelo produto do fabricante escolhido. Também utilizado para parâmetro de sessão web. |
| **Site** | Menu suspenso | Filtra as operações pelo país, região ou unidade de negócios onde o dispositivo está. |
| **Tags** | Campo de texto | Filtra as operações pelas tags do dispostivo. |
| **Estado** | Menu suspenso | Filtra as operações pelo estado da operação. As opções são: *Agendada, Aguardando aprovação, Cancelada, Efetuada com sucesso, Em execução, Erro* e *Expirada*. |
| **Credencial de reconciliação** | Menu suspenso | Filtra as operações pela presença ou ausência de uma credencial de reconciliação. As opções são **Sim** e **Não**. Limpe o campo para habilitar a opção **Todos**. |
| **Operação** | Menu suspenso | Filtra as operações pelo tipo de operação que foi solicitada. |
| **Solicitante** | Campo de texto | Filtra as operações pelo nome do usuário que solicitou a operação. |
| **Data de agendamento** | Seletor de data | Filtra as operações pela data do agendamento da solicitação. |
| **Data de execução** | Seletor de data | Filtra as operações pela data da execução da operação |
| **Mostrar detalhes da operação** | Caixa de seleção | Adiciona os campos **Template** e **Mensagem** nos resultados exibidos no relatório. |

## Campos do relatório

* **Checkbox:** marca ou desmarca as operações selecionadas.  
* **Código.**  
* **Nome do usuário.**  
* **Dispositivo.**  
* **Modelo.**  
* **Site.**  
* **Tags.**  
* **Tipo de credencial.**  
* **Estado.**  
* **Operação.**  
* **Credencial de reconciliação.**  
* **Data de agendamento.**  
* **Data de execução.**  
* **Última tentativa:** data e hora da última tentativa de execução da operação.  
* **Tentativas:** número de tentativas que foram realizadas.  
* **Template**: o template utilizado na execução. Este campo só será exibido quando a caixa de seleção **Mostrar detalhes da operação** for selecionada no momento da pesquisa.  
* **Mensagem**: mensagem de retorno da execução. Este campo só será exibido quando a caixa de seleção **Mostrar detalhes da operação** for selecionada no momento da pesquisa.  
* **Solicitante.**  
* **Ações:** as ações disponíveis serão exibidas de acordo com o status do registro.  
  * **Solicitar a execução imediata:** executa imediatamente a operação.  
  * **Cancelar operação**: cancela a execução da operação.  
  * **Editar credencial**: abre a janela [Cadastro da credencial](/v4/docs/pt/pam-credential-how-to-set-up-a-credential-in-Segura).  
  * **Editar dispositivo**: abre a janela [Cadastro do dispositivo](/v4/docs/pt/pam-device-configure-device).  
  * **Reiniciar execução:** reinicia a execução da operação.  
  * **Visualizar tentativas:** abre a janela de **Detalhes da operação**.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

 ---
### Solicitar troca de senha - tela de cadastro

| **Item** | **Tipo** |**Obrigatório**| **Descrição** |
| ---- | ---- | ---- |----|
| **Credencial** | Menu suspenso | Sim | Lista de credenciais disponíveis para solicitação de troca de senha. |
| **Data de agendamento** | Seletor de data e seletor de hora | Sim | Data e hora que a troca de senha será executada. |

---
### Tela Detalhes da operação

| **Item** | **Descrição** |
| :---- | :---- |
| **Tipo/Nome da credencial e dispositivo** | O tipo e nome da credencial e o dispositivo em que a operação foi realizada. |
| **Solicitante** | Nome do usuário que realizou a solicitação. |
| **Data da solicitação** | Data e hora da solicitação da operação. |
| **Data do agendamento** | Data e hora do agendamento da operação. |
| **Operação** | Tipo da operação que foi executada. |
| **Estado** | Status da operação. |
| **Nº de tentativas** | Informações sobre a tentativa que foi realizada e o log da operação. Os dados apresentados são: *Template*, *Versão*, *Início*, *Fim*, *Erro* e *Logs*. |

:::(info) (**Info**)  
No caso de operações já executadas, o botão **Visualizar senha** estará disponível.  
:::