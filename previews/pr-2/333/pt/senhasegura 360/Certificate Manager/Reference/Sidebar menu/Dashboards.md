# Dashboards

Os dashboard do Certificate Manager oferecem uma visão centralizada, que proporciona ao usuário um local único para monitorar certificados e gerenciar com eficácia a segurança, conformidade e continuidade operacional da sua empresa.

Este artigo fornece descrições das informações disponíveis na página principal de **Dashboard**.

:::(Info) (Info)
Caminho para acessar: **Certificate Manager > Dashboard**.
:::

## Certificados

### Filtros
| Item | Descrição |
| --- | --- |
| **Possui vínculo?** |Utilizado para refinar a pesquisa e mostrar certificados vinculados ou não a dispositivos.  |
| **Ativo** |Utilizado para refinar a pesquisa e mostrar certificados ativos ou não. |
| **Revogado?** |Utilizado para refinar a pesquisa e mostrar certificados revogados ou não. |

:::(Info) (Info)
**Certificados ativos** são aqueles que podem ser aplicados em algum processo. 
**Certificados inativos** são aqueles que o produto irá ignorar. Não serão aplicados, nem renovados. Eles não podem ser utilizados enquanto não houver a alteração do status.
**Certificados revogados** são aqueles nos quais um usuário fez a revogação. Eles não podem mais ser utilizados.
:::

### Cards

| Item | Descrição |
| --- | --- |
| **Todos os certificados** |Quantidade total de certificados.|
| **Certificados válidos** |Quantidade total de certificados válidos (dentro do prazo de validade).|
| **Certificados inválidos** |Quantidade total de certificados inválidos (Expirados, Renovação Requisitada, Revogados e Inativos).|
| **Certificados inseguros** |Quantidade total de certificados com algoritmo SHA1 e/ou chave com 1024 bits, ou menos.|

:::(Warning) (Cuidado)
Embora os certificados inseguros NÃO devam ser utilizados, eles são contabilizados como certificados válidos e podem ser utilizados em ambientes enquanto não forem revogados por um usuário.
:::

### Gráficos

| Item | Descrição |
| --- | --- |
| **Expiração de certificados válidos** |Exibe todos os certificados válidos, classificados por data de expiração.|
| **Certificados por estado** |Exibe todos os certificados, classificados por status.|
| **Origem dos certificados** |Exibe todos os certificados, classificados por origem.|
| **Certificados por CA** |Exibe todos os certificados, classificados por Autoridade Certificadora. |
| **Certificados por organização** |Exibe todos os certificados, classificados por organização cadastrada nas configurações do módulo. |
| **Certificados por ambientes** |Exibe somente os certificados existentes nos ambientes cadastrados. |
| **Certificados por Sistemas** |Exibe somente os certificados existentes nos sistemas cadastrados. |
| **Certificados por responsável** |Exibe somente os certificados com um responsável configurado, classificados por nome. |
| **Certificados em Renovação** |Exibe somente os certificados em processo de renovação, classificados pelo status. |
| **Certificados por Tipo** |Exibe todos os certificados, classificados por tipo. |
| **Certificados por avaliação de segurança** |Exibe todos os certificados, classificados pelo nível de segurança (A-NC). |
| **Certificados por tamanho da chave** |Exibe todos os certificados, classificados pelo tamanho da chave utilizada. |
| **Certificados por algoritmo da chave** |Exibe todos os certificados, classificados pelo algoritmo da chave utilizada. |

* * *
## Radar de risco

### Radar

| Item | Descrição |
| --- | --- |
| **Análise de risco de validade** |Utilizado para controlar em tempo real todos os certificados, classificados por autoridade e localizados na seção correspondente ao prazo de expiração. |

:::(Info) (Info)
Clicar no círculo verde que identifica o certificado no radar abre uma janela com informações sobre o certificado. Na parte inferior, você encontra os botões de ação **Revogar**, **Renovar**, **História** e **Publicar**.
:::

### Gráficos

| Item | Descrição |
| --- | --- |
| **Classificação de segurança** |Exibe todos os certificados conforme a classificação de segurança (A-NC). Se clicar na coluna que representa o certificado, a página 'Informações do certificado' abrirá.|
| **Certificados a vencer** |Exibe os certificados que estão se aproximando da data de expiração.|
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).

