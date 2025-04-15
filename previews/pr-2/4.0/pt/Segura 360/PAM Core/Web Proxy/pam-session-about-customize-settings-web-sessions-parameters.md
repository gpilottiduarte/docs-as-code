# Sobre Configuração Personalizada - Parâmetro de sessões web

A personalização dos parâmetros de sessão web permite definir configurações e comportamentos específicos para sessões individuais com base nas necessidades do usuário ou nos requisitos do sistema.

Cada parâmetro adicionado na lista é composto por sete elementos. São eles:

* **Aguardar (ms):** define o tipo de ação a ser executada, simulando um usuário autenticando no site. Algumas ações possuem propriedades adicionais.  
* **Ação:** define o tipo de ação a ser realizada simulando um usuário que está se autenticando no site. Algumas destas ações têm propriedades adicionais.  
  * **Simulated Click:** gera cliques simulados diretamente pelo site, como se fosse realizado pelo console.  
  * **Real Click:** Simula um clique como o de uma pessoa real.   
  * **Run JS command:** executa um comando em JavaScript.  
  * **Mark:** marca caixas de seleção e radio buttons.  
  * **Simulated Fill:** preenche campos de forma automatizada (requer que o campo **Valor** seja preenchido).  
  * **Real Fill:** preenche campos como se fosse uma pessoa real (também requer o campo "Valor" preenchido).  
  * **Roll:** seleciona itens em uma lista ou exibe dados listados.  
  * **Select:** permite selecionar opções de um elemento `Select` (dropdown).  
    * **Exemplo:** menu suspenso com opções para o usuário escolher.  
  * **Submit:** um elemento HTML do tipo submit para envio de dados.  
    * **Exemplo:** executa o envio de dados via elemento HTML `submit` como um botão de envio que submete todos os valores preenchidos no formulário.  
  * **Captcha:** validações para verificar se o usuário é humano.   
    **Exemplo**: apresenta um desafio com caracteres de diferentes fontes e estilos para serem reconhecidos.  
    :::(info) (**Info**)  
    Nesta etapa, é necessário preencher conforme a imagem exibida para que o fluxo possa avançar para as próximas etapas.  
    :::  
* **Campo:** define o alvo da ação e pode ser identificado pelo seletor [jQuery selector](https://api.jquery.com/category/selectors/) ou inspecionando o campo diretamente.  
* **Valor:** especifica o valor que será preenchido no campo. Os valores podem ser fixados e preenchidos usando tags como:  
  * `[username]`: nome de usuário da credencial de entrada.  
  * `[password]`: senha da credencial.  
  * `[device_ip]` ou `[device_name]`: IP, DNS ou URL do dispositivo ao qual a credencial está associada;  
  * `[user_custom_code]` e `[token_totp]`: utilizados para iniciar sessões web que exigem um campo adicional de autenticação.  
* **Tentativas:** define o número de vezes que a automação deve repetir a ação em caso de falha.
:::(info) (**Info**)  
Falhas podem ocorrer por diferentes motivos, como seletores incorretos, ações  
inadequadas ou mesmo tempo insuficiente para a página carregar antes que a  
automação localize o campo desejado.  
:::
* **Intervalo (ms):** define o tempo em milissegundos que a automação deve aguardar entre cada tentativa. A primeira tentativa conta com um número pré-configurado de tentativas e um intervalo adequado entre elas.
