# Informações do certificado

Este artigo fornece descrições das informações disponíveis no relatório **Informações do certificado**. Esse relatório serve para rastrear e gerenciar o fluxo de certificados dentro da organização. 

:::(Info) (Info)
Caminho para acessar: **Certificate Manager > Relatórios > Informações do certificado**.
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
| **Código** |Utilizado para buscar o certificado pelo número identificador do evento.|
| **Autoridade certificadora** |Utilizado para buscar o certificado pela CA que assinou o certificado.|
| **Nome comum** |Utilizado para buscar o certificado pelo CN.|
| **Organização** |Utilizado para buscar o certificado pelo nome da empresa.|
| **Tags** |Utilizado para buscar o certificado pelos marcadores adicionados no cadastro.|
| **Responsável** |Utilizado para buscar o certificado pelo usuário responsável.|
| **E-mails notificados** |Utilizado para buscar o certificado pelos e-mails dos usuários notificados.|
| **Valido até** |Utilizado para buscar o certificado pela data de vencimento. Exibe um calendário para selecionar uma data específica ou para definir uma data inicial e criar um intervalo de tempo.
| **até** |Utilizado para buscar o certificado pela data de vencimento. Exibe um calendário para definir uma data final e criar um intervalo de tempo.
| **Estado** |Utilizado para buscar o certificado pelo status. Exibe um menu suspenso com as opções: *Válido*, *Revogado*, *Renovação requisitada* ou *Vencido*. 
|**Filtrar**|Botão para executar o processo de filtragem configurado.|
|**Limpar**|Botão para limpar os campos preenchidos.|

Os resultados são exibidos em formato de lista na tela, com colunas nomeadas conforme os campos correspondentes. A lista apresenta informações que não constam nos campos de busca:

* **Descrição:** informação adicionada no momento do cadastro.
* **Dias até expirar:** quantidade de dias até o certificado expirar.
* **Origem:** *Scan e Discovery, Request* ou *Importação manual*.
* **Origem do scan:** *Apache, Nginx, Tomcat, Buscar certificados em diretórios, IIS, Workstation Windows, IBM Websphere, Buscar certificados sem login, Emitido pela Microsoft CA, Palo Alto, Kubernetes, NetScaler.*

## Ação
Esta coluna apresenta botões de ação para executar tarefas relacionadas ao componente.
| Item | Descrição |
|---|---|
| **Informações do certificado** |Representado pelo ícone do cartão de identificação, abre a página *Informações do certificado*.|
| **E-mails enviados** |Representado pelo ícone do envelope, abre a página *E-mails enviados* para conferir o envio de e-mails relacionados ao certificado.|
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
