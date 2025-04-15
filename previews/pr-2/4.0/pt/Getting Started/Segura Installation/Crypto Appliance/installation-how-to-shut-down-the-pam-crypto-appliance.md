# Como desligar o PAM Crypto Appliance

Este artigo fornece instruções para desligar o **PAM Crypto Appliance** usando dois métodos diferentes: 

* Por meio da interface **iDRAC** .
* Por meio de um **cliente SSH**.

## Como desligar o PAM Crypto Appliance via iDRAC

:::(Warning) (Cuidado)
Usar o comando de desligamento do **PAM Appliance** através da interface iDRAC resulta no desligamento físico do dispositivo. Para ligar o dispositivo novamente, você deve usar a mesma interface iDRAC.
:::

1. Abra o seu navegador web.
2. Insira o IP do iDRAC na barra de endereço do navegador.
3. Faça login utilizando o nome de usuário e senha da interface web do iDRAC.
4. Inicie o console virtual.
5. Faça login na máquina host utilizando o nome de usuário fornecido pelo Segura. Caso não possua essas informações, entre em contato com a equipe de suporte.
6. Execute o comando `sudo xl list` para listar as máquinas virtuais em execução no servidor.
7. Execute o comando `sudo xl console <hostname>`, onde `<hostname>` é a máquina virtual responsável pela aplicação.
8. Faça login no Segura utilizando o usuário administrador `mt4adm`.
9. Desligue a instância do Segura utilizando o comando `sudo orbit shutdwon`.
10. Para desligar o **Appliance**, execute o comando `sudo shutdown -h now` ou, na interface web do iDRAC, clique no botão **Ligar / Desligar**.

## Como desligar o PAM Crypto Appliance via Cliente SSH

Para desligar o PAM Crypto Appliance através da interface de gerenciamento do cliente SSH, siga estas etapas:

1. Inicie o cliente SSH.
2. Conecte-se via SSH usando o endereço IP de gerenciamento host.
3. Faça login na máquina host utilizando o nome de usuário fornecido pelo Segura. Caso não possua essas informações, entre em contato com a equipe de suporte.
4. Execute o comando `sudo xl list` para listar as máquinas virtuais em execução no servidor.
5. Execute o comando `sudo xl console <hostname>`, onde `<hostname>` é a máquina virtual responsável pela aplicação.
6. Faça login no Segura utilizando o usuário administrador `mt4adm`.
7. Desligue a instância do Segura, utilizando o comando `sudo orbit shutdwon`.
8. Para desligar o **Appliance**, execute o comando `sudo shutdown -h now`.



* * *

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).

