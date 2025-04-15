# Referência para credenciais

Guia de referência para descrever as opções presentes na página de registro de credenciais da plataforma senhasegura.

## Informações

| Campo | Descrição |
| --- | --- |
| Nome do usuário | Nome de usuário da credencial que será utilizada para autenticação das sessões que deve corresponder à credencial do sistema remoto. |
| Tipo da senha | Tipo de senha que define o modelo das credenciais usadas para segmentar os usuários e atribuir permissões com base nos grupos de acesso. O tipo de senha pode assumir três valores: Usuário de domínio, Administrador local e Local user. |
| Domínio | A qual domínio a credencial pertence, podendo ser utilizada para iniciar sessões em outros dispositivos do mesmo domínio. |
| Dispositivo | O dispositivo onde a credencial poderá iniciar sessões. |
| Informação adicional | Opção para complementar o uso da credencial no dispositivo alvo, como, por exemplo, em conexões de banco de dados. O campo também serve para uso em troca automatizada de senhas e macros RemoteApp. |
| Situação | Situação da credencial: Ativa ou Inativa. |
| Senha | Senha da credencial. Limite de 256 caracteres. |
| Definir senha atual | Habilita o campo Senha e permite definir uma nova senha |
| Mostrar senha | Exibe a senha durante a edição. |
| Gerar uma senha | Gera uma senha aleatória conforme a Política de senha. |
| Tags | Identificador para segregação de credenciais |
| Secret key (TOTP) |Chave secreta para gerar um token TOTP. Para manter a chave TOTP inserida anteriormente, deixe o campo em branco. |

:::(Info) (Info)
Observe a caixa informativa das políticas de senha que devem ser consideradas ao criar a senha para a credencial, assim garantindo a criação de uma senha mais segura.
:::

## Configuração de execução

| Campo | Descrição |
| --- | --- |
| Credencial pai | Selecione uma credencial para ser considerada a credencial “pai”. A partir desse ponto, a credencial “filha” sempre assumirá a mesma senha da credencial pai. |

:::(Info) (Info)
A existência de uma credencial pai não impede que a senha da credencial filha seja alterada manual ou automaticamente.
:::

### Configurações da troca de senha automática da credencial

| Campo | Descrição |
| --- | --- |
| Ativar troca automática | Selecione para habilitar a troca automática de credencial. |
| Habilitar troca via agente | Selecione para habilitar recurso que permite usuários alterarem suas senhas por meio de um processo automatizado e facilitado por um agente de software. |
| Plugin de troca | Selecione o plugin utilizado para conectar e executar a troca no dispositivo. Este plugin está vinculado a vários protocolos de conexão, não há validação de que o dispositivo está com sua conectividade ativa. |
| Template de troca | Selecione o template que será executado pelo plugin executor. Na solução PAM senhasegura, o usuário tem acesso a uma ampla variedade de templates desenvolvidos e regularmente atualizados. |

### Configuração de autenticação

| Campo | Descrição |
| --- | --- |
| Utilizar a própria credencial para conectar | Selecione para utilizar a própria credencial para conectar com o dispositivo e realizar a troca de senha. |
| Credencial de autenticação | Caso não utilize a própria credencial para alterar a senha automatizada, selecione qual credencial será utilizada para conectar ao dispositivo. |

É possível utilizar uma credencial para iniciar sessões no dispositivo e outra que já esteja cadastrada para realizar a alteração de senha.

### Configuração da credencial de reconciliação

| Campo | Descrição |
| --- | --- |
| Situação | Habilita a reconciliação de credenciais. Marque **Ativo** ou **Inativo** para definir a situação da credencial. |
| Execução automática | Habilita a reconciliação automatizada de senhas para credenciais. Marque **Ativa** ou **Inativa**. |
| Credencial de reconciliação | Credencial de reconciliação |
| Plugin de reconciliação | Plugin de reconciliação. |
| Template de reconciliação | Template de reconciliação. |

Para entender mais, acesse credenciais de reconciliação

## Configurações da sessão

| Campo | Descrição |
| --- | --- |
| Conectividade | Selecione quais protocolos a credencial pode utilizar. Apenas as conectividades selecionadas estarão disponíveis para iniciar uma sessão. |

### Configuração de aplicativo remoto

| Campo | Descrição |
| --- | --- |
| Restringir o acesso apenas para aplicativo remoto | Selecione essa opção para utilizar a credencial apenas em sessões proxy RemoteApp. Essa opção impossibilita utilizar uma sessão de proxy que forneça a área de trabalho ou terminal do dispositivo, pois não impede a disponibilização da senha para o usuário. |
| Macro de automação (RemoteApp) | Adicione as macros RemoteApp vinculadas à credencial e disponíveis para usuários proxy. |
| Utilizar a própria credencial para conectar | Indique se a mesma credencial será utilizada para autenticar o dispositivo alvo e o RemoteApp. |
| Credencial de autenticação | Caso não utilize a credencial do RemoteApp, indique qual credencial será utilizada para a etapa de autenticação. |
| Dispositivo de autenticação | Selecione o dispositivo onde a credencial será autenticada e a macro rodada. Caso preenchido, o dispositivo registrado na aba Informações será ignorado. |

## Configurações adicionais

| Campo | Descrição |
| --- | --- |
| Identificador (para webservice) | Adicione identificadores para a credencial acionada via A2A web services. |
| Usuário dono da credencial | Selecione o usuário dono da credencial. Este usuário proprietário sempre terá acesso à credencial. |
| Caminho no servidor | Direção para o arquivo que armazena a credencial. |
| Secret key (TOTP) | O TOTP usa uma chave secreta para gerar senhas temporárias para autenticação. |
| Criticidade | Defina a criticidade da credencial em Baixa, Média ou Alta. |
| Campos adicionais para autenticação | Acrescente as informações adicionais necessárias para concluir as etapas de autenticação. |
| Observações | Adicione notas gerais, se necessário. |

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).