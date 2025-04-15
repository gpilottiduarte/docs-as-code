# Alta Disponibilidade e Recuperação de Desastres

A arquitetura do Segura é projetada para garantir Alta Disponibilidade (HA) e Recuperação de Desastres (DR) eficazes, em caso de falhas. 

:::(info) (Info)
Você pode implementar o Segura das seguintes formas:

* [PAM Crypto Appliance](/v4/docs/pt/crypto-appliance-overview) em data centers locais.
* [Virtual Appliances](/v4/docs/pt/installation-virtual-appliances) em data centers locais.
* [Virtual Appliances](/v4/docs/pt/installation-virtual-appliances) em um Provedor de Serviços em Nuvem (CSP).

:::

## Princípios da Alta Disponibilidade

* **Eliminação de Pontos Únicos de Falha (SPOF)**: redundâncias são incorporadas para manter a operação contínua mesmo em caso de falha de um componente.
* **Cruzamento confiável**: sistemas redundantes devem ser capazes de mudar entre componentes sem perda de dados ou impacto no desempenho.
* **Detecção de falha em tempo real**: mesmo com redundâncias, é essencial detectar falhas assim que ocorrerem.

## Tecnologias de replicação

| Camada                        | Descrição                                                                                                             |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| **Replicação nativa do banco de dados** | O Segura usa o [MariaDB Galera Cluste](https://mariadb.com/kb/en/what-is-mariadb-galera-cluster/){target=`_blank`}r para replicar bancos de dados e oferecer suporte a redes de alta latência (até 30ms de latência). |
| **Replicação de arquivos do sistema utilizando Rsync** | Todas as instâncias do Segura sincronizam seus arquivos com os demais membros do cluster.                      |
| **Replicação da camada do kernel*** | O modelo de implantação PAM Crypto Appliance também inclui um DRBD.                                                   |

*Somente disponível para o PAM Crypto Appliance

## Arquiteturas


Existem quatro cenários para a arquitetura de Recuperação de Desastres. Você pode ter dois Virtual Appliances, dois PAM Crypto Appliances (com DRBD), uma arquitetura híbrida ou *on-premise*. Você encontra mais informações sobre esses cenários na tabela abaixo.

| Cenário                                               | Descrição                                                                                                                                     |
|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| **Dois Virtual Appliances**                              | O Failover é executado manualmente, com replicação síncrona automática. Em caso de falha, o ambiente de backup fornece acesso somente de leitura até a conclusão do failover.  |
| **Dois PAM Crypto Appliances (com uso de DRBD)**           | Os dispositivos se conectam via **cabo crossover diretamente conectado entre um crypto appliance, sem ativos de rede intermediando a conexão**, e usam uma conexão heartbeat para detectar falhas. Quando necessário, o dispositivo em espera assume a função principal automaticamente em até 120 segundos. Se o PAM Crypto Appliance for desligado devido a uma falha temporária, ele restaurará a função de dispositivo primário. No entanto, se o problema for causado por hardware defeituoso, você terá que reatribuir o dispositivo principal manualmente. |
| **Híbrido: PAM Crypto Appliance e Virtual Appliance combinados** | O Failover é executado manualmente, com replicação síncrona automática. Em caso de falha, o ambiente de backup fornece acesso somente de leitura até a conclusão do failover.                   |
| **Instâncias *on-premise* e em nuvem combinadas**              | O Failover é executado manualmente, com replicação síncrona automática. Em caso de falha, o ambiente de backup fornece acesso somente de leitura até a conclusão do failover.                   |

:::(Error) (Aviso Importante sobre Requisitos de Hardware para HA)
Ao implantar o Segura em um ambiente de cluster, especialmente para configurações de alta disponibilidade (HA), é crucial garantir que **todas as instâncias (membros) no cluster tenham especificações de hardware idênticas**.

**Configurações de hardware incompatíveis entre os membros do cluster podem levar a inconsistências de desempenho, problemas de confiabilidade e possíveis falhas no sistema.**

Para referência, por favor, consulte nosso artigo sobre [Requisitos Mínimos de Hardware](#) para garantir que cada instância atenda aos padrões necessários.
:::

## Cenários
:::(info) (Info)
Na descrição dos cenários, cada membro representa uma instância no Segura.
:::
### Dois membros sem um árbitro

| Cenário | Tipo                        | Status da aplicação             | Failover | Ressincronização automática |
|---------|-----------------------------|-----------------------------------|----------|-----------------------------|
| **1**       | Membro 2 falha.              | Disponível (Membro 1).            | Automático. | Disponível.               |
| **2**       | Membro 1 falha.             | Disponível (Membro 2).            | Manual.   | Disponível.                |
| **3**       | Falha de conexão (entre sites). | Disponível (Membro 1).          | Automático. | Disponível                |
| **4**       | Membros 1 e 2 falham.         | Não disponível.                   | Não disponível. | Não disponível.       |

#### Exemplos
**Cenário 1: Membro 2 falha**

* **Status da aplicação**: a aplicação continua a ser executada no primeiro membro.
* **Failover**: automático.
* **Recuperação de membros indisponíveis**: realizada de forma automática quando a instância é reinicializada ou a conectividade  é recuperada.

**Cenário 2: Membro 1 falha**

* **Status da aplicação**: a aplicação continua a ser executada no segundo membro.
* **Failover**: manual.
* **Recuperação de membros indisponíveis**: realizada de forma automática quando a instância é reinicializada ou a conectividade  é recuperada.


**Cenário 3: Falha de conexão (entre sites)**

* **Status da aplicação**: a aplicação continua a ser executada no primeiro membro.
* **Failover**: automático.
* **Recuperação de membros indisponíveis**: realizada de forma automática quando a instância recupera a conectividade.

**Cenário 4: Falha nos membros 1 e 2**

* **Status da aplicação**: aplicação indisponível.
* **Failover**: não disponível.
* **Recuperação de falha de membro**: entre em contato com a equipe de suporte do Segura para restaurar os membros.
* Se todos os membros falharem simultaneamente, use a chave mestra e faça o procedimento de backup de credenciais.

### Dois membros com um árbitro

| Cenário | Tipo                                   | Status da aplicação       | Failover   | Ressincronização automática |
|---------|----------------------------------------|---------------------------|------------|-----------------------------|
| **1**       | Membro 2 falha.                        | Disponível (membro 1).     | Automático. | Disponível.                 |
| **2**       | Membro 1 falha.                        | Disponível (membro 2).     | Automático. | Disponível.                 |
| **3**       | Falha de conexão entre sites com membros.| Disponível no membro com conectividade com o árbitro.| Automático.| Disponível.|
| **4**       | Os membros 1 e 2 falham.               | Não disponível.            | Não disponível. | Não disponível.           |
| **5**       | Falha no árbitro.                      | Disponível (ambos membros).| Automático. | Disponível.                 |
| **6**       | Falha no árbitro e em qualquer outro membro.| Disponível no membro funcional.| Manual. | Disponível no membro funcional. |

#### Exemplos
**Cenário 1: Membro 2 falha**

* **Status da aplicação**: a aplicação continua a ser executada no primeiro membro.
* **Failover**: automático.
* **Recuperação de falha de membro**: realizada de forma automática quando a instância é reinicializada ou a conectividade é recuperada.

**Cenário 2: Membro 1 falha**

* **Status da aplicação**: a aplicação continua a ser executada no segundo membro.
* **Failover**: automático.
* **Recuperação de falha de membro**: realizada de forma automática quando a instância é reinicializada ou a conectividade é recuperada.

**Cenário 3: Falha de conexão (entre sites que tem os membros)**


* **Status da aplicação**: a aplicação continua a ser executada no membro que tem conectividade com o árbitro.
* **Failover**: automático.
* **Recuperação de falha de membro**: realizada de forma automática quando a instância é reinicializada ou a conectividade  é recuperada.

**Cenário 4: Membros 1 e 2 falham**

* **Status da aplicação**: aplicação indisponível. 
* **Failover**: não disponível.
* **Recuperação de falha de membro**: entre em contato com a equipe de suporte do Segura para restaurar os membros.
* Se todos os membros falharem simultaneamente, use a chave mestra e o procedimento de backup de credencial.

**Cenário 5: Falha no árbitro**

* **Status da aplicação**: a aplicação fica disponível para ambos os membros do Segura.
* **Failover**: automático.
* **Recuperação de falha de membro**: realizada de forma automática quando a instância é reinicializada ou a conectividade é recuperada.

**Cenário 6 - Falha no árbitro e em qualquer outro membro**

* **Status da aplicação**: a aplicação continua a ser executada no membro funcional.
* **Failover**: manual.
* **Recuperação de falha de membro**: realizada de forma automática quando a instância é reinicializada ou a conectividade é recuperada.
* Se todos os membros falharem simultaneamente, use a chave mestra e o procedimento de backup de credencial.

### Três membros

| Cenário | Tipo                               | Status da aplicação              | Failover                     | Ressincronização automática   |
|---------|------------------------------------|------------------------------------|------------------------------|-------------------------------|
| **1**       | Membro 2 falha                    | Disponível (Membros 1 e 3)         | Automático                   | Disponível                    |
| **2**       | Membro 1 falha                    | Disponível (Membros 2 e 3)         | Automático                   | Disponível                    |
| **3**       | Membro 3 falha                    | Disponível (Membros 1 e 2)         | Automático                   | Disponível                    |
| **4**       | Falha de conexão com um membro    | Disponível (todos os outros membros)| Automático                   | Disponível                    |
| **5**       | Falha de conexão (entre todos os membros)| Disponível (membro 1)        | Manual                       | Não disponível               |
| **6**       | Todos os membros falham           | Não disponível                    | Não disponível               | Não disponível               |

#### Exemplos

**Cenário 1 - Membro 2 falha**

* **Status da aplicação**: a aplicação continua a ser executada nos membros 1 e 3.
* **Failover**: automático
* **Recuperação de falha de membro**: realizada de forma automática quando a instância é reinicializada ou a conectividade é recuperada.

**Cenário 2 - Membro 1 falha**

* **Status da aplicação**: a aplicação continua a ser executada nos membros 2 e 3.
* **Failover**: automático
* **Recuperação de falha de membro**: realizada de forma automática quando a instância é reinicializada ou a conectividade é recuperada.

**Cenário 3 - Membro 3 falha**

* **Status da aplicação**: a aplicação continua a ser executada nos membros 1 e 2
* **Failover**: automático
* **Recuperação de falha de membro**: realizada de forma automática quando a instância é reinicializada ou a conectividade é recuperada.

**Cenário 4 - Falha de conexão com um membro**

* **Status da aplicação**: a aplicação continua a ser executada nos membros ainda conectados ao cluster.
* **Failover**: automático.
* **Recuperação de falha de membro**: realizada de forma automática quando a instância é reinicializada ou a conectividade é recuperada.

**Cenário 5 - Falha na conexão (entre todos os membros)**

* **Status da aplicação**: a aplicação continua a ser executada no primeiro membro.
* **Failover**: manual 
* **Recuperação de falha de membro**: realizada de forma automática quando a instância é reinicializada ou a conectividade é recuperada.

**Cenário 6 - Falha de todos os membros**

* **Status da aplicação**: aplicação indisponível.
* **Failover**: não disponível.
* **Recuperação de falha de membro**: não disponível. Entre em contato com a equipe de suporte do Segura para restaurar esses membros.
* Se todos os membros falharem simultaneamente, use a chave mestra e o procedimento de backup de credencial.

## Recuperação de Desastres 

A Recuperação de Desastres (DR) é um conjunto estruturado de políticas e procedimentos para recuperar dados ou restaurar a infraestrutura do Segura em situações de desastres naturais ou lógicos. A DR oferece aos clientes a capacidade de reconfigurar os recursos do Segura utilizando um ambiente alternativo quando a recuperação do ambiente primário for impraticável.

A integridade dos dados durante uma DR é diretamente impactada pela qualidade e velocidade da conexão, bem como pela quantidade de dados presente no cluster. Se qualquer uma dessas variáveis não atender aos requisitos específicos, pode resultar em perda de dados, desativação do ambiente de produção e ativação do ambiente de DR.


::: (error) (Importante)
Em casos de falhas causadas por problemas de hardware, é necessária uma intervenção manual para reiniciar e recuperar o sistema. 
:::
## Recursos de *hot-spare*
As instâncias do Segura são equipadas com recursos de *hot-spare* para manter a alta disponibilidade do sistema. Estes recursos incluem monitoramento contínuo e URLs administrativas para supervisionar o status operacional de cada instância. 

O uso desses recursos de *hot-spare* proporciona uma capacidade automática de alternância entre instâncias, garantindo que, em caso de falha, as cargas de trabalho sejam redirecionadas eficientemente para instâncias operacionais

## Balanceador de carga interno
Ao implementar o Segura, você tem a flexibilidade de escolher entre o uso de um software do tipo balanceador de carga proprietário ou integrar o balanceador de carga nativo do Segura ao seu ambiente em cluster.

