# Como gerar um token de autenticação TOTP

:::(Error) (Alerta)
Para o devido funcionamento da funcionalidade de TOTP, a sua chave secreta deve ser inserida em caixa alta (letras maiúsculas).
:::

TOTP é a sigla em inglês para “Senha de Uso Único Baseada em Tempo” (em inglês, *Time-Based One-Time Password*). Esse tipo de autenticação em dois fatores (2FA) serve para adicionar uma camada de proteção ao seu acesso. Na plataforma senhasegura você pode utilizar esse tipo de autenticação diretamente na credencial.

Este artigo mostrará como configurar esse tipo de acesso.

## Como gerar um token para autenticação

1. Na plataforma senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadros, e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais > Todas**. Uma listagem com todas as credenciais será mostrada.
3. Na coluna **Ação**, clique no ícone representado pelos três pontos verticais e selecione **Detalhes** no menu suspenso.
4. Na janela pop-up que se abre, observe a barra superior no campo **Token OTP**. Este é o seu token de autenticação. Ele é renovado automaticamente a cada 30 segundos. Copie e cole este token na página que você deseja fazer login.

:::(Info) (Info)
É possível adiantar a geração do TOTP através do botão de refresh, representado pelo ícone de duas setas em sentido horário. Assim, você pode adiantar a visualização do próximo token quando o antigo estiver próximo de expirar. Atente-se, porém, que caso o novo token não tenha sido gerado ainda, não ocorrerá a atualização do token no campo **Token OTP**.
:::

## Considerações importantes sobre o acesso automatizado à redes sociais

É importante ressaltar que para realizar o acesso à redes sociais, você enfrentará desafios relacionados à dinâmica dessas plataformas, como:

- **Atualizações frequentes:** redes sociais alteram frequentemente a estrutura e o layout das suas páginas. Essas alterações ocorrem sem aviso prévio e podem impedir o devido funcionamento dos modelos de automação.
- **Verificação dinâmica de segurança:** redes sociais implementam medidas de segurança rigorosas. É comum serem apresentadas verificações, como confirmação de localização, captchas, e outras validações que estão além do controle da plataforma do senhasegura. Ainda, essas verificações podem variar de usuário para usuário e de sessão para sessão. Por conta desse tipo de dinâmica, algumas verificações de segurança, como **Confiar no navegador**, podem ser necessárias a cada novo acesso.

:::(Warning) (Importante)
- Em alguns casos, redes sociais implementam mecanismos de segurança contra ataques e acessos indevidos. Caso a senha de uma rede social não possa ser modificada automaticamente, efetue o acesso, via senhasegura, à rede social para certificar-se de que não é necessária a resolução de um CAPTCHA. Caso seja necessário, faça a resolução do CAPTCHA manualmente para que a troca automática funcione.
- Recomendamos que não se realize mais de duas trocas de senha por dia, uma vez que algumas redes sociais, por questões de segurança, implementam verificações extras nesses cenários.
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).