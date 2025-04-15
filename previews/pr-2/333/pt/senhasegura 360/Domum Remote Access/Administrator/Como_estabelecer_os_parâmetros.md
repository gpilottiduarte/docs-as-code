# Como estabelecer os parâmetros

Após configurar a conta de e-mail SMTP, você deve estabelecer os parâmetros para operar o Domum Remote Access. Este documento fornece as etapas para essa tarefa.

## Como estabelecer os parâmetros no Domum Remote Access

1. Acesse a plataforma senhasegura.  
2. No canto superior esquerdo, clique em **Grid Menu**, representado pela caixa de nove quadrados, e selecione **Domum Remote Access**.  
3. No menu lateral, acesse **Configurações \> Parâmetro \> Domum**.  
4. O sistema preencherá automaticamente os campos **Domínio de usuários internos** e **Domínio fornecedores**.  
5. Em **Habilitar autenticação externa**\*, escolha entre **Sim** ou **Não**.  
   1. Se você escolheu **Sim**, o sistema preencherá automaticamente a **URL de retorno para SSO**.

:::(Error) (Alerta!)
Se este campo estiver habilitado, ele requer um provedor registrado no senhasegura. Se nenhum provedor estiver registrado, o campo não funcionará corretamente.
:::

6. Em **Conceder acesso automaticamente após provisionamento de usuário interno**\*, escolha entre **Sim** ou **Não**.  
   1. Se você escolheu **Sim**, estabeleça a **Duração** do acesso e selecione *Minutos*, *Horas*, *Dias* ou *Meses*.  
   2. Se você não quiser que um grupo específico siga as configurações globais definidas no passo anterior, é possível definir configurações especiais durante a criação ou edição de um grupo de usuários internos.  
7. Em **Token de autenticação inicial**, complete as informações.  
   1. No campo **Provedor**, selecione o meio de envio do token: **e-mail** ou **SMS**.
    :::(Info) (Info)
    - É recomendável utilizar o parâmetro de envio do token por SMS para que as informações       de acesso não fiquem concentradas em um mesmo local, tornando o processo mais               seguro.
    - O único serviço de SMS disponível é o Zenvia.
    :::
    2. Defina o **Tempo de expiração do primeiro token (em minutos)**.
9. Em **Configuração de e-mail**, selecione uma conta de envio para o link de acesso.
10. Em **Notificações**, complete as informações.
    1. Em **Expiração de acesso. Notificar**, escolha quem você quer notificar sobre a expiração. As opções são **Solicitante do acesso, Usuário com acesso** ou **Solicitante e Usuário**.
    :::(Info) (Info)
    É possível deixar esse campo em branco para que ninguém seja notificado.
    :::
    2. Em **Quando notificar?**, especifique o número e selecione a unidade de tempo relacionada no menu suspenso ao lado. Você pode escolher entre: **Minutos, Horas, Dias** ou **Meses**.
11. Clique em **Salvar**.

Uma janela pop-up exibe uma mensagem de confirmação indicando a conclusão do processo. Você acabou de estabelecer os parâmetros necessários para o funcionamento do **Domum Remote Access**. Para completar as configurações iniciais, veja como cadastrar um motivo de acesso.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).

