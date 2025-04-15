# Sessão com falha devido a erro de certificado do site

Neste documento, você encontra um guia passo a passo sobre como verificar o possível problema em uma sessão com falha de certificado.

## Cenário
Uma mensagem de erro aparecerá ao iniciar uma sessão HTTPS em um site.

---
## Causa
O site está com certificado inválido.

---
## Solução
Para prosseguir com a autenticação, você precisará criar uma macro e associá-la a todas as credenciais relacionadas ao dispositivo configurado para a respectiva aplicação web.

## Passo 1 - Criar a macro

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Configurações** > **Acesso** > **RemoteApp**.
3. No canto superior direito, clique no ícone dos três pontos verticais e clique em **+ Novo**.
4. Na janela **Cadastro de remoteApp**, preencha os campos obrigatórios.
5. No campo **Tipo***, escolha a opção **Simulação de usuário**.
6. No campo **Macro***, configure a ação do script conforme orientado abaixo:
    1. wait: 15000
    2. kpress: tab
    3. wait: 500
    4. kpress: return
    5. wait: 500
    6. kpress: tab
    7. wait: 500
    8. kpress: tab
    9. wait: 500
    10. kpress: tab
    11. wait: 500
    12. kpress: tab
    13. wait: 500
    14. kpress: return
    15. wait: 1000
7. Clique em **Salvar**.

## Passo 2 - Associar a macro criada a uma credencial

1. No menu lateral, selecione **Credenciais** > **Todas**.
2. Na lista de credenciais disponíveis, na coluna **Ação**, clique no ícone dos três pontos verticais e nas opções, clique em **Editar**.
3. Na janela **Cadastro da credencial**, clique na aba **Configurações da sessão**.
    1. Na seção **Configuração de aplicativo remoto**, clique no ícone de **adicionar** do campo **Macro de automação (RemoteApp)**.
    2. No menu suspenso **RemoteApp**, escolha a macro criada no passo anterior.
    3. No menu suspenso **Conectividade**, escolha **HTTPS**.
4. Clique em **Salvar**.

Ao retornar a tela de credenciais, clique no ícone do computador no lado direito da credencial escolhida para testar se a macro foi associada corretamente.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).