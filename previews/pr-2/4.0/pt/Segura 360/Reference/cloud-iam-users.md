# Usuários

Este documento fornece informações sobre a página Usuários,  que lhe permite provisionar contas de usuário em todos os seus Cloud Service Providers (CSPs) integrados com o Segura e importar contas de serviço.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Cloud IAM**.  
2. No menu lateral, selecione **Cloud IAM** \> **Usuários.**

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela **Usuários**. |
| **Ações** | Menu suspenso | Exibe as opções para *Importar usuários da Azure*, *Reprocessar contas*, *Imprimir relatório*, *Exportar CSV*, e *Agendar relatório*. |

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra os usuários por seu código de identificação do dentro do Segura. |
| **Nome de usuário** | Campo de texto | Filtra os usuários por seu nome. |
| **Conta** | Menu suspenso | Filtra os usuários pela conta conectada. |
| **Provedores** | Menu suspenso | Filtra os usuários por um dos três provedores disponíveis. As opções disponíveis são: *AWS*, *Google Cloud* e *Azure*. |
| **Tag** | Campo de texto | Filtra os usuários pelas tags, que podem ser adicionadas quando um usuário é criado no **Cloud IAM**. |
| **Data de criação** | Seletor de data | Abre um calendário para escolher a data de registro do usuário. Essa data é considerada a data de início do filtro. |
| **Status** | Menu suspenso | filtra os usuários pelos seus status de provisionamento. As opções disponíveis são: *Pendente*, *Provisionado*, *Provisionando*, *Desprovisionamento*, *Não provisionado*, e *Importado*. |
| **Ativo** | Menu suspenso | Filtra os usuários pelo seu estado de ativação. As opções disponíveis são **Sim** e **Não**. |
| **Deletado** | Menu suspenso | Filtra os usuários deletados. As opções disponíveis são **Sim** e **Não**. |

## Campos do relatório

- **Código.**  
- **Nome de usuário.**  
- **Provedores.**  
- **Tags.**  
- **Data de criação.**  
- **TTL**: define quando o usuário irá expirar. O *time-to-live* (TTL) começa a contar a partir da sua criação, e quando expirar, o usuário será deletado automaticamente do provedor. Se nenhum valor for definido, o usuário não será expirado. O intervalo de valores aceitos é: 300 (5 minutos) a 86400 (24 horas).  
- **Status.**  
- **Ativo.**  
- **Deletado.**

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Reprocessar contas

O botão **Reprocessar contas** inicia um processo de sincronização manual com as contas **AWS** ou **Google Cloud** conectadas. Apesar desse processo ser automático, ele pode ser manualmente iniciado ao clicar neste botão.

Para contas da **Azure**, você deverá manualmente importar os usuários Azure no [Menu de ações](/v4/docs/pt/cloud-iam-users#menu-de-ações).

## Tela Usuário

Esta seção fornece informações sobre a tela **Usuário**.

### Configurações

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Usuário \*** | Menu suspenso | Sim | Usuário a ser criado. |
| **Usuário responsável** | Menu suspenso | Não | Campo para selecionar para quais provedores o usuário será criado. |
| **TTL (segundos)** | Seletor de quantidade | Não | Define quando o usuário irá expirar. O time-to-live (TTL) começa a contar a partir da sua criação, e quando expirar, o usuário será deletado automaticamente do provedor. Se nenhum valor for definido, o usuário não será expirado. O intervalo de valores aceitos é: 300 (5 minutos) a 86400 (24 horas). |
| **Descrição** | Campo de texto | Não | Descrição do usuário. |
| **Tags** | Campo de texto | Não | Etiquetas associadas ao usuário para ajudar a identificar o usuário facilmente. |