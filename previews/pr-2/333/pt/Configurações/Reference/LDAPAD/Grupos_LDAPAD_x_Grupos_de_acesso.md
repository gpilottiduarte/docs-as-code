# Grupos LDAP/AD x Grupos de acesso

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Active Directory \> Grupos AD/LDAP x Grupos de acesso.**

## Barra superior

| Item  | Descrição |
| :---- | :---- |
| **Mostrar os filtros** | Representado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário. Atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Novo grupo** | Abre a janela **Grupo LDAP/AD** para cadastro de um novo grupo. |
| **Imprimir relatório** | Representado pelo ícone de impressora. Abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone de folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio. Abre a janela para efetuar o agendamento do relatório. |

## Campos de busca

| Item | Descrição |
| :---- | :---- |
| **Nome** | Nome do grupo no senhasegura conforme o nome que foi cadastrado. |
| **Servidor** | Servidor LDAP/AD. Refere-se ao grupo que foi previamente cadastrado e escolhido. |
| **Grupos de usuários** | Grupo cadastrado pelo usuário no servidor que servirá de ponte com os grupos do senhasegura. |
| **Grupos de acesso (Aprovador)** | Exibe quais são os grupos que estão configurados como aprovador. |
| **Grupos de acesso (Usuário)** | Exibe quais são os grupos que estão configurados como usuário. |
| **Sincronização ativa** | Menu suspenso para filtrar pelo status da sincronização. Os valores podem ser **Todos** para exibir todos os grupos, independentemente do status da sincronização; **Sim** para exibir apenas os grupos com a sincronização ativa e **Não** para exibir todos os grupos com a sincronização não-ativa. |
| **Ativo** | Menu suspenso para filtrar pelo status do grupo. Pode ser **Sim** ou **Não**. |

## Campos do relatório

Na listagem de sincronizações, você tem os seguintes campos:

* **Código**.  
* **Nome.**  
* **Servidor.**  
* **Grupos de usuário.**  
* **Última sincronização:**  
* **Sincronização ativa.**  
* **Grupos de acesso (Aprovador).**  
* **Grupos de acesso (Usuário).**  
* **Ativo.**  
* Na coluna **Ação**, você tem duas opções:  
  * **Alterar grupo**: representado pelo ícone de lápis e papel, abre a janela de **Grupos LDAP/AD** em modo de edição.  
  * Ao clicar no botão representado pelos três pontos verticais, o menu suspenso apresenta três opções:  
    * **Usuários:** abre o formulário de **Usuários sincronizados**.  
    * **Log de sincronização:** abre o formulário de **Logs de sincronização de grupos LDAP/AD**.  
    * **Teste de sincronização:** abre o formulário **Grupo LDAP/AD** para testar a sincronização.

Para a referência sobre as janelas **Usuários**, **Log de sincronização** e **Teste de sincronização**, acesse o documento [Log de sincronização de grupos](/v3-33/docs/pt/group-synchronization-log).