# DevOps

### **Informações de containers**

Para visualizar as informações dos containers encontrados nos Discoveries, vá para **Discovery ➔ Devops ➔ Containers.**

Nesta tela, você pode visualizar os containers encontrados com informações como código, imagem, criação, estado, IP e host do container.

### **Playbooks Ansible**

Para visualizar informações dos playbooks encontrados, vá para **Discovery ➔ Devops ➔ Ansible ➔ Playbooks**.

Nesta tela, você pode visualizar os playbooks encontrados. Você ainda pode visualizar as tarefas de um playbook, clicando no botão ***Tarefas,*** ou seus hosts, clicando no botão ***Hosts***.

### **Papéis Ansible**

Para ver informações dos papéis encontrados, vá para **Discovery ➔ Devops ➔ Ansible ➔ Roles.**

### **Jobs Jenkins**

Para ver informações dos jobs encontrados, vá para **Discovery ➔ Devops ➔ Jenkins ➔ Jobs.**

### **Nós Jenkins**

Para ver informações dos nós encontrados, vá para **Discovery ➔ Devops ➔ Jenkins ➔ Nodes.**

### **Usuários Jenkins**

Para ver informações dos usuários encontrados, vá para **Discovery ➔ Devops ➔ Jenkins ➔ Users.**

### **Segredos Kubernetes** 

Para ver informações dos nós encontrados, vá para **Discovery ➔ Devops ➔ Kubernetes ➔ Secrets.**
 
## **Windows services**

O Segura realiza um discovery por meio de uma verificação de credenciais, procurando por  credenciais que estão sendo usadas em algum tipo de serviço do Windows.

Se você já realizou uma pesquisa e deseja verificar quais credenciais estão associadas a algum serviço encontrado, acesse o menu: **Discovery ➔ Discovery ➔ Services.**  Um relatório com as credenciais encontradas será exibido. 

Contudo, se você ainda não configurou a pesquisa para encontrar essas credenciais, siga as instruções:

1. Crie uma nova pesquisa através do menu: **Discovery ➔ Settings ➔ Discovery** ou altere uma já criada.   
:::(Warning) (**Atenção**)
Para configurar a pesquisa por credenciais usadas pelo serviço, é necessário usar a busca por ***Domínio***.    
:::
   
2. Vá para a guia ***Searches*** e selecione a opção ***Identify Windows accounts associated with a service.***  
3. Se você ainda não configurou um Windows plugin, vá para a guia ***Plugins*** e adicione uma porta e um Windows plugin para ser usado nesse scan.  
4. Finalmente, clique em ***Save.***

Após o fim da verificação, você pode checar as credenciais encontradas no relatório de serviço. (**Discovery ➔ Discovery ➔ Services**).
:::(Warning) (**Atenção**)
Lembre-se de que as credenciais estão associadas a um serviço ***Windows***, se a sua verificação se concentrar em diferentes dispositivos do sistema, a pesquisa não obterá resultados. 
:::



