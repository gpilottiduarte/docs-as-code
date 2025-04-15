# Sessões para auditoria

Neste documento, você encontrará todas as informações sobre o relatório **Sessões para auditoria**, que mostra a lista de sessões configuradas para serem auditadas durante o uso.

:::(info) (**Info**)
Você só poderá ver as sessões às quais estiver registrado como auditor.
:::

---
### Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Controle de acesso** > **Sessões para auditoria**.

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
| ------------------ | ----------------- |
| **Código**| Número de identificação da sessão.|
| **Identificação de sessão** | Identificador da sessão realizada.|
| **Credencial**         | A credencial que foi acessada.|
| **Dispositivo**        | Endereço de IP do dispositivo acessado.|
| **Usuário**            | Nome do usuário que realizou o acesso à sessão.|
| **IP de origem**| Endereço de IP da máquina de origem que realizou o acesso.    |
| **Protocolo**| O protocolo utilizado no acesso.|
| **Início da sessão**   | Data e hora que a sessão iniciou.|
| **até**                | Data final para a busca dos registros.|
| **Auditado?**| Status que mostra se a sessão foi ou não auditada, sendo as opções Sim e Não. |
| **Filtrar**| Botão para fazer a busca de acordo com os filtros escolhidos. |
| **Limpar**| Botão para limpar os filtros.|


## Campos do relatório

* **Código**.
* **Usuário**.
* **IP de origem**.
* **Credencial**.
* **Dispositivo**.
* **Protocolo**.
* **Identificação de sessão**: identificador da sessão realizada.
* **Auditado?**.
* **Início**: data e hora do início da sessão.
* **Término**: data e hora do término da sessão.
* **Tempo**: duração da sessão.
* **Ação**:
    * **Logs da sessão**: representado pelo ícone das **quatro barras horizontais**, abre a tela com as informações sobre a sessão.
    * **Três pontos verticais**: menu suspenso com as ações possíveis de serem realizadas.
        * **Balão de texto (Comentar sessão)**: abre a tela **Comentar sessão** com um espaço para o auditor inserir comentários sobre a sessão.
        * **Play (Vídeo da sessão)**: abre a tela **Vídeo da sessão** com as informações da sessão com a possibilidade de visualizar ou realizar o download do vídeo.
        :::(info) (**Info**)
        Observe que ao gerar um vídeo para download, uma grande quantidade de recursos no servidor será consumida.
        :::
        * **Check (Auditar)**: clique **Sim** na caixa de confirmação para continuar com a ação. Ao confirmar, o campo **Auditado?** será mudado para **Sim**, confirmando que a sessão já passou por auditoria.
        * **Martelo (Auditoria da sessão)**: abre a tela **Auditoria da sessão** com as informações sobre os auditores da sessão.

:::(info) (**Info**)
O relatório exibe 30 registros por tela. Para ir para as próximas telas, clique nos botões de avançar ao final do relatório.
:::

### Tela Logs da sessão
#### Aba Dados da Sessão

* **Código**: código de identificação da sessão.
* **Início**: data e hora do início da sessão.
* **Fim**: data e hora do término da sessão.
* **Tipo**: tipo da sessão acessada.
* **Host**: número IP do host da sessão.
* **Nome do usuário**: nome do usuário cadastrado na credencial.
* **Mensagem de erro**: mensagem exibida caso ocorra um erro no acesso.

#### Aba Dados do Usuário

* **Usuário**: nome e username do usuário que realizou o acesso.
* **IP do Usuário**: número de IP da máquina do usuário.

#### Aba Eventos da sessão

* **Usuário**: nome do usuário que utilizou a sessão.
* **Data/Hora**: data e hora das ações realizadas durante a sessão.
* **Evento**: o evento realizado na sessão.
* **Observação**: mensagem de observação de cada evento.

#### Aba Logs da Sessão

* **Procurar por termo**: caixa de texto para procurar um termo específico que foi utilizado durante a sessão.
* **Procurar**: botão para realizar a busca.
    * Imagem com todos os eventos e ações realizadas dentro da sessão.
* **Exportar dados**: localizado no rodapé da tela, exporta os dados da sessão em formato `.csv`.