O Core é a aplicação com mais funcionalidades no GO Endpoint Manager para Windows, e já vem selecionado para instalação por padrão. Com ele, você poderá:

* Executar um aplicativo com ou sem elevação de privilégio.
* Elevar um aplicativo da lista.
* Gerenciar o Painel de Controle do Windows.
* Configurar adaptadores e compartilhamento de rede.
* Acessar pastas privilegiadas.
* Desinstalar aplicativos.
* Realizar acessos Just in time (JIT).
* Executar comandos administrativos.
* Realizar Single Sign\-On (SSO) na plataforma senhasegura.

Ao abrir a aplicação, você verá essa imagem:  
  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1672337075951.png)Tela de abertura do GO Endpoint Manager Core

* À esquerda ficam os menus principais do GO Endpoint Manager.
* No canto superior direito, você encontra:
	+ Os ícones **Acesso ao servidor senhasegura** e[**Modo offline**](/v3-33/docs/pt/go-endpoint-manager-windows-offline-mode)
	+ Os botões [**Just\-in\-Time (JIT)**](/v3-33/docs/pt/go-endpoint-manager-windows-jit-access)e[**GO Shell**](/v3-33/docs/pt/go-endpoint-manager-windows-go-shell)
* Acima do cabeçalho, estão os **campos de filtro** e a **barra de busca**.
* Ao lado dos campos de filtro, está o botão **Atualizar**.



---

## Ative e desative módulos

O GO Endpoint Manager para Windows permite que você deixe os módulos ativos ou desativados. Para configurar, siga os passos.

1. Acesse a plataforma senhasegura.
2. Vá até o menu **GO Endpoint Manager ➔ Configurações ➔ Parâmetros ➔ go Windows.**
3. Na seção **Módulos**, escolha qual módulo quer deixar visível.
4. Marque **Sim** ou **Não**para as opções:
	* **Habilitar aplicações?**
	* **Habilitar o Painel de Controle?**
	* **Habilitar Compartilhamento de Rede?**
	* **Habilitar Interface de Rede?**
	* **Habilitar a Desinstalação?**
	* **Habilitar credenciais?**
5. Para a mudança ocorrer, feche e abra a aplicação.

CuidadoCaso desative as credenciais, não será possível acessar a aplicação Vault. 

---

## Sincronização de políticas ou credenciais

As sincronizações de políticas e credenciais acontecem automaticamente, a cada 15 minutos, contudo é possível performar uma sincronização através da aplicação. Para fazer isso, siga as etapas:  


1. Acesse uma aplicação GO Endpoint Manager (**Core**, **Vault** ou **Automation**).
2. No menu de ícones ocultos do Windows, clique com o botão direito do mouse no ícone do senhasegura.
3. Clique em uma das opções: **sincronizar políticas, sincronizar credenciais**ou **sincronizar grupos locais**para realizar a sincronização.

CuidadoO tempo de sincronização de credenciais pode variar dependendo da quantidade de credenciais sincronizadas.  


### Notificações de sincronização

InfoAo reiniciar uma aplicação, as sincronizações de políticas e credenciais são realizadas automaticamente. 

#### Sincronização de credenciais

**Início**

Sincronizando credenciais. Isto pode levar alguns minutos se não for possível se comunicar com o servidor. Por favor, aguarde.  


**Fim**

Credenciais sincronizadas com sucesso.

  


#### Sincronização de políticas

**Início**

Sincronização de políticas. Isto pode levar alguns minutos se não for possível se comunicar com o servidor. Por favor, aguarde.  


**Fim**

Políticas sincronizadas com sucesso.

  


#### Sincronização de grupos locais

**Início**

Sincronizando grupos locais. Isto pode levar alguns minutos se não houver conexão com o servidor. Por favor, aguarde.  


**Fim**

Usuários e grupos descobertos com sucesso.

InfoA execução da Sincronização de grupos locais respeita os dias e horários de execução configurados nos parâmetros do GO Windows. Veja como configurar em [Configurar verificação de credenciais privilegiadas locais](https://docs.senhasegura.io/v3-33/docs/pt/go-endpoint-manager-windows-agent-vault#configurar-verifica%C3%A7%C3%A3o-de-credenciais-privilegiadas-locais).  


---

## Troca de idioma

A troca de idioma das aplicações pode ser executada após a instalação em uma workstation. Para alterar o idioma, siga as seguintes etapas:

1. Acesse uma aplicação GO Endpoint Manager (**Core**, **Vault** ou **Automation**).
2. No menu de ícones ocultos do Windows, clique com o botão direito do mouse sobre o ícone do senhasegura.
3. Selecione a opção **Mudar idioma****do GO Endpoint Manager.**
4. Selecione o idioma desejado.
5. Reinicie a aplicação.
