# Requisições

Este artigo fornece descrições das informações disponíveis na página principal de **Requisições**.
:::(Info) (Info)
Caminho para acessar: **Certificate Manager > Certificados > Requisições**.
:::

## Ícones

| Item | Descrição |
| --- | --- |
| **Mostrar os filtros** |Representado pelo ícone da lupa, exibe ou oculta os campos de busca na tela.|
| **Atualizar** |Representado pelo ícone de seta no sentido anti-horário, atualiza a página.|
| **Exibir ações** |Representado pelo ícone de três pontos verticais, exibe um menu suspenso com possíveis ações para as requisições.|
| **Novo** |Representado pelo ícone do sinal de soma, abre o formulário **[Cadastro de requisição](/v3-33/docs/pt/certificate-manager-reference-requisition-form)**.|
| **Importar request** |Representado pelo ícone de upload (uma seta para cima), abre o formulário **[Importar requisição](/v3-33/docs/pt/certificate-manager-request-information)**.| 
| **Imprimir relatório** |Representado pelo ícone da impressora, abre nova página para impressão do relatório.|
| **Exportar CSV** |Representado pelo ícone da folha de papel, baixa o relatório.|
| **Agendar relatório** |Representado pelo ícone do relógio, abre o formulário **[Agendar relatório](/v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports)**.|

## Campos de busca

| Item | Descrição |
| --- | --- |
| **Código** |Utilizado para pesquisar a requisição pelo seu número de identificação no sistema.|
| **Nome** |Utilizado para pesquisar a requisição pelo seu nome.|
| **Estado** |Utilizado para pesquisar a requisição pelo seu status. Exibe um menu suspenso com as opções: *Gerando*, *Gerado*, *Assinatura solicitada*, *Solicitação aprovada*, *Solicitação reprovada*, *Aguardando assinatura*, *Assinado*, *Erro ao assinar*, *Cancelado*, *Aguardando edição*, *Erro ao gerar o CSR*, *Erro ao gerar a key* e *Aguardando o processamento*. | 
| **Organização** |Utilizado para pesquisar a requisição pela organização.|
| **Chave** |Utilizado para pesquisar a requisição pela chave de criptografia utilizada. Exibe um menu suspenso com as opções: *RSA* e *DSA*.|
| **Criptografia** |Utilizado para pesquisar a requisição pelo algoritmo de função hash utilizado. Exibe um menu suspenso com as opções: *SHA256*, *SHA384* e *SHA512*. |
| **Solicitante** |Utilizado para pesquisar pelo usuário que fez o pedido da requisição.|
| **Data de solicitação** |Utilizado para pesquisar a requisição pela data de solicitação. Exibe um calendário para selecionar uma data específica ou para definir uma data inicial e criar um intervalo de tempo.|
| **até** |Utilizado para pesquisar a requisição pela data de solicitação. Exibe um calendário para definir uma data final e criar um intervalo de tempo.|
| **Filtro** |Botão para executar o processo de filtragem configurado. |
| **Limpar** |Botão para limpar os campos preenchidos. |

Os resultados são exibidos em formato de lista na tela, com colunas nomeadas conforme os campos correspondentes. A lista apresenta informações que não constam nos campos de busca: 
* **Responsável:** é um usuário cadastrado no senhasegura como responsável pela requisição. 
* **Importado?:** informa se a requisição foi importada ou não para o senhasegura. 
* **Certificados aleatórios:** informa a quantidade de certificados aleatórios gerados a partir da requisição. Ao clicar no número, uma nova janela exibirá as requisições de cada certificado. 

:::(Error) (Importante)
As requisições randômicas só aparecerão listadas após a assinatura da requisição principal.
:::

## Ação
Esta coluna apresenta botões de ação para executar tarefas relacionadas ao componente.
:::(Info) (Info)
Para visualizar algumas opções, são necessárias permissões específicas. Essas permissões são definidas no Grupo de acesso do Certificate Manager.
:::
| Item | Descrição |
| --- | --- |
| **Visualizar certificado** |Representado pelo ícone do cartão de identificação, abre a página de buscas por **[Certificados](/v3-33/docs/pt/certificate-manager-reference-certificate-certificate-2)**. |
| **Visualizar request** |Representado pelo ícone da lupa, abre a página **[Detalhes do request](/v3-33/docs/pt/certificate-manager-settings-how-to-download-the-csr)**.|
| **Alterar** |Representado pelo ícone do lápis e papel, abre o formulário **[Cadastro de requisição](/v3-33/docs/pt/certificate-manager-reference-requisition-form)**. Aparece somente se a requisição ainda não foi assinada.|
| **Exibir ações** |Representado pelo ícone de três pontos verticais, exibe um menu suspenso com as ações possíveis para a requisição.|
| **Solicitar assinatura** |Representado pelo ícone de request (uma folha de papel com os símbolos </>), abre o formulário **[Solicitar assinatura do request](/v3-33/docs/pt/certificates-flow-how-to-sign-request)**.|
| **Cancelar request** |Representado pelo ícone da lixeira, abre uma mensagem pop-up para confirmar o cancelamento da requisição. Aparece somente se a requisição ainda não foi assinada.|
| **Clonar requisição** |Representado pelo ícone de clonar (dois quadrados sobrepostos), abre uma mensagem pop-up para confirmar a clonagem da requisição. É útil para cenários onde é necessário atualizar apenas a validade do certificado.|
| **Visualizar senha da chave** |Representado pelo ícone da chave. Quando selecionado, exibe três formas para recuperar a senha do certificado: *Visualizar*, *Copiar* ou *Soletrar*.|
| **Orientações para validação** |Representado pelo ícone da letra ‘i’, abre a página *Orientações para validação*, com informações para realizar o processo de validação da requisição. Aparece somente em caso de erro na assinatura da requisição.|
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
