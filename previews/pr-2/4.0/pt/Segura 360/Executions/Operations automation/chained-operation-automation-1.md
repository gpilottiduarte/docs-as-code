# Operação encadeada

Automatizar as operações de alteração de senha permite que usuários com privilégios de administrador realizem operações, como alteração de senha vinculada, automática ou manualmente.

:::(info) (**Info**)
A execução vinculada é entendida como uma operação onde **a senha de uma credencial de destino deve ser replicada para vários destinos diferentes**. Às vezes, contendo sistemas diferentes que exigem executores e modelos diferentes.
Por exemplo: Garantir que a senha do banco de dados seja replicada para serviços hospedados em servidores Linux e Windows.

Usando a sintaxe de elaboração do script de automação, você pode determinar se a operação será executada quando todas as credenciais forem alteradas com sucesso ou mesmo quando apenas parte delas tiver sido executada com sucesso.
:::

Na configuração de um script de execução, é possível selecionar a operação a ser realizada, bem como a força das senhas alteradas.

A execução também pode ser configurada automaticamente em dias e períodos predeterminados. Você também pode selecionar um intervalo mínimo entre as execuções de alteração de senha vinculadas.

:::(Warning) (**Atenção**)
Para exemplificar seu uso neste documento utilizaremos a automação para executar scripts de alteração de senha, porém esta funcionalidade pode ser utilizada para qualquer script. 
:::

---
## SQL Linked Server

Usando o **Segura Operation Automation**, você pode alterar facilmente as senhas dos Microsoft®SQL Server Linked Servers replicando contas usando modelos prontos para uso do Segura para instâncias do SQL Server.

O Segura oferece dois modelos diferentes para lidar com **configuração de porta dinâmica** ou **configuração de porta estática**.

:::(Warning) (**Atenção**)
Quando o SQL Server trabalha com configuração de porta dinâmica, você deve configurar o dispositivo Segura com a porta UDP onde o SQL Server publicará em qual porta TCP o SQL Server está sendo executado.
:::

![image-1665071199812.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1665071199812%281%29.png){height="" width=""}

O Segura então primeiro consultará a porta UDP para a porta TCP correta onde o SQL Server está aceitando conexões de banco de dados. Assim, o Segura se conectará a esta porta para realizar as tarefas do modelo.

Concluída esta primeira instância, e não importa se foi executada com sucesso ou não, o Segura se conectará ao próximo servidor e seguirá.

A principal diferença entre o uso de operação encadeada e credencial pai é que na operação encadeada você pode usar uma sintaxe especial para determinar qual modelo deve ser substituído para ambientes de Servidor Vinculado.

---
:::(Internal) (Private notes)
## Registrar uma automação

Para cadastrar uma automação, acesse o menu **Executions > Automação de operações > Automações**

1. Clique no botão de ações e selecione a opção **Novo**  
2. Na guia de **Configurações**, preencha os seguintes campos:  
   * **Nome da automação:** Nome. Apenas para controle interno  
   * **Operação:** tipo de automação. Nesta versão, apenas a opção **Chained exchange** estará disponível  
   * **Força da senha:** Força da senha usada para automação. **Recomendamos usar a política de senha de dispositivo mais fraca para garantir que todos os membros da cadeia recebam a mesma senha.**  
   * **Script de execução:** script que compõe a cadeia de execução entre dispositivos  
   * **Ativo:** indica se a automação está ativa para uso ou não  
3. Na guia **Execução**, preencha os seguintes campos:  
   * **Habilitar execução automática:** indica se a execução automática de automação está ativa ou não. Se ativado, o Segura realizará sua execução de tempos em tempos  
   * **Dias para execução:** a automação será executada em dias selecionados da semana  
   * **Períodos de execução:** A automação será realizada nos períodos selecionados  
   * **Intervalo mínimo entre execuções:** Intervalo mínimo entre execuções em horas  
4. Clique no botão **Salvar** para concluir as configurações.
:::
---

## A sintaxe de um script de automação

O script dará a sequência pela qual cada dispositivo será alcançado. Portanto, é importante que você já tenha essas informações mapeadas corretamente antes de começar a escrever o script.

### `check_conn`

Requer a validação da conectividade dos dispositivos de destino antes de iniciar o processo. Se o dispositivo de destino não estiver acessível, aborte a operação. Ele não contém argumentos adicionais e é preferível que este comando esteja no início do script.

### `rollnack`

Reverta a automação se nenhuma alteração for feita. A própria reversão será realizada apenas no final de toda a execução. Ou seja, em uma mudança de 10 credenciais, se ocorrer um erro na quarta credencial, ela ainda continuará executando as demais até o final e assim reverterá toda a operação.

Isso garante visibilidade ao administrador de quais credenciais estão com problemas.

Caso o comando de reversão não seja adicionado, o Segura realizará a alteração para todas as credenciais desejadas, mas não realizará a reversão se ocorrer um erro em uma, algumas ou todas as credenciais.

### `linked_tpl uint: id`

Determina qual template será usado para alterar as senhas ao lidar com um Linked Server.

Isso faz com que o modelo de alteração configurado na credencial seja ignorado e substituído pelo modelo designado no script.

O parâmetro `id` é um número inteiro positivo referente ao Id do template desejado.

### `change string: type uint: id string: is_linked`

Altera a **Credencial** ou o **Conjunto de credenciais**, determinado pelos parâmetros `type` e `id`.

Se o parâmetro `is_linked` for preenchido com `linked`, o template determinado pelo comando `linked_tpl` será usado para a mudança.

O parâmetro `type` pode variar entre `cred` para quando o valor de `id` for o ID de uma credencial, ou `pool` quando o valor de `id` for o ID de um conjunto de credenciais.

O parâmetro `id` sempre será um número inteiro positivo.

Veja o exemplo abaixo para melhor compreensão.


```Json
## Lines started with sharp are comment

## Force connectivity validation before usage
check_conn

## Sets the linked server template.
## Its will use the template id 87
linked_tpl 87

## Sets the rollback flag
rollback

#### Sets the credential's or pool's change chain

## Change credentials 120 to 122.
## But credential 122 must use linked server template
change cred 120
change cred 121
change cred 122 linked

## Change credential pool 42 and 45
change pool 42
change pool 45
```

---
:::(Internal) (Private notes)
## Execute uma automação

Para executar uma automação, acesse o menu **Executions > Operations Automation > Automation**.

Clique no botão **Executar**. A automação das operações será agendada e o usuário poderá acompanhar o resultado no menu **Ver execuções**, descrito abaixo.

info
Em ações inativadas, a opção de execução é desativada.


## Ver execuções

Para visualizar o histórico de execução da automação, acesse o menu **Executions > Operations Automation > Executions**.

Nesta tela, é possível visualizar diversas informações sobre as execuções de automação, como número de operações realizadas, resultado da execução, se processada, finalizada com erro, bem como o usuário solicitante e a data de execução da solicitação.

Clique no botão **Visualizar operações** para obter mais detalhes sobre o resultado de sua operação. Cada registro nesta tela corresponde à execução de cada credencial de destino.

Quando o script é configurado para executar um **Pool de Credenciais**, cada credencial no pool será mostrada registro por registro.
:::
