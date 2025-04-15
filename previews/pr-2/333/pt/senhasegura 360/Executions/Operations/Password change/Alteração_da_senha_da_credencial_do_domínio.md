## Alteração da senha da credencial do domínio

Requisitos* Tenha uma credencial de domínio criada
* O modelo de mudança
1. Vá para **Executions ➔ Settings ➔ Templates**, crie um template ou copie o template "AD \- Change User Password".
2. No modelo de execução, selecione o executor **LDAP** e defina *Tipo de execução* como *Alterar senha*
3. Neste exemplo seria alterar a senha do usuário senhaADM, no conteúdo add:TextText
```
# Versão do protocolo
set-option LDAP_OPT_PROTOCOL_VERSION 3
set-option LDAP_OPT_REFERRALS 3

#Executar Bind
bind "cn=[#AUTH_USER#],CN=Usuários,DC=senhasegura,DC=com"

# Localize a entrada do usuário
find "DC=senhasegura,DC=com" (&(objectClass=user)(sAMAccountName=[#USERNAME#])))

# Mudar senha
mod-substituir unicodePwd "u([#NEW_PASSWORD#])"

```

ExemploO **CN\=Users, DC\=senhasegura, DC\=com** no **bind** deve ser substituído pelo DN (nome distinto) onde existe a credencial que executará a alteração.

4. Vá para a credencial que será alterada em **PAM Core ➔ Credentials ➔ All** e clique em editar.
5. Vá para **Guia de configurações de execução** para ativar a alteração automática e selecione o plug\-in alterado para **LDAP** e **Alterar o modelo** para aquele criado nas etapas anteriores.
6. Defina se a alteração será feita por meio da própria credencial ou de outra credencial de usuário do serviço nas **Configurações de autenticação**
7. Agora, sempre que um dos triggers for ativado, a senha desta credencial será alterada.



---

## Alteração da senha do usuário Linux

Requisitos* Tenha uma credencial Linux criada
* O modelo de mudança
1. Vá para **Executions ➔ Settings ➔ Templates**, crie um novo template ou copie o **Change Password**, que será usado neste exemplo
2. No modelo de execução, selecione o plug\-in executor **SSH** e defina **Tipo de execução** como Alterar senha
3. Neste exemplo seria alterar a senha do usuário senhaADM, no conteúdo add:
```
# Definir inglês como idioma padrão
expect-regex "/[$|#|>]/"
exec "exportar LC_ALL=C"

# Limpar sessão sudo
expect-regex "/[$|#|>]/"
exec "sudo -k"

#Executa a alteração de senha
expect-regex "/[$|#|>]/"
exec "sudo passwd -r arquivos [#USERNAME#]"

# Definir nova senha
espere "* senha:"
exec "[#NEW_PASSWORD#]"

# Confirme a nova senha
espere "* senha:"
exec "[#NEW_PASSWORD#]"

# Confirmar alteração de senha
espere "*com sucesso"

# Saída
expect-regex "/[$|#|>]/"
exec "sair"

fim

```
4. Agora vá para a credencial que será alterada em **PAM Core ➔ Credentials ➔ All** e clique em editar
5. Vá para **Guia de configurações de execução** para ativar a alteração automática e selecione o plug\-in alterado para **SSH** e escolha o modelo criado nas etapas anteriores
6. Defina se a alteração será feita por meio da própria credencial ou de outra credencial de usuário do serviço nas **Configurações de autenticação**
7. Agora, sempre que um dos triggers for ativado, a senha desta credencial será alterada
