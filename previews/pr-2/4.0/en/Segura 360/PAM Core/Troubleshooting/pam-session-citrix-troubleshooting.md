# Citrix - Troubleshooting

In this document, you’ll find a step-by-step guide on how to check and resolve possible problems related to **Citrix Bridge Server**.

---
### The desktop you want to connect is unavailable

**Scenario**: Citrix XenApp Application Launch Error: The desktop you want to connect to is currently unavailable. Please try later or contact an administrator if the problem persists.
**Solution**: Verify that the application server is running or that there are no stuck sessions. In Citrix, access Delivery Groups, and (if you have sessions in use) double-click on the delivery group, select the session and click on the Log Off option.

---
### Unable to connect to "192.168.1.1 - AppName"

**Scenario**: Unable to connect to "192.168.1.1 - AppName". No file or directory. Check your connection settings and try again
**Solution**: Check the network connection between the Bridge Server and the application server.

---
### Unable to connect to remote server URL

**Scenario**: Citrix XenApp - Cannot Contact the Citrix Server: Unable to connect to remote server URL `https://citrixstore/Citrix/Store/PNAgent/config.xml`. The remote server URL may have been entered incorrectly or the remote server may be down. Do you want to re-enter the server URL?
**Solution**: Check the connection between the Citrix Bridge Server and Citrix Store. You can try using the IP address instead of the store's hostname. For example: `http://192.168.0.100/Citrix/senhasegurasf/PNAgent/config.xml`

---
### Remote Desktop Server encountered an error

**Scenario**: The Remote Desktop server encountered an error and closed the connection. Please try again or contact your system administrator.
**Solution**: Check if the Docker container is running: `sudo docker ps`. If not, start it using the following command: `sudo docker start xrdp-citrix-senhasegura-image_0.9.5-8`.

---
### Can’t transfer files

**Scenario**: the option to transfer files is not working.
**Solution**: check if you have installed Fuse module on Bridge Server Linux. If you have installed the Fuse module, make sure it’s running, type: `lsmod | grip fuse` or start it by typing: `modprobe fuse`.

---
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.