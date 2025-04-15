# Related Users

Related users allow you to associate a Senhasegura user with multiple credential usernames when using the **[#USERNAME#]** mask in the [access group criteria](/v3-32/docs/user-management-access-groups).

For example, imagine a scenario where a user named **Alice Woods** uses Senhasegura, and her Senhasegura username is **awoods**. However, within the company, the same user has a credential username of ***woods*** for device A and ***alicewoods*** for device B.

Usually, using the mask **[#USERNAME#]** in access groups creates a segregation for credentials that only includes the user's username. By default, this username is **awoods**. If you use the mask **[#USERNAME#]** in access groups, only credentials with the username **awoods** will be displayed.

Using **Related user**, you can create a relation with different names that can be used by the **[#USERNAME#]** mask. For example, if you add a related user called ***alicewoods*** to the user **Alice Woods**, the results of the access group will include credentials with **awoods (default)** and ***alicewoods (related user)***.


* * *

## Creating a New Related User

Follow these steps to create a new related user:

1. Go to **Settings ➔ User Management ➔ Related Users**
2. Click on "+ New"
3. Select the user you want to create a **related user** for
4. Enter the **name** for the related user
5. Set **Enable** to "Yes"
6. Click **Save**

