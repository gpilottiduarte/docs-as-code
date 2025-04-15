# Como gerenciar o diretório de backup da Chave Mestra

Antes de criar a chave mestra, é necessário configurar o local de exportação dos dados criptografados.

## Configurar diretório de armazenamento dos dados criptografados

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Backup > Servidores**.  
3. No relatório **Servidor de Backup**, clique no botão **Adicionar**.  
4. Na tela **Servidor de Backup** escolha o modo de backup no menu suspenso **Modo**. As opções são: *Diretório Local* ou *SSH \- Rsync*.  

### Modo Diretório Local

1. **Ativo**: selecione **Sim** para que o servidor esteja acessível logo após a criação.
2. **Caminho diretório**: indique o caminho do diretório de backup no servidor. Por exemplo: `/srv/backup_remoto/secrets`.  
3. Clique em **Salvar**.

### Modo SSH-Rsync

1. **Host**: endereço de IP ou domínio do host do servidor de backup.  
2. **Porta**: número da porta que o servidor de backup estará escutando.  
3. **Credencial para autenticação**: selecione no menu suspenso a credencial que fará a autenticação no servidor de backup.  
   1. Esta credencial já deverá ter sido cadastrada no Segura.  
4. Clique em **Salvar**.

:::(info) (Info)
Este diretório é o mesmo diretório onde foi configurado o backup das credenciais.
:::

## Como alterar o diretório de armazenamento dos dados criptografados

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Backup > Servidores**. 
3. No relatório **Servidor de Backup** identifique o diretório que você deseja alterar, clique no botão **Ações** e selecione **Editar**.  
4. A tela **Servidor de Backup** será aberta em modo de edição, edite as informações que você deseja e clique em **Salvar**.

## Como inativar um diretório de armazenamento dos dados criptografados

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Backup > Servidores**. 
3. No relatório **Servidor de Backup** identifique o diretório que você deseja alterar, clique no botão **Ações** e selecione **Editar**.  
5. A janela **Servidor de Backup** será aberta em modo de edição.  
6. Em **Ativo**, selecione **Não** e clique em **Salvar**.

## Como reativar um diretório de armazenamento dos dados criptografados

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Backup > Servidores**. 
3. No relatório **Servidores de Backup**, na barra superior, selecione **Inativo** no menu suspenso **Status** para filtrar os servidores inativos no Segura.  
4. No relatório **Servidor de Backup** identifique o diretório que você deseja alterar, clique no botão **Ações** e selecione **Editar**. 
7. A janela **Servidor de Backup** será aberta em modo de edição.  
8. Em **Ativo**, selecione **Sim** e clique em **Salvar**.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).  