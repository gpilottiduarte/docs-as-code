# Backup

Backup

Neste artigo, você encontrará as opções de backup suportadas pelo Segura.

::: (info) (Info)
Para usuários que utilizam um agente de backup, é recomendável instalar o agente no mesmo servidor que o diretório remoto designado para armazenar os arquivos de backup.
:::

::: (warning) (Importante)
Você receberá um e-mail ou notificação SIEM se o sistema perder o acesso ao diretório de backup remoto.
:::

:::(warning) (Local de Backup de Segredos)

Sempre certifique-se de que os backups sejam salvos em um local diferente para proteger as informações sensíveis e manter a continuidade dos negócios.
Para o Segura com o appliance cripto, os backups não devem ser armazenados no próprio appliance porque:

1. **Ponto Único de Falha**: Se o appliance falhar, você pode perder tanto os dados quanto o backup.
2. **Opções Limitadas de Recuperação**: No caso de um mau funcionamento de hardware ou software, ter backups em um dispositivo externo garante que você tenha múltiplas opções para recuperação de dados.
3. **Melhores Práticas**: Armazene os backups em um local separado e seguro para cumprir com certificações e padrões de proteção de dados e garantir a disponibilidade.

:::

## Opções de Backup
### Backup de segredos (Break the glass)

O backup de segredos criptografa todos os dados confidenciais, permitindo o armazenamento em um dispositivo externo distinto da instância do Segura. O procedimento *Break the glass* destina-se a emergências, concedendo acesso às credenciais apenas por meio de uma chave mestra.

::: (error) (Importante)
Este tipo de backup não é destinado para a recuperação do sistema, mas serve como meio para os clientes recuperarem credenciais caso o Segura fique completamente indisponível.
:::

### Backup do Sistema

O backup do sistema armazena periodicamente informações do sistema Segura, incluindo dados, configurações, software, aplicativos e registros de acesso alinhados com as políticas de segurança do cliente.

::: (warning) (Cuidado)
A recuperação é demorada e exige espaço significativo em disco.
:::

### Backup em vídeo de sessões de proxy

Todas as gravações de vídeo das sessões de proxy do Segura são criptografadas.

::: (info) (Info)
O Segura recomenda alocar um tamanho de backup remoto de pelo menos 150% do tamanho do espaço no diretório  /var do Segura. Por exemplo, se o tamanho do seu `/var` for 10GB no servidor do Segura, é sugerido ter pelo menos 15GB para backup remoto. Isso ajudará no planejamento de futuras gravações com base na frequência de uso.
:::


