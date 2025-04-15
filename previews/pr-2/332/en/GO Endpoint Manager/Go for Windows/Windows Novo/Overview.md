## Overview

GO Endpoint Manager for Windows provides credential queries in offline mode. When GO Endpoint Manager tries to establish a connection with the senhasegura platform and fails three times, it activates the offline mode automatically. There is no need for configuration or activation by the user.

If the applications (Core and Vault) disconnect from the senhasegura platform, the user can perform actions based on the last synchronized policies. By default, policies are synced every 15 min.

CautionA synchronization of credentials occurs every 15 minutes by default. It is not recommended to set a time interval of lower than 15 minutes because excessive queries can influence the performance of the senhasegura server.

---

## Enable offline mode

Offline mode is enabled in the following situations:

* Right after registering the agent on the senhasegura platform.
* Before making any request to the senhasegura platform.
* Whenever the Go Service restarts.
* If there are changes to the network adapters of the machine.

### View events

GO Endpoint Manager synchronizes the logs of actions performed by the user with the senhasegura platform as soon as the application returns to online mode. During the period when the application is offline, logs are securely stored locally. See the article Event report for more information about logs.

InfoIf there are restrictions such as Denylists, the rules will continue to apply.### Features that are unavailable when there is no connection to the senhasegura platform

InfoThe users will receive a message on their workstation when trying to perform one of these actions.* Update
* Malware analysis
* Access to credentials
* Automation
* UAC
* Policy Update
* Single sign\-on
* Approval workflow

CautionOnly approval workflow with emergency access works in offline mode.

To create a network share, you don’t need credentials. Its operation is the same as the online mode; the sharing is always with the user who ran GO Endpoint Manager.

  


