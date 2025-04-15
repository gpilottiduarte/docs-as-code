# Como configurar o endereçamento e o  serviço SNMP

Neste artigo você encontra instruções sobre como configurar o endereçamento e o serviço SNMP do iDRAC. 


## Como configurar o endereçamento

Para configurar o endereçamento do iDRAC, siga estes passos:

1. Na interface de gerenciamento do iDRAC, acesse  **Overview > iDRAC Settings > Network**.
2. Preencha os seguintes campos:
    * **Enable IPv4**: se esta opção for selecionada, o protocolo IPv4 será ativado. Por padrão, ele sempre deve ser selecionado.

    * **Enable DHCP**: se esta opção estiver selecionada, o protocolo DHCP será ativado para atribuir o IP do servidor.
    * **Use DHCP to obtain server DNS addresses**: se esta opção for selecionada, o protocolo DHCP será utilizado para obter endereço do servidor DNS.


3. Se o campo **DHCP Enable** não estiver selecionado, preencha os campos a seguir:

    * **Static IP Address**: IP do servidor.
    * **Static Gateway**: gateway do servidor.
    * **Static Subnet Mask**: máscara de sub-rede do servidor.

4. Na guia **Serviços**, preencha os seguintes campos:


    * **SNMP Community Name**: nome da comunidade SNMP.
    * **SNMP Protocol**: indica qual protocolo SNMP será usado.
    * **SNMP Discovery Port Number**: número da porta de comunicação de descoberta.


5. Clique em **Apply** para aplicar as configurações.

## Como configurar o serviço SNMP

### Requisitos 

* Você deve identificar o formato da versão suportada pelo ambiente e a ferramenta que irá monitorar o **PAM Crypto Appliance**. 


* Para usar o **SNMP v3**, você deve criar um usuário com privilégios para o processo de autenticação entre a ferramenta de monitoramento e o **PAM Crypto Appliance**.




### Como configurar o serviço SNMP com as informações da ferramenta de monitoramento


1. Na interface de gerenciamento do iDRAC, acesse **Overview > Server > Alerts**.
2. Preencha os seguintes campos:
    * **Alerts**: indica se o serviço de alerta está ativo ou não.

    * **Category**: selecione as categorias dos alertas que serão enviados.

    * **Severity**: selecione a criticidade dos alertas que serão enviados.


3. Na aba **SNMP and Email Settings**, preencha os seguintes campos:
    *  **State**: indica se o destino do alerta está ativo ou não.
    *  **Destination Address**: insira o IP do servidor de destino para envio de alertas.

    *  **SNMP v3 Users**: selecione o usuário SNMP.
    *  **Community String**: insira o *community string* name.
    *  **SNMP Alert Port Number**: insira o número da porta para envio de alertas. 


4. No campo **SNMP Trap Format**, selecione o formato dos SNMP traps.

5. Clique em **Apply** para aplicar as configurações.

### Como criar um usuário SNMP v3

Para criar um usuário SNMP v3, siga estes passos:

1.Na interface de gerenciamento do iDRAC, acesse  **Overview > iDRAC Settings > User Authentication**.

:::(info) (Info)
Os usuários configurados no iDRAC serão exibidos com seus status e respectivos privilégios.
:::
2. Selecione um usuário que tenha o valor **Disabled** no campo **State**.

3. Selecione a opção **Configure User** na seção **User Configuration**.
4. Click **Next**.
5. Na seção **General**, preencha os seguintes campos:
    * **Enable User**: selecione esta opção para ativar o usuário.
    * **User Name**: insira o username para login do usuário.
    * **Change Password**: se esta opção estiver selecionada, o usuário deverá alterar a senha no primeiro acesso.

    * **New Password**: insira a senha do usuário.
    * **Confirm New Password**: confirme a senha do usuário.


6. Na seção **SNMP v3**, preencha os seguintes campos:

    * **Enable SNMP v3**: selecione esta opção para ativar o protocolo SNMP v3.

    * **Authentication type**: selecione o tipo de autenticação do protocolo SNMP v3.

    * **Privacy type**: selecione o tipo de privacidade.


7. Na seção **iDRAC User Privileges**, ative a opção **System Control**.
8. Clique em **Apply** para aplicar as configurações.


* * *
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.
