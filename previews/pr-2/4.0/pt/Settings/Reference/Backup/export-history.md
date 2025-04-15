# Histórico de exportação

Este documento fornece informações sobre o relatório **Backups efetuados** que apresenta as informações sobre os backups realizados no Segura.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Backup \> Histórico de exportação.**

## Menu de Ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Exportar dados** | Botão | Direciona para a tela **Exportar dados** para que voc6e possa exportar os dados de backup da aplicação. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

:::(info) (Info)  
Você deve ter as partes da chave mestra para realizar a exportação de dados.  
:::

## Campos de busca

:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Início** | Campo de data | Filtra os registros pelo período em que foram executados. |
| **Tipo** | Menu suspenso | Filtra de acordo com o tipo de exportação realizado. As opções são *Completo, Informações Protegidas* ou *Senhas de Dispositivos*. |
| **Motivo** | Menu suspenso | Filtra de acordo com o modo que o backup foi realizado. As opções são **Manual** e **Agendamento**. |

## Campos do relatório

* **Código:** código de exportação dos dados.  
* **Tipo.**  
* **Motivo.**  
* **Início:** data e hora de início da exportação. Será exibida no formato `DD/MM/AAAA HH:MM`.  
* **Fim:** data e hora do final da exportação. Será exibida no formato `DD/MM/AAAA HH:MM.`  
* **Solicitado por.**  
* **Ações**:
  * **Download**: baixa o arquivo de exportação será no formato `.tar.gz`.

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::