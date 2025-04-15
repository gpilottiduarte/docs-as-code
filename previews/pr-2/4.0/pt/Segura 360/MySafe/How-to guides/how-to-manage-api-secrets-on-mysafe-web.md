# Como gerenciar segredos de API no MySafe web


Este documento fornece um guia passo a passo sobre como gerenciar segredos de API utilizando a versão web do **MySafe**

## Caminho para acesso 

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **MySafe**.  
2. No menu lateral, selecione **Segredos de API**.
---
## Adicionar segredo de API

Para adicionar um segredo de API usando a versão web do **MySafe**, siga os passos abaixo:

1. Clique em **Adicionar** no canto superior direito da tela **Segredos de API**.  
2. Na tela **Adicionar segredo de API**, preencha:

   :::(error) (Alerta\!)

   Os campos com asterisco são obrigatórios.  
   :::

   1. **Nome\*:** nome para identificar o segredo de API.  
   2. **Url\*:** endereço base da API para a qual o segredo será usado.  
   3. **ID do cliente\*:** identificador único da aplicação do cliente, usado na autenticação OAuth 2.0.  
   4. **Client secret:** senha confidencial usada para autenticação do cliente em fluxos de autorização OAuth 2.0.  
   5. **Identificador:** *string* única para identificar o segredo de API no **MySafe**.  
   6. **Método:** método HTTP usado para chamar a API.  
   7. **Tags:** palavras-chave para categorizar o segredo de API.  
   8. **Anotações**: observações gerais sobre o segredo de API.  
2. Clique em **Salvar.**

   

## Visualizar detalhes do segredo de API
Para visualizar os detalhes de um segredo de API usando a versão web do **MySafe**, siga os passos abaixo:

1. Na tela **Segredos de API**, identifique o item desejado ou use os filtros de pesquisa.  
2. Clique no **botão Ações** e selecione **Visualizar segredo de API** para abrir a tela **Detalhes do segredo de API**.  
3. Em **Client secret**, clique no botão **Exibir** para visualizar a informação.

:::(warning) (Cuidado\!)  
Verifique se o ambiente está seguro e evite que terceiros vejam o **Client secret**.  
::: 

## Copiar ID do cliente e Client secret

Para copiar o **Client ID** e o **Client secret** usando a versão web do **MySafe**, siga os passos abaixo:

1. Na tela **Segredos de API**, identifique o item desejado ou use os filtros de pesquisa.  
2. Clique no **botão Ações** e selecione **Visualizar segredo de API** para abrir a tela **Detalhes do segredo de API**.  
3. Em **ID do cliente**, clique em **Copiar.**  
4. Em **Client Secret**, clique em **Copiar.**

:::(warning) (**Cuidado\!**)  
As informações copiadas ficam armazenadas temporariamente na área de transferência do dispositivo, podendo ser acessadas por outros programas.  
:::


## Editar segredo de API

Para editar informações de um segredo de API usando a versão web do **MySafe**, siga os passos abaixo:

1. Na tela **Segredos de API**, identifique o item desejado ou use os filtros de pesquisa.  
2. Clique no **botão Ações** e selecione **Editar**.  
3. Na janela **Editar segredo API**, faça as alterações necessárias.  
4. Clique em **Salvar**.

## Compartilhar segredo de API com um usuário MySafe

Para compartilhar um segredo de API com outros usuários **MySafe** usando a versão web, siga os passos abaixo:

1. Na tela **Segredos de API**, identifique o item desejado ou use o filtro de pesquisa.  
2. Clique no **botão Ações** e selecione **Compartilhar.**  
3. Clique no card **Interno.**  
4. Clique no menu suspenso para encontrar o usuário ou grupo com quem deseja compartilhar.  
5. Defina as permissões de acesso:  
   1. **Pode visualizar**: por padrão, esta opção está marcada e permite que o usuário veja o item.  
   2. **Pode editar:** permite que o usuário também edite o item.  
      :::(warning) (Atenção)  
      Usuários com permissão de edição podem desativar o item.  
      :::   
        
6. Clique em **Compartilhar.**  
     
   :::(info) (Info)  
   O usuário destinatário recebe um email com um link que leva diretamente à tela do item compartilhado. Itens compartilhados também ficam disponíveis na seção **Novos itens** da **Página inicial** do **MySafe**, até que o destinatário interaja com o item.  
   :::

* Saiba mais sobre compartilhamentos com usuários que não possuem conta no **MySafe** em [Como gerenciar o compartilhamento externo de um item](/v4/docs/pt/how-to-manage-the-external-share-of-an-item).   
* Saiba mais sobre compartilhamentos de segredos de API em lote em [Como gerenciar ações em lote](/v4/docs/pt/mysafe-how-to-manage-batch-actions).

## Revogar compartilhamento de segredo de API com um usuário MySafe

Para revogar o compartilhamento de um segredo de API com outros usuários **MySafe**, siga os passos abaixo:

1. Na tela **Segredos de API**, identifique o item desejado ou use os filtros de pesquisa **Compartilhada \> Sim**.  
2. Clique no **botão Ações** e selecione **Compartilhar.**  
3. Clique no card **Interno.**  
4. Localize o usuário ou grupo e clique em **Remover.**  
5. Clique em **Compartilhar** para confirmar a ação.

## Desativar segredo de API 

Para desativar um segredo de API usando a versão web do **MySafe**, siga os passos abaixo:

1. Na tela **Segredos de API**, identifique o desejado ou use os filtros de pesquisa.  
2. Clique no **botão Ações** e selecione **Desativar.**  
3. Clique em **Sim** para confirmar.

Saiba mais sobre desativação de segredos de API em lote em [Como gerenciar ações em lote](/v4/docs/pt/mysafe-how-to-manage-batch-actions).

## Ativar segredo de API

Para ativar um segredo de API usando a versão web do **MySafe**, siga os passos abaixo:

1. Na tela **Segredos de API**, clique no filtro **Status**, selecione **Inativo** e clique em **Filtrar**.  
2. Localize o item desejado.  
3. Clique no **botão Ações** e selecione **Ativar.**  
4. Clique em **Sim** para confirmar.

Saiba mais sobre ativação de segredos de API em lote em [Como gerenciar ações em lote](/v4/docs/pt/mysafe-how-to-manage-batch-actions).

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).