## Discovering and auditing configuration changes

To discover and audit changes in configurations:

In **Discovery ➔ Settings ➔ Discovery**, when creating or editing a discovery, in the search tab, you can check Identify systems configuration.

Info

We integrate with the following systems:

* Active Directory
* Microsoft Exchange
* SQL Server
* System files
* NetApp
Caution

For this configuration, we will need the Windows or SSH plugin.

After the discovery, the result will be shown in **Discovery ➔ Discovery ➔ Configurations**.

To restore a configuration, you can search in **Discovery ➔ Discovery ➔ Configurations; the action History will show all different configurations, and in the button Restore,** you can recover any previous configuration.

### **Discovering privilege accounts in other applications**

The senhasegura has a series of plugins to automatically find accounts with high privilege in several applications, besides having a flexible platform that allows the inclusion of new third\-party systems, improving the monitoring and identification of possible offenders in your company.

This integration with third\-party applications also allows equipment synchronization with the main CMDB tools on the market, such as ServiceNow and BMC, to synchronize their device base and ensure visibility and control of your entire equipment park. Through our support service, we can expand interaction with third\-party systems according to our customers' needs.

To do so, follow the instructions in the previous sections, create a  Discovery of Application, and fill in the necessary data for the correct discovery.

### **IIS application pool accounts**

senhasegura also searches for local and domain credentials associated with an IIS application pool.

To perform a search for these credentials, follow the instructions:

1. Create an **Application Discovery** through the menu **Discovery ➔ Settings ➔ Discovery.**
2. Once in the form, go to the **Search** tab and select the option **Identify accounts in application pools (IIS)**

Caution

Only Windows plugins may be used on this Discovery
3. Save and start the search.

### **IIS Application Pool Report**

At the end of the search, it will be possible to analyze a report containing the information collected, such as the pool’s name, the username of the credential linked to the pool, the runtime version of the application pool, and other data.

To do this, go to the menu: **Discovery ➔ Discovery ➔ Devices**.

Select the item you want to check in the report and click the action button, **Application pools IIS**.

A report with the collected data will be displayed.

## Secrets Discovery in Kubernetes

### System requirements and version

Ensure that your Kubernetes cluster meets the following requirements:

* **Kubernetes Version:** Ensure that your cluster is running the latest version of Kubernetes. This recommendation is based on the latest versions' constant security updates and functionalities.

### Security and access configurations

For successful execution of Secrets  Discovery in the Kubernetes environment, consider the following security and access configurations:

* **Service accounts:** Configure service accounts properly in Kubernetes. Access tokens must be manually configured for each service account.
* **Permissions and roles:** Ensure service accounts have appropriate permissions to perform necessary operations. This typically involves configuring Roles and RoleBindings and adapting them to the specific requirements of your solution.

### Security recommendations

For robust security during the secret discovery process, consider the following recommendations:

* **Access Tokens:** Avoid using permanent tokens due to potential security risks. Creating tokens with a defined expiration period or adopting alternative authentication methods is recommended.

For more detailed information on configuring service accounts in Kubernetes, including manual token creation, refer to the [official Kubernetes documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/).

## Certificate discovery with NetScaler

Only NetSCaler\-managed application certificates will be digitized, imported, and managed by the password.

For discovery certificates, the fields (name, initial IP, final IP, website, and asset) are fields that, after being filled, return the devices that are in this IP range; you can also filter through the site, and if the devices are discovered, they will be active or inactive.

1. Go to **Discovery ➔ Settings ➔ Discovery**.
2. Choose the **New** option.
3. Choose the T**ype of discovery**.
4. Select**Certificates.**
5. Check the type of search (types of plugins).
6. Fill out the other information with your **Extra Key API Settings** for NetSCaler search.

The discovered and imported certificates can be viewed in the Discovery Module ➔ Discovery ➔ Certificates ➔ Certificates with import errors.

#### View the secrets

Visit the Discovery Menu ➔ DevOps ➔ Kubernetes ➔ Secrets. This screen will display the list of secrets found during the search.

Click the action button for more information about Secret.

