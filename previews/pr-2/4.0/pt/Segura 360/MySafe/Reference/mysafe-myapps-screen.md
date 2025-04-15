# Meus apps

Este documento fornece informações sobre a tela do relatório **Meus apps** que exibe as aplicações (extensão do navegador e aplicativo **Segura**) do usuário que possuem acesso ao **MySafe** e possibilita criar e gerenciar as chaves de autorização. 

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **MySafe.**  
2. No menu lateral, selecione **Integrações \> Meus apps.**  
   

---


## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão  | Direciona para a tela **Adicionar aplicativo.** |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV* e *Agendar relatório.* |

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as aplicações pelo seu código de identificação no Segura. |
| **Nome** | Campo de texto | Filtra as aplicações pelo nome de identificação. |
| **Tipo de aplicação** | Menu suspenso | Filtra as aplicações pelo seu tipo. As opções são **Aplicativo móvel** e **Extensão**. Limpe o campo para habilitar a opção **Todos**.  |
| **Dispositivo** | Campo de texto | Filtra as aplicações pelo dispositivo em que está sendo utilizada. |
| **Versão** | Campo de texto | Filtra as aplicações pela sua versão Segura. <br>Por exemplo, digite `3.30.0.10` para procurar por aplicações do tipo **extensão** na versão 3.30.0.10 do Segura, |
| **Data de criação** | Seletor de data | Filtra as aplicações pelo período em que foram adicionadas ao **MySafe**.  |
| **Data de expiração** | Seletor de data | Filtra as aplicações pelo período de expiração.  |
| **Status** | Menu suspenso | Filtra as aplicações pelo seu estado de ativação. As opções são **Ativo** ou **Inativo**. Limpe o campo para habilitar a opção **Todos**. |



## Campos do relatório

* **Código**.

* **Nome**.

* **Tipo da aplicação**.

* **Dispositivo**.

* **Versão**.

* **Data de criação**.

* **Último uso**.

* **Data de expiração**.

* **Ações:**

  * **Editar:** abre a tela **Editar aplicação** que possibilita a edição do nome ou da data de expiração da aplicação.

  * **Revogar:** abre o pop-up de confirmação de revogação do acesso com as opções **Sim** ou **Não.**  
    

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.

:::

## Tela Adicionar/Editar aplicativo 

As telas **Adicionar aplicativo** e **Editar aplicativo** compartilham os mesmos campos.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome\*** | Campo de texto | Sim | Nome de identificação da aplicação que irá se conectar ao **MySafe**. |
| **Data de expiração** | Seletor de data/hora | Não | Data e hora de expiração do acesso. **Nota:** se a data de expiração não for definida, a chave permanecerá válida até que o usuário saia da aplicação ou a revogue manualmente. |
| **Tipo da aplicação\*** | Botão de opção | Sim | Tipo de aplicação que irá se conectar ao **MySafe**. As opções são **Aplicativo móvel** ou **Extensão.**  |
