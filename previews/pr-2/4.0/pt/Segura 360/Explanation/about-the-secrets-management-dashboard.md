# Sobre o dashboard de Gestão de segredos

O dashboard de Gestão de segredos está acessível através do caminho **Product Menu > DevOps Secret Manager > Dashboards > Gestão de segredos.**

:::(info) (Info)
O dashboard pode exibir os dados referentes aos segredos ativos ou inativos. Para escolher a qual exibir, clique no menu suspenso na porção superior da página e selecione a opção correspondente ao estado do segredo no DSM. Você pode escolher entre as opções **Sim**, **Não** e **Ativo** (onde o **Sim** exibe as aplicações ativas, o **Não** exibe as aplicações inativas e o **Ativo** exibe todas as aplicações). Além disso, é possível realizar filtragens por intervalo de tempo da data de criação da entidade. Para tal, clique no menu suspenso ao lado do ícone do calendário e defina o período desejado para a filtragem das informações.
:::

Nesse dashboard teremos os seguintes elementos:

* **Linha de negócios:** informa quantas linhas de negócios, ativas, existem cadastradas no DSM. Para maiores informações, acesse a documentação sobre [Linhas de negócios](/v4/docs/pt/how-to-manage-the-lines-of-business).
* **Tipos de aplicação:** informa quantos tipos de aplicações, ativos, existem cadastrados no DSM. Para maiores informações, acesse a documentação sobre [Tipos de aplicação](/v4/docs/pt/how-to-manage-application-types-in-Segura-devops-secret-manager).
* **Aplicações**: informa quantas aplicações existem cadastradas no DSM de acordo com o status e a data de criação destas. Ao clicar no card você é direcionado para a janela **Aplicações**. Para maiores informações, acesse a documentação sobre [Aplicações](/v4/docs/pt/how-to-manage-an-application-in-devops-secret-manager).
* **Autorizações**: informa quantas autorizações por aplicação existem cadastradas no DSM existem cadastradas no DSM de acordo com o status e a data de criação destas. Ao clicar no card você é direcionado para a janela **Autorizações por aplicação**. Para maiores informações, acesse a documentação sobre [Autorizações por aplicação](/v4/docs/pt/a2a-authorizations-for-an-application).
* **Segredos**: informa quantos segredos existem cadastrados no DSM de acordo com o status e a data de criação destas. Ao clicar no card você é direcionado para a janela **Segredos**. Para maiores informações, acesse a documentação sobre [Segredos](/v4/docs/pt/how-to-manage-secrets).

Além destes cards informativos, você tem diversos gráficos para acompanhar o comportamento do DSM. São eles:

* **Aplicações por linha de negócio:** informa de maneira visual as aplicações por linha de negócios.
* **Aplicações por tipo:** informa de maneira visual as aplicações por tipo.
* **Autorizações por ambiente:** informa de maneira visual as autorizações por ambiente.
* **Autorizações por aplicativo**: informa de maneira visual as autorizações de acordo com a aplicação.
* **Consulta de secrets por dia:** informa de maneira visual a quantidade de consultas feitas aos segredos cadastrados no DSM.

:::(info) (Info)
Os elementos gráficos dos gráficos são clicáveis, de modo que é possível visualizar as configurações de cada elemento clicando em determinada seção do gráfico.
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).