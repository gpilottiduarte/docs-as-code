## Import found devices

To import devices found on Discoveries, go to **Discovery ➔ Discovery ➔ Devices.**

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664988076990.png)

Devices report

 

The register action button has the following options:

* Import device
* Device credentials
* Groups
* SSH keys
* Device certificates
* Device services
* View scan log
* Synchronize
* Edit record

On this screen, you can view the devices found along with a series of information such as search time and result messages.

Select the device to import and click the ***Import Devices*** button.

A confirmation window will open. Click ***yes*** to import the selected devices.

Devices that have an IP already registered will not be imported. New connectivity will be created if it does not exist.



![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664988132217.png)Import device form 



Complete the following fields:



| Field | Description |
| --- | --- |
| Management IP | Device fixed IP |
| Device Name (Hostname, IP, URL or Site Name, Application Name ...) | Device Description or Hostname / IP (System Identification Name) |
| Site | Physical site of the device. All sites registered in senhasegura will be listed |
| Type | Device Type (Ex .: Server, Workstation, etc). All device types recorded in senhasegura will be listed |
| Manufacturer | Device Manufacturer (Ex. Cisco, CheckPoint). All manufacturers registered in senhasegura will be listed. |
| Model | Device Model (Ex .: Cisco ASA, etc ...). All models registered in senhasegura will be listed |
| Connectivity | Protocols used for device access. The default senhasegura security connectivity will be displayed. |
| Door | Communication port number. The field is populated with the default protocol port number. |

Click ***Save***to finish.

WarningWhen executing an import, it is mandatory to fill the **Device Name**field, or it will not be executed.  
### Import found credentials

To import credentials found in Scans performed, go to **Discovery ➔ Discovery ➔ Credentials.**

The register action button has the following options: View record details, credential accesses and view last logs.

In this screen, you can see the credentials found along with a series of information, such as privileged, date, and time of last access and search. You can view credential details and access.

Select the credentials you want to import and click the***Import Credentials*** button.

A confirmation screen will appear. Click ***Yes*** to finish.

### Import SSH Keys found

Go to **Discovery ➔ Discovery ➔ SSH keys.**

The Register action button has options: View keys and view authorized devices. On this screen, you can view the SSH keys found along with a range of information, such as the device, name, type, and path of the key. Additionally, you can view SSH key details.

Caution!The report also displays the information if the credential found is privileged or not, so when importing, pay attention to this item to import the correct credential.  


To import SSH keys, select the credentials you want to import and click the ***Import keys*** button. If the register is already imported, it cannot be selected.

  


A confirmation screen will appear: Click ***Yes*** to finish.

### Import certificates found

To import certificates on scans performed, go to **Discovery ➔ Discovery ➔ Certificates.**



![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664988272572.png)Device's certificates report  



Click the ***Import Certificate*** action button, and a confirmation screen will appear. Click ***Yes*** to finish.

Go to the **Certificates ➔ Operational ➔ Certificates** menu to view the imported certificate.

### Import local authorities found

To view local authorities found on scans performed, go to **Discovery ➔ Discovery ➔ Local Authorities,**

The following screen will appear:



![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664988318825.png)Local authorities of the device report 



Click on the ***Import Authority*** action button, and a confirmation screen will appear. Click ***Yes*** to finish.

