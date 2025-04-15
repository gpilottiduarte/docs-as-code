# Configurador de Segurança

Este documento fornece informações sobre a tela do formulário **Configurador de Segurança**, que exibe informações sobre as configurações do Segura e permite gerenciá-las.

## Caminho para acessar

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos,** e selecione **Configurações**.  
2. No menu lateral, selecione **Política de segurança e rede \> Segurança de autenticação.**

## Manutenção das contas de usuário

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Minutos para expirar a sessão** | Campo de texto | Valor, em minutos, para que a sessão (login) seja expirada automaticamente. |
| **Bloquear conta após X tentativas de login** | Campo de texto | Quantidade de tentativas mal sucedidas de login, em uma única sessão de login, até que a conta seja bloqueada. |
| **Bloquear conta inativa** | Caixa de seleção | Seleciona se uma conta inativa será bloqueada. |
| **X dias até bloqueio** | Campo de texto | Caso a opção **Bloquear conta inativa** esteja ativada, você deve indicar a quantidade de dias sem acesso até que esta conta seja bloqueada. |
| **Obrigar alteração de senha no primeiro acesso** | Caixa de seleção | Seleciona se o usuário deverá mudar a senha no primeiro acesso. |
| **Expirar senha** | Caixa de seleção | Seleciona se a senha será expirada automaticamente. |
| **X dias até a expiração da senha** | Campo de texto | Caso a opção **Expirar senha** esteja ativada, você deve indicar a quantidade de dias até que a senha seja expirada. |
| **Tempo entre token CSRF (minutos)** | Seletor de quantidade | Selecione a quantidade de tempo máximo para o usuário realizar o login antes da expiração do token CSRF. |

:::(info) (Info) 
CSRF (*Cross-Site Request Forgery*) é um ataque onde um site malicioso induz um usuário autenticado em outro site, como um banco, a realizar uma ação indesejada, como uma transferência financeira. Sem proteção CSRF, um link malicioso pode realizar essa ação como se fosse o próprio usuário, utilizando cookies de sessão válidos. Para evitar isso, CSRF tokens são usados.  
:::

## Autenticação de multifator

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Forçar o uso de Autenticação de multifator para todos os Usuários** | Botão *toogle* | Ativa ou desativa a autenticação MFA forçada para todos os usuários. |
| **Forçar o uso de certificado digital para todos os usuários** | Botão *toogle* | Ativa ou desativa o uso forçado de certificados digitais para todos os usuários. |
| **Habilitar o uso de uma solução externa de autenticação de multi-fator** | Botão *toogle* | Ativa ou desativa a permissão de uso de uma solução externa para autenticação MFA. |
| **Permitir “Confiar neste computador” até no máximo** | Botão *toogle* | Ativa ou desativa a opção de **confiar no computador** Com essa configuração habilitada, não será necessário utilizar o token pelo tempo definido. |
| **horas** | Campo de texto | Quantidade de tempo, em horas, que o computador será considerado confiável. |
| **Aceitar tokens gerados com até XX segundos de variação** | Botão *toogle* | Ativa ou desativa a aceitação de tokens de autenticação expirados. |
| **segundos de variação** | Campo de texto | Quantidade de tempo, em segundos, que o token expirado será considerado válido. |

## Nível de segurança de senha

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **XX caracteres no mínimo para a senha** | Campo de texto | Quantidade mínima de caracteres para a senha. |
| **X números no mínimo para a senha** | Campo de texto | Quantidade mínima de números para a senha. |
| **Restringir reutilização de senha** | Botão *toogle* | Ativa ou desativa a permissão para reutilização de senhas. |
| **XX últimas senhas que não podem ser utilizadas** | Campo de texto | Caso a opção **Restringir reutilização de senha** esteja ativada, você deve indicar quantas senhas, retroativamente, não poderão ser reutilizadas. |
| **Requer símbolos na senha** | Botão *toogle* | Ativa ou desativa a necessidade da senha conter símbolos. |

## Identificação contínua

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Queda no rating** | Seletor de quantidade | Pontos de perda para ativar reautenticação. |
| **Sessões de alto risco** | Seletor de quantidade | Número de sessões críticas para reautenticação ser acionada. |
| **Comandos bloqueados** | Seletor de quantidade | Limite de comandos auditados por sessão para reautenticação ser acionada. |
| **Tentativas de sessão em horário proibido** | Seletor de quantidade | Quantidade de tentativas permitidas fora do horário de acesso para reautenticação ser acionada. |
| **Tentativa de visualização em horário proibido** | Seletor de quantidade | Quantidade de tentativas de ver senhas fora do horário permitido para reautenticação ser acionada. |

:::(info) (Info)  
Para inabilitar um gatilho, define o valor dele como zero.  
:::

## Controle de acesso por IP

:::(error) (Atenção)  
Note que, ao selecionar a opção de negar todos, será necessário incluir o endereço 127.0.0.1 (localhost) na lista de IPs permitidos. Essa configuração é essencial porque o proxy do Segura realiza tentativas de acesso internamente e opera no localhost.  
:::

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Permitir todos/Negar todos** | Botão de opção | Define se todos os endereços de IP serão negados ou permitidos. |
| **Adicionar** | Botão | Adiciona uma entrada ao final da listagem de endereços de IP. |
| **Tabela de IPs** | Tabela | Dados de cada membro do controle de acesso por IP contendo os campos *Início, Final e Ação*. |

## MFA adaptativo por localização

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Adiciona uma entrada ao final da listagem de endereços de IP. |
| **Tabela de MFA Adaptativo por localização** | Tabela | Dados de cada membro da tabela de MFA adaptativo por localização contendo os campos *Início, Final e Ação*. |
