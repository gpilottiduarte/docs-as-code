Você pode atualizar o O GO Endpoint Manager para Windows a partir da própria plataforma senhasegura. A verificação de nova versão é realizada toda vez que uma aplicação é iniciada na workstation. 



---

## Configurar a atualização automática

### Passo (1/4\) — Obtenha o instalador

1. Acesse o [PAM Solution](https://suporte.senhasegura.com.br/en/support/solutions/articles/22000270150-go-endpoint-manager-for-windows-pedm-).
2. Selecione a versão do agente compatível com sua versão da plataforma senhasegura.
3. Baixe o instalador com a nova versão do**GO Endpoint Manager para Windows**.

### Passo (2/4\) — Cadastre o instalador para atualização

1. Vá até a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager ➔ Configurações ➔ Instaladores.**
3. Clique em **(****⁝)**e escolha a opção**\+Novo.**
4. Selecione o arquivo MSI oficial do **GO Endpoint Manager para Windows** no campo **Arquivo de instalação.**
5. Clique em **Sa****lvar.**

### Passo (3/4\) — Aprovar um instalador

O processo de aprovar o instalador define que você está ciente das mudanças, das funcionalidades e dos impactos que a nova versão trará ao seu negócio.

1. Na plataforma senhasegura, acesse o menu **GO Endpoint Manager ➔ Configurações ➔ Instaladores.**
2. Clique em **(****⁝)**e escolha a opção **Aprovar instalação.**

CuidadoA aprovação de uma versão não a disponibiliza automaticamente para atualização. Será preciso cadastrar um agendamento para completar o processo.  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1666893983837.png)Relatório de atualização* Além da aprovação, os registros permitem que você reprove uma versão do **GO Endpoint Manager para Windows**.
* Uma versão reprovada impedirá seu uso se ela já estiver instalada em alguma estação de trabalho.
* Após a proibição, o usuário será alertado com o código 2028\.

ImportanteProibir uma versão irá desabilitá\-la completamente. Você não poderá reverter está ação.### Passo (4/4\) — Cadastrar uma atualização

1. Na plataforma senhasegura, acesse o menu **GO Endpoint Manager ➔ Relatórios ➔ Atualizações.**
2. Clique em **(****⁝)**e escolha a opção**\+Novo.**
3. Preencha os campos do formulário **Cadastro de atualização.**
4. Na aba **Critérios**:
	* Defina se a atualização será obrigatória ou não.Cuidado
		+ **Atualizações****não obrigatórias** permitem que o usuário faça a atualização a qualquer momento.
		+ **Atualizações****obrigatórias****com data posterior** permitem que o usuário faça a atualização até a data estabelecida.
		+ **A****tualizações obrigatórias com data anterior** acontecem automaticamente ao abrir a aplicação.
	* Defina se haverá uma **data/hora** limite de instalação. Este campo é utilizado apenas para atualização obrigatória.
	* Escolha um instalador cadastrado e aprovado.
	* Após a atualização é necessário preencher uma nova [chave de instalação](https://docs.senhasegura.io/docs/pt/go-endpoint-manager-windows-install-1).
5. Na aba **W****orkstations**:
	* Adicione as workstations que você quer cadastrar.
	* Clique em **Salvar**.

 

InfoApós a criação do agendamento, um alerta de atualização aparecerá quando o usuário iniciar o aplicativo GO Endpoint Manager caso a versão adicionada na estação de trabalho seja diferente da versão na plataforma senhasegura.

 



---

## Eventos da atualização

Para visualizar os eventos da atualização em andamento e registros dos logs do senhasegura, acesse **GO Endpoint Manager ➔ Relatórios ➔  Windows ➔ Eventos** e filtre **Evento**por**Atualização.**

 

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1666894454265.png)Atualização no relatório de eventos 

---

## Leia mais

* [Instalar agente](https://docs.senhasegura.io/docs/pt/go-endpoint-manager-windows-install-1)
* [Telas comuns](https://docs.senhasegura.io/v3-32/docs/pt/general-information-graphical-user-interface?#telas-comuns)
