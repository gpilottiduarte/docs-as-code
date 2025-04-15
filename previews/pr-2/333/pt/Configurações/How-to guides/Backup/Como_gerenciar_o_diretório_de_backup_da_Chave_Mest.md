# Como gerenciar o diretório de backup da Chave Mestra

Antes de criar a chave mestra, é necessário configurar o local de exportação dos dados criptografados.

## Configurar diretório de armazenamento dos dados criptografados

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Backup \> Servidores**.  
3. No relatório **Servidores de Backup**, clique em **Exibir ações**, representado pelos três pontos verticais, e selecione **Novo** no menu suspenso.  
4. Na janela **Servidor de Backup** preencha os dados:  
   1. **Modo**: escolha o modo de backup no menu suspenso. As opções são: *Diretório Local* ou *SSH \- Rsync*.  
      1. Para **Diretório Local**, mantenha as configurações padrão.
      2. Para SSH-Rsync, veja as instruções abaixo.  
   2. **Ativo**: selecione **Sim** para que o servidor esteja acessível logo após a criação.  
   3. **Caminho diretório**: indique o caminho do diretório de backup no servidor. Por exemplo: `/srv/backup_remoto/secrets`.  
   4. **Host**: Servidor onde os arquivos serão salvos  
   5. **Porta**: porta SSH do servidor  
   6. **Credencial para autenticação**: credencial para acessar o servidor remoto.  
5. Clique em **Salvar**.

### Modo SSH-Rsync

Caso você escolha o modo **SSH-Rsync**, você deverá preencher, adicionalmente, estes dados:

1. **Host**: endereço de IP ou domínio do host do servidor de backup.  
2. **Porta**: número da porta que o servidor de backup estará escutando.  
3. **Credencial para autenticação**: selecione no menu suspenso a credencial que fará a autenticação no servidor de backup.  
   1. Esta credencial já deverá ter sido cadastrada no senhasegura.  
4. Clique em **Salvar**.

:::(info) (Info)
Este diretório é o mesmo diretório onde foi configurado o backup das credenciais.
:::

## Como alterar o diretório de armazenamento dos dados criptografados

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Backup \> Servidores**.  
3. No relatório **Servidores de Backup** identifique o diretório que você deseja alterar e, na coluna **Ação**, clique em **Alterar**, representado pelo ícone do lápis e papel.  
4. A janela **Servidor de Backup** será aberta em modo de edição, edite as informações que você deseja e clique em **Salvar**.

## Como inativar um diretório de armazenamento dos dados criptografados

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Backup \> Servidores**.  
3. No relatório **Servidores de Backup** identifique o diretório que você deseja alterar e, na coluna **Ação**, clique em **Alterar**, representado pelo ícone do lápis e papel.  
5. A janela **Servidor de Backup** será aberta em modo de edição.  
6. Em **Ativo**, selecione **Não** e clique em **Salvar**.

## Como reativar um diretório de armazenamento dos dados criptografados

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Backup \> Servidores**.  
3. No relatório **Servidores de Backup**, na barra superior, selecione **Não** no menu suspenso **Ativo** para filtrar os servidores inativos no senhasegura.  
4. Identifique o servidor que você deseja reativar e, na coluna **Ação**, clique em Alterar, representado pelo ícone do lápis e papel.  
7. A janela **Servidor de Backup** será aberta em modo de edição.  
8. Em **Ativo**, selecione **Sim** e clique em **Salvar**.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).  