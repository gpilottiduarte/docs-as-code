# Tenants

Este documento fornece informações sobre a tela **Tenants** no menu **Configurações de organização**, que exibe detalhes sobre os *tenants* cadastrados e permite que o administrador gerencie os *tenants* da sua organização.

## Caminho para acesso

1. Acesse **Cloud Security**.  
2. No menu do usuário, clique em **Painel do administrador**.  
3. No menu lateral, clique em **Tenants**.

## Menu de ações

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **\+ Criar tenant** | Botão | Abre a janela [Criar tenant](/v4/docs/pt/tenants#tela-criar-tenant). |

## Campos de busca

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Pesquisar** | Campo de texto | Filtra os *tenants* com base nas palavras inseridas. |
| **Limpar filtros** | Botão | Limpa os filtros aplicados. |
| **Exportar dados em CSV** | Botão | Abre a janela **Exportar dados em CSV**. |
| **Mostrar/Ocultar colunas** | Botão | Abre um *card* para gerenciar a exibição das colunas no relatório. |

## Campos do relatório

- Nome: nome do *tenant*.  
- Nome da Organização: nome da organização.  
- Usuários: quantidade de usuários cadastrados no *tenant*.  
- Data de Criação: data de criação do *tenant*.  
- Ações:  
    - Editar: abre a tela [Criar tenant](/v4/docs/pt/tenants#tela-criar-tenant).  
    - Detalhes: abre a tela [Detalhes do tenant](/v4/docs/pt/tenants#tela-detalhes-do-tenant).

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Tela Detalhes do tenant

| Item | Descrição |
| :---- | ----- |
| **E-mail** | Email do usuário. |
| **Nome** | Primeiro nome do usuário. |
| **Sobrenome** | Sobrenome do usuário. |
| **Número de telefone** | Número de telefone do usuário. |
| **ID** | ID do usuário. |
| **Cadastro** | Tipo de cadastro do usuário. |
| **Visto por último em** | Data e hora de quando o usuário foi acessado por último. |
| **Status** | Status da conta do usuário. |

## Tela Criar tenant

### Aba Usuários

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Organização** | Campo de texto | Não | Nome da organização. |
| **Nome do Tenant \*** | Campo de texto | Sim | Nome do *tenant*. |
| **Email do Administrador \*** | Campo de texto | Sim | Email do administrador do *tenant*. |
| **Idioma do *tenant*** | Menu suspenso | Sim | Idioma do *tenant*. |
