# Discovery de certificados

Este artigo fornece descrições das informações disponíveis na página principal de **Discovery de certificados**.

:::(Info) (Info)
Caminho para acessar: **Certificate Manager > Eventos > Discovery de certificados**.
:::

## Ícones
| Item | Descrição |
| --- | --- |
|**Mostrar os filtros**|Representado pelo ícone da lupa, exibe ou oculta os campos de busca na tela.|
|**Atualizar**|Representado pelo ícone de seta no sentido anti-horário, atualiza a página.|
|**Exibir ações**|Representado pelo ícone de três pontos verticais, exibe um menu suspenso com possíveis ações para o item.|
|**Imprimir relatório**|Representado pelo ícone da impressora, abre nova página para impressão do relatório.|
|**Exportar CSV**|Representado pelo ícone da folha de papel, baixa o relatório.|
|**Agendar relatório**|Representado pelo ícone do relógio, abre o formulário **[Agendar relatório](/v4/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports)**.|

## Campos de busca

| Item | Descrição |
| --- | --- |
|**Nome comum**|Utilizado para buscar o certificado pelo seu CN.|
|**Emissor**|Utilizado para buscar o certificado pela CA que o emitiu.|
|**Data de obtenção**|Utilizado para buscar o certificado pela data de obtenção via Discovery. Exibe um calendário para selecionar uma data específica ou para definir uma data inicial e criar um intervalo de tempo.|
|**até**|Utilizado para buscar o certificado pela data de obtenção via Discovery. Exibe um calendário para definir uma data final e criar um intervalo de tempo.|
|**Discovery**|Utilizado para buscar o certificado pelo tipo de Discovery.|
|**Ativo**|Utilizado para buscar o certificado pelo seu status. Exibe um menu suspenso as opções: *Ativo* ou *Inativo*.|
|**Filtrar**|Botão para executar o processo de filtragem configurado.|
|**Limpar**|Botão para limpar os campos preenchidos.|

:::(warning) (**Atenção**)
Para que a varredura de certificados funcione corretamente em sistemas Windows, é necessário que os recursos `LocalAccountTokenFilterPolicy` e `WinRM` estejam habilitados no sistema operacional.
:::

Os resultados são exibidos em formato de lista na tela, com colunas nomeadas conforme os campos correspondentes. A lista apresenta informações que não constam nos campos de busca:

* **Código**: o número de identificação do evento no sistema.
* **Dispositivo**: o dispositivo vinculado ao certificado.
* **Organização**: a organização cadastrada nas configurações do componente.
* **Valido até**: a data de validade do certificado.
* **Porta/Path**: a localização do certificado.
* **Scan utilizado**: o scan utilizado para identificar os certificados em uso.

## Ação
Esta coluna apresenta botões de ação para executar tarefas relacionadas ao componente.
| Item | Descrição |
| --- | --- |
|**Certificado correspondente**|Representado pelo ícone do cartão de identificação, abre a página [**Certificados**](/v4/docs/pt/certificate-manager-reference-certificate-certificate-2).|
|**Exibir ações**|Representado pelo ícone de três pontos verticais. Exibe um menu suspenso com ações possíveis para os certificados.|
|**Informações do certificado**|Representado pelo ícone da lupa, abre a página [**Informações do certificado**](v3-30/docs/pt/certificate-manager-settings-how-to-download-certificate-key).|
|**Detalhes de publicação**|Representado pelo ícone da letra ‘i’, abre a página *Dados que serão usados em publicações futuras*.|
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).

