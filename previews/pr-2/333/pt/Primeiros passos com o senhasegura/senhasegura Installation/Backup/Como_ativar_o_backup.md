# Como ativar o backup

Neste artigo, você encontra instruções sobre como ativar as [opções de backup](/v3-33/docs/pt/installation-backup-overview) suportadas pelo senhasegura.

::: (error) (Importante)
O backup do sistema é ativado por padrão.
:::

## Como ativar o backup de segredos

### Requisitos 

* É necessário ter concluído a [cerimônia da chave mestra](/v3-33/docs/pt/master-key-ceremony).
:::(Error) (Importante)
Para o backup de senhas e credenciais no senhasegura, é necessário que todas as partes da chave mestra sejam geradas. Cada participante deve guardar a sua parte. Os segredos não serão feitos backup até que esta cerimônia de chave mestra seja finalizada.
:::

Para ativar o backup de segredos, siga estes passos:

1. No canto superior esquerdo da tela, clique no **Grid menu**, identificado pelos nove quadrados, e selecione **Configurações**.
2. Vá para **Backup > Servidores**.
3. No canto superior direito da tela, clique no ícone de três pontos verticais e selecione **+Novo**. Isso abrirá uma janela pop-up.
4. Na nova janela, defina o parâmetro **Habilitado*** como **Sim**.
5. Selecione o **Modo*** e insira o **Caminho diretório***.
6. Clique em **Salvar**.

## Como ativar o backup de arquivos da sessão

Para ativar o backup de arquivos da sessão, siga estes passos:

1. No canto superior esquerdo da tela, clique no **Grid menu**, identificado pelos nove quadrados, e selecione **Orbit Config Manager**. 
2. Vá para **Configurações > Backup**.
3. Defina o parâmetro **Gostaria de ativar também o backup de arquivos da sessão?** como **Sim**.
4. Clique em **Salvar**. 
