You can automate the process of importing devices and credentials found in discoveries through the Discovery glossaries. This is because it is possible to predefine in the glossaries information such as site, type, manufacturer and device model, set default and privileged credential type, automatic password exchange, and connectivity.

This way, senhasegura automatically recognizes devices against the identification string defined in the glossary and performs imports if this option is enabled in the discovery settings.

AttentionIf you select to import devices and credentials is essential to create a glossary before creating a discovery, or the import feature will not work.

Check Default Glossaries if you are unsure how to create a glossary.

  
  


## Create a device glossary

Go to **Discovery ➔ Settings ➔ Device Glossary**

In this screen, you can view the glossaries created along with a range of information, such as identification patterns, default password type, privileged password types, and enabled or unselected password changes.

In the Report Action Button, click on the **New Glossary** button.

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664986469754.png)Glossary version registration form 

Complete the following fields:



| Field | Description |
| --- | --- |
| Glossary Name | Name for identification of this glossary |
| Version ID String | This string defines which Discovery devices this dictionary will apply to. The value entered in this field will be compared to the operating system name of the device. You can use the *character to symbolize any value for a string. For example, a ”Windows*” string will select any Windows device. |
| Active | Indicates whether this glossary is active or not |
| Order | Order of priority of application of this glossary if more than one glossary applies to the same device. Smaller orders take precedence over larger orders |
| site | The physical site of the device. All sites registered in senhasegura will be listed |
| Type | Device Type (Ex .: Server, Workstation, etc.). All device types registered in senhasegura will be listed |
| Manufacturer | Device Manufacturer (Ex. Cisco, CheckPoint). All manufacturers registered in senhasegura will be listed. |
| Model | Device Model (Ex .: Cisco ASA, etc...). All models registered in senhasegura will be listed |
| Default Credential Type | Type of default credentials (e.g., location, domain, etc.). All default credential types registered in senhasegura will be listed |
| Privileged Credential Type | Type of privileged credentials (e.g., location, domain, etc.). All privileged credential types registered in senhasegura will be listed |
| Enable auto switch | Indicates whether automatic credential password exchange is enabled |
| Execution Plugin | Plugins for running Discovery. All running plugins registered in senhasegura will be listed |
| Password Exchange Template | Template used to perform password exchange. All templates registered in senhasegura will be listed. |
| Use your own credential to connect | If this option is selected, the user credential will be used to connect |
| Access Credential | Access credential records in the vault. All access credentials registered in senhasegura will be listed. |
| Connectivity | Protocols used for device access. The default senhasegura security connectivity will be displayed. |
| Door | Communication port number. The field is populated with the default protocol port number. |

Fill in the fields and click ***Save*** to finish.

## Create a domain glossary

In the Report Action Button, click on **New Domain Glossary**.

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1679681162859.png)Glossary Version registration form  The fields of this screen are the same as the previous one, except that the block of device information is not presented.

Complete the fields and click on ***Save*** to finish.

## Default Glossaries

The following examples should help you create any glossary or have a glossary to import devices and credentials from your discovery search.

### Generic Linux glossary

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664986615389.png)Device Product 

  


1. Create a new product device, go to **Devices ➔ Settings ➔ Products,** and click **\+ New**



Device Product
2. Set the device product fields:


	* **name** of **Generic Linux**
	* **Type** to **Server**
	* **Vendor** to **Linux**
3. Click **Save**

Now create a Generic Linux glossary. Go to **Discovery ➔ Settings ➔ Device glossary**:

1. Click on the **⁝** and **\+ New glossary**

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664986690381.png)

Glossary
2. Give the **name** **Generic Linux**
3. Set the version ID String to **\*linux\***
4. Set the *device configuration*:


	* **Site**: Default
	* **Type**: Server
	* **Vendor**: Linux
	* **Product**: Generic Linux
5. Set the *credential configuration*:


	* **Type of default credential**: Local User
	* **Type of default credential**: Local Administrator
6. Click **Save**

### Generic Windows glossary

1. Create a new product device, go to **Devices ➔ Settings ➔ Products,** and click **\+ New**

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664986728485.png)

Glossary
2. Set the device product fields:


	* **name:** To **Generic Windows**
	* **Type:** to **Server**
	* **Vendor:** to **Windows**
3. Click **Save**

Now create a Generic Windows glossary. Go to **Discovery ➔ Settings ➔ Device glossary**:

1. Click on the **⁝** and **\+ New glossary**



![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664986782487.png)Device Product  
 

Give the **name** as **Generic Windows**
2. Set the version ID String to **\*windows\***
3. Set the *device configuration*:


	* **Site**: Default
	* **Type**: Server
	* **Vendor**: Windows
	* **Product**: Generic Windows
4. Set the *credential configuration*:


	* **Type of default credential**: Local User
	* **Type of default credential**: Local Administrator
5. Click **Save**

### Generic glossary

1. Create a new product device, go to **Devices ➔ Settings ➔ Products,** and click **\+ New**



![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664986834643.png)Glossary
2. Set the device product fields:


	* **name** to **Generic Server**
	* **Type** to **Server**
	* **Vendor** to **Other**
3. Click **Save**

Now create a Generic Windows glossary. Go to **Discovery ➔ Settings ➔ Device glossary**:

1. Click in the **⁝** and **\+ New glossary**

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664986894440.png)

Device Product
2. Give the **name** as **Generic Glossary**
3. Set the version ID String to **\***
4. Set the *device configuration*:


	* **Site**: Default
	* **Type**: Server
	* **Vendor**: Other
	* **Product**: Generic Server
5. Set the *credential configuration*:


	* **Type of default credential**: Local User
	* **Type of default credential**: Local Administrator
6. Click **Save**

## Edit glossary

Click the ***Change Glossary*** button.

The screen is the same as creating a glossary and works the same.

Make the changes and click the ***Save*** button to finish.

