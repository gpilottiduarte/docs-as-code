# Comandos auditados

Neste documento, você encontrará todas as informações sobre o relatório **Comandos auditados**, que mostra a lista de comandos que foram cadastrados para que sejam auditados durante uma sessão.

---
### Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Configurações** > **Acesso** > **Comandos auditados**.

---


## Barra superior
**Item**|**Descrição**
|---|---|
**Mostrar os filtros**|Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela.
**Atualizar**|Representado pelo ícone da seta no sentido anti-horário, atualiza a página.
**Exibir ações**|Representado pelo ícone de três pontos verticais, exibe as ações possíveis para a página.
| **Novo comando global**| Representado pelo ícone de soma, adiciona um comando com regra global.|
| **Novo comando por credencial**  | Representado pelo ícone de chave, adiciona um comando com regra para credencial.|
| **Novo comando por dispositivo** | Representado pelo ícone de computador, adiciona um comando com regra para dispositivo.|
| **Novo comando por grupo**| Representado pelo ícone de grupo, adiciona um comando com regra para grupos de acesso.|
**Imprimir relatório**|Representado pelo ícone de impressora, abre uma nova página para impressão do relatório.
**Exportar CSV**|Representado pelo ícone de folha de papel, baixa o relatório.
| **Agendar relatório** | Representado pelo ícone de relógio, abre o formulário para agendar a geração do relatório em uma data e hora específicas. |


## Campos de busca

| **Item**| **Descrição**|
| ------------ | ------------------------------------------- |
| **Código**       | Número da ordem do cadastro do comando.|
| **Nome**         | Nome dado ao comando cadastrado.|
| **Comando**      | Comando auditado.|
| **Criticidade**  | Nível de criticidade atribuída ao comando, sendo as opções *Baixa*, *Média* e *Alta*. |
| **Tipo**         | O tipo de regra que o comando foi criado, sendo as opções *Credencial*, *Dispositivo*, *Global* e *Grupo*. |
| **Tipo de sessão** | O tipo da sessão que o comando foi utilizado, sendo as opções *Todos*, *Terminal Proxy* e *Database Proxy*. |
| **Ativo**        | Status do comando, sendo as opções **Sim** e **Não**.|



## Campos do relatório

* **Código**.
* **Nome**.
* **Comando**.
* **Criticidade**.
* **Tipo**.
* **Tipo de sessão**.
* **Ação durante a sessão**: a ação que irá ocorrer quando o comando for executado.
* **Ocorrências**: quantidade de vezes que o comando deve ser utilizado para ocorrer a ação escolhida.
* **Score**.
* **Ativo**.
* **Ação**:
    * **Alterar**: representado pelo ícone de **lápis e papel**, abre a tela de cadastro de comando por credencial, por dispositivo, por grupo ou global, de acordo com o tipo especificado no comando. Faça a alteração desejada e clique em **Salvar**.
    :::(info) (**Info**)
    Se você precisar criar um comando semelhante a um comando já existente, incluindo entidades já ligadas (como dispositivo, credencial ou grupo de acesso), você pode utilizar a ação **Clonar comando**.
    :::
    * **Ícone do três pontos verticais**: abre a opção **Visualizar histórico de auditoria**, e a tela do relatório Log de eventos é exibida.

:::(info) (**Info**)
O relatório exibe 30 registros por tela. Para ir para as próximas telas, clique nos botões de avançar ao final do relatório.
:::

