# Cadastrar política de acesso amigável

1. Acesse a plataforma Segura.
2. Acesse o menu **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. Clique em **⁝** e selecione a opção **Nova regra para workstation.**
4. No formulário **Cadastro de regras por workstation** na aba **Principal** preencha os campos:
    * **Nome da política:** escolha um nome que seja facilmente identificável.
    * **Ativo:** se a opção **Sim** está selecionada, a política é considerada nos dispositivos alvo.
    * **Diretriz:** selecione um tipo de política. 
5. Na aba **Aplicação**, preencha os campos:
    * **Habilitar auditoria?:** o campo é obrigatório e por padrão vem ativo. Permite a auditoria de ações realizadas.
    * **Habilitar gravação de sessão?:** se a opção **Sim** está selecionada, ocorre a gravação da sessão dos binários registrados. O início da sessão é vinculado à execução do binário somente após a finalização da execução.
    * **Incluir regra de negação geral?:** se essa opção estiver marcada, nenhum usuário da workstation Linux poderá executar algo que não esteja permitido pela política de acesso. Caso desmarcado, todos os usuários da workstation Linux terão permissão para executar tudo, exceto o que for bloqueado pela regra.
    * **Caminho da aplicação:** o local do programa no sistema de arquivos. Se for um link simbólico preencha com o caminho do link. Encontre o caminho do programa usando **which [digite o comando desejado]**.
    * **O caminho é um link simbólico?:** marque se este caminho adicionado é um link para um arquivo ou diretório. Descubra se é um link simbólico digite **ls -la [digite o caminho do comando desejado]**.
6. Clique em **Adicionar.**
    * **Permissão:** escolha entre permitir ou bloquear, conforme a política que está sendo criada.
    * **Usuário ou grupo:** adicione para quem esta regra vale, usuário ou grupo.
    * **Nome do usuário ou grupo:** preencha com o nome do usuário ou grupo, conforme o tipo escolhido no campo anterior. Precisa ser o grupo primário do usuário.
7. Clique em **Adicionar.**
8. Clique na aba **Workstations.**
9. Selecione **Workstations+.**
10. Marque as workstations que deseja adicionar na segregação.
11. Clique em **Adicionar.**
12. Clique em **Salvar.**

* * *
## Política adicionada ao dispositivo
Para validar que a política foi adicionada ao dispositivo:

1. Acesse o terminal do Linux.
2. Digite o comando:

```shell
cat /sys/kernel/security/caitsith/policy
```