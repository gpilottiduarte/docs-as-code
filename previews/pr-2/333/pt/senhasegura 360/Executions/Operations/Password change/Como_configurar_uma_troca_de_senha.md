## Como configurar uma troca de senha

Requisitos* Cadastrar uma credencial para troca de senha
* Criar template a ser usado
AtençãoPor questões de segurança, para que ocorra a troca automática de senha de uma credencial, ou credenciais, é preciso que um analista solicite a primeira troca da credencial configurada no senhasegura de forma manual. Está ação manual é necessária apenas na primeira solicitação da execução de troca de senha, pois a partir da primeira troca, o senhasegura realizará as trocas automaticamente conforme a política de senha da credencial.Para configurar uma troca de senha de uma credencial, siga os passos:1. Crie ou edite uma credencial em **PAM Core ➔ Credenciais ➔ Todas**
2. Na guia de **Configurações de execução**, preencha os seguintes campos:
	* **Credencial pai (opcional)**: você pode utilizá\-la para alterar a senha desta credencial quando a credencial pai selecionada tiver sua senha alterada.
	* Marque a caixa de seleção **Ativar troca automática.**
	* Selecione o plugin de troca de senha no menu suspenso **Plugin de Troca**. Não há validação de que o dispositivo tem sua conectividade ativa.
	* Selecione o template de troca no menu suspenso **Template de troca****.**
	* Se você deseja utilizar a própria credencial para efetuar a troca, marque a caixa de seleção **Utilizar a própria credencial para conectar**e indique, no menu suspenso Credencial de autenticação, a credencial a ser utilizada. Caso contrário, deixe\-a em branco.
3. Clique em **Salvar.**

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1665661839615.png) 

InfoA credencial pai funciona como uma cadeia de troca de senha.

A troca de senha de uma credencial pai inicia o processo de todas as suas credenciais filhas.

Uma credencial pai não impede que a credencial filha seja alterada de maneira manual ou automática.

AtençãoA troca da senha não será realizada quando a autenticação multifator estiver habilitada ou quando uma interação humana for necessária.



---

## Solicitar uma troca de senha

Para solicitar uma troca de senha de uma credencial, siga os passos:

1. Acesse o menu **Execuções ➔ Solicitar troca de senha**
2. Selecione as credenciais desejadas e clique no botão de rodapé **Solicitar troca de senha**. Ao solicitar a troca, será agendada uma tarefa assíncrona.
3. Clique no botão **Sim** para confirmar a solicitação de troca de senha

 ![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/jira%204541%20execution%20-%20operation%20-%20password%20change%20-%20pt.png)

InfoEste relatório mostrará apenas credenciais ativas com troca automatizada configurada.

As credenciais selecionadas serão agendadas para ter sua senha alterada imediatamente. A troca de senha redefine os contadores de acionamento.



---

## Visualizando a execução da troca de senha

Acesse o menu **Execuções ➔ Listar operações** para visualizar todas as operações registradas.

Essas operações são executadas de forma assíncrona e variam nos seguintes estados:

* **Agendado:** este é o primeiro. Assim que a execução é solicitada, a tarefa assíncrona aguarda o tempo de execução ou fica na fila se estiver cheia. Operações com este status podem ser canceladas
* **Aguardando aprovação:** alguns módulos exigem um fluxo de aprovação para serem executados. Os módulos **Certificates** e **Task Manager** usam essa função. Operações com este status podem ser canceladas
* **Cancelado:** se estiver nos estados **Agendado** ou **Aguardando aprovação**, é possível que o administrador cancele a operação antes que ela seja executada
* **Em execução:** estas são as operações que já estão em execução. Quando em execução, você não pode executar nenhuma ação
* **Executado com sucesso:** essas operações foram executadas com sucesso. Você terá acesso aos detalhes dessa execução
* **Erro:** Estas são operações que não foram executadas corretamente. Verifique a ação **Detalhes** para entender o motivo. Você pode reiniciar o processo se quiser
* **Expirado:** são as operações no estado **Aguardando aprovação** que o período de aprovação expirou

Dentro das ações disponíveis para operações, você tem as seguintes opções:

* **Visualizar tentativas:** para operações finalizadas. Por meio desta ação, você terá acesso aos logs e detalhes da operação
* **Reiniciar execução:** caso a operação tenha sido finalizada com estado de erro, por meio desta ação, você reinicia a operação. O uso de motivadores de falha foi mitigado
* **Solicitar execução imediata:** quando muitas operações estiverem programadas para execução, por meio desta ação, você priorizará a operação selecionada;
* **Cancelar operação:** permite cancelar a execução enquanto ela não estiver sendo executada ou concluída;
* **Detalhes da operação** permite ao usuário visualizar os detalhes da operação, contendo informações sobre a execução;
* **Editar Credencial** permite ao usuário editar a credencial utilizada na execução do template
* **Editar Dispositivo** permite ao usuário editar o dispositivo no qual o template será executado

O menu **Execuções ➔ Listar tentativas de operações** centralizará o resultado de cada tentativa de cada operação. Este relatório serve como um guia para auxiliar na identificação de erros ativos.

### **Filtrar lista de operações**

Vá até **Execuções ➔ Listar operações:**

* **Código:** Identificador da operação
* **Nome do usuário:** Nome do usuário no sistema que executou a operação
* **Dispositivo:** Qual dispositivo foi utilizado
* **Fabricante:** Qual fabricante do dispositivo utilizado
* **Modelo:** Qual modelo do dispositivo utilizado
* **Site:** Qual site foi usado para realizar a operação
* **Tags:** Filtre a partir das tags que adicionou no dispositivo
* **Estado:**
	+ Agendada
	+ Aguardando aprovação
	+ Cancelada
	+ Efetuada com sucesso
	+ Em execução
	+ Erro
	+ Expirada
* **Operação:**
	+ Ativação da credencial
	+ AWS Opsworks
	+ Criação de grupo
	+ Criação de usuário
	+ Criação de usuário no grupo
	+ Criação de credencial efêmera
	+ Remoção de credencial efêmera
	+ Exclusão de grupo
	+ Exclusão de usuário
	+ Exclusão de usuário no grupo
	+ Inativação da credencial
	+ Publicação de certificado
	+ Secret Management Automation
	+ Task Manager
	+ Troca de senha
	+ Troca de senha filha
* **Solicitante:** Filtrar o solicitante no relatório
* **Data de agendamento:** Quando foi agendada a operação
* **Data de execução:** Quando ocorreu à execução da operação
* **Mostrar detalhes da operação:** Marque esta opção caso deseje ver os detalhes
