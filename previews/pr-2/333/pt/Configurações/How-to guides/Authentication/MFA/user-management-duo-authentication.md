Esse tutorial apresenta um guia sobre como integrar o senhasegura e o Duo. Você pode usar autenticação multifator Duo para fazer login ou iniciar sessões na plataforma senhasegura.

## Passo 1: Criar uma aplicação no Duo

### Requisitos

* [Conta Duo Security](https://duo.com/)

Para criar uma aplicação, siga estas etapas:

1. Faça login no Duo Admin Panel.
2. No menu lateral esquerdo, selecione **Applications**.
3. Clique em **Protect an Application**.
4. Na barra de pesquisa, digite **Web SDK**.
5. À direita, clique em **Protect**  para configurar o aplicativo.
6. Copie o **Client ID**, o **Client Secret**, e a **API****hostname**. Você precisará dessas informações para concluir a configuração.
7. No menu lateral esquerdo, selecione **Settings**.
8. Digite o **Name** do aplicativo.
9. Clique em **Save.**



---

## Passo 2: Habilitar solução externa de MFA

Para habilitar o MFA, siga estas etapas:

1. No canto superior esquerdo da plataforma senhasegura, clique no **G****rid Menu ⁝⁝⁝**, indicado pela caixa de nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Parâmetros do sistema ➔ Segurança.**
3. Na seção **Autenticação de multifator**, marque a opção **Habilitar o uso de uma solução externa de autenticação de multi\-fator**.CuidadoAo habilitar essa função, alguns mecanismos de segurança serão desabilitados. Isso mudará a propriedade **SameSite** de 'Strict' para 'Lax'. Certifique\-se de ter um firewall configurado para negar o acesso de sites não autorizados ao seu servidor senhasegura.
4. Feche a mensagem de aviso.
5. Clique em **Salvar.**



---

## Passo 3: Configurar o Duo MFA no senhasegura

### Requisitos

* [Dados de autenticação da API Duo](/v3-33/docs/pt/user-management-duo-authentication#passo-1-criar-uma-aplica%C3%A7%C3%A3o-no-duo)

Para configurar o Duo no senhasegura, siga estas etapas:

1. No canto superior esquerdo da plataforma senhasegura, clique no **Grid Menu ⁝⁝⁝**, indicado pela caixa de nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Autenticação ➔ Autenticação de multifator ➔ Provedores.**
3. No canto superior direito, clique em **Exibir ações**, ícone identificado por três pontos verticais (⁝).
4. Selecione **Novo.**
5. Selecione **Duo Security**.
6. Em **Nome**, defina o nome do provedor.
7. Em **Ativo**, mantenha como **Sim**.
8. Em**Endpoint**, preenchacom o valor do nome do host da API Duo.
9. Em **ID do cliente**, preencha com o valor do ID do cliente Duo.
10. Em **Segredo do cliente**, preencha com o valor do segredo do cliente Duo.
11. Clique em **Salvar**.



---

## Passo 4: Configurar o Duo como o MFA do usuário

### Requisitos

* Conexão de rede direta entre o senhasegura e o Duo Security. Proxies não são suportados.
* [Aplicativo móvel Duo](https://duo.com/product/multi-factor-authentication-mfa/duo-mobile-app#download)
* [Configurar o DNS](/v3-33/docs/pt/orbit-cli-how-to-configure-dns)  
CuidadoO senhasegura precisa estar com DNS configurado e um certificado válido para estabelecer a conectividade com o endpoint da DUO. Na configuração do **Orbit**, o campo **URL Application** também deve estar com o DNS da instância.

Para configurar o Duo como MFA, siga estas etapas:

1. Faça login na sua aplicação Duo.
2. Selecione o método de autenticação **Duo Mobile**.
3. Selecione seu país na lista suspensa.
4. Digite seu número de celular.
5. Clique em **Add phone number**.
6. Clique em **Yes, it's correct**, para confirmar seu número de telefone.
7. Clique em **Next**.
8. Abra o aplicativo Duo Mobile em seu telefone.
9. Adicione a conta digitalizando o código QR mostrado na tela.
10. Quando você receber a confirmação de que o Duo Mobile foi adicionado, clique em **Continue**.
11. Para finalizar, clique em **Log in with Duo.**

Ao acessar o senhasegura, você receberá uma notificação *push* no seu Duo Mobile para concluir a autenticação.



---

Você ainda tem dúvidas? Entre em contato com a [**Comunidade senhasegura**](https://community.senhasegura.io/).

