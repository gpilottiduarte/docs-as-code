senhasegura has a self\-made load balancer to interface all senhasegura instances running into cluster schema. The **senhasegura Load Balancer** is a ready\-to\-deploy and ready\-to\-use solution configured to give the best performance over senhasegura functionalities.

The Load Balacer will be capable of handling all requests/traffic from senhasegura whitin the specifications provided by the manufacturer in its implementation.

## Technical information

### Minimum requirements

* 4GB RAM.
* 2 vCPUs (4 vCPUs recommended).
* 40GB vHD.
It’ll use the same SSL certificate installed in senhasegura instances. There isn’t a need to install a particular SSL certificate for the load balancer.

As it is a tailor\-made product for balancing the senhasegura, the **senhasegura Load Balancer** has a very specific optimization and should not be used to balance other applications. Therefore, we do not offer the option of changing the customer's balancing and/or monitoring methods. It uses the **least connection** algorithm for balancing mode.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image(373)(1).png)

Example of the Load Balancer architecture. 




> INFONote that senhasegura Load Balancer works with Terminal, Web and RDP proxies.

Using **senhasegura Load Balancer**, you can also decide which service should be balanced. A company that uses SSH connections more than the other proxies can isolate dedicated instances for better performance.

