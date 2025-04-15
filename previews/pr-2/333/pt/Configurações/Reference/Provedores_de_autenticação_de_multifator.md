# Provedores de autenticação de multifator

Neste documento, você vai encontrar todas as informações sobre a seção de **Provedores de autenticação de multifator** das configurações do senhasegura.

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Autenticação de multifator \> Provedores.**

## Barra superior

| Item | Descrição |
| :---- | :---- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Novo** | Representado pelo ícone de soma, abre a janela **Selecione o provedor** para seleção  do provedor de autenticação que será cadastrado. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio, abre o formulário **Agendar relatório.** |

## Campos de busca

| Item | Descrição |
| :---- | :---- |
| **Código** | Código do provedor no senhasegura. |
| **Nome** | Nome do provedor no senhasegura. |
| **Plugin** | Menu suspenso que indica o provedor. As opções disponíveis são *RSA Authenticator, Duo Security, Radius ou AuthID* |
| **Ativo** | Menu suspenso que indica se o provedor está ativo ou não. Pode ser **Sim** ou **Não**. |

## Campos do relatório

* **Código.**  
* **Nome.**  
* **Plugin.**  
* **Ativo.**  
* **Data de criação:** informa a data de criação (cadastro) do provedor. É apresentada no formado `DD/MM/AAAA e HH:MM`  
* **Ação:** nesta coluna, você tem a opção:  
  *  **Alterar**: representada pelo ícone de lápis e papel, abre a tela **Registro Provider**, em modo de edição, em que é possível alterar os dados do provedor.

## Janela Selecione o provedor

Ao clicar em **Novo** no menu **Exibir ações**, você tem essas opções:

* **RSA  Authenticator.**  
* **Duo Security.**  
* **Radius.**  
* **AuthID.**

Cada opção leva à janela de cadastro do provedor indicado. Os provedores **RSA Authenticator e Duo Security** têm os mesmos campos de cadastro.

## Janela Registro Provider

Ao clicar em uma das duas opções (*RSA Authenticator ou Duo Security*), você é direcionado para essas opções:

| Item | Descrição |
| :---- | :---- |
| **Nome** | Nome identificador do provedor. |
| **Ativo** | Define se o provedor está ativo ou não. |
| **Endpoint** | URL do endpoint do provedor. |
| **Client ID** | Identificador do cliente fornecido pelo provedor. |
| **Chave** | Chave de autenticação para o provedor. |

## Janela Registro Provider para Radius

Para o provedor Radius, você terá as opções:

| Item | Descrição |
| :---- | :---- |
| **Nome** | Nome identificador do provedor. |
| **Ativo** | Define se o provedor está ativo ou não. |
| **Hostname** | Hostname ou IP do provedor Radius |
| **Porta** | Porta para o provedor Radius |
| **Chave** | Chave para autenticação |
| **Timeout (s)** | Seletor que indica o tempo de *timeout* do provedor. |

## Janela Registro Provider para AuthID

Para o provedor AuthID, você terá as opções:

| Item | Descrição |
| :---- | :---- |
| **Nome** | Nome identificador do provedor. |
| **Ativo** | Define se o provedor está ativo ou não. |
| **External ID** | Identificador externo fornecido pelo AuthID. |
| **API Key Value** | Chave de API para autenticação com o AuthID. |