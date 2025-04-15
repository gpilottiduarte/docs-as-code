# Dispositivos por certificados

Este artigo fornece descrições das informações disponíveis no relatório **Dispositivos por certificados**. Esse relatório apresenta quais certificados estão vinculados aos dispositivos de uma organização.

:::(Info) (Info)
Caminho para acessar: **Certificate Manager > Relatórios > Dispositivos por certificados**.
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
**Código do certificado**|Utilizado para buscar o certificado pelo seu código.
**Nome comum**|Utilizado para buscar o certificado pelo CN.
**Dispositivo**|Utilizado para buscar o certificado pelo dispositivo que contém o certificado publicado.
**Data do último discovery**|Utilizado para buscar o certificado pela data do último discovery feito no ambiente. Exibe um calendário para selecionar uma data específica ou para definir uma data inicial e criar um intervalo de tempo.
**até**|Utilizado para buscar o certificado pela data do último discovery feito no ambiente. Exibe um calendário para definir uma data final e criar um intervalo de tempo.
**Data da publicação**|Utilizado para buscar o certificado pela data de publicação. Exibe um calendário para selecionar uma data específica ou para definir uma data inicial e criar um intervalo de tempo.
**até**|Utilizado para buscar o certificado pela data de publicação. Exibe um calendário para definir uma data final e criar um intervalo de tempo.
**Processado**|Utilizado para buscar o certificado pelo status do certificado. Exibe um menu suspenso com as opções: *Irregular, Validado manualmente, Desatualizado, Vencido*, e *Regular*.
|**Filtrar**|Botão para executar o processo de filtragem configurado.|
|**Limpar**|Botão para limpar os campos preenchidos.|

Os resultados são exibidos em formato de lista na tela, com colunas nomeadas conforme os campos correspondentes. A lista apresenta informações que não constam nos campos de busca:

* **Origem:** informa se a vinculação ao dispositivo ocorreu de forma manual ou por um perfil de publicação.
* **Publicação:** informa se há configurações de publicação.  
* **Discovery:** informa se o certificado foi descoberto através do Discovery. 

:::(Info) (Info)
**Certificados regulares** são os certificados que podem ser utilizados nos dispositivos com segurança.
**Certificados irregulares** são os certificados em não conformidade com os requisitos regulatórios.
**Certificados validados manualmente** são os certificados validados na coluna Ação, pelo administrador. 
**Certificados desatualizados** são os certificados que precisam ser renovados nos dispositivos.
**Certificados vencidos** são os certificados cuja data de validade está expirada.
:::

## Ação
Esta coluna apresenta botões de ação para executar tarefas relacionadas ao componente.
| Item | Descrição |
|---|---|
**Vincular dispositivos**|Representado pelo ícone de dois elos, abre a página *Vincular dispositivos* para selecionar outros dispositivos que serão vinculados ao certificado.
**Validar manualmente**|Representado pelo ícone do sinal de check, abre uma página para justificar a ação. Validações manuais devem ocorrer somente após a verificação pelo administrador de que o certificado está presente no dispositivo.
**Adicionar ao perfil**|Representado pelo ícone de um boneco, abre a página *Adicionar dispositivo ao perfil* para selecionar um perfil de publicação.
**Remover vínculo**|Representado pelo ícone de um elo rompido, abre uma mensagem para confirmar a remoção do vínculo. Aparece somente nos dispositivos da lista que foram vinculados manualmente.
**Detalhes do discovery**|Representado pelo ícone da letra ‘i’, abre a página *Dados que serão usados em publicações futuras*. Aparece somente nos dispositivos da lista que foram vinculados via Discovery. 
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
