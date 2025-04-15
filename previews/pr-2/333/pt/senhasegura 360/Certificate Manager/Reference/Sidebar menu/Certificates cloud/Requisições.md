# Requisições

Este artigo fornece descrições das informações disponíveis na página principal de **Requisições**.
:::(Info) (Info)
Caminho para acessar: **Certificate Manager > Certificados cloud > Amazon ACM > Requisições**.
:::

## Ícones

| Item | Descrição |
| --- | --- |
| **Mostrar os filtros** |Representado pelo ícone da lupa, exibe ou oculta os campos de busca na tela.|
| **Atualizar** |Representado pelo ícone de seta no sentido anti-horário, atualiza a página.|
| **Exibir ações** |Representado pelo ícone de três pontos verticais, exibe um menu suspenso com possíveis ações para certificados A1.|
| **Novo** |Representado pelo ícone do sinal de soma, abre o formulário *Request*.| 
| **Imprimir relatório** |Representado pelo ícone da impressora, abre uma nova página para impressão do relatório.|
| **Exportar CSV** |Representado pelo ícone da folha de papel, baixa o relatório.|
| **Agendar relatório** |Representado pelo ícone do relógio, abre o formulário **[Agendar relatório](/v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports)**. |

## Campos de busca

| Item | Descrição |
| --- | --- |
**Código**|Utilizado para buscar a requisição pelo seu número de identificação no sistema.
**Conta AWS**|Utilizado para buscar a requisição pela conta AWS.
**Região**|Utilizado para buscar a requisição pela região da conta AWS.
**CA**|Utilizado para buscar a requisição pela CA.
**Nome de domínio**|Utilizado para buscar a requisição pelo domínio adicionado à requisição.
**Nomes adicionais**|Utilizado para buscar a requisição pelos outros nomes adicionados à requisição.
**Tags e valores**|Utilizado para buscar a requisição pelas tags e valores adicionados à requisição.
**Estado**|Utilizado para buscar a requisição pelo status da requisição no sistema. Exibe um menu suspenso com as opções: *Gerado, Assinatura solicitada, Solicitação aprovada, Solicitação reprovada, Aguardando assinatura, Assinado, Erro ao assinar* e *Cancelado*.
**Solicitante**|Utilizado para buscar a requisição pelo usuário que fez a solicitação da mesma.
**Data de solicitação**|Utilizado para buscar a requisição pela data do pedido. Exibe um calendário para selecionar uma data específica ou para definir uma data inicial e criar um intervalo de tempo.
**até**|Utilizado para buscar a requisição pela data do pedido. Exibe um calendário para definir uma data final e criar um intervalo de tempo.
**Filtrar**|Botão para executar o processo de filtragem configurado.
**Limpar**|Botão para limpar os campos preenchidos.

O sistema exibe os resultados em formato de lista, com colunas nomeadas após os campos correspondentes.

## Ação
Esta coluna apresenta botões de ação para executar tarefas relacionadas ao componente.

| Item | Descrição |
| --- | --- |
**Detalhes do processo**|Representado pelo ícone da letra ‘i’, abre a página *Detalhes do processo*, com orientações para validação do certificado, seja por e-mail ou DNS.
**Clonar requisição**|Representado pelo ícone de clonar (dois quadrados sobrepostos), abre uma mensagem pop-up para confirmar a clonagem. É útil para cenários onde é necessário atualizar apenas a validade do certificado.

