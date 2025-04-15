# Como fazer o deploy no Azure carregando manualmente a imagem da aplicação

Neste artigo você encontra instruções para fazer o deploy do Segura no **Microsoft Azure**, carregando manualmente a imagem da aplicação no formato `VHD`. 

## Requisitos
Para fazer o deploy no Azure, você deve possuir a **imagem do Virtual Appliance do senhahasegura em formato** `VHD`. Para fazer o download da imagem em `VHD`, acesse o [Portal de Suporte](https://suporte.Segura.com.br/en/support/login){target="_blank"}.


## Passo 1: Criar um disco 


1. Faça login no **Microsoft Azure**.
2. Utilize o [Azure Storage Explorer](https://azure.microsoft.com/en-us/products/storage/storage-explorer/#overview){target="_blank"} para carregar a imagem do Segura em formato `VHD` para sua **Conta de armazenamento**. 
3. Na categoria de **Serviços**, selecione **Discos**.
4. Clique em **+Criar**.
5. Ao criar o **Disco**, os seguintes campos da aba **Básico** devem ser preenchidos como instruído abaixo:


* **Tipo de origem**: selecione **Blob de armazenamento**.
* **Blob de origem**: selecione o arquivo `VHD` que você carregou no passo 2.
* **Tipo de SO**: selecione **Linux**. 
* **Geração da VM**: selecione **Geração 1**.
* **Arquitetura da VM**: selecione **x64**.
* **Tamanho**: selecione um tamanho igual ou maior que o tamanho do arquivo `VHD`.

::: (Info) (Info)
Os outros campos podem ser preenchidos de acordo com as suas necessidades. 
 :::	
6. Na última etapa, certifique-se de ter preenchido os campos listados no passo 5 adequadamente e clique em **Criar**.
7. Aguarde pela mensagem de confirmação: **A implantação foi concluída**.





## Passo 2: Criar uma máquina virtual 

1. Após a criação do disco, clique em **Ir para o recurso**.
2. Na página do recurso, clique em **Criar VM**.
3. Ao criar a máquina virtual, os seguintes campos devem ser preenchidos como instruído abaixo:



::: (error) (Importante)

Não faça alterações nas configurações das abas **Gerenciamento** e **Avançado**.
:::



* Na aba **Básico**, defina o campo **Selecione as portas de entrada** como **HTTP 80** e **HTTPS 443**.

* Na aba **Básico**, defina o campo **Tipo de licença** como **Outro**.

* Na aba **Monitoramento**, em **Diagnóstico de inicialização**, selecione **Desabilitar**.
 
4. Na última etapa, certifique-se de ter preenchido os campos listados no passo 3 adequadamente e de não ter alterado as configurações das abas **Gerenciamento** e **Avançado**. 
5. Clique em **Criar**.
6. Aguarde pela mensagem de confirmação: **A implantação foi concluída**.

7. Após a confirmação da implantação, clique em **Ir para o recurso**.  
8. Na página da máquina virtual, copie o **IP Público**.
9. Abra seu navegador e cole o **IP Público** na barra de endereços. 


Ao seguir estes passos, a tela de ativação do Segura será exibida, e
o deploy estará concluído. 


::: (Info) (Info)
Caso seja exibida a mensagem **Internal Server Error**, aguarde alguns minutos e recarregue a página.
 :::	

 
 

* * *


Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target="_blank"}.
