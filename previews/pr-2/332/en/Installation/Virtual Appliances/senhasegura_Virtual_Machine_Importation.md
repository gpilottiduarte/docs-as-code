Import virtual machine files with a `.OVA` senhasegura application on Microsoft Windows Server servers that use the Hyper\-V role.

To perform a senhasegura virtual machine import, the following steps must be performed:

## senhasegura Virtual Machine Importation

* Import senhasegura OVA on ***Virtualbox*** or ***Vmware***;
* Export a virtual machine in OVF format;
* In this process, a virtual hard disc file will be extracted. This file has a VMDK format. However, for a virtual machine to be created on Hyper\-V the VHD or VDHx format should be used ;

## Virtual Machine Image File Conversion

1. Download the Microsoft Virtual Machine Convert;
2. Import the converter in PowerShell;
3. Execute the following commands on PowerShell to load the Windows conversion module;


```
PS C:\WINDOWS\system32> Import-Module 'C:\Program Files\Microsoft Virtual Machine Converter\MvmcCmdlet.psd1'

```
4. Convert the file from .vmdk format to .vhdx through the following command;


```
PS C:\WINDOWS\system32> ConvertTo-MvmcVirtualHardDisk -SourceLiteralPath d:\ss-andrew-v3-24042017\ss-andrew-v3-24042017-disk1.vmdk -VhdType DynamicHardDisk -VhdFormat vhdx -destination d:\ss-andrew-v3-24042017

```
  


The following message will be displayed:


```
Destination
-----------
d:\ss-andrew-v3-24042017\ss-andrew-v3-24042017-disk1.vhdx
Source
------
d:\ss-andrew-v3-24042017\ss-andrew-v3-24042017-disk1.vmdk
```

## senhasegura Virtual Machine Creation and Initialization

On Hyper\-V, create a virtual machine and indicate the disc on `.vhdx` format.

Start the senhasegura virtual machine on the Hyper\-V environment.

