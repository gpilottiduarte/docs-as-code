# Como configurar a autenticação via Kerberos para sessões RDP no Windows Server

Neste documento, você encontra um guia passo a passo sobre como realizar a configuração para que as sessões RDP Proxy e RDP via Web Proxy sejam autenticadas pelo protocolo Kerberos.

:::(error) (**Importante**)
Os passos deste tutorial devem ser realizados em uma máquina **Windows Server**.
:::

## Requisitos

* Ser um usuário com permissão de administrador.
* Possuir um domínio configurado para que essas configurações sejam aplicadas.

---
Para utilizar o protocolo Kerberos para autenticação das sessões, é preciso, primeiro, realizar os passos a seguir.

## Passo 1: Editar a política de grupo local

1. Na máquina de origem, na **barra de pesquisa do Windows**, digite **Editar política de grupo**.
2. Clique no resultado para que a janela se abra.
3. Com o editor aberto, no menu lateral esquerdo, clique na seta de expansão da opção **Configuração do computador**.
4. Clique na seta de expansão da opção **Configurações do Windows**.
5. Clique na seta de expansão da opção **Configurações de segurança**.
6. Clique na seta de expansão da opção **Políticas locais**.
7. Clique na pasta **Opções de segurança** para exibir uma tela à direita. Prossiga com as configurações da seguinte maneira:
    1. Em **Segurança de Rede: permitir que o LocalSystem use a identidade do computador para NTLM**:  o valor deve estar como **Não definido**.
    2. Em **Segurança de rede: nível de autenticação LAN Manager**: dê um duplo clique. Na janela que se abre, escolha a opção **Enviar somente resposta NTLMv2. Recusar LM e NTLM** e clique em **OK**.
    3. Em **Segurança de rede: requisitos de assinatura de cliente LDAP**: dê um duplo clique. Na janela que se abre, escolha a opção **Negociar assinatura** e clique em **OK**.
    4. Em **Segurança de rede: Restringir NTLM: Adicionar exceções de servidor remoto para autenticação NTLM**: o valor deve estar como **Não definido**.
    5. Em **Segurança de rede: Restringir NTLM: Adicionar exceções de servidor neste domínio**: o valor deve estar como **Não definido**.
    6. Em **Segurança de rede: Restringir NTLM: fazer auditoria do tráfego NTLM de entrada**: dê um duplo clique. Na janela que se abre, escolha a opção **Habilitar a auditoria para contas do domínio** e clique em **OK**.
    7. Em **Segurança de rede: Restringir NTLM: fazer auditoria de autenticação NTLM neste domínio**: dê um duplo clique. Na janela que se abre, escolha a opção **Habilitar todas as contas de domínio para servidores do domínio** e clique em **OK**.
    8. Em **Segurança de rede: Restringir NTLM: Tráfego NTLM de entrada**: dê um duplo clique. Na janela que se abre, escolha a opção **Negar todas as contas** e clique em **OK**.
    9. Em **Segurança de rede: Restringir NTLM: Autenticação NTLM neste domínio**: dê um duplo clique. Na janela que se abre, escolha a opção **Negar todos** e clique em **OK**.
    10. Em **Segurança de rede: Restringir NTLM: Tráfego NTLM de saída pra servidores remotos**: dê um duplo clique. Na janela que se abre, escolha a opção **Negar todos** e clique em **OK**.
8. Feche a janela.

## Passo 2: Server Manager

1. No **Windows Server**, procure o aplicativo **Server Manager**.
2. No canto superior direito, clique em **Tools**.
    1. No menu suspenso, clique em **Active Directory Users and Computers**.
3. Na janela que se abre no menu esquerdo, procure a opção onde os usuários estão cadastrados. Clique na seta para expandir as opções.
    1. Clique na opção **Users**.
4. Na lista de usuários apresentada, clique com o botão direito no usuário que será configurado.
    1. No menu suspenso, clique em **Properties**.
5. Na janela que se abre, clique na aba **Account**.
    1. Na seção **Account options**, selecione as seguintes opções:
        i. **This account supports Kerberos AES 128 bit encryption**.
        ii. **This account supports Kerberos AES 256 bit encryption**.
    2. Clique em **Apply**.
6. Clique na aba **Member Of**.
    1. Clique em **Add**.
    2. Na janela **Select Groups**, clique em **Advanced**.
    3. A janela será expandida, no campo **Name**, digite **Protected Users** e clique em **Find Now**.
    4. Na lista **Search results**, selecione o resultado com o nome de **Protected Users** e clique em **OK**.
    5. O nome selecionado deverá aparecer no campo **Enter the object names to select**.
    6. Clique em **OK**.
7. Retornando à tela de propriedades na aba **Member Of**, clique em **Apply** e em seguida, em **OK**.

## Passo 3: Painel de controle

1. Na **barra de pesquisa** do Windows, digite **Painel de controle**.
2. Clique no resultado para abrir a janela.
3. Na janela clique em **Sistema e Segurança**.
4. Nas opções disponíveis em **Sistema**, clique em **Permitir acesso remoto**.
5. Na janela **Propriedades do Sistema**, clique na aba **Remoto**.
    1. Na seção **Área de Trabalho Remota**, desabilite a opção **Permitir conexões somente de computadores que estejam executando a Área de Trabalho Remota com Autenticação no Nível da Rede (recomendável)**.
    2. Clique em **Aplicar**.
    3. Clique em **OK**.
6. Feche as janelas.

Após essa configuração, é obrigatório configurar as sessões remotas no senhasegura para usar a autenticação Kerberos. Acesse o documento sobre [Como configurar a autenticação via Kerberos para sessões RDP no senhasegura](/v3-33/docs/pt/pam-session-how-to-configure-kerberos-authentication-for-rdp-sessions-on-windows-server).

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.