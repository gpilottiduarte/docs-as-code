# Painel de administração

Neste documento, você vai encontrar todas as informações sobre o dashboard **Painel de administração** do **MySafe** que possibilita que o administrador tenha uma visão geral das interações dos usuários do **MySafe** com a plataforma.

## Requisitos
* Permissão de administrador do **MySafe**.

## Caminhos para acesso

O dashboard pode ser acessado por dois caminhos diferentes: 
1. No **senhasegura**, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **MySafe**.
2. No menu lateral, selecione **Admin > Painel de administração**.

---

1. No **senhasegura**, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Dashboard**.
2. No menu lateral, selecione **MySafe > Painel de administração**.

***

## Cards

:::(info) (Info)
Os cards exibem dados consolidados, enquanto o relatório detalhado apresenta informações em tempo real. Portanto, podem haver pequenas diferenças entre as quantidades exibidas.
:::

| **Item**| **Descrição**|
|------|------|
| **Total de usuários**  | Total de usuários ativos no **MySafe**. Ao clicar no card, o administrador será redirecionado para a tela **Total de usuários**, contendo a lista que compõe este número. |
| **Exclusivos**| Total de usuários ativos que possuem acesso ao **MySafe** mas não possuem acesso ao **PAM Core**. Ao clicar no card, o administrador será redirecionado para a tela **Exclusivos**, contendo a lista que compõe este número. |
| **Usuários sem itens** | Total de usuários ativos e com acesso ao **MySafe**, mas que não possuem nenhum item adicionado e ativo. Ao clicar no card, o administrador será redirecionado para a tela de **Usuários sem itens**, contendo a lista que compõe este número. |
| **Total de itens**| Soma da quantidade de **Senhas, Anotações, Arquivos** e **Segredos de API** ativos no **MySafe**.|
| **Grupos**| Total de grupos pessoais ativos no **MySafe**.|
| **Consumo de disco**   | Total de espaço em disco ocupado pelos arquivos salvos no **MySafe**.|

## Gráficos

| **Item**| **Descrição**|
|------|------|
| **Itens por tipo**| Gráfico donut que exibe as quantidades de itens ativos agrupados por **Senha, Anotações, Arquivos** e **Segredos de API**.|
| **Itens criados por dia**| Gráfico XY que exibe a quantidade de itens criados nos últimos 7 dias e divididos por **Senha, Anotações, Arquivos** e **Segredos de API**. |
| **Senhas por força**| Gráfico de pizza que exibe o total de senhas ativas, agrupadas pelo nível de força. Os níveis de força incluem *Muito fraca, Fraca, Boa, Muito forte* e *Não definido*. <br>**Nota**: o nível *Não definido* é usado quando, ao preencher os campos da seção **Adicionar senha**, o campo **Senha** é deixado vazio. |
| **Compartilhamento**| Gráfico XY que exibe o total de compartilhamentos internos, representados por barras, e compartilhamentos externos, representados por linhas, de itens do **MySafe**. |

## Lista

| **Item**| **Descrição**|
|------|------|
| **Locais mais usados** | Lista dos sites que possuem mais credenciais salvas no **MySafe**. Cada site apresenta informações como **Domínio**, data **Ultima criação** e número **Total de senhas** associadas a cada site. |

---