# Servidores

Este documento fornece informações sobre a tela do relatório **Servidores LDAP/AD** que exibe informações sobre os servidores de provisionamento LDAP/AD.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Provisionamento \> Active directory \> Servidores.**

## Menu de ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Novo** | Botão | Direciona para a tela **Servidor LDAP** para cadastro de um novo servidor LDAP no Segura. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Host** | Campo de texto | Filtra pelo endereço do host (pode ser endereço de IP ou hostname) no Segura. |
| **Ativo** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Sim** e **Não**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório
* **Código**: exibe o código de cadastro do servidor dentro do Segura.  
* **Host**: exibe o endereço ou nome do host do servidor.  
* **Porta**: exibe a porta onde o servidor LDAP/AD está escutando.  
* **Nome do usuário**: exibe o nome de usuário para conexão com o servidor.  
* **Base DN**: exibe os parâmetros de Base DN do servidor.  
* **Formulário canônico da conta**: exibe os valores do Formulário da conta. Os valores serão so seguinte:  
  * 1 \- DN.  
  * 2 \- Nome do usuário.  
  * 3 \- Backslash.  
  * 4 \- Principal.  
* **Formato do filtro da conta (Account filter format)**: exibe a expressão de filtro usada para especificar critérios de busca para localizar contas de usuário ou outros objetos no diretório. Por exemplo: `(&(objectClass=user)(sAMAccountName=johndoe))`.  
* **Usar SSL**: exibe se o servidor utiliza SSL.  
* **Bind requer DN**: exibe se o servidor exige DN para o processo de Bind.  
* **Nome de domínio da conta**: exibe o nome do domínio no qual o servidor está registrado.  
* **Nome de domínio de conta curta**: também conhecido como *NetBIOS Domain Name*, é a versão abreviada do nome do domínio em um ambiente de rede que utiliza serviços de diretório. Esse campo exibe o nome curto utilizado para realizar login na rede Windows. Por exemplo: `Segura`.  
* **Ordem**: Ordem dos servidores que serão utilizados na autenticação  
* **Ativo**: exibe se o servidor está ativo ou não.  
* **Ações**:  
  * **Alterar**: abre a janela **Servidor LDAP** em modo de edição.  
  * **Testar a autenticação**: abre a janela **Teste de conexão LDAP**.
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Tela Servidor LDAP

### Seção domínio, dispositivo e credencial
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Domínio** | Menu suspenso | Sim | Domínio cadastrado no Segura. |
| **Credencial para autenticação** | Menu suspenso | Sim | Credencial que será usada para autenticação no servidor LDAP. |
| **Adicionar** | Botão | Não | Abre o modal **Domínio** para inserção do domínio e do *short name*. |

### Seção LDAP
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Host** | Campo de texto | Sim | IP ou Host do servidor LDAP. |
| **Porta** | Campo de texto | Sim | Porta onde o servidor LDAP irá escutar. |
| **DN Base** | Campo de texto | Sim | Base DN do servidor. |
| **Formulário de conta** | Menu suspenso | Sim | Formulário da conta. |
| **Ordem** | Seletor | Sim |  |
| **Ativo** | Botão *toggle* | Sim | Indica a situação do servidor no Segura. Pode ser **Sim** ou **Não**. |
| **Member is DN?** | Botão *toggle* | Sim | Indica se o membro será identificado pelo DN. |
| **Bind requer DN?** | Botão *toggle* | Sim | Indica se o processo de Bind vai requerer o uso do DN. |
| **Usar SSL?** | Botão *toggle* | Sim | Indica o uso de SSL. Por padrão, vem como Não. |
| **Network connector** | Menu suspenso | Não | Indica o conector que será usado com o servidor LDAP/AD. |
| **Formato do filtro de conta (Account filter format)** | Campo de texto | Não | Formato do filtro da conta. |
| **Use credential Domain?** | Botão *toggle* | Sim | Indica se o servidor deverá usar uma credencial de domínio. |
| **Atributo de username** | Campo de texto | Não | Indica qual o nome de usuário único da conta |
| **DN Bind (deixe em branco para utilizar o DN Base)** | Campo de texto | Não | Indica se o DN será utilizado como identificador único. |
| **Grupo** | Campo de texto | Não | Nome do grupo. |
| **DN do grupo** | Campo de texto | Não | Indica o DN do grupo em questão. |
| **Atributo de grupo (GroupAttr)** | Campo de texto | Não | Indica os atributos deste grupo em questão. |
| **Escopo do grupo** | Campo de texto | Não | Indica o escopo deste grupo em questão. |
| **Filtro de grupo** | Campo de texto | Não | Indica uma expressão de filtro para ser usada no grupo em questão. |
| **Atributo de member (MemberAttr)** | Campo de texto | Não | Indica quais atributos de membros são necessários para o grupo em questão. |

### Seção Sync Groups
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Sync groups** | Menu suspenso | Não | Seleciona o grupo de usuários que será sincronizado. |
| **Novo** | Botão | Não | Abre o modal Grupo LDAP/AD. |
| **Adicionar** | Botão | Não | Adiciona o grupo à listagem de grupos de sincronização. |
| **Buscar** | Campo de busca | Não | Busca por um grupo de usuários LDAP/AD dentro da listagem de grupos de sincronização. |
| **Caixa de seleção** | Caixa de seleção | Não | Seleciona os registros que estão sendo exibidos em tela. |
| **NOME** | Campo de texto | Não | Nome do grupo. |
| **AD QUERY GROUP** | Campo de texto | Não |  |
| **USER GROUP** | Campo de texto | Não |  |
| **DOMUM SYNC** | Campo de texto | Não |  |
| **PAPÉIS** | Campo de texto | Não |  |

## Modal Grupo LDAP/AD

### Seção Configurações
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome** | Campo de texto | Sim | Nome do grupo. |
| **Servidor** | Menu suspenso | Não | Escolha do servidor em que a busca será realizada. |
| **Grupos de usuários** | Menu suspenso | Não | Escolha do grupo de usuários que o grupo atual irá pertencer. **Nota**: este campo é responsável pela definição dos grupos definidos para os usuários sincronizados. |
| **Ativo** | Botão *toggle* | Não | Ativa ou desativa o status do grupo. |
| **Sincronização** | Botão *toggle* | Não | Indica a possibilidade do grupo ter sincronização automática. |
| **DN** | Campo de texto | Não | Preencha com a **DN base**. |
| **Atributo usuário do AD** | Campo de texto | Não | Atributos associados ao nome de usuário. |
| **Atributo nome do usuário do AD** | Menu suspenso | Não | Vinculação do nome real do usuário ao respectivo campo no Active Directory. |
| **Departamento** | Menu suspenso | Não | Escolha do departamento do usuário. |
| **Busca do AD** | Campo de texto | Não | Preencha com os parâmetros de busca do grupo. |

### Seção Papéis
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Adicionar** | Botão | Não | Abre o modal **Papéis**. |
| **Papel** | Campo de texto | Não | Nome do papel escolhido. |
| **Built-in** | Campo de texto | Não | Indica se o papel é um dos padrões fornecidos pelo Segura ou se é um papel personalizado, criado por um usuário. |
| **Descrição** | Campo de texto | Não | Descrição do papel escolhido. |

### Seção Domum
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Habilitar sincronização** | Botão *toggle* | Não | Escolha se deseja habilitar a sincronização com o Segura Domum. |
| **Tipo** | Botão *toggle* | Não | Escolha qual o tipo de usuário do Segura Domum será permitido no grupo. |
| **Fornecedores/Grupo Interno** | Menu suspenso | Não | Escolha o grupo no Segura Domum ao qual o grupo LDAP/AD irá pertencer. |

### Seção Revisão
A sessão de revisão permite verificar as informações do novo grupo antes de prosseguir. Para salvar, clique em **Salvar**.

### Tela Teste de autenticação LDAP
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Servidor** | *Label* | Não | Indica o nome e a porta do servidor LDAP que está sendo testada a autenticação. |
| **Base DN** | Campo de texto | Sim | Base DN cadastrada no servidor. |
| **Usuário** | Campo de texto | Sim | Nome de usuário que será usado no texto de autenticação. |
| **Senha** | Campo de texto | Sim | Senha do usuário que será usado no teste de autenticação. |

