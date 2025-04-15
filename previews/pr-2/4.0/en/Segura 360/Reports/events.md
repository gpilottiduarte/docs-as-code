# Events

Segura executes, automatically or by a user, events such as password change, backups, insertion of new information, and more. Those events are relevant to be tracked to what was executed by the system because those events are configured by the administrator, it is important to know if the system settings expected by the company's ***security policy*** are being achieved.

The events report can print data about how the system is working by the settings. Accessing the menu **Reports ➔ Events**.

## **Password operation**

This report shows all the password operations performed by the system. This report is important to know how the system executes the operations related to passwords set by the  
administrator. The password's operations should achieve the company's ***password policy*** and security expectations.

The ***Password operation report*** will print the following information:

* ***Origin IP:*** is the IP used to access the system;  
* ***Device:*** where the password operation was performed;  
* ***Credential type:*** of the password which admitted the operation;  
* ***Status:*** related to how the operation finished;  
* ***Operation:*** the password admited;  
* ***Schedule date:*** is the time and date the operation was scheduled to be performed;  
* ***Execution date:*** is the time and date the operation was executed;  
* ***Last attempt:*** is the time and date the system tried to execute the operation;  
* ***Attempts:*** is the number of the times the system tried to execute the operation;  
* ***Requester:*** is the name of the user, task or set that request the operation for the system;

It's also possible to restart an operation that finished on error or need to be performed again clicking on the action icon of the register ***restart execution*** or view the attempt details clicking on ***view attempts***.

## **Password view**

This report shows all the password view Segura intercede for users requests. This report is important to present all the access flow the system supports and the access type configured by the administrator, this can be useful to compare the access flow and system access settings with the company's ***access policy*** and security expectations.

The ***Password view report*** will print the following information:

* ***Date:*** the view as performed;  
* ***Operation:*** the system intercede;  
* ***User:*** that requested the access;  
* ***IP:*** used to access the system;  
* ***Credential type:*** of the password which was viewed;  
* ***Device:*** is the asset the password viewed gave access;  
* ***Username:*** is the user the password viewed belongs to;  
* ***Reason:*** is the type of justification the user gives to view the password;  
* ***Governance ID:*** it is the code used to track the view in Segura ;  
* ***Reason:*** is the justification text the user gives to perform the view;  
* ***Message:*** is what the system prints to the requester related to the permissions and more;  
* ***Origin:*** indicate the platform used to access;

It's also possible to see more details about the views, by clicking on the action icon of the register.

### **Password view Dashboard**

It is also possible to have a general view of the ***Password view*** performed by the users on the dashboard menu, to view this board access: **Dashboard ➔ PAM Core ➔ Behavior**.

## **Performed backups**

This report shows all the backups performed by Segura request to be exported. This report is important to prove the backup is being produced correctly and in the time and date set by the companies' ***backup policy*** and the security expectations from the companies and standards.

The ***Password view report*** will print the following information:

* ***Type:*** of backup. Indicates if the data recover the full data or partial;  
* ***Reason:*** how the backup was performed ;  
* ***Start:*** is the day and time the data started to be transferred to backup;  
* ***End:*** is the day and time the data stopped to be transferred to backup;  
* ***Requested:*** by is the name of the user who requested to export the backup;

It's also possible to download the backup performed, clicking on the action icon of the register.

## **Audit tracking**

This report summarizes all the trails Segura registers for the actions performed in the system. This is an easy and fast consult report to view the trail records.

The ***Audit tracking report*** will print the following information:

* ***Operation:*** the system intercedes;  
* ***Entity:*** the operation was performed;  
* ***Entity name:*** the operation was performed;  
* ***Origin:*** is the Segura module used to perform the change;  
* ***User:*** is the name of the user that will be detailed;  
* ***Username:*** is the username used to access Segura ;  
* ***IP:*** of the user device to perform the change;  
* ***Change:*** Indicates if the operation was a change or not;  
* ***Date/Time:*** of the trail was registered;

