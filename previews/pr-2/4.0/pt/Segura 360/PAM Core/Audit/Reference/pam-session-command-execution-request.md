# Solicitar execução do comando

Este documento fornece informações sobre a tela do formulário **Solicitar execução do comando**, onde é possível realizar a solicitação para utilizar um comando que foi cadastrado com a ação de Bloquear a execução ou Interromper.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Controle de acesso > Comandos auditados > Solicitar execução do comando.**

---
## Tela de cadastro de solicitação de execução do comando

| **Item**  | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Comando*** | Campo de texto | Sim | Comando solicitado para uso. Os comandos precisam estar especificados por completo. Ex.: `update public\.nome da tabela` |
| **Dispositivo*** | Menu suspenso | Sim | Selecione na lista disponível em qual dispositivo o comando será utilizado. As opções são os dispositivos cadastrados no Segura. |
| **Tipo de sessão*** | Menu suspenso | Sim | Selecione o tipo da sessão onde o comando será utilizado. As opções são *Todos*, *Terminal Proxy* e *Banco de dados*. |
| **Justificativa*** | Campo de texto | Sim | Descreva o porquê é preciso utilizar o comando. |
| **Motivo*** | Menu suspenso | Sim | Selecione o motivo para a solicitação da execução do comando. As opções são de acordo com os motivos cadastrados no Segura. |
| **Governance Code** | Campo de texto | Não | Informe o código do software ITSM. |
| **Início Acesso*** | Seletor de data e hora | Sim | Selecione o dia e a hora inicial que a execução do comando estará disponível para utilização. |
| **Fim Acesso*** | Seletor de data e hora | Sim | Selecione o dia e a hora final que a execução poderá ser utilizada. |