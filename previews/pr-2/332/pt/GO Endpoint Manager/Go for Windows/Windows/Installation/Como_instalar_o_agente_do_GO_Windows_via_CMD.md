# Como instalar o agente do GO Windows via CMD

Este documento fornece informações para a instalação do agente do **GO Endpoint Manager** a partir da linha de comando, utilizando o comando `msiexec`, no sistema operacional Microsoft Windows.

:::(warning) (Atenção)
Ao desinstalar o PEDM GO Windows, as informações de configuração do token e o endereço do cofre do senhasegura permanecem armazenadas na pasta `IsolatedStorage`. Portanto, não é necessário reconfigurá-las após a reinstalação do agente. Caso deseje realizar uma nova instalação do PEDM GO Endpoint Manager e precise reconfigurar o token e o endereço do servidor do senhasegura, é necessário excluir a pasta IsolatedStorage, localizada em `C:\ProgramData\IsolatedStorage`.
:::

Para instalar o *client* do **GO Endpoint Manager** utilizando o comando `msiexec`, siga os passos abaixo:

1. No windows, abra o Prompt de comando, PowerShell ou Bash, na pasta onde está armazenado o instalador (arquivo `.msi`) do senhasegura.go e execute o comando:

```shell
msiexec /i "<senhasegura.go.v.3.32.0.7.msi>" /passive TOKEN=<token> URL=<IP or domain name> ADDLOCAL=Pedm,Vault,Automation /l log.txt
```

Lembre-se de substituir os valores indicados pelos sinais de maior que e menor que `<>`:

1. Troque `<senhasegura.go.v.3.32.0.7.msi>` pelo nome completo do arquivo instalador do GO e mantenha as aspas.
2. Troque `<token>` pela chave de instalação, disponível no senhasegura, na página de configuração de parâmetros do GO Endpoint Manager.
3. Troque `<IP or domain name>` pelo endereço de IP do servidor do senhasegura, ou pelo domínio (em casos de DNS configurado).

## Reinstalação

Ao executar o comando sugerido acima, uma pasta chamada `IsolatedStorage`, que armazena o token e o IP do servidor do senhasegura será criada em `C:/ProgramData/`.

Portanto, não é necessário informar o token nem o IP do senhasegura durante a reinstalação.

Para garantir uma reinstalação completa, utilize o parâmetro `REINSTALLMODE=AS`. O comando fica dessa forma:

```shell
msiexec /i "<senhasegura.go.v.3.32.0.7.msi>" /passive ADDLOCAL=Pedm,Vault,Automation /l log.txt REINSTALLMODE=AS
```

## Sobre os parâmetros dos comandos de instalação e reinstalação

| Parâmetro                		   | Descrição                                                                                                                                         	|
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/i`                     		   | Especifica a função de instalação do `msiexec`.                                                                                                   	|
| `<senhasegura.go.v.3.32.0.7.msi>`   | Nome completo (com versão especificada) do arquivo do instalador do senhasegura.go client.                                                        	|
| `/passive`               		   | Estabelece instalação passiva, sem necessidade de interação do usuário.                                                                           	|
| `TOKEN`                  		   | Chave de instalação para relacionar o senhasegura.go que está sendo instalado com a plataforma de configuração do senhasegura.                    	|
| `URL`                    		   | IP ou domínio (caso haja DNS configurado) do servidor da plataforma do senhasegura.                                                               	|
| `ADDLOCAL`               		   | Parâmetro para definição de quais módulos do senhasegura.go client serão instalados. O `Pedm` é obrigatório, já `Vault` e `Automation` são opcionais. |
| `/l log.txt` (opcional)  		   | Gera o arquivo `log.txt` com os registros da instalação, para resolução de problemas.                                                             	|