# Sobre aplicações e autorizações por aplicação

O senhasegura **DevOps Secret Manager (DSM)** oferece às equipes administrativas a capacidade de estabelecer políticas de segregação de acesso para as aplicações, onde cada aplicação pode ser configurada com uma ou várias autorizações, garantindo o acesso seletivo a segredos específicos. Além disso, o DSM automatiza a geração de relatórios com base nas aplicações, simplificando a busca por dados específicos por parte dos auditores.

Outra funcionalidade importante é a capacidade de ter múltiplos perfis de provisionamento dinâmico vinculados a uma única aplicação. Com essa configuração, cada vez que uma solicitação de criação de uma nova autorização é feita, o DSM utiliza esse perfil para gerar credenciais efêmeras nos dispositivos alvo. Isso inclui a geração automática de cloud access keys temporárias na AWS, Azure ou GCP, registrando-as instantaneamente como informações sensíveis.

Ainda, cada aplicação pode ser configurada com um método de autenticação exclusivo, garantindo que outros recursos possam acessar segredos de uma autorização específica de maneira totalmente segura.