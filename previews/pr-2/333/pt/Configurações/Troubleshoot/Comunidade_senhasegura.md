Este tópico contém informações de solução de problemas relacionados aos problemas dos usuários ao tentar se conectar ao senhasegura usando a autenticação do Active Directory.  
Os eventos são registrados em **Configurações ➔ Autenticação ➔ Active Directory**, **Log de falhas** e **Log de sincronização de grupos**. Os administradores podem usar os eventos para ajudar a encontrar erros.

**Cenário**  
O usuário falha ao autenticar usando o Provedor do Active Directory com o erro: **Nome de usuário**ou**senha inválida** ou **Falha na autenticação devido a um erro interno**

**Causa**  
O servidor DNS não pode fornecer o IP correto dos servidores Active Directory Provider.

**Solução**  
É altamente recomendável configurar os provedores para que o senhasegura se conecte diretamente ao Provedor do Active Directory usando seus IPs, o senhasegura gerenciará a sequência de consultas. E se algum membro não responder ao pedido, o próximo servidor será solicitado.



---

## Comunidade senhasegura

Para saber mais sobre este assunto veja os tópicos criados sobre [Active Directory](https://community.senhasegura.io/search?q=active%20directory.).

Se você precisa de ajuda, pergunte na [senhasegura Community](https://community.senhasegura.io/) e obtenha uma resposta de outros usuários da comunidade e especialistas do senhasegura.

