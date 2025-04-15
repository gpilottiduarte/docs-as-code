# Configurador de Segurança

Neste documento, você vai encontrar todas as informações sobre a seção **Configurador de Segurança** das configurações do senhasegura.

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Parâmetros de sistema \> Segurança.**

## Segurança

### Manutenção das contas de usuário

| Item | Descrição |
| :---- | :---- |
| **Minutos para expirar a sessão** | Indica o valor, em minutos, para que a sessão (login) seja expirada automaticamente. |
| **Bloquear conta após X tentativas de login** | Indica a quantidade de tentativas mal sucedidas de login em uma sessão de login até que a conta seja bloqueada. |
| **Bloquear conta inativa** | Caixa de seleção para indicar se uma conta inativa será bloqueada. |
| **X dias até bloqueio** | Caso a opção **Bloquear conta inativa** esteja ativada, indica a quantidade de dias sem acesso até que a conta seja bloqueada. |
| **Obrigar alteração de senha no primeiro acesso** | Caixa de seleção para indicar se o usuário deverá mudar a senha no primeiro acesso. |
| **Expirar senha** | Caixa de seleção para indicar se a senha será expirada automaticamente. |
| **X dias até a expiração da senha** | Caso a opção **Expirar senha** esteja ativada, indica a quantidade de dias até que a senha seja expirada. |
| **Tempo entre token CSRF (minutos)** | Tempo máximo para o usuário realizar o login antes da expiração do token CSRF. |

:::(info) (Info)  
CSRF (*Cross-Site Request Forgery*) é um ataque onde um site malicioso induz um usuário autenticado em outro site, como um banco, a realizar uma ação indesejada, como uma transferência financeira. Sem proteção CSRF, um link malicioso pode realizar essa ação como se fosse o próprio usuário, utilizando cookies de sessão válidos. Para evitar isso, CSRF tokens são usados.  
:::

### Autenticação de multifator

| Item | Descrição |
| :---- | :---- |
| **Forçar o uso de Autenticação de multifator para todos os Usuários** | Caixa de seleção para indicar se a autenticação MFA será forçada para todos os usuários. |
| **Forçar o uso de certificado digital para todos os usuários** | Caixa de seleção para indicar se o uso de certificados digitais será forçado para todos os usuários. |
| **Habilitar o uso de uma solução externa de autenticação de multi-fator** | Caixa de seleção para indicar se o uso de uma solução externa para autenticação MFA será permitido. |
| **Permitir “Confiar neste computador” até no máximo XX horas.** | Caixa de seleção para indicar se a opção de confiar no computador será habilitada e por quanto tempo, no máximo, será possível confiar no computador. Seja, com essa configuração habilitada não será necessário usar o token pelo tempo definido. |
| **Aceitar tokens gerados com até XX segundos de variação** | Caixa de seleção para indicar se serão aceitos tokens de autenticação expirados e por quanto tempo será considerado o token expirado. |

### Nível de segurança de senha

| Item | Descrição |
| :---- | :---- |
| **XX caracteres no mínimo para a senha** | Indica a quantidade mínima de caracteres para a senha. |
| **X números no mínimo para a senha** | Indica a quantidade mínima de números para a senha. |
| **Restringir reutilização de senha** | Caixa de seleção para indicar se a reutilização de senhas será permitida. |
| **XX últimas senhas que não podem ser utilizadas** | Caso a opção **Restringir reutilização de senha** esteja ativada, indica quantas senhas, retroativamente, não podem ser reutilizadas. |
| **Requer símbolos na senha** | Caixa de seleção para indicar se a senha deverá conter símbolos. |

### Controle de acesso por Ip

| Item | Descrição |
| :---- | :---- |
| **Permitir todos/Negar todos** | *Radio button*. Indica se todos os endereços de IP serão negados ou permitidos. |
| **Ranges de IP** | Intervalos de IP. |
| **Inicio** | Endereço inicial do intervalo de IP. |
| **Final** | Endereço final do intervalo de IP. |
| **Ação** | Menu suspenso. Indica a ação que será tomada neste intervalo de IP. Pode ser **Negar todos** ou **Permitir todos**. |

### MFA adaptativo por localização

| Item | Descrição |
| :---- | :---- |
| **Ranges de IP** | Intervalo de IP. |
| **Inicio** | Endereço inicial do intervalo de IP. |
| **Final** | Endereço final do intervalo de IP. |
| **Ação** | Menu suspenso. Indica a ação que será tomada neste intervalo de IP. Pode ser **Obrigar MFA** ou **Ignorar MFA.** |