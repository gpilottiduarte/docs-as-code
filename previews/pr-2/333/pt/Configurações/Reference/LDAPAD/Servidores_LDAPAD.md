# Servidores LDAP/AD

Neste documento, você encontrará um guia de referência para os servidores LDAP/AD no senhasegura.

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu,** representado pelos nove quadrados, e selecione **Configurações**   
2. No menu lateral, selecione **Autenticação \> Active Directory \> Servidores.**

## Barra superior

| Item  | Descrição |
| :---- | :---- |
| **Mostrar os filtros** | Representado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário. Atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Novo** | Abre a janela **Servidor LDAP** para cadastrar um novo servidor. |
| **Imprimir relatório** | Representado pelo ícone de impressora. Abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone de folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio. Abre a janela para efetuar o agendamento do relatório. |

## Campos de busca

Ao clicar em **Mostrar filtros**, uma série de campos é mostrada. Eles são utilizados para refinar os resultados da sua busca. São eles:

| Item | Descrição |
| :---- | :---- |
| **Host** | Filtra pelo host do servidor LDAP/AD. |
| **Ativo** | Filtra pelo estado do servidor LDAP/AD. Pode ser **Sim** ou **Não**. |

Além dessas opções, você tem dois botões: **Filtrar**, que aplica os parâmetros que foram passados nos campos e **Limpar**, que limpa todos os parâmetros.

## Campos do relatório

Na listagem de servidores, você tem os seguintes campos:

* **Código**: exibe o código de cadastro do servidor dentro do senhasegura.  
* **Host**: exibe o endereço ou nome do host do servidor.  
* **Porta**: exibe a porta onde o servidor LDAP/AD está escutando.  
* **Nome do usuário**: exibe o nome de usuário para conexão com o servidor.  
* **Base DN**: exibe os parâmetros de Base DN do servidor.  
* **Formulário canônico da conta**:exibe os valores do **Formulário da conta**. Os valores serão so seguinte:  
  * 1 \- DN.
  * 2 \- Nome do usuário.
  * 3 \- Backslash.
  * 4 \- Principal.
* **Formato do filtro da conta (Account filter format):** exibe a expressão de filtro usada para especificar critérios de busca para localizar contas de usuário ou outros objetos no diretório. Por exemplo: `(&(objectClass=user)(sAMAccountName=johndoe))`.  
* **Usar SSL:** exibe se o servidor utiliza SSL.  
* **Bind requer DN**: exibe se o servidor exige DN para o processo de Bind.  
* **Nome de domínio da conta**: exibe o nome do domínio no qual o servidor está registrado.  
* **Nome de domínio da conta curta:** também conhecido como *NetBIOS Domain Name*, é a versão abreviada do nome do domínio em um ambiente de rede que utiliza serviços de diretório. Esse campo exibe o nome curto utilizado para realizar login na rede Windows. Por exemplo: `SENHASEGURA.`  
* **Ordem:** Ordem dos servidores que serão utilizados na autenticação  
* **Ativo:** exibe se o servidor está ativo ou não.  
* Na coluna **Ação**, você tem duas opções:  
  * **Alterar:** abre a janela **Servidor LDAP** em modo de edição**.**  
  * **Testar a autenticação:** abre a janela **Teste de conexão LDAP.**

## Janela Servidor LDAP

Ao clicar em **Novo** ou em Alterar, a janela **Servidor LDAP** será aberta. Essa janela contém os seguintes campos:

| Item | Descrição |
| :---- | :---- |
| **Host** | IP ou Host do servidor LDAP. |
| **Porta** | Porta onde o servidor LDAP irá escutar. |
| **Ativo** | *Radio button* para indicar o estado do servidor no senhasegura. Pode ser **Sim** ou Não. |
| **Credencial para autenticação** | Menu suspenso para escolha da credencial que será usada para autenticação no servidor LDAP/AD. |
| **Network connector** | Menu suspenso para escolha do conector que será usado com o servidor LDAP/AD. |
| **DN Base** | Base DN do servidor. |
| **Formulário da conta** | Formulário da conta. |
| **Formato de filtro da conta (Account filter format)** | Formato do filtro da conta. |
| **Domínio da conta** | Nome do domínio ao qual a conta pertence. |
| **Domínio da conta (Short name)** | Nome curto para o domínio ao qual a conta pertence. |
| **Use credential domain?** | *Radio button* para indicar se o servidor deverá usar uma credencial de domínio. |
| **Atributo de username** | Indica qual o nome de usuário único da conta |
| **DN bind (deixe em branco para utilizar o DN Base)** | Indica se o DN será utilizado como identificador único. |
| **Member is DN?** | *Radio button* para indicar se o membro será identificado pelo DN. |
| **Bind requer DN?** | *Radio button* para indicar se o processo de Bind vai requerer o uso do DN. |
| **Grupo** | Nome do grupo. |
| **DN do grupo** | Indica o DN do grupo em questão. |
| **Atributo do grupo (GroupAttr)** | Indica os atributos deste grupo em questão. |
| **Escopo do grupo** | Indica o escopo deste grupo em questão. |
| **Filtro do grupo** | Indica uma expressão de filtro para ser usada no grupo em questão |
| **Atributo de member (MemberAttr)** | Indica quais atributos de membros são necessários para o grupo em questão. |
| **Ordem** |  |
| **Usar SSL?** | *Radio button* para indicar o uso de SSL. Por padrão, vem como **Não**. |

## Janela Teste de autenticação LDAP

Ao clicar, na coluna Ação, nos três pontos verticais e selecionar a opção Testar a autenticação, a janela **Teste de autenticação LDAP** será aberta com os seguintes campos:

| Item | Descrição |
| :---- | :---- |
| **Servidor** `example.com:389` | Label indicando o nome e a porta do servidor LDAP que está sendo testada a autenticação. |
| **Base DN** | Campo contendo a Base DN cadastrada no servidor |
| **Usuário** | Campo para inserir o usuário que será usado no teste de autenticação. |
| **Senha** | Campo para inserir a senha do usuário que será usado no teste de autenticação. |