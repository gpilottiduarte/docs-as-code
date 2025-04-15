# Provedores OpenID

Neste documento você encontra informações sobre os provedores OpenID no senhasegura.

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique em Grid Menu, representado pelos nove quadrados, e selecione Configurações.  
2. No menu lateral, selecione **Autenticação > OpenID > Provedores**.

## Barra superior

| Item  | Descrição |
| :---- | :---- |
| **Mostrar os filtros** | Representado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário. Atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Novo provider** | Abre a janela **Cadastro de provider** para cadastro de um novo provedor OpenID. |
| **Imprimir relatório** | Representado pelo ícone de impressora. Abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone de folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio. Abre a janela para efetuar o agendamento do relatório. |

## Campos da busca

| Item | Descrição |
| :---- | :---- |
| **Código** | Código de registro do provedor OpenID no senhasegura. |
| **Tipo** | Menu suspenso para escolha do tipo de provedor OpenID. |
| **ID do Cliente** | Campo de texto para inserção do valor do client ID. |
| **URL de redirecionamento (Redirect URL)** | Campo de texto para inserção do valor da URL de redirecionamento do provedor OpenID. |
| **Ativo** | Menu suspenso para escolha do status do provedor. Pode ser **Sim** ou **Não**. |
| **Ambiente** | Menu suspenso para escolha do ambiente em que o provedor será utilizado. |

## Campos do relatório

* **Código.**  
* **Tipo.**  
* **ID do cliente.**  
* **URL de redirecionamento.**  
* **Status:**  
* **Ambiente.**  
* Na coluna **Ação**, você tem duas opções:  
  * **Atualizar provider**: representado pelo ícone do lápis e papel, abre a janela **Cadastro de provider** em modo de edição.  
  * **Três pontos verticais**: ao clicar no ícone dos três pontos verticais, você tem duas opções:  
    * **Detalhes do provider**: representado pelo ícone da lupa, abre a janela de detalhamento do provedor.  
    * **Excluir provider**: representado pelo ícone da lixeira, exclui o provider.

## Janela Cadastro de provider

Ao clicar em **Alterar**, na coluna **Ação** ou em **Exibir Ações \> Novo provider**, você terá acesso à janela de registro de novos *providers*. Ela contém os seguintes campos:

| Item | Descrição |
| :---- | :---- |
| **Tipo** | Tipo de provider OpenID. |
| **Ativo** | *Radio button* para seleção do estado do provider. Pode ser **Sim** ou **Não**. |
| **Ambiente** | *Radio button* para seleção do ambiente do provider. Pode ser **Local** ou **Domum Remote Access.** |
| **ID do cliente** | Client ID do cliente no provider OpenID. |
| **Client secret** | Secret da aplicação cliente no provider OpenID. |
| **Domínio ou IP para URL de redirecionamento** | Domínio ou endereço IP público do senhasegura. Utilizado pelo provedor OpenID para redirecionar o usuário de volta ao seu aplicativo após a autenticação. |
| **URL de redirecionamento** | Endpoint específico na aplicação cliente para o qual o provedor OpenID redirecionará o usuário após a autenticação. Este endpoint é responsável por receber o código de autorização ou o token de acesso. |
| **Comentários** | Campo de comentários, tais como notas, explicações e outros. |

### Seção Configurações dos endpoints

| Item | Descrição |
| :---- | :---- |
| **OpenID endpoint configuration** | Endpoint de configuração do OpenID. Caso seja escolhido o Google OpenID, o campo será preenchido automaticamente com as informações do Google. |

### Seção URL dos demais endpoints

| Item | Descrição |
| :---- | :---- |
| **Endpoint de autorização** | URL fornecida pelo provedor OpenID onde a aplicação envia a solicitação de autorização. |
| **Token endpoint** | URL fornecida pelo provedor OpenID onde a aplicação envia a solicitação para trocar o código de autorização por um token de acesso. |
| **Userinfo endpoint** | URL fornecida pelo provedor OpenID onde a aplicação pode solicitar informações do perfil do usuário autenticado usando o token de acesso. |

### Seção Configurações extras do provider

| Item | Descrição |
| :---- | :---- |
| **Endpoint JWK (obrigatório se não existir no endpoint OpenID)** | Endpoint onde a aplicação pode obter as chaves públicas do provedor de OpenID para validar a assinatura do token de acesso. É obrigatório se essas chaves não estiverem disponíveis no endpoint de configuração do OpenID. |
| **Issuers adicionais (separados por vírgula)** | Lista de emissores (*issuers*) adicionais que são aceitos pela aplicação. Útil quando a aplicação precisa suportar múltiplos provedores OpenID. Os emissores são separados por vírgula. |