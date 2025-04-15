# Certificados

Este artigo fornece descrições das informações disponíveis na página principal de **Certificados**.

:::(Info) (Info)
Caminho para acessar: **Certificate Manager > Certificados > Certificados**.
:::

## Ícones

| Item | Descrição |
| --- | --- |
| **Mostrar os filtros** |Representado pelo ícone da lupa, exibe ou oculta os campos de busca na tela.|
| **Atualizar** |Representado pelo ícone de seta no sentido anti-horário, atualiza a página.|
| **Exibir ações** |Representado pelo ícone de três pontos verticais, exibe um menu suspenso com possíveis ações para os certificados.|
| **Importar certificado** |Representado pelo ícone de upload (uma seta para cima), abre o formulário **[Importar certificado](/v3-33/docs/pt/certificates-flow-how-to-import-certificate)**. | 
| **Operações em lote** |Representado pelo ícone de lista (três linhas verticais), abre a busca **[Operações em lote de certificados](/v3-33/docs/pt/certificate-manager-batch-operations)**.| 
| **Imprimir relatório** |Representado pelo ícone da impressora, abre nova página para impressão do relatório.|
| **Exportar CSV** |Representado pelo ícone da folha de papel, baixa o relatório.|
| **Agendar relatório** |Representado pelo ícone do relógio, abre o formulário **[Agendar relatório](/v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports)**.|

## Campos de busca

| Item | Descrição |
| --- | --- |
| **Cód. do certificado** |Utilizado para pesquisar o certificado pelo seu número de identificação no sistema.|
| **Cód. da requisição** |Utilizado para pesquisar o certificado pelo número de identificação da requisição.|
| **Autoridade certificadora** |Utilizado para pesquisar o certificado pela autoridade escolhida para assinatura.| 
| **Nome comum** |Utilizado para pesquisar o certificado pelo nome do certificado.|
| **Origem** |Utilizado para pesquisar o certificado pela origem. Exibe um menu suspenso com as opções: *Scan e discovery*, *Request* ou *Importação manual*.|
| **Data de vencimento** |Utilizado para pesquisar o certificado pela data de vencimento. Exibe um calendário para selecionar uma data específica ou para definir uma data inicial e criar um intervalo de tempo.|
| **até** |Utilizado para pesquisar o certificado pela data de vencimento. Exibe um calendário para selecionar uma data final e criar um intervalo de tempo.|
| **Estado** |Utilizado para pesquisar o certificado pelo status. Exibe um menu suspenso com as opções: *Válido*, *Revogado*, *Renovação Requisitada* ou *Vencido*.|
| **Ambientes** |Utilizado para pesquisar o certificado pelo ambiente cadastrado nos parâmetros do sistema.|
| **Sistemas** |Utilizado para pesquisar o certificado pelo sistema cadastrado nos parâmetros do sistema.|
| **Projeto** |Utilizado para pesquisar o certificado pelo nome do projeto.|
| **Responsável** |Utilizado para pesquisar o certificado pelo nome do responsável.|
| **Ativo** |Utilizado para pesquisar o certificado pelo status no sistema. Exibe um menu suspenso com as opções: *Sim* ou *Não*.|
| **Possui vínculo?** |Utilizado para pesquisar certificados vinculados a dispositivos. Exibe um menu suspenso com as opções: *Sim* ou *Não*.|
| **Filtro** | Botão para executar o processo de filtragem configurado. |
| **Limpar** | Botão para limpar os campos preenchidos.|

Os resultados são exibidos em formato de lista na tela, com colunas nomeadas conforme os campos correspondentes. A lista apresenta informações que não constam nos campos de busca: 
* **Tipo de validação:** apresenta a validação definida no cadastro da requisição. Pode ser: *DV SSL*, *EV SSL* ou *OV SSL*.
* **Tipo de domínio:** apresenta o domínio definido no cadastro da requisição. Pode ser: *único*, *múltiplos* ou *wildcard*.
* **Dispositivos:** apresenta quantos dispositivos estão vinculados ao certificado.

## Ação
Esta coluna apresenta botões de ação para executar tarefas relacionadas ao componente.
:::(Info) (Info)
Para visualizar algumas opções, são necessárias permissões específicas. Essas permissões são definidas no Grupo de acesso do Certificate Manager.
:::
| Item | Descrição |
| --- | --- |
| **Informações do certificado** |Representado pelo ícone do cartão de identificação, abre a página **[Informações do certificado](/v3-33/docs/pt/certificate-manager-certificate-information)**.|
| **Exibir ações** |Representado pelo ícone de três pontos verticais, exibe um menu suspenso com as ações possíveis para o certificado. |
| **Visualizar senha da chave** |Representado pelo ícone da chave. Quando selecionado, exibe três formas para recuperar a senha do certificado: *Visualizar*, *Copiar* ou *Soletrar*.|
| **Publicar certificado** |Representado pelo ícone de play (um quadrado com uma seta para a direita), abre o formulário **[Publicar certificado](/v3-33/docs/pt/certificates-flow-how-to-publish-a-certificate)**.|
| **Vincular dispositivos** |Representado pelo ícone de dois elos, abre a página **[Vincular dispositivos](/v3-33/docs/pt/certificate-manager-settings-how-to-link-devices-certificate)**.|
| **Renovar certificado** |Representado pelo ícone de duas setas em sentido horário, abre a página **[Renovar certificado](/v3-33/docs/pt/certificates-flow-how-to-renew-a-certificate)** para confirmar a renovação.|
| **Histórico de renovação do certificado** |Representado pelo ícone do relógio, abre a página de consulta *Histórico de renovações do certificado*.|
| **Revogar certificado** |Representado pelo ícone do sinal de proibido, abre uma mensagem pop-up para confirmar a revogação do certificado.|
| **Alterar** |Representado pelo ícone de um lápis e papel. Abre o formulário **[Cadastro do certificado](/v3-33/docs/pt/certificate-manager-reference-certificate-form)**.|
| **Desativar** |Representado pelo ícone da lata de lixo, abre uma mensagem pop-up para confirmar a desativação do certificado.|
| **Automatizar fluxo** |Representado pelo ícone de três engrenagens, abre a página **[Automações](/v3-33/docs/pt/how-to-automate-the-lifecycle-of-a-certificate)** para configurar o processo.|
| **Detalhes da requisição** |Representado pelo ícone de três linhas horizontais, abre uma página de busca por requisições. Aparece somente para certificados com o status de *Renovação requisitada*. |
| **Detalhes da revogação** |Representado pelo ícone da letra 'i', abre uma página de consulta. Aparece somente para certificados com o status de *Revogado*. |
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
