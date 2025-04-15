# Referência para Connectors

Neste documento, você vai encontrar todas as informações sobre a página de **Connectors** do **Network Connector**.

## Caminho para acessar

1. No Segura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Dispositivos**.
2. No menu lateral, selecione a opção **Configurações** > **Network Connetors** > **Connectors**.

## Barra superior

| Item           	   | Descrição                                                                                               	|
|--------------------|--------------------------------------------------------------------------------------------------------------|
| Mostrar os filtros | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela.                  	|
| Atualizar      	   | Representado pelo ícone da seta no sentido anti-horário, atualiza a página.                             	|
| Exibir ações   	   | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página.  |
| +Novo          	   | Representado pelo ícone de adição, abre a tela Novo Network Connector.                      	|
| Imprimir relatório | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório.                	|
| Exportar CSV   	   | Representado pelo ícone da folha de papel, baixa o relatório.                                           	|
| Agendar relatório  | Representado pelo ícone do relógio, abre o formulário Agendar relatório.                                	|

## Campos de busca

| Item             | Descrição                                                                                 |
|------------------|-------------------------------------------------------------------------------------------|
| Código           | Código identificador do registro.                                                         |
| Nome             | Nome definido pelo usuário no momento da criação do registro.                             |
| IP               | Endereço de IP do dispositivo cadastrado como Connector.                                  |
| Porta            | Porta que o IP está oferecendo o serviço de Connector.                                    |
| Data de cadastro | Data em formato `dia/mês/ano horas:minutos` do momento em que o registro foi cadastrado.  |
| Última mudança   | Data em formato `dia/mês/ano horas:minutos` do momento da última atualização do registro. |
| Ativo            | Estado de operação do registro, pode ser `Sim` ou `Não`.                                  |
| Ação             | campo que oferece as opções `Editar`, `Detalhes` e `Ativar` ou `Inativar`.                |

## Campos do relatório

* **Código**.
* **Nome**.
* **IP**.
* **Porta**.
* **Data de cadastro**.
* **Última mudança**.
* **Ativo**.
* **Ação**:
	* **Alterar**: abre a tela de Atualizar Network Connector.
	* **Três pontos verticais**: menu de ações que contém a opção **Detalhes**, que mostra nome, IP, situação, fingerprint e agentes cadastrados.


:::(info) (**Info**)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

## Novo Network Connector

 Ao clicar em no botão exibir ações, indicado pelos três pontos verticais, será exibido o formulário de Novo Network Connector, com os seguintes campos:

* Nome.
* Ativo: pode ser sim ou não.
	* Autenticação:
		* IP.
		* Porta.
		* Nome de usuário.
		* Senha.
		* Fingerprint.
	* Agentes:
		* Nome.
		* Porta.
