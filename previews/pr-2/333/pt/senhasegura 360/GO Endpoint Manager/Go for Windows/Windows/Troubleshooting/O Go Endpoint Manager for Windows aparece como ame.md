# O Go Endpoint Manager for Windows aparece como ameaça no antivírus

## Cenário

Ao rodar o antivírus no sistema, o agente do Go Endpoint Manager aparece como ameaça, comprometendo o funcionamento e desempenho da solução PEDM da senhasegura.

* * *

## Causa

Alguns antivírus consideram o acesso a determinados recursos do sistema como suspeitos e criam um alerta para a solução PEDM. Além disso, atualizações e novas versões para melhoria das funcionalidades e segurança do produto favorecem essa possibilidade. O  banco de dados dos antivírus pode não reconhecer imediatamente as mudanças, gerando um alerta de falso positivo.

* * *

## Solução

Para resolver o problema, siga essas etapas:

1. Na ferramenta de antivírus, localize a lista de exclusão.
2. Adicione as [exceções](/v3-33/docs/pt/go-windows-antivirus-exclusions). 

Agora o antivírus não inspecionará mais os diretórios e arquivos que você adicionou. O agente do Go Endpoint manager for Windows já pode realizar todas as funcionalidades sem a interferência que comprometia sua performance e integridade.

* * *
Você ainda tem dúvidas? Entre em contato com a [comunidade senhasegura](https://community.senhasegura.io/){target="_blank"}.
