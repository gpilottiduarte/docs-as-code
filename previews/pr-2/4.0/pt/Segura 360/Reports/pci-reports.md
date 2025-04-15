# PCI Relatórios

Alguns dos requisitos do ***PCI DSS*** exigem que as empresas implementem controles que atribuam uma identidade única a cada pessoa com acesso a um computador, além de monitorar totalmente os recursos da rede e os dados de pagamento dos clientes.

O objetivo desses relatórios é exibir as informações exigidas pelos padrões ***PCI*** e, assim, permitir ao auditor identificar possíveis áreas de não conformidade. Ao acessar o menu: **Relatórios ➔ PCI**, você verá os seguintes relatórios:

## **Expiração das senhas**

Este relatório mostra as datas de vencimento de todas as senhas de credenciais registradas no Segura. Esse documento é importante para a comparação entre a política de senha da empresa e a aplicação real da data de validade da senha.

O **Relatório de expiração de senha** irá exibir as seguintes informações:

* **Credencial**: o nome de usuário e a senha que serão detalhados  
* **Dispositivo**: a credencial é usada para acessar  
* **Política de senha**: configurada para definir o período de alteração da senha  
* **Troca de senha**: status da alteração automática de senha  
* **Última tentativa de troca**: é a data da última vez em que o sistema tentou alterar a senha com base na política definida  
* **Status da última tentativa**: mostra se a última tentativa de alteração executou a alteração ou não  
* **Última troca com sucesso**: é a data da última vez em que o sistema alterou a senha automaticamente  
* **Próxima troca**: é a data baseada na política onde a senha deve ser alterada  
* **Expiração**: é a data limite para realizar a alteração da senha  
* **Idade da senha**: é o número de dias em que a senha está sendo usada  
* **Status**: mostra se a senha expirou ou não.

### **Dashboard de Expiração das senhas**

Também é possível ter uma visão geral do número de senhas expiradas no menu dashboard, para visualizar este acesso ao painel:**Dashboard ➔ PAM Core ➔ Trocas de senha**.

A quantidade de credenciais e seus status são apresentadas considerando as seguintes regras:
:::(Warning) (**Atenção**)
 As credenciais filhas só serão consideradas neste dashboard se suas respectivas credenciais pais estiverem com a troca automática ativa. Em alguns casos o sistema não agenda uma troca específica para a credencial filha, criando e executando a troca no momento da execução da troca da credencial pai. Os dashboards de “Waiting” e “Error” não vão exibir necessariamente a soma de “Updated” e “Expired”, pois dependem do comportamento de cada troca.
:::

#### **Os seguintes dashboards contabilizam credenciais gerenciadas/não gerenciadas:**

***Atualizadas**:*

* Acima de 25% das credenciais gerenciadas  
* 5% a 25% das credenciais gerenciadas5% das credenciais gerenciadas

**Expiradas***:*

* Nenhuma expirada  
* Ao menos uma expirada

**Não gerenciadas***:*

* Credenciais sem troca automática de senha habilitada

**Status da execução:**

* Nenhum problema  
* Algum problema com até dois robôs simultaneamente (todos ativos)  
* Algum problema com 3 robôs simultaneamente ou um dos robôs inativos.

#### **Os seguintes dashboards contabilizam credenciais expiradas que possuem a flag de “troca de senha” ativada:**

**Aguardando***:*

* Mais de 75% das credenciais gerenciadas  
* Menos de 75% das credenciais gerenciadas

**Erro***:*

* Sem erros  
* Com ao menos um erro

## **Credenciais por usuário**

Este relatório mostra todas as credenciais que os usuários registrados no sistema Segura podem ter acesso. Este relatório é relevante para a comparação entre os privilégios de acesso do usuário definido pela *política* da empresa e os privilégios concedidos atualmente.

O **Relatório de credenciais por usuários** imprimirá as seguintes informações:

* **Nome:** é o nome do usuário que será detalhado  
* **Username:** é o nome de usuário usado para acessar o Segura  
* **Dispositivo:** são os dispositivos aos quais o usuário tem privilégios de acesso  
* **Tipo de Credencial:** são as variações de credencial que o usuário tem privilégios de uso  
* **Credencial:** é a credencial que o usuário tem privilégios para usar para acessar o dispositivo  
* **Departamento:** é o departamento da empresa ao qual o usuário pertence  
* **Grupo de acesso:** é o grupo de acesso onde o usuário é membro  
* **Parte da senha:** é o nível de privilégio que o usuário possui em relação à senha da credencial: pode ver a parte completa ou apenas uma parte da senha  
* **Visualizar:** mostra se o usuário tem permissão para visualizar a senha  
* **Visualizar Justificativa:** mostra se o usuário precisa digitar um motivo para visualizar a credencial  
* **Visualizar Aprovação:** mostra se o usuário precisa ser aprovado para visualizar a credencial  
* **Sessão:** mostra se o usuário pode executar uma sessão usando a credencial  
* **Sessão Justificativa:** mostra se o usuário precisa digitar um motivo para realizar uma sessão usando a credencial  
* **Sessão Aprovação:** mostra se o usuário precisa ser aprovado para executar uma sessão usando a credencial

:::(info) (info)
Se necessário, tambem é possivel um filtro no relatório usando os filtro avançados utilizando os seguintes itens:

- `ID` ou Nome do usuario
- `Username`
- Nome Dispositivo
- `Tags` do dispositivo
- `ID` ou `Username` da credencial
- `Tags` da credencial
- `Chave SSH`
- `ID` ou `Nome` do Grupo de acesso
:::

## **Custódia da senha**

Este relatório mostra todas as senhas que estão sob custódia de qualquer usuário registrado no sistema Segura. Esse documento é relevante para a comparação entre os privilégios de acesso dos usuários definidos pela *policy* da empresa e os privilégios e acessos atuais concedidos.

O **Relatório de custódia de senha** imprimirá as seguintes informações:

* **Usuário:** é o nome do usuário que será detalhado  
* **Credencial:** é a credencial sob custódia do usuário  
* **Dispositivo:** ao qual a credencial está sob custódia  
* **Início da custódia:** é a data em que o usuário assume a custódia da credencial  
* **Última consulta:** é a data da última vez que o usuário visualiza a senha  
* **Fim da custódia:** é a data em que o usuário perdeu a custódia pela credencial  
* **Duração:** é o período em que a credencial estava sob custódia do usuário

### **Dashboard da custódia da senha**

Também é possível ter uma visão geral dos usuários e o número de Custódia concedidos no menu dashboard, para visualizar o acesso a este painel: **Dashboard ➔ PAM Core ➔ Custódia**.

## **Consultas de senha**

Este relatório mostra todas as tentativas de visualizar as senhas dos usuários registrados no sistema Segura. Esse documento é relevante para a comparação entre os privilégios de acesso dos usuários definidos pela *política* da empresa e os privilégios e acessos atuais concedidos.

O **Relatório de consulta de senha** imprimirá as seguintes informações:

* **Nome:** é o nome do usuário que será detalhado  
* **Usuário:** é o nome de usuário usado para acessar o Segura  
* **Departamento:** é o departamento da empresa ao qual o usuário pertence  
* **Status:** mostra se a visualização de senha está ativada para o usuário  
* **Total:** O número de visualizações realizadas pelo usuário.

Também é possível ver mais detalhes sobre as consultas clicando no ícone de ação do registro.

## **Sessões remotas**

Este relatório mostra o histórico de sessões remotas realizadas por usuários registrados no sistema Segura. Esse documento é relevante para a comparação entre os privilégios de acesso dos usuários para executar sessões remotas definidas pela *política* da empresa e os privilégios e acessos atuais concedidos.

O **Relatório de sessões remotas** imprimirá as seguintes informações:

* **Usuário:** é o nome do usuário que será detalhado  
* **Credencial:** usada pelo usuário para executar o acesso remoto  
* **Dispositivo:** que foi acessado e a porta usada  
* **ID da sessão:** é o código de identificação da sessão específica  
* **Iniciar:** é o dia e a hora em que a sessão começou  
* **Final:** é o dia e a hora em que a sessão terminou  
* **Duração:** o tempo total da sessão  
* **Protocolo:** usado para executar a sessão  
* **Origem:** do acesso realizado

#### **Dashboard de Sessões Remotas**

Também é possível ter uma visão geral das sessões remotas executadas pelos usuários no menu do painel de controle, para ver o acesso a este painel: **Painel ➔ PAM Core  ➔ Sessões remotas**.

## **Acessos negados**

Este relatório mostra o histórico do acesso negado realizado pelos usuários registrados no sistema Segura. Esse documento é importante para a comparação entre os privilégios de acesso dos usuários para executar sessões remotas definidas pela *política* da empresa e os privilégios e acessos atuais concedidos.

O **Relatório de acesso negado** imprimirá as seguintes informações:

* **Operação:** é a ação que o usuário tenta executar  
* **Usuário:** é o nome do usuário que tentou operar a ação  
* **Credencial:** que o usuário tenta usar para executar o acesso  
* **Dispositivo:** que o usuário tenta acessar  
* **Solicitação de acesso:** é o dia em que o usuário solicitou o acesso  
* **Rejeição de acesso:** é o dia em que o aprovador negou o acesso  
* **Aprovadores:** são os usuários selecionados para aprovar as solicitações de acesso deste usuário

Também é possível ver mais detalhes sobre o acesso negado, clicando no ícone de ação do registro

