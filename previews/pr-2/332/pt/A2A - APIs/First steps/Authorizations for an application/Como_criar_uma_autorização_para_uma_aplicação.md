# Como criar uma autorização para uma aplicação

Este tutorial apresenta um passo a passo sobre como criar autorizações para uma aplicação previamente criada no módulo **A2A**.

## Requisitos

* Uma aplicação criada. Para mais informações, acesse [Como criar uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-application).

:::(Info) (Info)
O senhasegura não possui restrições quanto ao número de autorizações que podem ser criadas para uma aplicação. Entretanto, após a criação da primeira aplicação, as próximas autorizações podem ser criadas seguindo dois passos diferentes. Para mais informações, continue lendo esse tutorial.
:::

## Criar a primeira autorização para uma aplicação

Para criar uma autorização para uma aplicação, siga os passos abaixo:

1. Na plataforma senhasegura, no canto superior esquerdo, clique no **Grid Menu**, identificado pelos nove quadrados, e selecione **A2A**.
2. No menu lateral, selecione **Aplicações**.
3. Na lista, selecione a aplicação desejada e, na coluna **Ação**, clique nos três pontos verticais para abrir um menu suspenso.
4. No menu suspenso, clique em **Autorizações**, identificado pelo ícone de chave.
5. Na janela **Autorizações**, no canto superior direito, clique em **Exibir ações**, identificado pelos três pontos verticais, para abrir um menu suspenso.
6. No menu suspenso, clique em **+ Nova**.
7. Na janela **Autorização da aplicação**, preencha os campos a seguir:

    1. Aba **Configurações**: defina as informações gerais da autorização.
         1. **Data de expiração**: período em que a autorização permanecerá ativa. Preencha a data no primeiro campo e o horário no segundo campo.

        2. **Ativo**: a situação da aplicação. As opções são **Sim** e **Não**.
        3. **Ambiente**: o ambiente onde a autorização estará ativa. Clique na seta que aponta para baixo para visualizar uma lista dos ambientes disponíveis.
        4. **Sistema**: o sistema onde a autorização estará ativa. Clique na seta que aponta para baixo para visualizar uma lista dos sistemas disponíveis.

    2. Aba **Segurança**: defina as informações de segurança da autorização.
       
         1. **Recursos autorizados**: marque os recursos e produtos que os usuários podem acessar. As opções disponíveis são *PAM Core, Certificate Manager, Task Manager, Dashboards, Web Proxy Session, Usuários* e *A2A*. Para mais informações sobre cada módulo, acesse a [página de documentação](https://docs.senhasegura.io/v3-30/docs) correspondente do senhasegura. 
         2. **Permissão do recurso PAM***: campo obrigatório com duas opções disponíveis: **Apenas leitura** e **Leitura e escrita**.
              
            :::(Warning) (Caution)
            Cuidado ao conceder a permissão de Leitura e escrita pois ela permite que usuários                tenham acesso irrestrito aos dados.
            :::
                
                   
         
               
        3. **Ativar a criptografia de informações sensíveis?***: essa opção habilita ou desabilita a entrega de informações sensíveis, como senhas e segredos, em formato criptografado nas chamadas de API. Para descriptografar esses dados, utilize a chave privada fornecida nas configurações de autorização.
        4. **IPs autorizados (use * para permitir qualquer IP)**: clique em **Adicionar**, identificado pelo sinal de adição, para adicionar um ou mais endereços de IP que podem acessar a aplicação. Insira um asterisco no campo para autorizar qualquer endereço de IP. Para deletar um endereço de IP, clique na lixeira do IP correspondente.
        5. **HTTP referers autorizados (por padrão qualquer origem é permitida)**: defina quais sites podem enviar requisições. O não preenchimento desse campo implica na autorização de todos os sites.
        6. **Validação de certificados**: melhore a segurança ao adicionar mais uma camada de proteção através da validação baseada no fingerprint do certificado. Quando ativada, o sistema não apenas validará tanto os dados de autenticação OAuth, quanto o fingerprint do certificado fornecido na requisição.
      3. Aba **Credenciais**: defina as credenciais que podem ser acessadas através dessa autorização.
      

            1.           **Credencial de acesso:** insira um IP, Hostname ou Username para buscar e adicionar uma credencial já registrada no **PAM Core**. Clique na seta que aponta para baixo para visualizar uma lista das credenciais disponíveis. Clique em **Adicionar**.
            2.           **Criar uma credencial nova**: marque essa caixa para criar uma nova credencial. Preencha os campos **Dispositivo**, - clique na seta que aponta para baixo para visualizar uma lista com os dispositivos disponíveis - **Nome do usuário** e **Senha** para a nova credencial. Clique em **Adicionar**. 
       Na mesma tela, sob o título **Credenciais**, visualize uma lista com as credenciais adicionais e seus respectivos **Código**, nome da **Credencial**, **Dispositivo** e **Tipo**.
       Você pode inativar uma credencial adicionada clicando no ícone de lixeira correspondente.

                :::(Info) (Info)
                As credenciais disponíveis posem ser visualizadas em **PAM Core > Credenciais > Todas**.
                  :::

    1.                   Aba **Dispositivos**: defina os dispositivos que podem ser acessados através dessa autorização. 

        1.                   **Dispositivo**: insira o **IP** ou **Hostname** do dispositivo, ou clique na seta que aponta para baixo para visualizar uma lista com os dispositivos registrados no **PAM Core**. Clique em **Adicionar**.
        Na mesma tela, sob o título **Dispositivos**, visualize uma lista com os dispositivos adicionados e seus respectivos **Código**, **Nome**, **Gerenciamento**, **Tipo** e **Fabricante**.
Você pode inativar um dispositivo adicionado clicando no ícone de lixeira correspondente.

         :::(Info) (Info)
          Os dspositivos disponíveis podem ser visualizados em **PAM Core > SISTEMA > Dispositivos > Dispositivos**.
        :::

    1.    Aba **Informações protegidas**: defina a informação protegida que poderá ser acessada através dessa autorização.

            1.   **Informação protegida**: adicione informações do **PersonalVault** que deseja proteger. Clique na seta que aponta para baixo para visualizar as opções disponíveis.
Na mesma tela, sob o título **Informações protegidas**, visualize uma lista com as informações protegidas adicionadas e seus respectivos **Código**, **Nome**, **Tipo** e **Dono**.
Você pode inativar uma informação protegida adicional clicando no ícone de lixeira correspondente.

8. Clique em **Salvar**.

## Criar outras autorizações para a mesma aplicação

As próximas autorizações podem ser criadas seguindo os passos descritos na seção Criar a primeira autorização para uma aplicação deste tutorial ou seguindo os passos abaixo:

1. Na plataforma senhasegura, no canto superior esquerdo, clique no **Grid Menu**, identificado pelos nove quadrados, e selecione **A2A**.
2. No menu lateral, selecione **Autorizações por aplicação**.
3. Na lista, localize a aplicação para a qual você deseja criar uma nova autorização.
4. Na coluna **Ação**, clique em **Nova autorização**, identificado pelo sinal de adição.
5. Na janela **Autorização da aplicação**, siga as instruções descritas no passo 7 da seção [Criar a primeira autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application#criar-a-primeira-autorização-para-uma-aplicação) deste tutorial.
6. Clique em **Salvar**.

As autorizações criadas são exibidas em um relatório disponível na tela **Aplicações** e na tela **Autorizações por aplicação**. Para mais informações sobre como visualizar as autorizações, acesse [Como visualizar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-view-an-authorization-for-an-application).

## Próximos passos

[Como criar uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-application)

[Como visualizar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-view-an-authorization-for-an-application)

[Como autenticar uma aplicação](/v3-32/docs/pt/a2a-how-to-authenticate-an-application)


Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).








   











    
              