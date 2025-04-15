Este artigo detalha a arquitetura e as regiões de gateway do **Domum Remote Access**.



---

## Arquitetura

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1683163505150.png) Comunicação entre usuário remoto e a instância senhasegura através do Domum 

O **Domum Remote Access** fornece acesso seguro para sessões web provenientes de desktops de terceiros. Esses usuários se conectam ao senhasegura gateway através do protocolo HTTPS, sem a necessidade de VPN e com a garantia do acesso aos recursos internos da organização.As organizações podem criar, executar e monitorar suas próprias regras de Acesso Remoto Privilegiado, de acordo com as necessidades de suas respectivas operações.

Diferentes organizações podem utilizar o senhasegura Host para alcançar suas instâncias institucionais sem conflito entre os gateways.

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1683163595030.png)Conexão através do senhasegura Host

  


 

  




---

## Funcionalidades não suportadas

O **Domum Remote Access** não oferece suporte para as seguintes funcionalidades:

* **Proxy RDP**: a Área de Trabalho Remota do Windows não é compatível com o Domum.
* **Proxy SSH**: ferramentas como Putty e outros aplicativos baseados em SSH não são compatíveis com o Domum.
* **Acesso remoto ao Windows via celular**: o Domum não suporta acesso remoto a sistemas Windows por meio de telefones celulares.



---

## Regiões do Domum Gateway

O **Domum Remote Access** utiliza a estrutura Google Cloud Platform (GCP). Para uma melhor performance durante o acesso, as instâncias gateway do Domum senhasegura estão alocadas em regiões próximas ao usuário. 

As regiões atuais são: 

* Frankfurt, Alemanha
* Sydney, Austrália
* São Paulo, Brasil
* Damã, Arábia Saudita

  


