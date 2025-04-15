# Certificados Automatizados

Este artigo descreve as informações do relatório **Certificados Automatizados**. Esse relatório lista todos os certificados associados a fluxos automatizados. Ao clicar em um certificado, os usuários podem acessar os detalhes da automação correspondente, simplificando o controle e garantindo a segurança das operações.
:::(Info) (Info)
Caminho para acessar: **Certificate Manager > Relatórios > Certificados Automatizados**.
:::

## Campos de busca
Item|Descrição
-|-
**Cód. do certificado**|Utilizado para buscar o certificado pelo seu número de identificação.
**Autoridade certificadora**|Utilizado para buscar o certificado pela autoridade que o assinou.
**Nome comum**|Utilizado para buscar o certificado pelo CN (Common Name).
**Data de vencimento**|Utilizado para buscar o certificado pela data de vencimento. Exibe um calendário para selecionar uma data específica ou para definir uma data inicial e criar um intervalo de tempo.
**até**|Utilizado para buscar o certificado pela data de vencimento. Exibe um calendário para definir uma data final e criar um intervalo de tempo.
**Estado**|Utilizado para buscar o certificado pelo status. Exibe um menu suspenso com as opções: *Válido, Revogado, Renovação requisitada* e *Vencido*.
**Filtrar**|Botão para executar o processo de filtragem configurado.
**Limpar**|Botão para limpar os campos preenchidos.

Os resultados são exibidos em formato de lista na tela, com colunas nomeadas conforme os campos de busca correspondentes. A lista apresenta também outras informações:

* **Organização:** nome da empresa.
* **Publicação:** indica se o processo de automação para publicação foi habilitado ou não.
* **Data de publicação:** data e hora da publicação.
* **Renovação:** indica se o processo de automação para renovação foi habilitado ou não.
* **Data de renovação:** data e hora da renovação.

## Ação
Esta coluna apresenta botões de ação para executar tarefas relacionadas ao componente.
Item|Descrição
-|-
**Informações do certificado**|Representado pelo ícone do cartão de identificação, abre a página [Informações do certificado](/v3-32/docs/pt/certificate-manager-settings-how-to-download-certificate-key).
**Automatizar fluxo**|Representado pelo ícone de três engrenagens, abre a página [Automações](/v3-32/docs/pt/how-to-automate-the-lifecycle-of-a-certificate) para configurar o processo.


