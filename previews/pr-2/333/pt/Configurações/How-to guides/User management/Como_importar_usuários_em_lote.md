# Como importar usuários em lote

A Importação em lote possibilita criar um conjunto de usuários rapidamente ao realizar o upload de uma planilha devidamente preenchida. Este recurso é útil para gerenciar grandes bases de usuários de forma automatizada.

Alguns pontos importantes sobre a importação de lotes:

* A importação é baseada em uma planilha, conforme o arquivo de importação.  
* As planilhas importadas são registradas no sistema e podem ser recuperadas caso necessário.  
* Usuários que não existem serão criados na importação.  
* Usuários que já estão registrados no senhasegura e que forem reimportados, serão atualizados.  
* A maneira mais rápida de desfazer uma importação errada é corrigir a planilha e importá-la novamente.  
* É recomendado não importar um arquivo com mais de mil itens, uma vez que essa ação pode consumir muitos recursos do servidor e reduzir seu desempenho.

## Arquivo de importação

Para realizar o download do arquivo modelo de importação, siga os passos abaixo:

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Gestão de usuários \> Batch import.**  
3. Na barra superior, clique em **Exibir ações**, representado pelo ícone dos três pontos verticais, e selecione a opção **Importar** no menu suspenso.  
4. Na janela **Importação em lote**, clique em **Arquivo modelo** para baixar o arquivo `import_users.xlsx.`

## Preenchimento do arquivo modelo

Para realizar a importação é necessário preencher corretamente a planilha de importação. Na planilha você irá encontrar os seguintes campos para preenchimento:

* **Nome**: adicione o nome do usuário.  
* **Nome do usuário**: adicione o username do usuário.  
  * **Nota**: este campo que indicará se o usuário será criado ou alterado  
* **Senha**: adicione a senha do usuário.  
  * **Nota**: caso este campo não seja preenchido, a senha não será atualizada. 
* **Departamento**: adicione o departamento atrelado ao usuário.  
  * **Nota**: caso não exista, o departamento será criado  
* **E-mail**: adicione o endereço de e-mail do usuário.  
* **Telefone**: adicione o telefone do usuário.  
* **Ativo**: preencha com **SIM** ou **NÃO** para informar se o usuário está ativo ou não.  
* **Ignorar MFA**: preencha com **SIM** ou **NÃO** para informar se deseja ignorar a autenticação de multi-fator.  
* **Papéis**: adicione a permissão que o usuário pode executar.  
  * **Nota**: deve ser um papel existente  
* **Grupo de usuário**: adicione o grupo de usuário que o colaborador pertence.  
  * **Nota**: deve ser um grupo de usuário existente

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).  