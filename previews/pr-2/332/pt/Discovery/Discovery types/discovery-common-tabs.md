#### Aba Conexão

Para todos os tipos de Discovery

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664911989513.png)

Conexão

  

#### Acesso usando credenciais do cofre



| Campo | Descrição |
| --- | --- |
| Credencial de acesso | insira IP, nome do host ou nome de usuário. Credencial de acesso para a pesquisa. Todas as credenciais registradas no senhasegura serão exibidas |
| Senha de configuração (ex: ativar) | senha de configuração |
| Forçar o uso do sudo | Se esta opção estiver ativada, os comandos serão executados como superusuário. A credencial de acesso preenchida no campo Credencial de acesso deve ter permissão `sudo nopasswd` |

#### Acesso usando o conjunto de credenciais (clique em \+)



| Campo | Descrição |
| --- | --- |
| Pool de credenciais \* Conjunto de credenciais usado para verificar |  |
| Prioridade | Prioridade do conjunto de credenciais. Os conjuntos de credenciais de prioridade mais alta prevalecem sobre os conjuntos de credenciais de prioridade mais baixa |

#### Aba Buscas

Para todos os tipos de Discovery.

Na guia Pesquisar, você pode procurar todas as credenciais que estão sendo usadas por um serviço, basta selecionar a opção ***Pesquisar contas de serviço do Windows***  
  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664912032989.png)

Aba buscas

 

  


  




  


  


Marque os objetos a serem verificados.

#### Configuração de objetos de pesquisa



| Campo | Descrição |
| --- | --- |
| Buscar credenciais | Se esta opção estiver ativada, as credenciais serão incluídas no processo de Discovery. |
| Buscar grupos de dispositivos | Se esta opção estiver ativa, os grupos de dispositivos serão incluídos no processo de Discovery. Esta opção é desativada por padrão. |
| Buscar certificados | Se esta opção estiver ativada, os certificados digitais serão incluídos no processo de Discovery. A guia Certificados ficará visível se este campo estiver marcado. |
| Buscar artefatos do DevOps | Se esta opção estiver ativada, os artefatos do DevOps serão incluídos no processo de Discovery. A guia DevOps ficará visível. |
| Monitorar o acesso não autorizado (intervalos de 1 hora) | Se esta opção estiver ativada, o acesso não autorizado às credenciais será monitorado e os logs poderão ser visualizados no Discovery. |
| Identificar contas em pool de aplicações (IIS) | Se esta opção estiver ativada, as credencias que tiverem contas em pool de aplicações (IIS) serão incluídas no processo no processo de Discovery. |
| Buscar FQDN em dispositivos Windows | Se esta opção estiver ativada, a busca por dispositivos irá identificar o FQDN dos mesmos e registrá\-los no processo de Discovery. O FQDN será o identificador único do dispositivo caso esta opção for ativada. |
| Identificar contas do Windows associadas a um serviço | Se essa opção estiver habilitada, a descoberta localizará e listará qualquer credencial nominal associada a qualquer serviço do Windows. |

#### Aba parâmetros de pesquisa

Apenas para o tipo Domínio.

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664912146697.png)Aba parâmetros de pesquisa 

  




| Campo | Descrição |
| --- | --- |
| Formulário da conta | tipo de formulário usado nas contas a serem pesquisadas |
| DN do filtro de credenciais | (Deixe em branco para usar o DN Base) Nome de domínio do filtro de credenciais. Se deixado em branco, o DN base será usado |
| DN do filtro do dispositivo | (Deixe em branco para usar o DN Base) Nome de domínio do filtro do dispositivo. Se deixado em branco, o DN base será usado |
| Atributo de nome da conta | Atributo de nome das contas a serem buscadas |
| Domínio da conta | Nome de domínio das contas a serem buscadas |
| Domínio da conta (nome abreviado) | Nome de domínio simplificado (opcional) |
| Usar SSL? | Indica se deve ou não usar o certificado SSL ao pesquisar. Marque Sim ou Não |
| O membro é DN? | Marque Sim ou Não |
| A ligação requer DN? | Marque Sim ou Não |
| Ligação DN | (Deixe em branco para usar o DN Base) Nome de domínio do usuário que pesquisará. Se deixado em branco, o DN base será usado. |

#### Aba Containers

Somente para o tipo Containers.

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664912241839.png)

Containers 

 

  




  


#### Configurações de pesquisa para Docker



| Campo | Descrição |
| --- | --- |
| Pesquisar apenas containers em execução? | Indica se é necessário pesquisar apenas containers em execução |

#### Configurações de pesquisa para containers do Windows



| Campo | Descrição |
| --- | --- |
| Usa o Docker | Indica se os containers de pesquisa usam o Docker |
| Pesquisar apenas containers em execução? \* | Indica se é necessário pesquisar apenas containers em execução |

#### Aba Plugins

Somente para os tipos de Dispositivos e Containers.

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664912373215.png)

Aba Plugins

 

  




  


Clique no ícone mais e preencha o campo do plug\-in.

  
Para procurar contas de serviço do Windows, você precisará selecionar um plug\-in do Windows na guia plug\-ins.

### Criando um discovery do tipo postgreSQL

Ao ser selecionado a opção de plugin, o discovery irá fazer descoberta de credenciais dentro do bancos de dados do tipo PostgreSQL.

1. Selecione o módulo **Discovery ➔ Settings**
2. Clicar no menu de ações e escolha a opção **New**
3. Selecione a opção por tipo de **Device**
4. Selecione a aba **Searches** e marque a checkbox **busca por credenciais**
5. Clique na aba **Plugins** e escolha a opção **PostgreSQL**
6. Preencha os outros campos e **Salve**

Em **Discovery ➔ Discovery ➔ Credentials**, as credenciais encontradas pelo discovery serão listadas e podem ser visualizadas neste relatório.

#### Aba execução

Nesta aba você pode configurar o período e intervalo de execução desta configuração de discovery. Configurações que por ventura levem mais tempo de execução em relação ao período configurado, não serão executados em concorrência. Ou seja, as execuções de uma mesma configuração não são executadas em paralelo. Apenas configurações diferentes são executadas em paralelo.

Tenha cuidado em configurar intervalos muito curtos para configurações que necessitem procurar por grandes intervalos de rede e avaliar diversos artefatos.

O menor intervalo configurável é de uma execução de hora em hora.

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664912420101.png)

Aba Plugins

 

  


#### Execução de scan de credenciais



| Campo | Descrição |
| --- | --- |
| Manter a verificação de credenciais ativa após a importação? \* | Indica se a verificação de credenciais permanecerá ativa após a importação de credenciais. |
| Dias permitidos para execução | Escolha Todos os dias ou selecione um ou mais dias da semana para a execução |
| Períodos permitidos para execução | Escolha Todos os períodos ou selecione um ou mais períodos para a execução |
| Intervalo mínimo entre execuções (em horas) \* | Intervalo mínimo, em horas, entre execuções de varreduras. Este critério leva em consideração os valores inseridos nos campos Dias permitidos para execução e Períodos permitidos para execução. |

#### Aba importar

Somente para os tipos Domínio e Dispositivo.

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664912454105.png)

Aba importar

 

  




  




| Campo | Descrição |
| --- | --- |
| Ativar credenciais e importação automática de dispositivos? | Indica se a importação automática de credenciais e dispositivos está ativada ou não |
| Nomes de usuários para importar credenciais Clique no ícone mais | Nomes de usuários de credenciais que serão importadas automaticamente (por exemplo, Administrador). |

#### Aba Certificados

Para todos os tipos de Discovery que possuem na aba Pesquisa, a opção "Buscar Certificados" marcada.

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664912485966.png)

Aba certificados

 

  




  


#### Origem do certificado

* Apache
* Nginx
* Tomcat
* Busca por certificados em diretórios
* Microsoft®IIS
* Workstation Microsoft®Windows®
* IBM Websphere
* Busca de certificados sem login
* Emitidos por Microsoft®CA
* Palo Alto Networks®

Nesta aba existe a opção \***Usar pool de credenciais para importar certificados com chaves (somente sistemas *nix)***.  
Esta opção permite que certificados com senha e chave sejam importados para o senhasegura . Selecione esta opção e sem seguida indique o *pool de credenciais* para esta tarefa.

#### Configurando scan Palo Alto Networks®

Ao selecionar a opção ***Palo Alto***, senhasegura escaneará os certificados dentro de Palo Alto Networks®, dois campos serão exibidos:

* ***API Key:*** Selecione um usuário, já registrado com senhasegura , que contenha o valor da Chave API;
* ***Importar chaves?:*** Indica que ao encontrar os certificados as chaves serão importadas para o senhasegura também.

  
Ir para o menu Discovery: **Discovery ➔ Certificados ➔ Certificados** para visualizar o relatório de certificados encontrados, use o botão de ação para realizar uma importação manual.

  


  
Na aba Plugins ao selecionar o plugin ***Palo Alto***, indique que a porta de acesso é o SSH ***22***.  


#### Aba DevOps

Para todos os tipos de Discovery que possuem na aba Busca a opção "Buscar Artefatos Devops" marcada.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664912603491.png)

Aba DevOps

 



  


#### Configurações Ansible



| Campo | Descrição |
| --- | --- |
| Ativar Serviço Ansible | Indica se o serviço Ansible está ativado |
| Pesquisar playbooks | Indica se a pesquisa de playbooks está ativada |
| Funções de pesquisa | Indica se a pesquisa de funções está ativada |
| Pesquisar hosts | Indica se a pesquisa de host está ativada |

#### Configurações Jenkins



| Campo | Descrição |
| --- | --- |
| Ativar serviço Jenkins | Indica se as buscas Jenkins estão ativadas neste Discovery |
| Pesquisar trabalhos | Se esta opção estiver ativada, o Discovery buscará jobs do Jenkins. |
| Pesquisar nós | Se esta opção estiver ativada, o Discovery buscará por nós Jenkins. |
| Pesquisar usuários | Se esta opção estiver ativada, o Discovery procurará usuários do Jenkins. |
| Token de acesso Jenkins | Token que será usado para acessar Jenkins |
| Porta de acesso | Porta de acesso Jenkins |

#### Configuração Kubernetes



| Campo | Descrição |
| --- | --- |
| Ativar serviço Kubernetes | Indica se as buscas Kubernetes estão ativadas neste Discovery |
| Pesquisar segredos | Se esta opção estiver ativada, o Discovery procurará segredos do Kubernetes. |
| Credencial de acesso ao Kubernetes | Credencial que será usada para acessar o Kubernetes |
| Porta de acesso | Porta de acesso ao Kubernetes |

  
O senhasegura possui um plug\-in Kubernetes que permite usar credenciais registradas no cofre para usar o serviço, aumentando a segurança ao usar o sistema. Para obter acesso ao plug\-in, entre em contato com a equipe de suporte senhasegura .

