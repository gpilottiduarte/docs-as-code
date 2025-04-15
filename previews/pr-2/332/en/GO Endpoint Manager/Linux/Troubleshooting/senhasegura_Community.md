The access policy was deactivated but not removed from the workstation. As a consequence, the updated access policy is not applied to the workstation with the installed Agent.

#### Solution

The secpack\-maestro service is always running and updating the rules as they are registered in senhasegura. However, if there is a need for manual intervention on the workstation, follow these steps:

1\. Log into the Linux terminal as the root user.

2\. Stop the service using the command:


```
service secpack-maestro stop 
```
3\. Confirm that the service has been stopped:


```
service secpack-maestro status 
```
4\. Remove the desired policies: 


```
echo 'delete 100 acl write path="/etc/oracle/tnsnames.ora"' | /usr/sbin/caitsith-loadpolicy 
```
5\. Validate if the policy has been removed by checking the policy file again:


```
cat /sys/kernel/security/caitsith/policy 
```
6\. In the senhasegura platform, deactivate the rule to prevent it from being applied again.

7\. Restart the secpack\-maestro service:


```
service secpack-maestro start 
```
8\. Check the synchronization status between the senhasegura platform and the Agent: 


```
systemctl status secpack-maestro
```
9\. If necessary, view the synchronization logs to identify where possible errors may be occurring:


```
sudo tail -f /var/log/syslog
```


---

## senhasegura Community

To learn more about this topic, refer to the articles created about the [GO Endpoint Manager](https://community.senhasegura.io/search?q=GO%20Endpoint%20Manager%20).

If you need further assistance, ask the senhasegura Community. There, you can rely on help from other users and our senhasegura experts to get a response.

