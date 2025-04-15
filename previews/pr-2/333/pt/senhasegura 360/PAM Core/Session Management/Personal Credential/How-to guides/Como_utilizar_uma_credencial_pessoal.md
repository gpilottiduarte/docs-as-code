# Como utilizar uma credencial pessoal

Neste documento, você encontra um guia passo a passo sobre como utilizar uma credencial pessoal para acessar uma sessão remota.

:::(warning) (**Cuidado**)
Somente quando o parâmetro **Permitir o uso de credenciais pessoais** estiver habilitado será possível que o usuário acesse uma sessão remota com sua credencial pessoal. Para habilitar esse parâmetro acesse a documentação [Como configurar uma sessão remota (proxy)](/v3-33/docs/pt/pam-session-configure-remote-session-proxy).
:::

---
## Requisitos

* Ter o parâmetro **Permitir o uso de credenciais pessoais** habilitado para a sessão.

:::(info) (**Info**)
As credenciais pessoais estão disponíveis apenas para sessões do tipo Terminal Proxy e RDP Proxy.
:::

---
## Acesso com uma credencial pessoal
:::(warning) (**Cuidado**)
Recomendamos que os usuários e dispositivos que utilizam uma credencial pessoal, não tenham a indexação de textos digitados configurada, a fim de não infringir o direito do usuário à privacidade. Contudo, se a senha pessoal do usuário, ou seus dados pessoais, forem exibidos na tela devido à saída do dispositivo alvo, estes textos podem ser indexados se estiverem configurados, e os mesmos estarão presentes no vídeo da sessão.
:::

### Via Terminal Proxy

1. No aplicativo de terminal de sua preferência inicie uma sessão no senhasegura.
2. Digite o protocolo, seu usuário senhasegura e o endereço de IP ou hostname do senhasegura. Por ex.: `ssh usuário_senhasegura@mysenhaseguraserver`
3. Aperte **Enter**.
4. Digite sua senha.
5. Com a sessão do senhasegura iniciada, digite o protocolo, **sua credencial pessoal** e o endereço de IP ou hostname do dispositivo que deseja acessar. Por ex.: `ssh credencial_pessoal@dispositivo_alvo`
6. Aperte **Enter**.
7. Digite sua senha.
8. Aperte **Enter**.

Assim, a sessão do senhasegura via Terminal Proxy estará sendo utilizada com a credencial pessoal.

### Via RDP Proxy

1. No aplicativo RDP inicie uma sessão no senhasegura.
2. Clique em **Conectar**.
3. Na tela inicial digite:
    1. Usuário senhasegura.
    2. Senha da credencial.
    3. Dispositivo a ser acessado.
    4. Credencial pessoal.
    5. Senha da credencial pessoal.
4. Clique em **Acessar**.

Agora a sessão do senhasegura via RDP Proxy estará sendo utilizada pela credencial pessoal.


:::(info) (**Info**)
O uso de credenciais pessoais não impede o uso de Grupos de Acesso com workflow, MFA tokens, acesso de emergência, comando auditado, ou qualquer outro mecanismo disponível para sessões proxy.
:::

---
### Próximos passos:
[Como configurar uma sessão remota (proxy)](/v3-33/docs/pt/pam-session-configure-remote-session-proxy)
[Parâmetros segregados](/v3-33/docs/pt/pam-session-segregated-parameters)

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.