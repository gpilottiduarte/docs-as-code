# Dashboards

Neste documento, você vai encontrar todas as informações sobre o dashboard **User Behavior** do **PAM Core** - **Gerenciamento de Sessão**, que fornece uma análise do comportamento dos usuários ativos no **Segura**.

## Requisitos

- Permissão de administrador ou de auditor do sistema.

## Caminho para aceso

1. No Segura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados e selecione **Dashboard**.
2. No menu lateral, selecione **PAM Core > User Behavior**.

***

## Análise de comportamento

No canto superior direito, você encontra o campo com o período a que os dados exibidos se referem. Após selecionar o período nos calendários disponíveis, clique no ícone de funil para filtrar os dados. Os dados exibidos podem ser filtrados pelos períodos de:

- **Hoje**.
- **Últimas 24 horas**.
- **Esta semana**.
- **Última semana**.
- **Este mês**.
- **Último mês**.
- **Este ano**.
- **Último ano**.
- **Selecione as datas**: personalização do período de pesquisa.

:::(info)(Info)
Por padrão, o filtro pesquisa pelos últimos 15 dias.
:::

## Gráficos

| Item | Descrição |
| --- | --- |
| **Sessões** | Gráfico de progressão diária que mostra a quantidade de sessões com algum grau de risco realizadas comparadas à quantidade total de sessões realizadas no Segura. |
| **Consultas** | Gráfico de progressão diária que mostra a quantidade de visualizações de senha com algum grau de risco comparadas à quantidade total de visualizações feitas no Segura. |

## Relatórios

### 5 principais sessões com risco

Lista com as 5 sessões que apresentaram maior risco nas datas selecionadas no filtro.

**Colunas do relatório:**

- **Usuário**: nome pessoal do usuário que realizou a sessão.
- **Dispositivo**: dispositivo em que a sessão foi iniciada.
- **Credencial**: credencial utilizada pelo usuário para realizar a sessão.
- **Data**: data e hora em que a sessão foi realizada. Formatos: `DD/MM/AAAA` e `HH:MM:SS`.
- **Risco**: grau do risco atingido pela sessão. O número pode variar de 0 (zero) a 100 (cem).
- **Ícone da lupa**: exibe a tela **Detalhes do acesso**, que apresenta os seguintes dados da sessão:
  - **Usuário**: detalhes do usuário como seu nome pessoal, email e endereço de IP.
  - **Credencial**: a credencial do usuário, o endereço IP do dispositivo, protocolo utilizado e porta.
  - **Acesso**: detalhes da sessão acessada pelo usuário como dispositivo de origem, duração da sessão, dispositivo de destino, protocolo e porta.
  - **Últimos comandos detectados**: lista dos comandos auditados realizados pelo usuário durante a sessão.

### 5 principais consultas com risco

Lista das 5 visualizações de senha com maior risco, nas datas selecionadas no filtro.

**Colunas do relatório:**

- **Usuário**.
- **Dispositivo**.
- **Credencial**.
- **Data**.
- **Risco**.
- **Ícone da lupa**: exibe a tela **Detalhes do acesso**, que apresenta os seguintes dados da sessão:
  - **Usuário**: detalhes do usuário como seu nome pessoal, email e endereço de IP.
  - **Credencial**: a credencial do usuário, o endereço de IP do dispositivo, protocolo e porta.
  - **Consulta**: IP do usuário, tipo de consulta, data e hora da consulta e IP do dispositivo acessado.
  - **Últimos eventos da consulta**: relatório que exibe os últimos eventos realizados na consulta e apresenta as seguintes informações:
    - **Usuário**.
    - **Dispositivo**.
    - **Credencial**.
    - **Data**: data e hora da consulta. Formatos: `DD/MM/AAAA` e `HH:MM:SS`.
    - **Risco**.

### Últimas 5 sessões com risco

Lista com as últimas 5 sessões com algum risco detectado.

**Colunas do relatório:**

- **Usuário**.
- **Dispositivo**.
- **Credencial**.
- **Data**.
- **Risco**.
- **Ícone da lupa**: exibe a tela **Detalhes do acesso**, que apresenta os seguintes dados da sessão:
  - **Usuário**: detalhes do usuário como seu nome pessoal, email e endereço de IP.
  - **Credencial**: a credencial do usuário, o endereço de IP do dispositivo, protocolo e porta.
  - **Acesso**: detalhes da sessão acessada pelo usuário como dispositivo de origem, duração da sessão, dispositivo de destino, protocolo e porta.
  - **Últimos comandos detectados**: lista dos comandos auditados realizados pelo usuário durante a sessão.

### Últimas 5 consultas com risco

Lista com as últimas 5 visualizações de senha com algum risco detectado.

**Colunas do relatório:**

- **Usuário**.
- **Dispositivo**.
- **Credencial**.
- **Data**.
- **Risco**.
- **Ícone da lupa**: exibe a tela **Detalhes do acesso**, que apresenta os seguintes dados da sessão:
  - **Usuário**: detalhes do usuário como seu nome pessoal, email e endereço de IP.
  - **Credencial**: a credencial do usuário, o endereço de IP do dispositivo, protocolo e porta.
  - **Consulta**: IP do usuário, tipo de consulta, data e hora da consulta e IP do dispositivo acessado.
  - **Últimos eventos da consulta**: relatório que exibe os últimos eventos realizados na consulta e apresenta as seguintes informações:
    - **Usuário**.
    - **Dispositivo**.
    - **Credencial**.
    - **Data**: data e hora da consulta. Formatos: `DD/MM/AAAA` e `HH:MM:SS`.
    - **Risco**.

