# SCIM

A API SCIM (*System for Cross-domain Identity Management*) do Segura permite o gerenciamento automatizado de identidades entre diferentes sistemas através de chamadas de API REST. Esta documentação detalha como utilizar os endpoints SCIM para compartilhar e sincronizar informações de identidade com a plataforma Segura.

## Pré-requisitos
É preciso obter os valores de `client_id` e `client_secret` para autenticação. Para obter estes valores você deverá fazer o seguinte:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.
2. No menu lateral, selecione **Provisionamento > Gerenciamento de identidade (IGA) > Provedores**.
3. No provedor da sua escolha, clique no botão **Ações** e selecione **Detalhes do provider**.
4. Na tela **Registrar provedor de Identity management** você poderá obter os valores indicados acima.

## Compatibilidade

A API é compatível com qualquer ferramenta que suporte o protocolo SCIM 2.0, permitindo fácil integração com diversos sistemas de gerenciamento de identidade.

Para mais detalhes sobre como configurar um provider IGA no Segura, acesse o artigo [Provedores de gerenciamento de identidade (IGA)](/v4/docs/pt/identity-management-providers-iga).

Esta documentação apresenta os endpoints disponíveis e exemplos de uso para implementação da API SCIM em seu ambiente.