# Sessões web

Neste documento você encontrará todas as informações sobre a tela inicial **Sessões web**, que mostra a lista de todos os parâmetros de sessões web criadas no módulo **PAM Core**.

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Configurações** > **Acesso** > **Sessões web**.

---
## Barra superior
**Item**|**Descrição**
|---|---|
**Mostrar os filtros**|Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela.
**Atualizar**|Representado pelo ícone da seta no sentido anti-horário, atualiza a página.
**Exibir ações**|Representado pelo ícone de três pontos verticais, exibe as ações possíveis para a página.
**Imprimir relatório**|Representado pelo ícone de impressora, abre uma nova página para impressão do relatório.
**Exportar CSV**|Representado pelo ícone de folha de papel, baixa o relatório.
| **Agendar relatório** | Representado pelo ícone de relógio, abre o formulário para agendar a geração do relatório em uma data e hora específicas. |


## Campos de Busca
| **Item**| **Descrição**|
|---|---|
| **Código**| Número de identificação da ordem em que os parâmetros foram cadastrados. |
| **Modelo**| Dispositivo que será o alvo da sessão.|
|**Login Url**| URL da página de login do site que será utilizado.|
| **HTTP Auth Realm**| Autenticação HTTP, caso seja exigido pelo site.|
| **Firefox legacy**| Opção para o uso de um navegador Firefox de versões antigas.  |
| **Ignorar erro de certificado** | Opção para ignorar um erro de certificado que o aplicativo web venha a apresentar. |


## Campos do relatório

* **Código**.
* **Modelo**.
* **Login Url**.
* **HTTP Auth Realm**.
* **Firefox legacy**.
* **Ignorar erro de certificado**.
* **Ação**:
    * **Alterar**: representado pelo ícone de lápis e papel, abre a janela **Parâmetros de Sessão Web** para que sejam realizadas as alterações necessárias.
    * **Ícone dos três pontos verticais**: menu suspenso com a opção de Clonar um parâmetro ou Excluir. Em ambas ações, clique Sim na caixa de confirmação para realizá-la.

:::(info) (**Info**)
O relatório exibe 30 registros por tela, para ir para as próximas telas, clique nos botões de avançar ao final do relatório.
:::

### Parâmetros de sessão web

**Item**|**Descrição**
---|---
**Modelo equipamento***|Escolha dentre as opções qual será o dispositivo acessado pela sessão.
**Utilizar firefox legado***|Escolha a entre as opções para ativar ou não esta função.
**Ignorar erro de certificado**|Escolha a entre as opções para que seja ignorado os possíveis erros de certificado ao acessar a sessão.
**Login Url**|Escreva o endereço URL que será acessado.
**HTTP Auth Realm**|Escreva a autenticação HTTP, caso seja exigido pelo site.
**Configuração Personalizada**|Clique no ícone de adição e preencha os campos disponíveis. 


#### Configuração Personalizada - campos
Cada ação adicionada é composta por sete elementos, configure cada etapa necessária para autenticação.

* **Aguardar (ms)**: tempo de espera, em milissegundos, antes da ação ocorrer. A primeira ação deve ter o tempo ajustado ao tempo de renderização da página.
* **Ação**: tipo de ação que será realizada simulando um usuário que está se autenticando no site. Algumas destas ações têm propriedades adicionais.
    * **Simulated Click**: uma automação que gera os clicks diretamente pelo site. Exemplo: O clique é realizado pelo console.
    * **Real Click**: uma pessoa real clicando, é um clique real. **Exemplo**: como se uma pessoa real realizasse a ação de clicar.
    * **Run JS command**: insere um comando em javascript, para execução de um comando.
    * **Mark**: é usado para marcar os checkboxes e radio buttons.
    * **Simulated Fill**: preenchimento dos campos automizados (necessita do campo **Valor** preenchido).
    * **Real Fill**: preenchimento dos campos como se fosse feito por uma pessoa real (necessita do campo **Valor** preenchido).
    * **Roll**: seleção de lista, listagem de dados.
    * **Select**: contém um elemento Select com opções para serem selecionadas. **Exemplo**: é uma lista suspensa com elementos para o usuário selecionar.
    * **Submit**: um elemento HTML do tipo submit para envio de dados. **Exemplo**: é um botão usado para envio de dados que envia todos os valores preenchidos no formulário.
    * **Captcha**: é um teste de desafio e resposta usado para determinar se o usuário é humano. **Exemplo**: pode conter letras, números, entre outros, em fontes diferentes e diferentes caligrafias.
        :::(info) (**Info**)
        Nesta etapa é necessário o preenchimento conforme a imagem que foi exibida para que seja possível dar continuidade à outras etapas.
        :::
* **Campo**: pode ser utilizado o [jQuery selector](https://api.jquery.com/category/selectors/){target=`_blank`} para identificar o campo alvo da ação a ser realizada ou pode ser feita a inspeção do campo para identificar o campo alvo.
* **Valor**: este é o valor que será usado para preencher o campo. Os valores podem ser fixados e você poderá preencher usando tags como:
    * `[username]`: nome de usuário da credencial de entrada.
    * `[password]`: senha da credencial.
    * `[device_ip]` ou `[device_name]`: IP, DNS ou URL do dispositivo ao qual a credencial está associada;
    * `[user_custom_code]` e `[token_totp]`: tags para início de sessões web com mais um campo de autenticação.
* **Tentativas**: O número de vezes que a automação deve tentar a ação se ela falhar. 
    :::(info) (**Info**)
    As razões para o fracasso muitas vezes variam entre um seletor errado, uma ação inadequada ou mesmo não ter tido tempo de tornar a página para automação encontrar o campo desejado.
    :::
* **Intervalo (ms)**: É o tempo que a automação deve esperar até que a ação seja retomada, a primeira ação tem um número adequado de tentativas e tempo de intervalo.