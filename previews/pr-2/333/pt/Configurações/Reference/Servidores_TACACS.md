# Servidores TACACS

Este documento apresenta uma visão geral da funcionalidade sobre servidores TACACS.

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Autenticação > TACACS > Servidores**.

## Barra superior

| Item                         | Descrição                                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------------------------ |
| **Mostrar os filtros** | Representado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela.          |
| **Atualizar**          | Representado pelo ícone da seta no sentido anti-horário. Atualiza a página.                   |
| **Exibir ações**     | Representado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Novo**               | Abra a janela **Servidor TACACS**.                                                              |
| **Imprimir relatório**     | Representado pelo ícone de impressora. Abre uma nova página para impressão do relatório.     |
| **Exportar CSV**            | Representado pelo ícone de folha de papel, baixa o relatório.                                  |
| **Agendar relatório**      | Representado pelo ícone do relógio. Abre a janela para efetuar o agendamento do relatório.    |

## Campos de busca

| Item               | Descrição                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------ |
| **Código**  | Filtra pelo código de cadastro do servidor no senhasegura.                                |
| **Hostname** | Filtra pelo hostname do servidor.                                                          |
| **Porta**    | Filtra pela porta de escuta do servidor.                                                   |
| **Ativo**    | Filtra de acordo com o status do servidor no senhasegura. Pode ser **Sim** ou **Não**. |

## Campos do relatório

Os resultados são exibidos em uma lista, conforme abaixo:

* **Código**.
* **Hostname**.
* **Porta**.
* **Timeout**: tempo, em segundos, para timeout do servidor TACACS.
* **Máx. Tentativas**: quantidade máxima de tentativas de autenticação que o senhasegura realizará no servidor TACACS.
* Na coluna **Ação** você tem duas opções:
  * **Alterar**: representado pelo ícone do lápis e papel, abre a janela **Servidor TACACS** em modo de edição.
  * **Testar autenticação**: acessível ao se clicar no ícone dos três pontos verticais e selecione a opção Testar autenticação. Abre a janela **Teste de autenticação TACACS**.

## Janela Servidor TACACS

A janela **Servidor TACACS** pode ser acessada de duas formas:

1. Para cadastro de um novo servidor.
2. Para alteração de um servidor.

Em ambos os casos, os campos são os seguintes:

| Item                       | Descrição                                                                                                                                                                                                                                   |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hostname**         | Campo de texto para inserir o endereço de IP ou hostname do servidor.                                                                                                                                                                        |
| **Porta**            | Campo de texto para inserir a porta onde o servidor escuta.                                                                                                                                                                                   |
| **Ativo**            | Radio buttonpara seleção do status do servidor. Pode ser**Sim** ou **Não**.                                                                                                                                                    |
| **Secret key**       | Chave secreta do servidor.**Nota**: caso a secret key não seja preenchida, o valor atual será mantido.                                                                                                                                |
| **Timeout(s)**       | Campo de texto para inserir o tempo de timeout do servidor.                                                                                                                                                                                   |
| **Máx. Tentativas** | Campo de texto para inserir a quantidade máxima de tentativas que o senhasegura realizará no servidor TACACS.                                                                                                                               |
| **Ícone de olho**   | No canto inferior esquerdo da janela. Ao passar o mouse por sobre o botão ele exibe informações sobre a edição e acesso ao servidor. **Nota**: este botão está disponível apenas quando a janela estiver aberta no modo de edição. |

## Janela Teste de autenticação TACACS

| Item                  | Descrição                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------- |
| **Servidor**         | Label indicando o endereço de IP ou hostname do servidor e porta.                          |
| **Nome do usuário** | Campo de texto para inserir o nome de usuário que será usado no teste de autenticação.  |
| **Senha**            | Campo de texto para inserir a senha do usuário que será usada no teste de autenticação. |