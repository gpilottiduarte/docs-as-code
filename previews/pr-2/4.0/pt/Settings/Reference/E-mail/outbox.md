# Caixa de saída

Este documento fornece informações sobre o relatório **Email enviados** que apresenta as mensagens recebidas por uma determinada conta de SMTP.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **E-mail \> Caixa de saída.**

## Menu de Ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código identificador da notificação no Segura. |
| **Assunto** | Campo de texto | Filtra pelo assunto do e-mail da notificação. |
| **Para (Nome/Email)** | Campo de texto | Filtra de acordo com o nome ou endereço de e-mail do destinatário da notificação. |
| **De (Nome/Email)** | Campo de texto | Filtra de acordo com o nome ou endereço de e-mail do remetente da notificação. |
| **Criado por** | Campo de texto | Filtra pelo nome do usuário que criou a notificação. |
| **Período** | Campo de data | Filtra os registros pelo período em que foram enviados. |
| **Conta** | Menu suspenso | Filtra de acordo com a conta de e-mail de envio da notificação. **Nota**: aparecerão apenas as contas de e-mail cadastradas anteriormente no Segura. |
| **Estado** | Menu suspenso | Filtra pela situação da conta de e-mail no Segura. As opção são: *Aguardando, Enviado, Cancelado, Reenviado, Envio em execução, Erro ao enviar ou Pausado*. |
| **Abertura** | Caixa de seleção | Filtrar pelo de-mail que tiveram confirmação de leitura. |
| **Retornado** | Caixa de seleção | Selecione para filtrar pelos e-mails que foram retornados. |

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
* **Ações:**  
  * **Ler e-mai**l: abre a janela **E-mail** com as informações do e-mail que foi enviado.  
  * **Reenviar e-mail**: abre a janela **Reenviar e-mail**, onde você pode configurar o reenvio do e-mail de notificação.
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Ler e-mail
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Assunto** |  | Assunto do e-mail de notificação enviado. |
| **Remetente** |  | Endereço de e-mail do remetente da notificação. |
| **Destinatários** |  | Endereço de e-mail dos destinatários da notificação. |

## Seção Informações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** |  | Código identificador da notificação no Segura. |
| **Conta** |  | Nome da conta que enviou a notificação. |
| **Data do envio** |  | Data em que a notificação foi enviada. É exibida no formato DD/MM/AAAA HH:MM:SS |
| **Reply-to** |  | Cabeçalho que indica para qual endereço de e-mail as respostas devem ser enviadas, caso sejam diferentes do endereço do remetente. |
| **Estado** |  | Status do e-mail de notificação. As opções são *Aguardando, Enviado, Cancelado, Reenviado, Envio em execução, Erro ao enviar* ou *Pausado*. |
| **Return-path** |  | Cabeçalho que indica para qual endereço de e-mail as mensagens de erro devem ser enviadas caso haja falha na entrega do e-mail. |
| **Situação** |  |  |
| **Lote** |  | Indica se o e-mail faz parte de um envio em lote. |
:::(warning) (Cuidado)
- A aba **Corpo HTML** exibe o corpo do e-mail em formato HTML.  
- A aba **Corpo Texto** exibe o corpo da mensagem em formato de texto plano.
:::

## Reenviar e-mail
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome do remetente** | Campo de texto  | Sim | Nome do remetente do e-mail de notificação. |
| **E-mail do remetente** | Campo de texto | Sim | Endereço de e-mail do remetente da notificação. |
| **Nome do destinatário** | Campo de texto | Sim | Nome do destinatário do e-mail de notificação. |
| **E-mail do destinatário** | Campo de texto | Sim | Endereço de e-mail do destinatário da notificação. |

