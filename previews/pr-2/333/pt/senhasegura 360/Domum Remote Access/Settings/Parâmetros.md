# Parâmetros

Este documento fornece informações detalhadas sobre a tela **Parâmetros** do **Domum Remote Access**. Para mais detalhes sobre como estabelecer os parâmetros, consulte [Como estabelecer os parâmetros](https://docs.senhasegura.io/v3-33/docs/pt/domum-how-to-set-the-parameters).

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Domum Remote Access**.  
2. No menu lateral, selecione **Gerenciamento > Parâmetros > Domum.**

## Barra superior

Na barra superior da tela de **Parâmetros** estão as seguintes seções:

| Item | Descrição |
| :---- | :---- |
| **Domínio de usuários internos** | Campo preenchido automaticamente. |
| **Domínio fornecedores** | Campo preenchido automaticamente. |
| **Habilitar autenticação externa**\* | Campo obrigatório que serve para a habilitação de autenticação externa. As opções são **Sim** e **Não**. **Nota:** Se este campo estiver habilitado, ele requer um provedor registrado no senhasegura. Se nenhum provedor estiver registrado, o campo não funcionará corretamente. |
| **URL de retorno para SSO** | Campo preenchido automaticamente. Este campo é exibido somente caso o campo **Habilitar autenticação externa\*** esteja ativado. |
| **Conceder acesso automaticamente após provisionamento de usuário interno**\* | Campo obrigatório que serve para o envio automático do link após o provisionamento do usuário. As opções são **Sim** e **Não**. |
| **Duração** | Campo para a definição da duração do acesso. Este campo é exibido somente caso o campo **Conceder acesso automaticamente após provisionamento de usuário interno\*** esteja ativado. |

## Token de autenticação inicial

A seção exibe os seguintes campos:

| Item | Descrição |
| :---- | :---- |
| **Provedor** | Campo para a definição da forma de envio do link de acesso. As opções são **E-mail** e **SMS**. |
| **Tempo de expiração do primeiro token (em minutos)** | Campo customizável para a definição do tempo de expiração do primeiro token. A medida é em minutos. |

## Configuração de e-mail

A seção exibe o seguinte campo:

| Item | Descrição |
| :---- | :---- |
| **Conta de envio** | Campo com um menu suspenso para a escolha da conta SMTP previamente cadastrada. Essa será a conta responsável pelo envio dos links de acesso e das notificações. |

## Notificações

A seção exibe os seguintes campos:

| Item | Descrição |
| :---- | :---- |
| **Expiração de acesso. Notificar:** | Campo com menu suspenso. Serve para a indicação dos usuários que receberão a notificação sobre a expiração do acesso. As opções são *Solicitante do acesso*, *Usuário com acesso* ou *Solicitante e Usuário*. |
| **Quando notificar?** | Campo para a indicação, em números, sobre a antecedência da notificação. |
| **Antes do vencimento** | Campo para a indicação, em unidade de tempo, sobre a antecedência da notificação. |