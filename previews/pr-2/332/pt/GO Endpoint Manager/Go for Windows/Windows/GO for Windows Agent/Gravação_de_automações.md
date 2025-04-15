Esta aplicação permite que o GO Endpoint Manager para Windows realize autenticação em aplicativos instalados ou em páginas web acessadas diretamente da workstation do usuário. A automação utiliza a credencial selecionada no GO Endpoint Manager para Windows para preencher usuário e senha.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1678479243997.png)Automation  

* No canto superior esquerdo, está a barra de busca.
* No canto superior direito, está o botão **Atualizar**.
* No centro, aparecem as automações configuradas na aplicação do senhasegura.
	+ **Automação:** nome da automação.
	+ **Tipo:** qual o tipo de execução da automação.
	+ **Credencial Associada:**mostra qual credencial está associada à automação.As automações cadastradas no **RemoteApp** no **PAM Core** são sempre associadas a uma credencial. Se você puder visualizar a credencial, poderá executar a automação. Suponha que você tem parâmetros de autenticação configurados no **RemoteApp**. Nesse caso, as informações da credencial associada executará a automação.
	
	As automações cadastradas no **GO Automation** ficam disponíveis para o usuário através de listas de acesso categorizada como automação. Suponha que você tenha parâmetros de autenticação configurados na automação. Nesse caso, a aplicação Automation irá solicitar que o usuário escolha uma credencial para executar a automação. Se você não tiver nenhum parâmetro de autenticação configurado na automação, não precisará selecionar uma credencial.

 O Automation executará tanto as automações configuradas no módulo GO Endpoint Manager para Windows como as automações configuradas no **RemoteApp** no **PAM Core**. O Automation eleva privilégios quando executa a automação.

InfoA interação do usuário é bloqueada até terminar de ser executada a automação.

---

## **Gravação de automações**

Para gravar a automação cadastrada no GO Endpoint Manager, verifique se a opção de gravação nos parâmetros gerais e na lista de acesso está ativa. Suponha que você marque apenas o parâmetro geral como ativo e a lista de acesso como inativa. Neste caso, o sistema registra apenas a execução da automação RemoteApp. Assim, quatro situações são possíveis:



| Lista de acesso \- Gravar a sessão desses aplicativos? | Parâmetro geral/Parâmetro segregado \- Permitir a gravação de sessão? | Automação |
| --- | --- | --- |
| Ativo | Inativo | Não grava. |
| Ativo | Ativo | Grava. |
| Inativo | Ativo | Grava apenas RemoteApp. |
| Inativo | Inativo | Não grava. |

Para configurar a gravação de sessão veja: [configurar os parâmetros para a gravação](https://docs.senhasegura.io/v3-32/docs/pt/go-endpoint-manager-windows-record#configurar-os-par%C3%A2metros-para-a-grava%C3%A7%C3%A3o)



---

## Máscaras para o RemoteApp no Go Windows

A tabela a seguir apresenta as máscaras suportadas para o RemoteApp no GO Windows durante a execução da automação. Essas máscaras são usadas para substituir informações contidas nas credenciais.



| Tag | Descrição |
| --- | --- |
| \[username] | Utiliza o campo **Nome do usuário** da credencial. |
| \[password] | Utiliza o campo **Senha**da credencial. |
| \[domain] | Utiliza o campo **Domínio** da credencial. |
| \[hostname] | Utiliza o nome do **Dispositivo.** |
| \[host\_ip] | Utiliza o **IP do Dispositivo.** |



---

## Configurar automação na plataforma senhasegura \- GO

AtençãoAs automações não funcionam quando o modo Offline está ativo.### Passo (1/2\) \- Criar uma automação

1. Acesse a plataforma senhasegura.
2. Vá até o menu **GO Endpoint Manager ➔ Geral ➔ Automação**.
3. Crie uma automação clicando em **⁝**e selecione **\+Novo**.
4. Preencha os campos do formulário de **Cadastro de automação**:
	* **Nome:** defina o nome da sua automação.
	* **Tipo:** defina qual o tipo da automação **Autenticação de aplicativos** ou **Autenticação Web**.InfoPara **Autenticação Web** utiliza o navegador padrão escolhido pelo usuário. Mas apenas os navegadores **Google Chrome** e **Mozilla Firefox** são suportados. **Microsoft Edge** e **Microsoft Internet Explorer** não são suportados.
	* **Ativo:** defina se esta automação estará ativa para uso ou não.
	* **Visualizar TAGs:** utilize as TAGs abaixo para construir o sua automação. Preencha no campo **Valor**.
		+ **\[\#USERNAME\#]:** username da credencial.
		+ **\[\#PASSWORD\#]:** senha da credencial.
		+ **\[\#DOMAIN\#]:**domínio da credencial.
		+ **\[\#HOSTNAME\#]:** nome do hostname.
		+ **\[\#HOST\_IP\#]:** IP do hostname.
	* **Caminho do aplicativo:** preencha com o caminho do aplicativo no sistema. Por exemplo, para aplicativos: *C:\\Program Files (x86\)\\Microsoft SQL Server\\110\\Tools\\Binn\\ManagementStudio\\Ssms.exe*, e *%windir%\\system32\\mmc.exe*, etc. Por exemplo, para Web: https://facebook.com, etc.
	* **Tags:** defina **t****ags** para ajudar na busca pela automação.
	* **Script:** é a sequência já programada de ações que compõem a automação. As ações podem ser reorganizadas clicando e arrastando, alterando a ordem de execução. Ao clicar em uma determinada ação, essa será aberta para edição de suas propriedades.
	* **Ações:** você pode automatizar cliques de **Button**, navegar até o **Menu**, e inserir textos com o **Input**. Ao clicar em uma das opções, essa será adicionada como último elemento no **Script**e suas propriedades poderão ser editadas.
		+ **Button:** utilizado quando se deseja realizar um “click” em um elemento que atua como botão. Sua propriedade **label** deve ser preenchido com o texto visível que o define.
		+ **Menu:** caminho do menu da aplicação. Preencha a propriedade **path** com o caminho a automatizar. Separe os níveis com `;`. Ex: `Editar;Preferências;Fonte` irá automatizar o caminho **Editar ➔ Preferências ➔ Fonte.**
		+ **Input:** preencha o campo de texto da aplicação ou site. Preencha a propriedade **Label** com o nome visível ao usuário, que identifica o campo. E preencha **Value** com o valor a ser inserido no campo da aplicação destino.
	* **Propriedades:** preencha com o respectivo nome do campo. Caso necessário, preencha o valor. Você pode salvar ou excluir a ação adicionada.
	* **Descrição:** adicione uma breve descrição do que esta automação faz e para que ela é usada.
5. Clique em **Salvar.**

  




---

### Passo (2/2\) \- Adicionar na lista de acesso

1. Acesse a plataforma senhasegura.
2. Vá até o menu **GO Endpoint Manager ➔ Políticas ➔ Windows ➔ Lista de Acesso**.
3. No menu de ações, escolha entre **Nova segregação geral** ou **Nova segregação para workstation**.
4. Escolha a categoria **Automações**.
5. Preencha os campos formulário de **Lista geral**.
	* **Nome:** defina o nome da lista de acesso.
	* **Status:** defina se esta lista estará ativa ou não.
	* **Gravar a sessão desses aplicativos:** defina se é permitido gravar a sessão enquanto a automação é executada.
6. Na aba **Automações\+** selecione a automação criada.
7. Marque a caixinha de seleção e clique em **Adicionar**.
8. Na aba de **Workflow** defina as configurações de elevação de privilégios.
9. Clique em **Salvar**.



---

## Configurar uma automação na plataforma senhasegura \- PAM/RemoteApp

### Passo (1/2\) \- Criar a automação

1. Acesse a plataforma senhasegura.
2. Vá até o menu **PAM Core ➔ Configurações ➔ Acesso ➔ RemoteApp**.
3. Para criar uma automação clique em **\+Novo**.
4. Preencha os campos no formulário de **Cadastro de RemoteApp**:
	* **Nome:** defina o nome da sua automação.
	* **Tipo:** escolha a opção **Simulação de usuário** para automações do GO Endpoint Manager para Windows.
	* **Tags (separadas por ,)**: defina **Tags** para ajudar na busca pela automação separando cada tag por vírgula.
	* **Ativo**: defina se está automação estará ativa ou não.
	* **Caminho do aplicativo**: preencha o caminho do aplicativo no sistema. Por exemplo: C:\\Program Files (x86\)\\Microsoft SQL Server\\110\\Tools\\Binn\\ManagementStudio\\Ssms.exe.
	* **Parâmetros**: preencha os parâmetros entre aspas duplas. Por exemplo: "\-S \[hostname] \-U \[username] \-P \[password]"
	* **Script:** contém os passos que serão adicionados em **Ações**.
	* **Ações**: você pode adicionar as seguintes ações como **Wait**, **Key**, **KeyPress**, **KeyRelease**, **Text**, **Type**.
	* **Propriedades:** preencha com o respectivo nome do campo. Caso necessário, preencha o valor. Você pode salvar ou excluir a ação adicionada.
	* **Descrição:** adicione uma breve descrição do que está automação faz e para que ela é usada.
5. Clique em **Salvar**.

### Passo (2/2\) \- Criar credencial para adicionar o RemoteApp

1. Acesse a plataforma senhasegura.
2. Registre o [dispositivo](https://docs.senhasegura.io/v3-32/docs/pt/pam-devices-management) onde a automação será executada.
3. Vá até o menu **PAM Core ➔ Todas**.
4. Clique no menu de ações em **\+Novo**.
5. Preencha os campos do formulário **Cadastro da credencial**.
	* **Nome do usuário:** preencha com o username que acessará o dispositivo.
	* **Tipo de senha:** selecione qual o tipo de usuário no sistema, **Usuário do domínio**, **Administrador local**, ou **Usuário Local**.
	* **Domínio:** preencha com o domínio do dispositivo caso tenha um.
	* **Dispositivo:** selecione o dispositivo onde a automação será executada.
	* **Informação Adicional:** adicione outras informações importantes. Por exemplo: o nome do banco de dados.
	* **Situação:** defina se está credencial estará ativa ou não.
	* **Senha:** preencha com a senha com que você acessará o dispositivo.
	* **Tags:** defina **t****ags** para ajudar na busca pela credencial.
6. Vá até a aba **Configurações da sessão**.
7. Clique em **Macro de automação (RemoteApp)\+**.
8. Adicione a automação que você criou.
9. Clique em **Salvar**.



---

## Executar automação

1. Acesse a área de trabalho da workstation.
2. Inicie o aplicativo **Automation**.
3. Selecione a automação que deseja executar.
4. Clique com o botão direito na automação e depois em **Executar**.
5. Selecione a credencial que será utilizada pelo script da automação.
6. Espere a automação ser executada.



---

## Saiba mais

* [Sincronização de Políticas ou Credenciais](/v3-32/docs/pt/go-endpoint-manager-windows-agent-core#sincroniza%C3%A7%C3%A3o-de-pol%C3%ADticas-ou-credenciais)
* [Troca de Idioma](/v3-32/docs/pt/go-endpoint-manager-windows-agent-core#troca-de-idioma)
