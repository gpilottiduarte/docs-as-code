O agente GO Endpoint Manager para Windows permite que determinados usuários sejam monitorados por vídeo durante toda sessão.

## Configurar os parâmetros para a gravação

* **Gravar a sessão desses aplicativos**: acesse o **GO Endpoint Manager ➔ Politicas ➔ Windows ➔ Lista de acesso ➔  ⁝  ➔ Nova segregação geral.**

![Captura de tela 2022-11-22 114433.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/Captura%20de%20tela%202022-11-22%20114433.png) 

* **Permitir a gravação de sessão?**: parâmetro global mencionado na configuração do go em **GO Endpoint Manager ➔ Configurações ➔ Parâmetros.**

![Captura de tela 2022-11-22 114810.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/Captura%20de%20tela%202022-11-22%20114810.png)  
 O monitoramento só será realizado quando:

* O parâmetro global ativo e com uma lista de acesso que esteja ativa e relacionada à gravação.
	+ As aplicações que se encaixarem na lista de acesso serão gravadas, inclusive o que é executado por fora do GO Endpoint Manager
* O parâmetro global se estiver ativo e sem uma lista de acesso existente.
	+ Qualquer execução do GO Endpoint Manager será gravada.
* Quando o usuário iniciar um processo JIT, todas suas ações serão auditadas por vídeo e encaminhadas ao servidor senhasegura inclusive uma elevação de RunAs.

InfoParâmetros segregados se aplicam nesse cenário.



---

## Relatório de gravações

Quando um usuário realiza uma elevação de um aplicativo, o GO Endpoint Manager irá gravar um vídeo enquanto o aplicativo estiver em execução. Assim que a execução é finalizada, o vídeo é encaminhado ao servidor do senhasegura, ficando disponível para avaliação.

CuidadoAtravés da ação de registro **Vídeo da sessão**, você pode assistir o vídeo. Porém, esta funcionalidade só estará disponível se o parâmetro **Ativar gravação de sessão**estiver ativo.Para visualizar uma sessão gravada:

1. Acesse a plataforma senhasegura.
2. Acesse o menu **PAM Core ➔ Controle de acesso ➔ Sessões remotas.**
3. No campo **Proxy** filtre por**GO Endpoint Manager.**
4. Clique em **Ação**botão de play para visualizar a gravação.  
  
![Untitled.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/Untitled.png)

InfoOs vídeos aparecem somente depois do serviço reiniciar e finalizar o envio dos vídeos. Esse processo leva 15 minutos.



---

## Para administradores

Administradores desse processo podem verificar as gravações realizadas em um determinado período.

Acesse o **Event Viewer** que possibilita acompanhar o envio de cada um dos vídeos, verifique a pasta `%programdata%\go\recordFiles` que possibilita visualizar quais são os arquivos de vídeos das gravações em andamento e já finalizadas conforme exemplo a seguir:

![image 33.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%20%2833%29.png)



---

## Tipos de gravação

1. Qualquer execução:
	* Aplicações do Core (executar, painel de controle, adaptadores de rede, e desinstaladores).
2. Just\-In\-Time:
	* Toda a sessão é gravada até o logoff do usuário, ou até o usuário cancelar o just\-in\-time.
3. Automações:
	* Todas as automações realizadas no processo.

ImportanteAs ações realizadas em Network Adapters e saque de credenciais não são gravadas.