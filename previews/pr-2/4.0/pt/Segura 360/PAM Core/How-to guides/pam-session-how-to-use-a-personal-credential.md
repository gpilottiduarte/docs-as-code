# Como utilizar uma credencial pessoal

Este documento fornece informações sobre o passo a passo para utilizar uma credencial pessoal para acessar uma sessão remota.

:::(warning) (**Cuidado**)
Somente quando o parâmetro **Permitir o uso de credenciais pessoais** estiver habilitado será possível que o usuário acesse uma sessão remota com sua credencial pessoal. Para habilitar esse parâmetro acesse a documentação [Como configurar uma sessão remota (proxy)](/v4/docs/pt/pam-session-configure-remote-session-proxy).
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

1. No aplicativo de terminal da sua preferência inicie uma sessão no Segura.
2. Digite o protocolo, seu usuário Segura e o endereço de IP ou hostname do Segura. Por ex.: `ssh usuário_senhasegura@mysenhaseguraserver`
3. Aperte **Enter**.
4. Digite sua senha.
5. Com a sessão do Segura iniciada, digite o protocolo, **sua credencial pessoal** e o endereço de IP ou hostname do dispositivo que deseja acessar. Por ex.: `ssh credencial_pessoal@dispositivo_alvo`
6. Aperte **Enter**.
7. Digite sua senha.
8. Aperte **Enter**.

Assim, a sessão do Segura via Terminal Proxy estará sendo utilizada com a credencial pessoal.

### Via RDP Proxy

1. No aplicativo RDP inicie uma sessão no Segura.
2. Clique em **Conectar**.
3. Na tela inicial digite:
    1. Usuário Segura.
    2. Senha da credencial.
    3. Dispositivo a ser acessado.
    4. Credencial pessoal.
    5. Senha da credencial pessoal.
4. Clique em **Acessar**.

Agora a sessão do Segura via RDP Proxy estará sendo utilizada pela credencial pessoal.


:::(info) (**Info**)
O uso de credenciais pessoais não impede o uso de Grupos de Acesso com workflow, MFA tokens, acesso de emergência, comando auditado, ou qualquer outro mecanismo disponível para sessões proxy.
:::

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.