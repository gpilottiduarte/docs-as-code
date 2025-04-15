Esta funcionalidade permite executar aplicativos com ou sem elevação de privilégios.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1673464953832.png)GO Endpoint Manager Core \- Executar 

InfoA aplicação Core é personalizável. A imagem exibida e a descrição dos itens podem mudar conforme a versão que o usuário está usando e com os recursos permitidos pelo administrador.### Lista de aplicativos

* É possível que nem todos os aplicativos estejam listados no menu Executar do Core.
* Clique no botão **Atualizar** para pesquisar novos aplicativos.
* Se ainda assim um aplicativo não estiver na lista, você poderá arrastar seu atalho ou binário de execução para dentro dela.
* Arquivos EXE, LNK, MSC e MSI são aceitos como executáveis.

### Executar um aplicativo no GO

1. Acesse a área de trabalho do usuário.
2. Inicie a aplicação Core.
3. Clique no menu **Executar.**
4. Escolha uma aplicação disponível na lista.
5. Clique com o botão direito do mouse e escolha uma entre as opções:
	* **Executar**: executa o aplicativo em sessão dedicada.
	* **Executar como usuário**: nesta opção, você deve escolher uma credencial para executar o aplicativo. Saiba mais no artigo sobre [Personificação.](/v3-33/docs/pt/go-endpoint-manager-windows-impersonation)

InfoPara usuários em grupos de acesso que necessitem de aprovação, a aplicação será permitida após a liberação.### Executar um aplicativo fora do GO

1. Localize o aplicativo ou o atalho que deseja executar na área de trabalho.
2. Clique com o botão direito do mouse.
3. Escolha no menu a opção **Executar com GO Endpoint Manager**.

A elevação utilizada na execução fora do GO é **Executar com privilégios**. Você executará a aplicação com todos os privilégios administrativos.  
  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1672339837440.png)Executando uma ação com privilégio fora do GO

  


CuidadoValide que não existe nenhuma GPO aplicada ou não aplicada na Workstation que possa impedir que o client do GO Endpoint Manager para Windows funcione corretamente.  


  


