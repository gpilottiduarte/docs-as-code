# Upgrade Notes

:::(Warning) (Atenção)
A partir de 19 de agosto de 2024, todas as atualizações utilizarão o novo repositório senhasegura. O repositório antigo não estará mais disponível após esta data.

Caso você esteja utilizando uma versão muito antiga do senhasegura, você precisará realizar a atualização em etapas, passando por cada versão intermediária até alcançar a versão mais recente, conforme descrito em nossa documentação
:::
:::(Warning) (Atenção)
O Proxy 2.0 está em versão Beta. Não recomendamos o uso de versões Beta em ambientes de produção.
:::
:::(Warning) (Cuidado)
Antes de executar a atualização do senhasegura, sempre **execute um snapshot em seu hypervisor** e [realize o backup utilizando o Orbit CLI](https://docs.senhasegura.io/v3-33/docs/pt/orbit-config-manager-running-and-restoring-backup)
:::

:::(Warning) (Cuidado)
Caso esteja utilizando o **senhasegura Arbitrator**, retire-o do cluster antes de atualizar o senhasegura. [Saiba mais em nossa documentação](https://docs.senhasegura.io/v3-33/docs/pt/arbitrator-update).
:::

:::(Warning) (Cuidado)
Caso utilize o Zabbix e a aplicação não esteja funcionando corretamente, se faz necessário a reconfiguração do mesmo. Para mais detalhes, acesse a nossa documentação  [Orbit CLI](https://docs.senhasegura.io/v3-33/docs/pt/orbit-cli-how-to-configure-zabbix-via-orbit-cli).
:::

Apresentamos a versão 3.33 da senhasegura, trazendo uma série de novas funcionalidades e melhorias para nossos produtos. Nesta atualização, focamos em quatro áreas principais: **Framework**, **PAM Core**, **MySafe** e **Domum Remote Access**. Confira os destaques de cada uma:


## Framework
### Atualizações aceleradas com repositórios geograficamente distribuídos 
Agora, os administradores podem configurar repositórios e definir a localidade dos buckets diretamente pela linha de comando. Implementamos uma nova estrutura de mirrors, com repositórios em diversas regiões geográficas, permitindo escolher o repositório mais próximo, reduzindo a latência e acelerando o download dos arquivos de atualização. 

1. Preparamos uma [documentação](/v3-33/docs/pt/installation-how-to-change-senhasegura-to-use-the-new-repository) clara e simplificada para orientar você no passo a passo da atualização dos repositórios;

1. Se você estiver utilizando uma versão antiga do produto, será necessário [atualizar em etapas](/v3-33/docs/pt/how-to-update-senhasegura-in-stages), passando por versões intermediárias até alcançar a versão mais recente.

### Atualização de versão de componentes de aplicação e do sistema operacional 
Na versão 3.33, implementamos uma série de atualizações essenciais nos componentes da aplicação e do sistema operacional. Essas melhorias são cruciais para garantir a máxima segurança e desempenho dos nossos sistemas com novos recursos de segurança, mais estabilidade, melhorias de desempenho e otimizações de armazenamento.

## PAM Core
### Análise e proteção de usuários em tempo real
O Behavior da senhasegura analisa o comportamento dos usuários ativos. Na versão 3.33, introduzimos o [Continuous Identification](/v3-33/docs/pt/user-behavior-continuous-identification), uma funcionalidade que monitora ações em tempo real, identifica atividades suspeitas e solicita verificações adicionais para garantir a autenticidade do usuário. O Continuous Identification é acionado por gatilhos personalizáveis pelo administrador, como tentativas de iniciar sessões fora dos períodos permitidos.
:::(Info) (Info)
O Continuous Identification vem, por padrão, desabilitado.
:::

## MySafe
### Compartilhamento externo de dados com proteção e agilidade
No módulo MySafe, introduzimos o [Compartilhamento Externo (OTS)](/v3-33/docs/pt/mysafe-sharing-center), que permite o compartilhamento temporário de notas, senhas, arquivos e segredos de API com usuários externos à plataforma. Essa solução facilita a colaboração segura e controlada com partes externas, garantindo a integridade dos dados sensíveis armazenados no MySafe.

## Domum
### Classificação e gestão aprimoradas de usuários 
Incorporamos uma atualização significativa no Domum Remote Access com a solução de [separação de usuários](/v3-33/docs/pt/domum-about-domum-user-nomenclature). Esta reestruturação melhora a classificação e gestão de usuários na plataforma, permitindo uma distinção clara entre diferentes tipos de usuários (com acesso completo ou privilégio mínimo) e suas afiliações (funcionários internos ou terceiros/vendedores).

## Novidade extra
### Explore o novo menu do Help Center: mais eficiência e facilidade

Atualizamos o menu do nosso [Help Center](http://docs.senhasegura.io). Fizemos alguns ajustes para aprimorar a usabilidade e a organizar o conteúdo  para uma navegação mais eficiente e intuitiva. Reestruturamos as categorias e opções facilitando o acesso às informações relevantes e melhorando a experiência do usuário, tornando o sistema mais fluido e profissional.
