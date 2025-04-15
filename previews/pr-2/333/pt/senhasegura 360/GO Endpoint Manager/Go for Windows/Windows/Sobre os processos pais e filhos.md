# Sobre os processos pais e filhos

Qualquer aplicação inicializada a partir do **PEDM GO Endpoint Manager** client é considerada, no sistema operacional, como um processo pai e, portanto, pode inicializar processos filhos.

Este documento explica como os processos do **PEDM GO Endpoint Manager** client são identificados e tratados de acordo com listas e regras criadas no senhasegura.

## Processos pais e filhos

Cada vez que uma aplicação, ou processo, é inicializado a partir do **PEDM GO Endpoint Manager** client, esse é chamado de P1 e é avaliado a partir das seguintes condições:

1. Caso não haja nenhuma lista de acesso criada:
    * Os parâmetros gerais serão aplicados para este processo.
2. Caso não haja nenhuma lista de acesso para processos pais ou filhos:
    * As listas de acesso “comuns” serão usadas para este processo.
3. Caso haja listas de processos pais:
    * Será encontrado o processo pai imediato de P1, considerando-o como P0. Uma vez que este processo P0 for encontrado, as listas de acesso para processos pais serão usadas para avaliação dele e se ele não estiver de acordo com nenhuma das listas, os parâmetros gerais serão aplicados.
4. Caso haja apenas listas de processos filhos:
    * O PEDM GO Endpoint Manager client tentará encontrar o processo pai de P1, se encontrar, isso significa que é um processo filho, portanto, as listas de processos filhos serão aplicadas para P1.
5. Caso haja listas para processos pais e listas para processos filhos:
    * As listas de processos pais são avaliadas primeiro, seguindo suas regras. Se alguma lista de processos pais estiver de acordo, ela será aplicada. Caso contrário, o PEDM GO Endpoint Manager client verifica se há listas de processos filhos. Se existirem, a validação será feita com elas. Se nenhuma estiver de acordo, as listas de acesso "comuns" serão utilizadas. Se ainda assim não houver nenhuma correspondência, serão aplicados os parâmetros gerais.

## Ordem de precedência

Ordem de precedência e prioridade de execução de listas sobre processos do **PEDM GO Endpoint Manager** client.

1. **Lista de processos pais**.
2. **Lista de processos filhos**.
3. **Lista de acesso “comum”**.
4. **Parâmetros gerais**.