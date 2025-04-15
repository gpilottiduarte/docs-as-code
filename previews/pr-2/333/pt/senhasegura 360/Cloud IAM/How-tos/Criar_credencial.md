Credenciais são chaves de acesso que possibilitam o consumo de serviços do provedor de Cloud.

## Criar credencial

Para criar uma credencial, acesse o menu: **Cloud IAM ➔ Cloud IAM ➔ Credentials**

1. Clique no botão de ações da página e selecione a opção ***Adicionar credencial***.
2. Preencha os seguintes campos no formulário:


	* ***Provedor:*** Selecione o provedor onde a credencial deve ser criada
	* ***Conta:*** Selecione uma das contas cadastradas
	* ***Usuário/Conta de serviço:*** Selecione o usuário ou a cotna de serviço para qual a credencial será criada
	* ***TTL (segundos):*** Defina o templ de vida da credencial após criada. Este tempo é decrescente e se inicia a partir da criação da credencial no senhasegura. Quando o tempo atingir 0, a credencial será automaticamente excluída no provedor
	* ***Ambiente:*** Ambiente em que a credencial estará relacionada.
	* ***Sistema:*** Sistema em que a credencial estará relacionada
	* ***Descrição:*** Opcional. Descrição da credencial
	* ***Tags:*** Opcional. As tags são utilizadas para facilitar a busca pelas credenciais e segregação nos grupos de acesso
3. Para finalizar, clique em ***Confirmar***.

## Visualizar credencial

Para visualizar uma credencial, siga o menu **Cloud IAM ➔ Cloud IAM ➔ Credenciais**.

1. No relatório, vá na linha da credencial que deseja visualizar e, na coluna ação, clique na opção ***Details***
2. Para ver o segredo da credencial clique na opção ***Show/Hidden password***

ImportanteApenas as credenciais geradas pela senhasegura terão sua senha armazenada. As geradas diretamente no provedor só podem ser visualizadas uma única vez.

