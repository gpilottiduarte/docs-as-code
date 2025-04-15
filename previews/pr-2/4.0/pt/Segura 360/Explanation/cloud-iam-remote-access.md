# Acesso remoto

O Acesso remoto do Cloud IAM permite aos usuários iniciar sessões remotas em ambientes em nuvem de forma segura e controlada.
:::(info) (**Info**)
O Cloud IAM grava todas as sessões remotas. Para visualizar as gravações, vá para **PAM Core ➔ Access Control ➔ Remote Sessions**. 
:::

:::(info) (**Info**)
O Acesso remoto do Cloud IAM só está disponível para consoles AWS.
:::

---

## **Cloud console**

Use o Cloud Console para iniciar sessões remotas na AWS utilizando um usuário e senha.

### **Requisitos**

Para utilizar o Cloud console você deve atender aos seguintes requisitos:

* [Criar um usuário na plataforma Segura](https://docs.Segura.io/v4/docs/pt/user-management-add-system-administrator).  
:::(info) (**Info**)
O usuário Segura deve ter um e-mail cadastrado. 
:::  
*  [Criar um usuário na AWS através do Cloud IAM](https://docs.Segura.io/v4/docs/pt/cloud-iam-add-user).  
  Importante  
  Usuários importados da AWS não podem realizar acessos remotos.  
* O usuário deve estar em um [Grupo de acesso](https://docs.Segura.io/v4/docs/pt/cloud-iam-add-access-group) com a permissão **Usuários podem começar sessões** habilitada.

### **Acessar o console da AWS**

Para acessar a AWS remotamente pelo Cloud console, siga os passos:

1. Vá para **Cloud IAM ➔ Acesso remoto ➔ Cloud console**;  
2. Escolha um usuário e clique no ícone **Iniciar Sessão**, localizado na coluna de **Ação**.  

   ---

## **Acesso Just in Time (JIT)**

Use o **Acesso Just In Time (JIT**) para iniciar sessões remotas na AWS.

No acesso JIT, o usuário personifica uma **Função** por uma **Duração** pré definida. 
:::(info) (**Info**)
Quando a duração definida para o JIT Access expira, o usuário é automaticamente desconectado.
:::

### **Requisitos**

Para utilizar o Acesso JIT do Cloud IAM você deve atender aos seguintes requisitos:

*  [Criar um usuário na plataforma Segura](https://docs.Segura.io/v4/docs/pt/user-management-add-system-administrator).   
:::(info) (**Info**)
  O usuário Segura deve ter um e-mail cadastrado.  
:::    
*  [Criar um usuário na AWS através do Cloud IAM](https://docs.Segura.io/v4/docs/pt/cloud-iam-add-user).  
:::(Warning) (**Atenção**)
  Usuários importados da AWS não podem realizar acessos JIT.  
:::    
* O usuário do Cloud IAM deve ter uma [Credencial](https://docs.Segura.io/v4/docs/pt/cloud-iam-add-credentials).  
* O usuário deve estar em um [Grupo de acesso](https://docs.Segura.io/v4/docs/pt/cloud-iam-add-access-group) com a permissão **Usuários podem começar sessões JIT** habilitada.  
* Na AWS, crie a Função que o usuário irá personificar e adicione a **ARN** do usuário as **Relações de confiança da função**. Para saber mais, vá para [Editar a relação de confiança de uma função existente](https://docs.aws.amazon.com/pt_br/directoryservice/latest/admin-guide/edit_trust.html).
:::(Warning) (**Atenção**)
Ao adicionar a ARN do usuário nas Relações de confiança da função, defina o parâmetro **Effect** como **Allow** e o parâmetro **Action** como **Assume role**. 
:::

### **Configurar o JIT Access**
:::(info) (**Info**)
Para realizar um acesso JIT no seu console AWS você deve configurar o acesso JIT no Cloud IAM.
:::

Para configurar o Acesso JIT, siga os passos:

1. Vá para **Cloud IAM ➔ Configurações➔ JIT Access**;  
2. Clique no **ícone de Ações (⁝)** e selecione **Novo**;  
3. Selecione a **Conta** em que você deseja habilitar o acesso JIT;  
4. Selecione **Sim** para **Ativo**;   
5. Na aba **Informações**, adicione uma **Descrição**;  
6. Na aba AWS:  
   1. Selecione **Sim** para **JIT Enabled.**  
   2. Defina a **Duração** máxima da sessão em segundos.  
:::(info) (**Info**)
A duração mínima de uma sessão JIT é de 900 segundos.  
:::    
   3. Defina quais as **Funções** que os usuários dessa conta poderão personificar.  
7. Clique em **Salvar**.

### **Acessar a AWS com o JIT**

Para realizar um Acesso JIT no seu console AWS, siga os passos:

1. Vá para **Cloud IAM ➔ Acesso remoto➔ JIT Access**;  
2. Selecione um usuário e, na coluna de **Ação**, clique no ícone **Iniciar sessão**;  
3. Selecione a **Função**que você deseja personificar. 

   

