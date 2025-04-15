# Como criar uma requisição

Uma requisição é o processo de solicitar a emissão de um certificado digital de uma Autoridade Certificadora. As requisições são necessárias para que o Segura entenda qual o tipo de certificado você quer, e por qual autoridade ele deve ser assinado. Toda requisição inclui uma CSR (Certificate Signing Request), que compartilha informações essenciais com a Autoridade Certificadora para gerar o certificado. 

Você pode criar novas requisições a partir do componente ou importar requisições existentes. Este artigo ensina como realizar as duas ações. 
***
## Criar uma requisição

Para criar uma requisição manualmente, siga estes passos:

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelo ícone de nove quadrados e, em seguida, selecione **Certificate Manager**.
2. No menu lateral, selecione **Configurações** e, em seguida, **Requisições**.
3. No canto superior direito, clique em **Exibir ações** (o ícone dos três pontos verticais).
4. Selecione **Novo**; isso abrirá o formulário **Cadastro de requisição**.
5. Na aba Geral, preencha as informações:
    1. Em **Tipo de certificado**, selecione o tipo de certificado desejado.
    2. Em **Tipo de domínio**, marque a opção desejada.
    3. Em **Organização**, selecione uma organização e clique em **Adicionar**.
    4. Em **Nome comum**, digite o nome apropriado. 
    5. Em **Validade (em dias)**, defina o período para o certificado permanecer válido.
    6. Em **SAN** (Subject Alternative Name), digite todos os domínios a serem protegidos com esse certificado.
    7. Adicione as **Tags** que desejar.
    8. Em **Algoritmo de criptografia**, selecione o algoritmo de criptografia. Lembre-se de escolher o algoritmo apropriado para os critérios de segurança da sua organização.
    9. Em **Tamanho da chave criptográfica**, selecione o tamanho da chave condizente ao algoritmo.
    10. Em **Algoritmo de assinatura do certificado**, selecione o algoritmo usado para assinar o certificado através da autoridade certificadora.
:::(Warning) (Cuidado)
Para maior segurança, considere adicionar uma **Senha de armazenamento** para visualização do certificado. A senha pode ter até 72 caracteres, incluindo letras maiúsculas e minúsculas, números e os símbolos ```! % @ # ^ * _``` 
:::
:::(Warning) (Cuidado)
Embora a adição de uma **Senha de revogação** não seja obrigatória, ela é altamente recomendada. Os certificados emitidos sem esta senha estão sujeitos a revogações involuntárias por qualquer pessoa com acesso à CA. Os critérios para esta senha são os mesmos mencionados acima.
:::
6. Clique em **Salvar**.

Na página principal de **Requisições**, a nova requisição aparecerá listada.
:::(Info) (Info)
Consulte o artigo [Cadastro de requisição](/v4/docs/pt/certificate-manager-reference-requisition-form) para informações sobre outros campos desse formulário.
:::

***
## Importar requisição
Caso já exista uma requisição pronta, é possível importá-la para que o Segura processe e gere o certificado. 

Para importar uma requisição, siga estes passos:

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelo ícone de nove quadrados e, em seguida, selecione **Certificate Manager**.
2. No menu lateral, selecione **Configurações** e, em seguida, **Requisições**.
3. No canto superior direito, clique em **Exibir ações** (o ícone dos três pontos verticais).
4. Selecione **Importar request** isso abrirá o formulário **Importar request**.
5. Escolha o **Arquivo .csr** e o **Arquivo .key** da sua máquina.
:::(Info) (Info)
Embora não seja obrigatório, recomendamos adicionar a **Senha da key** e a **Senha de revogação**. Essas senhas protegem as informações e aumentam a segurança do processo.
:::
6. Em **Algoritmo de assinatura do certificado**, selecione o algoritmo que será usado para assinar o certificado através da autoridade certificadora.
7. Em **Tipo de certificado**, selecione tipo de certificado que deseja obter.
8. Em **Tipo de domínio**, marque a opção desejada.
9. Em **Organização**, selecione uma organização e clique em **Adicionar**.
10. Clique em **Salvar**.

Na página principal de **Requisições**, a requisição importada aparecerá listada.
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).

