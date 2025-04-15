# Dispositivos

1. Acesse **Discovery ➔ Configurações ➔ Discovery**
2. Clique no ícone `⁝` , selecione a opção **+ Novo**

![h.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/h%281%29.png){height="" width=""}

1. Selecione a opção **Dispositivo**
2. Adicione as seguintes informações:

![i.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/i.png){height="" width=""}

- Nome: Nome que identificará a ação.
- IP Inicial: IP do intervalo de pesquisa inicial
- IP Final: IP final do intervalo de pesquisa. 
Caso esse campo não seja preenchido, apenas o IP do campo IP inicial será levado em consideração para verificar as credenciais e o dispositivo.
- Site: Nome dos Sites a serem verificados. 
Todos os sites registrados no Segura serão exibidos
- Ativo: Indicação para saber se a ação está ativada ou não


## Conexão

- Credencial de acesso: Uma credencial de acesso para a pesquisa, sendo IP, Nome de host ou Nome de usuário

:::(info) (info)

É indicado que utilize as credenciais de um usuário que tenha acesso a busca em questão ou um acesso privilegiado.

:::

Todas as credenciais cadastradas no Segura serão exibidas.

- Senha de config: Senha de configuração que é utilizada antes de realizar a autenticação do processo de busca
Exemplo: Enable
- Forçar uso do sudo: Caso o usuário necessite executar o sudo para ter as permissões dessas buscas, os comandos serão executados como super-usuário

:::(info) (info)

A credencial de acesso preenchida no campo Credencial de acesso deve ter `sudo nopasswd`

:::

- Pools de credenciais
    - Credenciais: Conjunto de credenciais utilizadas para realizar a verificação
    - Prioridade: Prioridade do conjunto de credenciais

Os pools de credenciais de prioridade mais altas prevalecem sobre os pools de credenciais de prioridade mais baixa

## Buscas

![j.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/j.png){height="" width=""}

- Buscar credenciais: Se esta opção estiver habilitada, as credenciais serão incluídas no processo de descoberta.
- Buscar grupos dos dispositivos: Se esta opção estiver habilitada, os grupos de dispositivos serão incluídos no processo de descoberta.

Esta opção está desativada por padrão.

- buscar certificados: Se esta opção estiver habilitada, os certificados digitais serão incluídos no processo de Descoberta.

A guia Certificados ficará visível se este campo estiver marcado.

- buscar artefatos DevOps: Se essa opção estiver habilitada, os artefatos de DevOps serão incluídos no processo de descoberta.

A guia DevOps ficará visível.

- Monitorar os acessos não autorizados (intervalos de 1 hora): Se esta opção estiver habilitada, o acesso não autorizado às credenciais será monitorado e os logs poderão ser visualizados no Discovery.
- Identificar contas em pool de aplicações (IIS): Se essa opção estiver habilitada, as credenciais nos pools de aplicativos (IIS) serão incluídas em Scan & Discovery.
- Buscar FQDN em dispositivos Windows: Se esta opção estiver habilitada, a busca por dispositivos identificará seu FQDN e o considerará no processo de descoberta.

O FQDN será o único identificador de dispositivo se esta opção estiver habilitada.

## Plugins

![k.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/k.png){height="" width=""}

Clique no ícone + e preencha o campo do plug-in.

:::(info) (info)

Para procurar contas de serviço do Windows, você precisará selecionar um plug-in do Windows na guia plug-ins.

:::

## Execução

![l.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/l.png){height="" width=""}

- Manter scan ativo apos importação?: A verificação de credenciais permanecerá ativa após a importação de credenciais ou não
- Dias permitidos para execução: Dias que serão permitidos para realizar a execução.
- Períodos permitidos para execução: Horários que será permitidos para a execução.
- Intervalo minimo entre as execuções (em horas): Intervalo mínimo, em horas, entre execuções de varreduras.

Este critério leva em consideração os valores informados nos campos Dias permitidos para execução e Períodos permitidos para execução.

:::(info) (info)

Não é indicado adicionar um intervalo inferior a 8 Horas

:::

## Importação

![m.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/m.png){height="" width=""}

- Criar glossário exclusivo para esse discovery:
- Configuração de dispositivo:
    - Site
    - Tipo
    - Fornecedor
    - Produto
- Configuração de credenciais
    - Tipo de credencial padrão
    - Tipo de credencial privilegiada
- Ativar importação automática de dispositivos e credenciais?: Indica se a importação automática de credenciais e dispositivos está ativada ou não
- Importação de credenciais: Nomes de usuários de credenciais que serão importadas automaticamente (por exemplo, Administrador).

## Abas Adicionais

### Certificados

Ao clicar na Busca a opção "Buscar Certificados" marcada, terá mais uma aba de opções:
![certificado.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/certificado%281%29.png){height="" width=""}

:::(Info) (Info)
As extensões válidas para realizar um discovery de certificados são:
.crt, .cer, .ca-bundle, .p7b, .p7c, .p7s, .pem, .p12, .pfx e .pem

É possível fazer o discovery de certificados junto a chaves, desde que a busca aconteça em diretórios em ambientes Linux.
:::

:::(Warning) (Cuidado)
O **Discovery** importa a chave junto com o certificado. Não é possível realizar a importação de chaves à parte.
::: 

**Origem do certificado**

- Apache
- Nginx
- Tomcat
- Busca por certificados em diretórios
- Microsoft®IIS
- Workstation Windows®
- IBM Websphere
- Busca de certificados sem login
- Emitidos por Microsoft®CA
- Palo Alto Networks®
- Kubernetes
- NetScale

**Configurações Extras da busca de Certificados:**

- Importar todos os certificados encontrados:
- Configurações extras para F5/ BigIP

**Configurando Tomcat®**

Ao selecionar a opção **Tomcat**, os campos serão exibidos:

- Caminho do arquivo de configuração Tomcat: Localização do Arquivo server.xml

**Configurando “Buscando certificados em diretórios”**

Ao selecionar a opção **Buscando certificados em diretórios**, os campos serão exibidos:

- Caminho do diretório onde buscar o certificado
- Extensões dos arquivos a serem buscados

**Configurando Workstation Windows®**

Ao selecionar a opção **Workstation Windows**, os campos serão exibidos:

- Buscar certificados locais Windows
- Buscar certificados de usuario Windows
- Buscar CA’s root

**Configurando IBM Websphere®**

Ao selecionar a opção **IBM Websphere**, os campos serão exibidos:

- Caminho do app_server_root_websphere
- Credencial
- Caminho do KDB websphere para busca de certificados
- Discovery usando credenciais do cofre
- Discovery usando pool de credenciais

:::(info) (info)

Esta opção permite que certificados com senha e chave sejam importados para o Segura.

:::

**Configurando “Busca de certificados sem login”®**

Ao selecionar a opção **Busca de certificados sem login**, os campos serão exibidos:

- Portas para busca de certificados sem login

**Configurando scan Palo Alto Networks®**

Ao selecionar a opção ***Palo Alto***, o Segura escaneará os certificados dentro de Palo Alto Networks®, dois campos serão exibidos:

- ***API Key:*** Selecione um usuário, já registrado com Segura , que contenha o valor da Chave API;
- ***Importar chaves?:*** Indica que ao encontrar os certificados as chaves serão importadas para o Segura também.

:::(info) (info)

Visualize no menu **Discovery ➔ Certificados ➔ Certificados** o relatório de certificados encontrados, use o botão de ação para realizar uma importação manual.

:::

:::(info) (info)

Na aba Plugins ao selecionar o plugin ***Palo Alto,*** indique que a porta de acesso é o SSH ***22***

:::

**Configurando Kubernetes®**

Ao selecionar a opção **Kubernetes**, os campos serão exibidos:

- API URL
- Token de acesso do Kubernetes
- Porta de acesso do Kubernetes

**Configurando NetScale®**

Ao selecionar a opção **NetScale**, os campos serão exibidos:

- Importar chave
- Chave de API

### DevOps

Ao clicar na Busca a opção "Buscar Artefatos Devops" marcada, terá mais uma aba de opções:

![e.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/e%281%29.png){height="" width=""}

**Configuração Ansible**

- Ativar Serviço Ansible: Indica se o serviço Ansible está ativado
- Pesquisar playbooks: Indica se a pesquisa de playbooks está ativada
- Buscar Roles: Indica se a pesquisa de funções está ativada
- Pesquisar hosts: Indica se a pesquisa de host está ativada

**Configurações do Jenkins**

- Ativar serviço Jenkins: Indica se as buscas Jenkins estão ativadas nesta busca
- Pesquisar Jobs: Se esta opção estiver ativada, o Discovery irá buscar Jobs do Jenkins.
- Pesquisar nodes: Se esta opção estiver ativada, o Discovery buscará por nodes Jenkins.
- Pesquisar usuários: Se esta opção estiver ativada, o Discovery procurará usuários do Jenkins.
- Token de acesso Jenkins: Token que será usado para acessar Jenkins
- Porta de acesso: Porta de acesso Jenkins

**Configurações do Kubernetes**

- Ativar serviço Kubernetes: Indica se as buscas Kubernetes estão ativadas nesta busca
- Pesquisar Secrets: Se esta opção estiver ativada, o Discovery irá procurar Secrets do Kubernetes
- Bearer Token: Indica se o portador do token é o mesmo da credencial.
- Credencial de acesso ao Kubernetes: Credencial que será usada para acessar o Kubernetes
- Porta de acesso: Porta de acesso ao Kubernetes

:::(info) (info)

O Segura possui um plug-in Kubernetes que permite usar credenciais registradas no cofre para usar o serviço, aumentando a segurança ao usar o sistema. Para obter acesso ao plug-in, entre em contato com a equipe de suporte Segura.

:::