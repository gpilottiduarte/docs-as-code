# Requisitos

Para uma implementação e operação bem-sucedidas do Segura SaaS, é fundamental atender a requisitos técnicos e operacionais específicos. Cumprir esses pré-requisitos garantirá desempenho ótimo, segurança e satisfação dos usuários.

## Requisitos Gerais para Ambos os Modelos SaaS

### Largura de Banda Compatível para Carga de Trabalho

Os clientes que utilizam o **Segura SaaS** devem ter uma largura de banda de rede compatível com suas cargas de trabalho pretendidas. Uma largura de banda adequada é crucial para a transferência eficiente de dados entre o ambiente do cliente e a infraestrutura de hospedagem, minimizando a latência e melhorando a experiência do usuário. Considerações principais incluem:

* O número de usuários simultâneos acessando a plataforma.  
* O volume de dados a serem transferidos.  
* A complexidade das tarefas e operações realizadas.

Recomenda-se realizar uma análise detalhada dos requisitos de largura de banda antes da implantação para evitar tempos de carregamento lentos e garantir uma experiência do usuário contínua.

### **Agente do Network Connector**

A [instalação do agente Network Connector](/v4/docs/pt/network-connector-how-to-install-network-connector) é crucial para o modelo SaaS. Este agente, que será fornecido pela Segura, desempenha um papel fundamental em estabelecer uma conexão segura e confiável com a aplicação hospedada. Considerações importantes incluem:

* **Conexão segura:** garante a integridade e a privacidade dos dados durante a transmissão.  
* **Instalação adequada:** necessária para a segurança da aplicação e operação sem falhas.

---

## Requisitos Opcionais para Servidor de Serviços de Área de Trabalho Remota (RDS)

### Sistema Operacional

Para clientes que optarem por implementar um servidor de Serviço de Área de Trabalho Remota (RDS), os seguintes requisitos de sistema operacional devem ser atendidos:

* O servidor RDS deve operar no Windows Server 2008 R2 ou em uma versão mais recente.

### Licenciamento

Recomenda-se o uso de CALs (Licenças de Acesso para Cliente) do RDS por Usuário para licenças de usuário ou servidor que acessam o RDS.

O licenciamento e a implementação devem estar em conformidade com os **[termos da Microsoft](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/rds-client-access-license)**. Atente-se que a Segura não lida com licenças; os clientes precisam adquirir licenças diretamente da Microsoft.

### Requisitos de Hardware

As especificações de hardware para o servidor RDS podem variar com base em cargas de trabalho específicas e recursos necessários. Para orientações detalhadas sobre as especificações de hardware, consulte a documentação de **[Cargas de Trabalho de Área de Trabalho Remota da Microsoft](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/virtual-machine-recs#workloads).**

Cumprindo esses requisitos, as organizações podem garantir uma operação consistente e eficaz do Segura SaaS, maximizando os benefícios de proteção e gerenciamento de identidade.