#### Containers information

To view container information found on Discoveries, go to **Discovery ➔ Devops ➔ Containers** menu.

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1665073222890.png)

Containers report

 In this screen, you can view the found containers and information such as container code, image, creation, state, IP, and host.

#### Ansible Playbooks

To view information from the found playbooks, go to **Discovery ➔ Devops ➔ Ansible ➔ Playbooks**.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1665073241118.png)

Playbooks report

 On this screen, you can view the found playbooks. You can still view the tasks of a playbook by clicking its ***Tasks*** button or its hosts by clicking the ***Hosts*** button.

#### Ansible Roles

To see information from the found roles, go to **Discovery ➔ Devops ➔ Ansible ➔ Roles.**

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1665073276110.png)

Playbooks report

 

#### Jenkins Jobs

To see information from the found jobs, go to **Discovery ➔ Devops ➔ Jenkins ➔ Jobs.**

  


#### Jenkins Nodes

To see information from the found nodes, go to **Discovery ➔ Devops ➔ Jenkins ➔ Nodes.**

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1665073297189.png)Jenkins nodes reports 

 

#### Jenkins Users

To see information from the found users, go to **Discovery ➔ Devops ➔ Jenkins ➔ Users.**

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1665073324635.png)Jenkins users 

 

#### Kubernetes secrets

To see information from the found nodes, go to **Discovery ➔ Devops ➔ Kubernetes ➔ Secrets.**

### Windows services

O senhasegura performs a discovery through a credential scan, looking for those credentials used by some Windows service.

If you have already conducted a search and want to check which credentials are associated with any service found, access the menu: **Discovery ➔ Discovery ➔ Services**. A report with the credentials found will be displayed.

However, if you have not yet configured the search to find these credentials follow the instructions:

  1\. Please create a new search through the menu: **Discovery ➔ Settings ➔ Discovery** or change one already created.

  


CautionTo configure the search for credentials used by the service, it is necessary to use the search by ***Domain***.  


  2\. Continue to the guide ***Searches*** and select the option ***Identify Windows accounts associated with a service.***

  3\. If you have not yet set up a Windows plugin, go to the ***Plugins*** tab and add a port and a Windows plugin for this scan.

  4\. Lastly, click on ***Save.***

After the scan is complete, you can check the credentials found in the service report (**Discovery ➔ Discovery ➔ Services**).

CautionRemember that their credentials are associated with a service ***Windows***; if your scan focuses on different system devices, the search will not get results.

