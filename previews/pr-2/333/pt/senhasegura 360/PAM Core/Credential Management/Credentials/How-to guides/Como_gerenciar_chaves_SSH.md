# Como gerenciar chaves SSH

Neste documento, você aprenderá o que é necessário para verificar as chaves SSH cadastradas.

## Como acessar as chaves SSH

1. No canto superior esquerdo, clique no **Grid Menu**, indicado pela caixa de nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Chaves SSH > Chaves SSH**.

## Operações para as chaves SSH

Na coluna **Ação**, clique no ícone identificado pelos três pontos verticais e selecione a operação desejada:

1. **Iniciar uma sessão com a chave:** inicie uma sessão remota com a chave cadastrada.
2. **Visualizar chave:** acesse para visualizar, copiar ou realizar o download das chaves.
3. **Alterar**: edite as informações de configurações da chave SSH, conforme desejado.
4. **Detalhes**: acesse para visualizar, copiar ou realizar o download das chaves.
5. **Histórico de senhas da chave:** mostra um histórico das operações realizadas na chave SSH.
6. **Inativar chave:** inativa a chave SSH.

Ao clicar na opção **Detalhes**, uma janela pop-up abrirá com os seguintes detalhes da chave SHH, divididos em seções:

### Aba Detalhes

#### Geral

- **Nome de usuário**: nome do usuário dessa chave SSH.
- **Tipo**: tipo de chave SSH.
- **Expiração**: data de expiração da chave SSH.
- **Criada em**: data em que a chave SSH foi criada.
- **Alteração**: data de alteração da chave SSH; caso não tenha ocorrido alteração, esse campo estará em branco.
- **Consulta**: data da última consulta à chave SSH.

#### Dispositivo

- **Hostname:** hostname do dispositivo que a chave SSH se conecta.
- **IP de gerenciamento**: IP ou hostname que a chave gerencia.
- **Fabricante:** fabricante do dispositivo.
- **Tipo:** tipo de dispositivo.
- **Modelo**: modelo do dispositivo.
- **Conectividade:** protocolo de conexão da chave ao dispositivo.

#### Configuração de troca

- **Configuração:** informa se a chave tem ou não a troca automática habilitada.

#### Política

- **Nome**: nome da política utilizada.
- **Força da senha: pode ser de três valores: low, default ou high.**
- **Expiração decurso**: prazo de validade da chave.
- **Expiração de consulta**: quanto tempo a senha fica disponível para consulta antes de ser trocada automaticamente.
- **Visualização simultânea**: indica se a chave pode ser visualizada por mais de um usuário ao mesmo tempo.
- **Sessão simultânea: indica se a chave pode ser usada para acesso a mais de um dispositivo ao mesmo tempo.**

:::(Info) (Info)
Atente-se que a opção de visualizar uma senha estará disponível durante 30 segundos após clicar no botão **Visualizar chave.**
:::

### Aba overview

Na aba overview, é possível visualizar diversas informações sobre a chave SSH. Essas informações estão dividas em cards ao longo da interface.

- **Período de maior uso**: indica o período (tempo) de maior uso daquela chave.
- **Credencial pai**: mostra se essa chave SSH possui uma credencial pai. **Total de consultas**: total de vezes que a chave SSH em questão foi consultada.
- **Total de acessos**: total de acessos realizados com a chave SSH.
- **Duração da sessão (média)**: duração média das sessões utilizando essa chave SSH.
- **Equipamentos**: quantidade de equipamentos em que a chave SSH é utilizada.
- **Usuários por grupo de acesso**: indica um gráfico de pizza mostrando os grupos de acesso aos quais essa chave SSH está atrelada.
- **Usuários com acesso**: indica um gráfico de pizza mostrando quantos usuários tem acesso a essa chave SSH.
- **Eventos**: mostra uma linha do tempo indicando as ações realizadas na chave SSH consultada. A linha do tempo mostra detalhadamente a ação realizada, o dia e a hora em que a ação foi realizada e o usuário que realizou tal ação.
- **Últimos acessos**: indica quais foram os últimos acessos realizados pela chave SSH.
- **Usuário com a custódia**: indica qual usuário tem a custódia da chave SSH.
- **Equipamentos associados**: indica quais dispositivos estão associados a esta chave SSH.

### Barra superior

Utilize a barra superior da janela de Chave SSH para obter de maneira rápida algumas informações sobre a chave, assim como para ações rápidas.

A barra superior da janela contem as seguintes informações:

- **Nome do usuário**: nome do usuário que é dono da chave SSH.
- **Tipo**: tipo de usuário. Pode ser de três tipos: *Local User, Local Administrator ou Usuário de Domínio.*
- **Dispositivo**: indica o dispositivo que está associado à chave SSH.
- **Status**: indica o status da chave SSH. Pode ser **Ativo** ou **Inativo**.
- **Ações**: atalhos para as principais ações que podem ser realizadas com a chave SSH:
    - **Iniciar uma sessão com a chave**: representado pelo ícone da seta em direção à direita, permite iniciar uma sessão no dispositivo indicado.
    - **Visualizar:** representado pelo ícone de chave, permite visualizar as informações da chave. Perceba que visualizar uma chave lhe dará a custódia da mesma.
    - **Editar**: representado pelo ícone do lápis e papel, permite editar todas as configurações da chave SSH.
    - **Histórico de senhas da chave:** representado pelo ícone do relógio, permite visualizar o histórico da chave. Este histórico permite visualizar as execuções realizadas na chave, bem como quem a realizou e a data em que essa ação foi realizada.
    - **Inativar chave:** representado pelo ícone da lixeira, permite inativar a chave SSH.

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).