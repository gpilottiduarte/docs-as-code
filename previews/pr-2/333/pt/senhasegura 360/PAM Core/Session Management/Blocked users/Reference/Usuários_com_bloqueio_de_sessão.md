# Usuários com bloqueio de sessão

Neste documento você encontrará todas as informações sobre o relatório Usuários com bloqueio de sessão, que mostra a lista de usuários que foram bloqueados durante o uso de uma sessão.

### Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Controle de acesso** >** Usuários bloqueados**.

---
## Barra superior
**Item**|**Descrição**
|---|---|
**Mostrar os filtros**|Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela.
**Atualizar**|Representado pelo ícone da seta no sentido anti-horário, atualiza a página.
**Exibir ações**|Representado pelo ícone de três pontos verticais, exibe as ações possíveis para a página.
**Imprimir relatório**|Representado pelo ícone de impressora, abre uma nova página para impressão do relatório.
**Exportar CSV**|Representado pelo ícone de folha de papel, baixa o relatório.
| **Agendar relatório** | Representado pelo ícone de relógio, abre o formulário para agendar a geração do relatório em uma data e hora específicas. |


## Campos de Busca

| **Item**| **Descrição**|
|------|------|
| **Código**| Número de identificação do bloqueio.|
| **Identificação de sessão** | Identificador da sessão realizada.|
| **Estado**| Status do bloqueio, sendo os valores **Ativo** e **Inativo**.|
| **Bloqueado**| Nome do usuário que foi bloqueado.|
| **Autor**| Nome do usuário autor do bloqueio.|
| **Desbloqueador**| Nome do usuário que realizou o desbloqueio.|
| **Data/hora bloqueio**  | Data em que o bloqueio foi efetuado.|
| **até**| Data final para a busca dos eventos.|

## Campos do relatório

* **Id**: número de identificação da ordem dos registros no relatório.
* **Código**.
* **Identidade de sessão**.
* **Estado**.
* **Bloqueado**.
* **Data/hora bloqueio**.
* **Autor**.
* **Data/hora desbloqueio**: data e hora que o desbloqueio foi efetuado.
* **Desbloqueador**.
* **Ação**:
    * **Bloquear/Liberar interatividade**: ícone representado pelo cadeado.
    :::(info) (**Info**)
    Caso o valor do campo **Estado** seja **Inativo**, nenhum ícone estará disponível na coluna **Ação**.
    :::

:::(info) (**Info**)
O relatório exibe 30 registros por tela, para ir para as próximas telas, clique nos botões de avançar ao final do relatório.
:::
