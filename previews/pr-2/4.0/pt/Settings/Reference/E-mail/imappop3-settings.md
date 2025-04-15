# Configurações IMAP/POP3

Este documento fornece informações sobre o relatório **Configuração IMAP/POP3** que apresenta as configurações para gerenciamento de contas IMAP e POP3 dentro do Segura.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **E-mail \> Configuração IMAP/POP3.**

## Menu de Ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Novo** | Botão | Direciona para a tela **Configuração IMAP/POP3** para que seja cadastrada uma nova conta IMAP/POP3. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Nome** | Campo de texto | Filtra pelo nome da conta IMAP/POP3. |
| **Conexão segura** | Menu suspenso | Filtra de acordo com a situação da conexão segura da conta IMAP/POP3. As opções são **Sim** ou **Não**. |
| **Verificação automática** | Menu suspenso | Filtra de acordo com a situação da verificação automática da conta IMAP/POP3. Pode ser **Sim** ou **Não**. |
| **Manter cópia** | Menu suspenso | Filtra de acordo com a configuração de cópia no servidor da conta IMAP/POP3. As opções **Sim** ou **Não**. |
| **Situação** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Sim** e **Não**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório
* **Código:** código da conta no Segura.  
* **Nome.**  
* **Conexão segura.**  
* **Tipo conexão:** tipo de conexão (**SSL** ou **TLS**).  
* **Protocolo:** protocolo de autenticação da conta (**IMAP** ou **POP3**).  
* **Porta:** porta em que a conta se conecta para receber as mensagens.  
* **Verificação automática.**  
* **Manter cópia no servidor.**  
* **Ações:**  
  * **Alterar conta:** abre a janela **Cadastro de conta POP3** em modo de edição.  
  * **Ver caixa de entrada**: direciona para a caixa de entrada da conta.
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Cadastro de conta SMTP
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome da conta** | Campo de texto | Sim | Nome identificador da conta IMAP/POP3 |
| **Manter cópia no servidor** | Botão de opção | Não | Selecione se deseja manter uma cópia das mensagens no servidor. As opções são **Sim** ou **Não**. |
| **Verificação automática** | Botão de opção | Não | Selecione se deseja realizar a verificação automática de novas mensagens. As opções são **Sim** ou **Não**. |
| **Ativo** | Botão de opção | Não | Indica a situação da conta IMAP/POP3 no Segura. As opções **Sim** ou **Não**. |
| **Endereço** | Campo de texto | Sim | Endereço do host da conta IMAP/POP3 |
| **Porta** | Campo de texto | Não | Número da porta em que a conta IMAP/POP3 se conecta no servidor de mensagens. |
| **Protocolo** | Menu suspenso | Sim | Protocolo de recebimento de mensagens. As opções são **IMAP** ou **POP3**. |
| **Usar Network Connector** | Botão de opção | Não | Indica se deseja utilizar o Network Connector para conexão da conta IMAP/POP3. As opções **Sim** ou **Não**. |
| **Network Connector** | Menu suspenso | Não | Selecione o **Network Connector** que será utilizado para conexão com o servidor de mensagens. **Nota**: o menu suspenso só estará habilitado caso você selecione **Sim** na opção **Usar Network Connector**. |
| **Credencial para autenticação** | Menu suspenso | Sim | Indique a credencial que será utilizada para autenticação no servidor de mensagens. **Nota**: a credencial deverá estar cadastrada previamente no Segura. |
| **Ignorar certificado** | Botão de opção | Não | Indique se deseja ignorar o certificado de autenticação. As opções são **Sim** ou **Não**. |
| **Usar conexão segura** | Botão de opção | Não | Indique se deseja utilizar uma conexão segura com o servidor de mensagens. As opções são **Sim** ou **Não**. |
| **Tipo de conexão segura** | Botão de opção | Não | Indique o protocolo de conexão segura com o servidor. As opções são **TLS** ou **SSL**. |

