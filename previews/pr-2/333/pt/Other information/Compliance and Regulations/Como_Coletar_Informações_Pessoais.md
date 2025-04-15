# Como Coletar Informações Pessoais

A funcionalidade de Relatório de Informações Pessoais permite que os usuários exportem um relatório em PDF que contém todas as suas informações pessoais. Este relatório está em conformidade com as regulamentações LGPD e GDPR e pode ser solicitado pelo usuário a qualquer momento.

As seguintes informações serão exibidas no relatório:

- Nome
- Nome de usuário
- E-mail
- Telefone
- Departamento
- Histórico de acesso

## Como Extrair o Relatório

O relatório pode ser extraído de duas maneiras:

**Como usuário**

1. Para extrair o relatório, siga estes passos:
2. Clique no menu pessoal no canto superior direito.
3. Selecione "Histórico".
4. O relatório estará disponível para download.

**Como administrador**

Para extrair o relatório como administrador, siga estes passos:

1. Faça login no sistema com uma conta de usuário que tenha a função de permissão "Settings.UserManagement.Write".
2. Acesse a tela de **Gerenciamento de Usuários → Usuários**.
3. Clique na ação "Histórico".
4. O relatório estará disponível para download.

## Geração de Log de Informações Pessoais

Para a seção de histórico de acesso do relatório, as seguintes informações serão incluídas para cada acesso:

- Data e hora
- Endereço IP
- País
- Região
- Sistema operacional
- Navegador
- Versão do navegador

Para acessar o relatório que registra todos os downloads do relatório de informações pessoais, siga estes passos:

1. Faça login no sistema com uma conta de usuário que tenha a mesma permissão dos outros no menu "Traçabilidade".
2. Acesse a tela de **Relatórios > Traçabilidade > Download do histórico do usuário**.
3. Procure pelo download específico na lista de downloads.
4. O relatório conterá informações sobre quem baixou o relatório de informações pessoais e cujas informações ele contém.

:::(info) (Nota)
O histórico de acesso também pode ser obtido no relatório `/flow/log/usuario/acesso/report`.
:::

:::(info) (Nota)
Serão geradas notificações no syslog sempre que um relatório for gerado, informando quem o baixou e cujas informações ele contém.
:::