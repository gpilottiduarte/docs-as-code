# Como criar um perfil de credencial

Neste artigo, você encontra um passo a passo sobre como criar um perfil de credencial no módulo **Executions**.

### Requisitos

* Ser o usuário administrador.
***

## Cadastrar perfil

1. Na plataforma senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Executions**.
2. No menu lateral, selecione **Configurações** > **Perfis de credencial**.
3. No canto superior direito, clique no ícone representado pelos três pontos verticais e clique em **+ Novo**.

### Janela pop-up Perfil de execução de Credencial
Preencha as informações nas três abas disponíveis para realizar a criação do perfil.

#### Aba Informações

1. **Nome***: digite o nome do perfil.
2. **Prioridade***: selecione o nível de prioridade.
3. **Ativo***: selecione **Sim** para deixar o perfil ativo.
4. **Troca de senha imediata?***: escolha entre **Sim** ou **Não**.
    :::(warning) (**Cuidado**)
    A troca de senha imediata funciona especificamente para credenciais criadas pelo módulo de API. Credenciais criadas por outros métodos no senhasegura não serão afetadas pela troca de senha imediata.
    :::
5. **Intervalo para primeira troca (em minutos)**: escolha o tempo em minutos de 1 até 1440 minutos.

#### Aba Configurações de execução

1. Na sessão **Configuração da troca de senha da credencial**
    1. **Ativar troca automática**: clique no checkbox para habilitar.
        1. **Plugin**: escolha dentre as opções da lista.
        2. **Template**: escolha dentre as opções da lista.
2. Na sessão **Configuração de status da credencial**
    1. **Gerenciar estado da conta**: clique no checkbox para habilitar.
        1. **Plugin**: escolha dentre as opções da lista.
        2. **Template de ativação**: escolha dentre as opções da lista.
        3. **Plugin**: escolha dentre as opções da lista.
        4. **Template de inativação**: escolha dentre as opções da lista.
3. Na sessão **Configuração de autenticação**
    1. **Utilizar a própria senha para conectar**: clique no checkbox para habilitar.
        1. **Credencial de autenticação**: escolha dentre as opções da lista.
        2. **Username da credencial**: digite o username da credencial.

#### Aba Critérios

1. Na sessão **Aplicar o perfil às senhas**
    1. **Modelo (sep. por vírgula)**: digite o modelo.
    2. **Fabricante***: selecione o fabricante desejado ou todos.
    3. **Tipo de dispositivo***: selecione o dispositivo desejado ou todos.
    4. **Tipo de credencial***: selecione o tipo de credencial desejada ou todos.
2. Clique em **Salvar**.


Após salvar, o sistema apresentará uma mensagem de confirmação: **“Dados salvos com sucesso”**. O perfil estará listado no relatório na tela **Perfis de execução de credencial**.
Os perfis criados valem para as novas credenciais e também para as existentes, desde que se encaixem no perfil cadastrado.

***
### Próximos passos:
[Perfis de execução de credencial](/v3-33/docs/pt/executions-credentials-profiles)

Você ainda tem dúvidas? Entre em contato com a [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.