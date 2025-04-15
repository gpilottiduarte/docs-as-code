# Histórico do controle de aceso

# Histórico do controle de acesso

Este documento fornece informações sobre a tela **Histórico do controle de acesso** no menu de **Auditoria**, que ajuda o auditor a rastrear solicitações de acesso, identificar o usuário solicitante e revisar os detalhes no **Domum Remote Access**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Domum Remote Access**.  
2. No menu lateral, selecione **Auditoria \> Histórico do controle de acesso**.

## Menu de ações

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Ações** | Menu suspenso | Exibe as opções: *Imprimir relatório*, *Exportar CSV*, e *Agendar relatório*. |

## Campos de busca

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Código** | Campo de texto | Filtra o histórico do código de identificação no Segura. |
| **Data** | Seletor de data | Filtra o histórico do período em que foram adicionadas. |
| **Usuário** | Campo de texto | Filtra o histórico do usuário. |
| **Código do acesso** | Campo de texto | Filtra o código de acesso ao histórico. |
| **IP** | Campo de texto | Filtra o histórico pelo IP do usuário. |
| **Justificativa** | Campo de texto  | Filtra o histórico pela justificativa fornecida no momento do acesso. |
| **Código de governança** | Campo de texto  | Filtra o histórico pelo código de governança de acesso. |
| **Operação** | Menu suspenso | Filtra o histórico pelo status da operação solicitada: *Aprovado*, *Rejeitado* ou *Cancelado*.  Limpe o campo para habilitar a opção **Todos**. |
| **Motivo** | Menu suspenso | Filtra o histórico pelo motivo. É possível filtrar pelos tipos padrão preexistentes ou motivos registrados pelo administrador.  Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

- **Código**.  
- **Data**.  
- **Usuário**.  
- **Operação**.  
- **IP**.  
- **Código do acesso**.  
- **Justificativa**.  
- **Código de governança**.  
- **Motivo**.  
- **Ações**:  
    - **Detalhes**: abre a tela [Detalhes dos acessos](/v4/docs/pt/domum-access-control-history#tela-detalhes-dos-acessos).
    
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
| **Nome de usuário** | Nome de usuário associado ao acesso registrado pela credencial. |
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
| **Motivo** | Motivo para a solicitação do acesso. |
| **Justificativa** | Justificativa fornecida para o acesso. |