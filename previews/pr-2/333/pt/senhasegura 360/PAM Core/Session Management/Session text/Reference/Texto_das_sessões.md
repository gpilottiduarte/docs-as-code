# Texto das sessões

Neste documento, você encontrará todas as informações sobre o relatório **Texto das sessões**, que exibe os textos de entrada e saída de uma sessão, desde que a mesma esteja configurada para indexar os textos das sessões.

Para saber como configurar uma sessão para que seus textos sejam gravados, acesse o documento sobre [Como configurar os textos das sessões](/v3-33/docs/pt/pam-session-how-to-configure-session-texts).

### Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Controle de acesso** > **Texto das sessões**.

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
| ---------------------- | ------------------------ |
| **String**                 | Texto de entrada ou saída digitado na sessão.|
| **Identificação de sessão** | Representador da sessão realizada.|
| **Início da sessão**        | Data que a sessão teve início.|
| **até**                    | Data final para a busca dos logs.|
| **Usuário Local**           | Usuário que acessou a sessão.|
| **IP do usuário**           | Endereço de IP da máquina de origem do usuário.|
| **Protocolo**              | O protocolo utilizado no acesso.|
| **Host**                   | Endereço do host referente ao dispositivo da sessão.|
| **Usuário remoto**          | Credencial da sessão acessada.|
| **Filtrar**| Botão para fazer a busca de acordo com os filtros escolhidos.|
| **Limpar**                 | Botão para limpar os filtros escolhidos.|

## Campos do relatório

* **Código**.
* **Identificação de sessão**: identificador da sessão realizada.
* **Início**: data e hora do início da sessão.
* **Término**: data e hora do término da sessão.
* **Tempo**: duração da sessão.
* **Usuário local**.
* **IP do usuário**.
* **Protocolo**.
* **Host**.
* **Usuário remoto**.
* **Data/Hora**: data e hora do acesso à sessão.
* **Input/Output**: indica se o texto apresentado foi uma entrada ou saída (input/output).
* **String**.
* **Ação**:
    * **Logs**: ícone representado pelas **quatro barras horizontais**, abre a tela, **Log da sessão**, com as informações sobre a sessão.
    * **Três pontos verticais**:
        * **Assistir stream**: representado pelo ícone de **play**, abre a tela com o vídeo da sessão.

:::(info) (**Info**)
O relatório exibe 30 registros por tela. Para ir para as próximas telas, clique nos botões de avançar ao final do relatório.
:::

### Tela Log da sessão
#### Aba Dados da Sessão

* **Código**: código de identificação da sessão.
* **Início**: data e hora do início da sessão.
* **Fim**: data e hora do término da sessão.
* **Tipo**: tipo da sessão acessada.
* **Host**: endereço de IP do host da sessão.
* **Nome do usuário**: nome do usuário cadastrado na credencial.
* **Mensagem de erro**: mensagem exibida caso ocorra um erro no acesso.

#### Aba Dados do Usuário

* **Usuário**: nome e username do usuário que realizou o acesso.
* **IP do Usuário**: endereço de IP da máquina do usuário.

#### Aba Eventos da sessão
* **Usuário**: nome do usuário.
* **Data/Hora**: data e hora das ações realizadas durante a sessão.
* **Evento**:  evento realizado na sessão.
* **Observação**: mensagem de observação de cada evento.

#### Aba Logs da Sessão

* **Procurar por termo**: caixa de texto para procurar um termo específico que foi utilizado durante a sessão.
* **Procurar**: botão para realizar a busca.
    * Imagem com todos os eventos e ações realizadas dentro da sessão.
* **Exportar dados**: localizado no rodapé da tela, exporta os dados da sessão em formato `.csv`.
