# Como conectar uma conta Oracle Cloud

Neste documento, você aprenderá como conectar um compartimento Oracle Cloud (OCI) ao **Cloud Entitlements**, incluindo todos os usuários e grupos sob o compartimento.

## Requisitos

* Uma conta OCI com permissão para gerar chaves de API.
* Um grupo com políticas contendo as seguintes instruções:
    * `Allow group <group_name> to read users in tenancy`  
    * `Allow group <group_name> to read groups in tenancy`  
    * `Allow group <group_name> to read policies in tenancy`
    
  Para informações sobre como criar um grupo com políticas, acesse [Criando um Grupo](https://docs.oracle.com/pt-br/iaas/Content/Identity/groups/create-groups.htm){target=`_blank`} e [Criando uma Política](https://docs.oracle.com/pt-br/iaas/Content/Identity/policymgmt/managingpolicies_topic-To_create_a_policy.htm){target=`_blank`}.
    
## Gerar uma chave API para um usuário na Oracle Cloud

1. Acesse sua conta Oracle Cloud Infrastructure.  
2. Clique em **Perfil** \> **Meu perfil**.  
3. No menu lateral, clique em **Chaves de API**.  
4. Clique em **Adicionar chave de API**.  
5. Selecione **Gerar par de chaves de API**.  
6. Clique em **Fazer download da chave privada**, e clique em **Adicionar**.  
7. Copie os conteúdos do arquivo de pré-visualização. O arquivo deve ser exibido no seguinte formato:

```
[DEFAULT]
user=<user_ID>
fingerprint=<RSA_fingerprint>
tenancy=<tenancy_ID>
region=<OCI_region>
key_file=<path_to_your_private_keyfile>
```

## Conectar uma conta OCI

1. Acesse a plataforma **Cloud Entitlements**.  
2. No menu lateral, clique em **Configuração** e selecione **Oracle Cloud (OCI)**.  
3. Clique em **\+ Conectar**.  
4. Insira as informações nos campos a seguir de acordo com o arquivo de configuração gerado anteriormente:  
   1. **Nome\***: insira um nome.  
   2. **Usuário\***: insira o valor do campo `user` indicado no arquivo de configuração.  
   3. **Região\***: selecione a região indicada no arquivo de configuração.  
   4. **Impressão digital\***: insira o valor do campo `fingerprint` indicado no arquivo de configuração.  
   5. **ID de compartimento\***: insira o valor do campo `tenancy` indicado no arquivo de configuração.  
   6. **Locação\***: insira o valor do campo `tenancy` indicado no arquivo de configuração.  
   7. **Senha de chave privada**: se criado durante a criação da chave de API, insira a frase de acesso para o arquivo `.pem`.  
   8. **Etiquetas**: insira etiquetas para identificar a organização.  
5. Anexe o arquivo da chave privada.  
6. Clique **Salvar**.

Se conectado com sucesso, seu compartimento OCI aparecerá na lista de contas conectadas. Caso contrário, você deve reiniciar o processo usando outra chave de API no Oracle Cloud. Você não pode conectar um compartimento que já esteja conectado ao **Cloud Entitlements**.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.