# Cadastro de dispositivo

Este documento fornece informações sobre a tela de formulário de **Cadastro de dispositivo**, onde é possível adicionar novos dispositivos para serem acessados em sessões remotas.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Dispositivos > Todos dispositivos.**  
3. Na tela do relatório **Dispositivos**, clique no menu **Ações > Adicionar.**

---
## Aba Informações  
Esta seção fornece informações sobre a aba das informações gerais do cadastro do dispositivo.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Nome do dispositivo (Hostname, IP, url ou nome do site, nome da aplicação...)*** | Campo de texto | Sim | O nome do dispositivo é como esse dispositivo é referenciado no Segura, como em grupos de dispositivos. |
| **IP, Hostname ou URL de gerenciamento*** | Campo de texto | Sim | Um endereço de rede, nome de host ou endereço IP para que o Segura se conecte a esse dispositivo. |
| **Tipo de dispositivo*** | Menu suspenso | Sim | Define o tipo de dispositivo. |
| **Fabricante*** | Menu suspenso | Sim | Define o fabricante relacionado ao dispositivo. |
| **Modelo*** | Menu suspenso | Sim | O produto do fornecedor escolhido. Também utilizado para parâmetro de sessão web. |
| **Site*** | Menu suspenso | Sim | Define a divisão em que o dispositivo está relacionado. |
| **Tags** | Campo de texto | Não | Palavras que caracterizem o dispositivo. |
| **Domínio** | Menu suspenso | Não | Define o domínio que o dispositivo estará relacionado. |

## Aba Conectividades  
Esta seção fornece informações sobre as conectividades do dispositivo.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Ativar o uso de aplicativo remoto** | Botão *toggle* | Não | Define se o uso de aplicativo será ativado para o dispositivo. As opções são **Sim** e **Não**. |
| **Network Connector** | Menu suspenso | Não | O conector de rede do produto **Network Connector** do Segura que você deseja usar para se conectar a esse  dispositivo. |
| **Adicionar/Remover selecionadas** | Botão | Não | Adiciona uma linha na tabela. |
| **Conectividade** | Tabela | Não | O protocolo de conexão que será usado para iniciar uma sessão de proxy, troca de senha e para se conectar a outros módulos, os campos são: *Conectividade*, *Porta* e *Teste de conectividade*. |

## Aba Configurações adicionais  
Esta seção fornece informações sobre outras configurações possíveis para os dispositivos.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Criticidade** | Menu suspenso | Não | Indica uma mudança no comportamento do usuário. As opções são: *Baixa*, *Média* e *Alta*. |

#### Seção Configuração de sessão remota  
Nesta seção podem ser passadas expressões regulares que serão usadas pelo Segura na autenticação de dispositivos quando usando protocolos de linha de comando.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Adicionar/Remover selecionadas** | Botão | Não | Adiciona uma linha na tabela. |
| **Conectividade** | Menu suspenso | Não | Tipo de conexão a ser feita. |
| **Expressão esperada** | Campo de texto | Não | Expressão regular necessária para o login. |
| **Valor de preenchimento** | Campo de texto | Não | Em sessões Telnet o Segura não consegue preencher automaticamente usuário e senha. Usando essa opção, é possível passar esses parâmetros. |

## Aba Revisão  
Nesta seção estão as informações que foram adicionadas nos passos anteriores, para que seja analisada e caso necessite de alguma mudança, já seja feita antes de finalizar o cadastro.