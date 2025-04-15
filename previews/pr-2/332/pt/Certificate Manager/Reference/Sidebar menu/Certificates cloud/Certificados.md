# Certificados

Este artigo fornece descrições das informações disponíveis na página principal de **Certificados**.

:::(Info) (Info)
Caminho para acessar: **Certificate Manager > Certificados cloud > Amazon ACM > Certificados**.
:::

## Ícones

| Item | Descrição |
| --- | --- |
| **Mostrar os filtros** |Representado pelo ícone da lupa, exibe ou oculta os campos de busca na tela.|
| **Atualizar** |Representado pelo ícone de seta no sentido anti-horário, atualiza a página.|
| **Exibir ações** |Representado pelo ícone de três pontos verticais, exibe um menu suspenso com possíveis ações para certificados A1.|
| **Imprimir relatório** |Representado pelo ícone da impressora, abre uma nova página para impressão do relatório.|
| **Exportar CSV** |Representado pelo ícone da folha de papel, baixa o relatório.|
| **Agendar relatório** |Representado pelo ícone do relógio, abre o formulário **[Agendar relatório](/v3-32/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports)**. |

## Campos de busca
| Item | Descrição |
| --- | --- |
**Código**|Utilizado para buscar o certificado pelo seu número de identificação no sistema.
**Conta AWS**|Utilizado para buscar o certificado pela conta AWS selecionada na requisição.
**Região**|Utilizado para buscar o certificado pela região da conta AWS.
**CA**|Utilizado para buscar o certificado pela CA selecionada na requisição.
**Nome de domínio**|Utilizado para buscar o certificado pelo domínio adicionado à requisição.
**Nomes adicionais**|Utilizado para buscar o certificado pelos outros nomes adicionados à requisição.
**Estado**|Utilizado para buscar o certificado pelo status. Exibe um menu suspenso com as opções *Válido, Revogado, Renovação Requisitada* e *Vencido*.
**Tags e valores**|Utilizado para buscar o certificado pelas tags e valores adicionados à requisição.
**Válido até**|Utilizado para buscar o certificado pela data de validade. Exibe um calendário para selecionar uma data específica ou para definir uma data inicial e criar um intervalo de tempo.
**até**|Utilizado para buscar o certificado pela data de validade. Exibe um calendário para definir uma data final e criar um intervalo de tempo.
**Elegível para renovação**|Utilizado para buscar o certificado pela [classificação para renovação](https://docs.aws.amazon.com/pt_br/acm/latest/userguide/managed-renewal.html). 
**Origem**|Utilizado para buscar o certificado pela origem. Exibe um menu suspenso com as opções: *Scan e discovery*, *Request* e *Importação manual*.
**Responsável**|Utilizado para buscar o certificado pelo nome do responsável.
**Filtrar**|Botão para executar o processo de filtragem configurado.
**Limpar**|Botão para limpar os campos preenchidos.

O sistema exibe os resultados em formato de lista, com colunas nomeadas após os campos correspondentes.

## Ação
Esta coluna apresenta botões de ação para executar tarefas relacionadas ao componente.
| Item | Descrição |
| --- | --- |
**Informações do certificado**|Representado pelo ícone do cartão de identificação, abre a página *Informações do certificado*.
**Detalhes da requisição**|Representado pelo ícone de três linhas verticais, abre a página de *Requisições*. 
**Histórico de renovação de certificado**|Representado pelo ícone do relógio, abre a página de consulta *Histórico de renovações do certificado*.
**Desativar**|Representado pelo ícone da lata de lixo, abre uma mensagem pop-up para confirmar a desativação do certificado.
**Ativar**|Representado pelo ícone de ‘check’, abre uma mensagem pop-up para confirmar a ativação do certificado. Aparece somente para certificados desativados.



