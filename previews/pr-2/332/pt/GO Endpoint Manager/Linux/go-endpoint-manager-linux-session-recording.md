## Requisitos

* Ter um usuário com o mesmo username na plataforma senhasegura.
* O usuário deve estar aprovado em GO Endpoint Manager para Linux.



---

## Gravar sessão

O GO Endpoint Manager para Linux permite que os usuários sejam monitorados por vídeo durante toda a sessão, independentemente do binário executado.

1. Acesse a plataforma senhasegura.
2. Vá para **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. Clique em**⁝**e selecione a opção desejada **(Nova regra geral, Nova regra para usuário, Nova regra por workstation)** para criar uma política.
4. Na aba **Principal**, preencha os campos:
	* **Nome da política**: escolha um nome que seja facilmente identificável.
	* **Ativo:**se a opção **Sim** está selecionada, a política é considerada nos dispositivos alvo.
	* **Diretriz:** selecione **Execução binário.**
5. Na aba **Aplicação**, preencha os campos:
	* **Habilitar auditoria?:**o campo é obrigatório e por padrão vem ativo. Marque como **Sim** para auditoria as ações realizadas.
	* **Habilitar gravação de sessão?:** Marque **Sim** para gravar as sessões dos binários registrados. O início da sessão é vinculado à execução do binário somente após a finalização da execução.
	* **Caminho da aplicação****:** o local do programa no sistema de arquivos. Encontre o caminho do programa usando **which \[digite o comando desejado].**
	* **O caminho é um link simbólico?:** marque se este caminho adicionado é um link para um arquivo ou diretório. Descubra se é um link simbólico digitando **ls \-la \[digite o caminho do comando desejado].**
6. Clique em **Adicionar.**
	* **Permissão:**defina como **Permitir** para gravar as sessões.
	* **Usuário ou grupo:**adicione para quem esta regra vale, usuário ou grupo.
	* **Nome do usuário ou grupo:**preencha com o nome do usuário ou do grupo, conforme o tipo escolhido no campo anterior. Precisa ser o grupo primário do usuário.
7. Clique em **Adicionar.**
8. Clique em **Salvar.**

Abaixo, tem um exemplo de gravação de sessão com a execução do comando ping:


```
user@Workstation:~$ ping -c 4 8.8.8.8
PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=53 time=2.12 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=53 time=1.94 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=53 time=2.05 ms
64 bytes from 8.8.8.8: icmp_seq=4 ttl=53 time=2.20 ms

--- 8.8.8.8 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 1.975/2.034/2.102/0.051 ms

Uploading recorded output data...
OK.

Uploading recorded input data...
OK.

```
  




---

## Visualizar sessão gravada

1. Acesse a plataforma senhasegura.
2. Vá para **PAM Core➔Controle de Acesso➔Sessões Remotas**.
3. Utilize os campos disponíveis para filtrar a gravação.
4. Na coluna de **Ação** você visualiza os **Logs da sessão** e **Vídeo da sessão**.
5. É possível também **Gravar RemoteApp desta sessão**,**Impedir expurgo** e **Configurar auditores**.

  


  


  


