# Parâmetros para o comando orbit tenant

Este documento irá descrever os parâmetros que podem ser utilizados em conjunto com o comando orbit tenant para gerenciamento de tenants no senhasegura.

## Parâmetros

| Parâmetro | Descrição |
| ----- | ----- |
| `create <tenant name>` | Cria um novo tenant com o nome indicado. |
| `disable <tenant name>` | Desabilita o tenant indicado. |
| `enable <tenant name>` | Habilita o tenant indicado. |
| `list` | Lista todos os tenants da instância em questão. |
| `configure <tenant name>` | Configura o tenant indicado. |
| `synchronize <tenant name>` | Sincroniza a configuração do tenant indicado com todos os nós da instância. Este comando irá reconfigurar o tenant indicado. |

## Flags

Os parâmetros ainda podem conter flags, que irão ajudar a executar o comando `orbit tenant` da forma necessária.

| Flag | Descrição | Parâmetro que aceita a flag |
| ----- | ----- | ----- |
| `-h` e `--help` | Imprime na tela a ajuda do parâmetro. | Todos. |
| `--force` | Força a execução do comando. | `create`, `disable`, `enable`, `configure` e `synchronize` |