## Visão geral

O principal benefício de criar políticas de acesso é garantir que ao cadastrar uma regra na plataforma senhasegura, ela será aplicada nas seguintes execuções:

* Shell
* Software
* Script
* Controles de processos pai e filho

Isso significa que, mesmo que o usuário tente usar um shell escape, burlar ou abusar de privilégios, ele não conseguirá. Esse módulo permite ao administrador do sistema:

* Criar políticas
* Verificar e controlar arquivos e pastas
* Definir permissões
* Criar um alias
* Cadastrar novas variáveis de ambiente
* Controlar diretórios e arquivos
* Executar outras ações, todas baseadas em políticas de acesso

  




---

## Registrar políticas

As políticas são segregadas em três níveis:

* **Geral:** políticas que se aplicam a todos os dispositivos onde o GO Endpoint Manager para Linux está ativo e aprovado.
* **Workstation:** políticas aplicadas a dispositivos específicos.
* **Usuários:** políticas que se aplicam apenas a usuários específicos nos dispositivos.

As políticas do nível de kernel controlam as listas de controle de acesso (ACLs) do Linux. Esse recurso essencialmente restringe ou permite acesso ao nível de kernel. As ACLs possibilitam que o administrador do sistema aplique um conjunto mais específico de permissões a usuários ou grupos e definir quais operações são permitidas.

A ordem na qual as políticas são adicionadas cria uma prioridade. No exemplo da imagem, a primeira regra cadastrada permite o uid "user", e a segunda nega. Portanto, se você definir a regra de permissão primeiro, mesmo que você bloqueie o usuário na segunda regra, ele ainda terá acesso devido à ordem.

![chrome_eMlEx6ayvG.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/chrome_eMlEx6ayvG.png)Regra de política de acesso 

ImportantePolíticas proibitivas podem causar grandes danos ao dispositivo, levando inclusive ao bloqueio total da interatividade.  


#### Descobrir caminho do binário

CuidadoAo criar regras, certifique\-se de usar o caminho absoluto.

1. Acesse o terminal do Linux.
2. Digite **which \[comando]** para descobrir o caminho do binário.

**Exemplo:**


```
user@Workstation:~$ which ls
/usr/bin/ls

```
#### Descobrir se é um link simbólico

Certifique\-se de que não é um link simbólico através do comando **readlink \[caminho do comando]** ou **ls \-la \[caminho do comando]**

**Exemplo com readlink:**

1. Acesse o terminal do Linux.
2. Digite **readlink \[caminho do comando]**. Caso não retorne nada como no exemplo, significa que não é um link simbólico.


```
user@Workstation:~$ readlink /usr/bin/ls 	

```
Neste outro exemplo, retornou o caminho do link simbólico do comando vim:


```
user@Workstation:~$ readlink /usr/bin/vim                                               
/etc/alternatives/vim

```
**Exemplo com ls \-la:**

1. Acesse o terminal do Linux.
2. Digite **ls \-la \[caminho do comando]**. Caso não retorne nada como no exemplo, significa que não é um link simbólico.


```
user@Workstation:~$ ls -la /usr/bin/ls
-rwxr-xr-x 1 root root 147176 Oct 23  2021 /usr/bin/ls

```
Neste outro exemplo, retornou o caminho do link simbólico do comando vim:


```
user@Workstation:~$ ls -la /usr/bin/vim
lrwxrwxrwx 1 root root 21 out 22 21:03 /usr/bin/vim -> /etc/alternatives/vim

```
  


Essas regras também se aplicam para comandos executados em scripts. O GO Endpoint Manager para Linux possui um módulo de segurança que cumpre as políticas em qualquer cenário e não realiza distinção entre execuções de usuário ou script.

