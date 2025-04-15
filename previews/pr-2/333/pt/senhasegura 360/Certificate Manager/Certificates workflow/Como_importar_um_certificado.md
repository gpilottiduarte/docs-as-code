# Como importar um certificado

Este artigo ensina como importar um certificado já existente em sua organização para que o senhasegura possa gerenciá-lo.

## Requisitos

* Arquivo do certificado.
* Arquivo da chave, caso o certificado tenha a chave.

## Importar certificado
:::(Info) (Tipos de certificados)
Você pode adicionar manualmente uma variedade de tipos de certificados, incluindo .cer, .pfx (Private key inclusa, não sendo necessário importar a key), .p7b, .crt, .der, .p12, .pem.
:::

Para importar manualmente um certificado, siga estes passos:

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelo ícone de nove quadrados e, em seguida, selecione **Certificate Manager**.
2. No menu lateral, selecione **Certificados** e, em seguida, **Certificados**.
3. No canto superior direito, clique em **Exibir ações** (o ícone dos três pontos verticais).
4. Selecione **Importar certificado**.
5. Em **Arquivo do certificado**, selecione o arquivo na sua máquina. Este é o único campo obrigatório.
6. Caso o seu certificado contenha um arquivo de chave separado, selecione o **Arquivo Key** correspondente.    
7. Se você deseja que seu certificado contenha uma senha para a chave, insira-a no campo **Senha da chave** durante a importação. Não é possível adicionar essa informação posteriormente.
:::(Warning) (Cuidado)
Embora a adição de uma **Senha de revogação** não seja obrigatória, ela é altamente recomendada. Certificados sem essa senha estão sujeitos a revogações não intencionais por qualquer pessoa com acesso à CA. 
:::
:::(Info) (Info)
As senhas podem ter até 72 caracteres e incluir letras maiúsculas e minúsculas, números e os símbolos ```! % @ # ^ * _``` . 
:::
8. Se você preferir, pode inserir as informações do certificado que está importando em um certificado já existente. Clique no campo **Use como informação para um certificado existente** e aguarde alguns instantes até que o senhasegura apresente o certificado e você possa selecioná-lo.
    1. Selecione o certificado desejado.
9. Clique em **Salvar** para confirmar a importação.

O certificado aparecerá listado na página principal de **Certificados**.
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
