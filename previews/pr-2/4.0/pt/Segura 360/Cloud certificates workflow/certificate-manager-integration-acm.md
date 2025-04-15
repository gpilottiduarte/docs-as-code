# Amazon ACM

## Obter ID e segredo da chave de acesso na AWS

1. No menu da sua conta AWS, localize **Credenciais de segurança**.  
2. Localize a seção **Chaves de acesso**, e selecione **Criar chave de acesso**.  
3. Vá em **Recuperar chave de acesso** para copiar os dados necessários.

## Criar conta no Segura

1. No Segura, acesse o menu **Certificate Manager > Certificados Cloud > Conta**.  
2. Clique no ícone **(⁝)** e selecione **Novo**.  
3. Preencha os campos com as informações abaixo. Os campos com asterisco(\*) são informações obrigatórias:  
    - **Nome:** identificador da conta do usuário.  
    - **Ativo:** a opção **Sim** está selecionada por padrão.  
    - **Definir dados de acesso:** selecione o campo para poder digitar os dados abaixo.  
    - **ID da chave de acesso:** ID da aplicação do usuário.  
    - **Segredo da chave de acesso:** segredo da aplicação do usuário.  
4. **Salvar**.

## Criar requisições

:::(Info) (Info)
Para criar requisições é necessária uma autoridade de certificação (CA) privada. No momento, o Segura funciona somente com CAs privadas.
:::

1. Na sua conta AWS, digite **Certificate Manager** no campo de busca e clique no primeiro serviço que aparece.  
2. Na próxima tela, localize e selecione **Criar uma CA privada**.  
3. Preencha os campos de configuração conforme a necessidade da empresa.  
4. A CA será criada e disponibilizada pela AWS.  
5. Em **Ações**, clique **Instalar Certificado da CA** para habilitar.  
6. No Segura, acesse o menu **Certificate Manager > Certificados Cloud > Requisições**. 
7. Clique no ícone **(⁝)** e selecione **Novo**.  
8. Preencha os campos com as informações abaixo. Os campos com asterisco (*) são informações obrigatórias: 
    - **Conta Amazon**: selecione a conta criada.  
    - **Região:** selecione a mesma região da sua conta AWS.  
    - **CA:** selecione a CA criada.
        :::(Warning) (**Atenção**)
        Certifique-se de que seu usuário possui as permissões apropriadas relacionadas ao Certificate Manager na conta AWS para conseguir visualizar a CA.
        :::
    - **Nome de domínio:** escolha um nome de identificação.  
    - **Nomes adicionais:** nomes de domínio adicionais.  
    - **Tag:** adicione identificação extra, caso necessário.  
    - **Valor:** adicione identificação extra, caso necessário. 
9. **Salvar**.

## Assinar requisições

1. Com a requisição criada, localize-a no Segura, na coluna **Ações.**   
2. Clique no ícone **(⁝)** e selecione a opção **Solicitar assinatura**.   
3. Preencha os campos que aparecem como obrigatórios:  
    - **Justificativa:** escreva uma razão para a solicitação.  
    - **Motivo:** escolha entre as opções disponíveis.  
    - **Governance Code:** digite um código de identificação da requisição.  
4. **Salvar**.  
5. Visualize seu certificado na página da AWS e confirme que ele foi emitido.  
6. Visualize seu certificado no Segura. O estado **Assinado** aparece após alguns minutos de espera.

## Visualizar certificados

1. Acesse o menu **Certificate Manager > Certificados Cloud > Certificados**. Somente os certificados que foram assinados são apresentados.  
2. Na coluna **Ação**, clique no ícone **(⁝)** para visualizar todas as opções disponíveis:
    - **Alterar certificado:** altere quem é o responsável pelo certificado, e usuários que podem acessar e usar o certificado.  
    - **Solicitar detalhes:** visualize as informações do seu certificado.  
    - **Renovar certificado:** conforme o permissionamento do usuário, é possível solicitar e assinar a requisição, ou somente fazer a solicitação.  
    - **Histórico de renovação dos certificados:** visualize o histórico de renovação, quem e quando.  
    - **Desativar:** desabilite o certificado, e por consequência suspenda a cobrança e funcionamento.
        :::(Warning) (**Atenção**)
        A coluna **Contas** apresentada nessa tela, mostra quantas contas estão vinculadas a um único certificado. Recomendamos fortemente que se a sua descoberta revelar mais de uma conta, que essa configuração seja revista. O ideal é que o certificado possua uma única conta para manter a integridade da infraestrutura da cloud.
        :::
3. Ao clicar no ícone de **Detalhe**, além de visualizar diferentes informações sobre o seu certificado, você pode fazer o **Download da chave** para utilizar em diferentes sites e aplicações.