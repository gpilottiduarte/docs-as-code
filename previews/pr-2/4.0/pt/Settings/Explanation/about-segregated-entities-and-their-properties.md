# Sobre entidades segregadas e suas propriedades

Todas as telas que um usuário tem acesso para exibir informações de entidades privilegiadas são filtradas pelo seu **Grupo de Acesso**. As ações que podem ser tomadas também afetam essas entidades privilegiadas. Para evitar abusos, o Segura consulta as regras aplicadas ao usuário que se conecta a entidade privilegiada.

Se o usuário possui mais de um grupo de acesso com acesso a informações privilegiadas, o Segura aplica a regra de grupo mais restritiva. Os níveis de restrição são baseados no número de etapas e pessoas que estão cientes da operação:

1. Permite o acesso à informação.  
2. Permitir o acesso exigindo a justificação do requerente.  
3. Permitir o acesso dentro de um intervalo de tempo e um aprovador.