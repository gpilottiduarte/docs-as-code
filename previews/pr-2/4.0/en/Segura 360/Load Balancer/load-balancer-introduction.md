# Introduction Load Balancer

Segura has a self-made load balancer to interface all Segura instances running into cluster schema. The **Segura Load Balancer** is a ready-to-deploy and ready-to-use solution configured to give the best performance over Segura functionalities.

The Load Balacer will be capable of handling all requests/traffic from Segura whitin the specifications provided by the manufacturer in its implementation.

## **Technical information**

### **Minimum requirements**

* 4GB RAM.  
* 2 vCPUs (4 vCPUs recommended).  
* 40GB vHD.

It’ll use the same SSL certificate installed in Segura instances. There isn’t a need to install a particular SSL certificate for the load balancer.

As it is a tailor-made product for balancing the Segura, the **Segura Load Balancer** has a very specific optimization and should not be used to balance other applications. Therefore, we do not offer the option of changing the customer's balancing and/or monitoring methods. It uses the **least connection** algorithm for balancing mode.

![image](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28373%29%281%29.png){height="" width=""}

:::(info) (**Info**)
Note that Segura Load Balancer works with Terminal, Web and RDP proxies.
:::

Using **Segura Load Balancer**, you can also decide which service should be balanced. A company that uses SSH connections more than the other proxies can isolate dedicated instances for better performance.

