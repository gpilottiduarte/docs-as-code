# Como criar uma automação do tipo RemoteApp no GO Windows

Neste artigo você aprenderá como criar uma automação do tipo RemoteApp para utilizar no agente do EPM Windows.

:::(Warning) (Cuidado)
As automações do RemoteApp só aparecem para o usuário se o usuário fizer parte do grupo de acesso associado a credencial que permite usar o RemoteApp.
:::

* * *

## Requisito
Veja a tabela de máscaras suportadas em:

* [Máscaras para o RemoteApp no EPM Windows](https://docs.Segura.io/v4/docs/en/go-endpoint-manager-windows-agent-automation#masks-for-remoteapp-on-go-windows)

* * *

## Passo 1: Criar a automação

1. Na plataforma Segura, no canto superior esquerdo, clique no **Grid Menu**, identificado pelos nove quadrados, e selecione **PAM Core.**
2. No menu lateral, selecione **Configurações ➔ Acesso ➔ RemoteApp.**
3. Na coluna **Ação** clique em no ícone **⁝**, identificado pelo três pontos verticais, e selecione a opção **+Novo.**
4. Preencha em **Cadastro de RemoteApp:**
    1. Defina um **Nome** fácil de identificar para a automação.
    2. Escolha em **Tipo** a opção **Simulação de usuário.**
    3. **Adicione as Tags (separadas por vírgula “,”):** defina Tags para ajudar na busca pela automação.
    4. Marque a opção **Ativo** como **Sim.**
    5. Preencha com o **Caminho do aplicativo**, por exemplo: `C:\Program Files (x86)\Microsoft SQL Server\110\Tools\Binn\ManagementStudio\Ssms.exe`, `%windir%\system32\cmd.exe`, etc.
    6. Preencha os **Parâmetros** entre aspas duplas, por exemplo: `-S [hostname] -U [username] -P [password]`
    7. No campo **Script** estão os passos que serão adicionados em Ações.
    8. No campo **Ações** você pode adicionar as seguintes ações: **Wait**, **Key**, **KeyPress**, **KeyRelease**, **Text**, e **Type.**
    9. Em Propriedades preencha com o respectivo nome do campo. Caso necessário, preencha o valor. Você pode salvar ou excluir a ação adicionada.
    10. **Descrição:** adicione uma breve descrição do que esta automação faz e para que ela é usada.
5. Clique no botão **Salvar.**

* * *

## Passo 2: Criar credencial para adicionar o RemoteApp
### Requisito

* [Configurar o dispositivo](/v4/docs/pt/pam-devices-management) onde a automação será executada.

1. Na plataforma Segura, no canto superior esquerdo, clique no **Grid Menu**, identificado pelo nove quadrados, e selecione **PAM Core.**
2. No menu lateral, acesse **Credenciais ➔ Todas.**
3. Clique no menu de ações em **+Novo.**
4. Preencha os campos do formulário **Cadastro da credencial.**
    1. Preencha com **Nome do usuário** que acessa o dispositivo.
    2. Selecione qual **Tipo** de senha entre as opções, **Usuário do domínio**, **Administrador local**, ou **Local User.**
    3. **Domínio:** preencha com o domínio do dispositivo caso tenha um.
    4. **Dispositivo:** selecione o dispositivo onde a automação será executada.
    5. **Informação Adicional:** adicione outras informações importantes. 
    6. **Situação:** defina se está credencial estará ativa.
    7. **Senha:** preencha com a senha com que você acessa o dispositivo.
    8. **Tags:** defina tags para ajudar na busca pela credencial.
    9. Vá até a aba **Configurações da sessão.**
    10. Clique em **Macro de automação (RemoteApp)+.**
    11. Adicione a automação que você criou.
5. Clique no botão **Salvar.**

:::(Info) (Info)
A interação do usuário é bloqueada até terminar de ser executada a automação.
:::

## Executar automação

1. Acesse a área de trabalho da workstation.
2. Inicie o aplicativo **GO Automation.**
3. Selecione a automação que deseja executar.
4. Clique com o botão direito na automação e depois em **Executar.**
5. Selecione a credencial que será utilizada pelo script da automação.
6. Espere a automação ser executada.

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura.](https://community.Segura.io/)