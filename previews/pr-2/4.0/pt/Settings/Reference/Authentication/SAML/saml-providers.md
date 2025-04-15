# Provedores SAML

Este documento fornece informações sobre a tela do relatório **Tipos de provedores de OpenID.**

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> SAML \> Provedores.**

## Menu de ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Novo provider** | Botão | Direciona para a tela **Registro de provedor SAML**. |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código de identificação do provedor SAML no Segura. |
| **Tipo** | Menu suspenso | Filtra pelo tipo de provedor SAML. As opções são *Azure, KeyCloak, Okta e SAML provider*. |
| **ID da entidade** | Campo de texto | Filtra pelo ClientID ou EntityID da aplicação SAML. |
| **Ativo** | Menu suspenso | Filtra pelo estado de ativação do provedor no Segura.. |
| **URL de metadados do provider SAML** | Campo de texto | Filtra pela URL de metadados do servidor. |
| **Ambiente** | Menu suspenso | Filtra pelo ambiente do provedor SAML. As opções são **Local** ou **Domum remote access***.* |

## Campos do relatório
* Código.  
* Tipo.  
* ID da entidade.  
* URL de metadados do provider SAML.  
* Ativo.  
* Ambiente.  
* **Ações:**  
  * **Atualizar provider:**abre a janela **Registro de provedor SAML.**  
  * **Excluir provider:** desativa o provedor SAML.
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Registro de provedor SAML
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Tipo** | Menu suspenso | Sim | Seleciona o tipo de provedor SAML. |
| **Ativo** | Botão de opção  | Sim | Define o estado de ativação do provedor. |
| **Ambiente** | Botão de opção | Sim | Ambiente ao qual o provedor SAML estará vinculado. As opções são **Local** ou **Domum Remote Access**. |
| **ID da entidade** | Campo de texto | Sim | Define o ClientID ou EntityID. |
| **URL de metadados do provider SAML** | Campo de texto | Sim | Define a URL de metadados da aplicação/realm. |
| **Domínio ou IP público para URL de redirecionamento** | Campo de texto | Sim | Define o domínio ou IP público do Segura. |
| **URL de redirecionamento (Redirect URL)** | Campo de texto | Sim | Define a URL de redirecionamento |
| **Comentários** | Campo de texto | Não | Insere comentários pertinentes ao provedor SAML. |
| **SSO URL de login (Sign-in URL)** | Campo de texto | Sim | Define a URL do HTTP-Redirect Bind para login. |
| **SSO URL de logout (Sign-out URL)** | Campo de texto | Não | Define a URL do HTTP-Redirect Bind para logout. |
| **Tipo de Redirect Binding** | Menu suspenso | Não | Escolhe otipo de **Redirect Binding** para o provedor SAML. |
| **Certificado (formato PEM)** | Campo de texto | Sim | Insere o conteúdo do certificado SAML. |
:::(error) (Atenção)  
Todas as configurações apresentadas do provedor SAML devem ser rigorosamente iguais às configuradas no **Provedor de Identidade (IDP)** para assegurar o funcionamento adequado do SAML. Divergências resultarão em falhas de autenticação.  
:::