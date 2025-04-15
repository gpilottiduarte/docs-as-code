# Minhas solicitações de acesso

# Minhas solicitações de acesso

Este documento fornece informações sobre a tela **Minhas solicitações** no menu **Controle de acesso**, que exibe detalhes sobre todas as solicitações realizadas pelo usuário atual conectado no **Domum**. 

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Domum Remote Access**.  
2. No menu lateral, selecione **Controle de acesso \> Minhas solicitações de acesso**.

## Menu de ações

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Ações** | Menu suspenso | Exibe as opções: *Imprimir relatório*, *Exportar CSV*, e *Agendar relatório*. |

## Campos de busca

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Código** | Campo de texto | Filtra as solicitações de acesso pelo código. |
| **Operação** | Campo de texto | Filtra as solicitações de acesso pelo tipo de solicitação realizada. |
| **Política de acesso** | Campo de texto | Filtra as solicitações de acesso pela política de acesso cadastrada na solicitação. |
| **Solicitante** | Campo de texto | Filtra as solicitações de acesso pelo nome do solicitante ao acesso. |
| **Data de solicitação** | Campo de texto | Filtra as solicitações de acesso pelo período em que a solicitação foi feita. |
| **Status** | Menu suspenso | Filtra as solicitações de acesso pelo status da solicitação. As opções são: *Pendente*, *Aprovada*, *Reprovada* ou *Expirada*. |
| **Governança** | Campo de texto | Filtra as solicitações de acesso pelo código de governança. |

## Campos do relatório

- **Código**.  
- **Operação**.  
- **Política de acesso**.  
- **Solicitante**.  
- **Data da solicitação**.  
- **Status**.  
- **Validade**: data limite em que o acesso será válido.  
- **Governança**.  
- **Motivo**: motivo do acesso.  
- **Ações**:  
    - **Aprovar**: aprova o acesso.  
    - **Rejeitar**: rejeita o acesso.  
    - **Detalhes**: abre a tela [Detalhes da requisição](/v4/docs/pt/domum-reference-access-control-my-requests#tela-detalhes-da-requisição).

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Tela Detalhes da requisição

| Item | Descrição |
| ----- | ----- |
| **Solicitação** | Usuário que realizou a solicitação. |
| **Novo acesso Domum** | Estado da solicitação de acesso. |
| **Código** | Código da solicitação. |
| **Política de acesso** | Política de acesso cadastrada na solicitação. |
| **Solicitado em** | Data e hora em que a solicitação foi feita. |
| **Validade** | Data e hora em que a solicitação irá expirar. |
| **Aprovações** | Quantidade de aprovações para a solicitação. |
| **Reprovações** | Quantidade de reprovações para a solicitação. |

### Seção Respostas

| Item | Descrição |
| ----- | ----- |
| **Aprovador** | Usuário aprovador. |
| **Nível** | Nível do usuário aprovador. |
| **Resposta** | Resposta do usuário aprovador da solicitação. |
| **Data** | Data e hora em que a solicitação foi respondida. |
| **Justificativa** | Justificativa da resposta do usuário aprovador. |

### Seção Justificativa

| Item | Descrição |
| ----- | ----- |
| **Código de governança** | Código de governança do acesso. |
| **Motivo** | Motivo para a realização do acesso. |
| **Justificativa** | Justificativa apresentada para o acesso. |

### Seção Detalhes da solicitação

| Item | Descrição |
| ----- | ----- |
| **Código do acesso** | Código do acesso. |
| **Data de início** | Data e hora da solicitação. |
| **Data de fim** | Data e hora em que a solicitação irá expirar. |
| **Fornecedor** | Fornecedor cadastrado no acesso. |
| **Usuário** | Usuário que realizou a solicitação. |
| **Credenciais** | Credencial cadastrada no acesso. |
| **Dias de permissão de acesso** | Dias em que o acesso poderá ser realizado. |
| **Horários de permissão de acesso** | Horário em que o acesso poderá ser realizado. |
| **Número máximo de sessões** | Número máximo de sessões que podem ser iniciadas nesse acesso. |
| **Aprovar o pedido** | Botão para aprovar a solicitação. |
| **Reprovar solicitação** | Botão para reprovar a solicitação. |