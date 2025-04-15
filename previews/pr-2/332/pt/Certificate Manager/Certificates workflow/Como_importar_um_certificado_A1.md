# Como importar um certificado A1

Este artigo, explica como importar um certificado A1 para o Certificate Manager.

### Requisitos

* Arquivo do certificado.
* Arquivo da chave, caso o certificado tenha a chave.

---
## Importar um certificado
:::(info) (**Tipos de certificados**)
Você pode adicionar manualmente uma variedade de tipos de certificados, incluindo `.p12`, `.pem`, `.cer`, `.der`, `.crt`, `.p7b` e `.pfx` (chave privada incluída, não há necessidade de importar a chave).
:::
Para importar manualmente um certificado, siga estes passos:

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelo ícone de nove quadrados e selecione **Certificate Manager**.
2. No menu do lado esquerdo, selecione **Certificados A1**.
3. No canto superior direito, clique no ícone de três pontos verticais.
4. No menu suspenso, selecione **Importar novo certificado A1**.
5. Escolha um **Arquivo do certificado** da sua máquina. Este é o único campo obrigatório.
6. Se o seu certificado tiver um arquivo de chave separado, selecione também o correspondente **Arquivo key**.
7. Se desejar que seu certificado tenha uma senha para a chave, insira-a no campo **Senha da chave** campo enquanto você o importa. Você não poderá adicionar essas informações posteriormente.
    :::(warning) (**Cuidado**)
    Embora a adição de uma **Senha de revogação** não seja obrigatória, ela é altamente recomendada. Certificados sem essa senha estão sujeitos a revogações não intencionais por qualquer pessoa com acesso à CA.
    :::
    :::(info) (**Informações**)
    Ambas as senhas podem ter até 72 caracteres, incluindo letras maiúsculas e minúsculas, números e símbolos `! % @ # ^ * _ `.
    :::
8. Se preferir, insira as informações do certificado que você está importando em um já existente. Clique no **Use como informação para um certificado existente** e aguarde um momento para que o senhasegura exiba o certificado, e você possa selecioná-lo.
    1. Selecione o certificado desejado.
9. Clique **Salvar** para confirmar a importação.

Na página **Certificados A1**, você verá o certificado que acabou de importar.

---
Você ainda tem dúvidas? Entre em contato com [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.