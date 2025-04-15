# Casos de uso

## Geral

### Caso 1: Esta política não permite ninguém, exceto o “user”, de executar o comando "top"

1. Acesse a plataforma senhasegura.
2. Vá para **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. No canto superior direito clique em **⁝** e escolha **Nova regra geral.**
4. No formulário **Cadastro de política de acesso**, na aba **Principal**, preencha os campos:
    * **Nome da política:** escolha um nome que seja facilmente identificável.
    * **Ativo:** se a opção **Sim** está selecionada, a política é considerada nos dispositivos alvo.
    * **Diretriz:** selecione a opção **Executar binário.**
    * **Verificador:** preencha com **path="/usr/bin/top"**
    * **Habilitar auditoria?:** marque como **Sim** se deseja auditar a execução das regras cadastradas.
    * **Incluir regra de negação geral?:** marque esta opção para que nenhum usuário da workstation Linux possa executar algo que não esteja permitido pela política de acesso.
    * **Permitir ou bloquear:** defina como **Permitir.**
    * **Texto da regra:** preencha com **task.uid="user"**
5. Clique em **Adicionar.**
6. Clique em **Salvar.**

### Caso 2: Comando 'ls' só pode ser executado através do sudo

1. Acesse a plataforma senhasegura.
2. Vá para **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. No canto superior direito clique em **⁝** e escolha **Nova regra geral.**
4. No formulário **Cadastro de política de acesso**, na aba **Principal**, preencha os campos:
    * **Nome da política:** escolha um nome que seja facilmente identificável.
    * **Ativo:** se a opção **Sim** está selecionada, a política é considerada nos dispositivos alvo.
    * **Diretriz:** selecione a opção **Executar binário.**
    * **Verificador (caminho ou executor):** preencha com **exec="/usr/bin/ls"**
    * **Habilitar auditoria?:** marque como **Sim** se deseja auditar a execução das regras cadastradas.
    * **Incluir regra de negação geral?:** marque esta opção para que nenhum usuário da workstation Linux possa executar algo que não esteja permitido pela política de acesso.
    * **Permitir ou bloquear:** defina como **Permitir.**
    * **Texto da regra:** adicione o binário executor, **task.exe="/usr/bin/sudo"**
5. Clique em **Adicionar.**
6. Clique em **Salvar.**

### Caso 3: Impedir o usuário “john” executar o comando "df" e permitir todos os outros usuários do mesmo grupo

Esta política permitirá qualquer usuário, exceto o usuário **“john”** no **“grupo”** de executar o comando **"df"** para ver informações sobre espaço disponível nas partições do sistema.

1. Acesse a plataforma senhasegura.
2. Vá para **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. No canto superior direito clique em **⁝** e escolha **Nova regra geral.**
4. No formulário **Cadastro de política de acesso**, na aba **Principal**, preencha os campos:
    * **Nome da política:** escolha um nome que seja facilmente identificável.
    * **Ativo:** se a opção **Sim** está selecionada, a política é considerada nos dispositivos alvo.
    * **Diretriz:** selecione a opção **Executar binário.**
    * **Verificador (caminho ou executor):** preencha com **path="/usr/bin/df"**
    * **Habilitar auditoria?:** marque como **Sim** se deseja auditar a execução das regras cadastradas.
    * **Incluir regra de negação geral?:** deixe esta opção desmarcada para garantir que todos os usuários da workstation Linux tenham permissão para executar tudo, exceto quem for bloqueado pela regra.
    * **Permitir ou bloquear:** defina como **Bloquear.**
    * **Texto da regra:** preencha com **task.uid="john"** 
5. Clique em **Adicionar.**
    * **Permitir ou bloquear:** defina como **Permitir.**
    * **Texto da regra:** preencha com **task.gid="grupo"**
6. Clique em **Adicionar.**
7. Clique em **Salvar.**

### Caso 4: Impedir o usuário “john” ler o arquivo e permitir todos os outros usuários do mesmo grupo

Esta política permitirá qualquer usuário no **"grupo"**, exceto o usuário  **"john"** que faz parte do memso grupo, de ler o arquivo

1. Acesse a plataforma senhasegura.
2. Vá para **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. No canto superior direito clique em **⁝** e escolha **Nova regra geral.**
4. No formulário **Cadastro de política de acesso**, na aba **Principal**, preencha os campos:
    * **Nome da política:** escolha um nome que seja facilmente identificável.
    * **Ativo:** se a opção **Sim** está selecionada, a política é considerada nos dispositivos alvo.
    * **Diretriz:** selecione a opção **Ler arquivo.**
    * **Verificador (caminho ou executor):** preencha com **path="/tmp/arquivo"**
    * **Habilitar auditoria?:** marque como **Sim** se deseja auditar a execução das regras cadastradas.
    * **Incluir regra de negação geral?:** deixe esta opção desmarcada para garantir que todos os usuários da workstation Linux tenham permissão para executar tudo, exceto quem for bloqueado pela regra.
    * **Permitir ou bloquear:** preencha com defina como **Bloquear.**
    * **Texto da regra:** task.uid=”john”  
5. Clique em **Adicionar.**
    * **Permitir ou bloquear:** defina como **Permitir.**
    * **Texto da regra:** preencha com **task.gid="grupo"**
6. Clique em **Adicionar.**
7. Clique em **Salvar.**


* * *

## Usuários
### Caso 1: Impedir os usuários “bob” e "alice" de executar o comando "top" e permitir todos os outros usuários do mesmo grupo

1. Acesse a plataforma senhasegura.
2. Vá para **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. No canto superior direito clique em **⁝** e escolha **Nova regra geral.**
4. No formulário **Cadastro de política de acesso**, na aba **Principal**, preencha os campos:
    * **Nome da política:** escolha um nome que seja facilmente identificável.
    * **Ativo:** se a opção **Sim** está selecionada, a política é considerada nos dispositivos alvo.
    * **Diretriz:** selecione a opção **Executar binário.**
    * **Verificador (caminho ou executor):** preencha com **path="/usr/bin/top"**
    * **Habilitar auditoria?:** marque como **Sim** se deseja auditar a execução das regras cadastradas.
    * **Incluir regra de negação geral?:** deixe esta opção desmarcada para garantir que todos os usuários da workstation Linux tenham permissão para executar tudo, exceto quem for bloqueado pela regra.
5. Clique em **Adicionar.**
    * **Permitir ou bloquear:** defina como **Bloquear**
    * **Texto da regra:** preencha com **task.gid=”grupo”**
6. Clique em **Adicionar.**
7. Vá para a aba **Usuários.**
8. Selecione **Usuários+.**
9. Marque os usuários **“bob”** e **"alice"**.
10. Clique em **Adicionar.**
11. Clique em **Salvar.**

* * *

## Workstation
## Caso 1:
