Esta aplicação é responsável pela habilitação do cache de credenciais, pela visualização e pela cópia das credenciais. Essas ações são equivalentes ao uso de proxy, visualização ou cópia por meio da interface da web. Todas essas ações serão auditadas e encaminhadas via SIEM.

Ao abrir a aplicação, você verá uma imagem semelhante a essa:

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1672343300606.png)Tela de abertura \- Vault * No canto superior esquerdo, está a barra de busca.
* No canto superior direito, está o botão **Atualizar.**
* Na tabela central, você pode visualizar:
	+ **Usuário:** a credencial padrão pode ser usada para ações de elevação de privilégios dentro e fora do **Vault.**
	+ **Domínio**: qual o nome de domínio do dispositivo.
	+ **Dispositivo:**qual dispositivo está associado a credencial.

InfoSe a credencial padrão não tiver nenhum domínio registrado, o nome da máquina será exibido em seu lugar.

---

## Utilizar uma credencial

Os usuários do **Vault** sempre estarão vinculados à conta usada para fazer login no Windows.

CuidadoO username da workstation deve ser o mesmo do usuário cadastrado na plataforma senhasegura. Se você tem dúvida sobre o username, leia o artigo [Requisitos](https://docs.senhasegura.io/v3-33/docs/pt/go-endpoint-manager-windows-requirements-1).1. Acesse a área de trabalho da workstation.
2. Inicie o **Vault**.
3. Selecione a credencial que deseja utilizar na lista de credenciais.
4. Clique sobre ela com o botão direito do mouse.
5. Escolha a opção **Copiar** ou **Mostrar** para ter acesso à senha.



---

## Utilizar uma credencial em caso de indisponibilidade

Em casos de indisponibilidade da plataforma senhasegura, o Vault armazena as credenciais de usuário e senha localmente de maneira criptografada e guarda as informações da última atualização. Assim o usuário pode visualizar e copiar a senha das credenciais. 

1. Acesse a plataforma do senhasegura.
2. Acesse **GO Endpoint Manager➔Configurações➔Parâmetros➔go Windows.**
3. Em módulos ative a opção**“Habilitar credenciais?”.**
4. Clique em**Salvar.**
5. Na workstation do usuário siga os passos para [utilizar uma credencial](https://docs.senhasegura.io/v3-33/docs/pt/go-endpoint-manager-windows-agent-vault#utilizar-uma-credencial).

CuidadoEstá funcionalidade não atua em conjunto com o modo offline.  




---

## Configurar solicitação de Token para visualizar ou copiar credencial

1. Acesse a plataforma senhasegura.
2. [Configure token MFA OTP.](https://docs.senhasegura.io/v3-33/docs/pt/go-endpoint-manager-windows-token-mfa-otp#configurar-o-token-mfa-otp)
3. Acesse **GO Endpoint Manager➔Configurações➔Parâmetros➔Segurança.**
4. Marque a opção **Forçar Autenticação de multifator para visualizar senha?\*** ou **Forçar autenticação de multifator para iniciar sessão?\*** como **Sim**.
5. Será solicitado que o usuário preencha um token para copiar ou visualizar a credencial.



---

## Configurar verificação de credenciais privilegiadas locais

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager➞Configurações➞Parâmetros➞go Windows.**
3. Vá até a seção de **Relatório.**
4. Marque a opção **Ativar verificação de credenciais privilegiadas locais?.**
5. Defina dias, horários para execução.
6. Clique em **Salvar.**



---

## Saiba mais

* [Sincronização de Políticas ou Credenciais](/v3-33/docs/pt/go-endpoint-manager-windows-agent-core#sincroniza%C3%A7%C3%A3o-de-pol%C3%ADticas-ou-credenciais)
* [Troca de Idioma](/v3-33/docs/pt/go-endpoint-manager-windows-agent-core#troca-de-idioma)
