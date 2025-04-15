# Como gerenciar dispositivos utilizando bulk actions

Neste documento você aprenderá como realizar a modificação de senhas utilizando a funcionalidade de *bulk action* para dispositivos cadastrados na plataforma  Segura.

:::(info) (Info)
Como feedback visual, você pode acompanhar a etapa que se encontra no momento. Para isso, observe a porção superior da tela de operação em lote para situar-se no processo.

*Bulk Action* refere-se à capacidade de realizar diversas tarefas ao mesmo tempo, ou seja, realizar operações em lote.
:::

## Requisitos

* Para que o aprovador tenha acesso à tela de aprovação é necessário que ele tenha o perfil mínimo de *PAM Operator, PAM Administrator* ou *System Administrator*.

## Alterar dispositivos PAM

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione  **Dispositivos**.
2. No menu lateral, selecione **Dispositivos**.
3. Na página de listagem de dispositivos, selecione os dispositivos que deseja alterar e escolha o tipo de alteração que deseja realizar.
   1. É possível escolher três opções: *Editar, Ativar e *Desativar.*

## Atualizar cadastro de dispositivo PAM

1. Após selecionar a opção **Editar**, estarão listados os dispositivos que você selecionou anteriormente.
   1. Alternativamente, é possível adicionar ou remover dispositivos, para isso siga as instruções abaixo:
      1. Para adicionar, clique no sinal de adição, ao lado da palavra **Dispositivos**, e selecione os dispositivos que deseja adicionar através do modal **Dispositivos**.
      2. Após selecionar os dispositivos,clique em **Adicionar**.
      3. Para remover, clique no botão representado pelo ícone de uma lixeira, no lado esquerdo da listagem e confirme a exclusão no modal confirmação.
3. Clique em **Continuar**.
4. Na tela exibida, faça as modificações que deseja no dispositivo e clique em **Continuar**.
5. Na tela seguinte, será mostrada a lista de dispositivos que serão alterados, bem como as alterações que serão feitas.
6. Confira as operações e os dispositivos e clique em **Salvar**.

:::(info) (Info)
Para maiores informações sobre os campos dos dispositivos, acesse a documentação de referência sobre Dispositivos.
:::

## Desativar dispositivos PAM

:::(info) (Info)
A opção de operação em lote permite inativar vários dispositivos ao mesmo tempo. Perceba, contudo, que somente dispositivos ativos podem ser selecionados para inativação.
:::

:::(Warning) (Atenção)
Ao inativar um dispositivo, todas as credenciais relacionadas a esse dispositivo serão inativadas.
:::

1. Após selecionar a opção **Desativar**, estarão listados os dispositivos que você selecionou anteriormente.
   1. Alternativamente, é possível adicionar ou remover dispositivos, para isso siga as instruções abaixo:
      1. Para adicionar, clique no sinal de adição, ao lado da palavra **Dispositivos**, e selecione os dispositivos que deseja adicionar através do modal **Dispositivos**.
      2. Após selecionar os dispositivos, clique em **Adicionar**.
      3. Para remover, clique no botão representado pelo ícone de uma lixeira, no lado esquerdo da listagem e confirme a exclusão no modal confirmação.
3. Clique em **Continuar**.
4. Na tela seguinte, será mostrada a lista de dispositivos que serão inativados.
5. Confira os dispositivos e clique em **Salvar**.

## Ativar dispositivos PAM

:::(info) (Info)
A opção de operação em lote permite ativar ou reativar vários dispositivos ao mesmo tempo. Perceba, contudo, que somente dispositivos inativos podem ser selecionados para ativação.
:::

1. Após selecionar a opção **Ativar**, estarão listados os dispositivos que você selecionou anteriormente.
3. Alternativamente, é possível adicionar ou remover dispositivos, para isso siga as instruções abaixo:
   1. Para adicionar, clique no sinal de adição, ao lado da palavra **Dispositivos** e selecione os dispositivos que deseja adicionar através do modal **Dispositivos**.
   2. Após selecionar os dispositivos, clique em **Adicionar**.
   3. Para remover, clique no botão representado pelo ícone de uma lixeira, no lado esquerdo da listagem e confirme a exclusão no modal confirmação.
4. Clique em **Continuar**.
5. Na tela seguinte, será mostrada a lista de dispositivos que serão ativados.
6. Confira os dispositivos e clique em **Salvar**.

:::(info) (Info)
Ao ativar um dispositivo, as credenciais associadas não são reativadas automaticamente.
:::

### Importante

* Todas as operações em lote precisam ser validadas por um usuário aprovador para surtirem efeito.
* Para que um usuário tenha privilégios de usuário aprovador, ele deve ser configurado como tal. Para isso, acesse **Menu de produtos > Configurações >Controle de acesso > Gerenciar aprovadores.**
* O usuário aprovador pode visualizar todas as solicitações feitas acessando o **Menu de produtos > Relatórios > Eventos > Operações em lote.**

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).