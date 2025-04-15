# Relatório de Identidades

Este documento fornece informações sobre a tela do relatório **Identidades**. Esse relatório exibe informações sobre permissões de acesso, acesso não autorizado de identidade, recomendações e entidades.

## Caminho para acesso

1. Acesse **Cloud Security**.  
2. Acesse o produto **Cloud Entitlements**.  
3. No menu **Cloud Entitlements**, clique em **Identidades**.

O relatório exibe as seguintes informações para cada entidade:

| Item | Descrição |
| ----- | ----- |
| Cloud Service Provider (CSP) | Exibe um ícone que representa o CSP associado à identidade. Essa coluna é exibida por padrão. |
| Cloud ID | Exibe o *Cloud ID* de acordo com o provedor. Essa coluna deve ser habilitada manualmente. |
| Ambiente | Exibe o nome do ambiente dentro do **Cloud Entitlements** associado à identidade. Essa coluna é exibida por padrão. |
| Tipo | Exibe o tipo de identidade. Essa coluna é exibida por padrão. |
| Principal | Exibe o nome da identidade dentro do CSP. Essa coluna é exibida por padrão. |
| Score | Exibe o valor para calcular o campo **Impacto**. Essa coluna deve ser habilitada manualmente. |
| Impacto | Exibe o nível de risco associado ao impacto da identidade em seu ambiente. O nível de impacto é categorizado de A a E, onde A representa o impacto mais baixo e E representa o mais alto. Essa coluna é exibida por padrão. |
| Total recomendações | Exibe o total de recomendações atreladas a essa identidade. Essa coluna deve ser habilitada manualmente. |
| Recomendações | Exibe o número de recomendações vinculadas à identidade. Os níveis de criticidade das recomendações são indicados por cores: **Vermelho** indica alto, **Laranja** indica médio, e **Amarelo** indica baixo. Essa coluna é exibida por padrão. |
| Última atualização do scan | Exibe a data e hora exatas em que a sincronização com a identidade ocorreu. Essa coluna deve ser habilitada manualmente. |
| Data de Criação | Exibe a data de criação dessa identidade. Essa coluna deve ser habilitada manualmente. |
| Subtipo | Exibe se o usuário é um membro ou um convidado. Essa coluna deve ser habilitada manualmente. **Nota:** Essa coluna está disponível apenas para entidades AWS. |

:::(Error) (Alerta)
Se uma chave de acesso da conta AWS não for mais válida, um alerta vermelho será exibido ao lado do ícone da conta e, como resultado, a data e hora da última sincronização de varredura não serão mais atualizadas.
:::

:::(Info) (Info)
O Cloud Entitlements escaneia os ambientes a cada 4 a 10 minutos.
:::

Utilize a barra de pesquisa na parte superior do relatório para buscar uma identidade específica. No canto superior direito, você também pode exportar o relatório no formato .csv, e exibir ou ocultar colunas.

Ao lado da barra de pesquisa, você encontrará filtros para filtrar o relatório com base na tabela a seguir:

| Filtro | Descrição |
| ----- | ----- |
| Provedor | Filtra as identidades pelo provedor. As opções são: *AWS*, *GCP*, *Azure*, e *Oracle*. Esse filtro é exibido por padrão. |
| Ambiente | Filtra as identidades pelo ambiente. Esse filtro é exibido por padrão. |
| Tipo | Filtra as identidades pelo tipo da identidade. As opções são: *Usuário*, *Grupo*, *Funções*, e *Aplicações*. Esse filtro é exibido por padrão. |
| Recomendações | Filtra as identidades pelo nível de criticidade. Você pode selecionar múltiplos níveis de criticidade ao mesmo tempo. As opções são: *Alto*, *Médio*, *Baixo*, e *Info*. Esse filtro é exibido por padrão. |
| Subtipo | Filtra as identidades pelo seu subtipo. As opções são: **Membro** e **Convidado**. Esse filtro é exibido somente se a coluna **Subtipo** for habilitada. |
| Identidades em um grupo | Filtra as identidades se o principal fizer parte de um grupo ou não. Esse filtro é exibido por padrão. |
| Administrador | Filtra as identidades se o principal for um administrador ou não. Esse filtro é exibido por padrão. |
| JIT Ativo | Filtra as identidades que tenham um acesso JIT ativo. |

Ao clicar em uma identidade específica, é aberto um novo painel com informações mais detalhadas sobre a identidade:

## Seção Identidades

| Item | Descrição |
| ----- | ----- |
| Tipo de Entidade | Tipo de entidade. As opções são: *Usuário*, *Grupo*, *Funções*, *Aplicações*, e *Contas de serviço*. |
| Grupo | Grupo a que o usuário pertence. |
| ARN | Identificador único para a entidade AWS. |
| Tem acesso administrativo | Exibe se a entidade possui acesso administrativo. As opções são: **Sim** ou **Não**. |
| Método de autenticação | Exibe todos os métodos de autenticação associados à identidade. Este campo só é visível se a identidade for do tipo **Usuário**. |
| \+ Responsável | Botão que exibe e atribui um responsável à uma identidade. |

### Aba Recomendações

| Item | Descrição |
| ----- | ----- |
| Recomendações | Exibe todas as recomendações que precisam ser alteradas. |
| Conformidades | Exibe todas as recomendações que estão em conformidade com o provedor. |

### Aba Informações gerais

Esta aba varia de acordo com o provedor de identidade selecionado, veja as tabelas a seguir para cada provedor:

### Aba informações gerais para a Amazon Web Services

#### Políticas

| Item | Descrição |
| ----- | ----- |
| \+ Adicionar | Botão para adicionar uma política temporária. Este botão só estará disponível se o modo de integração da sua conta for **Leitura e Escrita**. Saiba mais em [Como definir políticas temporárias para identidades AWS](/v3-33/docs/pt/how-to-set-temporary-policies). |
| Política | Política anexada à identidade. |
| Tipo | Tipo de política. Os tipos são: *Política de grupo* e *Política anexada*. |
| Data de expiração | Data de expiração da política temporária. |
| Remover | Remove a política selecionada. |

Essa seção tem um botão de busca para ajudar os usuário a encontrar as políticas.

#### Uso de serviço

| Item | Descrição |
| ----- | ----- |
| Serviço | Nome do serviço. |
| Política | Política anexada à identidade e ao serviço. |
| Data | Data da última utilização do serviço. |

Essa seção tem um botão de busca, e um filtro de data para ajudar os usuário a encontrar os serviços.

### Aba informações gerais para o Azure

#### Funções

| Item | Descrição |
| ----- | ----- |
| \+ Adicionar | Botão para adicionar uma política temporária. Este botão só estará disponível se o modo de integração da sua conta for **Leitura e Escrita**. Saiba mais em [Como definir políticas temporárias para identidades do Azure](/v4/docs/pt/how-to-set-temporary-policies-for-azure-identities). |
| Nome | Nome da função atribuída ao usuário. |
| Atribuição direta | Exibe se a função foi atribuída diretamente ao usuário. |
| Tipo | Tipo da função atribuída ao usuário. |
| Remover | Botão para remover uma função temporária. Saiba mais em [Como remover funções do Azure](/v3-33/docs/pt/como-remover-funções-do-azure). |

Essa seção tem um botão de busca para ajudar os usuário a encontrar as funções.

#### Recursos da subscrição

| Item | Descrição |
| ----- | ----- |
| Subscrição | Identificador de recurso de assinatura. |
| Recurso | Nome do recurso. |
| Tipo | Tipo do recurso. |
| Funções | Função atribuída ao usuário que permite acesso ao recurso de assinatura. |
| Ações | Ações a serem executadas no recurso. |

Essa seção tem um botão de busca para ajudar os usuário a encontrar as subscrições.

#### Membros

Esta seção é visível apenas se a identidade for do tipo **Grupo**.

| Item | Descrição |
| ----- | ----- |
| Membros | Membros do grupo. |
| Tipo | Tipo dos membros. |

Essa seção tem um botão de busca para ajudar os usuário a encontrar os membros do grupo.

### Aba informações gerais para o Google Cloud Provider

#### Funções

| Item | Descrição |
| ----- | ----- |
| Funções | Função atribuída a identidade. |
| Tipo | Tipo de função atribuída a identidade. As opções são: *Basic role*, *Predefined role* e *Custom role*. |

Essa seção tem um botão de busca para ajudar os usuário a encontrar as funções.

#### Serviços

| Item | Descrição |
| ----- | ----- |
| Serviço | Serviço atribuído a identidade. |
| Data | Data de quando o serviço foi utilizado. |

Essa seção tem um botão de busca, e um filtro de data para ajudar os usuário a encontrar os serviços.

#### Chave de acesso

Essa seção é visível somente se a identidade for do tipo **Conta de Serviço**.

| Item | Descrição |
| ----- | ----- |
| ID da chave | ID da chave. |
| Data de criação da chave | Data de criação da chave. |
| Data de expiração da chave | Data de expiração da chave. |

Essa seção tem um botão de busca para ajudar os usuário a encontrar as chaves de acesso.

### Aba informações gerais para o Oracle Cloud

#### Declaração

| Item | Descrição |
| ----- | ----- |
| Efeito | Define se a política permite ou nega o acesso. |
| Assunto | Assunto da política que especifica grupos ou entidades aos quais a política concede permissão. |
| Ação | Tipo de acesso. As opções são: *inspecionar*, *ler*, *usar* e *gerenciar*. |
| Tipo de recurso | Tipo de recurso ao qual a política se aplica. |
| Localização | O escopo de acesso das políticas a um compartimento ou *tenancy*. |
| Condição | Condições que retornam recursos com base em parâmetros especificados. |

Essa seção tem um botão de busca para ajudar os usuários a encontrar as declarações.

#### Chaves de API

Esta seção é visível somente se a identidade for do tipo **Usuário**.

| Item | Descrição |
| ----- | ----- |
| Impressão digital | Impressão digital da chave. |
| Data de criação | Data de criação da chave de API. |

Essa seção tem um botão de busca para ajudar os usuários a encontrar as chaves de API.

#### Grupos

| Item | Descrição |
| ----- | ----- |
| OICD | *OpenID Connect* do grupo. |
| Membro | Membros do grupo |

Essa seção tem um botão de busca para ajudar os usuários a encontrar os grupos.

### Aba Caminho de acesso

O **Caminho de acesso** fornece aos usuários uma visão abrangente das relações entre identidades e os serviços com os quais interagem. Essa funcionalidade fornece uma representação visual de como uma identidade está conectada a serviços e permissões específicos, facilitando a  identificação de potenciais vulnerabilidades ou acessos não autorizados.

| Item | Descrição |
| :---- | :---- |
| **Filtro** | Campo para filtrar os elementos do mapa. Quando um termo se encaixa no padrão inserido, os elementos são destacados visualmente. |
| **Configurações** | Botão para expandir as opções de configuração do mapa. |
| **Modelos** | Campo para selecionar o modelo do mapa. As opções são: *Radial out 2D*, *Force directed 2D*, e *Force directed 3D*. |
| **Zoom in** | Botão para aumentar o zoom no mapa. |
| **Zoom out** | Botão para diminuir o zoom no mapa. |
| **Resetar visualização** | Botão para resetar o zoom no estado inicial. Não afeta o modelo de exibição escolhido. |
| **Expandir** | Ícone de expansão para aumentar a aba |
| **Legenda** | Campo que indica as legendas para os ícones. |
| **Data** | Campo que indica quais serviços foram acessados dentro de um período de tempo através de flechas com cores.  |

