# Como gerenciar senhas usando a extensão MySafe

Este documento fornece um guia passo a passo sobre como gerenciar suas senhas armazenadas no **MySafe** através da extensão.

## Requisitos

* A extensão **MySafe** instalada e ativada no seu navegador. Saiba mais em [Primeiros passos com a extensão MySafe](/v4/docs/pt/mysafe-extension-first-steps).

:::(error) (Alerta)  
Devido aos mecanismos de segurança de aplicações de terceiros, não podemos garantir a detecção automática de campos de nome de usuário e senha pela extensão **MySafe** em todos os sites. No entanto, estamos continuamente melhorando a extensão para expandir o suporte para um número cada vez maior de sites.  
:::

---

## Adicionar senha fazendo login em um site (automaticamente)

## Requisitos

* A opção **Habilitar sugestão automática de salvamento de senhas** ativada na tela **Configurações**. Saiba mais em Configurações.

---

Siga os passos abaixo se você souber suas credenciais de login do site desejado:

1. Acesse o site desejado. Exemplo: `https://github.com/`  
2. Insira seu nome de usuário e senha para fazer login.  
3. Clique em **Sim** no *pop-up* "**Adicionar uma nova senha ao MySafe?**".

:::(info) (Info)  
Ao adicionar sua senha ao **MySafe**, suas credenciais serão preenchidas automaticamente nos logins futuros desse site.   
:::

## Adicionar senha manualmente 

Para adicionar uma senha manualmente usando a extensão **MySafe**, siga os passos abaixo:

1. No menu inferior da extensão **MySafe**, clique em **Adicionar item.**  
2. Na tela **Adicionar senha**, preencha:  
   :::(error) (Alerta)  
   Os campos com asterisco são obrigatórios.  
   :::  
   1. **Nome**\*: nome para identificar a senha.  
   2. **Url**\*: endereço do site onde a senha será usada. Esse campo é automaticamente preenchido com o endereço do site que está sendo acessado no momento da criação da senha. Limpe o campo para inserir outro endereço.  
   3. **Nome de usuário**\*:  nome de usuário associado à senha.  
   4. **Senha**: insira a senha.   
      1. Clique em **Mostrar** para visualizar a senha digitada.   
      2. Clique em **Gerar** para gerar uma senha automática conforme os critérios definidos na opção **Configurar**.  
      3. Clique em **Configurar** para definir os critérios de geração de senha.  
      4. Verifique a força da senha na barra de progresso. Quatro barras verdes indicam que a senha é muito forte e uma barra vermelha indica que a senha é muito fraca e pode ser facilmente descoberta.  
         :::(warning) (Atenção)  
         Gere senhas fortes com, pelo menos, 12 caracteres, letras maiúsculas, minúsculas, dígitos e símbolos.  
         :::  
   5. **Segredo**: se sua conta está protegida com autenticação multifator, insira a chave para gerar o token temporário (TOTP).  
      1. Clique em **Mostrar** para visualizar a chave secreta digitada.   
      2. Clique em **QR code** para escanear a chave secreta gerada a partir de um QR code.  
         :::(error) (Alerta)
         * Insira uma chave secreta com, pelo menos, 10 caracteres, letras maiúsculas de A-Z e números de 2-7.
         * Sincronize o relógio do seu dispositivo com a hora correta. Desvios de horário podem afetar a geração e validação do token TOTP.  
            :::  
  6. **Tags**: palavras-chave para categorizar a senha.  
  7. **Anotação**: informações gerais sobre a senha.  
5. Clique em **Enviar**.

## Visualizar os detalhes da senha

Para visualizar detalhes de uma senha usando a extensão **MySafe**, siga os passos abaixo:

1. No menu inferior da extensão, clique em **MySafe**.  
2. Na listagem de senhas, clique no card da senha desejada para expandi-lo.  
3.  Visualize detalhes como *Nome, Url, Nome de usuário, Tags, TOTP* e os botões de ação para **Copiar nome de usuário, Copiar senha**, **Copiar TOTP, Editar senha** e **Desativar senha.**  
4. Clique no card expandido para retorná-lo ao formato compacto.

## Editar senha

Para editar informações de uma senha usando a extensão **MySafe**, siga os passos abaixo:

1. No menu inferior da extensão, clique em **MySafe**.  
2. Na listagem de senhas, clique no card da senha desejada para expandi-lo.  
3. Clique em **Editar senha.**  
4. Na tela **Editar senha**, faça as alterações necessárias.

:::(info) (Info)  
Por ser uma informação sensível, não é possível visualizar o **Segredo** da senha. Deixe o campo vazio para manter o valor ou insira um novo valor para editá-lo.
:::
6. Clique em **ENVIAR**.

## Copiar nome de usuário, senha e TOTP

Para copiar detalhes de login usando a extensão **MySafe**, siga os passos abaixo:

1. No menu inferior da extensão, clique em **MySafe**.  
2. Na listagem de senhas, clique no card da senha para expandi-lo e clique na opção desejada:  
   1. **Copiar nome de usuário**.  
   2. **Copiar senha**.  
   3. **Copiar TOTP**. Disponível se houver um segredo (*secret key*) associado.

   

:::(warning) (Atenção)  
As informações de login copiadas ficam armazenadas temporariamente na área de transferência do dispositivo, podendo ser acessadas por outros programas.  
:::

## Desativar senha

Para desativar uma senha usando a extensão **MySafe**, siga os passos abaixo:

1. No menu inferior da extensão, clique em **MySafe**.  
2. Na listagem de senhas, clique no card da senha desejada para expandi-lo.  
3. Clique em **Desativar senha.**  
4. Clique em **Sim** na janela pop-up de confirmação.

:::(info) (Info)

Para ativar uma senha, acesse a versão web do **MySafe.** Saiba mais em [Como gerenciar senhas no MySafe web](/v4/docs/pt/how-to-manage-passwords-on-mysafe-web).

:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).
