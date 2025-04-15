# Busca global

Este guia visa fornecer uma compreensão abrangente da funcionalidade de **Busca Global**, permitindo que usuários encontrem rapidamente informações em múltiplos módulos do sistema.

## Primeiros passos

Você poderá acessar a busca global de duas maneiras:

1. Pelo atalho, para isso pressione `Ctrl+G` para focar no campo de busca.  
2. Pelo ícone e barra de pesquisa, para isso clique no ícone de busca na barra de navegação.

Após acessar a busca global, proceda como indicado:

1. Selecione os módulos onde você deseja realizar a busca, escreva o termo para a sua busca e pressione `Enter`.  
2. Você será direcionado a tela de resultados. 

:::(info) (Info)
- Se você não selecionar nenhum módulo, a busca não será executada.  
- A tela de resultado da busca estará ordenada de acordo com os resultados encontrados nos módulos selecionados.
:::

A interface da busca global apresenta as seguintes opções:

* Campo de texto principal.  
* Seletor de módulos.  
* Histórico de buscas recentes (mostra as 5 últimas buscas realizadas).

## Como utilizar a busca global

Como exemplo, iremos realizar uma busca, no módulo **PAM Core**, do termo `debian` para localizar qualquer credencial ou dispositivo que contenha a palavra debian.

1. No segura, na barra superior, clique no campo de busca para selecioná-lo.  
2. Insira o termo de busca: `debian`.  
3. Selecione o módulo: `PAM Core`.  
4. Pressione `Enter` para iniciar a busca.  
5. O sistema processará a busca em todo o **PAM Core** e exibirá os resultados em um relatório de buscas.

O relatório de busca apresentará os seguintes resultados:

1. O módulo de cada resultado.  
   2. As informações relevantes de cada registro.  
   3. Os detalhes exibidos nos relatórios.

Você pode interagir com os resultados da busca, obtendo detalhes sobre cada resultado. Para interagir com um resultado clique no botão **Ações** e selecione uma das opções disponíveis.

:::(info) (Info)  
As opções para interação com os resultados da busca irão variar de acordo com o tipo do resultado. Por exemplo, uma **Credencial** exibirá opções como o **Histórico da credencial**, ao passo que um **Dispositivo** irá exibir opção como **Credenciais** (relativas ao dispositivo). Assim, cada resultado terá opções distintas para interação.  
:::

## Possibilidades de busca

Atualmente, a busca global está habilitada a buscar os seguintes casos:

| Módulo | Relatório | Buscar por |
| :---- | :---- | :---- |
| **PAM Core** | Credenciais (todos os tipos, inclusive de domínio) | **Credencial**: *Username*, Informação adicional, *tags*, domínio, identificador (*webservice*). |
|  |  | **Dispositivo**: Nome, *management*, *vendor*, *product*, *tags*. |
| **Dispositivos** | Dispositivos | Nome, *management*, *vendor*, *product*, *tags* do dispositivo. |
| **MySafe** | Itens (todos os tipos de itens do MySafe) | **Senhas, APIs e Notas:** Nome, URL, *Username*, *tags*, notas. |
|  |  | **Arquivos**: Nome do arquivo, *tags*, notas. |
| **Domum Remote Access** | Credenciais (todos os tipos, inclusive de domínio) | **Credenciais**: *Username*, Informação adicional, *tags*, domínio. |
|  |  | **Dispositivo**: Nome, *management*, *vendor*, *product*, *tags*. |
| **Certificate Manager** | Certificados | ***Requests***: Nome do request, *common name*, organização, *tags*, ambiente, sistema. |
|  | Requests | **Certificados**: Nome da CA, *common name*, organização, *tags*, ambiente, sistema, projeto. |
| **DevOps Secret Manager** | Secrets/Aplicações/Autorizações | **Secrets**: Nome, identificador, *tags*, ambiente, sistema. |
|  |  | **Credenciais cloud:** *user*, *access key*. |
|  |  | **Credenciais**: Nome, *hostname*, username, informação adicional. |
|  |  | **Credenciais efêmeras:** Nome, *hostname*, *username*, informação adicional. |
|  |  | ***Key/Value***: *Key*. |
| **Cloud IAM** | Credenciais | **Credenciais**: *tags*, ambiente, sistema. |
|  |  | **Usuário/Conta de serviço:** *Username*, *tags*. |
| **A2A** | Aplicações/Autorizações | Nome, *tags*, ambiente, sistema. |
| **EPM** | Dispositivos | **Dispositivos:** *Hostname*, domínio, IP. |
|  | Usuários | **Usuários:** Nome, *username*, domínio, departamento. |
| **Discovery** | Discovery | Nome, IP/Domínio, site. |
| **Task Manager** | Tasks | Nome, *tags*, ambiente e sistema. |
