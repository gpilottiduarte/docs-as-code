# Multi-tenant

Em arquitetura de software, *multi-tenant* refere-se a uma única instância de software que serve a múltiplos clientes ou *tenants* (inquilinos), onde cada tenant é logicamente separado dos outros. Cada tenant pode ter suas próprias configurações, dados e funcionalidades personalizadas, mas todos compartilham a mesma infraestrutura e instância de aplicação.

## As principais características

### Isolamento de dados

Cada tenant tem seus dados isolados dos outros tenants, evitando que um tenant acesse os dados de outro. O Segura realiza essa segregação na camada de banco de dados para as informações da aplicação e na camada de diretórios para backups de credenciais.

### Gerenciamento de identidade e acesso

Com uma arquitetura *multi-tenant*, temos um controle de acesso robusto, garantindo que somente usuários autorizados em um determinado tenant poderão acessar os dados e funcionalidades deste.

### Criptografia

Ao usar criptografia para proteger dados em repouso e em trânsito, a arquitetura *multi-tenant* garante que os dados específicos de cada tenant serão criptografados com chaves diferentes, reforçando a separação e segurança.

### Configurações de segurança personalizadas

É possível permitir que cada tenant personalize suas próprias configurações de segurança, alinhando-se com diferentes requisitos de conformidade e políticas internas.