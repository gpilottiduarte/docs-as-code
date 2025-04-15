# Como gerenciar autorizações no A2A


Este documento apresenta um guia passo a passo sobre como gerenciar autorizações para aplicações que irão consumir as APIs gerenciadas no **A2A**.

## Pré-requisitos

* Aplicação adicionada ao **A2A**. Saiba mais em [Como gerenciar aplicações no A2A](/v4/docs/pt/how-to-manage-applications-in-a2a).  
* Permissão de administrador do sistema.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **A2A**.  
2. No menu lateral, selecione **Aplicações \> Autorizações.**

## Adicionar autorização

Para adicionar uma autorização para uma aplicação no **A2A**, siga os passos abaixo:

1. Na tela **Autorizações**, encontre a aplicação desejada ou use os filtros de pesquisa.  
2. Na coluna **Ações**, clique em **Adicionar autorização**, representado pelo ícone de adição.  
3. Na tela **Adicionar autorização**, preencha:

   :::(error) (Alerta)

   Os campos com asterisco são obrigatórios.  
   :::

   1. **Aba Configurações**  
      1. **Data de expiração**: selecione o dia e a hora de expiração da autorização, ou deixe o campo em branco para desativação manual.  
      2. **Status**\*: defina o status da autorização como **Ativo** ou **Inativo.**  
      3. **Sistema**: selecione o sistema que consumirá os dados da API.  
      4. **Ambiente**: selecione o ambiente no qual a aplicação será utilizada.  
      5. **Descrição**: insira observações gerais sobre a autorização.  
      6. Clique em **Continuar.**

   2. **Aba Segurança**  
      1. **Recursos autorizados:** selecione os recursos disponíveis para a aplicação. As opções são *PAM Core, Certificate Manager, Task Manager, Dashboards, Web Proxy Session, Usuários, Sistema,* e *A2A*.  
      2. **Ativar a criptografia de informações sensíveis?\*:** defina se as informações sensíveis como credenciais do recurso **PAM Core** e *fingerprint* do recurso **Sistema** serão criptografadas nas respostas das chamadas. As opções são **Sim** e **Não.**  
      3. **Permissão do recurso PAM\*:** escolha o nível de acesso ao **PAM Core.** As opções são **Apenas leitura** e **Leitura e escrita.**  
      4. **IPs autorizados (use \* para permitir qualquer IP)**: clique em **Adicionar** para abrir o campo **Endereço** e adicionar os endereços de IP que poderão utilizar a autorização para realizar chamadas de API. Use \* (asterisco) para permitir qualquer IP.   
      5. **HTTP referers autorizados (por padrão qualquer origem é permitido)**: clique em **Adicionar** para abrir o campo **Referer** e adicionar as (URLs) autorizadas a realizar chamadas utilizando a autorização. Por padrão, qualquer origem é permitida.   
      6. **Validação de certificados \- Fingerprint do certificado:** insira o fingerprint do certificado para proteção adicional.  
      7. Clique em **Continuar.**

   3. **Aba Credencial**  
      1. **Credencial de acesso:** escolha a credencial vinculada à autorização.  
      2. **Criar uma credencial nova:** marque a caixa de seleção para criar uma nova credencial de acesso para a autorização.  
      3. **Dispositivo:** selecione o dispositivo vinculado à nova credencial.  
      4. **Nome de usuário:** defina o nome de usuário da nova credencial de acesso.  
      5. **Senha:** insira a senha da nova credencial de acesso.  
      6. **Adicionar:** clique para adicionar a credencial à autorização.  
      7. Clique em **Continuar.**

   4. **Aba Dispositivos**  
      1. **Adicionar:** clique para abrir uma tabela e adicionar dispositivos.  
      2. Clique em **Continuar.**

   5. **Aba Informações protegidas**  
      1. **Adicionar:** clique para abrir uma tabela e adicionar informações protegidas.  
      2. Clique em **Continuar.**

         :::(info) (Info)  
         A partir da versão 3.26, o módulo **Informações protegidas** foi substituído pelo **MySafe.** Saiba mais em [MySafe](/v4/docs/pt/mysafe).  
         :::

6. **Aba Revisão**  
   1. Revise o resumo das configurações da autorização.  
      2. Clique em **Voltar** para ajustar as configurações ou em **Salvar** para finalizar.  
       


## Visualizar autorização

Para visualizar os detalhes da autorização de uma aplicação, siga os passos abaixo:

1. Na tela **Autorizações**, encontre a aplicação desejada ou use os filtros de pesquisa.  
2. Clique no **botão Ações** e selecione **Visualizar**.  
3. Na tela **Autorização da aplicação**, visualize informações sobre a autorização. Os dados exibidos dependem do método de autenticação utilizado. Saiba mais em Autorizações.  
   1. Clique em **Exibir** para visualizar as informações sensíveis, como **Client Secret.**

## Editar autorização

Para editar as informações de uma autorização, siga os passos abaixo:

1. Na tela **Autorizações**, encontre a autorização desejada ou use os filtros de pesquisa.  
2. Clique no **botão Ações** e selecione **Editar.**  
3. Na tela **Editar autorização**, faça as alterações necessárias.  
4. Clique em **Salvar**.

## Baixar chave de descriptografia

Se ao adicionar uma autorização, você ativou a opção **Ativar a criptografar de dados sensíveis** na aba **Segurança**, os dados sensíveis como credenciais e o *fingerprint* de um Agent do **Network Connector** serão protegidos nas respostas às chamadas de API. Para baixar a chave de descriptografia e acessar essas informações de forma legível, siga os passos abaixo:

1. Na tela **Autorizações**, encontre a autorização desejada ou use os filtros de pesquisa.  
2. Clique no **botão Ações** e selecione **Download**.  
3. Clique em **Sim** no pop-up de confirmação para gerar a chave de descriptografia.  
4. Copie a chave de descriptografia e mantenha-a em um local seguro.

Saiba mais em [Como descriptografar dados usando uma chave privada](/v4/docs/pt/a2a-how-to-decrypt-sensitive-data-using-a-private-key).

##  Desativar autorização

A desativação de uma autorização é uma alternativa à expiração. Ou seja, se você não definiu uma data e hora de expiração para a autorização, ela permanecerá ativa até que você a desative seguindo os passos abaixo:

1. Na tela **Autorizações**, encontre a autorização desejada ou use o filtro de pesquisa **Status \> Ativo.**  
2. No relatório de autorizações ativas, identifique a aplicação desejada ou use os filtros de pesquisa.  
3. Clique no **botão Ações** e selecione **Editar.**  
4. Na aba **Configurações**, localize o componente **Status** e selecione **Inativo**.  
5. Na aba **Revisão**, clique em **SALVAR**.

## Ativar autorização

Para ativar uma autorização desativada, siga os passos abaixo:

1. Na tela **Autorizações**, localize o filtro **Status** e selecione **Inativo**.  
2. No relatório de autorização inativas, encontre a autorização desejada ou use os filtros de pesquisa.  
3. Clique no **botão Ações** e selecione **Editar**.  
4. Na aba **Configurações**, localize o componente **Status** e selecione **Ativo**.  
5. Na aba **Revisão**, clique em **SALVAR**.

 ---  
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).

   