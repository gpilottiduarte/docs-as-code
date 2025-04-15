# Administradores

Esse documento fornece informações sobre a tela **Administrador da Organização** no menu **Configurações de organização**, que exibe informações sobre todos os administradores da sua organização, e permite administradores adicionarem, editarem, e desativarem outros administradores.

## Caminho para acesso

1. Acesse **Cloud Security**.  
2. No menu do usuário, clique em **Painel do administrador**.  
3. No menu lateral, clique em **Administradores**.

## Menu de ações

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **\+ Adicionar** | Botão | Abre a tela [Adicionar usuário](/v4/docs/pt/administrators#tela-adicionar-usuário). |

## Campos de busca

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Pesquisar** | Campo de texto | Filtra os administradores com base nas palavras inseridas. |
| **Limpar filtros** | Botão | Limpa os filtros aplicados. |
| **Exportar dados em CSV** | Botão | Abre a janela **Exportar dados em CSV**. |
| **Mostrar/Ocultar colunas** | Botão | Abre um *card* para gerenciar a exibição das colunas no relatório. |

## Campos do relatório

- E-mail: email dos administradores.  
- Ações:  
    - Remover: remove o administrador da organização.

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Tela Adicionar usuário

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Email do Administrador \*** | Campo de texto | Sim | Email do administrador a ser adicionado. |
| **Tenant para adicionar o administrador** | Menu suspenso | Sim | *Tenant* para adicionar o novo administrador. |

:::(Info) (Info)
Para ser um administrador da organização, o usuário precisa estar em pelo menos um *tenant* da organização.
:::