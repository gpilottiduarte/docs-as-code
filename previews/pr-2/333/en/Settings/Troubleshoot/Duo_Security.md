## Duo Security

### The Client Secret is invalid

**Error:** Duo config error. Ask an admin to verify the Duo configuration. The following error is: The Client Secret is invalid

**Solution:** Verify if the Duo Client ID and Client Secret values are correct.

### Two\-factor token configuration white screen

**Error:** After Duo authentication, you are redirected to a page with the title 'Two\-factor token configuration' without any content

**Solution:** Ensure you have enabled the [Authentication with Duo](/v3-33/docs/user-management-duo-authentication)

### Duo: Invalid redirect URI

**Error:** "error": "invalid\_grant", "error\_description": "Invalid redirect URI 'https://10\.66\.32\.33/flow/auth/twofactor/token/openid/callback'."

**Solution:** Allow network connection between Duo and the senhasegura server

### The provided authorization grant or refresh token is invalid

**Error:** Duo config error. Ask an admin to verify Duo configuration. The following error is: \*\*\* invalid\_grant: The provided authorization grant (e.g., authorization code) or refresh token is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client.

**Solution:** Start the process again. The refresh token has expired.

