# AD Bridge

Este documento fornece informações sobre o formulário **AD Bridge**, que contém informações sobre a configuração do AD Bridge no Segura.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Parâmetros de sistema \> Global \> AD Bridge.**

## Configurações de Conexão

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **LDAP Uri** | Campo de texto | Não | Endereço da URI do servidor LDAP. |
| **Porta** | Campo de texto | Sim | Porta de conexão com o servidor LDAP. O valor padrão é `389`. |
| **Usar SSL?** | Botão de opção | Não | Define se a conexão usará SSL. As opções são **Sim** ou **Não**. |
| **Domínio** | Menu suspenso | Não | Lista de domínios disponíveis para autenticação. |
| **Credencial para autenticação** | Menu suspenso | Não | Seleciona as credenciais para autenticação no servidor LDAP. |
| **DN Base** | Campo de texto | Não | DN Base utilizado para buscas no LDAP. |
| **DN Bind** | Campo de texto | Não | DN Bind utilizado para realizar autenticação no LDAP. |

## Configurações de Usuário

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Nome de usuário** | Campo de texto | Não | Atributo LDAP que define o nome do usuário. |
| **Caminho do diretório HOME** | Campo de texto | Não | Caminho do diretório home do usuário. |
| **Shell do usuário** | Campo de texto | Não | Caminho para o shell do usuário. |
| **Tempo de sincronização de política** | Menu suspenso | Não | Define a periodicidade de sincronização automática das políticas. |
| **Tempo em Minutos** | Menu suspenso | Não | Especifica o tempo de sincronização em minutos, caso aplicável. |

## Configurações de Sincronização de Usuário

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Adicionar** | Botão | Não | Adiciona uma entrada em branco ao final da listagem |
| **DN do Usuário** | Campo de texto | Não | DN do usuário a ser sincronizado. |
| **Filtro de Usuário** | Campo de texto | Não | Filtro LDAP para restringir os usuários sincronizados. |
| **UID do Usuário** | Campo de texto | Não | Atributo LDAP que define o UID do usuário. |

## Configurações de Sincronização de Grupo

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Adicionar** | Botão | Não | Adiciona uma entrada em branco ao final da listagem |
| **DN do Grupo** | Campo de texto | Não | DN do grupo a ser sincronizado. |
| **Filtro de Grupo** | Campo de texto | Não | Filtro LDAP para restringir os grupos sincronizados. |
| **Nome do Grupo** | Campo de texto | Não | Atributo LDAP que define o nome do grupo. |
