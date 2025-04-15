# Sobre arquitetura e regiões de gateway do Domum

Este documento detalha a arquitetura e as regiões de gateway do **Domum Remote Access**.

## **Arquitetura**

O **Domum Remote Access** fornece acesso seguro para sessões web provenientes de desktops de terceiros. Esses usuários se conectam ao Segura gateway através do protocolo HTTPS, sem a necessidade de VPN e com a garantia do acesso aos recursos internos da organização.

As organizações podem criar, executar e monitorar suas próprias regras de Acesso Remoto Privilegiado, de acordo com as necessidades de suas respectivas operações.

Diferentes organizações podem utilizar o Segura Host para alcançar suas instâncias institucionais sem conflito entre os gateways.

![Connection through the senhasegura Host](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1683814444166%284%29.png){height="" width=""}

Sessões remotas via **Domum**, oferecem recursos de gravação, livestream em tempo real, bloqueio de comandos e análise comportamental.

## **Funcionalidades não suportadas**

O **Domum Remote Access** não oferece suporte para as seguintes funcionalidades:

- **RDP Proxy**: a Área de Trabalho Remota do Windows não é compatível com o **Domum**.  
- **Terminal Proxy**: ferramentas como Putty e outros aplicativos baseados em SSH não são compatíveis com o **Domum**.  
- **Acesso remoto ao Windows via celular**: o **Domum** não suporta acesso remoto a sistemas Windows por meio de telefones celulares.  
- **Database Proxy**: conexões a bancos de dados não são suportados pelo **Domum**.

## **Regiões do Domum Gateway**

O **Domum Remote Access** utiliza a estrutura Google Cloud Platform (GCP). Para uma melhor performance durante o acesso, as instâncias gateway do **Domum** Segura estão alocadas em regiões próximas ao usuário. 

As regiões atuais são: 

- Frankfurt, Alemanha  
- Sydney, Austrália  
- São Paulo, Brasil  
- Damã, Arábia Saudita


