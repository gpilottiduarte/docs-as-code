Neste menu, você visualiza diretórios de rede compartilhados pelo usuário. As credenciais serão utilizadas para acessar o diretório sem a necessidade de exposição ou mapeamento.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1674503504201.png)GO Endpoint Manager Core \- Compartilhamento de Rede### Configurar o compartilhamento de arquivos

* No Windows:
1. Acesse a estação de trabalho do usuário.
2. Localize a pasta que deseja compartilhar, ou crie uma.
3. Selecione a pasta.
4. Clique sobre ela com o botão direito do mouse e escolha **Propriedades**.
5. Clique na aba **Compartilhamento** e depois no botão **Compartilhar**.
6. Escolha os usuários com quem deseja compartilhar a pasta e clique em **Adicionar**.
7. Clique no botão **Compartilhar.**
8. Copie o caminho.Exemplo: \\WINDOWS10PRO\\Shared Folder
9. Clique em **Pronto**para concluir.
* No GO:
1. Inicie a aplicação **Core**.
2. Clique no menu**Compartilhamento de Rede.**
3. Na área central da tela, clique com o botão direito do mouse e escolha a opção **Adicionar compartilhamento**.
4. Insira o caminho da pasta que será compartilhada. Exemplo: \\WINDOWS10PRO\\Shared Folder
5. Clique em **OK** para confirmar.

### **Acessar ou remover pastas compartilhadas no GO**

O usuário poderá acessar uma pasta compartilhada em rede usando a credencial selecionada. Essa credencial não é necessariamente uma credencial de domínio.

1. Inicie a aplicação Core.
2. Clique no menu**Compartilhamento de Rede.**
3. Selecione a pasta que deseja acessar ou da qual deseja remover o compartilhamento.
4. Clique com o botão direito do mouse e escolha uma das seguintes opções do menu de contexto:
	* **Acessar compartilhamento**
	* **Apagar compartilhamento**

InfoAs pastas acessadas peloCore podem ser acessadas novamente pelo cache de credenciais gerenciado pelo Windows. Essas pastas não serão mapeadas como uma unidade.### **Acessar pastas compartilhadas fora do GO**

Uma vez autenticado o acesso à pasta, o Windows cria um cache local com o acesso à rede. Isso permite que a pasta seja acessada diretamente, sem o uso do GO Endpoint Manager.

