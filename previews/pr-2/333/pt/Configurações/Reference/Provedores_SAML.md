# Provedores SAML

Este documento apresenta uma visão geral da funcionalidade de provedores SAML.

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**
2. No menu lateral, selecione **Autenticação > SAML > Provedores**.

## Barra superior

| Item                          | Descrição                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------------ |
| **Mostrar os filtros**  | Representado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela.          |
| **Atualizar**           | Representado pelo ícone da seta no sentido anti-horário. Atualiza a página.                   |
| **Exibir ações**      | Representado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Novo provider**       | Abre a janela **Registro de provedor** SAML.                                                    |
| **Imprimir relatório** | Representado pelo ícone de impressora. Abre uma nova página para impressão do relatório.     |
| **Exportar CSV**        | Representado pelo ícone de folha de papel, baixa o relatório.                                  |
| **Agendar relatório**  | Representado pelo ícone do relógio. Abre a janela para efetuar o agendamento do relatório.    |

## Campos de busca

| Item                                        | Descrição                                                                                                                          |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Código**                           | Código do provedor SAML no senhasegura.                                                                                             |
| **Tipo**                              | Menu suspenso para selecionar o tipo de provedor SAML.<br />As opções são *Azure*, *KeyCloak*, *Okta* e *SAML provider*. |
| **ID da entidade**                    | `ClientId` ou `EntityId` da aplicação SAML.                                                                                    |
| **URL de metadados do provider SAML** | URL responsável pelos metadados do provedor.                                                                                        |
| **Ativo**                             | Menu suspenso para selecionar o status do provedor SAML. As opções são **Sim** ou **Não**.                            |
| **Ambiente**                          | Menu suspenso para selecionar o ambiente do provedor SAML. As opções são *Domum Remote Access* ou *Local*.                   |

## Campos do relatório

Os resultados da listagem são mostrados conforme abaixo:

* **Código**.
* **Tipo**.
* **ID da entidade.**
* **URL de metadados do provider SAML.**
* **Ativo**.
* **Ambiente**.
* Na coluna **Ação** você tem duas opções:
  * **Atualizar provider**: representado pelo ícone do lápis e papel, abre a janela **Registro de provedor SAML**.
  * **Excluir provider**: representado pelo ícone de lixeira, exclui o provedor SAML.

## Janela Registro de provedor SAML

Ao clicar em **Exibir ações > Novo provider** a janela de registro pro novo provedor SAML será aberta. Nela você terá os seguintes campos:

### Aba Informações principais

| Item                                                           | Descrição                                                                                                                                 |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tipo**                                                 | Menu suspenso para registro do tipo de provedor SAML.                                                                                       |
| **Ativo**                                                | Radio buttonpara seleção do status do provedor SAML que será aberto. Por padrão vem marcado como **Sim**.                        |
| **Ambiente**                                             | Radio buttonpara seleção do ambiente do qual o provedor SAML fará parte.<br />Pode ser **Local** ou **Domum Remote Access**. |
| **ID da entidade**                                       | Campo para registro do `ClientID` ou `EntityID`.                                                                                        |
| **URL de metadados do provider SAML**                    | Campo para registro dos metadados da aplicação/realm.                                                                                     |
| **Domínio ou IP público para URL de redirecionamento** | Campo para registro do domínio ou IP público do senhasegura.                                                                              |
| **URL de redirecionamento (Redirect URL)**               | URL de redirecionamento                                                                                                                     |
| **Comentário**                                          | Campo para registro de comentários pertinentes ao provider SAML.                                                                           |
| **SSO URL de login (Sign-in URL)**                       | URL do `HTTP-Redirect Bind` para login.                                                                                                   |
| **SSO URL de logout (Sign-out URL)**                     | URL do `HTTP-Redirect Bind` para logout.                                                                                                  |
| **Tipo de Redirect Binding**                             | Menu suspenso para escolha do tipo de **Redirect Binding** para o provedor SAML.                                                       |

### Aba SAML de segurança

Contém apenas o campo **Certificado (formato PEM)** onde você deverá colar o seu certificado.

Atente-se apenas que todas as configurações apresentadas na aba SAML de segurança devem ser rigorosamente iguais às configuradas no **Provedor de Identidade (IDP)** para assegurar o funcionamento adequado do SAML. Divergências resultarão em falhas de autenticação.