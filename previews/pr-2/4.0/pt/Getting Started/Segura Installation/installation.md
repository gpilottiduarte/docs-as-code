# Instalação

Neste artigo você encontra um guia com os primeiros passos para começar a utilizar o Segura.

## Requisitos

* **Defina sua arquitetura**: use os artigos de [Alta Disponibilidade (HA) e Recuperação de Desastres (DR)](/v4/docs/pt/installation-architecture-high-availability-and-disaster-recovery) e [Arquiteturas Homologadas](/v4/docs/pt/installation-supported-architectures) para escolher a arquitetura mais adequada para a implantação.
* **Regras de firewall**: crie as [regras de firewall](/v4/docs/pt/installation-firewall-rules) necessárias com base na arquitetura selecionada.

* * *

## Primeiros passos
Após cumprir os requisitos acima, você pode iniciar o processo de instalação seguindo estes cinco passos:


### Passo 1: Escolha o tipo de appliance

Inicie o processo de instalação selecionando o tipo de appliance que melhor atenda às suas necessidades. O Segura oferece duas opções:

* **Virtual Appliance**: se você escolher o Virtual Appliance, faça o [download da versão apropriada](/v4/docs/pt/installation-virtual-appliances) para a sua ferramenta de virtualização ou provedor de nuvem. 
* **Crypto Appliance (Físico)**: para o appliance físico, consulte os artigos [Primeiros passos](/v4/docs/pt/installation-how-to-configure-the-crypto-appliance-first-steps) e [Configurações do Crypto Appliance](/v4/docs/pt/installation-how-to-configure-addressing-and-snmp-service) para instruções sobre o processo de configuração.


### Passo 2: Configure o Segura via CLI

Nesta etapa, você deve [configurar a rede e o hostname](/v4/docs/pt/installation-how-to-set-up-the-network-and-change-the-hostname) utilizando o [usuário Administrador SSH](/v4/docs/pt/installation-admin-users). Se necessário, siga as instruções do artigo [Como acessar uma sessão de administração SSH na plataforma Segura](/v4/docs/pt/administration-ssh-access).



### Passo 3: Configure o Segura Web

Utilizando o usuário [Administrador Web](/v4/docs/pt/installation-admin-users), conclua as seguintes tarefas:

1. [Ative a licença do Segura](/v4/docs/pt/installation-how-to-activate-the-Segura-license).
2. Aceite o [EULA](/v4/docs/pt/installation-eula).
3. Realize os passos do [Wizard](/v4/docs/pt/orbit-web-how-to-use-the-wizard).
4. Estabeleça procedimentos de [Backup](/v4/docs/pt/installation-backup-overview).
5. [Cerimônia da Chave Mestra](/v4/docs/pt/how-to-manage-the-master-key).




### Passo 4: Atualize o Segura
Para instruções sobre como atualizar o Segura, consulte o artigo [Atualizar o Segura](/v4/docs/pt/installation-update-Segura).

### Passo 5: Replicação de dados (aplicável a dois ou mais membros)

:::(Info) (Info)
Ignore esta etapa se estiver usando uma arquitetura de somente um membro.
:::

Para implementar a replicação de dados, você deve [configurar um cluster](/v4/docs/pt/installation-data-replication-how-to-create-a-cluster). É recomendável que você teste a replicação com um [teste de Recuperação de Desastres](/v4/docs/pt/installation-how-to-perform-a-disaster-recovery-test) (Ativo-Passivo).

:::(Error) (Aviso Importante sobre Requisitos de Hardware para HA)
Ao implantar o Segura em um ambiente de cluster, especialmente para configurações de alta disponibilidade (HA), é crucial garantir que **todas as instâncias (membros) no cluster tenham especificações de hardware idênticas**.

**Configurações de hardware incompatíveis entre os membros do cluster podem levar a inconsistências de desempenho e problemas de confiabilidade.**

Para referência, por favor, consulte nosso artigo sobre [Requisitos Mínimos de Hardware](#) para garantir que cada instância atenda aos padrões necessários.
:::

* * *


Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/?utm_source=HelpCenter&utm_medium=Menu&utm_campaign=MenuLink).

* * *
## Próximos passos 

- [Configurar conta de e-mail](/v4/docs/pt/how-to-manage-smtp-settings).
- [Gestão de usuários](/v4/docs/pt/administration-user-management).
