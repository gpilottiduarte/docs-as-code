# Critical Patch 3.33-1

- **Patch da Versão:** v3.33-1
- **Data de lançamento do Patch:** 11-Nov-24

Este documento fornece detalhes sobre as correções e melhorias incluídas na atualização mais recente para a versão [3.33](/v4/docs/changelog).

* * *

## Segura API

### BugFix

| Item | Descrição |
|--- |---|
| 4522 | Corrigido o erro que causava a atualização automática do valor `identifier` ao atualizar uma credencial com os valores de `username`, `hostname` e `ip`. Agora, o `identifier` só será atualizado se o usuário inserir um novo valor explicitamente. |