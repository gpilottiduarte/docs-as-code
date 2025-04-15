# Servidores TACACS

Este documento fornece informações sobre a tela do relatório **Servidores** que exibe informações sobre os servidores Tacacs.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Tacacs \> Servidores.**

## Menu de ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Novo** | Botão | Direciona para a tela **Servidores.** |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código de identificação do servidor no Segura. |
| **Hostname** | Campo de texto | Filtra pelo hostname do servidor. |
| **Porta** | Campo de texto | Filtra pela porta de escuta do servidor. |
| **Status** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Ativo** e **Inativo.** Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório
* **Código.**  
* **Hostname.**  
* **Porta.**  
* **Timeout:** tempo de timeout do sistema. Mostrado em segundos.  
* **Máx. Tentativas:** número máximos de tentativas de login no servidor **Tacacs.**  
* **Ações:**  
  * **Alterar:** direciona para a tela **Servidores** em modo de edição.  
  * **Testar autenticação:** direciona para a tela **Teste de autenticação Tacacs**.
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Servidores
Nesta seção, você vai encontrar todas as informações sobre a tela **Cadastro de provider.**
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Hostname** | Campo de texto | Sim | Endereço de IP ou hostname do servidor. |
| **Porta** | Campo de texto | Não | Porta onde o servidor escuta. |
| **Ativo** | Botão de opção  | Não | Filtra os registros por seu estado de ativação. As opções são **Sim** ou **Não**. Limpe o campo para habilitar a opção **Todos**. |
| **Secret key** | Campo de texto | Não | Chave secreta do servidor. **Nota**:caso a *secret key* não seja alterada, o valor atual do campo será mantido. |
| **Timeout (s)** | Campo de texto | Sim | Tempo de *timeout* do servidor. |
| **Máx. Tentativas** | Campo de texto | Sim | Número máximo de tentativas de login. |

## Teste de autenticação TACACS
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Servidor** | Campo de texto | Não se aplica | Indica o endereço de IP ou hostname do servidor junto da porta. |
| **Nome do usuário** | Campo de texto | Sim | Nome de usuário para o teste de autenticação. |
| **Senha** | Campo de texto | Sim | Senha do usuário para o teste de autenticação. |

