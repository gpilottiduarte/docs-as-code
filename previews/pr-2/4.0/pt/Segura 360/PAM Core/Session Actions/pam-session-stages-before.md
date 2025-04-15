# Sobre Ações antes de uma sessão

Este documento fornece informações sobre as ações que podem ser realizadas **antes** de uma sessão. O administrador tem o controle para decidir várias configurações que determinam como o operador fará o login e como será a utilização da sessão.

## Ações possíveis
**Conectividade do dispositivo:** além de ser usado em Dashboards, testes de conectividade, troca automatizada de senha e outros módulos, a conectividade também determina o tipo de sistema de proxy que será usado para chegar ao dispositivo.

**Controle de ativação de credenciais:** a credencial pode ser ativada e inativada sob demanda.

**A política de senha para troca após a sessão:**  a credencial pode ser reciclada após o uso em uma sessão proxy.

**O grupo de acesso e a configuração do workflow:**  o workflow de uso das credenciais em uma sessão de proxy, bem como a possibilidade de uso emergencial, é configurado pelo administrador nos **Grupos de Acesso**.

**Macros e credenciais RemoteApp:** **Macros** e **RemoteApps** podem ser configurados e disponibilizados em certas credenciais.

**Comandos auditados globais e segregados:** Os comandos auditados para sessões SSH podem ser configurados globalmente ou separadamente em **Dispositivo**, **Credencial**, **Grupo de Acesso** ou **Origens**. Os gatilhos de ação podem ser ligados a comandos, e se o comando for executado, a ação é tomada.

**Níveis de segurança por protocolo:** cada protocolo pode ter especificações de versão, nível de segurança e algoritmo de criptografia. O Segura permite a configuração de sistemas de proxies e características específicas do protocolo ao nível global e individual.

**Ignorando erros no certificado:** as conexões RDP normalmente apresentam erros de certificado durante a etapa de conexão. O administrador pode forçar apenas certificados válidos ou ignorar erros de certificado.

**Funcionalidade da sessão:** Durante a sessão o usuário pode realizar algumas ações como transferir texto, um arquivo, pressionar `Ctrl+Alt+Del`, realizar uma elevação automatizada de privilégios, etc. Estas ações podem ser permitidas ou bloqueadas ao nível global ou individual.

**Indexação de textos de entrada e saída:** se a sessão exigir auditoria dos textos digitados e exibidos, você pode configurar se esta auditoria deve ser registrada em nível global ou segregada. Por padrão este recurso está desativado, recomendamos ativá-lo apenas em credenciais e dispositivos que o requeiram.

**Habilitar wallpaper em sessões RDP?:** algumas empresas utilizam papéis de parede personalizados que contêm informações sobre dispositivos, sessões ou políticas de segurança. Por padrão, a transferência de papel de parede durante sessões no **Proxy RDP** é desativada para melhorar o desempenho do protocolo RDP.

**Tipos de terminais Linux e Xterm:** alguns sistemas Linux têm diferenças no uso de terminais que utilizam o formato Linux ou Xterm. Isto é influenciado pelo manuseio de códigos ANSI. É possível segregar a configuração do dispositivo para cada terminal.

**Uso de credenciais pessoais:** alguns dispositivos podem permitir que os usuários do operador utilizem credenciais pessoais que não são gerenciadas pela plataforma. Ainda assim, estas devem estar em conformidade com as outras regras de acesso, controle e auditoria. Sob estes cenários, recomendamos não indexar textos digitados pelo usuário.

**Quantidade de sessões proxy simultâneas:** a política de segurança pode ser alterada para evitar que um usuário execute mais do que uma certa quantidade de sessões de proxy simultaneamente.