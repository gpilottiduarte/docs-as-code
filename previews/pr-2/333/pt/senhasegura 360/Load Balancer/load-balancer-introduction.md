O senhasegura tem um balanceador de carga, desenvolvido pela mesma equipe senhasegura, para fazer a interface entre todas as instâncias da aplicação que se encontram em esquema de cluster. O **senhasegura Load Balancer** é uma solução pronta para ser implantada e também uma solução pronta para uso, configurada para dar o melhor desempenho sobre as funcionalidades do senhasegura.

Dentro das especificações apresentadas na implementação, pelo fabricante, o balanceador de carga será capaz de atender todas as requisições/tráfego oriundas do senhasegura.

## Informações técnicas

### **Requisitos mínimos:**

* 4GB de RAM.
* 2 vCPUs (são recomendadas 4 vCPUs).
* 40GB vHD.

Ele utilizará o mesmo certificado SSL instalado nas instâncias senhasegura. Não há necessidade de instalar um certificado SSL específico para o balanceador de carga.

Por ser um produto feito sob medida para balancear as requisições ao senhasegura, o **senhasegura Load Balancer** tem uma otimização muito específica e não deve ser usado para balancear outras aplicações. Portanto, não oferecemos a opção de alterar o método de balanceamento e/ou métodos de monitoramento para o cliente. Seu uso é através do algoritmo **least connection** para o modo de balanceamento.

 

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image(373)(3).png)

Exemplo da arquitetura do Load Balancer 




> INFOAtente\-se de que o senhasegura Load Balancer trabalha com Terminal, RDP e Web proxies.

Usando o **senhasegura Load Balancer**, você também pode decidir qual serviço deve ser balanceado. Uma empresa que usa mais conexões SSH do que os demais protocolos proxies, pode isolar instâncias dedicadas para um melhor desempenho.

