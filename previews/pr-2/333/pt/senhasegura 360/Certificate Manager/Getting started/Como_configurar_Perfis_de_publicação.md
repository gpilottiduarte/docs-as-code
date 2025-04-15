# Como configurar Perfis de publicação

Este artigo explica como configurar a funcionalidade **Perfis de publicação**. Cadastrar perfis de publicação é importante para distribuir certificados de forma controlada e eficiente. Esses perfis estabelecem regras e formatos para divulgação seletiva de informações, mantendo a segurança e a conformidade. 

A padronização resultante simplifica a administração, minimiza erros e preserva a integridade dos sistemas de chaves públicas. Além disso, quando realizar a ação de publicar um certificado e selecionar um perfil de publicação previamente cadastrado, diversos campos serão preenchidos automaticamente.   

## Criar um perfil de publicação
Para criar um novo perfil, siga estes passos:

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelo ícone de nove quadrados e, em seguida, selecione **Certificate Manager**.
2. No menu lateral, selecione **Configurações** e, em seguida, **Perfis de publicação**.
3. No canto superior direito, clique em **Exibir ações** (o ícone dos três pontos verticais).
4. Selecione **Novo**; o formulário **Perfil da publicação** abrirá.
5. Em **Nome do perfil**, preencha com a identificação desejada.
6. Em **Plugin de publicação**, selecione uma opção do menu suspenso. Conforme o plugin selecionado, diferentes campos serão habilitados na seção **Configuração do plugin**. Veja como preencher os campos específicos no artigo [**Plugins de publicação**](/v3-33/docs/pt/publishing-plugins). 

### Seção Credencial para execução

1. Defina qual credencial será utilizada para autenticar os dispositivos.
    1. Marque a caixa de seleção **Utilizar uma credencial cadastrada para acessar todos os dispositivos** para habilitar o menu suspenso de credenciais.
    2. Selecione a **Credencial de acesso cadastrada do sistema**.

:::(Warning) (Cuidado)

* Caso queira utilizar um nome de usuário como credencial, preencha o campo **Username da credencial**. 
* Para realizar a autenticação, o sistema localizará esse username em todos os dispositivos cadastrados, portanto, o dispositivo precisa ter uma credencial com o mesmo username inserido nesse campo.
:::

#### Aba Servidores
:::(Warning) (Cuidado)
Certifique-se de que a credencial selecionada na aba anterior pode conectar-se aos dispositivos escolhidos.
:::

1. Acrescente os servidores onde o certificado deve ser publicado.
    1. Clique no ícone do sinal de soma, ao lado da palavra **Servidores**.
    2. Na janela **Servidores**, localize os dispositivos desejados. Utilize os campos de busca, ou a barra de rolagem.
    3. Marque a caixa de seleção à esquerda ao lado do nome de usuário.
    4. Clique em **Adicionar**.
2. Clique em **Salvar**.

Na página principal de **Perfis de publicação**, o novo perfil aparecerá listado.

* * *
## Editar um perfil de publicação
Para editar um perfil de publicação, siga estes passos:

1. Na página principal de **Perfil de publicação**, localize o perfil desejado.
2. Na coluna **Ação** correspondente, clique em **Alterar** (ícone do lápis).
3. Atualize o formulário.
4. Clique em **Salvar** para confirmar as alterações.

:::(Info) (Info)
No canto superior direito, o ícone da seta em sentido anti-horário atualiza a tela.
:::

* * *
## Desativar um perfil de publicação
Para desativar um perfil de publicação, siga estes passos:

1. Na página principal de **Perfil de publicação**, localize o perfil desejado.
2. Na coluna **Ação** correspondente, clique no ícone dos três pontos verticais.
3. Selecione **Desativar**.
4. Clique em **Sim** para confirmar a desativação do perfil.

O perfil permanece na página principal de **Perfis de publicação** porque o campo de busca **Ativo** vem definido como **Todos** por padrão. Selecione **Não** para encontrar o perfil desativado.

Você pode ativar um perfil novamente. Na coluna **Ação**, clique no ícone de três pontos verticais e selecione **Ativar**.
* * *
## Buscar um perfil de publicação
Caso existam muitos perfis cadastrados, utilize os campos de busca para filtrar as informações.
Para localizar o perfil desejado, siga estes passos:

1. Na página principal de **Perfis de publicação**, faça uma pesquisa utilizando os campos de busca:
    1. **Código**: o número de identificação do perfil.
    2. **Nome do perfil**: o nome cadastrado para o perfil.
    3. **Tipo do perfil**: selecione um perfil do menu suspenso.
    4. **Ativo**: o status do perfil no sistema.
2. Clique em **Filtrar** para realizar a busca.
    1. Se necessário, clique em **Limpar** para apagar os campos preenchidos.

:::(Info) (Info)
No canto superior direito, o ícone da lupa exibe ou esconde os campos de buscas.
:::
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
