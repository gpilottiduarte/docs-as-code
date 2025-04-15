# Sobre Ações durante uma sessão

Neste documento, você encontra informações sobre as ações que podem ser realizadas durante uma sessão. 

O usuário operador segue as funcionalidades e ações imediatas já configuradas pelo administrador, feitas antes das sessões. As mesmas fixam os aspectos da sessão, e são irrevogáveis após o início. 

Exemplo: comandos auditados criados para a sessão SSH em andamento não afetam sessões atuais, somente as novas serão impactadas após a mudança.

### Ações possíveis
**Execução de comandos auditados:** comandos registrados previamente são válidos na sessão. Sua execução pelo usuário operador pontua a sessão com o nível de risco do comando, alertando os administradores via mensagens SIEM. Ações pré-configuradas nos comandos podem ser aplicadas, como proibição da execução, interrupção da sessão proxy ou desativação da conta do usuário. 

**Avaliação da transferência de arquivos:** os arquivos transferidos tanto da estação de trabalho do operador para o dispositivo alvo, quanto do dispositivo alvo para a estação de trabalho do operador podem ser avaliados por plugins. 
:::(Info) (**Info**)
A demanda por estes plugins deve ser encaminhada à nossa equipe Comercial.
:::
**Livestream de sessão:** administradores podem visualizar sessões em tempo real sem o conhecimento do operador. Nessa visualização, os administradores podem interromper a interação do operador, que receberá uma notificação da interrupção por um usuário identificado e ficará impossibilitado de iniciar novas sessões até a liberação.
:::(Info) (**Info**)
Pré-visualização e bloqueio ficam registrados nos logs das sessões.
:::
 :::(Warning) (**Cuidado**)
O livestream da sessão não está disponível para outros membros do cluster senhasegura, sendo limitado ao servidor conectado à sessão de proxy. Ainda assim, os registros e vídeos gravados continuam acessíveis a todos os membros do cluster.
:::
**Interrupção da sessão:** o administrador pode interromper uma ou todas as sessões em andamento sem o consentimento dos usuários e sem aviso. Esta ação será registrada nos logs da sessão.

**Elevação do privilégio nas sessões SSH:** durante a sessão SSH o operador do usuário pode realizar a elevação do privilégio através do binário SUDO. Assim, o senhasegura captura a interatividade do usuário e automatiza a autenticação sem exibir a senha de credencial de acesso.
