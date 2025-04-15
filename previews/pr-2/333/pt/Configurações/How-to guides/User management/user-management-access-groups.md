Através do sistema de permissão senhasegura , aprendemos como segregar as ações que um usuário pode realizar dentro da plataforma. Agora aprenderemos como limitar os dados sobre os quais o usuário pode atuar.

Desta forma, acrescentamos outra camada de segurança para garantir o princípio do menor privilégio.

Grupos de acesso atuam como um filtro para entidades de suas propriedades. A configuração dos grupos pode ser vista em vários produtos da plataforma senhasegura :

* PAM Core
* Certificate Manager
* A2A
* Task Manager
* Gerenciamento de informações

Isto permite ao Administrador entregar diferentes níveis de segurança para o mesmo usuário dentro de suas atribuições em cada produto.

Neste tópico, falaremos sobre o grupo de acesso do módulo PAM, que tem controle de acesso às credenciais e seu uso.

## Entidades segregadas e suas propriedades

Todas as telas que um usuário tem acesso para exibir informações de entidades privilegiadas são filtradas pelo Grupo de Acesso. As ações que podem ser tomadas também afetam essas entidades privilegiadas. Para evitar abusos, a senhasegura consulta as regras aplicadas ao usuário que conecta a entidade privilegiada.

Se o usuário tem mais de um grupo de acesso que lhe dá acesso a informações privilegiadas, o senhasegura aplicará a regra de grupo mais restritiva.

Os níveis de restrição são baseados no número de etapas e pessoas que estão cientes da operação:

1. Permite o acesso à informação
2. Permitir o acesso exigindo a justificação do requerente
3. Permitir o acesso dentro de um intervalo de tempo e um aprovador

No módulo PAM, a entidade segregada são as credenciais e chaves SSH. E estas entidades têm atributos que podem ser usados como filtro:

* Propriedades dos dispositivos:


	+ Nome do dispositivo a que pertencem
	+ Modelo do dispositivo a que pertencem
	+ Tags do dispositivos
	+ Site do dispositivo
	+ Tipo de dispositivo
* Propriedades das credenciais


	+ Username da credencial
	+ Informações adicionais sobre credenciais
	+ Tags de credenciais
	+ Tipo de credencial

Ao utilizar estas combinações de atributos, você determina a que informações um grupo de usuários terá acesso. Algumas informações permitem o uso de curingas ou máscaras. Falaremos melhor sobre isso mais tarde.

Para alguns exemplos, veja a seguinte lista de credenciais:



| **ID** | Username | Hostname | Tipo de dispositivo | Modelo | Site | Tag |
| --- | --- | --- | --- | --- | --- | --- |
| **1** | root | srvdns | Server | RedHat 7\.0 | LAX |  |
| **2** | administrator | msad | Server | Windows Server 2019 | LAX |  |
| **3** | sa | mssqlprd | Database | Windows Server 2019 | NYC | dba |
| **4** | System | Oraprd | Database | Oracle 19c | NYC | dba |
| **5** | administrator | WS1092 | Workstation | Windows 10 | SEA |  |
| **6** | administrator | WS1035 | Workstation | Windows 10 | SEA |  |
| **7** | administrator | WS2018 | Workstation | Windows 10 | NYC |  |
| **8** | peter.lee | WS1092 | Workstation | Windows 10 | SEA |  |
| **9** | peter.lee | mssqlprd | Database | Windows Server 2019 | NYC |  |
| **10** | john.ferrer | WS1035 | Workstation | Windows 10 | SEA |  |
| **11** | john.ferrer | WS1092 | Workstation | Windows 10 | SEA |  |
| **12** | root | vmh\-www | Server | RedHat 7\.0 | AWS |  |
| **13** | root | vmh\-cicd | Server | RedHat 7\.0 | AWS |  |
| **14** | root | vmh\-fw | Server | RedHat 7\.0 | AWS |  |

Vamos dar uma olhada em alguns exemplos de grupos que afetam esta relação.

* Permitir que o ServiceDesk tenha acesso apenas ao usuário ***Administrador*** das estações de trabalho.


	+ Username: `Administrador`
	+ Tipo de dispositivo: `Workstation`  
	Como resultado, somente as credenciais `5`, `6`, e `7` serão disponibilizadas.
* Permitir que os DBAs tenham acesso apenas a credenciais privilegiadas de banco de dados Oracle:


	+ Tipo de dispositivo: `Database`
	+ Modelo: `Oracle*`
	+ Tags de Credencial: `DBA`  
	Como resultado, somente credenciais `4` serão disponibilizadas.
* Permitir que os usuários tenham acesso às credenciais que levam seu nome de usuário, independentemente do dispositivo:


	+ Username da credencial: `[#USERNAME#]`  
	Como resultado, somente serão disponibilizadas as credenciais cujo nome de usuário seja o mesmo que o usuário logado no senhasegura . Se o nome de usuário da senhasegura for ***john.ferrer***, somente as credenciais `10` e `11` serão disponibilizadas.
* Permitir que os administradores de virtualização acessem somente máquinas virtuais hospedadas na AWS. Pela regra adotada nesta empresa fictícia, estas máquinas recebem o prefixo ***vmh*** em seu hostname:


	+ Nome do dispositivo: `vmh*`
	+ Website: `AWS`  
	Como resultado, serão disponibilizadas apenas as credenciais `12`, `13`, e `14`.

Estes são apenas alguns exemplos que mostram como os filtros podem ser combinados na criação de alguns grupos de acesso. Por favor, note que não ligamos os usuários neste momento e não definimos o que pode ser executado. Os usuários podem ser ligados a uma diversidade de grupos, e cada grupo pode permitir diferentes ações e exigir diferentes níveis de restrição.

## A configuração do Grupo de Acesso

Entendemos como os atributos atuam como filtros de informação, usando um dos exemplos anteriores, criaremos um grupo de acesso que permite ao profissional do Service Desk acessar as credenciais das estações de trabalho.

Você pode acessar o relatório Grupos de Acesso através do menu **PAM Core ➔ Configurações ➔ Acesso ➔ Grupos de Acesso**.

Este relatório tem a opção de registrar novos grupos ou alterar grupos existentes.

Você pode até mesmo clonar completamente um grupo para um novo registro através da ação de registro do ***Clonar***. Assim, você pode mudar pequenas variações nos critérios mantendo os usuários conectados. Isso pode economizar muito tempo.

A tela para um novo grupo também pode ser acessada a partir do menu de ações rápidas. A partir do menu de ações rápidas, será solicitado o tipo de grupo de acesso a ser registrado.

Grupos uma vez criados serão aplicados imediatamente aos usuários. Mas os relatórios de auditoria e validação são atualizados de forma assíncrona em um processo que é acionado com cada modificação em algum grupo ou modificações em alguma credencial ou dispositivo.

### Ações permitidas e controles de acesso

Logo na primeira aba da tela de registro do grupo de acesso, você verá as ações que este grupo permite e quais são os controles de acesso que devem ser respeitados para fazer uso das informações privilegiadas.

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%2898%29.png)Cadastrar gupo de acesso 

  


Alguns desses campos são usados para configurar o Workflow de acesso e serão vistos na prática no próximo capítulo.

* ***Nome do grupo de acesso:*** Nome do grupo de acesso que corresponde às regras que este grupo aplica. Isto facilita a compreensão e a auditoria
* ***Ativo:*** Se o grupo está ativo ou não. Desabilitar um grupo pode reduzir a quantidade de informações a que o usuário tem acesso, ou reduzir o nível de segurança necessário para acessar as informações
* ***Configurações da visualização da senha:*** Configurações que afetam a visualização de senhas


	+ ***Usuários podem visualizar uma senha:*** Determina que a senha da credencial pode ser vista pelo usuário
	+ ***Requer justificativa para visualizar uma senha:*** Marque se é necessário registrar uma justificativa para ver a senha
	+ ***Requer aprovação para visualizar uma senha:*** Marque se outro usuário precisará agir como aprovador para poder ver a senha. Uma vez ativa, você também precisa definir por quanto tempo esta aprovação será válida
	+ ***Aprovações necessárias para visualizar:*** Número de aprovações necessárias por nível para aprovar a operação
	+ ***Reprovações necessárias para cancelar:*** Número de recusas por nível para impedir a operação
	
	InfoSerá validado se a aprovação está configurada (seja simples ou por níveis) e, ao salvar o grupo, será verificado se há aprovadores cadastrados na aba de "Aprovadores", presente na mesma janela de configuração.
	+ ***Aprovação em níveis:*** Marque se os aprovadores serão acionados em níveis. Assim, você pode definir uma hierarquia de aprovadores
	+ ***Permitir acesso emergencial sem aprovação:*** Sinalize se o requerente tem o poder de interromper o workflow de aprovação, aprovando a operação por si mesmo
	+ ***Usuários podem alterar a data de expiração em até:*** Sinalize se o requerente tem o poder de interromper o workflow de aprovação, aprovando a operação por si mesmo
	
	InfoNa janela de exibição de credenciais aparecerá um botão para o usuário aumentar até o tempo, indicado neste campo, seu período de acesso.
	+ ***Parte da senha que será visualizada:*** APermite que a senha solicitada seja exibida fracionariamente. Os membros deste grupo terão acesso apenas à fração definida neste campo. Isto não impede que a senha seja utilizada pela funcionalidade de proxy, uma vez que o usuário não tem acesso à senha em texto plano ao utilizar qualquer uma de nossas soluções de proxy
* ***Configurações da sessão remota:*** Campos que afetam o acesso a uma sessão proxy


	+ ***Usuários podem iniciar sessão:*** Marque se os usuários membros tiverem permissão para iniciar uma sessão proxy usando as credenciais que este grupo permite
	+ ***Requer justificativa para iniciar sessão:*** Marque se é necessário registrar uma justificativa para iniciar a sessão proxy
	+ ***Requer aprovação para iniciar sessão:*** Marque se outro usuário precisará agir como aprovador a fim de iniciar a sessão proxy. Uma vez ativa, você também precisará definir por quanto tempo esta aprovação é válida
	+ ***Aprovações necessárias:*** Número de aprovações necessárias por nível para aprovar a operação
	+ ***Reprovações necessárias para cancelar:*** Número de recusas por nível para impedir a operação
	+ ***Aprovação em níveis:*** Marque se os aprovadores serão acionados em níveis. Assim, você pode definir uma hierarquia de aprovadores
	
	InfoAo utilizar a aprovação de nível, os aprovadores de nível inferior serão inicialmente notificados. Somente após as aprovações terem sido feitas por eles, os aprovadores de nível superior serão notificados para tomar suas ações de aprovação.
	+ ***Permitir acesso emergencial:*** Sinalize se o requerente tem o poder de interromper o fluxo de trabalho de aprovação, aprovando a operação por si só
	+ ***Exigir Mudança ID para iniciar sessão:*** Marque se o solicitante deve registrar um código ITMS no momento da justificativa
* ***Configurações da solicitação de acesso:*** Configurações extras do processo de aprovação


	+ ***Obrigatório especificar código de governança ao justificar?:*** Marque se o requerente deve digitar um código ITMS no momento da justificativa
	+ ***Sempre adicionar o gestor do usuário aos aprovadores?:*** Marque se o usuário responsável pelo departamento do usuário deve ser consultado automaticamente como um aprovador adicional a este grupo. Portanto, este usuário será alertado juntamente com os outros aprovadores da aba ***Aprovadores***
	+ **Bloquear durante congelamentos?\*:** Marque **Sim** se desejar que os usuários nesse grupo de acesso não tenham acesso ao cofre durante o período em que o congelamento está ativo

Estes campos, como você deve ter notado, determinam as regras que devem ser obedecidas por todos os membros do grupo se eles quiserem ter acesso a algumas informações privilegiadas acessíveis por este grupo.

### Os critérios para determinar quais dados são acessíveis

Agora podemos ir para a aba ***Critérios***. Nesta aba, vemos os atributos que escrevemos anteriormente. Note que alguns desses atributos estão dispostos como listas e outros como um campo de texto livre. Os campos de texto livres permitem o uso de curingas ou máscaras.

O wildcard é o asterisco (\*) e pode ser usado em qualquer lugar do valor. Vejamos alguns exemplos de uso de curingas no campo Dispositivo:

* `srv*`  
filtrará todos os dispositivos cujo nome da máquina comece com ***srv***;
* `*www*`  
filtrarão todos os dispositivos que tenham ***www*** em seu hostname;
* `vmh*-db`  
filtrará todos os dispositivos cujo hostname começa com vmh e termina com \-db;

Alguns campos permitem que valores múltiplos sejam separados por uma vírgula. O campo ***Dispositivo*** é um deles. Os valores serão considerados como uma condição OR na regra. Portanto, será considerado um padrão/valor ou outro padrão/valor. Exemplo para o campo ***Dispositivo***:

* `srv*,vmh*`  
Permitir hostnames que comecem com ***srv*** ou ***vmh***;

Outro valor especial que pode ser usado é a máscara de ***\[\#USERNAME\#]***, que será substituída pelo nome de usuário da conta senhasegura registrada que solicita a operação. E você pode usar esta máscara juntamente com wildchar e textos fixos. Exemplo para o campo ***username***:

* `[#USERNAME#]`  
Permitir somente credenciais cujo nome de usuário seja igual ao nome de usuário do requerente;
* `[#USERNAME#]-adm`  
Permitir somente credenciais cujo nome de usuário seja uma composição do username do usuário solicitante mais o sufixo ***\-adm***;
* `[#USERNAME#]-*`  
Permitir somente credenciais cujo username seja uma composição do username do usuário solicitante mais um sufixo que comece com "\-" seguido de qualquer outro valor;

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1666917507689.png)Cadastro de grupo de acesso 

  


### Usuários e aprovadores do grupo

CuidadoNas versões anteriores para adicionar usuários e aprovadores a um grupo de acesso, era necessário salvar as configurações primeiro. Entretanto, a partir da versão ***3\.6*** não é necessário salvar os dados antes de continuar a configuração dos usuários e aprovadores, porém, diferente das versões anteriores ao final da inclusão dos usuários e aprovadores ***é necessário salvar o Grupo de Acesso*** para que eles sejam admitidos pelo grupo criado.

Vá para a guia ***Usuários*** para adicionar usuários que estão sob este grupo de acesso.

A interface é intuitiva e não requer detalhes.

Realizar a mesma tarefa na guia Aprovadores se este for um grupo que requer aprovação para operações.

#### Aprovação em níveis

Na **Aprovação em níveis**, os usuários aprovadores são organizados em diferentes níveis de autorização. Durante a configuração, são utilizados os campos **Aprovações necessárias para visualizar** e **Reprovações necessárias para cancelar** para determinar o número de aprovações e desaprovações necessárias em cada nível da hierarquia de aprovação. Quando a opção **Aprovação em níveis** está ativa, esses campos definem quantos aprovadores são exigidos em cada nível para aprovar ou reprovar uma solicitação.

O valor mais alto entre **Aprovações necessárias para visualizar** e**Reprovações necessárias para cancelar** define a quantidade de aprovadores necessários por nível. Por exemplo, se **Aprovações necessárias para visualizar** for configurado como 2 e **Reprovações necessárias para cancelar** como 1, serão necessários dois aprovadores em cada nível para conceder a aprovação e seguir para o próximo estágio. Se a configuração exigir apenas 1 aprovação e 1 desaprovação em cada nível, basta que um dos aprovadores aprove a solicitação para avançar.

Os usuários de níveis posteriores só serão notificados após a aprovação dos níveis anteriores. Tentativas de aprovação ou reprovação fora de ordem resultarão na mensagem de erro **“Aguarde a aprovação de todos os usuários do nível anterior”**. É importante lembrar que ao configurar um **Grupo de Acesso**, a definição de aprovadores é obrigatória para todos os níveis de aprovação ativados e deve seguir a ordem sequencial para garantir o fluxo adequado do processo de aprovação.

### Limitação de acesso

Na aba de limitação de acesso determinam os dias e horários em que os usuários que são membros deste grupo de acesso poderão visualizar senhas ou conduzir sessões remotas. Você também pode determinar datas para um período de acesso mais restrito.

* ***Dias de permissão de acesso:*** Dias da semana em que os usuários que são membros do grupo poderão realizar as atividades
* ***Horários de permissão de acesso:*** Horários em que os usuários membros do grupo serão capazes de realizar as atividades
* ***Período de permissão de acesso:*** Período determinado em que os usuários que são membros do grupo poderão realizar as atividades

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1666917609430.png)Restrição de acesso 

  


## Auditoria dos usuários e grupos

Tão importante quanto garantir que os usuários tenham acesso às informações internas de que necessitam para realizar suas atividades, é garantir que esse acesso respeite a política de segurança da empresa e seja rastreável.

Vários relatórios senhasegura são utilizados para garantir que o administrador tenha os dados necessários para validar as regras de acesso e auditar essas mesmas regras.

### Credenciais dos usuários

No menu **Relatórios ➔ PCI ➔ Credenciais por usuário**, você tem acesso ao relatório que mostra todas as credenciais que os usuários podem ver.

Da mesma forma, você pode identificar se uma determinada credencial está sendo disponibilizada indevidamente a um usuário.

Os níveis de segurança dos grupos também estão presentes neste relatório.

### Histórico de modificação do grupo de acesso

Os grupos de acesso podem ser completamente modificados, afetando imediatamente o nível de acesso de todos os envolvidos. Assim, é possível observar o histórico de mudanças de cada grupo com detalhes de quais propriedades foram alteradas e por quem, através do relatório **Rastreabilidade ➔ Grupos de acesso**.

Para cada mudança realizada, você terá acesso a tela de detalhes que mostra quem fez a alteração, qual era a regra antes, qual é a regra agora e quando ocorreu a mudança.

### Usuários por grupo de acesso

O relatório **Credenciais ➔ Usuários por grupo** mostra a relação entre usuários e grupos. Além de apresentar quem adicionou o usuário ao grupo, quando e a que parte da senha este usuário tem acesso.

InfoÉ importante informar que todas as ações para mudar, criar, adicionar ou remover grupos e usuários são notificados através de mensagens no ***SIEM***.

## Acesso excepcional

O acesso excepcional, caracterizado pelo acesso de curta duração, é crítico em algumas situações diárias, como a correção de problemas, portanto, a concessão de acesso excepcional deve ser rápida e fácil. senhasegura oferece uma solução simples e eficaz para garantir que tais acessos sejam estabelecidos rapidamente e ainda manter a segurança dos dispositivos.

O acesso excepcional é composto por um botão de ação na credencial, que só está disponível aos usuários que têm permissão para criar acessos excepcionais. Ao clicar no botão, o administrador é direcionado para uma tela onde deve selecionar o usuário que receberá o acesso e preencher a data de início e fim desta permissão. Automaticamente senhasegura concederá permissão de acesso somente para aquela credencial e somente para o usuário selecionado e revogará este direito assim que a validade expirar, fechando a sessão se ela ainda estiver aberta. A senhasegura utilizará credenciais just\-in\-time para garantir a segurança deste acesso e permitirá a auditoria como nas sessões convencionais, através de vídeo da sessão e do log de comando.

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1666917892321.png)Acesso excepcional 

  


A tela pop\-up que será aberta tem os seguintes campos:

* **Usuário:** Campo a ser preenchido com o usuário que receberá o acesso excepcional
* **Data de início:** Campo para preencher a data de início do acesso
* **Data de término:** Campo para preencher a data final do acesso
* **Username da credencial:** Campo informativo de qual a credencial foi selecionada
* **Dispositivo:** Campo informativo com o dispositivo que será o alvo deste acesso
* **Domínio:** Campo informativo com o domínio do dispositivo alvo
* **Salvar:** Botão para salvar as informações e terminar a ação

  


