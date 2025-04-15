# Como publicar um certificado

Depois que um certificado é assinado, ele pode ser publicado no dispositivo desejado através do senhasegura, que verificará a autenticidade e integridade das informações e transações realizadas.
:::(Info) (Info)
Certificados só podem ser publicados em dispositivos cadastrados no senhasegura. 
:::

:::(Info) (Info)
A senhsagura suporta os seguintes plugins de publicação: Apache, Tomcat, Nginx, IIS, Kubernetes, Netscaler, IBM Websphere, F5 BigIP e Palo Alto. Mediante a customização/desenvolvimento, o produto também é compatível com JBOSS, Wildfly.
:::

## Requisitos

* Somente certificados prontos para uso. Habilite o campo de busca abaixo para filtrar certificados com esta especificação:
    *  **Status**: selecione **Válido**.
* Certificados importados manualmente devem incluir suas respectivas chaves. Somente os certificados com as chaves habilitam a opção de publicação.

## Publicar certificado
Para publicar um certificado, siga estes passos:

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelo ícone de nove quadrados e, em seguida, selecione **Certificate Manager**.
2. No menu lateral, selecione **Certificados** e, em seguida, **Certificados**.
3. Localize o certificado que deseja publicar.
4. Na coluna **Ação** correspondente, clique no ícone dos três pontos verticais.
5. Selecione **Publicar certificado**.

### Aba geral

1. Selecione o **Motivo** para publicar o certificado.
2. Selecione o **Perfil de publicação**. O perfil escolhido preencherá automaticamente diversos campos dessa tela, conforme a [**configuração do Perfil de publicação**](/v3-32/docs/pt/how-to-set-up-the-publishing-profiles). É possível alterar as informações. 
3. Se desejar, insira uma **Justificativa** para publicar o certificado.

:::(Info) (Info)
1. Caso queira utilizar outro perfil de publicação e plugin, marque a caixa de seleção **Criar um novo perfil de publicação** e informe o **Nome do perfil de publicação**.
2. Na sequência, escolha qual **Plugin de publicação** será utilizado. 
:::

#### Seção Credencial para execução

1. Defina qual credencial será utilizada para autenticar os dispositivos.
    1. Marque a caixa de seleção **Utilizar uma credencial cadastrada para acessar todos os dispositivos** para habilitar o menu suspenso de credenciais.
    2. Selecione a **Credencial de acesso cadastrada do sistema**.

:::(Warning) (Cuidado)
* Caso queira utilizar um username como credencial, preencha o campo **Username da credencial**. 
* Para realizar a autenticação, o sistema localizará esse username em todos os dispositivos cadastrados, portanto, o dispositivo precisa ter uma credencial com o mesmo username inserido nesse campo.
:::

#### Seção Configuração do plugin
Consulte o artigo [**Plugins de publicação**](/v3-32/docs/pt/publishing-plugins) caso queira mais informações de cadastro sobre o plugin escolhido.

### Aba Servidores
:::(Warning) (Cuidado)
Certifique-se de que a credencial selecionada na configuração anterior pode conectar-se aos dispositivos escolhidos.
:::

1. Acrescente os servidores onde o certificado deve ser publicado.
    1. Clique no ícone do sinal de soma, ao lado da palavra **Servidores**.
    2. Na janela **Servidores**, localize os dispositivos desejados. Utilize os campos de busca, ou a barra de rolagem.
    3. Marque a caixa de seleção à esquerda, ao lado do número do código do servidor.
    4. Clique em **Adicionar**.
2. Clique em **Publicar**.

### Aba Agendamento (opcional)
É possível agendar o momento da publicação.

1. Em **Ativo**, selecione a opção **Sim**.
2. Nos campos **Data e hora da publicação**, defina o dia e horário para concluir o agendamento.

:::(Info) (Info)
Para visualizar os certificados publicados, consulte o item **Certificate Manager > Publicações**.
:::
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).


