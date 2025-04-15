# Configuração inicial

Neste artigo, você encontra um guia com as configurações iniciais para começar a utilizar o **Domum Remote Access**.

## **Requisitos**

- **Domum Remote Access** [ativado](/v3-33/docs/pt/domum-license-activation).

## Passo 1: Configurar a conta de e-mail

Para que o **Domum Remote Access** envie um e-mail com o link de acesso para usuários, é preciso configurar a instância do senhasegura com uma conta de envio SMTP padrão. Se essa conta não existir, você verá uma tela de erro ao tentar encaminhar o link de acesso.

Consulte o artigo [Como configurar conta de e-mail](/v3-33/docs/pt/administration-how-to-set-up-an-e-mail-account-for-notifications) para instruções sobre o processo de configuração da conta SMTP padrão.

## Passo 2: Estabelecer os parâmetros

Após configurar a conta de e-mail SMTP, é necessário estabelecer os parâmetros para o funcionamento do **Domum Remote Access**.

Consulte o artigo [Como estabelecer os parâmetros](/v3-33/docs/pt/domum-reference-settings-parameters) para instruções sobre essas configurações.

## Passo 3 (opcional): Cadastrar um motivo de acesso

Para a concessão de acesso para usuários internos ou terceiros, o **Domum Remote Access** requer que o administrador atribua um motivo para a concessão daquele acesso, por padrão, o **Domum** vem com três opções pré-cadastradas: *Alteração*, *Trabalho remoto* e *Incidente*, caso desejado, é possível configurar novos motivos de acesso.

Acesse o artigo sobre [Como adicionar motivos do acesso](/v3-33/docs/pt/domum-how-to-add-access-reasons) para instruções.

## Passo 4: Cadastrar um grupo de acesso

O **Domum Remote Access** trabalha com grupos de acesso de origens diferentes, dependendo do tipo de usuário:

- Os usuários terceiros pertencem aos **Grupos de acesso** criados diretamente no módulo **Domum**. Consulte o artigo [Como criar grupos de acesso para fornecedores](/v3-33/docs/pt/domum-create-access-group-for-vendor) para instruções sobre a criação desses grupos para usuários terceiros.

## Passo 5: Cadastrar usuários

Com o cadastro do fornecedor concluído, você poderá cadastrar o usuário prestador de serviço relacionado a esse fornecedor. Consulte o artigo [Como cadastrar usuários terceiros](/v3-33/docs/pt/domum-access-third) para instruções sobre essa ação.

Para usuários internos, consulte o artigo sobre [Acesso remoto - usuários internos](/v3-33/docs/pt/domum-access-employee) para mais informações.

## Passo 6: Detalhar configurações por grupos de usuários

Após cadastrar os usuários em grupos de acesso e limitar os dados em que eles podem atuar, é preciso detalhar as configurações de acesso por grupos de usuários. Além das necessidades específicas dos grupos de usuários internos e de usuários terceiros, esse passo tem o objetivo comum de indicar possíveis restrições para a origem do acesso dos usuários remotos.

- No caso de usuários internos, existe a opção de fornecer de forma automática, o acesso ao **Domum Remote Access** assim que um novo usuário for adicionado ao grupo. Para entender como fazer essa ação, acesse o artigo [Como criar um grupo de usuários internos](/v3-33/docs/pt/domum-dashboard-internal-users-groups) com informações detalhadas.
- No caso de usuários terceiros, a criação do cadastro de um novo fornecedor funciona como um *“grupo de usuários terceiros”*, e permite armazenar informações importantes sobre a empresa. Acesse o artigo [Formulário de adição de novo fornecedor](/v3-33/docs/pt/domum-create-access-group-for-vendor) para instruções.

## Passo 7: Conceder acesso aos usuários

A última etapa é o envio do link de acesso aos usuários. Como o **Domum Remote Access** pode gerenciar o acesso a usuários internos e a usuários de terceiros, cada tipo de usuário tem sua própria maneira de receber o primeiro acesso.

Para usuários internos, acesse [Conceder primeiro acesso a um usuário interno](/v3-33/docs/pt/domum-grant-employee-first-access) para obter instruções. Para usuários de terceiros, acesse [Conceder primeiro acesso a um terceiro](/v3-33/docs/pt/domum-grant-first-access-for-third-parties) para obter instruções.

## Como incluir logo personalizado nas telas (opcional)

O **Domum Remote Access** permite a exibição do logo do cliente na tela de login do **Domum** e no desktop do usuário terceiro.

Consulte o artigo [Customizar logo](https://docs.senhasegura.io/v3-30/docs/pt/administration-custom-logo) para instruções sobre a inclusão de logo personalizado.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).