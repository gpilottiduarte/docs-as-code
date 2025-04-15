# Usuários sincronizados para IGA

Este documento apresenta uma visão geral da funcionalidade de **Usuários sincronizados (IGA)**, no senhasegura

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Autenticação > Gerenciamento de identidade (IGA) > Usuários sincronizados.**

## Barra superior

| Item                     | Descrição                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| **Mostrar os filtros**  | Representado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela.          |
| **Atualizar**           | Representado pelo ícone da seta no sentido anti-horário. Atualiza a página.                   |
| **Exibir ações**      | Representado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Imprimir relatório** | Representado pelo ícone de impressora. Abre uma nova página para impressão do relatório.     |
| **Exportar CSV**        | Representado pelo ícone de folha de papel, baixa o relatório.                                  |
| **Agendar relatório**  | Representado pelo ícone do relógio. Abre a janela para efetuar o agendamento do relatório.    |

## Campos da busca

| Item                               | Descrição                                                                                                                                                                                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Código**                       | Código de registro do usuário no senhasegura.                                                                                                                                                                                                               |
| **Nome de usuário**              | Nome do usuário.                                                                                                                                                                                                                                             |
| **UUID**                          | UUID (*Universally Unique Identifier*) do usuário.                                                                                                                                                                                                         |
| **ID de usuário do senhasegura** | Identificação do usuário no senhasegura.                                                                                                                                                                                                                   |
| **Está sincronizado**            | Menu suspenso com as opções **Todos**, que exibe todos os registros de usuários; **Sim**, que exibe apenas os registros de usuários sincronizados e **Não**, que exibe os registros de usuários que não estão sincronizados. |
| **Última sincronização**       | Calendário para exibir a data da última sincronização. Este campo serve como data inicial para o filtro de sincronizações de usuários.                                                                                                                 |
| **até**                          | Este campo serve como data final para o filtro de sincronizações de usuários.                                                                                                                                                                              |

## Campos do relatório

A listagem dos resultados do filtro será mostrada conforme abaixo:

* **Código**.
* **Nome de usuário.**
* **UUID**.
* **ID de usuário do senhasegura.**
* **Está sincronizado?.**
* **Última sincronização.**
* Na coluna **Ação** você tem a opção de visualizar os detalhes da sincronização. Para isso, clique em **Detalhes da Sincronização**, representado pelo ícone de lupa.

## Janela de Detalhes da sincronização SCIM

Ao clicar para visualizar os detalhes da sincronização, a janela **Detalhes da sincronização SCIM** será aberta. Esta janela contém os seguintes campos:

| Item                   | Descrição                               |
| ---------------------- | ----------------------------------------- |
| **Requisição SCIM** | Informa os detalhes da requisição SCIM. |

Os detalhes da sincronização serão mostrados em texto plano logo abaixo do label **Requisição SCIM**. Eles serão mostrados de forma análoga ao exemplo abaixo.

### Exemplo de Requisição SCIM

```yaml
{
"schemas":
	[ 
"urn: ietf: params: schemas: core: 2.0: User" 
],
"userName: "romi_w\u00e1",
"name": {
		"formatted": "Romi W\u00e1,
		"familyName": "W\e001~,
		"givenName": "Romi",
	} 
"emails": [
		{ 
			"value": "romi_w\u001e1@example.com",
			"type": "work",
			"primary": true
		}
	    ]
}
```