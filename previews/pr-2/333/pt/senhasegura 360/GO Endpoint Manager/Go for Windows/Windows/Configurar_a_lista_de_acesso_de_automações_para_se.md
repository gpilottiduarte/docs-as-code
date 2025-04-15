## Configurar a lista de acesso de automações para segregação geral

1. Acesse a plataforma senhasegura.
2. Vá até **GO Endpoint Manager➔Políticas➔Windows➔Listas de acesso.**
3. Clique em **Exibir ações (****⁝).**
4. Selecione **Nova segregação geral.**
5. Escolha **Automações.**
6. Na janela que aparece, preencha os campos.
	* **Nome:**defina uma nome para a lista.
	* **Status:**escolha entre **ativo** ou **inativo****.**
	* **Gravar a sessão desses aplicativos:** escolha entre **ativo** ou **inativo**.
7. Na aba **Automações****,**clique no sinal de **\+**e escolha uma automação de acordo com os critérios.
	* **Código:**onúmero identificador na lista de automações.
	* **Automação**: nome da automação.
8. Clique em **Adicionar**.
9. Na aba**Workflow**, preencha os campos.
10. Marque as opções para a **Configuração de elevação.**
	* **Usuário pode elevar aplicações.**
	* **Requer justificativa para elevar aplicações.**
	* **Requer aprovação para elevar aplicações.**
	* **Permitir acesso emergencial.**
	* **Aprovação em níveis.**Para funcionar, os aprovadores devem estar cadastrados em níveis no [Relatório de aprovadores](https://docs.senhasegura.io/v3-33/docs/pt/pam-session-approvers-tab).
11. Se você marcou **Requer aprovação para elevar aplicações**, defina o número de vezes para cada ação específica.
	* **Aprovações necessárias**para que o usuário consiga elevar o privilégio e executar a ação.
	* **Reprovações necessárias**para cancelar a elevação do privilégio.
12. Responda**Sim**ou**Não**para as**Configurações da solicitação de acesso.**
	* **Obrigatório especificar código de governança ao justificar?**
	* **Sempre adicionar o gestor do usuário aos aprovadores?**
13. Clique em **Salvar.**
14. Você receberá uma mensagem de confirmação.



---

## Configurar a lista de acesso de automações para workstations específicas

1. Acesse a plataforma senhasegura.
2. Vá até **GO Endpoint Manager➔Políticas➔Windows➔Listas de acesso.**
3. Clique em **Exibir ações (****⁝).**
4. Selecione**Nova segregação para workstation.**
5. Escolha **Automações**.
6. Na janela que aparece, preencha os campos.
	* **Nome:**defina uma nome para a lista.
	* **Status:**escolha entre **ativo** ou **inativo****.**
	* **Gravar a sessão desses aplicativos:** escolha entre **ativo** ou **inativo**.
7. Na aba **Automações****,**clique no sinal de **\+**e escolha uma automação de acordo com os critérios.
	* **Código:**onúmero identificador na lista de automações.
	* **Automação**: nome da automação.
8. Clique em **Adicionar**.
9. Na aba **W****orkstations**, clique no sinal de **\+**e escolha uma workstation de acordo com os critérios.
	* **Código:**onúmero identificador na lista de workstations.
	* **UUID:** identificador exclusivo da workstation.
	* **Hostname:**  nome da máquina.
	* **IP:** endereço IP da workstation.
10. Clique em **Adicionar**.
11. Ainda na aba **Workstations**, você verá mais informações.
	* **Inclusor:** usuário que adicionou a workstation.
	* **Inclusão:** a data em que a workstation foi adicionada.
12. Continue preenchendo os campos na aba **Workflow.**
13. Marque as opções para a **Configuração de elevação.**
	* **Usuário pode elevar aplicações.**
	* **Requer justificativa para elevar aplicações.**
	* **Requer aprovação para elevar aplicações.**
	* **Permitir acesso emergencial.**
	* **Aprovação em níveis.**Para funcionar, os aprovadores devem estar cadastrados em níveis no [Relatório de aprovadores](https://docs.senhasegura.io/v3-33/docs/pt/pam-session-approvers-tab).
14. Se você marcou **Requer aprovação para elevar aplicações**, defina o número de vezes para cada ação específica.
	* **Aprovações necessárias**para que o usuário consiga elevar o privilégio e executar a ação.
	* **Reprovações necessárias**para cancelar a elevação do privilégio.
15. Responda**Sim**ou**Não**para as**Configurações da solicitação de acesso.**
	* **Obrigatório especificar código de governança ao justificar?**
	* **Sempre adicionar o gestor do usuário aos aprovadores?**
16. Clique em **Salvar.**
17. Você receberá uma mensagem de confirmação.

  


