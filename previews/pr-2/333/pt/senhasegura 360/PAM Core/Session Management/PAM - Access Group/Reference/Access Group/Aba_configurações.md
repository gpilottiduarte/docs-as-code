# Aba configurações

Neste documento você encontrará todas as informações sobre a aba de **Configurações**, da tela de cadastro de um novo grupo de acesso. Nesta seção será decidida qual será a regra para visualização de senha, configuração de sessão remota e das solicitações de acesso.

:::(info) (**Info**)
Para saber como fazer o cadastro de um grupo de acesso, acesse o documento [Como cadastrar um grupo de acesso](/v3-33/docs/pt/pam-session-how-to-add-an-access-group).
:::

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Configurações** > **Acesso** > **Grupos de acesso** > **+ Novo**.

---
## Cadastro de grupo de acesso - Configurações
Nas seções **Configurações de visualização de senha** e **Configurações de sessão remota**, você pode selecionar os dias e a faixa de horário, que será exigido um workflow de aprovação.
Essas funcionalidades são independentes entre si, pode estar ativa em **Configurações de visualização de senha**, mas desativada em **Configurações de sessão remota**, ou vice-versa.
Portanto, para habilitar o workflow de aprovação em determinados dias e horários da semana em **Configurações de visualização de senha**, é necessário que a opção **Exigir aprovação para visualizar uma senha** esteja habilitada.
Para habilitar o workflow de aprovação em determinados dias e horários da semana em **Configurações de sessão remota**, é necessário que a opção **Exigir aprovação para iniciar a sessão** esteja habilitada.

#### Seção: Configurações da visualização da senha

* **Usuários podem visualizar uma senha**: determina se a senha da credencial pode ser vista pelo usuário.
* **Requer justificativa para visualizar uma senha**: marque caso seja necessário registrar uma justificativa para ver a senha.
* **Requer aprovação para visualizar uma senha**: marque caso outro usuário precise agir como aprovador para poder conferir a senha. Uma vez ativa, você também precisa definir por quanto tempo esta aprovação será válida.
* **Aprovações necessárias para visualizar**: número de aprovações necessárias para aprovar a operação para cada nível (não contabiliza o número total de aprovações).
* **Reprovações necessárias para cancelar**:  número de reprovações necessárias para reprovar a operação para cada nível (não contabiliza o número total de reprovações).
* **Aprovação em níveis**: marque se os aprovadores serão acionados em níveis. Assim, você pode definir uma hierarquia de aprovadores.
* **Permitir acesso emergencial sem aprovação**: indique se o usuário poderá realizar um acesso emergencial sem a necessidade de uma aprovação.
* **Usuários podem alterar a data de expiração em até**: indique se o próprio usuário pode alterar a data de expiração do grupo.
    :::(info) (**Info**)
    Na janela de exibição de credenciais, aparecerá um botão para o usuário aumentar seu período de acesso até o tempo indicado neste campo. 
    :::
* **Parte da senha que será visualizada**: Permite que a senha solicitada seja exibida em partes. Os membros deste grupo terão acesso apenas à fração definida neste campo. Isto não impede que a senha seja utilizada pela funcionalidade de proxy, uma vez que o usuário não tem acesso à senha em texto plano ao utilizar qualquer uma de nossas soluções de proxy.
* **Dias que exigem aprovação**: Sinalize os dias e horários que será exigida aprovação

#### Seção: Configurações da sessão remota

* **Usuários podem iniciar sessão**: marque se os usuários membros tiverem permissão para iniciar uma sessão de proxy usando as credenciais permitidas pelo grupo.
* **Requer justificativa para iniciar sessão**: marque se é necessário registrar uma justificativa para iniciar a sessão proxy.
* **Requer aprovação para iniciar sessão**: marque se outro usuário precisará agir como aprovador a fim de iniciar a sessão proxy. Uma vez ativa, você também precisará definir por quanto tempo esta aprovação será válida.
* **Aprovações necessárias**: número de aprovações necessárias para aprovar a operação conforme o nível de aprovação (não contabiliza o número total de aprovações).
* **Reprovações necessárias para cancelar**: número de reprovações necessárias para aprovar a operação conforme o nível de aprovação (não contabiliza o número total de aprovações). 
* **Aprovação em níveis**: marque se os aprovadores serão acionados em níveis. Assim, você pode definir uma hierarquia de aprovadores.
* **Permitir acesso emergencial**: sinalize se o requerente pode interromper o fluxo de trabalho de aprovação, aprovando a operação por si só.
* **[Change Audit] Exigir Mudança ID para iniciar sessão**: marque se o solicitante deve registrar um código ITMS no momento da justificativa.
* **Dias que exigem aprovação**: indique os dias e horários que será exigida aprovação

###  Importante - Regra da aprovação e reprovação
As regras explicadas aqui se enquadram para os campos das seções **Configurações da visualização da senha** e **Configurações da sessão remota**.

Quando o campo **Aprovação em níveis** estiver ativado, o número especificado nos campos **Aprovações necessárias** e em **Reprovações necessárias** indicará a quantidade exigida em cada nível de aprovação e reprovação. Ou seja, se o número de aprovações for definido como 2, será necessário que cada nível tenha duas aprovações. Se em algum nível houver apenas 1 aprovação, o requisito não será cumprido e a senha não poderá ser visualizada e sessão não poderá ser iniciada.

Por outro lado, se o campo **Aprovação em Níveis** não estiver ativado, o número de aprovações ou reprovações necessárias será o valor geral escolhido nos campos correspondentes.

Adicionalmente, ao utilizar a **Aprovação em níveis**, os aprovadores de nível inferior serão inicialmente notificados. Somente após as aprovações terem sido feitas por eles, os aprovadores de nível superior serão notificados para tomar suas ações de aprovação.

#### Seção: Configurações da solicitação de acesso
:::(info) (**Info**)
Os campos desta seção vêm com um valor padrão preenchido, que pode ser alterado conforme sua necessidade.
:::

* **Obrigatório especificar código de governança ao justificar?***: marque se o requerente deve digitar um código ITMS no momento da justificativa.
* **Sempre adicionar o gestor do usuário aos aprovadores?***: marque se o usuário responsável pelo departamento do usuário deve ser consultado automaticamente como um aprovador adicional a este grupo. Dessa forma, este usuário será alertado com os outros aprovadores da aba Aprovadores.
* **Bloquear durante congelamentos?***: marque para que os usuários desse grupo possam ter a sessão bloqueada durante o período de congelamento da mesma.

Estes campos, determinam as regras que devem ser obedecidas por todos os membros do grupo se eles quiserem ter acesso às informações privilegiadas acessíveis para este grupo.
