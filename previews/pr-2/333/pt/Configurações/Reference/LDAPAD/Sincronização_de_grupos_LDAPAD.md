# Sincronização de grupos LDAP/AD

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Active Directory \> Sincronização de grupos.**

## Barra superior

| Item  | Descrição |
| :---- | :---- |
| **Mostrar os filtros** | Representado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário. Atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Novo grupo** | Abre a janela **Grupo LDAP/AD** para cadastro de um novo grupo. |
| **Imprimir relatório** | Representado pelo ícone de impressora. Abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone de folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio. Abre a janela para efetuar o agendamento do relatório. |

## Campos de busca

| Item | Descrição |
| :---- | :---- |
| **Nome** | Nome do grupo LDAP/AD. |
| **Servidor** | Servidor LDAP/AD. |
| **DN** | Nesse contexto, DN refere-se a Distinguished Name (Nome Distinto). Um DN é uma string que identifica de forma única um objeto no diretório do Active Directory, especificando o caminho completo do objeto, incluindo o nome do objeto e a localização na estrutura hierárquica do diretório. Informe a string necessária para identificação do grupo que você está buscando. |
| **Sincronização ativa** | Menu suspenso que filtra de acordo com o status da sincronização. Escolha **Todos** para não aplicar filtro algum; **Sim** para filtrar os registros com a sincronização ativa e **Não** para filtrar os registros que não tenham a sincronização ativa. |
| **Ativo** | Menu suspenso que filtra de acordo com o status do grupo no senhasegura. Pode ser **Sim** ou **Não**. |

## Campos do relatório

Na listagem de sincronizações, você tem os seguintes campos:

* **Código**.  
* **Nome.**  
* **Servidor.**  
* **DN.**  
* **Departamento.**  
* **Última sincronização:** indica quando ocorreu a última sincronização bem sucedida.  
* **Erro de sincronização:** indica quando ocorreu o último erro de sincronização.  
* **Sincronização ativa.**  
* **Ativo.**  
* Na coluna **Ação**, você tem duas opções:  
  * **Alterar grupo**: representado pelo ícone de lápis e papel, abre a janela de **Grupos LDAP/AD** em modo de edição.  
  * Ao clicar no botão representado pelos três pontos verticais, o menu suspenso apresenta três opções:  
    * **Usuários:** abre o formulário de **Usuários sincronizados**.  
    * **Log de sincronização:** abre o formulário de **Logs de sincronização de grupos LDAP/AD**.  
    * **Teste de sincronização:** abre o formulário **Grupo LDAP/AD** para testar a sincronização.

## Janela Grupo LDAP/AD

Ao selecionar a opção **Novo grupo**, acessada através de **Exibir ações \> Novo grupo**, ou a opção **Alterar grupo**, acessada através de **Ação \> Alterar grupo**, a janela **Grupo AD/LDAP** vai ser exibida. Essa janela contém os seguintes campos.

### Aba Configurações

| Item | Descrição |
| :---- | :---- |
| **Nome** | Campo de texto onde você deverá preencher o nome do grupo. |
| **Servidor** | Menu suspenso para escolha do servidor em que a busca será realizada. |
| **Grupos de usuários** | Menu suspenso para escolha do grupo de usuários que o grupo atual irá pertencer. **Nota**: este campo é responsável pela definição dos grupos definidos para os usuários sincronizados. |
| **Ativo** | *Radio button* para escolha do status do grupo no momento da criação. |
| **Sincronização** | *Radio button* para escolha da possibilidade do grupo ter sincronização automática. |
| **DN** | Campo de texto onde você deverá preencher com a **DN base**. |
| **Atributo usuário do AD** | Campo de texto destinado à inserção dos atributos associados ao nome de usuário. |
| **Atributo nome do usuário do AD** | Campo de texto destinado à vinculação do nome real do usuário ao respectivo campo no Active Directory. |
| **Departamento** | Menu suspenso para escolha do departamento do usuário. |
| **Busca do AD** | Campo de texto onde você deverá preencher os parâmetros de busca do grupo. |

### Aba Domum

| Item | Descrição |
| :---- | :---- |
| **Habilitar sincronização** | *Radio button* para escolher se você deseja habilitar a sincronização com o senhasegura Domum. |
| **Tipo** | *Radio button* para você escolher qual o tipo de usuário do senhasegura Domum será permitido no grupo. |
| **Fornecedores/Grupo Interno** | Menu suspenso para escolha do grupo no senhasegura Domum ao qual o grupo LDAP/AD irá pertencer. |

### Aba Papéis

| Item | Descrição |
| :---- | :---- |
| **Ícone de adição** | Abre o modal Papéis. |
| **Papel** | Nome do papel escolhido. |
| **Built-in** | Campo de texto utilizado para indicar se o papel é um dos padrões fornecidos pelo senhaSegura ou se é um papel personalizado, criado por um usuário. |
| **Descrição** | Descrição do papel escolhido. |

## Janela Grupo LDAP/AD para teste de sincronização

Ao selecionar a opção **Teste de sincronização** na coluna **Ação** a partir do relatório de sincronização de grupos LDAP/AD a janela **Grupo LDAP/AD** será aberta para testar a sincronização. Essa janela possui os seguintes campos:

| Item | Descrição |
| :---- | :---- |
| **DN** | Campo para inserir o parâmetro DN base que vai ser testada a sincronização. |
| **Raw View** | Caixa de seleção. Ao marcá-la, a resposta será enviada em texto plano. |
| **Filtro de usuário** | Campo para inserir o parâmetro do filtro de usuário |