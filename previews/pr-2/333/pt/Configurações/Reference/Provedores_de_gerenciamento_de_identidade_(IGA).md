# Provedores de gerenciamento de identidade (IGA)

Este documenta apresenta uma visão geral sobre a funcionalidade de **Gerenciamento de provedores IGA** do senhasegura.

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Autenticação**.
2. No menu lateral, selecione **Gerenciamento de identidade (IGA) > Provedores**.

## Barra superior

| Item                          | Descrição                                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Mostrar os filtros**  | Representado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela.                           |
| **Atualizar**           | Representado pelo ícone da seta no sentido anti-horário. Atualiza a página.                                    |
| **Exibir ações**      | Representado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página.                  |
| **Novo provider**       | Abre a janela **Registrar provedor de Identity management** para cadastro de um novo provedor de identidade. |
| **Imprimir relatório** | Representado pelo ícone de impressora. Abre uma nova página para impressão do relatório.                      |
| **Exportar CSV**        | Representado pelo ícone de folha de papel, baixa o relatório.                                                   |
| **Agendar relatório**  | Representado pelo ícone do relógio. Abre a janela para efetuar o agendamento do relatório.                     |

## Campos da busca

| Item                       | Descrição                                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Código**          | Código de registro do provedor no senhasegura.                                                             |
| **Nome**             | Nome do provedor no senhasegura.                                                                            |
| **Tags**             | Tags associadas ao provedor.                                                                                |
| **Protocolo**        | Menu suspenso para escolha do protocolo de autenticação do provedor.                                      |
| **Data de registro** | Abre um calendário para escolha da data de registro do provedor. Esta data será a data inicial do filtro. |
| **até**             | Abre um calendário para escolha da data de registro do provedor. Esta data será a data final do filtro.   |
| **Ativo**            | Menu suspenso para escolha do status do provedor. Pode ser **Sim** ou **Não**.                  |

## Campos do relatório

A listagem contém os seguintes campos:

* **Código**.
* **Nome**.
* **Tags**.
* **Protocolo**.
* **Método de autenticação**: indica o método de autenticação utilizado pelo provedor.
* **Data de registro.**
* **Ativo**.
* **Sincronizar com Domum**: indica se o provedor de autenticação realiza sincronização de usuários com o senhasegura Domum.
* Na coluna **Ação**, você tem duas opções:
  * **Atualizar provider**: representado pelo ícone do lápis e papel, abre a janela **Registrar provedor de Identity managemen**t em modo de edição.
  * **Três pontos verticais**: ao clicar no ícone dos três pontos verticais, você tem duas opções:
    * **Detalhes do provider**: representado pelo ícone da lupa, abre a janela de detalhamento do provedor.
    * **Excluir provider**: representado pelo ícone da lixeira, exclui o provider.

## Janela Registrar provedor de Identity management

Ao clicar em **Atualizar provider** na coluna **Ação**, ou em **Exibir Ações > Novo provider**, você terá acesso à janela de registro de novos providers. Ela contém os seguintes campos:

### Aba Configurações

| Item                            | Descrição                                                                                                         |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Nome**                  | Nome do provedor de autenticação.                                                                                 |
| **Protocolo**             | Protocolo de autenticação utilizado pelo provedor.                                                                |
| **Sincronizar com Domum** | Menu suspenso para indicar quais usuários serão sincronizados com o senhasegura Domum.                            |
| **Ativo**                 | Radio buttonpara indicar se o provedor está ou não ativo no senhasegura. Pode ser **Sim** ou **Não**. |
| **Descrição**           | Campos de texto para inserir a descrição do provedor de autenticação.                                           |
| **Tags**                  | Campo de texto com as tags associadas ao provedor de autenticação.                                                |

### Aba Autenticação

| Item                                                             | Descrição                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Método de autenticação**                              | Menu suspenso para indicar qual o método de autenticação o provedor de autenticação está utilizando.                                                                                                                                                                                                   |
| **Data/Hora Validade**                                     | No primeiro campo é aberto um calendário para escolha da data de validade. No segundo, é aberto um menu suspenso para escolha da hora de validade. Perceba que a hora é dada em intervalos de quinze minutos, contudo, você pode inserir um horário personalizado, desde que válido. |
| **IPs permitidos (Coloque * para permitir qualquer IP)**   | Label para indicar de quais endereços IPs poderão ser feitas as requisições via API                                                                                                                                                                                                                      |
| **Endereço**                                              | Endereços IPs que poderão ser feitas as requisições via API                                                                                                                                                                                                                                              |
| **Ícone da lixeira**                                      | Apaga o IP selecionado.                                                                                                                                                                                                                                                                                      |
| **Referers permitidos (Lista vazia para qualquer origem)** | Label para os referers permitidos pelo provedor de autenticação.                                                                                                                                                                                                                                           |
| **Referer**                                                | Referers HTTP, ao qual será permitida a autenticação                                                                                                                                                                                                                                                      |
| **Ícone da lixeira**                                      | Apaga o Referer HTTP selecionado.                                                                                                                                                                                                                                                                            |
| **Ícone do olho**                                         | No canto inferior direito da página, indica as alterações feitas no provedor de autenticação e o usuário as realizou.                                                                                                                                                                             |