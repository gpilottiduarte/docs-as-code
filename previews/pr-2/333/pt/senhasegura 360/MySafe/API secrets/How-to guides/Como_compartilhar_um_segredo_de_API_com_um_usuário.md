# Como compartilhar um segredo de API com um usuário MySafe

Neste documento, você encontra um guia passo a passo sobre como compartilhar um segredo de API com um usuário que possui uma conta no **MySafe**.

:::(Info) (Info)
Para mais informações sobre como compartilhar um item temporariamente com um usuário que não possui conta no **MySafe**, acesse o documento sobre [Como gerenciar o compartilhamento externo de um item](/v3-33/docs/pt/how-to-manage-the-external-share-of-an-item).
:::


## Requisitos
* Um segredo de API ativo e usuários cadastrados no **MySafe**. Para mais informações, acesse o documento sobre [Como adicionar um segredo de API](/v3-33/docs/pt/mysafe-api-secret-add).

---


Para compartilhar um segredo de API com outro usuário cadastrado no **MySafe**, siga os passos abaixo:


1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **MySafe**.
2. No menu lateral, selecione **Segredos de API**.
3. Na lista da tela **Segredos de API**, localize o segredo de API que deseja compartilhar ou utilize os filtros para encontrá-la.
4. Na coluna **Ação**, clique no ícone dos três pontos verticais e selecione **Compartilhar**.
5. Na tela **Compartilhar**, selecione o card **Interno**, representado pelo ícone de computador.
6. Na janela de compartilhamento, utilize a barra de busca para pesquisar usuários por *nome, nome de usuário, endereço de e-mail* ou *grupos* (de [usuários](/v3-33/docs/pt/administration-user-groups) e [pessoais](/v3-33/docs/pt/mysafe-private-groups-screen)).


     :::(info) (Info)
    Você precisa configurar os **[Grupos pessoais](/v3-33/docs/pt/mysafe-private-group-add)** do **MySafe** para que eles apareçam na pesquisa de compartilhamento.
    :::

7. Assim que o(s) usuário(s) e/ou grupo(s) encontrado(s) aparecer(em) na tela **Compartilhar**, selecione as permissões de compartilhamento:
    1. **Pode visualizar**: concede permissão de visualização do Segredo de API ao usuário selecionado. Por padrão, sempre que um segredo de API é compartilhada com outro usuário, essa caixa de seleção é marcada.
    2. **Pode editar**: marque essa caixa de seleção para conceder permissão de edição ao usuário selecionado.

:::(Warning) (Atenção)
Usuários com permissão de edição podem inativar o segredo de API.
:::

:::(Info) (Info)
Para remover um usuário e/ou grupo, clique no ícone de **lixeira** do respectivo usuário e/ou grupo.
:::


8.Clique em **Compartilhar**.

A janela pop-up com a mensagem “**Compartilhada**” confirma a ação. Clique em **Fechar** para fechar a janela.

Ao concluir o compartilhamento, a coluna **Compartilhada**, presente no relatório da tela **Segredos de API**, estará com o status **Sim**.

Na tela **Detalhes do segredo de API**, na seção **Usuários com acesso à informação**, é possível visualizar os membros e/ou grupos com acesso à anotação e suas respectivas permissões (visualização e/ou edição).

:::(Info) (Info)
Também é possível compartilhar um segredo de API pelo atalho da **Página inicial** do **MySafe** através do caminho **MySafe > Página inicial > Card do segredo de API que deseja compartilhar > Menu suspenso (representado pelo ícone de três pontos verticais) > Compartilhar**.
Assim que o segredo de API for compartilhado, você verá a palavra **Compartilhada** na parte inferior do card do segredo de API.

:::

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
