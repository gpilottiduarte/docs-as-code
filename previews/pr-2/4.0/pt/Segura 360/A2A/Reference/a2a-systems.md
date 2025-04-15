# Sistemas



Este documento fornece informações sobre a tela do relatório **Sistemas**, que exibe os sistemas que consomem os dados da API.  
Saiba mais em [Gerenciamento](/v4/docs/pt/a2a-management).



## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **A2A**.  
2. No menu lateral, selecione **Gerenciamento \> Sistemas.**

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar**  | Botão | Direciona para a tela **Adicionar sistema**. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Pré-requisitos

* Permissão de administrador de sistema.

---

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Sistema** | Campo de texto | Filtra os sistemas pelo nome. |
| **Status** | Menu suspenso | Filtra os sistemas pelo seu estado de ativação. As opções são **Ativo** e **Inativo**. |

## Campos do relatório

* **Código:** código de identificação do sistema no Segura.  
* **Sistema.**  
* **Status.**  
* **Ações:**  
  * **Editar:** abre a tela **Editar sistema**.  
  * **Desativar**: abre o pop-up de confirmação de desativação do sistema com as opções **Sim** e **Não.**

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::



## Telas Adicionar/Editar sistema

As telas **Adicionar sistema** e **Editar sistema** compartilham os mesmos campos.



| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome\*** | Campo de texto | Sim | Nome de identificação do sistema. |
| **Status** | Botão de opção | Não | Define o estado de ativação do sistema. As opções são **Ativo** e **Inativo**. **Padrão:** Ativo. |

