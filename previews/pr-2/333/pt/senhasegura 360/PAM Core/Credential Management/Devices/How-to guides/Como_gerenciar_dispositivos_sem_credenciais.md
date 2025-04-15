# Como gerenciar dispositivos sem credenciais

Todos os Dispositivos passam por um fluxo de verificação. Nessa sessão, é possível verificar todos os dispositivos que estão sem credenciais atreladas. Este artigo ensina como gerenciar estes dispositivos.

## Como listar dispositivos sem credenciais

Para verificar os dispositivos sem credenciais, siga os passos abaixo:

1. No canto superior esquerdo, clique em **Grid Menu**, indicado pelos nove quadrados, e selecione **Dispositivos**.
2. No menu lateral, na seção dispositivos, selecione **Dispositivos sem credenciais**.
3. Uma tela com a listagem de todos os dispositivos sem credenciais atreladas será exibida.

:::(Info) (Info)
Por padrão, a listagem inicial mostrará todos os dispositivos sem credenciais que você tem cadastrados. Para filtrar os dispositivos você deve utilizar a barra de filtragem acima da listagem.
:::

Cada dispositivo será mostrado junto de uma série de informações organizadas em colunas, confirme tabela abaixo:

| **Coluna** | **Descrição** |
| --- | --- |
| **Código** | Código do dispositivo. |
| **Nome** | Nome preenchido pelo usuário. |
| **Tipo** | Tipo de dispositivo cadastrado. |
| **Gerenciamento** | IP, hostname ou URL responsável pelo gerenciamento do dispositivo. |
| **Fabricante** | Fabricante do dispositivo escolhido pelo usuário. |
| **Modelo** | Modelo escolhido pelo usuário. |
| **Site** | Localidade de acesso ao dispositivo. |
| **Conectividade** | Status do dispositivo para conexões. |
| **Domínios** | Domínios cadastrados pelo usuário. |
| **Tags** | Tags de identificação do dispositivo. |
| **Ativo** | Status do dispositivo. |

## Ações para dispositivos sem credenciais

Você pode realizar dois tipos de ações para os **Dispositivos sem credenciais**:

1. Na coluna **Ação** clique no ícone **Exibir Ações**, identificado pelo três pontos verticais, e selecione uma das duas ações possíveis:

### Clonar
Clona o dispositivo, copiando todas as configurações do dispositivo que está sendo clonado. Ao selecionar essa opção uma janela pop-up vai aparecer indicando que sua ação foi efetuada corretamente.

:::(info) (Info) 
O novo dispositivo também será do tipo sem credencial, desse modo ele será listado logo abaixo do dispositivo original com o sufixo (Copy XX), onde XX será um número.
:::

### Inativar
Inativará o dispositivo selecionado. Ao selecionar essa opção o dispositivo não será mais listado na página junto aos outros dispositivos sem credenciais. Para visualizar este dispositivo você deverá filtrar a visualização para mostrar os dispositivos que estão inativos.

:::(Info) (Info)
Você também pode editar os **Dispositivos sem credenciais**. Para isso clique no ícone **Alterar**, identificado pelo ícone do papel e lápis. Essa ação irá abrir a janela pop-up de **Cadastro de dispositivos**. Para saber como cadastrar ou modificar um dispositivo, acesse a documentação sobre [como configurar dispositivos](/v3-33/docs/pt/pam-devices-management).
:::

## Próximos passos

1. [Como configurar categorias de dispositivos](/v3-33/docs/pt/pam-how-to-configure-devices).
2. [Como gerenciar dispositivos](/v3-33/docs/pt/pam-how-to-edit-clone-disable-or-reactivate-a-device).
3. [Como verificar a conectividade dos dispositivos](/v3-33/docs/pt/pam-devices-connectivity-test).
4. [Referência para dispositivos](/v3-33/docs/pt/pam-reference-for-devices).
5. [Referências de filtragem de dispositivos](/v3-33/docs/pt/pam-reference-for-device-filters).
***

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io).