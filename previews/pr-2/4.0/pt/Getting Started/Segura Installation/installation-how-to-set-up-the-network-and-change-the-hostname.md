# Como configurar a rede e alterar o hostname

Neste artigo você encontra instruções passo a passo para configurar a rede e alterar o nome do host de sua aplicação Segura.

## Requisitos

* Você deve ter a imagem da aplicação Segura instalada.

## Como configurar a rede e alterar o hostname

Para configurar a rede e alterar o hostname da sua aplicação Segura, siga estas etapas:

1. [Inicie uma sessão SSH usando o usuário administrativo da Segura](/v4/docs/pt/administration-ssh-access).

1. Para alterar o hostname padrão da sua instância, execute o seguinte comando, substituindo `<new_hostname>` pelo hostname desejado:
    ```Shell
    $ sudo orbit hostname <new_hostname>
    ```
    ::: (error) (Cuidado)
    Modificar o hostname é essencial para gerar um código de ativação de aplicativo válido.
    :::

1. Execute o seguinte comando para configurar a interface de rede principal:
    ```Shell
    $ sudo orbit network
    ```
1. Você será solicitado a inserir as seguintes informações:
    * **Endereço IP**: insira o endereço IP desejado.
    * **Máscara de sub-rede**: insira o endereço da máscara de sub-rede.
    * **Gateway**: insira o endereço do gateway.

1. Certifique-se de inserir as informações corretamente e digite 'Y'. Após a configuração, uma mensagem de confirmação será exibida.
    ::: (info) (Info)
    Se precisar configurar interfaces de rede adicionais, execute o comando `sudo orbit network interface configuration` e siga as instruções para configurar interfaces de rede adicionais, conforme necessário.
    :::

1. Após concluir as configurações da interface de rede e alterar o hostname, reinicie a instância do Segura:
    ```Shell
    $ sudo reboot
    ```

* * *
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.