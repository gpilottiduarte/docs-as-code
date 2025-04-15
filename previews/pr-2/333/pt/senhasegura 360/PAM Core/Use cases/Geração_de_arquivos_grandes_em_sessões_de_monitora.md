# Geração de arquivos grandes em sessões de monitoramento de CFTV

## Caso de uso: Evitar a geração de arquivos grandes em sessões de monitoramento de CFTV

Neste documento, você encontra as recomendações necessárias para criar uma estratégia para que os arquivos gerados em sessões de monitoramento de CFTV não excedam o tamanho, lotando assim o `/var`.
Sendo assim, para esses casos recomendamos que as sessões acessadas somente para acompanhar as câmeras não sejam gravadas.

### Solução
Para evitar que os arquivos de monitoramento de CFTV lotem o diretório `/var`, crie credenciais segregadas sem gravação de sessão para usuários que apenas monitoram câmeras, enquanto grava apenas as sessões administrativas.

### Requisito

* Usuário senhasegura.

---
Siga os passos abaixo para criar a segregação corretamente:

#### Passo 1: Credencial com dispositivo CFTV

* Criar as credenciais que estarão associadas ao dispositivo CFTV e serão utilizadas pelos usuários do senhasegura.
* Criar uma credencial que estará associada ao dispositivo CFTV mas que será de uso administrativo.

Para saber como criar uma credencial, acesse o documento [Com configurar uma credencial no senhasegura](/v3-33/docs/pt/pam-how-to-set-up-a-credential-in-senhasegura).


#### Passo 2: Criar grupo de acesso para acessar e visualizar as credenciais e dispositivo CFTV

* Criar um grupo de acesso e com permissão de acesso e visualização ao dispositivo, contendo todas as credenciais criadas no passo 1.

Para saber como criar Grupos de acesso, acesse o documento [Como cadastrar um grupo de acesso](/v3-33/docs/pt/pam-session-how-to-add-an-access-group).

#### Passo 3: Segregar por Credencial usuário que só monitora imagem de câmera

* Com as credenciais criadas e inseridas no grupo de acesso, crie um parâmetro segregado para credenciais e inclua todas as credenciais que serão utilizadas somente para monitoramento.
* Neste parâmetro desabilite a opção Habilitar gravação de sessão.

Para saber como criar um parâmetro segregado para credenciais, acesse o documento [Como criar uma nova segregação para credenciais](/v3-33/docs/pt/pam-session-create-segregation-credentials).

Implementar essa prática é essencial para que o espaço de disco não fique sobrecarregado com gravação de sessões que exclusivamente são apenas para monitorar a imagem de câmeras que já são gravadas por outras vias. Gravando apenas a sessão administrativa que terá os privilégios e permissões mais abrangentes.
