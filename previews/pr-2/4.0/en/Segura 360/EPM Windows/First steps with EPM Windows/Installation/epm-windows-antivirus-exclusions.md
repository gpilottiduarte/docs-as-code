# Antivirus exclusions

To keep the PEDM solution running seamlessly, senhasegura recommends excluding specific files and directories from antivirus scans. This will ensure that the important processes of the EPM Windows agent remain unaffected.

This article lists the items you should register as exceptions in your antivirus.

* * *

## Exception list

EPM Windows uses the directories and dlls listed below to store information related to using PEDM, running web automation, using UAC, and other functions.


* ```C:\Program Files\senhasegura\```
* ```%ProgramData%\go\``` 
* ```C:\Users\[UserName]\AppData\Local\Temp\```
* Inside the directory ```C:\Windows\System32```:
    * ```retsudo_64.dll```  
    * ```daigoro_64.dll```

* * *

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.
