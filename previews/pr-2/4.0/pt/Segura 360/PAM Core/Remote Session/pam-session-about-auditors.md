# Sobre Auditores

No Segura é possível ao término de uma sessão configurar um auditor para aquela sessão em específico, isto é, definir um ou mais usuários, que possuam papel de auditor, para que estes realizem uma auditoria na sessão e seja possível validar o que foi feito durante o acesso.

Nesse tipo de auditorial manual, o administrador ou operador do PAM, com a devida permissão, pode adicionar usuários como auditores diretamente no registro da sessão, na tela de [Sessões remotas]. Com isso, as sessões serão exibidas na tela [Sessões para auditoria] para que os auditores nomeados possam realizar a auditoria.

Outro tipo de auditor possível é o [Auditor padrão], que será um auditor para sessões consideradas suspeitas para que o mesmo possa analisar, de forma mais detalhada os potenciais comportamentos indesejados.

Neste tipo de auditoria automática, existe uma opção nos [Parâmetros do User Behavior] chamado **Enviar sessões de alto risco para auditoria?**, caso esta opção esteja ativada, as sessões que forem consideradas de alto risco, tendo como base os comandos auditados, serão automaticamente enviadas para auditoria.

No entanto, para isso, é necessário que sejam [configurados auditores padrão]. Estes serão são os usuários responsáveis por auditar as sessões de alto risco. Estas sessões também estarão disponíveis na tela [Sessões para auditoria], mas somente visível para os auditores padrão cadastrados previamente.