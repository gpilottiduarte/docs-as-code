# Compartilhamento externo


Este documento fornece informações sobre a tela do relatório **Compartilhamento externo** que exibe os compartilhamento de itens com usuários que não possuem uma conta no **MySafe**.

## Requisitos

* Permissão de compartilhamento externo concedida pelo administrador do **MySafe**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **MySafe.**  
2. No menu lateral, selecione **Central de compartilhamento \> Compartilhamento externo**.  
   

---

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV* e *Agendar relatório.* |

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo  de texto | Filtra os itens pelo seu código de identificação no Segura. |
| **Nome** | Campo  de texto | Filtra os itens pelo seu nome de identificação. |
| **Tipo** | Campo  de texto | Filtra os itens por seu tipo. As opções são *Senha, Arquivo, Anotação* e *Segredos de API.* |
| **Data de início** | Seletor de data | Filtra os itens pelo período inicial do compartilhamento. |
| **Expiração** | Seletor de data | Filtra os itens pelo período de expiração do compartilhamento. |
| **Destinatário** | Campo  de texto | Filtra os itens pelo email do destinatário do compartilhamento. |
| **Acessos restantes** | Campo  de texto | Filtra os itens pela quantidade de acessos restantes até a expiração do compartilhamento. |
| **Estado** | Menu suspenso | Filtra os itens pelo seu estado. As opções são *Aprovado, Finalizado, Cancelado* e *Erro*. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código**.

* **Nome**.

* **Tipo**.

* **Data**: data e hora que o compartilhamento externo foi feito.

* **Destinatário**.

* **Expiração**: data e hora de expiração do link de compartilhamento.

* **Acessos restantes**: quantidade de acessos disponíveis ao link dentro do período de expiração. As opções são **Sem limite** e um **numeral** que indica a quantidade de vezes que a pessoa poderá acessar o link antes que ele expire.

* **Estado**.

* **Ações**: 

  * **Revogar**: abre o pop-up de confirmação para revogação do compartilhamento com as opções **Sim** ou **Não**. Disponível para compartilhamentos com status **Ativo**. Em caso de revogação, a data de expiração do link é atualizada para o momento em que o compartilhamento foi revogado.

  * **Reenviar url de acesso:** abre o pop-up de confirmação para reenvio do email com o link de compartilhamento com as opções **Sim** ou **Não**.  Disponível para compartilhamentos com status **Ativo**. 

  * **Histórico**: abre a tela **Histórico de compartilhamento externo**.

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.

:::

## Tela Histórico de compartilhamento externo

Esta tela exibe informações sobre um item compartilhado com um usuário que não possui conta no **MySafe.**



| Item | Descrição |
| :---- | :---- |
| **Evento** | Exibe a ação realizada no item compartilhado externamente. As opções são *Compartilhamento expirado*, *Compartilhamento revogado, Item compartilhado, Item acessado* e *Link reenviado*. |
| **Código** | Exibe o código de identificação do evento no Segura. |
| **Data** | Exibe a data e a hora do evento.  |

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.

:::

