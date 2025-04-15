# Credenciais por usuário

Este documento fornece informações sobre a tela **Credenciais por usuário** no menu de **Auditoria**, que exibe os detalhes da conexão do **Domum Remote Access** e lista as credenciais acessadas por fornecedores ou usuários terceiros, vinculando as solicitações ao acesso concedido para auditoria ou cancelamento.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Domum Remote Access**.  
2. No menu lateral, selecione **Auditoria \> Credenciais por usuário**.

## Menu de ações

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Ações** | Menu suspenso | Exibe as opções: *Imprimir relatório*, *Exportar CSV*, e *Agendar relatório*. |

## Campos de busca

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Código** | Campo de texto | Filtra os itens pelo código de identificação no Segura. |
| **Fornecedor** | Menu suspenso | Filtra os itens pelo nome do fornecedor. Limpe o campo para habilitar a opção **Todos**. |
| **Usuário** | Campo de texto | Filtra os itens pelo nome do usuário. |
| **Credencial** | Campo de texto | Filtra os itens pela credencial utilizada. |
| **Dispositivo** | Campo de texto | Filtra os itens pelo dispositivo que realizou o acesso. |
| **Data de expiração** | Seletor de data | Filtra os itens pelo período de expiração. |
| **Estado** | Menu suspenso | Filtra os itens pelo estado atual do compartilhamento. As opções são: *Aguardando aprovação*, *Aprovado*, *Rejeitado*, *Finalizado*, *Cancelado*, ou *Erro*.  Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

- **Código**.  
- **Fornecedor**.  
- **Usuário**.  
- **Credenciais**.  
- **Dispositivo**.  
- **Data da aprovação**: exibe a data e hora em que a solicitação de acesso foi aprovada.  
- **Data de expiração**.  
- **Estado**.  
- **Ações**:  
    - **Detalhes:** abre a tela [Detalhes dos acessos](/v4/docs/pt/domum-credentials-by-users-report#tela-detalhes-dos-acessos).
    
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Tela Detalhes dos acessos

| Item | Descrição |
| ----- | ----- |
| **Usuário** | Usuário que realizou o acesso. |
| **Fornecedor ou grupo** | Fornecedor ou grupo ao qual o usuário está associado. |
| **Status** | Status do acesso. |
| **Código** | Código do acesso. |
| **Grupo de acesso** | Tipo de grupo de acesso associado ao acesso. |
| **Data de início** | Data em que o acesso foi iniciado. |
| **Data de fim** | Data em que o acesso foi encerrado. |

### Seção Credenciais

| Item | Descrição |
| ----- | ----- |
| **Código** | Código de identificação da credencial. |
| **Tipo** | Tipo da credencial. |
| **Nome de usuário** | Nome de usuário associado à credencial. |
| **Dispositivo** | Dispositivo associado à credencial. |
| **Iniciar sessão** | Indica se a credencial permite iniciar uma sessão. |
| **Visualizar senha** | Indica se a credencial permite visualizar senhas. |

### Seção Restrição de acesso

| Item | Descrição |
| ----- | ----- |
| **Dias de permissão de acesso** | Exibe os dias em que o acesso é permitido. |
| **Tempos de permissão de acesso** | Exibe os horários nos quais o acesso é permitido. |
| **Número máximo de sessões** | Exibe o número máximo de sessões permitidas. |

### Seção Justificativa

| Item | Descrição |
| ----- | ----- |
| **Código de governança** | Código de governança do acesso. |
| **Motivo** | Motivo para a realização do acesso. |
| **Justificativa** | Justificativa fornecida para o acesso. |