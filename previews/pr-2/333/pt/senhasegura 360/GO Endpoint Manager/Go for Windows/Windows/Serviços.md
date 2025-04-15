O GO Endpoint Manager para Windows é composto por:

* Um módulo de administração centralizada na plataforma senhasegura.
* Um agente instalado na estação de trabalho do usuário.

O agente GO Endpoint Manager para Windows conta com três aplicações disponíveis no processo de instalação personalizada: 

* + [**Core**](/v3-33/docs/pt/go-endpoint-manager-windows-agent-core)
	+ [**Automation**](/v3-33/docs/pt/go-endpoint-manager-windows-agent-automation)
	+ [**Vault**](/v3-33/docs/pt/go-endpoint-manager-windows-agent-vault)

CuidadoA opção de três aplicações está disponível apenas para a versão 3\.27 (ou superior). A versão legacy conta apenas com a aplicação GO Endpoint Manager**.**

---

## Serviços

### Serviços Windows

* Os serviços podem ser executados automaticamente com o usuário `LOCAL_SYSTEM`
* O [**Microsoft Isolated Storage**](https://learn.microsoft.com/en-us/dotnet/standard/io/isolated-storage) armazena os dados sigilosos de maneira segura, seguindo os padrões descritos pela Microsoft.
* Os dados transferidos entre a plataforma senhasegura e o GO Endpoint Manager para Windows ocorrem através de conexão `HTTPS` e `API REST`. Essa comunicação ocorre nos serviços do GO Endpoint Manager para impedir a captura por usuários logados.
* As mensagens trocadas possuem criptografia assíncrona adicional com chave randômica.

### go Service

É o serviço responsável por qualquer interação que ocorra no sistema, como:

* Serviço IDS (Intrusion Detection System) para bloqueio de aplicações executadas fora do GO Endpoint Manager para Windows.
* Serviço de IDS para bloqueio de aplicações que façam comunicação TCP/IP e UDP para destinos que não sejam o cofre de senhas.
* Possibilidade da identificação de aplicativos que estejam automaticamente elevando privilégio sem conhecimento do usuário, ou até sob seu consentimento.
* Processamento do arquivo de licença e do registro da máquina no servidor, sincronização de logs e monitoramento de pastas e de arquivos.
* Impedimento da clonagem de workstation, de tentativa de uso indevido do GO Endpoint Manager para Windows por uma workstation ou por um usuário fantasma.
* Impedimento do salto horizontal através de compartilhamento de redes ou acessos binários não aprovados a recursos de rede.
* Serviço de interconexão responsável pela sincronização de quaisquer configurações do GO Endpoint Manager para Windows.
* Serviço de interligação com Kernel Windows para elevação de privilégios e controle de sessões.
* Programa de gravação (Recorder).

CuidadoQuando você acessar o**Gerenciador de tarefas**no Windows, verifique se os seguintes serviços estão sendo executados:  
**Versão 3\.25 e 3\.26:** IDS Network, IDS Process, License, Proxy Service, Recorder, e Sync Service.  
**Versão 3\.27:** go Service.

---

## Demais integrações

O GO Endpoint Manager para Windows também está integrado por DLLs e Drivers que possibilitam atuação nos processos do Windows que envolvam identificação por parte do usuário, como:

* Login
* Acesso RDP
* Elevação UAC

InfoÉ possível configurar a obrigatoriedade do uso do token MFA para aumentar o nível de segurança nas elevações.

