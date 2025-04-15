# Configurações SMTP

Este documento fornece informações sobre o relatório **Configuração SMTP** que apresenta as configurações de contas SMTP dentro do Segura.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **E-mail \> Configuração SMTP**

## Menu de Ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Novo** | Botão | Direciona para a tela **Cadastro de conta SMTP** para que seja cadastrada uma nova conta SMTP. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código de identificação da conta SMTP no Segura. |
| **Nome** | Campo de texto | Filtra pelo nome da conta do SMTP no Segura. |
| **E-mail de remetente** | Campo de texto | Filtra pelo endereço de e-mail do remetente da conta SMTP. |
| **E-mail de resposta** | Campo de texto | Filtra pelo endereço de e-mail de resposta (*Reply-To*) da conta SMTP. |
| **E-mail de retorno** | Campo de texto | Filtra pelo endereço de e-mail de retorno (*Return-Path*) da conta SMTP. |
| **E-mail de confirmação** | Campo de texto | Filtra pelo endereço de e-mail de confirmação da conta SMTP. |
| **Ativo** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Sim** e **Não**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório
* **Código.**  
* **Nome.**  
* **E-mail do remetente.**  
* **E-mail de resposta.**  
* **E-mail de retorno.**  
* **E-mail de confirmação.**  
* **Ativo.**  
* **Padrão:** indica se esta conta SMTP é a padrão de utilização no Segura.  
* **Conexão segura:** indica se a conta SMTP utiliza conexão segura.  
* **Usa config:** indica se a conta SMTP deverá ser forçada a usar a seção de configuração  
* **Conf. de leitura:** indica se a conta SMTP recebe uma confirmação de leitura da mensagem.  
* **Rodapé:** indica se a conta envia o rodapé no e-mail.  
* **Ações:**  
  * **Editar:** abre a janela **Cadastro de conta SMTP**.  
  * **Testar configuração**: abre a janela **E-mail de teste \- Conta**.
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Cadastro de conta SMTP
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome da conta** | Campo de texto | Sim | Nome identificador da conta SMTP. |
| **Ativo** | Radio button | Não | Define o estado da conta SMTP. As opções são **Sim** e **Não**. |
| **E-mail do remetente** | Campo de texto | Sim | Endereço de e-mail do remetente da conta SMTP. |
| **E-mail de resposta (Reply-To)** | Campo de texto | Sim | Endereço de e-mail de resposta da conta SMTP. |
| **E-mail de retorno (Return-Path)** | Campo de texto | Sim | Endereço de e-mail de retorno da conta SMTP. |
| **E-mail de confirmação** | Campo de texto | Sim | Endereço de e-mail de confirmação da conta SMTP. |
| **Conta padrão** | Botão de opção | Não | Indica se a conta é a conta padrão de utilização no Segura. As opções são **Sim** ou **Não**. |
| **Enviar confirmação de leitura** | Botão de opção | Não | Indica se a conta SMTP receberá uma confirmação de leitura. As opções são **Sim** ou **Não**. |
| **Obrigar o uso da configuração** | Botão de opção | Não | Indica se a conta SMTP será forçada a usar a configuração padrão. As opções são **Sim** ou **Não**. |
| **Habilitar rodapé** | Botão de opção | Não | Indica se a conta SMTP deverá enviar o rodapé da mensagem. As opções são **Sim** ou **Não**. |
| **Host SMTP** | Campo de texto | Sim | Endreço do host da conta STMP. |
| **Porta** | Campo de texto | Não | Porta em que o host da conta SMTP está escutando. |
| **Usar conexão segura?** | Botão de opção | Não | Indica se a conta SMTP deve utilizar uma conexão segura. As opções são **Sim** ou **Não**. |
| **Tipo de conexão segura** | Botão de opção | Não | Indica qual o tipo de conexão segura será usado. As opções são **TLS** ou **SSL**. |
| **Usar autenticação** | Botão de opção | Não | Indica se a conta SMTP deve usar uma credencial para autenticação. As opções são **Sim** ou **Não**. |
| **Ignorar erro de certificado** | Botão de opção | Não | Indica se a conta SMTP deve ignorar os erros de certificado. As opções são **Sim** ou **Não**. |
| **Usar Network Connector** | Botão de opção | Não | Indica se a conta deve utilizar um **Network Connector**. As opções são **Sim** ou **Não**. |
| **Network Connector** | Menu suspenso | Não | Selecione o Network Connector para utilizar na conexão da conta SMTP. **Nota**: essa opção só ficará habilitada caso você selecione **Sim** no *radio button* **Usar Network Connector.** |
| **Credencial para autenticação** | Menu suspenso | Não | Selecione a credencial que será utilizada para autenticação pela conta SMTP. **Nota**: caso você selecione **Sim** na opção **Usar autenticação**, a seleção de uma credencial é obrigatória; a credencial deverá estar previamente cadastrada no Segura. |

## E-mail de teste \- Conta
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Enviar para** | Campo de texto | Sim | Preencha com o endereço de e-mail para onde o Segura deverá enviar a mensagem de teste. |
| **Assunto** | Campo de texto | Sim | Preencha com o assunto do e-mail de teste. Por padrão está preenchido com a string `MENSAGEM DE TESTE!`. |
| **Mensagem** | Campo de texto | Sim | Preencha com o corpo do e-mail de teste. Por padrão está preenchido com a string `ATENÇÃO: ESTA É UMA MENSAGEM DE TESTE!`. |

