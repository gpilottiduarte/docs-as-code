# About the Application dashboard

The Application dashboard is accessible through **Grid Menu > DevOps Secret Manager > Dashboard > Application.**

:::(info) (Info)
The dashboard displays data relating to the selected application. To choose the application you want, click on the drop-down menu at the top of the page and select the option corresponding to the application's name registered in the DSM. It is also possible to filter by the date and creation of the entity. To do this, click on the drop-down menu next to the calendar icon and set the desired period for filtering the information.
:::

This dashboard will have the following elements:

* **Authorizations**: tells you how many authorizations per application are registered for the selected application. Clicking on the card takes you to the **Authorizations** per application window. For more information, access the [Authorizations per application](/v3-33/docs/how-to-manage-authorizations-per-application-in-devops-secret-manager) documentation.
* **Environments**: tells you which environments are part of that application. Clicking on the card takes you to the **Environments** window. The **Environments** window lists the environments registered in DSM. You can also register a new environment from this window. For more information, access the [Environments](/v3-33/docs/how-to-manage-environments) documentation.
* **Systems**: informs you of the systems that are part of that application. Clicking on the card takes you to the **Systems** window. You can also register a new system from this window. For more information, access the [Systems](/v3-33/docs/how-to-manage-systems) documentation.
* **Secrets**: tells you how many secrets are registered in the DSM and linked to the authorization of the selected application. Clicking on the card takes you to the **Secrets** window. For more information, see the [Secrets](/v3-33/docs/how-to-manage-secrets) documentation.
* **Credentials**: informs you of the credentials that are linked to the secrets, which are linked to the authorizations that are linked to the application. Clicking on the card takes you to the **Credentials** window. You can register a new credential from this window.
* **Access keys**: informs you of the access keys linked to the application. Clicking on the card takes you to the Credentials window.

In addition to these information cards, you have several graphs to follow the behavior of the DSM. These are

* **Authorizations by environment**: visually displays the authorizations by environment related to that application. You can view more information and settings by clicking on the graphic elements.
* **Authorizations by system:** visually displays the authorizations by system related to that application. You can view more information and settings by clicking on the graphic elements.
* **Authorizations per hour (last 24 hours)**: visually displays the number of authorizations per hour in the DSM for that application.
* **Secrets queries per day:** visually displays the number of secrets queries, per day, for that application.
* **Secrets query per week:** visually displays the number of weekly queries for secrets related to that application.

On the main screen, on the left-hand side, you have the following information about the application being filtered:

* **Application name:** inform the name of the application being consulted.
* **Line of business:** inform the line of business to which the application is linked.
* **Application type:** inform us of the type of application to which the application is linked.
* **Automatic secrets provisioning:** inform whether or not the application has automatic secrets provisioning enabled. It can take on the values **Enabled** or **Disabled**.
* **Registration date:** date and time of registration of the application being consulted.

---

Still have questions? Contact the [senhasegura Community](https://community.senhasegura.io/).