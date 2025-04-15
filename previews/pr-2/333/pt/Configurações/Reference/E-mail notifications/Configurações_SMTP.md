# Configurações SMTP

Neste documento, você vai encontrar todas as informações sobre o relatório **Contas**.

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações \> E-mail \> Configuração SMTP.**

## Barra superior

| Item | Descrição |
| :---- | :---- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Novo** | Abre a janela **Cadastro de conta SMTP**. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio, abre o formulário [**Agendar relatório**](https://docs.senhasegura.io/v3-31/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports?highlight=como%20agendar%20relat%C3%B3rio). |

## Campos de busca

| Item | Descrição |
| :---- | :---- |
| **Código** | Código da conta SMTP no senhasegura. |
| **Nome** | Nome da conta SMTP. |
| **E-mail do remetente** | Endereço de e-mail do remetente da conta SMTP. |
| **E-mail de resposta** | Endereço de e-mail de resposta (*Reply-To*) da conta SMTP. |
| **E-mail de retorno** | Endereço de e-mail de retorno (*Return-Pat*h) da conta SMTP. |
| **E-mail de confirmação** | Endereço de e-mail de confirmação da conta SMTP |
| **Ativo** | *Rádio button* para filtragem de acordo com o status da conta SMTP. Pode ser **Sim** ou **Não**. |

## Campos do relatório

* **Código.**  
* **Nome.**  
* **E-mail do remetente.**  
* **E-mail de resposta.**  
* **E-mail de retorno.**  
* **E-mail de confirmação.**  
* **Ativo.**  
* **Padrão:** indica se esta conta SMTP é a padrão de utilização no senhasegura.  
* **Conexão segura:** indica se a conta SMTP utiliza conexão segura.  
* **Usa config:** indica se a conta SMTP deverá ser forçada a usar a seção de configuração  
* **Conf. de leitura:** indica se a conta SMTP recebe uma confirmação de leitura da mensagem.  
* **Rodapé:** indica se a conta envia rodapé no e-mail.  
* Na coluna **Ação,** você tem duas opções:  
  * **Alterar:** que é utilizada para alterar as configurações do servidor em questão. Abre a janela **Cadastro de conta SMTP**.  
  * Testar configuração: que serve para testar a configuração de envio do servidor SMTP. Abre a janela **E-mail de teste \- Conta**.

:::(info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

## Janela Cadastro de conta SMTP

Ao clicar na opção **Alterar** ou **Novo**, você é direcionado para a janela **Cadastro de conta SMTP**, que contém as informações abaixo.

| Item | Descrição |
| :---- | :---- |
| **Nome da conta** | Nome da conta SMTP. |
| **Ativo** | *Radio button*. Indica se a conta SMTP está ativa. Pode ser **Sim** ou **Não**. |
| **E-mail do remetente** | Endereço de e-mail do remetente da conta SMTP. |
| **E-mail de resposta (Reply-To)** | Endereço de e-mail de resposta da conta SMTP. |
| **E-mail de retorno (Return-Path)** | Endereço de e-mail de retorno da conta SMTP. |
| **E-mail de confirmação** | Endereço de e-mail de confirmação da conta SMTP |
| **Conta padrão** | *Radio button*. Indica se a conta é a conta padrão de utilização no senhasegura. Pode ser **Sim** ou **Não**. |
| **Enviar confirmação de leitura** | *Radio button*. Indica se a conta SMTP receberá uma confirmação de leitura da mensagem. Pode ser **Sim** ou **Não**. |
| **Obrigar uso da configuração** | *Radio button*. Indica se a conta SMTP deverá ser forçada a usar a configuração. Pode ser **Sim** ou **Não**. |
| **Habilitar rodapé** | *Radio button*. Indica se a conta envia rodapé no e-mail. Pode ser **Sim** ou **Não**. |
| **Host SMTP** | Endereço do host da conta SMTP. |
| **Porta** | Porta em que o host escuta. |
| **Usar conexão segura** | *Radio button*. Indica se a conta SMTP deve utilizar uma conexão segura. Pode ser **Sim** ou **Não**. |
| **Tipo de conexão segura** | *Radio button*. Indica qual o tipo de conexão segura a conta SMTP deverá utilizar. Pode ser **TLS** ou **SSL**. |
| **Usar autenticação** | *Radio button*. Indica se a conta SMTP deve usar uma credencial para se autenticar. Pode ser **Sim** ou **Não**. |
| **Ignorar erro de certificado** | *Radio button*. Indica se a conta SMTP deverá ignorar eventuais erros de certificado. Pode ser **Sim** ou **Não**. |
| **Usar Network Connector** | *Radio button*. Indica se a conta SMTP deverá utilizar um Network Connector previamente cadastrado no senhasegura. Pode ser **Sim** ou **Não**. |
| **Network Connector** | Menu suspenso. Selecione o Network Connector para utilizar na conexão da conta SMTP. **Nota**: essa opção só ficará habilitada caso você selecione **Sim** no radio button **Usar Network Connector**. |
| **Credencial para autenticação** | Menu suspenso. Selecione a credencial que será utilizada para autenticação pela conta SMTP. Nota: caso você selecione **Sim** na opção **Usar autenticação**, a seleção de uma credencial é obrigatória; a credencial deverá estar previamente cadastrada no senhasegura. |

## Janela E-mail de teste \- Conta

Ao clicar em **Testar configuração** você é direcionado para a janela **E-mail de teste \- Conta**, que contém os seguintes campos.

| Item | Descrição |
| :---- | :---- |
| **Enviar para** | Campo de texto. Preencha com o endereço de e-mail para onde o senhasegura deverá enviar a mensagem de teste. |
| **Assunto** | Campo de texto. Preencha com o assunto do e-mail de teste. Por padrão está preenchido com a string `MENSAGEM DE TESTE!`. |
| **Mensagem** | Campo de texto. Preencha com o corpo do e-mail de teste. Por padrão está preenchido com a string `ATENÇÃO: ESTA É UMA MENSAGEM DE TESTE!`. |

