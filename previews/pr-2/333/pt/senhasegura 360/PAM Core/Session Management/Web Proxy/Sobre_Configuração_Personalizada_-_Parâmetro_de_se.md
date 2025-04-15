# Sobre Configuração Personalizada - Parâmetro de sessões web

Neste documento, você encontrará todas as informações sobre a opção de **Configuração Personalizada**, presente na tela de cadastro de parâmetros de sessões web.

Cada ação que será adicionada é composta por sete elementos, configure cada etapa necessária para autenticação.

* **Aguardar (ms)**: tempo de espera em milissegundos antes da ação ocorrer. A primeira ação deve ter o tempo ajustado ao tempo de renderização da página.
 * **Ação**: tipo de ação que será realizada simulando um usuário que está se autenticando no site. Algumas destas ações têm propriedades adicionais.
    * **Simulated Click**: uma automação que gera os clicks diretamente pelo site. Exemplo: O clique é realizado pelo console.
    * **Real Click**: uma pessoa real clicando, é um clique real. Exemplo: como se uma pessoa real realizasse a ação de clicar.
    * **Run JS command**: insere um comando em javascript, para execução de um comando.
    * **Mark**: é usado para marcar os checkboxes e radio buttons.
    * **Simulated Fill**: preenchimento dos campos automizados (necessita do campo Valor preenchido).
    * **Real Fill**: preenchimento dos campos como se fosse feito por uma pessoa real (necessita do campo Valor preenchido).
    * **Roll**: seleção de lista, listagem de dados.
    * **Select**: contém um elemento Select com opções para serem selecionadas. Exemplo: é uma lista suspensa com elementos para o usuário selecionar.
    * **Submit**: um elemento HTML do tipo submit para envio de dados. Exemplo: é um botão usado para envio de dados que envia todos os valores preenchidos no formulário.
    * **Captcha**: é um teste de desafio e resposta usado para determinar se o usuário é humano. Exemplo: pode conter letras, números, entre outros, em fontes diferentes e diferentes caligrafias.
    :::(info) (**Info**)
    Nesta etapa é necessário o preenchimento conforme a imagem que foi exibida para que seja possível dar continuidade à outras etapas.
    :::
* **Campo**: pode ser utilizado o [jQuery selector](https://api.jquery.com/category/selectors/){target=`_blank`} para identificar o campo alvo da ação a ser realizada ou pode ser feita a inspeção do campo para identificar o campo alvo.
* **Valor**: Este é o valor que será usado para preencher o campo.
    * Os valores podem ser fixados apenas digitando. Você pode preencher usando tags como [username], [device_ip], [password], [device_name], [user_custom_code] e [token_totp].
    * A senha da credencial: [password].
    * O nome de usuário da credencial de entrada: [username].
    * O IP, DNS ou URL do dispositivo ao qual a credencial está associada [device_ip] ou [device_name].
    * Funcionários ou terceiros: tag para início de sessões web com terceiro campo de autenticação [user_custom_code], [token_totp] e [tags_customizadas].
* **Tentativas**: O número de vezes que a automação deve tentar a ação se ela falhar. 
    :::(info) (**Info**)
    As razões para o fracasso muitas vezes variam entre um seletor errado, uma ação inadequada ou mesmo não ter tido tempo de tornar a página para automação encontrar o campo desejado.
    :::
* **Intervalo (ms)**: É o tempo que a automação deve esperar até que a ação seja retomada, a primeira ação tem um número adequado de tentativas e tempo de intervalo.

As outras etapas de automação podem contar com valores menores para o **Aguardar**. e o campo de **Intervalo**, pois geralmente já estarão disponíveis se o primeiro campo já tiver sido encontrado.
Para autenticações que incluem etapas posteriores, ajuste o tempo de espera das ações iniciais de cada etapa como se elas fossem as primeiras.

Se você precisar autenticar um Captcha, indique o seletor do elemento que hospeda o componente principal. Somente este componente será apresentado ao usuário para que ele termine o processo. Este isolamento impede que o usuário modifique qualquer outro valor já povoado.

Algumas tecnologias captcha mais sofisticadas precisam apresentar toda a página de autenticação porque não permitem a manipulação do componente que a hospeda. Portanto, terminam a automatização no momento da captcha. A sessão já está sendo gravada e se o usuário modificar a autenticação.

Ao fazer o login, você verá o navegador incorporado ao acessar o site. Quando a página de autenticação for carregada, você será apresentado a um escudo que impede a interação do usuário. Isto significa que a autenticação ainda está em execução.
Ao final, se a automação estiver devidamente configurada, o usuário será liberado para usar o site.
