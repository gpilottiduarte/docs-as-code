# Sobre o cálculo de restrição de grupos de acesso

De forma a adicionar mais uma camada de segurança no controle de acesso, a plataforma senhasegura implementa, para a funcionalidade de Grupos de Acesso, um cálculo de prioridade e restrição. Estes cálculos são realizados no momento da solicitação de visualização de senha ou início de sessão, levando em consideração a data e o horário do cofre.

## Como é feito o cálculo

Todos os grupos de acesso são representados por 8 dígitos, sendo eles:

1. O primeiro grupo é formado por um dígito. Este é o dígito identificador. Sempre assumirá o valor 1.
2. O segundo grupo é formado por três dígitos que assumem um valor binário, 0 ou 1, indicando **FALSE** ou **TRUE**. Sendo:
    1. O primeiro dígito deste grupo analisa a permissão do usuário para a ação solicitada.
    2. O segundo dígito deste grupo identifica se o usuário precisa ou não de uma justificativa para aquela ação solicitada.
    3. O terceiro dígito deste grupo analisa se o usuário precisa ou não de aprovação para realizar a ação solicitada.
    4. O cálculo do segundo grupo é feito baseado nas permissões de cada usuário em cada grupo e também com base na hora que a solicitação for feita. **Por exemplo:**
        1. Se um usuário não puder realizar a ação solicitada, ele terá o valor `000` nesse grupo; se o usuário puder realizar a ação, terá o valor `100` nesse grupo.
        2. Se o usuário tiver necessidade de justificar a ação solicitada, ele terá o valor `110` nesse grupo.
        3. Se o usuário precisar de autorização para realizar a ação solicitada, ele terá o valor `111` nesse grupo.
        4. Se um usuário, contudo, realizar uma solicitação para uma ação em uma janela de horário que não esteja autorizado, o valor do segundo grupo será modificado. Assim, suponha que um usuário precise de autorização para realizar uma ação entre as 13:00 e às 17:00; caso o usuário realize essa solicitação às 14:00, ele terá `111` como valor no segundo grupo. Da mesma forma se esse mesmo usuário realizar essa mesma solicitação às 17:01, ele terá `110` como valor no segundo grupo.
3. O terceiro grupo é formado por quatro dígitos e identifica o grupo de acesso. Este grupo é o ID do grupo de acesso e sempre será formado por quatro dígitos. Por exemplo, se o ID do grupo é 45, esse grupo será formado pelos dígitos `0045`.

## Como é feita a análise

O primeiro valor a ser analisado será o do segundo grupo. Os grupos de acesso que tiverem o maior valor nesse grupo serão aplicados, uma vez que são os mais restritivos.

Caso existam dois grupos de acesso com o mesmo valor no segundo grupo, será então analisado o terceiro grupo e, assim, o menor valor desse terceiro grupo indicará qual será o grupo de acesso aplicado (o acesso nesse caso se dará de acordo com o grupo de acesso com menor número de ID).