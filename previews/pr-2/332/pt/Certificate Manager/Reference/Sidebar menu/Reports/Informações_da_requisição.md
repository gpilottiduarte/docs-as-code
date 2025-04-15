# Informações da requisição

Este artigo fornece descrições das informações disponíveis no relatório **Informações da requisição**. Esse relatório rastreia e gerencia o fluxo de requisições de certificados dentro da organização. 

:::(Info) (Info)
Caminho para acessar: **Certificate Manager > Relatórios > Informações da requisição**.
:::

## Ícones
| Item | Descrição |
| --- | --- |
|**Mostrar os filtros**|Representado pelo ícone da lupa, exibe ou oculta os campos de busca na tela.|
|**Atualizar**|Representado pelo ícone de seta no sentido anti-horário, atualiza a página.|
|**Exibir ações**|Representado pelo ícone de três pontos verticais, exibe um menu suspenso com possíveis ações para o item.|
|**Imprimir relatório**|Representado pelo ícone da impressora, abre nova página para impressão do relatório.|
|**Exportar CSV**|Representado pelo ícone da folha de papel, baixa o relatório.|
|**Agendar relatório**|Representado pelo ícone do relógio, abre o formulário **[Agendar relatório](/v3-32/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports)**.|

## Campos de busca
| Item | Descrição |
| --- | --- |
| **Código** |Utilizado para buscar a requisição pelo número identificador do evento.|
| **Nome** |Utilizado para buscar a requisição pelo seu nome.|
| **Estado** |Utilizado para buscar a requisição pelo seu status. Exibe um menu suspenso com as opções: *Gerando*, *Gerado*, *Assinatura solicitada*, *Solicitação aprovada*, *Solicitação reprovada*, *Aguardando assinatura*, *Assinado*, *Erro ao assinar*, *Cancelado*, *Aguardando edição*, *Erro ao gerar o CSR*, *Erro ao gerar a key* e *Aguardando processamento*. 
| **Responsável** |Utilizado para buscar a requisição pelo responsável.
| **Projeto** |Utilizado para buscar a requisição pelo nome do projeto.
| **Data de solicitação** |Utilizado para buscar a requisição pela data da solicitação. Exibe um calendário para selecionar uma data específica ou para definir uma data inicial e criar um intervalo de tempo.
| **até** |Utilizado para buscar a requisição pela data da solicitação. Exibe um calendário para definir uma data final e criar um intervalo de tempo.
|**Filtrar**|Botão para executar o processo de filtragem configurado.|
|**Limpar**|Botão para limpar os campos preenchidos.|

Os resultados são exibidos em formato de lista na tela, com colunas nomeadas conforme os campos correspondentes. A lista apresenta informações que não constam nos campos de busca:
* **Organização:** o nome da empresa.
* **Ambiente:** o ambiente incluído no cadastro da requisição.
* **Solicitante:** o usuário que criou a requisição. 

## Ação
Esta coluna apresenta botões de ação para executar tarefas relacionadas ao componente.
| Item | Descrição |
|---|---|
| **Requisição** |Representado pelo ícone de uma seta em sentido nordeste, abre a página **[Requisições](/v3-32/docs/pt/certificates-cloud-amazon-requests)**.|
|**Exibir ações**|Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações para a requisição.|
| **Certificado** |Representado pelo ícone do cartão de identificação, abre a página **[Informações do certificado](/v3-32/docs/pt/certificate-manager-certificate-information)**. É exibido somente nas requisições com status *Assinado*.|
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).

