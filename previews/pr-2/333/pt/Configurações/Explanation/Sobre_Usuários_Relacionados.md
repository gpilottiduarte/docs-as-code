# Sobre Usuários Relacionados

A função de Usuários Relacionados no senhasegura permite associar um único usuário do sistema a múltiplos nomes de usuário de credenciais usados em diversos dispositivos. Isso é feito através da utilização da máscara `[#USERNAME#]` nos critérios de grupo de acesso.

## Como isso funciona na prática?

Vamos usar o exemplo de uma usuária chamada **Alice Woods**. No senhasegura, o nome de usuário dela é `awoods`. No entanto, na empresa, Alice usa o nome de usuário `woods` para acessar o dispositivo A e `alicewoods` para acessar o dispositivo B.

### Uso padrão da máscara \[\#USERNAME\#\]

Em um cenário convencional, ao se utilizar a máscara \[\#USERNAME\#\] em um grupo de acesso, as credenciais associadas são aquelas que correspondem estritamente ao nome de usuário no senhasegura, que, no caso de Alice, é `awoods`. Isso significa que, sem ajustes adicionais, apenas as credenciais vinculadas a `awoods` seriam acessíveis através deste grupo.

### Expandindo o acesso com Usuários Relacionados

Com a funcionalidade de **Usuários Relacionados**, é possível estender o acesso de Alice a outros nomes de usuário associados a ela. Ao configurar `alicewoods` como um **Usuário Relacionado** para Alice, o uso da máscara `[#USERNAME#]` em um grupo de acesso poderá então incluir as credenciais associadas tanto a `awoods` (o nome padrão) quanto a `alicewoods` (o nome relacionado).

Esta funcionalidade garante uma maior flexibilidade e eficiência na gestão dos acessos dos usuários a diversos dispositivos, simplificando o processo de autenticação sem comprometer a segurança.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).  