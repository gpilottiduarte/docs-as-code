# Usuários administrativos

O Segura oferece dois usuários administrativos essenciais para a gestão do sistema: 

* `mt4adm` para acesso SSH. 
* `mt4web` para administração da interface web. 

É crucial priorizar a segurança das senhas administrativas para evitar qualquer acesso não autorizado ou riscos potenciais.

:::(Error) (Importante)
Por razões de segurança, é recomendável alterar o nome de usuário administrativo **'admin'** durante o primeiro acesso. Consulte a documentação [Como alterar senhas padrão](/v4/docs/pt/orbit-cli-how-to-change-default-passwords) para obter instruções detalhadas. 
:::

::: (warning) (Cuidado)
Ao fazer login pela primeira vez, você será solicitado a estabelecer uma nova senha. Certifique-se de escolher uma senha forte e armazená-la com segurança. Evite salvar a nova senha dentro da aplicação Segura.
:::

::: (error) (Importante)
Após modificar a senha do usuário administrativo, priorize a segurança dela. A perda dessa senha resultará na incapacidade permanente de acessar a plataforma Segura.
:::
## Acesso SSH
Para versões do Segura 3.10 e superiores, utilize as seguintes credenciais para acesso SSH:

* **Usuário**: `mt4adm`
* **Senha**: `mt4adm`
* **Porta**: `59022`

Para usuários em versões mais antigas, entre em contato com a Equipe de Suporte para obter informações de login.

## Política de senha para o usuário mt4adm
Por questão de segurança, o Segura exige uma troca da senha do usuário mt4adm. Esta senha deve seguir uma série de padrões de segurança no momento de sua criação. A seguir estão detalhados os critérios e regras que que deverão ser aplicados aplicados:

* O usuário terá no máximo três tentativas de inserir a senha antes que um erro seja retornado, prevenindo tentativas repetitivas de acesso indevido.
* A senha deve conter pelo menos 12 caracteres.
* A senha deve incluir pelo menos uma letra minúscula, uma letra maiúscula e um número.
* A senha deve ser criada contendo um caractere especial (`!`, `@`, `#`, `$`).
* A nova senha deve ter pelo menos 10 mudanças em relação à senha anterior para garantir que não sejam usados padrões semelhantes consecutivamente.
* A senha não deve estar presente em listas comuns de senhas (`wordlists`) em diversos idiomas, prevenindo o uso de senhas fracas ou conhecidas que possam ser alvo de ataques de dicionário.

:::(error) (Importante)
Por questões de segurança, esta política de senhas não poderá ser parametrizada.
:::

## Interface Web

Para versões do Segura 3.32 e superiores, utilize as seguintes credenciais para administração da interface web:

* **Usuário**: `mt4web`
* **Senha**: `5enh@5eGuR@!`

Para usuários em versões mais antigas, entre em contato com a Equipe de Suporte para obter informações de login.





