# Como gerenciar autorizações por aplicação

## Requisitos

* Ter cadastradas as autorizações para as suas aplicações registradas no Segura.

## Criar uma autorização por aplicação no DevOps Secret Manager

Para criar uma autorização por aplicação, siga os passos abaixo:

1. No senhagura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **DevOps Secret Manager.**
2. No menu lateral, selecione **Aplicações > Autorização por aplicação.**
3. Na tela principal, estarão listadas todas as aplicações que foram cadastradas no Segura.
4. Para criar uma nova autorização por aplicação, identifique a aplicação que deseja autorizar e, na coluna **Ação**, clique no botão de soma.

Na janela **Autorização da aplicação**, preencha conforme os passos a seguir:

1. Na aba **Segurança**:

   1. **Authorized resources**: indique quais os recursos a aplicação terá autorização para acessar.
   2. **Data/Hora Validade**: no menu suspenso, selecione a data, atráves do calendário que se abrirá no primeiro campo, e a hora, no segundo campo.
   3. **Ativo**: indique se deseja que a autorização esteja ativa ou não. Por padrão, a autorização estará marcada como **Sim**.
   4. **Ativar criptografia de informações sensíveis?**: ativa ou desativa a criptografia das informações marcadas como sensíveis.
   5. **Habilitar criação de aplicações DSM?**: ativa ou desativa a autorização a criar aplicações DSM.
   6. **Ambiente**: no menu suspenso, selecione o ambiente da autorização. É possível cadastrar ambientes.
   7. **Sistema**: no menu suspenso, selecione o sistema da autorização.
   8. **IPs permitidos**: lista de endereços de IP que serão permitidos. Clique no botão de soma para adicionar quantos IPs quiser. Para permitir qualquer endereço de IP, preencha como `*`.
   9. **Referers permitidos**: listagem dos `HTTP REFERERS` permitidos para essa autorização. Para permitir qualquer referer, crie uma lista vazia.
   10. **Validação de certificados**: insira o fingerprint o certificado que será usado com essa autorização.
2. Na aba **Secrets**, na opção **Segredos**, adicione os segredos que farão parte desta autorização. Para isso, siga os passos abaixo:

   1. Clique no botão de soma ao lado da palavra **Segredos**.
   2. No modal **Segredos**, selecione aqueles que você deseja adicionar à autorização.
   3. Clique em **Adicionar**.
3. Na aba **Chaves criptográficas**, na opção **Chaves Criptográficas**, adicione as chaves de criptografia que integrarão a autorização. Para isso,  siga os passos abaixo:

   1. Clique no botão de soma ao lado da palavra **Chaves criptográficas**.
   2. No modal **Chaves criptográficas**, selecione aquelas que deseja adicionar à autorização.
   3. Clique em **Adicionar**.
4. Clique em **Salvar**.

## Alterar uma autorização por aplicação no DevOps Secret Manager

Para alterar uma autorização por aplicação no DSM, acesse a listagem de aplicações através do caminho **Grid Menu > DevOps Secret Manager > Aplicações > Autorização por aplicação.**

Na listagem, identifique a aplicação e a autorização que deseja alterar. Para isso, siga os passos abaixo:

1. Na coluna **Ação**, clique no ícone representado pelos três pontos verticais e, no menu suspenso, selecione a opção **Atualizar autorização**.
2. Na janela **Autorização da aplicação**, faça as mudanças necessárias. É a mesma janela já descrita em **Como criar uma autorização por aplicação no DevOps Secret Manager.**
3. Clique em **Salvar**.

:::(info) (Info)
Para baixar a chave privada da autorização, clique no ícone dos três pontos verticais e selecione, no menu suspenso, a opção **Download da chave privada**.
:::

## Visualizar uma autorização

Para visualizar uma autorização por aplicação no DSM, acesse a listagem de aplicações através do caminho **Grid Menu > DevOps Secret Manager > Aplicações > Autorização por aplicação.**

Na listagem, identifique a aplicação e a autorização que você deseja visualizar. Para isso, siga os passos abaixo:

1. Na coluna **Ação**, clique em **View authorizations**, representado ícone de chave.
2. Em **Autorizações da aplicação**, preencha:
   1. **Método de autenticação**: método de autenticação utilziado pela aplicação.
   2. **Aplicação**: nome da aplicação.
   3. **Unique key**: valor exclusivo quando o usuário marcar a autenticação para AWS e possuir, pelo menos, um ARN.
   4. **Client ID**: identificação do cliente. Deve ser uma string do tipo: `5e1983dc7014e5caab711aa73cd714400622256655d`.
   5. **Client secret:** secret do cliente. Deve ser um string do tipo: `9753d43831513ebf60c5f02dc7505f42`.
   6. Na seção **Segredos**:
      1. **Código**: código do segredo no Segura.
      2. **Nome**: nome da aplicação no Segura.
      3. **Identidade**:  nome da identidade do segredo. É obrigatório ao criar um novo segredo e não pode ser igual ao campo **Nome**.

Para visualizar informações sobre o segredo, clique no ícone de lupa para ser redirecionado para a janela **Secret** com todas as informações sobre aquele segredo.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).