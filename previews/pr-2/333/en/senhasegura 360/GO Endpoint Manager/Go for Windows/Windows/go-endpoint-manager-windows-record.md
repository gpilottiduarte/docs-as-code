The GO Endpoint Manager agent for Windows allows certain users to be monitored by video during the entire session.

## Configure parameters for recording

* **Record session for these application**: access the **Go Endpoint Manager ➔ Policies ➔ Windows ➔ Access List ➔** **⁝****➔ New general segregation.**

![Captura de tela 2022-11-23 102731.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/Captura%20de%20tela%202022-11-23%20102731.png)

* **Enable recording session?**: global parameter mentioned in go configuration in **GO Endpoint Manager ➔ Settings ➔ Parameters.**

![Captura de tela 2022-11-23 102859.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/Captura%20de%20tela%202022-11-23%20102859.png)

Monitoring happens only when:

* The global parameter and the access list are active and related to the recording.
	+ Applications that fit into the access list will be recorded, including those outside GO Endpoint Manager.
* The global parameter is active and without an existing access list.
	+ Any execution of GO Endpoint Manager will be recorded.
* When the user starts a JIT process, all his actions will be audited by video and forwarded to the senhasegura server like a RunAs elevation.

InfoSegregated parameters apply in this scenario.



---

## Recording report

When a user elevates an application, GO Endpoint Manager will record a video while the application is running. As soon as the execution is finished, the video is forwarded to the senhasegura server, making it available for evaluation.

CautionThrough the **Session Video** record action, you can watch the video. However, this functionality will only be available if the **Enable session recording** parameter is active.To view a recorded session: 

1. Access the senhasegura platform.
2. Access the menu**PAM Core ➔ Access control ➔ Remote sessions.**
3. In the **Proxy** field, filter by **GO Endpoint Manager****.**
4. Click the **Action** play button to view the recording.

  
![Captura de tela 2022-11-23 102547.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/Captura%20de%20tela%202022-11-23%20102547.png)

InfoVideos only appear after the service restarts and finish uploading videos. This process takes 15 minutes.



---

## For administrators

Administrators of this process can check the recordings made in a certain period.

Access the **Event Viewer,** which makes it possible to monitor the sending of each video. Check the `%programdata%\\go\\recordFiles` folder to see the video files of the recordings in progress and already finished, as shown in the example below:

![image 33.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%20%2833%29.png)



---

## Types of recording

1\. Any execution:

* Core applications (execute, control panel, network adapters, uninstall).

2\. Just\-in\-time:

* The entire session is recorded until the user logs off or until the user cancels just in time.

3\. Automation:

* All automation is carried out in the process.

ImportantActions performed on Network Adapters and credential withdrawal is not recorded.  


  


