# Como fazer o deploy no Azure usando uma imagem pública

Neste artigo, você encontra instruções para fazer o deploy do senhasegura no **Microsoft Azure** usando uma imagem pública da aplicação.


## Requisitos
É necessário que haja uma compatibilidade entre a sua **localização** e uma das **imagens públicas** disponíveis. 


## Passo 1: Selecionar uma imagem pública


1. Faça login no **Microsoft Azure**.
2. Na categoria **Serviços**, selecione **Imagens da Comunidade**.
3. Utilize a barra de pesquisa no canto superior esquerdo da página de **Imagens da Comunidade** e digite "senseg" para filtrar as imagens públicas disponíveis. 
4. Escolha dentre as  imagens públicas disponíveis a que se adequa à sua localização:



| Localização| Nome da galeria pública |
| --- | --- |
| **Brazil South** | sensegimagesSA-9c5bef0f-8b5d-4afa-a4a8-45c17f969175 |
| **France Central** | sensegimagesEU-c1771718-1fa0-4039-aaf5-3488c4e51dfa |
| **UAE North**| sensegimgsUAE-1463cb64-66f4-41be-bd31-259174cd4410|
| **East US** | sensegimages-cae17fe1-e39a-4ce3-a11a-550e16499f4d |
| **West Europe** | sensegimgsWestEU-6c393531-1589-47cb-8f8e-83da2a8cf2d0|
::: (error) (Importante)
Se não houver uma imagem disponível adequada à sua localização, será necessário carregar manualmente a imagem da aplicação. Consulte o artigo [Como fazer o deploy no Azure carregando manualmente a imagem da aplicação](/v3-33/docs/pt/installation-how-to-deploy-on-azure-by-manually-uploading-the-application-image) para obter instruções.
:::

## Passo 2: Criar uma máquina virtual 

1. Após selecionar a imagem pública, clique em **Criar VM**.
2. Ao criar a máquina virtual, os seguintes campos devem ser preenchidos como instruído abaixo:



::: (error) (Importante)

Não faça alterações nas configurações das abas **Gerenciamento** e **Avançado**.
:::



* Na aba **Básico**, defina o campo **Selecione as portas de entrada** como **HTTP 80** e **HTTPS 443**.

* Na aba **Básico**, defina o campo **Tipo de licença** como **Outro**.

* Na aba **Monitoramento**, em **Diagnóstico de inicialização**, selecione **Desabilitar**.
 
3. Na última etapa, certifique-se de ter preenchido os campos listados no passo 3 adequadamente e de não ter alterado as configurações das abas **Gerenciamento** e **Avançado**. 
4. Clique em **Criar**.
5. Aguarde pela mensagem de confirmação: **A implantação foi concluída**.

6. Após a confirmação da implantação, clique em **Ir para o recurso**.  
7. Na página da máquina virtual, copie o **IP Público**.
8. Abra seu navegador e cole o **IP Público** na barra de endereços. 


Ao seguir estes passos, a tela de ativação do senhasegura será exibida, e
o deploy estará concluído. 


::: (Info) (Info)
Caso seja exibida a mensagem **Internal Server Error**, aguarde alguns minutos e recarregue a página.
 :::	

 
 

* * *


Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target="_blank"}.



