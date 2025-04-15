## Requirements

* To have a user with an identical username on the senhasegura platform.
* To have an approved user in GO Endpoint Manager for Linux.



---

## Record a session

GO Endpoint Manager for Linux allows users to be video monitored throughout their sessions, regardless of the binary run.

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Linux➔Access Policies.**
3. Click **⁝**and select the desired option: **New rule, New rule for workstation**or**New rule for user.**
4. In the **Main**tab, complete the fields:
	* **Policy name:**define an easy\-to\-identify name.
	* **Enabled:** if enabled, the policy will be applied across devices.
	* **Guideline:** select **Binary run**.
5. In the **Application**tab, complete the fields:
	* **Enable audit?:** the field is required and is enabled by default. Leave it **Yes** to audit the actions performed.
	* **Enable session recording?:** mark **Yes** to record the sessions of logged binaries. The start of the session is linked to the execution of the binary only after the execution is over.
	* **Application path:**the location of the program on the file system. Find the path of the program using **which \[the command you want].**
	* **Is the path a symbolic link?:** check if this added path is a link to a file or directory. Find out if it's a symbolic link by typing**ls \-la \[the command path you want].**
6. Click **Add.**
	* **Permission:** choose allowing to record the sessions.
	* **User or group:**add who this rule is for, a user or group.
	* **User or group name:** fill in the name of the user or group according to the type chosen in the previous field. It must be the user's primary group.
7. Click**Add.**
8. Click **Save.**

Below, there's an example of a session recording with the execution of the ping command:


```
user@Workstation:~$ ping -c 4 8.8.8.8
PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=53 time=2.12 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=53 time=1.94 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=53 time=2.05 ms
64 bytes from 8.8.8.8: icmp_seq=4 ttl=53 time=2.20 ms

--- 8.8.8.8 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 1.975/2.034/2.102/0.051 ms

Uploading recorded output data...
OK.

Uploading recorded input data...
OK.

```


---

## Session registration

1. Access the senhasegura platform.
2. Navigate to **PAM Core➔Access Control➔Remote Sessions.**
3. Use the available fields to filter the recording.
4. On the**Action** column, you can view the **Session Logs** and **Session Videos.**
5. You can also **Record RemoteApp from this session**, **Prevent purge**, and **Configure**a**uditors.**
