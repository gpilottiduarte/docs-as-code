# Como instalar o agente do GO Windows

Neste documento você aprenderá como realizar a instalação do agente do **PEDM GO Endpoint Manager para Windows** em sua estação de trabalho.

## Requisitos

* Dependências e versões Windows descritas no documento [Requisitos](/v3-33/docs/pt/go-endpoint-manager-windows-requirements).
* Permissão administrativa na estação de trabalho do usuário.
* Se houver necessidade de utilizar funções que estão atreladas ao uso de credenciais do PAM, será necessário ter um usuário cadastrado na plataforma senhasegura com o mesmo nome de usuário da estação de trabalho.

:::(info) (Info)
Se você não souber o *username* da estação de trabalho, abra o Prompt de Comando e execute `whoami`. Se for preciso, consulte o artigo [Como criar um usuário](/v3-33/docs/pt/user-management-add-system-administrator). O perfil de acesso mínimo para o usuário deve ser o de **visualização de senhas**.
:::

---

:::(info) (Info)
Você pode instalar o agente do **PEDM GO Endpoint Manager** via linha de comando, utilizando o comando `miexec`. Acesse o [guia de instalação e reinstalação pela linha de comando](/v3-33/docs/pt/go-windows-cmd-installation).
:::

---

## 1. Obter o instalador

:::(error) (Cuidado)
Após a atualização do senhasegura, é obrigatória a atualização do agente, para garantir que ambos estejam na mesma versão.
:::

1. Acesse o [portal de suporte](https://suporte.senhasegura.com.br).
2. Realize o login no site.
3. Encontre a versão do agente do **PEDM GO Windows** que seja compatível com a versão do seu senhasegura.
4. Na coluna do **Link**, clique em **Download** para baixar o instalador do **GO Endpoint Manager para Windows**.

---

## 2. Instalar o agente

1. No Windows, vá até a área de trabalho do usuário.
2. Acesse o **Explorador de arquivos**, localize a pasta compactada do instalador do **PEDM Go Windows**. Exemplo: `3.32.0.15`.
3. Extraia o instalador para o local desejado e execute-o.
4. Selecione o idioma do instalador (não disponível no legacy):
	* Português.
	* Inglês.
6. Clique em **OK.**
7. Clique em **Avançar** para continuar.
8. Leia o **Contrato de licença de usuário final ("EULA")** com atenção. Caso concorde, marque o *checkbox* **Aceito os termos do Contrato de Licença** e clique em **Avançar**.
9. Escolha o tipo de instalação:
	* **Completa**: esta opção instala todas as funcionalidades, são elas **Core, Automation** e **Vault**.  
	* **Personalizada**: escolha quais funcionalidades deseja instalar. A aplicação **Core** é obrigatória.
    	a. **Core**: é composto por **Executar** (**Elevação de privilégio**), **Painel de controle**, **Adaptadores de rede**, **Compartilhamento de rede** e **Desinstalar**.
    	b. **Automation**: é uma funcionalidade que permite o **GO Endpoint Manager para Windows** realizar automações, sendo possível realizar autenticação em aplicativos instalados ou páginas web acessadas diretamente da estação de trabalho. Essa automação pode utilizar os valores de uma credencial do sistema ao qual o usuário possui acesso ou valores fixos definidos na configuração. É possível executar automações do RemoteApp associadas a credenciais disponíveis ao usuário.
    	c. **Vault**: é responsável por habilitar o cache de credenciais, pela visualização e pela cópia das credenciais.
10. Clique em **Avançar**.
11. Na janela que solicita a aprovação, selecione **Sim** para prosseguir.
12. Clique em **Concluir**.

---

## 3. Garantir a comunicação

Após a instalação, é necessário relacionar o agente do **PEDM GO Windows** com o seu servidor do senhasegura, através de um *bootstrap token* e do IP (ou domínio, em casos de DNS configurado) do servidor do senhasegura.

Informe o IP no campo `Enter the backend address` e o *token* no campo `Enter the bootstrap token` ao executar o `senhasegura.go.exe` pela primeira vez. Esse processo só é necessário no primeiro acesso, após a instalação.

Para descobrir qual é o *token* necessário para ativar o agente do **PEDM GO Windows**, acesse as configurações de parâmetros do GO através do caminho **Grid Menu** > **GO Endpoint Manager (New)** > **System Parameters** > **PEDM GO Windows**. O campo com o token é o primeiro parâmetro da página e se parece com `029a5fa8-1121-70a4-a41e-dcv2ab9oiuou`.

:::(error) (Cuidado)
Se houver um balanceador, é preciso garantir que o DNS seja resolvido para o IP correto.
:::
---

## 4. Configurar aprovações

Dependendo de configurações anteriores na plataforma senhasegura ou do compartilhamento da estação de trabalho, é possível que apareçam mensagens no processo de instalação. Essas mensagens indicam a necessidade de aprovação da estação de trabalho ou do usuário. Essas mensagens não são erros, elas fazem parte do processo de instalação. A mensagem mais comum é a 1002.

Para completar a instalação, siga os passos abaixo, se necessário:

1.  [Como autorizar ou revogar um usuário.](/v3-33/docs/pt/go-endpoint-manager-how-to-authorize-or-revoke-a-user)
2.  [Como autorizar ou inativar uma estação de trabalho.](/v3-33/docs/pt/go-endpoint-manager-how-to-authorize-or-inactivate-a-workstation)

### Aprovar usuário e estação de trabalho automaticamente

As aprovações de usuário e *workstation* podem ser automatizadas para evitar o excesso de interações entre a pessoa que está instalando a aplicação e o administrador que deve aprovar os registros na plataforma senhasegura.

Por padrão, o **GO Endpoint Manager para Windows** não vem com a autoaprovação ativada, para deixar a cargo do administrador essa decisão.

:::(error) (Cuidado)
Se a aprovação automática estiver habilitada, qualquer máquina e usuário na rede corporativa com uma licença válida pode operar o GO Endpoint Manager para Windows sem a aprovação do administrador.
:::

Para configurar a aprovação automática, siga os passos:

1. No senhasegura, acesse a página de configuração de parâmetros do sistema, através do caminho: **Grid Menu** > **GO Endpoint Manager** > **Configurações** > **Parâmetros do sistema** > **GO Windows** (para v3.31) ou **PEDM GO Windows** (para v3.32).
2. Habilite os seguintes parâmetros:
	* **Permitir autoaprovação de links de estação de trabalho?**
	* **Permitir autoaprovação de todos os outros links?**
	* **Permitir autoaprovação do primeiro link do usuário?**
4.  Confirme a alteração e clique em **Salvar**.

---

## 5. Cadastrar usuário do GO no PAM do senhasegura

Caso precise que um usuário utilize recursos que necessitam do resgate de sua credencial no senhasegura, é necessário criar este usuário no PAM do senhasegura. Para isso, siga os passos abaixo:

1. No senhasegura, acesse a página de configuração de usuários do **PEDM GO Endpoint Manager para Windows** clicando no **Grid Menu** representado pelos nove quadrados e selecione **GO Endpoint Manager** > **Users**.
2. Selecione o usuário que deseja habilitar o recurso de personificação.
3. Clique no ícone de três pontos verticais, no final da linha onde se encontra o usuário selecionado.
4. Clique na opção **Criar usuário do cofre** para criar este usuário no PAM do senhasegura.

Para mais informações sobre os campos da criação de um usuário no PAM do senhasegura, acesse o [guia de usuários do PAM](https://docs.senhasegura.io/v3-33/docs/pt/user-management-add-system-administrator).

:::(error) (Cuidado)
É obrigatório que o nome do usuário no Windows seja idêntico ao que será cadastrado ao clicar na opção **Criar usuário do cofre**, caso seja criado um usuário no PAM com um nome diferente do nome do usuário no Windows, a aplicação não funcionará da forma esperada.
:::

---

## Próximos passos

* [Troubleshooting](https://docs.senhasegura.io/v3-33/docs/pt/troubleshooting-5).
* [Relatório de workstation](/v3-33/docs/pt/go-endpoint-manager-workstations).
* [Relatório de usuários](/v3-33/docs/pt/go-endpoint-manager-users).
* [Lista de acesso](/v3-33/docs/pt/lista-de-acesso-de-aplicações).

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
