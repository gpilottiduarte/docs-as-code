# Como gerenciar o certificado SSL da aplicação web

Neste documento, você encontrará os passos de como visualizar os detalhes do certificado que está sendo utilizado pela aplicação Web e fazer a instalação de novos certificados.

## Visualizar as opções do comando
Utilize o comando `sudo orbit webssl --help`.
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

## Listar os certificados
Utilize o comando `orbit webssl --show` para listar os detalhes do certificado SSL que está sendo utilizado pela aplicação web.

## Instalar um novo certificado
Para instalar o certificado, transfira os arquivos correspondentes para o servidor do senhasegura e, em seguida, execute o comando `orbit webssl`, especificando o argumento `--cert` para o arquivo do certificado e o argumento `--key` para a chave do certificado. 
```
mt4adm@vmdf-giskard:~$ orbit webssl  
    --cert=selfsigned.crt  
    --key=selfsigned.key
Are you sure you want to proceed: y
Done!
No errors reported
```