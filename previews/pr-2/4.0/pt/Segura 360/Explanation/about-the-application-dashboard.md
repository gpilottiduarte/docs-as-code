# Sobre o dashboard de Aplicação

O dashboard Aplicação está acessível através do caminho **Product Menu > DevOps Secret Manager > Dashboards > Aplicação**.

:::(info) (Info)
O dashboard exibe dados referentes à aplicação selecionada. Para escolher a aplicação desejada, clique no menu suspenso na porção superior da página e selecione a opção correspondente ao nome da aplicação cadastrada no DSM. Além disso, é possível realizar filtragens por intervalo de tempo referente a data e criação da entidade. Para tal, clique no menu suspenso ao lado do ícone do calendário e defina o período desejado para a filtragem das informações.
:::

Nesse dashboard teremos os seguintes elementos:

* **Autorizações**: informa quantas autorizações por aplicação existem cadastradas para a aplicação selecionada. Ao clicar no card você é direcionado para a janela **Autorizações por aplicação**. Para maiores informações, acesse a documentação sobre [Autorização por aplicação](/v4/docs/pt/a2a-authorizations-for-an-application).
* **Ambientes**: informa os ambientes que fazem parte daquela aplicação. Ao clicar no card você é direcionado para a janela **Ambientes**. Na janela **Ambientes** serão listados os ambientes dentro cadastrados no DSM. Você ainda pode cadastrar um novo ambiente a partir dessa janela. Para maiores informações, acesse a documentação sobre [Ambientes](/v4/docs/pt/how-to-manage-environments).
* **Sistemas**: informa os sistemas que fazem parte daquela aplicação. Ao clicar no card você é direcionado para a janela **Sistemas**. Você ainda pode cadastrar um novo sistema a partir dessa janela. Para maiores informações, acesse a documentação sobre [Sistemas](/v4/docs/pt/how-to-manage-systems).
* **Segredos**: informa quantos segredos existem cadastrados no DSM atrelados à autorização da aplicação selecionada.. Ao clicar no card você é direcionado para a janela **Segredos**. Para maiores informações, acesse a documentação sobre [Segredos](/v4/docs/pt/how-to-manage-secrets).
* **Credenciais**: informa as credenciais que estão atrelados aos segredos, que estão estão atrelados às autorizações que estão atreladas a aplicação. Ao clicar no card você é direcionado para a janela **Credenciais**. Você pode cadastrar uma nova credencial a partir dessa janela.
* **Chaves de acesso**: informa as chaves de acesso que estão atreladas à aplicação. Ao clicar no card você é direcionado para a janela **Credenciais**.

Além destes cards informativos, você tem diversos gráficos para acompanhar o comportamento do DSM. São eles:

* **Autorizações por ambiente**: informa de maneira visual as autorizações por ambiente relacionadas aquela aplicação. Você pode visualizar maiores informações e configurações clicando nos elementos gráficos.
* **Autorizações por sistema**: informa de maneira visual as autorizações por sistema relacionadas aquela aplicação. Você pode visualizar maiores informações e configurações clicando nos elementos gráficos.
* **Autorizações por hora (últimas 24 horas)**: informa de maneira visual a quantidade de autorizações por hora no DSM relativas aquela aplicação.
* **Consulta de secrets por dia:** informa de maneira visual a quantidade de consultas diárias aos segredos relacionados aquela aplicação.
* **Consulta de segredos por semana:** informa de maneira visual a quantidade de consultas semanais aos segredos relacionados aquela aplicação.

Na tela principal, no lado esquerdo, você tem as seguintes informações sobre a aplicação que está sendo filtrada:

* **Nome da aplicação**: informa o nome da aplicação que está sendo consultada.
* **Linha de negócios**: informa a linha de negócios que está atrelada a aplicação.
* **Tipo de aplicação**: informa o tipo de aplicação que está atrelada a aplicação.
* **Provisionamento automático de secrets**: informa se a aplicação tem ou não o provisionamento automático de secrets ativado. Pode assumir os valores **Enabled** ou **Disabled**.
* **Data de cadastro:** data e hora de cadastro da aplicação que está sendo consultada.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).