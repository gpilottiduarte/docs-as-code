# Configurações IMAP/POP3

Neste documento, você vai encontrar todas as informações sobre o relatório **Contas IMAP/POP3**.

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações \> E-mail \> Configuração IMAP/POP3.**

## Barra superior

| Item | Descrição |
| :---- | :---- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Novo** | Abre a janela **Cadastro de conta POP3**. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio, abre o formulário **Agendar relatório**|

## Campos de busca

| Item | Descrição |
| :---- | :---- |
| **Nome** | Nome da conta IMAP/POP3. |
| **Conexão segura** | Menu suspenso. Indique se a conta utiliza uma conexão segura. Pode ser **Sim** ou **Não**. |
| **Verificação automática** | Menu suspenso. Indique se a conta tem a verificação automática habilitada. Pode ser **Sim** ou **Não**. |
| **Manter cópia** | Menu suspenso. Indique se a conta mantém uma cópia no servidor. Pode ser **Sim** ou **Não**. |
| **Situação** | Menu suspenso. Indique se a conta se encontra ativa. Pode ser **Ativo** ou **Inativa**. |

## Campos do relatório

* **Código:** código da conta no senhasegura.  
* **Nome.**  
* **Conexão segura.**  
* **Tipo conexão:** tipo de conexão (SSL ou TLS).  
* **Protocolo:** protocolo de autenticação da conta (IMAP ou POP3).  
* **Porta:** porta em que a conta se conecta para receber as mensagens.  
* **Verificação automática.**  
* **Manter cópia no servidor.**  
* Na coluna **Ação,** você tem duas opções:  
  * **Alterar conta:** que é utilizada para alterar as configurações da conta em questão. Abre a janela **Cadastro de conta POP3**.  
  * **Ver caixa de entrada**: direciona para a caixa de entrada da conta.


:::(info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

## Janela Cadastro de conta POP3

Ao clicar na opção **Alterar** ou **Novo**, você é direcionado para a janela **Cadastro de conta POP3**, que contém as informações abaixo.

| Item | Descrição |
| :---- | :---- |
| **Nome da conta** | Nome da conta IMAP/POP3. |
| **Manter cópia no servidor** | *Radio button*. Selecione se deseja manter uma cópia das mensagens no servidor. Pode ser **Sim** ou **Não**. |
| **Verificação automática** | *Radio button*. Selecione se deseja realizar a verificação automática de novas mensagens. Pode ser **Sim** ou **Não**. |
| **Ativo** | *Radio button*. Indica o status da conta no senhasegura. Pode ser **Sim** ou **Não**. |
| **Endereço** | Campos de texto. Indique o endereço do host da conta IMAP/POP3. |
| **Porta** | Campo de texto. Indique a porta em que a conta IMAP/POP3 se conecta no servidor de mensagens. |
| **Protocolo** | Menu suspenso. Selecione o protocolo de recebimento de mensagens. Pode ser **IMAP** ou **POP3**. |
| **Usar Network Connector** | *Radio button*. Indique se deseja utilizar o Network Connector para conexão da conta IMAP/POP3. Pode ser **Sim** ou **Não**. |
| **Network Connector** | Menu suspenso. Selecione o Network Connector que será utilizado para conexão com o servidor de mensagens. **Nota**: o menu suspenso só estará habilitado caso você selecione Sim na opção **Usar Network Connector.** |
| **Credencial para autenticação** | Menu suspenso. Indique a credencial que será utilizada para autenticação no servidor de mensagens. **Nota**: a credencial deverá estar cadastrada previamente no senhasegura. |
| **Ignorar certificado** | *Radio button*. Indique se deseja ignorar o certificao de autenticação. Pode ser **Sim** ou **Não**. |
| **Usar conexão segura?** | *Radio button*. Indique se deseja utilizar uma conexão segura com o servidor de mensagens. Poder ser **Sim** ou **Não**. |
| **Tipo de conexão segura.** | *Radio button*. Indique o protocolo de conexão segura que será utilizado na conexão da conta com o servidor de mensagens. Pode ser **TLS** ou **SSL**. |

