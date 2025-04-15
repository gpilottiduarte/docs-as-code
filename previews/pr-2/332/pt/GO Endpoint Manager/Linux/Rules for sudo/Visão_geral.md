# Visão geral

Esta funcionalidade substitui o sudo padrão, ajudando a simplificar, centralizar e gerenciar as regras de uso do sudo. As regras definem quais comandos os usuários têm permissão de executar como sudo e elevar privilégio quando o usuário não faz parte do grupo de usuário sudoers. 

Você pode aplicar regras nos seguintes cenários:

* **Nova regra do sudo geral:** esta regra será aplicada a todos os usuários e workstations. Os usuários devem estar no grupo gonix.
* **Nova regra sudo para workstation:** esta regra será aplicada apenas para workstations específicas. Os usuários nas workstations devem estar no grupo gonix.
* **Nova regra sudo para usuário:** esta regra será aplicada apenas para usuários específicos. Não é necessário estar no grupo gonix.

:::(Warning) (Cuidado)
Ao criar regras para o mesmo comando, a regra nova se sobrepõe à antiga.
:::

As regras obedecem a seguinte ordem de prioridade:

1. Regra de sudo para usuário
2. Regra de sudo para workstation
3. Regra de sudo geral

## Adicionar usuário ao grupo Gonix
Todo usuário que utilizará as regras para o sudo (geral, workstation e usuário), precisar ser adicionado ao grupo "gonix". Siga os passos:

1. Acesse o terminal onde o GO Endpoint Manager para Linux está instalado.
2. Digite este comando para adicionar o usuário ao grupo gonix:
```shell
sudo usermod -a -G gonix USERNAME
```
3. Digite este comando para criar a senha para o usuário sudo:
```shell
 sudo passwd USERNAME
```
4. Digite este comando para validar se o usuário faz parte do grupo gonix:
```shell
sudo getent group gonix
```