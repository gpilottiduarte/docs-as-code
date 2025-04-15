# How to manage API settings

You can manage DevOps Secret Manager via its API. To use the DSM API, you need to authorize the credentials you want to use. To do so, follow the steps below:

1. On Segura, in the top left corner, click **Grid Menu**, represented by the nine square icon, and select **DevOps Secret Manager**.
2. In the side menu, select **Access Control > API Settings.**
3. The report that will be opened will contain all the credentials and applications with access to the DSM API.

### Credentials tab

1. **A2A Application**:
   1. Click the button represented by the sum symbol next to the word **A2A Application**.
   2. In the drop-down menu, select the application you want to allow access to (note that the applications that appear in this menu are the same applications you have registered in the **A2A** module).
      1. You can only include one application at a time.
      2. To delete an application, click the trash can icon on the left side of the drop-down menu.
2. **Credentials**:
3. Click on the button represented by the sum symbol next to the word **Credentials**.
4. In the **Credentials** modal, select the credentials you want access to the DSM API and click **Add**. To exit the modal, click **Cancel**.

:::(info) (Info)
* PAM credentials created from **A2A applications** defined in the **A2A Application** field will be released for management in the DSM APIs.
* Credentials defined in the **Credentials** field will be released for management in the DSM APIs.

:::

### Cloud credentials tab

1. Click the button represented by the sum symbol next to the word **User/Service Account.**
2. A drop-down menu will appear. Click the drop-down menu and choose the cloud credential you want to allow access to the DSM API.
   1. You can add more than one cloud credential by clicking the button represented by the sum symbol and choosing another credential from the new drop-down menu.
   2. To delete a credential, click the trash can icon on the right side of the chosen cloud credential and select **Yes** in the confirmation modal.
3. Click **Save.**

:::(info) (Info)
Cloud credentials that belong to the users defined in the **User/Service Account** field will be available for management in the DSM APIs
:::

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).