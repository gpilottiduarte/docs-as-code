# Autorização da aplicação

Neste artigo, você vai encontrar todas as informações sobre a tela **Autorização da aplicação** do componente **MySafe**.

:::(Info) (Info)
Este artigo refere-se especificamente à tela onde você pode acessar informações sobre uma autorização de chave de acesso ativa ou revisar detalhes sobre uma autorização de chave de acesso atualizada.
:::

:::(Info) (Caminhos para acessar:)
**Grid Menu > MySafe > + Integrações > Chaves de acesso >** A autorização de chave de acesso que deseja visualizar **>** Coluna **Ação > Visualizar** (representado pelo ícone de chave) **>** Tela **Autorização da aplicação**

**Grid Menu > MySafe > + Integrações > Chaves de acesso >** A autorização de chave de acesso que deseja alterar **>** Coluna **Ação** **> Menu suspenso** (representado pelo ícone dos três pontos verticais) **> Alterar >** Tela **Atualizar chave de acesso > Salvar > Visualizar autorização da aplicação  >** Tela **Autorização da aplicação**

:::

## Campos obrigatórios


| Item | Descrição |
| --- | --- |
| **Método de autenticação** | O método de autenticação usado. |
| **Aplicação** | Nome da aplicação cliente que está usando a chave de acesso. |


| Item | Descrição |
| --- | --- |
| **Client ID** | Clique no ícone de olho para visualizar o identificador único para a aplicação cliente. |
| **Client Secret** | Clique no ícone de olho para visualizar uma chave confidencial usada para autenticar uma aplicação cliente ao interagir com um servidor de autorização. |

## Campos da seção Detalhes


| Item | Descrição |
| --- | --- |
| **Descrição** | Descrição da autorização da chave de acesso.  |
| **Data de expiração** | Data de expiração para a autorização da chave de acesso. Se deixado em branco, a autorização da chave de acesso expira apenas se você sair da aplicação ou revogar a chave manualmente.
 |
| **Criptografar dados sensíveis?*** | Informa se as informações estão criptografadas. As opções são **Sim** e **Não**. |
| **Validação do certificado?** | Informa se uma impressão digital do certificado foi fornecida. As opções são **Sim** e **Não**. |
| **IPs
autorizados** | Os endereços IP permitidos a utilizar a autorização da chave de acesso. |
| **Referenciadores HTTP autorizados** | Os referenciadores HTTP permitidos a utilizar a autorização da chave de acesso. |
| **Tags** | Palavras-chave para ajudar a identificar a autorização da chave de acesso. |

## Dados

Esta seção exibe as informações acessíveis ao seu usuário que a aplicação poderá recuperar. Ao adicionar ou atualizar uma autorização da chave de acesso, ela pode exibir o **Acesso total** ou informações específicas selecionadas.