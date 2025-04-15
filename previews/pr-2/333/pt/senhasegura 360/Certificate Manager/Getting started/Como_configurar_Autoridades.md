# Como configurar Autoridades

Este artigo explica como configurar a funcionalidade **Autoridades**. Uma Autoridade Certificadora (CA) é uma entidade encarregada de emitir, renovar, revogar e supervisionar certificados digitais. Essas entidades podem ser públicas ou privadas. Cadastrar autoridades confere credibilidade ao processo de gestão de certificados, verificando a autenticidade das interações e trocas de dados entre empresas.

## Criar uma nova autoridade

Para criar uma nova autoridade, siga estes passos:

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelo ícone de nove quadrados e, em seguida, selecione **Certificate Manager**.
2. No menu lateral, selecione **Configurações** e, em seguida, **Autoridades**.
3. No canto superior direito, clique em **Exibir ações** (o ícone dos três pontos verticais).
4. Selecione **Novo**; isso abrirá o formulário **Cadastro de autoridade de certificação**.
5. Selecione uma autoridade.
6. Em **Nome**, preencha com a identificação desejada.
7. Em **Ativo**, mantenha como **Sim**.
8. Preencha os campos de **[Configuração do plugin](/v3-33/docs/pt/certificate-manager-reference-supported-cas)** conforme a autoridade selecionada. 
9. Clique em **Salvar**.

Na página principal de **Autoridades**, a nova autoridade aparecerá listada.
***
## Editar uma autoridade
Para editar uma autoridade, siga estes passos:

1. Na página principal de **Autoridades**, localize a autoridade desejada.
2. Na coluna **Ação** correspondente, clique em **Alterar** (ícone do lápis).
3. Atualize o formulário.
4. Clique em **Salvar** para confirmar as alterações.
:::(Info) (Info)
O ícone da seta em sentido anti-horário atualiza a tela.
:::
***
## Desativar uma autoridade
Para desativar uma autoridade, siga estes passos:

1. Na página principal de **Autoridades**, localize a autoridade que será desativada.
2. Na coluna **Ação** correspondente, clique em **Alterar** (ícone do lápis).
3. Em **Ativo**, defina como **Não**.
4. Clique em **Salvar** para confirmar a desativação.

A autoridade desaparecerá da lista na página principal porque o campo de busca **Ativo** vem definido como **Sim** por padrão. Selecione **Não** para encontrar a autoridade desativada.
* * *
## Buscar uma autoridade
Caso existam muitas autoridades cadastradas, utilize os campos de busca para filtrar as informações.

Para localizar a autoridade desejada, siga estes passos:

1. Na página principal de **Autoridades**, faça uma pesquisa utilizando os campos de busca:
    1. **Código:** o número de identificação da autoridade.
    2. **Plugin:** selecione um plugin no menu suspenso.
    3. **Criado por:** o usuário que criou a autoridade.
    4. **Data de criação:** utilize o calendário para selecionar uma data específica ou para definir uma data inicial e criar um intervalo de tempo.
    5. **até:** utilize o calendário para definir uma data final e criar um intervalo de tempo.
    6. **Alterado por:** o usuário que alterou o formulário de Autoridade.
    7. **Data de alteração:** utilize o calendário para selecionar uma data específica ou para definir uma data inicial e criar um intervalo de tempo.
    8. **até:** utilize o calendário para definir uma data final e criar um intervalo de tempo.
    9. **Ativo:** o status da autoridade no sistema.
2. Clique em **Filtrar** para realizar a busca.
    1. Se necessário, clique em **Limpar** para apagar os campos preenchidos.
:::(Info) (Info)
No canto superior direito, o ícone da lupa exibe ou esconde os campos de buscas.
:::
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).