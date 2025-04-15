# Tags para templates de execução

Tags são variáveis pré-definidas que podem ser utilizadas em templates Segura ao invés de informações codificadas, permitindo o uso do mesmo template para operações em vários dispositivos.

---

## **Tags PAM Core**

| Tag | Descrição |
| ----- | ----- |
| \[\#USERNAME\#\] | Nome de usuário da credencial que terá sua senha alterada |
| \[\#NEW\_PASSWORD\#\] | A nova senha que você deseja que a credencial use |
| \[\#CURRENT\_PASSWORD\#\] | A senha em uso para a credencial |
| \[\#AUTH\_USER\#\] | Nome do usuário da credencial que será autenticada na estação/sistema/servidor para realizar a alteração |
| \[\#AUTH\_PASSWORD\#\] | Senha da credencial que se autenticará para executar a alteração |
| \[\#AUTH\_DOMAIN\#\] | Domínio da credencial que se autenticará para executar a alteração |
| \[\#ADD\_INFO\#\] | Informações adicionais sobre credenciais |
| \[\#IP\#\] | IP do dispositivo de credencial que terá a senha alterada |
| \[\#HOSTNAME\#\] | O nome do host do dispositivo de credencial que terá a senha alterada |
| \[\#DOMAIN\#\] | O domínio do dispositivo de credencial que terá a senha alterada |
| \[\#SERVER\_PATH\#\] | Caminho do servidor de credenciais que terá a senha alterada |

---

## **Tags DevOps Secret Manager**

### **Tags de aplicação e autorização**

| Tag | Descrição |
| ----- | ----- |
| \[\#APP\_NAME\#\] | Nome do aplicativo |
| \[\#APP\_AUTH\_UNIQUE\_KEY\#\] | Chave única de autorização |
| \[\#APP\_AUTH\_TYPE\#\] | Tipo de autenticação de autorização |
| \[\#APP\_AUTH\_CLIENT\_ID\#\] | ID do cliente OAuth2 |
| \[\#APP\_AUTH\_CLIENT\_SECRET\#\] | Segredo do cliente OAuth2 |
| \[\#APP\_AUTH\_CONSUMER\_KEY\#\] | Chave do consumidor OAuth1 |
| \[\#APP\_AUTH\_CONSUMER\_SECRET\#\] | Segredo do consumidor OAuth1 |
| \[\#APP\_AUTH\_TOKEN\#\] | Token de autenticação OAuth1 |
| \[\#APP\_AUTH\_TOKEN\_SECRET\#\] | Segredo do token OAuth1 |

### **Tags de segredos**

| Tag | Descrição |
| ----- | ----- |
| \[\#SECRET\_NAME\#\] | Nome secreto |
| \[\#SECRET\_IDENTIFIER\#\] | Identificador secreto |
| \[\#SECRET\_VERSION\#\] | Versão secreta |
| \[\#SECRET\_ENGINE\#\] | Nome do mecanismo secreto |
| \[\#SECRET\_EXPIRATION\_DATE\#\] | Data de validade secreta |
| \[\#SECRET\_DATA\#\] | Todos os dados secretos |

### **Tags de dados secretos**

| Tag | Descrição |
| ----- | ----- |
| \[\#ACCESS\_KEY\_ID\#\] | ID da chave de acesso |
| \[\#SECRET\_ACCESS\_KEY\#\] | Chave de acesso secreta |
| \[\#ACCESS\_KEY\_TTL\#\] | Chave de acesso TTL |
| \[\#CREDENTIAL\_HOSTNAME\#\] | Nome do host da credencial |
| \[\#CREDENTIAL\_USERNAME\#\] | Nome de usuário da credencial |
| \[\#CREDENTIAL\_PASSWORD\#\] | Senha da credencial |
| \[\#CREDENTIAL\_ADDITIONAL\_INFORMATION\#\] | Informações adicionais sobre credenciais |
| \[\#CREDENTIAL\_TTL\#\] | Credencial TTL |

