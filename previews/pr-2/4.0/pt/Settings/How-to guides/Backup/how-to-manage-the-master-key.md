# Como gerenciar a chave mestra

Neste documento, você encontra um passo a passo sobre como configurar a **Chave Mestra** no Segura.

## Requisitos

* Ter o papel de *System Administrator*.

## Definir chave mestra

Para definir a chave mestra, você deverá seguir os passos abaixo:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Chave mestra > Definir chave mestra**.  
3. No formulário **Definir chave mestra**:
   1. **Quantidade de Partes para Restaurar**: indique a quantidade de partes que são necessárias para recuperar a chave mestra.  
      1. O número mínimo de partes é 2 e máximo de 10.  
   2. **Guardiões**: selecione, no menu suspenso, o usuário que deverá ser um dos guardiões da **Chave Mestra**.   
      1. Para adicionar mais usuários **Guardiões**, clique em **Adicionar**. Será adicionado um novo menu suspenso à lista anterior.
         :::(info) (Info)  
         Uma prática indicada é selecionar entre duas e três vezes mais guardiões do que partes da chave. 
         :::

5. Clique em **Gerar Nova Chave.**

:::(warning) (Atenção)
A chave mestra do cofre eletrônico é empregada para criptografar os arquivos de backup criados pela aplicação. Esses arquivos são criptografados utilizando o algoritmo AES com uma chave de 256 bits e podem ser descriptografados por meio da aplicação AESCrypt. 
:::

## Definir nova chave mestra

Caso seja necessário, você poderá redefinir a Chave mestra. Para redefinir a Chave mestra você tem dois caminhos:

### Relatório Cerimônia de chave mestra

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Chave mestra > Detalhes da cerimônia**.  
3. No relatório **Cerimônia de chave mestra** clique em **Definir nova chave mestra**.

### Definir nova chave mestra

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Chave mestra > Definir chave mestra**. 

Em ambos os casos será aberta a tela **Definir da chave mestra.** Quando você define uma nova chave mestra, contudo, você tem uma sessão adicional nesta janela. Para redefinir a chave mestra, siga os passos abaixo:

1. Na sessão **Chave atual**:  
   1. **Modo chave** selecione se você deseja utilizar para a sua **Chave mestra**, **Partes** ou **Chave Completa**. Nesse caso o campo **Chave Mestra** é trancado.  
   2. **Chave Completa**: caso você escolha a opção **Chave Completa**, você deve preencher o campo **Chave Mestra** com o valor da chave mestra. Neste caso o campo **Partes da Chave é trancado**.

:::(info) (Info)
Para ter acesso a chave completa, é necessário juntar as partes da chave em [https://breakglass.Segura.com/](https://breakglass.Segura.com/). Para mais informações, acesse a seção Restaurar chave mestra ao fim deste documento.
:::

   3. **Partes da Chave (uma por linha)**: caso você escolha a opção **Partes**, você deve preencher, neste campo, quais são as partes que compõem a **Chave Mestra**. Cada parte deverá ser colocada em uma linha separada. Neste caso o campo **Chave Mestra** é trancado.  
2. Na sessão **Nova chave**:  
   1. **Quantidade de Partes para Restaurar**: indique a quantidade de partes que são necessárias para recuperar a chave mestra.  
      1. O número mínimo de partes é 2 e máximo de 10.  
   2. **Guardiões**: selecione, no menu suspenso, o usuário que deverá ser um dos guardiões da **Chave Mestra**.   
      1. Para adicionar mais usuários **Guardiões**, clique em **Adicionar**. Será adicionado um novo menu suspenso à lista anterior.
3. Clique em **Gerar Nova Chave.**

### Informações sobre o usuário Guardião

* Esses usuários serão informados por *e-mail, notificação* ou *SMS* de que eles foram escolhidos para a função de **Guardião** de uma das partes da chave, por isso é importante que os **Guardiões** selecionados tenham, pelo menos, seus e-mails cadastrados no sistema.   
* O usuário não pode ser guardião de mais do que uma parte da chave.

## Acompanhar o andamento da cerimônia da chave mestra

É possível acompanhar o andamento da **Cerimônia da chave mestra**. Para isso, siga os passos abaixo:

:::(info) (Info)
Para finalizar o processo de Cerimônia da chave mestra o usuário guardião deve visualizar e/ou fazer download do arquivo `.pdf` contendo a chave mestra.
:::

1. Acesse, através do menu lateral, **Configurações Chave mestra > Detalhes da cerimônia.**  
2. No relatório **Cerimônia da chave mestra** você pode acompanhar o processo.  
3. Os campos são:  
   1. **Nome**: indica o nome do usuário, conforme registrado no Segura.  
   2. **Telefone**: indica o telefone do usuário, conforme registrado no Segura.  
   3. **E-mail**: indica o endereço de e-mail do usuário.  
      1. É importante que o usuário tenha um e-mail cadastrado no Segura para receber a notificação de guardião.  
   4. **Cerimônia**: indica o estado da cerimônia da chave mestra. Pode assumir os valores **Pendente** ou **Finalizado**.  
   5. **Status do usuário**: indica o estado do usuário dentro do Segura. Pode assumir os calores **Ativo** ou **Inativo**.  
   6. **Último login**: indica a data e hora do último login do usuário. É exibida no formato `DD/MM/AAAA HH:MM:SS.`  
   7. **Última visualização**: indica a data e hora da última visualização do usuário em relação a parte da chave que ele é guardião. É exibida no formato `DD/MM/AAAA HH:MM:SS.`  
   8. **Último download**: indica a data e hora do último download realizado pelo usuário da parte da chave que ele é guardião. É exibida no formato `DD/MM/AAAA HH:MM:SS.`  
4. Na lateral esquerda do relatório, você encontra informações sobre a cerimônia da chave mestra. As informações são:  
   1. **Status**: indica o status da cerimônia de forma geral. O status só é completado quando todos os usuários guardiões visualizarem e/ou baixarem a sua parte da chave mestra. Pode assumir os valores **Pendente** ou **Finalizado**.  
   2. **Partes para restauração**: indica quantas partes são necessárias para a restauração da chave mestra.  
   3. **Início**: indica a data e hora do início da cerimônia da chave mestra.  
   4. **Término**: indica a data e hora do término da cerimônia da chave mestra. Caso ainda não tenha sido encerrada, o campo mostrará apenas `--`.  
   5. **Definir nova chave mestra:** link para definir uma nova chave mestra. Abre a janela **Definição da chave mestra** para reiniciar o processo.

## Visualizar partes da chave mestra

Cada guardião deverá acessar sua conta no Segura para visualizar sua parte. Caso ocorra de um guardião estar com o status inativo, o sistema reportará como incidente via **Orbit Web** e *SYSLOG*, exibindo uma mensagem de alerta sobre o status inativo de guardião e sugerindo que o procedimento de cerimônia de chave mestra seja refeito.

:::(info) (Info)
Por padrão, para visualizar uma parte da **Chave Mestra**, o usuário **Guardião** deve ter a autenticação MFA configurada. Para desligar essa obrigatoriedade, acesse **Menu de produtos > Configurações > Parâmetros do sistema > Global > Aplicação** e, na seção **Cerimônia de chave mestra**, selecione **Não** para a opção **MFA obrigatório para cerimônia de chave mestra?**.
:::

:::(warning) (Atenção)
Desabilitar a autenticação MFA para visualização da chave mestra diminui a segurança do seu cofre.
:::

Para visualizar uma chave, sendo um usuário **Guardião**, siga os passos abaixo:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu pessoal** e selecione **Chave Mestra**.  
2. Na tela **Chave mestra**, você tem os seguintes campos:  
   1. **Nome**: indica a parte da chave que aquele usuário é guardião. É informada de acordo com o padrão `Key part number 1`.  
   2. **Geração**: indica a data em que a parte foi gerada. É apresentada no formato `DD/MM/AAAA HH:MM:SS`.  
   3. **Consulta**: indica a data e hora em que a consulta foi feita. É apresentada no formado `DD/MM/AAAA HH:MM:SS`.  
3. Abaixo dos campos informativos, existem três botões:  
   1. **Ver parte:** exibe a parte a qual o usuário é guardião.  
      1. Ao clicar em **Ver parte**, o modal **Visualização da senha** é aberto. Para visualizar a parte deslize o controle **Contraste** localizado na parte inferior do modal.  
   2. **Copiar parte:** copia a parte em questão para área de transferência.  
   3. **Baixe o arquivo**: baixa o arquivo, em formato `.pdf`, contendo a parte da chave.

## Restaurar chave mestra

Uma vez finalizada a Cerimônia da chave mestra, é possível realizar o processo de restauração desta. Para isso, siga os passos abaixo:

1. Reúna os guardiões e acesse o link [Combine secret](https://breakglass.Segura.com/).  
2. No campo de texto Parts of key insira as partes da chave, obedecendo a ordem.

As partes da chave devem ser inseridas conforme o exemplo:

```
1-dbfcc9e0fef3542c6fe5494aerr284h
2-dbfcc9e0fef3542c6fe5494ae45284g
```

3. No campo **Total number of parts**, indique o número total de partes que aquela chave tem.  
4. No campo **Number of parts to Restore**, indique o número de partes necessárias para restaurar a chave mestra.  
5. Clique em **Restore Key** para restaurar a chave mestra.
6. Se tudo der certo, o sistema irá mostrar a chave de restauração. Por exemplo `AeBaxnZjptYRQpp4BEZiRk1kIrYe`.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/). 