# Logs da sessão

Este documento fornece informações sobre a tela de relatório **Logs da sessão**, que mostra os detalhes da sessão realizada.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Auditoria > Sessões > Sessões remotas**.  
3. Na lista apresentada no relatório, no registro da sessão escolhida, clique no **Botão de ações** e selecione **Logs da sessão**.

---
## Seção Dados da Sessão

| **Item**  | **Descrição** |
| :---- | :---- |
| **Código** | Código de identificação da sessão. |
| **Início** | Data e hora do início da sessão. |
| **Fim** | Data e hora do término da sessão. |
| **Tipo** | Tipo da sessão acessada. |
| **Host** | Endereço IP ou hostname do dispositivo acessado. |
| **Nome do usuário** | Nome do usuário da credencial que foi acessada. |
| **Mensagem de erro** | Mensagem exibida caso ocorra um erro no acesso. |

## Seção RemoteApp  
Esta seção estará disponível apenas quando a sessão acessada utilizar um macro do RemoteApp.

| **Item**  | **Descrição** |
| :---- | :---- |
| **Nome de usuário** | Nome de usuário cadastrado no macro do RemoteApp. |
| **Macro** | Nome do macro que foi utilizado. |

## Seção Dados do Usuário

| **Item**  | **Descrição** |
| :---- | :---- |
| **Usuário** | Nome e username do usuário que realizou o acesso. |
| **IP do Usuário** | Número de IP da máquina do usuário. |

## Seção Análise de vulnerabilidade

| **Item**  | **Descrição** |
|---|---|
|**Comando de maior risco**| Nome do comando auditado cadastrado no Segura.
|**Score**| Pontuação de risco atribuído ao comando.
|**Criticidade**| Nível de criticidade da utilização do comando.
|**Ação**| O tipo de ação que ocorre ao executar o comando.
|**Comando digitado**| O comando digitado pelo usuário.
|**Executado em**| Minuto em que comando foi executado durante a sessão.

## Seção Eventos da sessão

| **Item**  | **Descrição** |
| :---- | :---- |
| **Usuário** | Nome do usuário que utilizou a sessão. |
| **Data/Hora** | Data e hora das ações realizadas durante a sessão. |
| **Evento** | O evento foi realizado. |
| **Observação** | Mensagem de observação de cada evento. |

## Seção Logs da Sessão

| **Item**  | **Descrição** |
| :---- | :---- |
| **Procurar por termo** | Caixa de texto para procurar um termo específico que foi utilizado durante a sessão. |
| **Exportar dados** | Localizado no rodapé da tela, exporta os dados da sessão em formato `.csv` |

:::(info) (**Info**)  
Dentro de **Log da Sessão** contém uma imagem com todos os eventos e ações realizadas dentro da sessão.  
:::