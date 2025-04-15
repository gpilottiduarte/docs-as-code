# Operações em lote para segredos

Caso seja necessário, você pode utilizar as operações em lote para ativar, inativar ou expirar os segredos cadastrados no senhasegura DevOps Secret Manager (DSM).

:::(info) (Info)
Como feedback visual, você pode acompanhar a etapa que se encontra no momento. Para isso, observe a porção superior da tela de listagem de credenciais para situar-se no processo.
:::

## Fazer alterações em lote em segredos do DSM

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **DevOps Secret Manager**.
2. No menu lateral, selecione **Segredos**.
3. Na página de listagem de segredos, selecione aqueles que você deseja alterar e, no canto inferior direito, clique em **Bulk Action**.
4. Escolha o tipo de alteração. É possível escolher três opções: *Inativar segredos DSM, Ativar segredos DSM* e *Expirar segredos DSM*.

:::(warning) (Atenção)
Para realizar qualquer uma das operações em lote, é necessário que exista aprovadores. Para mais informações, acesse a documentação sobre Como cadastrar um usuário aprovador.
:::

## Ativar segredos em lote no DSM

:::(info) (Info)
A opção de operação em lote permite ativar ou reativar vários segredos ao mesmo tempo. Perceba, contudo, que somente segredos inativos podem ser selecionados para ativação.
:::

1. Após selecionar a opção **Ativar segredos**, localizada na porção lateral esquerda da tela, clique em **Próximo**.
2. Agora, você poderá escolher os segredos que deseja ativar. Para isso clique no ícone de soma ao lado da palavra **Segredos**.
3. No modal **Segredos**, selecione todos aqueles segredos que você deseja ativar. Você pode utilizar as ferramentas de busca no topo do modal.
4. Clique em **Adicionar**.
5. Clique em **Próximo**.
6. Na terceira etapa, você tem duas seções:
   1. **Alterações**: exibe os campos que foram alterados, nesse caso `Ativo - Sim`.
   2. **Entidades afetadas**: exibe informações sobre as entidades afetadas pela operação em lote, tais como: *Código, Secret name, Identidade, Engine, Environment* e *Expiration Date.*
7. Para confirmar clique em **Salvar**.

## Inativar segredos em lote no DSM

:::(info) (Info)
A opção de operação em lote permite inativar vários segredos ao mesmo tempo. Perceba, contudo, que somente segredos ativos podem ser selecionados para inativação.
:::

1. Após selecionar a opção **Inativar segredos**, localizada na porção lateral esquerda da tela, clique em **Próximo**.
2. Agora, você poderá escolher os segredos que deseja inativar. Para isso clique no ícone de soma ao lado da palavra **Segredos**.
3. No modal **Segredos**, selecione todos aqueles segredos que você deseja inativar. Você pode utilizar as ferramentas de busca no topo do modal.
4. Clique em **Adicionar**.
5. Clique em **Próximo**.
6. Na terceira etapa, você tem duas seções:
   1. **Alterações**: exibe os campos que foram alterados, nesse caso `Ativo - Não`.
   2. **Entidades afetadas**: exibe informações sobre as entidades afetadas pela operação em lote, tais como: *Código, Secret name, Identidade, Engine, Environment* e *Expiration Date.*
7. Para confirmar clique em **Salvar**.

## Expirar segredos em lote no DSM

:::(info) (Info)
A opção de operação em lote permite expirar vários segredos ao mesmo tempo. Perceba, contudo, que apenas segredos ativos podem ser expirados.
:::

1. Após selecionar a opção **Expirar segredos**, localizada na porção lateral esquerda da tela, clique em **Próximo**.
2. Agora, você poderá escolher os segredos que deseja expirar. Para isso clique no ícone de soma ao lado da palavra **Segredos**.
3. No modal **Segredos**, selecione todos aqueles segredos que você deseja expirar. Você pode utilizar as ferramentas de busca no topo do modal.
4. Clique em **Adicionar**.
5. Clique em **Próximo**.
6. Na terceira etapa, você tem duas seções:
   1. **Alterações**: exibe os campos que foram alterados, nesse caso `Data de Expiração - DD/MM/AAAA HH:MM:SS`.
      1. A data de expiração assumirá o valor da data e horário atual do sistema do usuário.
   2. **Entidades afetadas**: exibe informações sobre as entidades afetadas pela operação em lote, tais como: *Código, Secret name, Identidade, Engine, Environment* e *Expiration Date.*
7. Para confirmar clique em **Salvar**.

Caso não tenha ocorrido nenhum erro, você verá uma mensagem de sucesso: "**Solicitação de operação em lote criada"**. A operação será executada após aprovação dos responsáveis. Em conjunto com um botão de atalho para a seção de **Operações em lote** do senhasegura.

Após a conclusão do processo, será necessária a aprovação de um usuário que esteja cadastrado como aprovador para o módulo do DSM para que as alterações sejam aplicadas.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).