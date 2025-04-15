# Aplicações do painel de controle não eleva privilégio

## Cenário
Ao habilitar em parâmetros gerais a configuração de elevação **Usuário pode elevar aplicações**, e executar um aplicativo do Painel de controle, o aplicativo não executa com privilégios.

* * *
## Solução
Para remediar este problema, existem duas alternativas caso a aplicação não execute com privilégio.

### Solução 1

* Você pode habilitar o Just In Time (JIT) em parâmetros do GO Windows seguindo os passos do artigo [Acesso JIT.](https://docs.senhasegura.io/v3-33/docs/pt/go-endpoint-manager-windows-jit-acess)


### Solução 2
* Você pode habilitar o UAC em parâmetros do GO Windows seguindo os passos do artigo [Integração com UAC.](https://docs.senhasegura.io/v3-33/docs/pt/go-endpoint-manager-windows-uac-integration)


* * *

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura.](https://community.senhasegura.io/)