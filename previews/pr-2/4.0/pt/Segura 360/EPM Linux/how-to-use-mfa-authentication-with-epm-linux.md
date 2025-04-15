# Como utilizar a autenticação MFA com o EPM Linux

**EPM Linux** suporta autenticação multifator (MFA) para usuários de domínio e locais. Este guia explica como configurar e usar o MFA no **EPM Linux** para usuários locais e de domínio.

## Requisitos

1. Integração com o Active Directory (AD) ou outro serviço de autenticação centralizada, para suportar a autenticação de usuários de domínio.  
2. Configuração de no Segura para integração da verificação MFA.  
3. Disponibilidade de um servidor MFA, como o Google Authenticator, Microsoft Authenticator ou uma solução TOTP compatível.

## Habilitar o MFA para usuários locais.

1. No Segura, no canto superior direito, passe o mouse sobre o **Menu de Produtos** e selecione **EPM**.  
2. No menu lateral, selecione **Gerenciamento \> Configurações \> Parâmetros**.  
3. Na seção **Autenticação**, na opção **Ativar autenticação de multifator no login**, selecione **Sim**.  
4. Clique em **Salvar**.

Após habilitar o MFA para o **EPM**, sempre que um usuário realizar um login no **EPM Linux**, será pedido o token MFA após a senha do usuário.