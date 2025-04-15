# Referência para dispositivos

Guia de referência para descrever como usar o registro de dispositivos da plataforma senhasegura. Isso inclui como identificar dispositivos, conectar-se a eles, configurar domínios e muito mais.

## Informações

| Item | Descrição |
| --- | --- |
| IP, hostname ou URL de gerenciamento | Um endereço de rede, nome de host ou endereço IP para que o senhasegura se conecte a esse dispositivo. |
| Nome do dispositivo | O nome do dispositivo é como esse dispositivo é referenciado no senhasegura, como em grupos de dispositivos. |
| Tipo de dispositivo | Tipo de dispositivo. |
| Fabricante | Fabricante do dispositivo. |
| Modelo | O produto do fornecedor escolhido. Também utilizado para parâmetro de sessão web. |
| Site | O país, a região ou a unidade de negócios onde o dispositivo está. |
| Tags | As tags são usadas para identificar diferentes características de um dispositivo. Elas são usadas para filtrar os resultados da pesquisa e para agrupar dispositivos. |

## Configurações de domínios

* O botão Adicionar, identificado pelo símbolo de soma, permite adicionar domínios que você já registrou na plataforma. O menu suspenso lista os domínios aos quais o dispositivo que você está editando pertence.

## Conectividades

| Item | Descrição |
| --- | --- |
| Conector de rede | O conector de rede do produto Network Connector do senhasegura que você deseja usar para se conectar a esse dispositivo. Para mais informações, acesse a documentação sobre [Network connector](https://docs.senhasegura.io/v3-33/docs/pt/network-connector) |
| Conectividade | O protocolo de conexão que será usado para iniciar uma sessão de proxy, troca de senha e para se conectar a outros módulos |
| Porta | A porta de conexão do dispositivo. |
| Adicionar | Botão que adiciona o domínio à lista. |

## Configurações adicionais

### Criticidade

- Esse parâmetro indica uma mudança no comportamento do usuário. Por exemplo, um usuário que normalmente só acessa dispositivos de baixa criticidade e então começa a acessar um dispositivo de alta criticidade, sem dar explicações, pode ser o indício de um comportamento de risco. Há três valores que esse campo pode assumir: *Alta, Média ou Baixa.*

### Configuração de sessão remota

### Expressões para login

* Neste campo podem ser passadas expressões regulares para serem usadas pela plataforma senhasegura na autenticação de dispositivos quando usando protocolos de linha de comando.
* Para realizar essa ação, clique no ícone de **+,** identificado pelo botão de soma, e preencha as informações:
    * **Conectividade**: escolha o tipo de conexão a ser feita.
    * **Expressão esperada**: preencha com a expressão regular necessária para o login.
    * **Valor de preenchimento**: em sessões Telnet o senhasegura não consegue preencher automaticamente usuário e senha. Usando essa opção, é possível passar esses parâmetros.
        * **Por exemplo:**
            * **Expressão esperada**: aparece no terminal quando a conexão é feita. Exemplo: `Usuário:`.
            * **Valor de preenchimento**: valor que deve ser preenchido em usuário como no exemplo acima. Exemplo: `[username]`.