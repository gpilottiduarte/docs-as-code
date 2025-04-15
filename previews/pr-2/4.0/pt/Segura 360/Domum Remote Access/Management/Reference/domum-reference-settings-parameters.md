# Parâmetros

Este documento fornece informações sobre a tela **Parâmetros** no menu **Gerenciamento**, projetada para gerenciar configurações de autenticação e acesso no **Domum Remote Access**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **Domum Remote Access**.  
2. No menu lateral, selecione **Gerenciamento \> Parâmetros.**

## Parâmetros

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Domínio de usuários internos** | Campo de texto | Não | O sistema preenche automaticamente este campo. |
| **Domínio fornecedores** | Campo de texto | Não | O sistema preenche automaticamente este campo. |
| **Habilitar autenticação externa\*** | Botão de opção | Sim | Habilita a autenticação externa. As opções são: **Sim** ou **Não**. |
| **Conceder acesso automaticamente após provisionamento de usuário completo\*** | Botão de opção | Sim | Concede acesso automaticamente após o provisionamento completo do usuário. As opções são: **Sim** ou **Não**. |

### Token de autenticação inicial

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Provedor** | Botão de opção | Não | Define como o usuário receberá o link. As opções são: **Email** ou **SMS**. |
| **Tempo de expiração do primeiro token (em minutos)** | Seletor de quantidade | Não | Define o tempo de expiração do primeiro token, em minutos. |

### Configuração de email

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Conta de envio** | Menu suspenso | Não | Seleciona uma conta cadastrada para enviar links de acesso e notificações. |

### Notificações

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Expiração de acesso. Notificar:** | Menu suspenso | Não | Define quem receberá a notificação de expiração. As opções são: *Solicitante do Acesso*, *Usuário com Acesso*, ou *Solicitante e Usuário*. |
| **Quando notificar?** | Seletor de quantidade | Não | Número de dias antes da expiração para enviar a notificação. |
| **Antes do vencimento** | Menu suspenso | Não | Unidade de tempo para a notificação antecipada. As opções são: *Minutos*, *Horas*, *Dias*, ou *Meses*. |