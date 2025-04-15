# Perfis de provisionamento dinâmico

Utilize os perfis de provisionamento dinâmico para criação de perfis com informações predefinidas e provisionar contas de serviço e credenciais através de chamadas API.
:::(info) (**Info**)
Aplicações que solicitam criação de credenciais e contas de serviço irão obedecer às regras que determinadas no template.
:::

---

## **Criar perfil de provisionamento dinâmico**

Para adicionar um perfil, vá para **Cloud IAM ➔ Cloud IAM ➔ Provisionamento dinâmico ➔ Profiles**, e siga os passos:

1. Nas ações da página, clique na opção **Novo perfil**;  
2. Selecione a **conta** em que deseja criar o perfil;  
3. Preencha o campo **Identifier***,*  
:::(Warning) (**Atenção**)
O campo **Identifier** deve ser único. O sistema não aceita um identificador com um nome já existente.   
:::
4. Selecione os **provedores** em que deseja criar o perfil.

### **AWS**

No perfil que deseja criar, vá para a **aba AWS** e siga os passos:

1. Selecione até 10 **políticas**;
:::(info) (**Info**)
Este limite é definido pela própria AWS;  
:::
 2. Defina o **TTL** (tempo de vida) padrão para excluir automaticamente as contas de serviço.

### **Google Cloud**

No perfil que deseja criar, vá para a **aba Google Cloud** e siga os passos:

1. Selecione o **projeto** em que a conta de serviço deverá ser criada;  
2. Selecione os **papéis** que a conta de serviço deverá receber a nível de **Organização**;  
3. Selecione os **papéis** que esta conta de serviço deverá receber a nível de **Projeto**;  
4. Defina o **TTL** (tempo de vida) padrão para excluir automaticamente as contas de serviço.

---

## **Habilitar perfil de provisionamento dinâmico**

Para habilitar um perfil de provisionamento dinâmico, acesse **DevOps Secret Manager ➔ Aplicações ➔ Aplicações** e siga os passos:

1. No relatório, selecione a aplicação em que deseja habilitar o provisionamento e clique em **Alterar**.  
2. Na aba **Automatic provisioning**, habilite o provisionamento automático de secrets.  
3. No campo **Provisionamento dinâmico Cloud**, selecione o perfil que deverá ser utilizado.  
:::(info) (**Info**)
Você pode selecionar mais de um perfil.  
:::   
4. Para finalizar, clique em **Salvar**.

