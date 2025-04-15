Para conceder acesso a um usuário terceiro, você deve antes criar um grupo de acesso para fornecedores. Os usuários terceiros serão agregados nos grupos de fornecedores da mesma forma que funcionários são organizados em grupos de funcionários.

CuidadoO grupo de acesso para fornecedores não tem relação com o grupo de acesso do módulo PAM. As configurações determinadas no formulário de fornecedores são independentes.1. Acesse a plataforma senhasegura.
2. Vá para **Domum Remote Access➔Controle de acesso➔Grupos de acesso.**
3. No canto superior direito, clique no ícone **(⁝) Exibir ações.**
4. Selecione **\+ Novo.**
5. Na janela de cadastro de novo grupo de acesso, preencha as informações.
	* **Nome do grupo**
	* **Ativo**. Escolha entre **Sim** ou **Não.**
	* **Descrição**
6. Na aba **Configurações**, preencha as informações.
7. Em **Configurações da visualização de senha,**marque as opções desejadas.
	* **Usuários podem visualizar uma senha**
	* **Requer aprovação para visualizar uma senha**
		+ Se você marcou esta opção, é necessário definir o número de **Aprovações necessárias para visualizar** e o número de **Reprovações necessárias para cancelar**.
	* **Aprovação em níveis.** Marque se os aprovadores serão acionados em níveis. Assim, você pode definir uma hierarquia de aprovadores.
8. Em **Configurações da sessão remota**, marque as opções desejadas.
	1. * **Usuários podem iniciar sessão.** Marque se os usuários membros tiverem permissão para iniciar uma sessão proxy usando as credenciais a que este grupo permite o acesso.
		* **Requer aprovação para iniciar sessão.**Marque se outro usuário precisará agir como aprovador a fim de iniciar a sessão proxy.
			+ Se você marcou esta opção, é necessário definir o número de **Aprovações necessárias para visualizar** e o número de **Reprovações necessárias para cancelar**.
		* **Aprovação em níveis.** Marque se os aprovadores serão acionados em níveis. Assim, você pode definir uma hierarquia de aprovadores;
9. Em **Configurações da solicitação de acesso**, escolha **S****im** ou **N****ão**para as opções:
	* **Obrigatório especificar código de governança ao justificar?** Marque se o requerente deve digitar um código ITMS no momento da justificativa.
	* **Sempre adicionar o gestor do usuário aos aprovadores?** Marque se o usuário responsável pelo departamento do usuário deve ser consultado automaticamente como um aprovador adicional a este grupo. Portanto, este usuário será alertado juntamente com os outros aprovadores da aba Aprovadores.
	* [**Terceiros podem solicitar seus próprios acessos?**](/v3-33/docs/pt/domum-enable-third-parties-request-and-extend-access)
10. Se você não marcou que o grupo necessita de aprovadores, clique em **Salvar**.
11. Se você marcou que o grupo requer aprovação, preencha as informações na aba **Aprovadores.**
12. Clique no sinal **\+** para adicionar um aprovador.
13. Clique em **Adicionar.**
14. O nome dos aprovadores aparece no relatório. Observe que os usuários aprovadores têm uma configuração **Nível** em seu registro. Esta configuração determina a sequência de chamada para aprovação da operação, permitindo que uma hierarquia seja aplicada.  
Info
	* Se você for um usuário aprovador, as solicitações pendentes de aprovação estarão no menu **Domum Remote Access ➔ Controle de acesso ➔ Minhas aprovações.**
	* Se você for um usuário que necessita de aprovação, pode ver suas solicitações no menu **Domum Remote Access ➔ Controle de acesso ➔ Minhas solicitações.**
15. Para finalizar clique em **Salvar**.
