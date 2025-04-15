# Logs de senha de certificados

Este artigo fornece descrições das informações disponíveis no relatório **Logs de senha de certificados**. Esse relatório fornece percepções sobre a segurança dos certificados e possíveis tentativas de ações não autorizadas.

:::(Info) (Info)
Caminho para acessar: **Certificate Manager > Relatórios > Logs de senha de certificados**.
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
| **Código** |Utilizado para buscar o log pelo número identificador do evento.|
| **Nome** |Utilizado para buscar o log pelo nome do certificado.|
| **Tipo** |Utilizado para buscar o log pelo tipo de senha. Exibe um menu suspenso com as opções *View Password Key*, *Visualizar senha de uma keystore* ou *Visualizar senha de revogação do certificado*.|
| **Tags** |Utilizado para buscar o log pelos marcadores adicionados.|
| **Data de visualização** |Utilizado para buscar o log pela data de visualização da senha. Exibe um calendário para selecionar uma data específica ou para definir uma data inicial e criar um intervalo de tempo.
| **até** |Utilizado para buscar o log pela data de visualização da senha. Exibe um calendário para definir uma data final e criar um intervalo de tempo.
| **Usuário** |Utilizado para buscar o log pelo usuário que visualizou a senha.|
|**Filtrar**|Botão para executar o processo de filtragem configurado.|
|**Limpar**|Botão para limpar os campos preenchidos.|

Os resultados são exibidos em formato de lista na tela, com colunas nomeadas conforme os campos correspondentes. A lista apresenta uma informação que não consta nos campos de busca:

* **Justificativa:** qual foi o motivo selecionado para visualizar a senha.

## Ação
Esta coluna apresenta botões de ação para executar tarefas relacionadas ao componente.
| Item | Descrição |
|---|---|
| **Visualizar certificado** |Representado pelo ícone do cartão de identificação, abre a página **[Certificados](/v4/docs/pt/certificate-manager-reference-certificate-certificate-2)**. É exibido somente nos logs de *Visualizar senha de uma keystore* e *Visualizar senha de revogação do certificado*.|
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).
