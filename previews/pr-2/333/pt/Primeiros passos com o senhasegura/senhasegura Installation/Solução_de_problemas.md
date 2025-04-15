# Solução de problemas

Neste artigo, você encontra cenários comuns de problemas ao instalar e atualizar o senhasegura e também as suas soluções.

## Erro de certificado durante a atualização

### Cenário

Ao atualizar o senhasegura, você pode encontrar a mensagem de erro:  `Could not load certificates`.

### Solução

Siga estas etapas para resolver o problema e baixar os certificados necessários:

1. Execute o seguinte comando para procurar o pacote apropriado:
```Shell
apt-cache search apt-senhasegura-fix-buster

```
2. Execute o seguinte comando para remover o pacote problemático:

```Shell
apt-get purge apt-senhasegura-fix-buster

```
3. Faça o download do pacote necessário usando o seguinte comando:
```Shell
wget https://repo:HpRh0BVMNVAq@repo.senhasegura.com/apt-senhasegura-fix-buster_20191128_all.deb

```
4. Instale o pacote usando o seguinte comando:
```Shell
dpkg -i apt-senhasegura-fix-buster_20191128_all.deb

```
5. Execute o seguinte comando para remover o pacote de instalação `.deb`:
```Shell
rm apt-senhasegura-fix-buster_20191128_all.deb

```
Ao seguir estas etapas em ordem, você deverá resolver o problema `Could not load certificates` durante a atualização do senhasegura.


## Conexão com o serviço do repositório indisponível

### Cenário

Após atualizar o senhasegura, você pode encontrar a mensagem de erro:  `ERROR - Connection to repository service not available`. Isso indica uma falha na verificação entre a instância do senhasegura e o repositório de atualizações.

### Solução
Verifique a conectividade entre a instância do senhasegura e o repositório. Se necessário, consulte a documentação sobre as[ regras do firewall](/v3-33/docs/pt/installation-firewall-rules) para confirmar que as regras necessárias estão configuradas corretamente.
