Neste artigo você aprenderá como realizar a instalação do GO Endpoint Manager para Windows Legacy em sua Workstation.



---

## Requisitos

* Dependências e versões Windows descritas no artigo [Requisitos.](/v3-32/docs/pt/go-endpoint-manager-windows-requirements)
* Permissão administrativa na Workstation do usuário.
* Um usuário cadastrado na plataforma senhasegura com o mesmo nome de usuário da workstation.

Info✔ Se você não souber o username da workstation, abra o CMD e execute `whoami`.  
✔ Se for preciso, consulte o artigo [Criar um usuário](/v3-32/docs/pt/user-management-add-system-administrator).✔ O perfil de acesso mínimo para o usuário deve ser o de **visualização de senhas.**

---

## Instruções passo a passo

1. [Obter o instalador.](/v3-32/docs/pt/go-endpoint-manager-windows-install-legacy#passo-1-obter-o-instalador)
2. [Instalar o agente.](/v3-32/docs/pt/go-endpoint-manager-windows-install-legacy#passo-2-instalar-o-agente)
3. [Garantir a comunicação.](/v3-32/docs/pt/go-endpoint-manager-windows-install-legacy#passo-3-garantir-a-comunica%C3%A7%C3%A3o)
4. [Gerar uma licença de uso.](/v3-32/docs/pt/go-endpoint-manager-windows-install-legacy#passo-4-gerar-uma-licen%C3%A7a-de-uso)
5. [Ativar a aplicação.](/v3-32/docs/pt/go-endpoint-manager-windows-install-legacy#passo-5-ativar-a-aplica%C3%A7%C3%A3o)
6. [Configurar aprovações.](/v3-32/docs/pt/go-endpoint-manager-windows-install-legacy#passo-6-configurar-aprova%C3%A7%C3%B5es)

Your title goes hereVocê pode instalar o GO Endpoint Manager para Windows via linha de comando com MSIEXEC  


  




---

## Passo 1: Obter o instalador

1. Acesse o [portal PAM Solution](https://suporte.senhasegura.com.br/pt/support/login).
2. Realize o login no site.
3. Encontre a versão do agente GO Windows que seja compatível com a sua versão da plataforma senhasegura.
4. Na coluna **Link**, clique em **Download** para baixar o instalador do **GO Endpoint Manager para Windows.**

InfoO idioma da versão baixada será o idioma selecionado no PAM Solution.  




---

## Passo 2: Instalar o agente

1. Acesse o **Explorador de arquivos** e clique na pasta de **Download**. Dependendo do local configurado para salvar os downloads, sua pasta pode ter um nome diferente.
2. Extraia os arquivos do instalador obtido.
3. Abra a pasta e clique no pacote do **Windows Installer.**
4. Clique em **Avançar.**
5. Leia o **Contrato de licença de usuário final ("EULA")** com atenção. Após a leitura, caso concorde, marque a caixa de seleção **"Aceito os termos do Contrato de Licença"** e clique em **Avançar.**
6. Na janela que solicita a aprovação selecione Sim para prosseguir com a instalação.
7. Clique em **Concluir.**



---

## Passo 3: Garantir a comunicação

ImportanteDurante o licenciamento, confirme a existência de comunicação da plataforma do senhasegura e o Agente do GO Windows. Antes de ativar o GO Windows, insira a URL cadastrada na plataforma (IP ou DNS) em um navegador e verifique se a mesma abre.CuidadoSe houver um balanceador, é preciso garantir que o DNS seja resolvido para o IP correto.1. Na plataforma senhasegura, no canto superior esquerdo, clique no **Grid Menu**, identificado pelos nove quadrados, e selecione **Orbit Config Manager.**
2. No menu lateral, selecione **C****onfigurações ➔ Aplicação.**
3. Verifique se a URL fornecida no campo **URL da aplicação** corresponde a uma URL que possa ser acessível a todas as workstations que executarão o **GO Endpoint Manager para Windows**.
4. Caso seja necessário alterar, mude o endereço e confirme com o botão **Salvar** no rodapé.

ImportanteVocê deve preencher a**URL da aplicação** com a camada de proteção **HTTPS**. Caso contrário, o servidor ficará indisponível.

---

## Passo 4: Gerar uma licença de uso

1. Na plataforma senhasegura, no canto superior esquerdo, clique no **Grid Menu**, identificado pelos nove quadrados, e selecione **GO Endpoint Manager.**
2. No menu lateral, selecione **Configurações ➔ Instaladores.**
3. No rodapé do lado direito, clique em **Chave de Instalação.**
4. No campo **Cliente**, selecione **PEDM Windows.**
5. Copie o texto da licença de uso gerada no campo abaixo.
6. Você pode optar por fazer o download da licença clicando em **Download.**

O arquivo de licença pode ser utilizado caso você realize uma instalação em lote através do Microsoft Active Directory.



---

## Passo 5: Ativar a aplicação

1. Acesse a área de trabalho da workstation.
2. Clique na aplicação do GO Windows.
3. Cole a chave de licença que você obteve no passo anterior.
4. Clique em **OK.**



---

## Passo 6: Configurar aprovações

Dependendo de configurações anteriores na plataforma senhasegura ou do compartilhamento da workstation, é possível que apareçam mensagens no processo de instalação, indicando a necessidade de aprovação da workstation ou do usuário.

InfoEssas mensagens não são erros, e fazem parte do processo de instalação. A mensagem mais comum é a 1002\.Para completar a instalação, siga os passos abaixo, se necessário:

1. [Como autorizar ou revogar um usuário.](/v3-32/docs/pt/go-endpoint-manager-how-to-authorize-or-revoke-a-user)
2. [Como autorizar ou inativar uma workstation.](/v3-32/docs/pt/go-endpoint-manager-how-to-authorize-or-inactivate-a-workstation)

### Aprovar usuário e workstation automaticamente

As aprovações de usuário e workstation podem ser automatizadas para evitar o excesso de interações entre a pessoa que está instalando o sistema na workstation e o administrador que deve aprovar os registros na plataforma senhasegura.

Por padrão, o GO Endpoint Manager para Windows não vem com a autoaprovação ativada, para deixar a cargo do administrador essa decisão. 

CuidadoSe a aprovação automática estiver ativa, qualquer máquina e usuário que estejam na rede corporativa com uma licença válida tem permissão para operar o GO Endpoint Manager para Windows, sem a dependência da aprovação do administrador.Para configurar a aprovação automática, siga os passos:

1. Na plataforma senhasegura, no canto superior esquerdo, clique no **Grid Menu** e selecione **GO Endpoint Manager.**
2. No menu lateral, selecione **Configurações ➔ Parâmetros ➔ go.**
3. Altere os seguintes parâmetros para **Sim**:
	1. **Permitir auto\-aprovação de links de estação de trabalho?**
	2. **Permitir auto\-aprovação de todos os outros links?**
	3. **Permitir auto\-aprovação do primeiro link do usuário?**
4. Confirme a alteração e clique em **Salvar**.



---

## Próximos passos

* [Relatório de workstation.](/v3-32/docs/pt/go-endpoint-manager-workstations)
* [Relatório de usuários.](/v3-32/docs/pt/go-endpoint-manager-users)
* [Lista de acesso.](/v3-32/docs/pt/go-endpoint-manager-application-access-lists-1-1)



---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura.](https://community.senhasegura.io/)

