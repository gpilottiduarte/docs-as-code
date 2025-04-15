# Sobre Máscaras para o RemoteApp

Você pode utilizar as máscaras abaixo para que, durante a automação, o RemoteApp substitua a máscara pela informação contida na credencial.

**Tag**|**Descrição**
---|---
[username]|Utiliza o campo username da credencial.
[password]|Utiliza o campo password da credencial.
[domain]|Utiliza o campo domínio da credencial.
[info_adicional] ou [add_info]|Utiliza informação adicional da credencial.
[hostname]|Utiliza o nome do dispositivo.
[host_ip]|Utiliza o endereço IP do dispositivo.
[port]|Busca a porta cadastrada no dispositivo.



:::(info) (**Info**)
As máscaras podem ser utilizadas tanto no campo **Parâmetros** quanto no script do campo **Macro**, quando no campo **Tipo** a opção **Simulação de usuário** estiver selecionada.
:::

Para utilizar as máscaras acesse o documento [Como cadastrar um RemoteApp](/v4/docs/pt/pam-session-how-to-register-a-remoteapp).

:::(warning) (**Atenção**)
As automações do RemoteApp para o EPM Windows suportam máscaras diferentes. Para obter mais informações, acesse o documento sobre a [Automação EPM Windows](/v4/docs/pt/go-endpoint-manager-about-automation).
:::
