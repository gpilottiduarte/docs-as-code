## Alguns cenários para Troubleshooting



---

**Erro:** o senhasegura não importa todos os usuários do Active Directory.

**Solução:** após configurar e integrar o Active Directory ao senhasegura, alguns usuários podem não ser importados. Este erro é resultante da configuração incorreta do bind.



---

**Erro:** uso do CPU em 100% no senhasegura.

**Solução:** uma das principais causas do senhasegura consumir 100% de CPU são sessões presas no ambiente. Execute o comando `ps aux | grep guacd` através da credencial mt4adm e verifique o consumo das sessões exibidas.

