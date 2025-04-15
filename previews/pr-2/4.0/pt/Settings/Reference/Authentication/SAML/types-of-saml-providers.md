# Tipos de providers SAML

Este documento fornece informações sobre a tela do relatório **Tipos de providers SAML** que contém informações sobre os provedores SAML cadastrados no Segura.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> SAML \> Tipos de provedores.**

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código de identificação do provedor OpenID no Segura. |
| **Nome** | Campo de texto | Filtra pelo nome do provedor de OpenID no Segura. |
| **Ativo** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Ativo** e **Inativo**. Limpe o campo para habilitar a opção **Todos**.  |

## Campos do relatório

* **Código.**  
* **Nome.**  
* **Status.**

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Registro de provedor SAML

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Tipo** | Menu suspenso | Sim | Opções de tipo de provedor SAML. |
| **Ativado** | Radio button | Sim | Status do provedor. Pode ser Sim ou Não. |
| **Ambiente** | Radio button | Sim | Ambiente ao qual o provedor SAML será vinculado. Pode ser **Local** ou **Domum Remote Access**. |
| **Entity ID** | Campo de texto | Sim | Campo para registro do **ClientID** ou **EntityID**. |
| **URL de metadados do provedor SAML** | Campo de texto | Sim | URL de metadados da aplicação/reino. |
| **Domínio ou IP público para Redirecionamento de URL** | Campo de texto | Sim | Domínio ou IP público da Segura. |
| **URL de Redirecionamento** | Campo de texto | Sim | URL de redirecionamento. |
| **Comentários** | Campo de texto | Não | Registro de comentários pertinentes ao provedor SAML. |
| **URL de Login SSO** | Campo de texto | Sim | URL de Bind HTTP-Redirect para login. |
| **URL de Logout SSO** | Campo de texto | Não | URL de Bind HTTP-Redirect para logout. |
| **Tipo de Binding de Redirecionamento** | Menu suspenso | Não | Escolha o tipo de *Redirect Binding* para o provedor SAML. |
| **Certificado (formato PEM)** | Campo de texto | Sim | Campo para colar o conteúdo do certificado SAML. |

:::(error) (Atenção)  
Todas as configurações apresentadas do provedor SAML devem ser estritamente iguais às configuradas no Provedor de Identidade (IDP) para garantir o funcionamento adequado do SAML. Divergências resultarão em falhas de autenticação.  
:::