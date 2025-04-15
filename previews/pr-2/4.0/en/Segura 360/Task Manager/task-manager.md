# Task Manager

**Task Manager** is a Segura solution that automates routine IT tasks, allowing your team to focus on more strategic activities.

Imagine you need to restart a specific service every morning or perform weekly backups on dozens of servers. Instead of performing these tasks manually, **Task Manager** allows you to automate them securely, ensuring that:

* Tasks are executed consistently and at the scheduled time.  
* Only authorized people can configure and execute automations.  
* All executions are logged and auditable.  
* There’s no sharing of privileged passwords.

It's like having an assistant that automatically executes your routine tasks, following exactly the established procedures.

## Features

The main features of **Task Manager** include:

*  **Routine task automation**: allows scheduling and automating recurring tasks such as:  
    * Service restarts.  
    * Backup execution.  
    * Log cleanup.  
    * System checks.  
* **On-demand execution**: enables executing one-off tasks when needed, always following established approval flows.  
* **Granular access control**: ensures each user has only the necessary permissions for their specific activities.

## Applicability

Task Manager is a versatile solution that supports a wide range of protocols, such as SSH, Telnet, RDP, VNC, RPC, WMI, LDAPS, HTTPS, and X11. Its applicability extends to various scenarios where ensuring effective and secure execution of tasks with minimal privileges is crucial. Some of its applications include:

* **System maintenance**: automates service restarts, temporary file cleanup, and other recurring maintenance tasks.  
* **Backups**: schedules and executes backup routines at predetermined times.  
* **System checks**: automates periodic checks of logs, disk space, and other indicators.  
* **Administrative tasks**: executes system administration scripts in a scheduled manner.

## Use case

**Software Update Automation**

**Primary actor**: Miguel (support analyst at an e-commerce company).

**Scenario**: every day at 6 AM, before business hours, certain services need to be restarted on 20 different servers to ensure optimal system performance.

**Note**: **Task Manager** is designed to automate command-line task execution. Therefore, this use case does not apply to system restarts performed through graphical interfaces. Make sure this type of task can be executed through specific commands before implementing this use case.

**Basic flow:**

1. **Task configuration**  
   1. Miguel creates a task for service restart.  
   2. He defines specific commands for each service.  
   3. And selects the servers where the task will be executed.  
2. **Scheduling**  
   1. Miguel configures daily execution at 6 AM.  
3. **Automated execution**  
   1. Task Manager executes the service restart automatically.  
   2. And records the results of each execution, separating each update into different operations.  
   3. And displays reports and notifies in case of problems.