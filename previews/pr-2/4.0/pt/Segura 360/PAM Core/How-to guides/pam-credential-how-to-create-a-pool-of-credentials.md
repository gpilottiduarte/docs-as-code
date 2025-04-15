# Como criar um pool de credenciais

Um pool de credenciais é um conjunto de credenciais compartilhadas. Os pools de credenciais são usados para facilitar o gerenciamento de credenciais e melhorar a segurança. Ao centralizar as credenciais em um pool, os administradores podem controlar melhor o acesso às credenciais e aplicar políticas de segurança consistentes a todas as credenciais.

Para criar um pool de credenciais na plataforma Segura, siga os passos abaixo:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**. 
2. No menu lateral, selecione **Gerenciamento > Credenciais > Pool de credenciais**.
3. No canto superior esquerdo, clique em **+ Adicionar**.
4. No formulário **Pool de credenciais**, preencha os seguintes campos:
    1. **Nome de identificação**: nome para identificar o pool de credenciais.
    2. **Status**: Mantenha selecionado.
5. Na seção **Credenciais**:
    1. Clique no botão **+Adicionar** ao lado da palavra **Credenciais**.
    2. No modal **Credenciais**, selecione as credenciais que você deseja que façam parte do novo pool de credenciais.
    3. Clique em **Adicionar**.
6. Clique em **Salvar**.

Após salvar o novo pool de credenciais, você será redirecionado para a página de listagem. Agora poderá conferir o novo pool de credenciais criado.

## Como editar um pool de credenciais

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**. 
2. No menu lateral, selecione **Gerenciamento > Credenciais > Pool de credenciais**.
3. Na tela de listagem para pools de credenciais, localize o pool que você deseja editar.
4. Na coluna **Ação**, clique no botão **Editar**.

## Pool de credenciais e discovery

A criação do pool de credenciais auxilia na automação do processo de **Discovery**, no qual o Segura pode necessitar autenticar-se em alguns dispositivos. Quando a autenticação não é bem-sucedida com uma credencial específica, o Segura avança automaticamente para a próxima credencial disponível no conjunto. Esse procedimento é repetido até que a autenticação seja efetivada. Dessa forma, elimina-se a necessidade de criar diversos processos de discovery independentes, simplificando a administração e tornando o processo mais eficaz.

Você pode acessar a documentação sobre os [Tipos de Discovery](https://docs.Segura.io/v4/docs/pt/discovery-create-discovery) para saber mais sobre o assunto.

---

Para maiores informações, acesse a documentação sobre o [Segura Discovery](https://docs.Segura.io/v4/docs/pt/discovery).