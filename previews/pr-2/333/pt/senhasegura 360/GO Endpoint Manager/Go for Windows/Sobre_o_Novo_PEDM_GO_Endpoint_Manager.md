# Sobre o Novo PEDM GO Endpoint Manager

Após a atualização para a versão Senhasegura 3.32, os usuários existentes do GO Endpoint Manager notarão duas opções de configuração no Menu Grid - a versão anterior e a nova. No entanto, se você nunca usou o serviço GO PEDM antes, verá apenas a nova versão na interface web.

## GO Endpoint Manager Antigo vs Novo

A partir da versão 3.32, o PEDM Go Endpoint Manager para Windows adotou uma nova arquitetura para melhorar o desempenho, a segurança e introduzir novos recursos. No entanto, essas melhorias exigiram uma nova estrutura. Nas próximas versões, o **ANTIGO** Go Endpoint Manager refere-se a todas as configurações que foram executadas na versão cliente 3.31 ou versão anterior. O **NOVO** Go Endpoint Manager representa uma nova instância do Go, que opera e deve ser usada exclusivamente com o cliente na versão 3.32 ou superior.

## Qual Opção Usar

- Se você atualizou o **senhasegura** para a versão 3.32, mas ainda deseja usar o cliente **GO Endpoint Manager** 3.31, basta selecionar a opção **GO Endpoint Manager** no seu menu senhasegura. Nenhuma outra ação é necessária.
- Se você atualizou tanto o **senhasegura** quanto o cliente **GO Endpoint Manager** para 3.32, use o **Novo GO Endpoint Manager**.

:::(Warning) (Atenção)
Certifique-se de revisar a seção de [políticas de migração](#migração-de-políticas-do-go-endpoint-manager-para-novo-go-endpoint-manager) para entender como essas regras serão migradas.
:::

## Atualização do Portal de Documentação 

- Os usuários que continuam a usar o cliente PEDM GO Endpoint Manager versão **3.31 ou versão anterior** devem se referir a esta documentação: **[Windows](/v3-32/docs/go-endpoint-manager-windows-1).**
- Os usuários que atualizaram o senhasegura e o PEDM GO Endpoint Manager para Windows para a versão **3.32 ou superior** devem se referir a esta documentação: **[Novo Windows](/v3-33/docs/pt/go-endpoint-manager-windows-introduction-1)**.

## Cenários para o Cliente PEDM GO Endpoint Manager

Para a nova versão do cliente **PEDM GO Endpoint Manager**, você tem três cenários possíveis com requisitos distintos:

### Cenário 1

Você não usou o cliente PEDM GO Endpoint Manager antes. Neste caso, nenhuma modificação ocorre, mas você não poderá usar o cliente **PEDM GO Endpoint Manager** em versões anteriores a 3.32.

### Cenário 2

Você usou o cliente PEDM GO Endpoint Manager em versões anteriores a 3.31. Neste caso, você terá duas opções de **PEDM GO Endpoint Manager** - a antiga, identificada pelo nome **GO Endpoint Manager**; e a nova, identificada pelo nome **Novo GO Endpoint Manager**.

### Cenário 3

Você não pode atualizar o cliente PEDM GO Endpoint Manager para a nova versão do cliente PEDM GO Endpoint Manager 3.32. Neste caso, não será possível usar **Novo GO Endpoint Manager**.

:::(error) (Importante)
- O novo **PEDM GO Endpoint Manager** (versão 3.32) deve ser usado exclusivamente com o cliente **PEDM GO Endpoint Manager** da mesma versão, ambos atualizados.
- O **PEDM GO Endpoint Manager** anterior à versão 3.31 é compatível com o cliente **PEDM GO Endpoint Manager** nas versões 3.31, 3.30, 3.29.
:::

## Migração de Políticas do GO Endpoint Manager para Novo GO Endpoint Manager

Durante a atualização para o senhasegura 3.32, haverá uma migração automática dos dados parametrizados em seu ambiente. Esta migração ocorrerá uma vez, durante a atualização do senhasegura e nenhuma ação do usuário é necessária.

### Políticas Migradas

As políticas registradas nas seguintes páginas serão automaticamente migradas de antigas para novas:

- **Linux**
    - **Políticas de acesso**
    - **Regras para sudo**
- **Windows**
    - **Listas de acesso**
    - **Comandos**
    - **Controle de diretório e arquivo**
    - **Varredura de diretório e arquivo**
    - **Controle de registro do sistema**
- **Parâmetros Segregados**
- Estações de trabalho registradas

:::(Info) (Info)
As estações de trabalho com o cliente **PEDM GO Endpoint Manager** já registradas no senhasegura 3.31 serão mantidas mesmo após a atualização para o senhasegura 3.32. Ou seja, se uma estação de trabalho já foi registrada no senhasegura 3.31, não é necessário registrá-la novamente após a atualização do senhasegura para 3.32.
:::

### Migração Manual de Políticas

Qualquer modificação nas políticas GO nas versões 3.31 ou anteriores **depois** de atualizar para a versão 3.32 **não serão automaticamente migradas** para serem usadas com o novo GO usando 3.32 ou superior. No entanto, você pode migrar essas alterações manualmente usando o botão "Enviar para o novo Gerenciador de Endpoint GO" dentro das opções de ações da política no relatório de políticas do Go Windows.

:::(Warning) (Atenção)
Ao migrar políticas para a versão PEDM GO Endpoint Manager 3.32, elas funcionarão como na versão 3.31. No entanto, se a funcionalidade de migração manual for usada para atualizar uma política para o Novo PEDM GO Endpoint Manager, a regra na nova versão será sobrescrita pela regra antiga sendo migrada.
:::