## Requisitos

* Dependências e versões do Linux descritas na página[Primeiros passos.](https://docs.senhasegura.io/v3-32/docs/go-endpoint-manager-linux-getting-started)
* Permissão administrativa na workstation do usuário.
* Os usuários devem ter um usuário com o mesmo username na plataforma senhasegura.
* Ao instalar o GO Endpoint Manager for Linux, é necessário reiniciar a máquina.

Info✔  Se for preciso, consulte o artigo [Criar um usuário.](/v3-32/docs/pt/user-management-add-system-administrator)



---

## Instalar

Depois de atender a todos os requisitos necessários, você pode iniciar a instalação.

### Passo (1/7\) \- Obter o instalador

1. Acesse o portal [PAM Solution.](https://suporte.senhasegura.com.br/en/support/solutions/articles/22000270153-go-endpoint-manager-for-linux-pedm-)
2. Selecione a versão do agente compatível com sua versão da plataforma senhasegura.
3. Baixe o agente compatível com seu sistema operacional.

CuidadoSe você quiser usar a solução em outro sistema operacional baseado em Linux indisponível, entre em contato com a equipe de suporte para receber instruções específicas para cada sistema.

### Passo (2/7\) \- Validar a URL

1. Acesse a plataforma senhasegura.
2. Vá até **Orbit Config Manager➔Configurações➔Aplicação.**
3. Preencha o campo URL do aplicativo com a URL do servidor senhasegura. **Exemplo:**https://senhasegura.mycompany

### Passo (3/7\) \- Iniciar a instalação

1. Acesse sua máquina Linux.
2. Execute o comando a seguir para instalar o GO Endpoint Manager para Linux.


```
root@debian: sudo /bin/bash secpack-installer-3.28.0-0_distro.run
$ Verifying archive integrity... 100% MD5 checksums are 0K. All good. 
$ Uncompressing senhasegura security package 100% 
$ Verifying archive integrity... 100% MD5 checksums are 0K. All good. 
$ Uncompressing caitsith-installer 100% 
$ Uninstalling previous version of kernel module... 0K 
$ Building and installing kernel module.. .OK 
$ Installing caitsith—tools... 0K $ Installing debian packages... 
$ Packages installed successfully! 
$ senhasegura security pack v3.28.0—5 
$ Enter the license code:
```
### Passo (4/7\) \- Gerar chave de instalação

1. Acesse a plataforma senhasegura.
2. Vá até **GO Endpoint Manager➔Configurações➔Instaladores.**
3. Clique no botão azul de rodapé **Chave de Instalação.**
4. No campo Cliente, selecione **PEDM Linux.**
5. Copie o texto da licença de uso gerada no campo**Chave de instalação.**
6. Você pode optar por fazer o download da licença clicando em **Download.**

### Passo (5/7\) \- Ativar o GO Endpoint Manager

1. Acesse sua máquina Linux.
2. Após o passo Iniciar a instalação.
3. Insira a chave copiada quando **“Digite o código de licença:"**for exibida.
4. Clique em **Enter.**
5. Após inserir a chave você deverá ver esta mensagem**"Instalação concluída!".**

### Passo (6/7\) \- Aprovar workstation para instalação

1. Acesse a plataforma senhasegura.
2. Vá para **GO Endpoint Manager➔Geral➔Workstations.**
3. Encontre a Workstation em que está instalando o agente.
4. Vá até à coluna de ação**⁝**
5. Clique na opção **Autorizar.**
6. Digite o seguinte comando no Linux, você deverá ver esta mensagem:


```
root@debian: sudo secpack-register
senhasegura security pack v3.28.0-0
Workstation já registrada!
```
### Passo (7/7\) \- Aprovar usuário para instalação

1. Acesse a plataforma senhasegura.
2. Vá para **GO Endpoint Manager➔Geral➔Usuários.**
3. Encontre o usuário relacionado a workstation em que o agente está instalado.
4. Vá até à coluna de ação**⁝**
5. Clique na opção **Autorizar.**
6. Clique em **Sim** para autorizar.
7. Na tela **Autorizar uso de usuário local** você pode definir uma **Data de expiração**.(campo não obrigatório)
8. Clique em **Salvar.**



---

## Artigos relacionados

Saiba mais sobre o GO Endpoint Manager para Linux:  


* [Introdução](https://docs.senhasegura.io/v3-32/docs/pt/go-endpoint-manager-linux-introduction)
* [Primeiros passos](https://docs.senhasegura.io/v3-32/docs/pt/go-endpoint-manager-linux-getting-started)
* [Nova regra geral](https://docs.senhasegura.io/v3-32/docs/pt/go-endpoint-manager-linux-policies-general)



---

## Troubleshooting

Se você ainda tem dúvidas, tente os seguintes artigos:

* [Troubleshooting](https://docs.senhasegura.io/v3-32/docs/pt/troubleshooting-5)

Ainda não conseguiu a resposta para a sua pergunta? Envie\-a para a nossa [senhasegura Community.](https://community.senhasegura.io/)

