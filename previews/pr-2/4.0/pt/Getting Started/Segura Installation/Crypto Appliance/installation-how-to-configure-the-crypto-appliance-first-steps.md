# Como configurar o Crypto Appliance: primeiros passos

Neste artigo você encontra os primeiros passos para configurar o **Crypto Appliance**.

::: (Warning) (Atenção) 
Para realizar os passos abaixo, você precisará das credenciais exclusivas do seu Crypto Appliance, recebidas após a compra. Se ainda não as possui, solicite-as em nosso [Portal de suporte](https://suporte.senhasegura.com.br/en/support/login){target=`_blank`}.

:::
## Requisitos

* Aparelho físico.
* Monitor e teclado.
* 2 cabos de rede.



## Passo 1: Conectar o iDRAC

1. Conecte um cabo de rede ao iDRAC (iDRACport).
2. Conecte um cabo de rede à interface (porta 1).
3. Conecte o monitor e o teclado.




## Passo 2: Configurar a rede do iDRAC


1. Ligue o sistema gerenciado.
2. Durante o autoteste de inicialização (POST), pressione `F2`.
3. No **Menu de Configuração do Sistema**, selecione **Configurações do iDRAC**. Isso abrirá a página de configurações do iDRAC.
4. Clique em **Rede**. A página de configurações de rede será exibida.
5. Configure as opções de rede conforme a seguir:
    
    5.1. Em **Ativar NIC**, selecione **Ativado**.
    5.2. No menu suspenso **Seleção de NIC**, selecione uma das seguintes portas com base no requisito de rede:


    * **Dedicado**: permite que o dispositivo de acesso remoto use a interface de rede dedicada disponível no controlador de acesso remoto. Essa interface não é compartilhada com o sistema operacional do host. Observe que as opções **Dedicadas** são exibidas em servidores blade como Chassi (Dedicado).
     * **LOM1**.
    * **LOM2**.
     * **LOM3**: pode não estar disponível dependendo do modelo do servidor e da seleção da placa de rede.
     * **LOM4**: pode não estar disponível dependendo do modelo do servidor e da seleção da placa de rede.


    5.3. No menu suspenso **Failover Network**, selecione um dos LOMs restantes. Se uma rede falhar, o tráfego será roteado pela rede de failover. Esta opção é desativada se a **Seleção de NIC** estiver definida como **Dedicado**.
    5.4. Em **Negociação automática**, selecione **Ativado** se o iDRAC precisar definir automaticamente o modo duplex e a velocidade da rede. Esta opção está disponível somente para o modo **Dedicado**.
    5.5. Em **Velocidade da rede**, selecione **10 Mbps** ou **100 Mbps**. A opção de **1000 Mbps** estará disponível apenas se a **Auto-Negotiation** estiver habilitada.

    5.6. Em **Modo Duplex**, selecione a opção **Half Duplex** ou **Full Duplex**. Esta opção será desativada se a **Auto-Negotiation** estiver definida como **Ativada**.


6. Configurações comuns: 
    
    6.1. Se a infraestrutura de rede tiver um servidor DNS, registre o iDRAC no DNS. Estes são os requisitos de configurações iniciais para recursos avançados, como serviços de diretório — Active Directory ou LDAP, SSO e smart card. Para registrar o iDRAC:




    * Habilite Registrar DRAC no DNS.
    * Digite o nome DNS DRAC.
    * Selecione **Auto Config Domain Name** para adquirir um nome de domínio do DHCP automaticamente ou forneça o DNS Domain Name.



7. Defina as configurações de IPv4, seguindo estes passos:
    
    7.1. Selecione **Ativado** em **Ativar IPv4**.
    7.2. Selecione **Ativado** em **Ativar DHCP** para atribuir automaticamente o endereço IP, gateway e máscara de sub-rede ao iDRAC. Como alternativa, selecione **Desativado** e insira os valores para:


    * Endereço IP estático.
    * Gateway Estático.
    * Máscara de sub-rede estática.

8. Defina as configurações de IPv6, seguindo estes passos:
    
    8.1. Selecione a opção **Ativado** em **Ativar IPv6**.
    8.2. Para permitir que o servidor DHCPv6 atribua automaticamente o endereço IP, gateway e máscara de sub-rede ao iDRAC, selecione **Ativar configuração automática**.
    8.3. Na caixa **Endereço IP estático 1**, insira o endereço IPv6 estático.
    8.4. Na caixa **Comprimento do prefixo estático**, insira um valor entre 0 e 128.
    8.5.  Na caixa **Static Gateway**, digite o endereço do gateway.
    8.6. Se estiver usando DHCP, habilite o DHCPv6 para obter endereços do servidor DNS primário e secundário do servidor DHCPv6. Se necessário, configure o seguinte:

    * Na caixa **Servidor DNS preferencial estático**, insira o endereço IPv6 do servidor DNS estático.
    * Na caixa **Static Alternate DNS Server**, digite o endereço do servidor DNS alternativo estático.


9. Clique em **Voltar**.
10. Clique em **Concluir**. O pop-up **Salvar alterações** será exibido.
11. Clique em **Sim** para salvar as alterações. As informações de rede serão salvas e o sistema será reinicializado.


::: (warning) (Atenção)
Após configurar o endereço IP do iDRAC, altere o nome de usuário e a senha padrão.

:::

Para obter mais informações sobre como configurar o iDRAC9 com Lifecycle Controller, consulte a [documentação da Dell](https://www.dell.com/support/kbdoc/en-us/000177212/dell-poweredge-how-to-configure-the-idrac9-and-the-lifecycle-controller-network-ip?lwp=rt){target=`_blank`}.

## Passo 3: Configurar o endereço IP do dispositivo


1. Faça o login como usuário `root` na tela de login.
2. Acesse o arquivo de configuração de rede em `/etc/network/interfaces`  e execute o comando:
```Shell
sudo vim /etc/network/interfaces
```

3. Localize a linha referente ao endereço IP e descomente-a.
4. Insira o endereço IP desejado para o appliance.
5. Para salvar e sair do editor de texto (vim), pressione `Esc`, digite `:x`, e pressione `Enter`.
6. Reinicie o dispositivo para aplicar as configurações.


## Passo 4: Configurar a VM do senhasegura

1. No terminal do appliance, execute o comando `xl list` para obter o nome da VM senhasegura (por exemplo: `senhasegura` ou `ss-p`).
2.Em seguida, acesse a VM senhasegura utilizando o comando `xl console VM [vm name]`. Substitua `[vm name]` pelo nome obtido no passo anterior.
3. Você será redirecionado para a tela de login do senhasegura.
4. Faça o login com as credenciais de gerenciamento do senhasegura:

* **Usuário**: `mt4adm`
* **Senha**: `mt4adm` 

  :::(info) (Info)
  Após realizar o primeiro login, será necessário cadastrar uma nova senha.

  :::


5. Execute o comando `sudo orbit hostname` para alterar o nome do dispositivo (hostname) padrão, criando um código de ativação de aplicativo válido. Aguarde pela mensagem de sucesso que confirma a operação.

:::(warning) (Atenção)
É recomendado que você modifique o hostname para garantir a criação bem-sucedida de um código de ativação válido.

:::

6.  Após configurar a interface de rede, ajuste o servidor NTP para corrigir o horário do servidor com o comando:

```Shell
sudo orbit ntp --servers=SERVER1,SERVER2 --listen-interface=eth0
```
7.  Para aplicar as configurações, reinicie o dispositivo utilizando o comando:

```Shell
sudo orbit shutdown --reboot
```

* * *
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.
