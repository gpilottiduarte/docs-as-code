# Credenciais associadas a serviços

### Como configurar e verificar credenciais associadas a serviços Windows
O senhasegura oferece uma funcionalidade para identificar as credenciais utilizadas por serviços Windows em execução. Este artigo fornecerá instruções sobre como configurar e utilizar essa funcionalidade.

### Requisitos
Para garantir o correto funcionamento da funcionalidade de pesquisa de credenciais associadas a serviços Windows, é necessário atender aos seguintes requisitos:

* A busca por contas locais associadas a serviços do Windows ocorre somente quando o discovery de dispositivo está configurado para buscar credenciais. 

* Pelo menos uma credencial local deve ser identificada durante a varredura para ativar a busca de serviços.

* A máquina alvo deve possuir uma conexão ativa via **WinRM** para trazer as contas locais associadas aos serviços.

* A máquina alvo precisa ter o **Powershell** instalado e a credencial usada na busca precisa ter autorização para acessar os registros do **Win32_Service** e realizar consultas.
:::(Warning) (Atenção)

* A funcionalidade está configurada para encontrar exclusivamente contas locais associadas ao serviço Windows, não sendo capaz de localizar contas de domínio.

* Para configurar a pesquisa de credenciais utilizadas por serviço, é necessário utilizar a opção de pesquisa por Dispositivo.

:::

### Como configurar a pesquisa de credenciais 
Para configurar a pesquisa de credenciais associadas a serviços Windows, siga os passos abaixo:

1. No canto superior esquerdo, clique no **Grid Menu**, identificado pelo ícone de nove quadrados e, em seguida, selecione **Discovery**.

1. No menu lateral, vá para **Configurações > Discovery**.

1. Clique no ícone **Exibir Ações**, representado pelos três pontos verticais, e clique em **+ Novo**. Uma janela pop-up será exibida.

1. Escolha o tipo do seu discovery como **Dispositivo**.

1. Em Cadastro de discovery de dispositivo preencha os campos obrigatórios, marcados por um asterisco.

1. Na guia **Buscas**, seção **Configuração de objetos de busca**, selecione a opção **Identificar contas do Windows associadas a um serviço**.
:::(Info) (Info)
Se você ainda não configurou um plug-in do Windows, vá até a aba **Plugins**, na mesma janela pop-up e adicione uma porta e um plug-in do Windows para serem utilizados nesta busca.
:::

7. Na guia **Execução**, seção **Execução do Scan de credenciais** preencha os campos obrigatórios marcados por um asterisco.

1. Na guia **Importação**, seção **Importação de dispositivos** preencha o campo obrigatório marcado por um asterisco.

1. Clique em **Salvar** para finalizar a configuração.

### Como pesquisar e visualizar credenciais
Após a conclusão da verificação, é possível visualizar as credenciais associadas a serviços no relatório.

1. No canto superior esquerdo, clique no **Grid Menu**, identificado pelo ícone de nove quadrados e, em seguida, selecione **Discovery**.

1. No menu lateral, vá para **Discovery > Serviços**.

1. Em **Serviços do dispositivo**, preencha os campos de busca com as informações requeridas para localizar a credencial desejada.
:::(Warning) (Atenção)
Lembre-se de que as credenciais estão associadas a serviços do Windows. Se a verificação se concentrar em outros dispositivos do sistema, a pesquisa não terá resultados.
:::