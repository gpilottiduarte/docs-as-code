## Instalação

### **1004: Invalid credential**

**Problema:**a chave assimétrica da workstation não existe no servidor senhasegura.

**Solução:** é necessário refazer o registro da workstation. Consulte a seção [Gere uma licença de uso](https://docs.senhasegura.io/v3-33/docs/pt/how-to-install-go-windows-agent-1) do artigo de instalação.



---

### **2028: The workstation version is prohibited**

**Problema:**a versão instalada na workstation foi desaprovada pelo administrador do **GO Endpoint Manager for Windows**. Uma vez que a versão é proibida, não poderá ser utilizada. 

**Solução:** obtenha uma nova versão no [PAM Solution](https://suporte.senhasegura.com.br/en/support/solutions/articles/22000270150-go-endpoint-manager-for-windows-pedm-) e refaça a [instalação](https://docs.senhasegura.io/v3-33/docs/pt/installation).



---

## Workstation

### **1005: Unregistered Workstation**

**Problema:**não há registro daworkstation na plataforma senhasegura.

**Solução:** refaça a instalação.



---

### **1002: Registration of pending approval Workstation**

**Problema:**a workstation está pendente de aprovação no cadastro de workstations.

**Solução:** é necessário aprovar a workstation.Consulte a seção [Aprovar workstation manualmente](https://docs.senhasegura.io/v3-33/docs/pt/go-endpoint-manager-how-to-authorize-or-inactivate-a-workstation) no artigo de instalação. Se a autoaprovação estiver habilitada, o próprio usuário poderá aprovar a workstation.



---

### **1008: Certificate inactive**

**Problema:**a workstation foi inativada pelo administrador no cadastro de workstations em algum momento.

**Solução:** é necessário aprovar a workstation. Consulte a seção [Aprovar workstation manualmente](https://docs.senhasegura.io/v3-33/docs/pt/go-endpoint-manager-how-to-authorize-or-inactivate-a-workstation) no artigo de instalação. 



---

## **Usuário**

### **1013: Local user does not exist on server**

**Problema:** o username na workstation do usuário não corresponde a nenhum username cadastrado na plataforma senhasegura.

**Solução**: é preciso criar um usuário na plataforma senhasegura com o mesmo username da workstation. Veja o artigo [Criar um usuário](/v3-33/docs/pt/user-management-add-system-administrator), no módulo de **Administração** senhasegura. 



---

### **1014: User pending approval location**

**Problema:**o usuário está pendente de aprovação no cadastro de usuários. 

**Solução:** é necessário aprovar o usuário**.**Consulte a seção [Aprovar usuário manualmente](https://docs.senhasegura.io/v3-33/docs/pt/go-endpoint-manager-how-to-authorize-or-revoke-a-user) do artigo de instalação. Se a autoaprovação estiver habilitada, o usuário não precisa de aprovação. 



---

### **1011: User inactive location**

**Problema**: o usuário foi inativado pelo administrador no cadastro de usuários em algum momento.

**Solução:** é necessário aprovar o usuário**.**Consulte a seção [Aprovar usuário manualmente](https://docs.senhasegura.io/v3-33/docs/pt/go-endpoint-manager-how-to-authorize-or-revoke-a-user) do artigo de instalação.   



---

## Logs do GO desapareceram após a atualização da plataforma senhasegura.

Logs anteriores a atualização da versão 3\.27 não são apresentados em**GO Endpoint Manager ➔ Relatórios ➔ Windows ➔ Eventos**. Você deve adicionar esta URL no caminho do browser para acessar os logs antigos: /flow/coof/certificado/evento/report

Exemplo: <https://cofresenhasegura.com/flow/coof/certificado/evento/report>



---

## Lista de acesso não esta funcionando

Verifique se tem uma regra com o critério **Hash do arquivo**. Caso tenha uma lista de acesso com **Nome do produto, Diretório** e **Hash do arquivo** apenas o **Hash do arquivo** será considerado e todos os outros critérios não. E se for uma lista de acesso com mais de um **Hash do arquivo** eles são considerados com avaliação de uma condição de "OU".

  




---

## Comunidade senhasegura

Para saber mais sobre este assunto veja os tópicos criados sobre [GO Endpoint Manager.](https://community.senhasegura.io/search?q=GO%20Endpoint%20Manager%20tags%3Apt_BR)

Se você ainda precisar de ajuda, pergunte na [senhasegura Community](https://community.senhasegura.io/) e obtenha uma resposta de outros usuários da comunidade e de especialistas do senhasegura.

