# How to connect an Oracle Cloud account

In this document, you will learn how to connect an Oracle Cloud (OCI) compartment to the **Cloud Entitlements**, including all users and groups under the compartment.

## Requirements

* An OCI account with permission to generate API keys.  
* A group with policies with the following statements:  
    * `Allow group <group_name> to read users in tenancy`  
    * `Allow group <group_name> to read groups in tenancy`  
    * `Allow group <group_name> to read policies in tenancy`
    
    For more information on creating a group with policies, see [Creating a Group](https://docs.oracle.com/en-us/iaas/Content/Identity/groups/create-groups.htm){target=`_blank`} and [Creating a Policy](https://docs.oracle.com/en-us/iaas/Content/Identity/policymgmt/managingpolicies_topic-To_create_a_policy.htm){target=`_blank`}.

## Generate an API key for a user in Oracle Cloud

1. Access your Oracle Cloud Infrastructure account.  
2. Click the **Profile icon** > **My profile**.  
3. In **Resources**, click **API keys**.  
4. Click **Add API key**.  
5. Select **Generate API key pair**.  
6. Click **Download private key**, and click **Add**.  
7. Copy the contents of the file preview. It should be in the following format:

```
[DEFAULT]
user=<user_ID>
fingerprint=<RSA_fingerprint>
tenancy=<tenancy_ID>
region=<OCI_region>
key_file=<path_to_your_private_keyfile>
```

## Connect an OCI organization

1. Go to **Cloud Entitlements**.  
2. In the left menu, click **Setup**, and select **Oracle Cloud (OCI)**.  
3. Click **\+ Connect**.  
4. Fill in the following fields according to the configuration file:  
   1. **Name\***: enter a name.  
   2. **User\***: enter the value of user from the configuration file.  
   3. **Region\***: select the region shown in the configuration file.  
   4. **Fingerprint\***: enter the value of fingerprint from the configuration file.  
   5. **Compartment ID\***: enter the value of tenancy from the configuration file.  
   6. **Tenancy\***: enter the value of tenancy from the configuration file.  
   7. **Passkey phrase**: if set during the creation of the API key, add the passphrase for the .pem file.  
   8. **Tags**: enter tags to identify the organization.  
5. Attach the private key file you downloaded previously.  
6. Click **Save**.

If connected successfully, your OCI compartment will appear in the list of connected accounts. Otherwise, you must restart the process by using another API key in Oracle Cloud. You can't connect a compartment that is already connected to **Cloud Entitlements**.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.com/){target=`_blank`}.
