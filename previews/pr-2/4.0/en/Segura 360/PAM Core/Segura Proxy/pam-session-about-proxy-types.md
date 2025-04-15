# About Proxy Types

## What are proxy sessions?
These are sessions where the user accesses the device using a type of proxy provided by Segura to access the desired device. This brings more security to access, considering that all activity, besides being recorded, will be subject to audit and pre-established actions by the administrator.

---
## Proxy Functionality
To make the best use of proxies in Segura, it’s important to understand that there are two types of connections happening during a session:

* A connection that originates from the user's workstation to the Segura server.
* And another that goes from the Segura server to the device the user wants to access. Always working as a bridge between the user and the target device.

:::(warning) (**Attention**)
It isn’t possible to authenticate via SSO in remote sessions via RDP and SSH proxies.
:::

:::(info) (**Info**)
For the activities in this section, users can use any client of their choice, such as PuTTY, MobaXTerm, SecureCRT, Windows RDC, and others.
:::

:::(info) (**Info**)
After a request access to a session is made by a user and accepted by the approver, when the user starts the session a timer for the remaining time starts in minutes. In addition to the notification at the beginning of access informing the remaining time, 3 more notifications will be sent when are 15 minutes left, 10 minutes, and 5 minutes. **Observation**: Only in **Web SSH**, **Web RDP** and **RDP Proxy** sessions this feature is active.
:::

---
## Types of sessions

* Database Proxy
* Web Proxy
* RDP Proxy
* Terminal Proxy
* Citrix Virtual App
