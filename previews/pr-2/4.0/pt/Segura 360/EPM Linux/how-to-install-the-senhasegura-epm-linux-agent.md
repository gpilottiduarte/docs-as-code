# Como instalar o agente do Segura EPM Linux

## Pré-requisitos

* Debian 7 ou posterior.  
* Pacote `dkms` instalado.

## Boas práticas de instalação

:::(Info) (Info)
* É recomendável que você faça um backup ou um instantâneo dos dados do seu dispositivo para receber a instalação do **EPM Linux**. Alguns kernels são personalizados ou contêm drivers desconhecidos que podem afetar o comportamento dessa solução.  
* Para usar a solução em outro sistema operacional baseado em Linux, entre em contato com a equipe de suporte para obter instruções específicas do sistema. 
:::

Para garantir uma instalação bem-sucedida, verifique as versões instaladas executando os comandos:

* `uname -r`, para verificar o nome e a versão do kernel atual no computador.  
* `ls -la /usr/src/kernels`, para listar quais kernels de origem estão instalados no computador. Observe que deve haver um kernel com o mesmo nome e versão que o obtido com o comando anterior.   
  * Caso este comando não retorne nenhum kernel e exiba o erro de que a pasta em questão não existe, utilize o comando `dpkg -l | grep linux-image`.  
* `ls -la /boot`, para listar os arquivos de inicialização necessários ao Linux. Observe que deve haver um arquivo com o mesmo nome e versão do kernel obtido nos comandos anteriores.

## Compatibilidade do EPM Linux

O senhasegura também é compatível com as distribuições **Red Hat (versões 7.9 e 8.9), SUSE e CentOS (versão 6\)**. Você precisará dos seguintes pacotes para as distribuições SUSE e Red Hat: `kernel-devel`, `perl` e `dkms`.

:::(warning) (Cuidado)  
O sistema operacional CentOS foi oficialmente descontinuado e não receberá mais atualizações de segurança e suporte oficial. Consulte a [documentação oficial](https://www.centos.org/) para mais informações sobre o processo de migração e alternativas.  
:::

## Dependências

O pacote `dkms` normalmente contém todos os pacotes necessários para usar o **EPM Linux**. No entanto, devido às políticas da sua empresa, aos processos de fortalecimento ou ao sistema operacional usado, pode ser necessário instalar estes pacotes individualmente: `gcc, make, libcurl4, libconfig9 e linux-headers`. Se você precisar instalar esses pacotes, siga as instruções abaixo:

* Para distribuições **baseadas no Debian**: `sudo apt install gcc make libcurl4 libconfig9 linux-headers`  
* Para distribuições **baseadas no Red Hat** (como **CentOS** e **SUSE**): `sudo yum install gcc make libcurl4 libconfig9 linux-headers kernel-devel perl dkms`

## Instalar senhasegura EPM Linux

1. Acesse o portal [PAM Solution](https://suporte.senhasegura.com.br/pt-BR/support/login).  
2. Selecione a versão do agente compatível com sua versão do senhasegura.  
3. Faça download do agente de acordo com a sua distribuição.

Para realizar a instalação no Linux, digite os comandos no shell:

```shell
$ chmod +x secpack-installer-XXXXXX.run
$ sudo ./secpack-installer-XXXXXX.run
```

Ao executar os comandos acima, você verá uma saída de instalação do agente do **EPM Linux.** Ela deve se parecer com o exemplo abaixo:

```shell
SUDO Automation is in progress. Please wait...
Verifying archive integrity...  100%   MD5 checksums are OK. All good.
Uncompressing senhasegura security package  100% 
Verifying archive integrity...  100%   MD5 checksums are OK. All good.
Uncompressing caitsith-installer  100% 
Uninstalling previous version of kernel module...OK
Building and installing kernel module...OK
Installing caitsith-tools...OK
Installing PAM module...
senhasegura security pack v3.31.0-2
Enter the address of the vault:
```

Perceba que é necessário passar o endereço do cofre em que você irá instalar o **EPM Linux**. Passe o endereço de IP ou URL do cofre que você está usando, da seguinte forma:

```shell
SUDO Automation is in progress. Please wait...
Verifying archive integrity...  100%   MD5 checksums are OK. All good.
Uncompressing senhasegura security package  100% 
Verifying archive integrity...  100%   MD5 checksums are OK. All good.
Uncompressing caitsith-installer  100% 
Uninstalling previous version of kernel module...OK
Building and installing kernel module...OK
Installing caitsith-tools...OK
Installing PAM module...
senhasegura security pack v3.31.0-2
Enter the address of the vault: 192.168.1.1
Enter installation token:
```

Aperte `ENTER` para prosseguir com a instalação.

Em seguida, o prompt indicará a necessidade de passar o token de instalação. Para obter este token, siga os passos a seguir:

1. No canto superior esquerdo, clique em **Grid Menu**, representado pelo ícone dos nove quadrados, e selecione **EPM Endpoint Manager**.  
2. No menu lateral, selecione **Parâmetros**.  
3. Na tela de **Parâmetros de Sistema**, selecione **EPM Endpoint Manager**.  
4. Copie o token de instalação disponível logo abaixo da opção **Configuração de Instalação**.

De volta ao sistema Linux, cole o token de instalação ou digite-o no prompt. Você terá uma mensagem no shell parecida com a mensagem exibida abaixo:

```shell
SUDO Automation is in progress. Please wait...
Verifying archive integrity...  100%   MD5 checksums are OK. All good.
Uncompressing senhasegura security package  100% 
Verifying archive integrity...  100%   MD5 checksums are OK. All good.
Uncompressing caitsith-installer  100% 
Uninstalling previous version of kernel module...OK
Building and installing kernel module...OK
Installing caitsith-tools...OK
Installing PAM module...
senhasegura security pack v3.31.0-2
Enter the address of the vault: 192.168.1.1
Enter installation token: 018b6d5c-8f4e-7197-9701-errew43289qwsj
```

Aperte `ENTER` para prosseguir com a instalação. Se tudo correr como esperado, você verá uma mensagem de sucesso no prompt como a abaixo:

```shell
Adicionando grupo gonix...
Este equipamento foi registrado com sucesso.
Installing systemd service...
Installation completed!
```

## Tabela de compatibilidade do senhasegura EPM Linux

Atualmente o senhasegura EPM Linux é compatível com os seguintes sistemas operacionais:

| Distribuição | Versão |
| :---- | :---- |
| **Ubuntu** | 22.4. |
| **Debian** | 7 e posterior. |
| **Red Hat** | 6, 7.9 e 8.9. |
| **CentOS** | 6 e posterior. |
| **SUSE** | 11 e 12\. |
| **Oracle Linux** | 8 e posterior |

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).  