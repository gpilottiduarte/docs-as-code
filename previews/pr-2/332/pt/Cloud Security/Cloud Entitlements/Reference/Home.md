# Home

A página inicial do Cloud Entitlements funciona como um ambiente central para monitorar suas identidades em nuvem e acessar informações importantes sobre sua segurança e recomendações.

Neste artigo, você pode consultar as principais funcionalidades e seções disponíveis na **Home**.

---

## Conectar contas
No canto superior direito da página inicial, você pode encontrar um atalho para conectar suas contas ao Cloud Entitlements.

Ao clicar no ícone **Conectar**, você abrirá um menu suspenso. Escolha um Provedor de Serviços em Nuvem (CSP) e clique nele para ser redirecionado à página de **Configuração da nuvem**.

---

## Filtrar dados por etiquetas

No canto superior esquerdo da página inicial, você pode filtrar as contas conectadas ao **Cloud Entitlement** com base em etiquetas.

Você pode atribuir até 10 etiquetas para as contas conectadas.

As etiquetas podem ser atribuídas quando você conecta uma nova conta clicando em **Conectar** ou edita uma conta já conectada.

---

## Saúde de seus ambientes

No topo da página **Home**, você encontra o gráfico de **Saúde dos seus ambientes**, fornecendo insights sobre os níveis de segurança de seus ambientes na nuvem registrados no **Cloud Entitlements**.

A segurança de seus ambientes em nuvem é avaliada com base nos níveis de criticidade, sendo 0% indicativo de um ambiente inseguro e 100% representando um ambiente totalmente seguro.
:::(Info) (Info)
O gráfico de **Saúde dos seus ambientes** utiliza os níveis de criticidade definidos em suas **Políticas de segurança** para determinar a porcentagem de segurança dos ambientes.
:::

Ao clicar no ícone de expandir, identificado por uma caixa e uma seta, você abrirá um gráfico 3D que apresenta informações em quatro níveis:

* **Tenant**: posicionado no centro do gráfico, este nível fornece uma visão geral do tenant do Cloud Entitlements.
* **CSPs**: exibe os Provedores de Serviços em Nuvem conectados ao tenant do Cloud Entitlements.
* **Contas**: exibe as contas dos Provedores de Serviços em Nuvem conectados ao tenant do Cloud Entitlements. É representado por um ponto azul.
* **Identidades**: fornece as identidades associadas a cada conta de Provedor de Serviços em Nuvem conectada aos Privilégios na Nuvem. A representação utiliza pontos de cores diferentes para indicar o nível de impacto da identidade em seu ambiente:

| **Cor**          | **Nível de impacto**     |
|--------------|----------------------|
| **Verde Escuro** | Impacto mais baixo   |
| **Verde Claro**  | Baixo impacto        |
| **Amarelo**      | Impacto moderado     |
| **Laranja**      | Alto impacto         |
| **Vermelho**     | Impacto mais alto    |

### Visualização de informações de identidade:
Ao clicar em um node de identidade no Cloud Health, é possível abrir uma tela lateral contendo um resumo das informações relevantes sobre a identidade. Essas informações incluem:

* Nome completo da principal.
* Tipo de identidade.
* Conta da identidade.
* Nota de impacto.
* Número de recomendações altas.
* Número de recomendações médias.
* Número de recomendações baixas.
* Atalho para tela de detalhes.

---

## Relatório de recomendações

Neste relatório você encontra uma visão geral das identidades que receberam um alto número de recomendações. 

Essas informações ajudam a priorizar suas ações e focar na melhoria da segurança e eficiência de seus recursos em nuvem.

---

## Recomendações de criticidade
Ao lado do relatório de recomendações, você pode consultar o número de recomendações, classificadas pelos seguintes níveis de criticidade:

* Alta
* Média
* Baixa

Os níveis de criticidade são definidos pelas Políticas de Segurança. Se você precisar de mais informações, consulte o artigo [Políticas de segurança](/v3-32/docs/pt/cloud-entitlements-security-policies).

---

## Painéis de controle 
A página inicial inclui vários painéis de controle que oferecem informações sobre o status das suas identidades em nuvem e recomendações. Os painéis de controle disponíveis são:

* **Status das suas identidades em nuvem**: Monitora o status de suas identidades em nuvem com base em dois estados: **Vulnerável** e **Não vulnerável**.

* **Recomendações por provedor**: Acompanha as recomendações com base nos CSPs que você está usando.

* **Recomendações por conta**: Acompanha as recomendações com base na conta específica conectada.

* **Recomendações por tipo de identidade**: Exibe recomendações com base nos diferentes tipos de identidade.

---

## Recomendações sugeridas, seguidas e pendentes
Aqui, você encontra informações sobre o número total de recomendações sugeridas, recomendações que você seguiu e recomendações aguardando ação.

---

## Recomendações dos últimos sete dias
Nesse gráfico, você tem acesso a um histórico de problemas e suas resoluções deles nos últimos sete dias.

---

## Gráfico de visibilidade de identidades
Por fim, a página inicial apresenta um gráfico que mostra o número de identidades visíveis pelo Cloud Entitlements. Esse gráfico fornece uma visão abrangente das identidades sendo monitoradas.

:::(Info) (Info)
Você pode gerar um relatório em formato PDF com base nas informações exibidas no painel, usando o botão de exportação.
:::