# Certificados sem dispositivos

Este artigo fornece descrições das informações disponíveis no relatório **Certificados sem dispositivos**. Esse relatório permite identificar os certificados não utilizados, o que pode indicar risco de segurança ou a necessidade de uma realocação adequada. 

:::(Info) (Info)
Caminho para acessar: **Certificate Manager > Relatórios > Certificados sem dispositivos**.
:::

## Ícones
|Item|Descrição|
|-|-|
|**Mostrar os filtros**|Representado pelo ícone da lupa, exibe ou oculta os campos de busca na tela.|
|**Atualizar**|Representado pelo ícone de seta no sentido anti-horário, atualiza a página.|
|**Exibir ações**|Representado pelo ícone de três pontos verticais, exibe um menu suspenso com possíveis ações para o item.|
|**Importar certificado**|Representado pelo ícone de upload (uma seta para cima), abre o formulário **[Importar certificado](/v3-32/docs/pt/certificates-flow-how-to-import-certificate)**.|
|**Operações em lote**|Representado pelo ícone de três linhas verticais, abre a página **[Operações em lote](/v3-32/docs/pt/certificate-manager-batch-operations)** de certificados.|
|**Imprimir relatório**|Representado pelo ícone da impressora, abre nova página para impressão do relatório.|
|**Exportar CSV**|Representado pelo ícone da folha de papel, baixa o relatório.|
|**Agendar relatório**|Representado pelo ícone do relógio, abre o formulário **[Agendar relatório](/v3-32/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports)**.|

## Campos de busca
|Item|Descrição|
|-|-|
|**Cód. do certificado**|Utilizado para buscar o certificado pelo seu número de identificação.|
|**Cód. da requisição**|Utilizado para buscar o certificado pelo número de identificação da requisição.|
|**Autoridade certificadora**|Utilizado para buscar o certificado pela autoridade que o assinou.|
|**Nome comum**|Utilizado para buscar o certificado pelo CN.|
|**Origem**|Utilizado para buscar o certificado pela origem. Exibe um menu suspenso com as opções: *Scan e Discovery*, *Request* e *Importação manual*. 
|**Data de vencimento**|Utilizado para buscar o certificado pela data de vencimento. Exibe um calendário para selecionar uma data específica ou para definir uma data inicial e criar um intervalo de tempo.
|**até**|Utilizado para buscar o certificado pela data de vencimento. Exibe um calendário para definir uma data final e criar um intervalo de tempo.
|**Estado**|Utilizado para buscar o certificado pelo status. Exibe um menu suspenso com as opções: *Válido*, *Revogado*, *Renovação requisitada* e *Vencido*. 
|**Ambientes**|Utilizado para buscar o certificado pelo ambiente definido no cadastro.|
|**Sistemas**|Utilizado para buscar o certificado pelo sistema definido no cadastro.|
|**Projeto**|Utilizado para buscar o certificado pelo nome do projeto definido no cadastro.|
|**Responsável**|Utilizado para buscar o certificado pelo usuário responsável.|
|**Ativo**|Utilizado para buscar o certificado pelo status no sistema. Exibe um menu suspenso com as opções *Sim* e *Não*. |
|**Possui vínculo?**|Utilizado para buscar o certificado pelo vínculo com dispositivos. Exibe um menu suspenso com as opções *Sim* e *Não*. |
|**Filtrar**|Botão para executar o processo de filtragem configurado.|
|**Limpar**|Botão para limpar os campos preenchidos.|

Os resultados são exibidos em formato de lista na tela, com colunas nomeadas conforme os campos correspondentes. A lista apresenta informações que não constam nos campos de busca:

* **Tipo de validação**: a validação definida no cadastro da requisição. Pode ser: *DV SSL, EV SSL* ou *OV SSL*.
* **Tipo de domínio**: o domínio definido no cadastro da requisição. Pode ser: *único, múltiplos* ou *wildcard*.
* **Tags**: marcadores de identificação definidos no cadastro da requisição.
* **Dispositivos**: quantos dispositivos estão vinculados ao certificado. Deve sempre apresentar o número zero.

## Ação
Esta coluna apresenta botões de ação para executar tarefas relacionadas ao componente.
|Item|Descrição|
|-|-|
|**Informações do certificado**|Representado pelo ícone do cartão de identificação, abre a página **[Informações do certificado](/v3-32/docs/pt/certificate-manager-certificate-information)**.|
|**Exibir ações**|Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações para os certificados.|
|**Publicar certificado**|Representado pelo ícone de play (um quadrado com uma seta para a direita), abre o fomulário **[Publicar certificado](/v3-32/docs/pt/certificates-flow-how-to-publish-a-certificate)**.|
|**Vincular dispositivos**|Representado pelo ícone de dois elos, abre a página **[Vincular dispositivos](/v3-32/docs/pt/certificate-manager-settings-how-to-link-devices-certificate)**.|
|**Renovar certificado**|Representado pelo ícone de duas setas em sentido horário, abre o formulário **[Renovar certificado](/v3-32/docs/pt/certificates-flow-how-to-renew-a-certificate)**.|
|**Revogar certificado**|Representado pelo ícone de proibido, abre uma mensagem pop-up para confirmar a revogação.|
|**Alterar**|Representado pelo ícone do lápis e papel, abre o formulário **[Cadastro do certificado](/v3-32/docs/pt/certificate-manager-reference-certificate-form)**.|
|**Desativar**|Representado pelo ícone da lata de lixo, abre uma mensagem pop-up para confirmar a desativação.|
|**Histórico de renovação de certificado**|Representado pelo ícone do relógio, abre a página *Histórico de renovações do certificado*, para consulta.|
|**Automatizar fluxo**|Representado pelo ícone de três engrenagens, abre o formulário **[Automações](/v3-32/docs/pt/how-to-automate-the-lifecycle-of-a-certificate)**.|
|**Visualizar senha da chave**|Representado pelo ícone da chave , abre a página **[Visualizar senha da chave](/v3-32/docs/pt/certificate-manager-settings-how-to-retrieve-cert-passwords)**. É exibido somente nos itens que possuem uma senha para a chave.|
|**Detalhes da publicação**|Representado pelo ícone de uma folha de papel com linhas, abre a página **[Publicações](/v3-32/docs/pt/certificate-manager-reference-publishing)**. É exibido somente nos certificados publicados. |
|**Detalhes da requisição**|Representado pelo ícone de três linhas paralelas, abre a página **[Requisições](/v3-32/docs/pt/certificate-manager-reference-certificate-requests)**. É exibido somente nos itens com o status *Renovação requisitada*. |
|**Detalhes da revogação**|Representado pelo ícone da letra ‘i’, abre a página *Orientações para validação*. É exibido somente nos itens com o status *Revogado*.|
|**Ativar**|Representado pelo ícone de correto e exibida somente nos itens com o status *Inativo*, abre uma mensagem pop-up para confirmar a ativação do certificado.|
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).

