# Como gerenciar senhas no MySafe web


Este documento fornece um guia passo a passo sobre como gerenciar senhas utilizando a versão web do **MySafe**.

## Caminho para acesso 

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **MySafe**.  
2. No menu lateral, selecione **Senhas**.  
   
---
## Adicionar senha

Para adicionar uma senha usando a versão web do **MySafe**, siga os passos abaixo:

1. Clique em **Adicionar** no canto superior direito da tela **Senhas**.  
2. Na tela **Adicionar senha**, preencha:

   :::(error) (Alerta\!)

   Os campos com asterisco são obrigatórios.  
   :::

   1. **Nome\*:** nome para identificar a senha.  
   2. **Nome do usuário\*:**  nome de usuário associado à senha.  
   3. **URL:** endereço do site onde a senha será usada.  
   4. **Nova senha:** insira a senha.   
      1. Clique em **Exibir** para visualizar a senha digitada.   
      2. Clique em **Gerar** para gerar uma senha automática com base nos critérios definidos na opção **Configurar**.  
      3. Clique em **Configurar** para definir os critérios de geração de senha.  
      4. Verifique a força da senha na barra de progresso. Quatro barras verdes indicam que a senha é muito forte e uma barra vermelha indica que a senha é muito fraca e pode ser facilmente descoberta.  
         :::(warning) (Atenção)  
         Crie senhas fortes com, pelo menos, 12 caracteres, letras maiúsculas, minúsculas, dígitos e símbolos.  
         :::  
         

        
        
   5. **Secret key (TOTP)**: se sua conta está protegida com autenticação multifator, insira a chave secreta para gerar o token temporário (TOTP).

        :::(error) (Alerta!)
        * Insira uma chave secreta com, pelo menos, 10 caracteres, letras maiúsculas de A-Z e números de 2-7.
        * Sincronize o relógio do seu dispositivo com a hora correta. Desvios de tempo podem afetar a geração e validação do token TOTP.  
        :::

    6. **Tags:** palavras-chave para categorizar a senha.  
    7. **Anotações:** observações gerais sobre a senha.  
3. Clique em **Salvar.**

## Copiar senha

Para copiar uma senha usando a versão web do **MySafe**, siga os passos abaixo:

1. Na tela **Senhas**, identifique a senha desejada ou use os filtros de pesquisa.  
2. Clique no **botão Ações** e selecione **Copiar.**

:::(warning) (**Cuidado\!**)  
A senha copiada fica armazenada temporariamente na área de transferência do dispositivo, podendo ser acessada por outros programas.  
::: 

## Visualizar detalhes da senha

Para visualizar os detalhes de uma senha usando a versão web do **MySafe**, siga os passos abaixo:

1. Na tela **Senhas**, identifique a senha desejada ou use os filtros de pesquisa.  
2. Clique no **botão Ações** e selecione **Visualizar senha** para abrir a tela **Detalhes da senha**.  
   1. Clique no botão **Visualizar senha** e utilize a barra de contraste para exibir a senha.  
      :::(warning) (Cuidado)  
      Verifique se o ambiente está seguro e evite que terceiros vejam sua senha.  
      :::   
       

      

## Editar senha

Para editar informações de uma senha usando a versão web do **MySafe**, siga os passos abaixo:

1. Na tela **Senhas**, identifique a senha desejada ou use os filtros de pesquisa.  
2. Clique no **botão Ações** e selecione **Editar**.  
3. Na tela **Editar senha**, faça as alterações necessárias.  
4. Clique em **Salvar**.  
 


## Compartilhar senha com um usuário MySafe

Para compartilhar uma senha com outros usuários **MySafe** usando a versão web, siga os passos abaixo:

1. Na tela **Senhas**, identifique a senha desejada ou use os filtros de pesquisa.  
2. Clique no **botão Ações** e selecione **Compartilhar.**  
3. Clique no card **Interno.**  
4. Clique no menu suspenso para encontrar o usuário ou grupo com quem deseja compartilhar.  
5. Defina as permissões de acesso:  
   1. **Pode visualizar**: por padrão, esta opção está marcada e permite que o usuário veja a senha.  
   2. **Pode editar:** permite que o usuário também edite a senha.  
      :::(warning) (Atenção)  
      Usuários com permissão de edição podem desativar o item.  
      :::   
        
6. Clique em **Compartilhar.**  
     
   :::(info) (**Info**)  
   O usuário destinatário recebe um email com um link que leva diretamente à tela do item compartilhado. Itens compartilhados também ficam disponíveis na seção **Novos itens** da **Página inicial** do **MySafe**, até que o destinatário interaja com o item.  
   :::


* Saiba mais sobre compartilhamentos com usuários que não possuem conta no **MySafe** em [Como gerenciar o compartilhamento externo de um item](/v4/docs/pt/how-to-manage-the-external-share-of-an-item).   
* Saiba mais sobre compartilhamentos de senhas em lote em [Como gerenciar ações em lote](/v4/docs/pt/mysafe-how-to-manage-batch-actions).

## Revogar compartilhamento de senha com um usuário MySafe

Para revogar o compartilhamento de uma senha com outros usuários **MySafe**, siga os passos abaixo:

1. Na tela **Senhas**, identifique a senha desejada ou use o filtro de pesquisa **Compartilhada \> Sim**.  
2. Clique no **botão Ações** e selecione **Compartilhar.**  
3. Clique no card **Interno.**  
4. Identifique o usuário ou grupo desejado e clique em **Remover.**  
5. Clique em **Compartilhar** para confirmar a ação.

## Desativar senha

Para desativar uma senha na versão web do **MySafe**, siga os passos abaixo:

1. Na tela **Senhas**, identifique a senha desejada ou use os filtros de pesquisa.  
2. Clique no **botão Ações** e selecione **Desativar.**  
3. Clique em **Sim** para confirmar.

Saiba mais sobre desativação de senhas em lote em [Como gerenciar ações em lote](/v4/docs/pt/mysafe-how-to-manage-batch-actions).

## Ativar senha

Para ativar uma senha na versão web do **MySafe**, siga os passos abaixo:

1. Na tela **Senhas**, clique no filtro **Status**, selecione **Inativo** e clique em **Filtrar**.  
2. Identifique a senha desejada.  
3. Clique no **botão Ações** e selecione **Ativar.**  
4. Clique em **Sim** para confirmar.

Saiba mais sobre ativação de senhas em lote em [Como gerenciar ações em lote](/v4/docs/pt/mysafe-how-to-manage-batch-actions).

## Restaurar versão anterior de uma senha

Para restaurar a versão anterior de uma senha na versão web do **MySafe**, siga os passos abaixo:

1. Na tela **Senhas**, identifique a senha desejada ou use os filtros de pesquisa.  
2. Clique no **botão Ações** e selecione **Histórico**.  
3. Visualize as versões anteriores da senha listadas por número na coluna **Versão.**  
4. identifique a versão desejada, clique no **botão Ações** e selecione:  
   1. **Visualizar senha** para abrir a tela **Detalhes da versão**.  
   2. **Restaurar versão** para atualizar a senha com a versão selecionada.
---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).
