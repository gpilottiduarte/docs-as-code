# Trocas de senhas

Este documento fornece informações sobre a tela do relatório **Trocas de senhas**, que mostra a lista de operações feitas nas credenciais com a configuração de troca automática habilitada.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Auditoria > Credenciais > Trocas de senhas.**

ou

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Execuções**.  
2. No menu lateral, selecione **Operações de senhas > Todas as operações**.

---
## Menu de ações
| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Solicitar troca de senha** | Botão | Direciona para a tela de cadastro **Solicitar troca de senha**. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de Busca
| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as solicitações por seu código de identificação dentro do Segura. |
| **Nome de usuário** | Campo de texto | Filtra as solicitações pelo nome de usuário da credencial. |
| **Dispositivo** | Campo de texto | Filtra as solicitações pelo associado a credencial. |
| **Fabricante** | Menu suspenso | Filtra as solicitações pelo fabricante do tipo de dispositivo. |
| **Modelo** | Campo de texto | Filtra as solicitações pelo modelo do dispositivo. |
| **Site** | Menu suspenso | Filtra as solicitações pelo nome do site associado ao dispositivo. |
| **Tags** | Campo de texto | Filtra as solicitações pelas tags cadastradas na credencial. |
| **Estado** | Menu suspenso | Filtra as solicitações pelo estado que as mesmas se encontram. As opções são: *Agendada*, *Aguardando aprovação*, *Cancelada*, *Efetuada com sucesso*, *Em execução*, *Erro* e *Expirada*. |
| **Credencial de reconciliação** | Menu suspenso |  Filtra as solicitações pelo opção de ter ou não uma credencial de reconciliação associada. As opções são **Sim** e **Não**. |
| **Operação** | Menu suspenso | Filtra as solicitações pelo tipo de operação executada. |
| **Solicitante** | Campo de texto | Filtra as solicitações pelo módulo solicitante da troca. |
| **Data de agendamento** | Seletor de data | Filtra as solicitações pelo período que foram agendadas as trocas. |
| **Data de execução** | Seletor de data | Filtra as solicitações pelo período que foram executadas. |
| **Mostrar detalhes da operação** | Caixa de seleção | Filtra as solicitações pelo template utilizado para trocar a mensagem de retorno da execução. Quando utilizado essa opção, estas duas colunas são adicionadas no relatório com as informações relacionadas ao campo. |

## Campos do relatório
* **Código.**  
* **Nome de usuário.**  
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
* **Última tentativa.**  
* **Tentativas.**  
* **Solicitante.**  
* **Ações:** as opções disponíveis irão depender se o registro está sendo ou já foi executado.  
  * **Registro já executado.**  
    * **Editar credencial:** abre a tela **Cadastro da credencial** para que sejam feitas as alterações necessárias.  
    * **Editar dispositivo:** abre a tela **Cadastro do dispositivo** para que sejam feitas as alterações necessárias.  
    * **Reiniciar execução:** reinicia a solicitação de execução da troca de senha.  
    * **Visualizar tentativas:** abre a tela **Visualizar tentativas** com as informações das tentativas já realizadas e seus resultados.  
  * **Registro em execução:**  
    * **Solicitar a execução imediata:** ao reiniciar a solicitação, se caso não desejar esperar o horário do agendamento da execução, use esta opção.  
    * **Cancelar operação:** enquanto a solicitação estiver aguardando execução é possível solicitar o cancelamento.  
    * **Visualizar tentativas:** abre a tela **Visualizar tentativas** com as informações das tentativas já realizadas e seus resultados.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
## Tela Solicitar troca de senha
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Credencial*** | Campo de texto | Sim | Lista de credenciais com a configuração de troca automática configurada. |
| **Data de agendamento*** | Seletor de data e hora | Sim | Data e hora de agendamento que irá ocorrer a execução. |

## Tela Visualizar tentativas
| **Item**  | **Descrição** |
| :---- | :---- |
| **Credencial** | Informações da credencial, seu tipo, nome e qual dispositivo associado. |
| **Visualizar a senha** | Botão que direciona para a tela de **Visualizar credencial**. |
| **Solicitante** | O módulo solicitante da execução. |
| **Data da solicitação** | Data em que a solicitação foi feita. |
| **Data do agendamento** | Data em que a execução foi agendada. |
| **Operação** | O tipo de operação solicitada para ser executada. |
| **Estado** | O estado da execução. |

#### Seção Tentativas
| **Item**  | **Descrição** |
| :---- | :---- |
| **Template** | O template selecionado para ser utilizado na execução. |
| **Versão** | O número da versão da execução. |
| **Início** | Data e hora do início da tentativa. |
| **Fim** | Data e hora do final da tentativa. |
| **Erro** | Informação se houve ou não erro durante a tentativa. |
| **Logs** | Informações com os logs gerados sobre a tentativa. |
