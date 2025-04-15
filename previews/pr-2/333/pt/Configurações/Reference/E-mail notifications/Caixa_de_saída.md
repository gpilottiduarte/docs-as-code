# Caixa de saída

Neste documento, você vai encontrar todas as informações sobre o relatório **Caixa de saída**.

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações \> E-mail \> Caixa de saída.**

## Barra superior

| Item | Descrição |
| :---- | :---- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio, abre o formulário [**Agendar relatório**](https://docs.senhasegura.io/v3-31/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports?highlight=como%20agendar%20relat%C3%B3rio). |

## Campos de busca

| Item | Descrição |
| :---- | :---- |
| **Código** | Código da notificação no senhasegura. |
| **Assunto** | Assunto do e-mail da notificação. |
| **Para (Nome/E-mail)** | Nome e/ou e-mail do usuário que recebeu a notificação. |
| **De (Nome/E-mail)** | Nome e/ou e-mail do usuário que enviou a notificação. |
| **Criado por** | Nome do usuário que criou a notificação. |
| **Período** | Abre um calendário para você indicar a data inicial do filtro. |
| **até** | Abre um calendário para você indicar a data final do filtro. |
| **Conta** | Menu suspenso, selecione a conta de e-mail de envio da notificação. Nota: irão aparecer apenas as contas de e-mail cadastradas anteriormente no senhasegura. |
| **Estado** | Menu suspenso. Estado da notificação na fila do senhasegura. Pode ser: *Aguardando, Enviado, Cancelado, Reenviado, Envio em execução, Erro ao enviar* ou *Pausado*. |
| **Abertura** | Caixa de seleção. Marque para filtrar pelos e-mail que tiveram confirmação de leitura |
| **Retornado** | Caixa de seleção. Marque para filtrar pelos e-mail que foram retornados. |

## Campos do relatório

* **Código.**  
* **Assunto.**  
* **Para.**  
* **De.**  
* **Conta.**  
* **Tipo:**  
* **Data/Hora:**  
* **Estado.**  
* **Mensagem MTA:**  
* **Criado por**  
* **Abertura.**  
* **Reenvio:**  
* **Prioridade:**  
* Na coluna **Ação**, você tem duas opções:  
  * **Ler e-mai**l: abre a janela **E-mail** com as informações do e-mail que foi enviado.  
  * **Reenviar e-mail**: abre a janela **Reenviar e-mail**, onde você pode configurar o reenvio do e-mail de notificação.


:::(info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

## Janela E-mail

Ao clicar na opção Ler e-mail, você é direcionado para a janela E-mail, que contém as informações abaixo.

| Item | Descrição |
| :---- | :---- |
| **Assunto** | Assunto do e-mail de notificação enviado. |
| **Remetente** | Endereço de e-mail do remetente da notificação. |
| **Destinatários** | Endereço de e-mail dos destinatários da notificação. |

### Aba Informações

| Item | Descrição |
| :---- | :---- |
| **Código** | Código da notificação no senhasegura. |
| **Conta** | Nome da conta que enviou a notificação. |
| **Data do envio** | Data em que a notificação foi enviada. É exibida no formato `DD/MM/AAAA HH:MM:SS` |
| **Reply-to** | Cabeçalho que indica para qual endereço de e-mail as respostas devem ser enviadas, caso sejam diferentes do endereço do remetente. |
| **Estado** | Status do e-mail de notificação. Pode ser *Aguardando, Enviado, Cancelado, Reenviado, Envio em execução, Erro ao enviar* ou *Pausado*. |
| **Return-path** | Cabeçalho que indica para qual endereço de e-mail as mensagens de erro devem ser enviadas caso haja falha na entrega do e-mail. |
| **Situação** |  |
| **Lote** | Indica se o e-mail faz parte de um envio em lote. |
| **Tipo de e-mail** |  |

:::(warning) (Atenção)

- A aba **Corpo HTML** exibe o corpo do e-mail em formato HTML.  
- A aba **Corpo Texto** exibe o corpo da mensagem em formato de texto plano.  
  :::

## Janela Reenviar e-mail

Ao clicar em **Reenviar e-mail** você é direcionado para a janela **Reenviar e-mail**, que contém os seguintes campos.

| Item | Descrição |
| :---- | :---- |
| **Nome do remetente** | Nome do remetente do e-mail de notificação. |
| **E-mail do remetente** | Endereço de e-mail do remetente da notificação. |
| **Nome do destinatário** | Nome do destinatário do e-mail de notificação. |
| **E-mail do destinatário.** | Endereço de e-mail do destinatário da notificação. |

