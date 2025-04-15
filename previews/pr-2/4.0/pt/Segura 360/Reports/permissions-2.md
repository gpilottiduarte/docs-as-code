# Permissões

Os privilégios concedidos em excesso ou não revogados no momento certo facilitam a ação maliciosa. Usuários privilegiados precisam acessar contas privilegiadas para executar rotinas diárias para realizar manutenção nos sistemas, atualizar e solucionar problemas. No entanto, esses usuários também podem usar indevidamente privilégios para obter acesso não autorizado a informações e causar danos.

Os relatórios mostram os privilégios que estão sendo concedidos aos usuários autorizados e é crucial para uma auditoria. O relatório de Permissões no Segura mostra o que os usuários do sistema podem ver e fazer com o sistema e os ativos armazenados. Acessando o menu **Reports ➔ Permissões ➔ Gestão de usuários**, você verá os seguintes relatórios:

## **Papéis por usuário**

Este relatório mostra todos os papéis que os usuários do sistema Segura estão configurados. Esse documento é importante para entender se os privilégios de cada usuário ainda estão conforme a política de acesso de sua empresa e também se os usuários podem executar ações relacionadas ao seu nível de permissão no sistema conforme as expectativas da empresa e da segurança.

* **Usuário:** Nome do usuário no sistema. 
* **Editar:** Para edição rápida do papel.  
* **Código:** Identificador único da permissão.  
* **Tipo: Qual**o tipo do papel  
  * Built-in  
  * Customizado  
* **Descrição:** Uma prevê descrição do papel.  
* **Papel:** Qual papel o usuário tem acesso.  
* **Descrição:** Uma prevê descrição do papel.  
* **Ativo:** Se o papel está ativo no sistema.
:::(info) (**Info**)
* Verifique quais papéis foram atribuídos para cada usuário.  
* Visualize usuários inativos.  
* Filtre por código, usuário, papel, tipo e status.
:::

## **Permissões por usuários**

Este relatório mostra todos os perfis com os quais os usuários do sistema Segura estão configurados. Esse documento é importante para entender se os privilégios de cada usuário ainda estão conforme a política de acesso da empresa e também se a atribuição de perfis está correta e os usuários certos são rotulados com o perfil adequado conforme o que a empresa espera. O Relatório de perfis de usuário apresenta as seguintes informações:

* **Usuário:** Nome do usuário no sistema. 
* **Editar:** Para edição rápida do papel.  
* **Código:** Identificador único da permissão.  
* **Permissão:** Qual permissão foi atribuída ao usuário.  
* **Papel:** Qual papel o usuário tem acesso.  
* **Módulo:** Qual módulo a permissão pertence.  
* **Tipo:** Ações que as permissões concedem ao usuário  
  * Listar  
  * Escrever  
  * Excluir  
  * Consultar  
  * Ação  
* **Descrição:** Uma breve descrição da permissão  
  * Verificar quais permissões foram concedidas para cada usuário.  
  * Filtrar por código, papel, permissão, módulo e tipo.

## **Permissões por papel**

Este relatório apresenta a composição de permissões que cada papel tem. Desta forma o usuário pode identificar onde uma determinada permissão está sendo aplicada, facilitando a definição de papel a ser aplicada ao usuário.

O relatório apresenta as informações agrupadas pelo papel:

* **Papel:** Nome do papel no sistema. 
* **Editar:** Para edição rápida do papel.  
* **Código:** Identificador único da permissão.  
* **Permissão:** Qual permissão foi atribuída ao usuário.  
* **Módulo:** Módulo que a permissão pertence.  
* **Tipo:** Ações que as permissões concedem ao usuário  
  * Listar  
  * Escrever  
  * Excluir  
  * Consultar  
  * Ação  
* **Descrição:** Uma breve descrição da permissão.

## **Logs de auditoria**

* **Código ID do Papel:** Identificador único da permissão.  
* **Papel:** Nome do papel no sistema.  
* **Usuário:** Nome do usuário que realizou a alteração.  
* **Nome do usuário:** Usarname de quem realizou a alteração.
* **Operação: Qual** operação foi realizada no papel. 
* **Origem:** Qual a origem da alteração do papel.  
* **IP:** Qual IP do usuário que realizou a alteração.  
* **Data/Hora:** Filtre por um determinado período.  
* **Ação: Detalhes**da trilha de auditoria.  
  * Ver histórico das modificações feitas nos papéis.  
  * Você pode identificar qual usuário realizou a modificação quando a realizou, e que mudança foi feita.  
  * Filtre por código, papel, usuário, nome do usuário, operação, origem e período de execução.

## **Permissões de migração**

* Consultar quais papéis foram adicionados, mantidos ou removidos em comparação ao sistema de permissões de versões anteriores do Segura.  
* Filtre por código do usuário, permissão e status.

