# Executions

Segura features must perform asynchronous tasks into target systems to change passwords, execute privileged tasks, etc. These systems run with standard protocols or interfaces easily managed by Segura over its [Executors](https://portal.document360.io/#executor).

The Segura **Execution** module will centralize all operations targeting execute commands or interactions over remote systems. Keeping all client modules notified, giving a rich audit trail, logs, retrying over failures, and rich data dashboards to increase the client's secure governance.

## How to use Execution Module

* Create or Edit Templates
* Change Credential Password
* Create a Chained Execution

---

## Templates

Templates are the source code of the task to be executed. It has a particular syntax defined by its **Executor** and can be composed using tags representing credentials, SSH Keys, Devices, Certificates, DSM Secrets, or User defined values. During the execution, Segura will replace these tags with the information.

But let's look at the following chart to understand how they interact.

![image-1664916836938.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664916836938%282%29.png){height="" width=""}

As the image demonstrates, the trigger origin will request an asynchronous execution to the **Execution** module. Many modules can order this execution.

The trigger can be a password view, the use of a credential in session, a password expiration, a manual request by an administrator, and other modules' particular triggers.

This request will then create an operation.

In this example, the operation is composed of an **Executor** to perform the interface with the target system, a **Template** containing the interactions that the executor must perform, and a target **Credential** that will be affected by the template commands in the target system.

At the end of the operation, the result will be recorded in Segura. The requesting module will be noticed. From its start to finish, all operation details are recorded in the client module reports and the **Execution** module. SYSLOG/SIEM messages will be echoed, and dashboards will be updated to ensure corporate governance.

---

## Executors plugins

They are engines used to connect and interact with a target system. The system can be an SSH server, a Windows over RPC, a website, a Webserver, a Cloud Provider, or any other interactive system.

---

## Operations

It represents an execution of a template in a target device. When you request a password change, for example, it will create an operation. The operation can have multiple execution attempts.

---

## Chained operation using parent-child credential schema

As an **Administrator**, you can create a chained operation using parent and child credential configuration. With this, the **Execution** module will register and schedule password changes to all child credentials when the parent credential has its password changed successfully.

The child's operation result will not affect the parent's result and others child's operations.

![image-1664916877397.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664916877397%282%29.png){height="" width=""}

---

## When the execution can be triggered

The **Execution** module can be used to:

* Automated password change in **Segura PAM Proxy**  
* When a credential password period expires  
* When a user views a credential password  
* When a session uses a credential  
* When some WebService A2A Application requested  
* When its parent credential started a chained change action  
* Credential activation or inactivation by **Segura PAM Proxy**  
* When a user needs to start a session using a locked credential  
* When a user needs to start a session using a JIT credential  
* When a user finished a session  
* When an automated task needs to start in the **Task Manager Module**  
* When a user triggers the task execution  
* When the task execution schedule triggered the execution  
* When an SSL certificate, managed by **Certificate Manager Module**, needs some action  
* When a certificate request should be released  
* When a certificate needs to be signed into a CA  
* When a certificate needs to be revoked  
* When a certificate needs to be published

Through the **Execution** module, the user will have control over the following actions:

* Request privileged information changing  
* Track privileged information operations  
* Detail attempts to change privileged informations  
* Request a privileged information changing reconciliation  
* Configure privileged information operations automation  
* Know the privileged information changing parameters  
* Create new privileged information changing templates  
* Segregate devices and credentials through profiles  
* Configure threaded automations

The **Execution** module can be divided into three major entities to accomplish its functions.