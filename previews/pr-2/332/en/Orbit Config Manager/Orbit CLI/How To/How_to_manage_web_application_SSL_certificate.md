# How to manage web application SSL certificate

In this document, you will find the steps to view the details of the certificate being used by the Web application and to install new certificates.

## View command options
Use the `sudo orbit webssl --help` command.
```
mt4adm@vmdf-giskard:~$ sudo orbit webssl --help
Usage: orbit webssl

Webserver SSL certificates management tools

Flags:
      --help           Show context-sensitive help.

  -c, --cert=STRING    Specifies a file with the certificate
  -k, --key=STRING     Specifies a file with the certificate secret key
      --save           Save files on ssl directory
      --force          Force the command execution, never prompt
      --show 
  ```
## List certificates
Use the command `orbit webssl --show` to list the details of the SSL certificate being used by the web application.

## Install a new certificate
To install the certificate, transfer the corresponding files to the senhasegura server, and then execute the command ```orbit webssl```, specifying the ```--cert``` argument for the certificate file and the ```--key``` argument for the certificate key.
``` 
mt4adm@vmdf-giskard:~$ orbit webssl  
    --cert=selfsigned.crt  
    --key=selfsigned.key
Are you sure you want to proceed: y
Done!
No errors reported
``` 
