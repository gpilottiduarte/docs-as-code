# Como configurar o Domum pela primeira vez

Este documento fornece informações como como configurar o **Domum Remote Access** pela primeira vez.

## Pré-requisitos

- **Domum Remote Access** [ativado](/v4/docs/pt/license-activation-1).

## Passo 1: Configurar a conta de e-mail

Para que o **Domum Remote Access** envie um e-mail com o link de acesso para usuários, é preciso configurar a instância do Segura com uma conta de envio SMTP padrão. Se essa conta não existir, você verá uma tela de erro ao tentar encaminhar o link de acesso.

Veja o documento [Como gerenciar configurações SMTP](/v4/docs/pt/how-to-manage-smtp-settings) para mais informações sobre o processo de configuração da conta SMTP padrão.

## Passo 2: Estabelecer os parâmetros

Após configurar a conta de e-mail SMTP, é necessário estabelecer os parâmetros para o funcionamento do **Domum Remote Access**.

Veja o documento [Como estabelecer os parâmetros](/v4/docs/pt/domum-how-to-set-the-parameters) para mais informações sobre os parâmetros.

## Passo 3 (opcional): Cadastrar um motivo de acesso

Para a concessão de acesso para usuários internos ou terceiros, o **Domum Remote Access** requer que o administrador atribua um motivo para a concessão daquele acesso, por padrão, o **Domum** vem com três opções pré-cadastradas: *Alteração*, *Trabalho remoto* e *Incidente*, caso desejado, é possível configurar novos motivos de acesso.

Veja o documento [Como adicionar motivos do acesso](/v4/docs/pt/domum-how-to-add-access-reasons) para mais informações.

## Passo 4: Cadastrar um grupo de acesso

O **Domum Remote Access** trabalha com grupos de acesso de origens diferentes, dependendo do tipo de usuário:

- Os usuários terceiros pertencem aos **Grupos de acesso** criados diretamente no módulo **Domum**. Veja o documento [Como criar grupo de acesso para fornecedores](/v4/docs/pt/create-vendor-access-group) para mais informações sobre a criação desses grupos para usuários terceiros.

## Passo 5: Cadastrar usuários

Com o cadastro do fornecedor concluído, você poderá cadastrar o usuário prestador de serviço relacionado a esse fornecedor. 

Para usuários terceiros, veja o documento [Como acessar o Domum como um usuário terceiro](/v4/docs/pt/domum-access-third) para mais informações.
Para usuários internos, veja o documento [Como acessar o Domum como um usuário interno](/v4/docs/pt/domum-access-employee) para mais informações.

## Passo 6: Detalhar configurações por grupos de usuários

Após cadastrar os usuários em grupos de acesso e limitar os dados em que eles podem atuar, é preciso detalhar as configurações de acesso por grupos de usuários. Além das necessidades específicas dos grupos de usuários internos e de usuários terceiros, esse passo tem o objetivo comum de indicar possíveis restrições para a origem do acesso dos usuários remotos.

- No caso de usuários internos, existe a opção de fornecer de forma automática, o acesso ao **Domum Remote Access** assim que um novo usuário for adicionado ao grupo. Para entender como fazer essa ação, veja o documento [Como adicionar um grupo de usuários internos](/v4/docs/pt/how-to-add-an-internal-user-group) para mais informações.
- No caso de usuários terceiros, a criação do cadastro de um novo fornecedor funciona como um “grupo de usuários terceiros”, e permite armazenar informações importantes sobre a empresa. Veja o documento [Como adicionar um fornecedor](/v4/docs/pt/how-to-add-a-vendor) para instruções.

## Passo 7: Conceder acesso aos usuários

A última etapa é o envio do link de acesso aos usuários. Como o **Domum Remote Access** pode gerenciar o acesso a usuários internos e a usuários de terceiros, cada tipo de usuário tem sua própria maneira de receber o primeiro acesso.

Para usuários internos, veja o documento [Como conceder o primeiro acesso a usuários internos](/v4/docs/pt/grant-the-first-access-to-internal-users) para mais informações. Para usuários de terceiros, veja o documento [Como conceder o primeiro acesso a usuários terceiros](/v4/docs/pt/como-conceder-primeiro-acesso-a-um-usuario-terceiro) para mais informações.

## Passo 8 (opcional): Como incluir logo personalizado nas telas

O **Domum Remote Access** permite a exibição do logo do cliente na tela de login do **Domum** e no desktop do usuário terceiro.

Veja o documento [Como configurar o logotipo no Segura](/v4/docs/pt/how-to-configure-the-logo-in-senhasegura) para mais informações sobre a inclusão de logo personalizado.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).