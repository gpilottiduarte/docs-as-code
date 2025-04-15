# Como criar uma política de acesso de permissão DAC

Neste artigo, você encontra um guia passo a passo sobre como realizar a criação de uma política de acesso do tipo de permissão DAC no Go Linux.

* * *

## Requisitos

* Ser um usuário administrador.

* * *

## Criar a permissão

1. Na plataforma **senhasegura**, no canto superior esquerdo, clique no **Grid Menu ⁝⁝⁝** e selecione **GO Endpoint Manager.**
2. Selecione **Políticas ➔ Linux ➔ Políticas de acesso.**
3. No canto superior direito, clique no ícone representado pelos três pontos verticais ⁝ e selecione **+ Nova regra geral.**
4. Irá abrir a janela **Cadastro de política de acesso.**

#### Na aba Principal preencha as informações:

1. **Nome da política:** nome para identificação da regra.
2. **Ativo:** defina como **Sim.**
3. **Diretriz:** selecione **Executar binário.**
4. **Verificador (path ou executor):** escreva a linha de comando.

`path="/bin/(diretório do app)" path.perm=(número da máscara de execução) path.perm=(grupo de usuário/usuário)`
Ex.: `path="/bin/passwd" path.perm=07777 path.perm=senhasegura.`

:::(Info) (Info)
Os valores do número da máscara de execução você encontra acessando a documentação [Permissão DAC](/v3-33/docs/go-endpoint-manager-linux-dac-permission).
:::

:::(Warning) (Cuidado)
Se caso o administrador não queira conceder acesso a um grupo de usuários e/ou usuário, é preciso colocar o ponto de exclamação ! antes do sinal de igual. Ex.: `path.perm!=senhasegura`. Assim, a regra se aplicará a todos os usuários e/ou grupos, exceto o grupo especificado.
:::

:::(Error) (Importante)
O não preenchimento ou o preenchimento incorreto deste campo pode levar a completa inutilização do dispositivo. Siga a [sintaxe do CaitSith](https://caitsith.osdn.jp/#syntax_list){target="_blank"} para preencher corretamente este campo.
:::

5. **Habilitar auditoria?:** habilita a auditoria de ações da política. O campo é obrigatório e por padrão vem ativo.
6. **Incluir regra de negociação geral?:** permite apenas as regras cadastradas e nega o que não está na regra.
7. **Permitir ou bloquear:** preencha se a política cadastrada permite ou bloqueia o acesso para o usuário ou grupo.
8. **Texto da regra:** preencha com uma regra no formato das políticas no CaitSith.
Ex.: `task.gid=(nome do grupo)` ou `task.uid=(nome do usuário)`

:::(Warning) (Cuidado)
A primeira regra adicionada tem prioridade sobre as regras adicionadas depois. Se você criar uma regra que permite a execução do binário e adicionar outra regra para bloquear a execução do mesmo binário, a primeira regra será considerada e a segunda não.
:::
9. Clique em **Adicionar** a cada regra criada.
:::(Info) (Info)
Cada regra criada ficará relacionada na lista abaixo, para excluir alguma regra clique no ícone de lixeira da regra a ser excluída.
:::
10. Clique em **Salvar.**


O sistema apresenta uma mensagem de confirmação: "Sucesso. Dados salvos com sucesso". A regra criada estará na lista do relatório, presente na tela principal de Políticas de acesso.

* * *

Você ainda tem dúvidas? Entre em contato com a [senhasegura Community.](https://community.senhasegura.io/){target="_blank"}
