# Como gerar certificados aleatórios

Neste artigo, você aprenderá a gerar certificados aleatórios. O Certificate Manager oferece a conveniência de criar múltiplos CSR (Certificate Signing Requests) com Common Names (CNs) aleatórios e, em seguida, assiná-los de uma só vez. A capacidade de gerar certificados com CNs aleatórios é particularmente valiosa em ambientes de microsserviços e elásticos porque essa funcionalidade simplifica o gerenciamento do ciclo de vida dos certificados.

## Passo 1: Criar uma requisição
Para criar uma requisição com certificados aleatórios, siga estes passos:

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelo ícone de nove quadrados e, em seguida, selecione **Certificate Manager**.
2. No menu lateral, selecione **Configurações** e, em seguida, **Requisições**.
3. No canto superior direito, clique em **Exibir ações** (o ícone dos três pontos verticais).
4. Selecione **Novo**; isso abrirá o formulário **Cadastro de requisição**.
5. Na aba **Geral**, preencha as informações.
    1. Em **Tipo de certificado**, selecione o tipo de certificado desejado.
    2. Em **Tipo de domínio**, marque a opção desejada.
    3. Em **Organização**, selecione uma organização e clique em **Adicionar**.
    4. Em **Nome comum**, digite o nome apropriado. Lembre-se que será a partir desse CN que os certificados aleatórios serão gerados. 
    5. Em **Validade (em dias)**, defina o período para o certificado permanecer válido.
    6. Habilite a caixa de seleção **Gerar certificados aleatórios com esse CN**.
    7. Em **Quantidade de certificados**, defina um número. O limite são 500 certificados aleatórios.
    8. Em **SAN (Subject Alternative Name)**, digite todos os domínios a serem protegidos com esse certificado.
    9. Em **Algoritmo de criptografia**, selecione o algoritmo de criptografia. Lembre-se de escolher o algoritmo apropriado para os critérios de segurança da sua organização.
    10. Em **Tamanho da chave criptográfica**, selecione o tamanho da chave condizente ao algoritmo.
    11. Em **Algoritmo de assinatura do certificado**, selecione o algoritmo usado para assinar o certificado através da autoridade certificadora.
    12. Adicione as senhas desejadas.
:::(Info) (Info)
As senhas criadas pelo usuário podem ter até 72 caracteres, incluindo letras maiúsculas e minúsculas, números e os símbolos `! % @ # ^ * _`.
:::
8. Clique em **Salvar**.

Na página principal de **Requisições**, a nova requisição aparecerá listada e na coluna **Certificados aleatórios**, você verá a quantidade de certificados configurados. 

* * *
## Passo 2: Assinar a requisição
Para realizar esta ação, acesse o artigo [Como assinar uma requisição](/v3-33/docs/pt/certificates-flow-how-to-sign-request).

Após a assinatura da requisição, os certificados serão processados e assinados automaticamente pelo sistema em um tempo que varia conforme a quantidade de certificados aleatórios solicitados.

* * *
## Passo 3: Visualizar certificados aleatórios assinados
Há duas maneiras de visualizar os certificados aleatórios:

1. Na página principal de **Requisições**, clique no número que representa a quantidade de certificados na coluna **Certificados aleatórios**. 
2. Todas as requisições aparecerão listadas individualmente. 
3. Na coluna **Estado**, observe que as requisições vão mudando de ‘Gerando’ para ‘Assinado’. 
4. Na coluna **Ação**, clique em **Informações do certificado** (ícone do cartão de identificação) para visualizar o certificado aleatório gerado a partir do CN.

Ou

1. No menu lateral esquerdo, selecione **Certificados**.
2. Na página principal do item, todos os certificados aleatórios gerados aparecerão listados individualmente.

* * *
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
