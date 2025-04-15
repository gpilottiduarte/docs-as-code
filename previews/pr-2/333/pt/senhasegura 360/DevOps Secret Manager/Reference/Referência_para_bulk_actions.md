# Referência para bulk actions

As operações em lote para segredos dentro do senhasegura DevOps Secret Manager estão acessíveis através do caminho **Grid Menu > DevOps Secret Manager > Gestão de segredos > Segredos > Bulk action**, representado pelo botão no rodapé da página.

O processo de operações em lote é dividido em 3 passos: *Escolha da operação, Escolha dos segredos* e *Confirmação*.

## Passo 1: Escolha da operação

| Item                       | Descrição                                                          |
| -------------------------- | -------------------------------------------------------------------- |
| **Inativar segredos DSM** | Opção para iniciar o processo de inativação em lote de segredos. |
| **Ativar segredos DSM**   | Opção para iniciar o processo de ativação em lote de segredos.   |
| **Expirar segredos DSM**  | Opção para iniciar o processo de expiração em lote de segredos.  |

No canto inferior direito você tem o botão **Próximo**, para avançar para o passo 2.

## Passo 2: Escolha dos segredos

| Item                | Descrição                                                                                                                                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Segredos+** | Opção para adicionar os segredos que você deseja operar em lote. Ao clicar no sinal de adição, você será direcionado para o modal **Segredos**,onde poderá escolher os segredos que serão alterados. |

### Modal Segredos

| Item                 | Descrição                                                                |
| -------------------- | -------------------------------------------------------------------------- |
| **Código**         | Código de cadastro do segredo dentro do senhasegura.                      |
| **Nome**            | Nome do segredo dentro do senhasegura.                                     |
| **Identidade**      | Nome da identidade atrelada ao segredo em questão dentro do senhasegura.  |
| **Engine**          | Nome da engine atrelada ao segredo em questão dentro do senhasegura.      |
| **Expiration date** | Data de expiração atrelada ao segredo em questão dentro do senhasegura. |

Para realizar a busca, clique no botão **Filtrar**; para limpar os campos e reiniciar o processo, clique no botão **Limpar**.

Os resultados dos segredos serão apresentados em forma da lista dentro do modal **Segredos**, seguindo os campos existentes no filtro, adicionados de:

* **Checkbox**: selecione para adicionar esse segredo à sua seleção.
* **Environment**: ambiente atrelado ao segredo em questão dentro do senhasegura.
* **Cancelar**: botão para cancelar a seleção de segredos da operação em lote. Fecha o modal.
* **Adicionar**: botão para adicionar a seleção de segredos à operação em lote. Fecha o modal.

No canto inferior direito você tem dois botões: **Próximo**, para avançar para o passo 3; **Anterior**, para voltar ao passo 1.

## Passo 3: Confirmação

| Item                         | Descrição                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Alterações**       | Indica qual alteração está sendo feita. Pode ser do tipo**Ativação** (o campo **Ativo** recebe o valor **Sim**), **Inativação** (o campo **Ativo** recebe o valor **Não**) ou **Expiração** (**Data de expiração** recebe o valor da hora atual do sistema do usuário no formato `DD/MM/AAAA HH:MM:SS`). |
| **Entidades afetadas** | Indica os segredos (entidades) que serão afetados pela alteração.                                                                                                                                                                                                                                                                                                    |

Os segredos afetados pelas alterações são listados abaixo da seção Entidades afetadas e contam com os seguintes campos:

| Item                 | Descrição                                                                |
| -------------------- | -------------------------------------------------------------------------- |
| **Código**         | Código de cadastro do segredo dentro do senhasegura.                      |
| **Secret name**     | Nome do segredo dentro do senhasegura.                                     |
| **Identidade**      | Nome da identidade atrelada ao segredo em questão dentro do senhasegura.  |
| **Engine**          | Nome da engine atrelada ao segredo em questão dentro do senhasegura.      |
| **Environment**     | Nome do ambiente atrelado ao segredo em questão dentro do senhasegura.    |
| **Expiration date** | Data de expiração atrelada ao segredo em questão dentro do senhasegura. |

No canto inferior direito você tem dois botões: **Salvar**, para finalizar o processo e salvar a requisição de operação em lote; **Anterior**, para voltar ao passo 2.