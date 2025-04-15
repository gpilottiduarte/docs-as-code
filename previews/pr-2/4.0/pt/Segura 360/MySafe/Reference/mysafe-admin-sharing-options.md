# Opções de compartilhamento


Este documento fornece informações sobre a tela do formulário **Opções de compartilhamento** que possibilita que o administrador configure o **MySafe**.

## Requisitos

* Permissão de administrador do **MySafe**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **MySafe.**  
2. No menu lateral, selecione **Administração global \> Opções de compartilhamento.**  
 ---


## Seção Configuração de email

:::(warning) (Atenção)  
Embora não seja obrigatório, deixar o campo **Conta de envio** em branco impede o envio do email necessário para conectar o **MySafe** à extensão e ao aplicativo, além de bloquear o envio de quaisquer notificações do **MySafe**.
:::

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Conta de envio** | Menu suspenso | Não | Define o e-mail que enviará quaisquer tipos de notificação do **MySafe**, como o código de autenticação para que os usuários possam conectar a extensão e aplicativo móvel  ao **MySafe**   ou acessar um item compartilhado.  |

## Seção Compartilhamento Externo

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Habilitar compartilhamento externo?**\* | Botão de opção | Sim | Ativa ou desativa o compartilhamento externo. As opções são **Sim** ou **Não**.  |
| **Tempo máximo de compartilhamento** | Seletor de quantidade/Menu suspenso | Não | Define o tempo, em número, que um item compartilhado com um usuário externo ao **MySafe** estará disponível para acesso. O menu suspenso exibe as opções *Minutos, Horas, Dias* e *Meses.*  |
| **Url base** | Campo de texto | Não | Define a URL do cofre **MySafe** que se conectará à extensão, aplicativo móvel ou ao item compartilhado. <br>**Nota:** insira a URL sem o prefixo `https://`. <br>Exemplo: `empresa.mt4.dev` |

:::(warning) (Atenção)

Para ambientes *multi-tenant*, insira a URL do tenant no campo **Url base** também sem o prefixo `https://`. Exemplo: `mytenant.mt4.dev`.  
:::
