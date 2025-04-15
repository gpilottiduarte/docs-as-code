# Cadastrar controle de diretórios e arquivos

:::(Warning) (Cuidado)
O GO Endpoint Manager para Linux não concede permissão a um diretório ou arquivo para     um usuário se o sistema operacional não permitir o acesso.
:::

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. Clique em **⁝** e selecione a opção **Nova regra para usuário.**
4. No formulário **Registro de regras para usuário** na aba **Principal** preencha os campos:
    *     **Nome da política:** escolha um nome que seja facilmente identificável.
    *     **Ativo:** se a opção **Sim** está selecionada, a política é considerada nos dispositivos alvo.
    *     **Diretriz:** selecione um tipo de política. 
5. Na aba **Controle de diretórios e arquivos**, abaixo de **Permissões**, preencha os campos:
*     No campo **Permissão**, selecione o que os usuários podem fazer.
    *     **Execução:** permite executar um arquivo ou acessar um diretório.
    *     **Escrita:** permite editar um arquivo ou modificar o conteúdo de um diretório.
    *     **Leitura:** permite apenas ver e listar os arquivos e subarquivos/subdiretórios.
6. No campo **Diretório ou arquivo**, indique o caminho completo do arquivo ou diretório que deseja controlar.
7. No campo **Usuário**, insira o nome de usuário.
8. Clique em **Adicionar** para incluir a permissão para controle.
9. Se desejar, realize os passos anteriores para adicionar mais arquivos e diretórios para serem controlados.
11. Abaixo de **Regras de bloqueio**, no campo **Permissão** selecione o que os usuários não podem fazer em:
    * **Execução:** não permite executar um arquivo ou acessar um diretório.
    * **Escrita:** não permite editar um arquivo ou modificar o conteúdo de um diretório.
    * **Leitura:** não permite ver e listar os arquivos e subarquivos/subdiretórios.
12. No campo **Diretório ou arquivo**, indique o caminho completo do diretório que deseja que seja controlado.
13. No campo **Usuário**, insira o nome de usuário.
14. Clique em **Adicionar** para incluir a permissão para controle.
15. Se desejar, realize os passos anteriores para adicionar mais arquivos e diretórios para serem controlados.
16. Vá para aba **Usuários.**
17. Selecione **Usuários+.**
18. Marque os usuários que deseja adicionar na segregação.
19. Clique em **Adicionar.**
20. Clique em **Salvar.**