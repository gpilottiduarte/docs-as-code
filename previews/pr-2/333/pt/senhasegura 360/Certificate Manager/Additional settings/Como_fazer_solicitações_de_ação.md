# Como fazer solicitações de ação

Este artigo explica como solicitar permissão para executar ações específicas no Certificate Manager e acompanhar o status dessas solicitações. Este fluxo ocorre apenas quando um usuário faz parte de um Grupo de acesso que requer aprovação de outro usuário.

As ações que um usuário pode solicitar para executar são:

* Visualizar as senhas do certificado
* Assinar o certificado
* Renovar o certificado
* Publicar o certificado

## Requisitos

* Um Papel com as Permissões:
    * **CertificateManager.Requests.Approval.List**
    * **CertificateManager.Requests.Approval.View**

## Solicitar visualização da senha 
O fluxo descrito neste tutorial se aplica a todas as ações mencionadas acima. Mesmo que sua solicitação seja para outra ação e feita de um local diferente do exemplificado abaixo, isso não altera o comportamento do produto. Outros itens do componente permitem fazer solicitações. Sempre localize a coluna **Ação** e verifique o menu suspenso para possíveis solicitações.

Para solicitar a visualização da senha, siga estes passos:

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelo ícone de nove quadrados e, em seguida, selecione **Certificate Manager**.
2. No menu lateral, selecione **Certificados** e, em seguida, **Requisições**.
3. Localize a requisição desejada.
4. Na coluna **Ação** correspondente, clique no ícone dos três pontos verticais.
5. Selecione **Visualizar senha da chave**; será exibida uma nova janela.
6. Preencha as informações:
6.1 **Justificativa**: escreva o motivo para solicitar a visualização da senha.
6.2 **Motivo**: selecione uma das opções cadastradas.
6.3 **Governance code**: adicione um código para fins de controle.   
7. Selecione **Justificar**.

A mensagem ‘solicitação enviada’ aparece na tela, informando que seu pedido foi enviado.

Enquanto sua solicitação não for aprovada, você sempre lerá uma mensagem de ‘acesso negado’ ao tentar executar a ação. Depois que a solicitação for aprovada, retorne ao mesmo item e selecione **Visualizar senha da chave** para obter a informação. 
***
## Monitorar suas solicitações
Para monitorar suas solicitações, siga estes passos:

1. No menu lateral, selecione **Minhas solicitações**.
2. No campo de busca **Estado**, selecione entre as opções disponíveis. 
    2.1 Utilize qualquer outro campo para delimitar ainda mais a busca.

Conforme os filtros aplicados, seus pedidos aparecem na página principal do item Minhas solicitações.
* **Solicitação pendente**: significa que um ou mais aprovadores ainda precisam ver a solicitação.
* **Solicitação aprovada**: significa que você pode realizar a ação.
* **Solicitação reprovada**: significa que um ou mais aprovadores recusaram a sua solicitação.
* **Solicitação expirada**: toda solicitação tem um prazo para ser aprovada. Caso isso não ocorra dentro do prazo estipulado, você deverá enviar a solicitação novamente.

:::(Info) (Info)
Se estiver utilizando o senhasegura quando sua solicitação for aprovada, uma mensagem pop-up aparecerá no canto inferior direito da tela.
:::
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
