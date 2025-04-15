# Como criar uma política de credenciais

Uma política de credenciais é um conjunto de regras que regulam como uma organização gerencia as credenciais de autenticação dos usuários. Essas políticas devem especificar regras para complexidade de senhas, expiração e armazenamento, entre outros aspectos, garantindo que as credenciais de usuário sejam robustas, seguras e atualizadas com frequência, reduzindo assim o risco de acesso não autorizado ao sistema.

## Como criar uma política de credenciais no Segura

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.
2. No menu lateral, selecione **Gerenciamento > Credenciais > Políticas.**
3. No canto superior esquerdo, clique em **Adicionar**.

Na tela **Políticas**, preencha os campos de acordo:

1. **Nome da política de credenciais**: nome que irá identificar a política de credenciais na plataforma.
2. **Ativo**: selecione **Ativo** para para aplicar a política na plataforma.
3. Na aba **Configurações**:
    1. **Força da senha**: no menu suspenso, selecione o critério de força da senha que você deseja*.* É possível cadastrar os critérios para a **Força de senha.**
    2. **Prioridade**: define a prioridade de aplicação da política se o Segura encontrar mais de uma política que se aplique à credencial. Quanto maior for a prioridade, maior será o número deste campo.
    3. **Permitir visualização simultânea?**: a visualização da senha pode ocorrer simultaneamente. Independente do usuário com custódia da senha, todos os outros pertencentes a essa política conseguem visualizar a senha.
    4. **Permitir sessão simultânea**: habilitar essa opção permite que usuários realizem sessões via proxy, de forma simultânea, com a mesma credencial. Com essa opção desabilitada, só será permitida uma sessão por vez.
    5. **Tempo de expiração por consulta:** o intervalo de tempo no qual o Segura mudará automaticamente a senha após a visualização por um usuário. No primeiro campo, indique um número e no segundo campo indique a unidade (*Meses, Dias, Horas ou Minutos*).
    6. **Tempo de expiração por decurso:** define o período máximo de validade de uma senha, contado a partir da última vez que ela foi alterada. Após o período definido, a senha expirará automaticamente, independentemente da frequência de uso, incluindo acessos e sessões remotas. O usuário será obrigado a escolher uma nova senha para continuar acessando o sistema. Exemplo: Se você definir este campo para *3 Meses*, a senha do usuário expirará 3 meses após a última troca de senha, mesmo que ele a utilize regularmente para qualquer tipo de acesso, incluindo sessões remotas. No primeiro campo, indique um número e no segundo campo indique a unidade (*Meses*, *Dias*, *Horas* ou *Minutos*).
    7. **Reutilizar a mesma senha por:** estabelece por quanto tempo as credenciais da mesma política recebem a mesma senha. A contagem inicia no momento da primeira execução de troca de senha de uma credencial dessa política. Se o campo for preenchido com o prazo de cinco horas, por exemplo, todas as outras credenciais que efetuarem execuções de troca dentro desse período receberão a mesma senha. No primeiro campo, indique um número e no segundo campo indique a unidade (*Meses, Dias, Horas ou Minutos*).

:::(Error) (Importante)
- Quando a opção **Permitir visualização simultânea?** estiver habilitada, e um usuário realizar o saque da senha, o que fará com que essa senha fique sob sua custódia, outro usuário poderá realizar o saque da senha mesmo assim.
- Quando a opção **Permitir sessão simultânea?** estiver habilitada, e um usuário realizar o saque da senha, o que fará com que essa senha fique sob sua custódia, outro usuário não poderá realizar o saque da senha.
:::

:::(Info) (Info)
Se você classificar a força de senha como “High”, automaticamente o sistema não irá permitir que senhas sejam reutilizadas.
:::

4. Na seção **Dias de expiração**, se você deseja que a senha expire em qualquer dia da semana, marque a caixa de seleção **Todos os dias**. Caso contrário, marque a caixa de seleção de acordo com os dias que você deseja que as senhas expirem. Lembre-se que algumas credenciais não podem ser recicladas diariamente, seja por conta das políticas de segurança do dispositivo alvo ou por eventuais impactos que ele possa ter sobre o negócio.
5. Na seção **Horas de Expiração**:
    1. **Adicionar hora por consulta**: clique no botão **“Add”**, representado pelo sinal de soma, para adicionar um critério de expiração por hora de consulta. Ao clicar no botão, um menu suspenso ficará disponível. Para adicionar uma hora, basta selecionar o horário desejado no menu suspenso. Caso queira deletar esse critério, clique no ícone da lixeira, logo ao lado do campo de hora.
    2. **Adicionar hora por decurso**: clique no botão **“Add”**, representado pelo sinal se soma, para adicionar um critério de expiração por hora de decurso. Para adicionar uma hora, basta selecionar o horário desejado no menu suspenso. Caso queira deletar esse critério, clique no ícone da lixeira, logo ao lado do campo de hora.
6. Na aba **Critérios**:
    1. **Dispositivo (sep. por vírgula)**: indique quais dispositivos serão afetados por essa política.
    2. **Modelo (sep. por vírgula)**: indique quais modelos de dispositivos serão afetados por essa política.
    3. **Informações adicionais (sep. por vírgula)**: indique informações relevantes sobre a política.
    4. **Tags do dispositivo (sep. por vírgula)**: indique quais as tags dos dispositivos afetados.
    5. **Tags da credencial (sep. por vírgula):** indique quais as tags das credenciais afetadas.
    6. Na seção **Site** indique quais sites serão afetados pela política. Marque **Todos** para aplicar a política a todos os sites cadastrados.
    7. Na seção **Tipo de dispositivo** indique quais dispositivos serão afetados pela política. Marque **Todos** para aplicar a política a todos os dispositivos cadastrados.
    8. Na seção **Tipo de credencial** indique quais tipos de credenciais serão afetadas pela política. Marque **Todas** para aplicar a política a todas as credenciais cadastradas.

:::(Error) (Importante)
Não é possível alterar os critérios depois que a política for salva.
:::

7. Clique em **Continuar**, e em **Salvar**.

:::(Warning) (Cuidado)
Todos os campos acima determinam ações que influenciam a regra de negócios do cliente ou as regras de segurança do dispositivo de destino. Erros de configuração desses campos podem levar à indisponibilidade da credencial.
:::

## Como alterar uma política de credencial

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Gerenciamento > Credenciais > Políticas.**
3. Na tela de listagem, identifique a política que deseja editar e, na coluna **Ações**, clique em **Editar**.
4. Altere as opções da política de credenciais de acordo com o formulário descrito na seção **Como criar uma política de credenciais no Segura.**
5. Clique em **Salvar**.

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).