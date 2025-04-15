# Como gerenciar dispositivos

Nesse tutorial, você aprenderá como realizar o gerenciamento de dispositivos já criados na plataforma senhasegura, com foco nas opções de alterar, clonar,  inativar ou reativar um dispositivo.

## Alterar um dispositivo

1. No canto superior esquerdo do senhasegura, clique em **Grid Menu**, identificado pelos nove quadrados, e selecione **Dispositivos**.
2. No menu lateral, selecione **Dispositivos**.
3. Na listagem de dispositivos, escolha o dispositivo que você deseja modificar e clique na opção **Alterar**, na coluna **Ação**, representada pelo ícone de um lápis sobre um papel.
4. A janela pop-up de **Cadastro do dispositivo** abrirá.
5. Altere as opções desejadas. Para maiores informações sobre o cadastro de dispositivo, acesse a documentação sobre [Como configurar um dispositivo](/v3-33/docs/pt/pam-devices-management).
6. Clique em **Salvar**.

## Clonar um dispositivo

1. No canto superior esquerdo do senhasegura, clique em **Grid Menu**, identificado pelos nove quadrados, e selecione **Dispositivos**.
2. No menu lateral, selecione **Dispositivos**.
3. Na listagem de dispositivos, escolha o dispositivo que deseja clonar. E clique na opção **Clonar**, na coluna **Ação**, representada pelos três pontos verticais.
4. No modal, clique em **Sim** e espere pelo processo. Uma janela pop-up vai aparecer identificando que você clonou um dispositivo e a política de grupos de acesso será atualizada.

	
:::(Info) (Info)
O seu dispositivo clonado receberá o mesmo nome do dispositivo original adicionado do sufixo `Copy XX`, onde `XX` é um número.
:::

## Inativar um dispositivo

1. No canto superior esquerdo do senhasegura, clique em **Grid Menu**, identificado pelos nove quadrados, e selecione **Dispositivos**.
2. No menu lateral, selecione **Dispositivos**.
3. Na listagem de dispositivos, escolha o dispositivo que deseja clonar. Clique na opção **Inativar**, na coluna **Ação**, representada pelos três pontos verticais.
4. No modal, clique em **Sim** e espere pelo processo. Uma janela pop-up vai aparecer identificando que você inativou um dispositivo e a política de grupos de acesso será atualizada.

:::(Info) (Info)
As credenciais atreladas ao dispositivo inativados também serão inativadas.
:::

## Ativar um dispositivo previamente inativado

1. No canto superior esquerdo do senhasegura, clique em **Grid Menu**, identificado pelos nove quadrados, e selecione **Dispositivos**.
2. No menu lateral, selecione **Dispositivos**.
3. Na barra superior, filtre por dispositivos inativos selecionando **Não**, no menu suspenso **Ativo**. 

:::(Info) (Info)
Para saber mais sobre filtros para dispositivos, acesse a documentação de [Referência de filtragem de dispositivos](/v3-33/docs/pt/pam-reference-for-device-filters).
:::

4. Na listagem de dispositivos, escolha o dispositivo que deseja clonar. Clique na opção **Ativar**, na coluna **Ação**, representada pelos três pontos verticais.
5. Clique em **Sim** no modal de confirmação.

Uma mensagem de sucesso será exibida e o dispositivo será movido para a listagem de dispositivos ativos.

:::(Info) (Info)
Observe que na reativação do dispositivo, as credenciais anteriormente vinculadas a esse dispositivo não serão reativadas automaticamente. Para ativá-las, é necessário acessar o relatório de credenciais em **Grid Menu > Relatórios > Credenciais > Listagem geral**.
:::

## Outras ações disponíveis

Você pode executar várias ações na lista de dispositivos, como **Editar**, **Visualizar**, **Clonar** e **Desabilitar** um dispositivo e, além disso, **Adicionar uma credencial**.

Para acessar a lista de dispositivos, siga as etapas abaixo:

1. No canto superior esquerdo do senhasegura, clique no **Menu da grade**, representado pelo ícone de nove quadrados, e selecione **Dispositivos**.
2. No menu lateral, selecione **Devices**.
3. Identifique o dispositivo que deseja executar as ações na lista de dispositivos.

Na coluna **Actions**, você tem as seguintes opções:

1. **Editar**: representado pelo ícone do lápis e papel, abre uma janela pop-up com o formulário **Device**.
2. **View:** representado pelo ícone de chave, redireciona para a página de credenciais do dispositivo. Nessa página, você terá acesso a todas as credenciais associadas ao dispositivo selecionado.
3. A última opção é o menu suspenso representado pelos três pontos verticais. Ao clicar nesse ícone, você terá as seguintes opções:
    1. **Clone:** clona o dispositivo.
    2. **Disable:** desativa o dispositivo.
     1. **Adicionar uma credencial:** adiciona uma credencial ao dispositivo. Essa opção abrirá a janela pop-up com o formulário **Credential**.

***

## Próximos passos
1. [Como configurar categorias de dispositivos](/v3-33/docs/pt/pam-how-to-configure-devices).
2. [Como gerenciar dispositivos sem credenciais](/v3-33/docs/pt/pam-devices-without-credentials)
3. [Como verificar a conectividade dos dispositivos](/v3-33/docs/pt/pam-devices-connectivity-test).
4. [Referência para dispositivos](/v3-33/docs/pt/pam-reference-for-devices).
5. [Referências de filtragem de dispositivos](/v3-33/docs/pt/pam-reference-for-device-filters).

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io).