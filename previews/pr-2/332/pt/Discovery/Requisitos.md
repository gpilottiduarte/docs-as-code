# Requisitos

## Contas locais Windows

Configurações necessárias no módulo para Windows:

- O dispositivo precisa ter o WinRM configurado, via HTTP (5985) ou via HTTPS (5986)
- O senhasegura deve ter acesso ao dispositivo via Windows RM na porta 5985 ou 5986
- Adicionar Porta do protocolo LDAP (389 ou 636)
- Credencial com acesso para executar o Powershell com permissão administrativa remotamente.
- Credencial deve pertencer ao grupo **Remote Management Users** ou ter as permissões listadas a seguir:
    - Recursos WMI e recursos de gerenciamento como WS-Management via Windows Remote Management.
    
    Geralmente, os usuários desses grupos são utilizados para habilitar que usuários gerenciem servidores através de comandos remotos (via PowerShell).

As configurações de segurança (políticas) necessárias são:

- Acesse este computador a partir da rede
- Adicione uma estação de trabalho ao domínio
- Ignore a verificação transversal
- [Aumente o set de trabalho do Processo.](https://learn.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/increase-a-process-working-set)



O usuário deve ter privilégio para executar os seguintes comandos:

- ComputerSystem
- PATH
- Get-ItemProperty
- Import-Module
- WebAdministration
- Where-Object
- wmic
- hostname
- NET USER/LOCALGROUP

É necessário ter acesso também ao diretório %userprofile% e permissão de leitura do log de eventos (Win32_NTLogEvent)

---

## Usuários Linux

Para realizar as configurações de discovery em sistemas Linux, são necessários os requisitos:

- O usuário cadastrado responsável pelo discovery precisa estar com permissão para realizar acesso remoto (sshd_config)
- O senhasegura deve possuir acesso a porta SSH do dispositivo na qual a credencial se encontra
- O **SSH client** precisa estar configurado na máquina de origem

Para executar o robô você deve utilizar o seguinte comando logando no ssh do servidor: 

```
# orbit execution --help
Usage: orbit execution --code=STRING

Application execution process tool.

Flags:
  -h, --help             Show context-sensitive help.

  -c, --code=STRING      The Execution Process ID
  -t, --task=STRING      The Execution Task ID
  -o, --option=STRING    The Execution Process extra options
  -v, --verbose          Enable verbose mode
  -d, --debug            Enable debug mode
      --force            Force the command execution, never prompt
```

Exemplo:

`orbit execution --code=114 -v -d`

Durante essa execução você deverá ficar atento sobre alguns pontos:

- O usuário cadastrado responsável pelo discovery de credenciais deve ter permissão (de ao menos leitura) nesses diretórios:
    - /etc
    - /home
- O usuário cadastrado responsável pelo discovery de credenciais deve ter permissão de execução, caso contrário deverá ser utilizado o sudo

:::(info) (Info)

O fator que irá definir se será ou não possível executar comandos é a **permissão** que o usuário possuir no diretório ou arquivo que estiver sendo executado.

:::

:::(Internal) (Angélica)
Informações internas somente

Permissão de execução dos comandos utilizados pelo Discovery, com sudo sem senha:

Permissão de leitura dentro do /etc

```
cat /etc/redhat-release
cat /etc/debian_version
hostname
cat /etc/shells
grep -e "^/"
cat /etc/group
cat /etc/passwd
id -g
id --groups
chage -l
cat /etc/sudoers
stat /root/
last
cat /root/.ssh/authorized_keys
ls -l /root/.ssh/
cat /usr/sbin/.ssh/authorized_keys
ls -l /usr/sbin/.ssh/

```
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
:::

Quando o robô finalizar a execução, os resultados irão ser retornados automaticamente

![Untitled.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/Untitled%281%29.png){height="" width=""}