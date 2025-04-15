## Segurança Duo

### O segredo do cliente é inválido

**Erro:** Erro de configuração do Duo. Solicite ao administrador para verificar a configuração. The following error is: The Client Secret is invalid

**Solução:** Verificar se os valores segredo e ID do Duo estão corretos

### Tela branca de configuração de token de dois fatores

**Erro:** Após a autenticação do Duo, você é redirecionado a uma página com o título 'Configuração de token de dois fatores' sem nenhum conteúdo

**Solução:** Confirmar que seu [Authentication with Duo](/v3-33/docs/user-management-duo-authentication) está ativado

### Duo: URI de redirecionamento inválido

**Erro:** “error”: “invalid\_grant”, “error\_description”: “Invalid redirect URI 'https://10\.66\.32\.33/flow/auth/twofactor/token/openid/callback'.”

**Solução:** Permitir conexão de rede entre o Duo e o servidor senhasegura

### A concessão de autorização fornecida ou o token de atualização é inválido

**Error:** Erro de configuração do Duo. Solicite ao administrador para verificar a configuração. The following error is: \*\*\* invalid\_grant: The provided authorization grant (e.g., authorization code) or refresh token is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client.

**Solução:** Reiniciar o processo, seu token de atualização expirou.  
  


Para saber mais sobre este assunto veja os tópicos criados sobre [Multi\-factor authentication (MFA)](https://community.senhasegura.io/search?q=mfa).

Caso tenha alguma dúvida deixe sua pergunta no [senhasegura Community](https://community.senhasegura.io/).

