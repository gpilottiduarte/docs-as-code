# System parameters - Executions

Este documento fornece informações sobre a tela do formulário **Parâmetros do sistema**, na aba **Executions** que se referem às parametrizações do módulo.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Parâmetros do sistema > Global > Execution.**

:::(warning) (**Atenção**)  
Todos os campos vêm preenchidos com um valor padrão, recomendado pelo Segura. Contudo, você pode fazer modificações conforme sua necessidade.  
:::

---
### Aba Executions

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Quantidade de tentativas de troca*** | Seletor de quantidade | Sim | Define a quantidade que poderá ocorrer a troca. Os valores podem ser de no mínimo 1 e no máximo 10. Valor padrão: **1**. |
| **Timeout da conexão (s)*** | Seletor de quantidade | Sim | Define o tempo de inatividade até encerrar uma conexão. Os valores podem ser de no mínimo 1 e no máximo 300. Valor padrão: **5**. |
| **Timeout de leitura (s)*** | Seletor de quantidade | Sim | Define o tempo máximo de leitura de resposta de um comando. Os valores podem ser de no mínimo 1 e no máximo 300. Valor padrão: **5**. |
| **Total de registros por ciclo*** | Seletor de quantidade | Sim | Quantidade de registros que serão trocados por ciclo de execução. O valor mínimo é de 200 e no máximo 10000. Valor padrão: **200**. |
| **Intervalo entre tentativas (min)*** | Seletor de quantidade | Sim | Define o tempo de intervalo entre as tentativas de execução. O valor mínimo é de 0 e no máximo 1440  Valor padrão: **0**. |
| **Intervalo entre tentativas com erro (min)*** | Seletor de quantidade | Sim | Define o tempo mínimo para tentar trocar novamente uma senha com erro de troca. O valor mínimo é de 30 e no máximo 10080. Valor padrão: **30**. |