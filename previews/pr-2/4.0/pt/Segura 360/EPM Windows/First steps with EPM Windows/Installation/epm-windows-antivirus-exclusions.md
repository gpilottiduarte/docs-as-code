# Exclusões no antivírus

Para garantir o funcionamento ininterrupto e eficaz da solução de PEDM, a senhasegura recomenda adicionar arquivos e diretórios à lista de exclusão das ferramentas antivírus. Essa ação garante que os processos essenciais do agente do EPM Windows ocorram sem bloqueios.

Este artigo traz os itens que você deve listar como exceção no antivírus.

* * *

## Lista de exceção

O EPM Windows utiliza os diretórios e dlls listados a seguir para armazenar informações relacionadas ao uso do PEDM, executar as automações web, fazer o uso do UAC entre outras funções.

* ```C:\Program Files\senhasegura\```
* ```%ProgramData%\go\``` 
* ```C:\Users\[UserName]\AppData\Local\Temp\```
* Dentro do diretório ```C:\Windows\System32```:
    * ```retsudo_64.dll```  
    * ```daigoro_64.dll```

* * *
Você ainda tem dúvidas? Entre em contato com a [comunidade senhasegura](https://community.senhasegura.io/){target="_blank"}.
