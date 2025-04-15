# Sobre Níveis de segregação

Neste documento, você vai encontrar todas as informações sobre o que é, como funciona e as principais aplicabilidades dos **Níveis de segregação**.

## O que é o Nível de segregação?
É a ação de criar segmentos dentro das parametrizações globais das sessões. O que facilita o gerenciamento da política de segurança e possíveis exceções em dispositivos que não suportam certas configurações.
Por exemplo, alguns dispositivos que utilizam o protocolo RDP não suportam o nível de segurança TLS, e devem ser isolados em uma configuração separada se o nível global não estiver configurado no modo **Automático**. Outro exemplo são os dispositivos Linux que, por decisão estratégica, ou por limitações técnicas, não suportam elevação automatizada de privilégios com SUDO.

## Hierarquia da segregação
As segregações respeitam a hierarquia e a ordem de reescrita. Elas sobrepõem as configurações padrão do sistema (globais), atuando como uma cadeia de camadas de ajustes. A próxima camada sempre terá o poder de reescrever sob a camada anterior:

* Parâmetros globais (padrões do sistema).
* Parâmetros segregados para grupos.
* Parâmetros segregados para dispositivos.
* Parâmetros segregados para credenciais.
* Parâmetros segregados por origem.

Assim, um parâmetro definido na camada global pode ser sobrescrito pela segregação do grupo de acesso, que pode ser sobrescrito pela segregação do dispositivo e assim por diante, sendo a segregação por origem, a que poderá sobreescrever todas as outras.

:::(info) (**Info**)
Se um grupo, dispositivo, credencial e/ou origem estiver inserido em mais de uma segregação, será utilizada a configuração da segregação mais antiga (menor ID) daquele tipo.
:::

A camada segregadora tem a opção de manter o parâmetro atual inalterado. Portanto, não há a obrigação de definir todos os parâmetros para cada camada. Pode ser que uma sessão tenha que considerar algumas dessas regras, todas ou nenhuma. Isso torna as possibilidades de configuração mais flexíveis.

## Aplicabilidade
A segmentação pode ser feita de forma: 

* [Global](/v3-33/docs/pt/pam-session-configure-remote-session-proxy).
* [Grupos](/v3-33/docs/pt/pam-session-create-segregation-group).
* [Dispositivo](/v3-33/docs/pt/pam-session-create-segregation-device).
* [Credencial](/v3-33/docs/pt/pam-session-create-segregation-credentials).
* [Origem](/v3-33/docs/pt/pam-session-create-segregation-origin).
