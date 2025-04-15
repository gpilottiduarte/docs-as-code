# Mitigating RansomHub ransomware in VMware ESXi environments with Segura

Use case: Mitigating RansomHub ransomware in VMware ESXi environments with Segura.

In this document, we detail the necessary steps to mitigate the threat of RansomHub ransomware on VMware ESXi servers using the Segura **Privileged Access Management (PAM)** tool. Recommended practices for credential management, password rotation, and data backup are presented to ensure the integrity and security of the environment.

### Requirements
- Segura must be installed and operational.
- VMware ESXi must be configured and in production.
- Administrative access granted for all tools and systems involved.

#### **Actor: IT Administrator**

### Step 1: High-privilege credential management
- Stores all administrative credentials of VMware ESXi servers in the tool’s password vault.
- Implements policies to ensure these credentials are effectively managed, regularly updating the passwords.

You can find more details about credential management by accessing the [How to setup up a credential in Segura](/v3-32/docs/pam-how-to-set-up-a-credential-in-Segura) document.

### Step 2: Access requests
- Configures a policy for users to request access to credentials.
- Defines that access to high-privilege credentials is only granted when necessary, reducing the risk of accidental exposure.

You can find more details about access settings by accessing the [How to add an access group](/v3-32/docs/pam-session-how-to-add-an-access-group) document.

### Step 3: Gradual password rotation via SSH
- Automates the password rotation of high-privilege credentials via SSH, using Segura.
- Ensures credentials are regularly updated without manual intervention, enhancing their security and robustness.

You can find more details about changing passwords via SSH by accessing the [How to set up an SSH key](/v3-32/docs/pam-how-to-set-up-an-ssh-key) document.

### Step 4: Management of Master Key holders
- Confirms that the holders of the master key parts are part of the corporation.
- Additionally ensures that the members indeed possess the master key parts, as sometimes the ceremony is conducted but the key is not exported. If not, a new ceremony is conducted to ensure there are no issues in opening the credential backup, if necessary.

You can find more details about the master key ceremony by accessing the [Master key ceremony](/v3-32/docs/master-key-ceremony) document.

### Step 5: Cluster environment considerations
- Verifies that there aren't two instances of Segura hosted on the same VMware ESXi server in cluster environments.
- Distributes the instances of Segura across different servers to increase the environment's resilience, minimizing risks in case of a hacker attack.

You can find more details about cluster management by visiting the [How to manage the cluster](/v3-32/docs/orbit-cli-how-to-manage-the-cluster) document.

### Step 6: Frequent backups
- Configures active and frequent backup routines for Segura.
- Directs these backups to an instance not located on the same VMware ESXi server, ensuring rapid and secure data recovery in case of an incident.

You can find more details on how to configure a backup by accessing the [How to configure backup](/v3-32/docs/orbit-cli-how-to-configure-backup) document.

---
Implementing these practices is essential to reinforce the security and effective management of high-privilege credentials in your VMware ESXi environments, using Segura optimally.
