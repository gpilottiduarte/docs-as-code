# Como atualizar a solução

Através do comando `orbit upgrade` você poderá atualizar todos os pacotes da plataforma Segura. Isso inclui os pacotes do sistema operacional, proxy, aplicação web e configurações de segurança.
:::(info) (**Info**)
Por favor, valide se a sua instância pode acessar os servidores espelho oficiais da Segura através dos seguintes URLs:

* [https://deb.senhasegura.com/](https://deb.senhasegura.com/)  
* [https://security.senhasegura.com/](https://security.senhasegura.com/)
:::

## **Preparar a atualização**

Execute o comando `sudo apt-get update` para atualizar a lista de pacotes disponíveis no mirror oficial.

Utilize os argumentos `–show` ou `–check` para listar quais pacotes serão instalados.

O comando `orbit update --check` terá uma saída como a abaixo:


:::(error) (**Alerta**)
Não execute o comando `apt-get upgrade`.

Caso você o execute, use `orbit upgrade` para corrigir qualquer problema gerado.
:::

```Text
mt4adm@vmdf-giskard:~$ sudo orbit upgrade --check
Listing...
fajita-server-Segura-image/updates-buster 1.0.9-10~buster amd64
[upgradable from: 1.0.9-9~buster]
orbini/buster 5.10.13-28~buster all [upgradable from: 5.10.13-27~buster]
orbit-cli/buster 1.1.0-22~buster all [upgradable from: 1.1.0-21~buster]
Segura-app/buster 3.1.11-8~buster all [upgradable from: 3.1.11-7~buster]
xrdp-Segura-image/updates-buster 1.0.9-10~buster amd64
[upgradable from: 1.0.9-9~buster]
```

## **Baixar pacotes de atualização para instalar depois**

A partir da versão 3.33 em diante, você pode baixar os pacotes da atualização para instalá-la posteriormente. Isso é útil para manter suas instâncias do Segura disponiveis até a instalação.

Para baixar o pacote, execute `orbit upgrade --download-only` e depois realize a atualização com o comando `orbit upgrade`.

## **Atualizar a solução**

Para atualizar a instância basta executar o comando `orbit upgrade`. O Orbit irá inicialmente validar a versão do binário `orbit`, e caso aja a necessidade de atualizá-lo antes de iniciar as demais atualizações, será apresentada uma mensagem contendo as instruções de atualização, como mostrado abaixo:

```Text
mt4adm@vmdf-giskard:~$ sudo orbit upgrade
A new version of your system will be installed.
Are you sure you want to proceed: y

Checking for new versions. Please wait...

A new version of orbit-cli is available.

Run apt-get install orbit-cli before continue.
```

Uma vez que o binário `orbit` estiver atualizado, execute novamente o comando `orbit upgrade` para atualizar todas demais atualizações.

O processo de atualização irá apresentar diversas mensagens relacionadas as tarefas que estão sendo executadas, e reiniciará os serviços diversas vezes durante o processo. Caso não seja possível realizar a atualização, uma mensagem de erro será apresentada ao final. Caso contrário, uma mensagem de sucesso é apresentada.

O comando `orbit upgrade` mostrará uma saída como a abaixo:

```Text
mt4adm@vmdf-giskard:~$ sudo orbit upgrade
A new version of your system will be installed.
Are you sure you want to proceed: y

Checking for new versions. Please wait...

...

[2020-06-17 16:17:18]: Checking firewall...
Firewall normalized
No errors reported

[2020-06-17 16:17:29]: Restarting robots...
Done!
No errors reported

Duration: 4m3.881937248s
```
:::(info) (**Info**)
Sempre execute o comando `orbit version` para validar a versão que foi instalada após o processo de atualização.
:::




