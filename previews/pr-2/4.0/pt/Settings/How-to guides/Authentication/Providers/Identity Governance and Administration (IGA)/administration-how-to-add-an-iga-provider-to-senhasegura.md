# Como gerenciar provedores de identidade

Você pode adicionar ou remover provedores de identidade no Segura. Para isso, siga os passos abaixo.

## Adicionar novo provider

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Provisionamento > Gerenciamento de identidade (IGA) > Provedores**.
3. No relatório **Provedores de gerenciamento de identidade**, clique no botão **Adicionar**.
4. Na janela **Registrar provedor de Identity management**:
    1. **Nome**: preencha o nome do provider de identidade.
    2. **Protocolo**: selecione no menu suspenso o protocolo que será usado.
    3. **Sincronizar no Domum?**: selecione no menu suspenso se você deseja sincronizar esse provedor de identidade com o Segura Domum.
       1. Uma vez salva, essa informação não poderá ser modificada.
    4. **Ativo**: selecione no radio button se você deseja criar esse provider ativo.
    5. **Descrição**: forneça uma descrição sobre esse novo provider.
    6. **Tags**: adicione tags para esse novo provider.
    7. **Método de autenticação**: selecione no menu suspenso o método de autenticação que será utilizado por esse provider.
    8. **Data/Hora Validade**: no primeiro campo, informe a data de validade do token gerado pelo Segura. No segundo campo informe a hora de validade.
       1. Apesar do campo de hora fornecer intervalos de 15 minutos, você pode digitar qualquer horário, desde que válido, nesse campo.
    9. **IPs permitidos (Coloque * para permitir qualquer IP)**: ao clicar no botão de adição, um campo de texto é aberto logo abaixo, permitindo que você insira um ou mais endereços de IP, dos quais serão permitidas requisições via API.
        1. Coloque asterísco se você deseja permitir conexão de qualquer endereço de IP.
        2. Para excluir um endereço de IP cadastrado, clique no botão representado pelo ícone de lixeira do lado esquerdo do parâmetro.
    10. **Referers permitidos (Lista vazia para qualquer origem)**: ao clicar no botão de adição, um campo de texto é aberto logo abaixo, permitindo que você insira um referer HTTP, ao qual será permitida a autenticação.
        1. Deixe o campo em branco se você deseja permitir conexão de qualquer referer.
        2. Para excluir um referer cadastrado, clique no botão representado pelo ícone de lixeira do lado esquerdo do parâmetro.
5. Clique em **Salvar**.

## Atualizar provider

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Provisionamento > Gerenciamento de identidade (IGA) > Provedores**.
3. No relatório **Provedores de gerenciamento de identidade**, identifique o registro que será atualizado, clique no botão **Ações** e selecione **Editar provedor**.
5. A janela **Registrar provedor de Identity management** será aberta em modo edição.
6. Modifique os parâmetros que deseja e clique em **Salvar**.

## Detalhes do provider

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Provisionamento > Gerenciamento de identidade (IGA) > Provedores**.
3. No relatório **Provedores de gerenciamento de identidade**, identifique o registro que será atualizado, clique no botão **Ações** e selecione **Detalhes do provider**.
5. A janela **Registrar provedor de Identity management** será aberta em modo de visualização. Nesta janela, você tem as seguintes informações:
   1. **Provedor**: indica qual o provedor de autenticação que é usado pelo provider.
   2. **Método de autenticação**: indica o método de autenticação (nome) do provider.
   3. **Status**: indica o status do provider.
   4. **Descrição**: indica o texto descritivo sobre o provider.
   5. **Tags**: indica as tags relacionadas ao provider.
   6. **Base URL**: indica a URL base para realizar a chamada via API. A URL será a mesma da sua instância do Segura. Exemplo:  `https://Segura.com/iso/scim/v2`
   7. **Token URL**: indica a URL do token de autenticação do Segura.  A URL será a mesma da sua instância do Segura. Exemplo:  `https://Segura.com/iso/token/v2`
   8. **Client ID**: indica a chave de identificação do Segura para que seja possível realizar chamadas via API.
   9. **Client Secret**: indica a chave secreta do Segura para que seja possível realizar chamadas via API..
      1. Tanto para `Client ID` como para `Client Secret`, para você visualizar o valor das chaves é necessário clicar no botão de olho ao lado de cada campo.
      2. Só é possível visualizar uma chave por vez.

## Excluir provider

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Provisionamento > Gerenciamento de identidade (IGA) > Provedores**.
3. No relatório **Provedores de gerenciamento de identidade**, identifique o registro que será atualizado, clique no botão **Ações** e selecione **Excluir provider**.
5. No modal de confirmação, selecione **Sim** para confirmar a exclusão do provider.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).