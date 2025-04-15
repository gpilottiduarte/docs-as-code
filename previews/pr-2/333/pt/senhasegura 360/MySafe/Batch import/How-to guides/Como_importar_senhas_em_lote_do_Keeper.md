# Como importar senhas em lote do Keeper

Neste documento, você encontra um guia passo a passo sobre como realizar a importação de suas senhas via Keeper.

:::(info) (**Info**)
Dois formatos são compatíveis para a importação em lote:
* Arquivos no formato **.xlsx**, com modelo próprio disponibilizado na plataforma.
* Arquivos no formato **.csv** e **.json**, presentes no LastPass e Keeper.
:::
***
## Importar senhas via Keeper

:::(info) (**Info**)
A importação em lote do Keeper para o **MySafe** funciona apenas para registros do tipo logon (login e senha).
:::
#### No Keeper
1. Acesse sua conta **Keeper**.
2. No canto superior direito, clique na **seta** com o menu retrátil ao lado do seu e-mail.
3. Clique em **Configurações**.
4. Na nova janela, no menu lateral esquerdo, clique em **Exportar**.
5. Na opção **Exportar Arquivo**, selecione **JSON**.
6. Clique em **Exportar**.
7. Aguarde a conclusão do download.

#### No senhasegura

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **MySafe**.
2. No menu lateral, selecione **Importação em Lote**.
3. No canto superior direito, clique no menu **Exibir ações**, representado pelo ícone dos três pontos verticais e selecion **Importar**
5. Escolha a opção **Keeper**.
6. **Arraste e solte** o arquivo no local indicado ou clique em **Carregar arquivo**.
7. Clique em **Salvar**.

Durante o processo de importação, a coluna **Status** do relatório da página inicial **Importação em lote** estará como **Aguardando**. Atualize a página para acompanhar o status.

Se a importação for bem sucedida, a coluna **Status** estará como **Finalizado** e suas senhas poderão ser visualizadas na página inicial **Senhas** do **MySafe**.

Caso não seja bem sucedido, o campo **Status** estará como **Erro ao processar**, e as senhas não terão sido importadas. Na coluna **Ação**, clique em **Detalhes do processo**, representado pelo ícone de lista para identificar o erro.

:::(info) (**Info**)
Também é possível importar senhas via LastPass pela página inicial **Senhas**. No canto superior direito, clique no menu **Exibir ações**, representado pelos três pontos verticais, e selecione **Importação em lote**. 
:::
***

Você ainda tem dúvidas? Entre em contato com a  [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.