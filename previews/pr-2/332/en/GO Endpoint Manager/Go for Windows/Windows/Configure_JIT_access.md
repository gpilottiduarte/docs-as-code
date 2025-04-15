**Just\-in\-Time (JIT)**access allows users to elevate privileges as system administrators. So when JIT is active, the user will appear in the Administrators group.

## Configure JIT access

1. Access the senhasegura platform.
2. Go to the menu **GO Endpoint Manager ➔ Settings ➔ Parameters ➔ go Windows**.
3. In the **JIT/Elevation methods** section, check **Enable JIT access?**as **Yes**.
4. Set **Block elevation of privilege** to **No**.



---

## Enable JIT access

1. Access the workstation desktop of the user.
2. Start Core.
3. Enable JIT by clicking the **Just\-In\-Time** button.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1672677173502.png)Activate JIT access 

InfoConfigure the application to record to visualize what happened during the JIT access. In [Recording reports](https://docs.senhasegura.io/v3-32/docs/go-endpoint-manager-windows-record#recording-report), the recording will be available. It may take 10 to 20 minutes after the end of the session to view the recording on the senhasegura platform.



---

## Disable JIT access

1. Access the workstation desktop of the user.
2. Start Core.
3. Turn off JIT by clicking the**Just\-In\-Time** button.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1672677475619.png)Disable JIT access 

ImportantWhen JIT is disabled:

* The user will be logged out.
* The user will be removed from the Administrator's group.
* The machine will restart.


---

## Manage system administrators

To confirm that the user has been added or removed from the **System Administrators** group, follow the steps:

1. Access the workstation desktop of the user.
2. Go to **Computer Management ➔ Local Group Users ➔ Groups ➔ Administrators.**
3. View if the user is part of the admin user group.
