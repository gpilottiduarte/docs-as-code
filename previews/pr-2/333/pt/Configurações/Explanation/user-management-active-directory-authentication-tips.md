Este artigo descreve alguns cenários específicos que podem ocorrer, junto com explicações de como o senhasegura se comporta nesses casos.

## Consultar o DNS para obter o endereço LDAP

Quando o senhasegura é configurado para consultar o DNS e obter o endereço LDAP que está sendo balanceado pelo load balancer, os usuários podem encontrar dificuldades para fazer login se o servidor DNS estiver indisponível. Em algumas situações, um membro do cluster LDAP pode ficar inacessível para consulta, e o balanceador de carga ainda não detectou essa interrupção. Isso pode levar a tentativas intermitentes de autenticação para o usuário.

Para evitar essa situação, é recomendado reduzir as dependências do DNS e do balanceador de carga, registrando diretamente no senhasegura todos os membros LDAP com seus respectivos endereços IP. Dessa forma, o senhasegura será responsável por gerenciar a sequência de consultas e, caso um membro não responda, o senhasegura passará para o próximo servidor disponível.

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%2860%29.png)  
Diagrama de funcionamento da plataforma senhasegura no cenário de consulta ao DNS 



---

## Realizar conexão offline entre o senhasegura e o provedor

Quando o senhasegura é configurado para realizar conexão offline com o provedor de autenticação, é recomendado configurar o senhasegura para permitir que usuários confiáveis possam realizar autenticação localmente. O administrador pode realizar esse procedimento individualmente para cada usuário. Antes de prosseguir, é importante verificar a ordem dos servidores para garantir que essa configuração afete o funcionamento de outros aplicativos.

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%2861%29.png)  
Diagrama de funcionamento da plataforma senhasegura no cenário de autenticação local 



---

## Integrar autenticação SSO Azure e provisionamento de usuários via AD local

Quando o senhasegura é configurado para integrar a autenticação SSO Azure e o provisionamento de usuários via AD local (também conectado ao Azure), pode surgir a necessidade de efetuar o login localmente. É recomendado realizar o login local via autenticação com o AD, porque pode ocorrer a indisponibilidade de login via SSO da Azure.

É importante manter a configuração correta de dois campos do formulário Servidor LDAP após selecionar o provedor desejado:



| **Formulário da conta** | Selecionar a opção **Principal** para pesquisar o usuário no LDAP e validar a autenticação, ignorando outros campos. |
| --- | --- |
| **Formato do filtro de conta** | Query LDAP utilizada para consultar objetos, validar sua existência e posteriormente autenticar usuários.Caso deixada em branco, há duas possibilidades de query padrão:* **(\&(objectClass\=user)(sAMAccountName\=%s))** se o parâmetro 'Bind requer DN?' estiver desabilitado. * **(\&(objectClass\=posixAccount)(uid\=%s))** se o parâmetro 'Bind requer DN?' estiver habilitado.  A variável %s será substituída pelo username informado durante a autenticação ou teste de autenticação. O username é tratado para não suportar caracteres especiais. |

  


