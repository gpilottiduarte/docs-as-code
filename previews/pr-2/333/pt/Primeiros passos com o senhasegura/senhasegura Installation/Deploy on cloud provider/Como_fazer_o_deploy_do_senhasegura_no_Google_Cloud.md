# Como fazer o deploy do senhasegura no Google Cloud Platform

Neste artigo, você aprenderá como fazer o deploy do senhasegura no Google Cloud Platform (GCP).

## Requisitos

A comunicação do firewall deve estar aberta nas seguintes portas:


80 (HTTP).
443 (HTTPS).
59022 (SSH).
22 (Proxy SSH).
3389 (Proxy RDP).


## Como fazer o deploy do senhasegura no GCP
Para fazer o deploy do senhasegura no GCP, siga estes passos:

### Passo 1: Criar uma imagem de disco

1. No GCP, acesse **Cloud Storage > Buckets** e clique em **Criar Bucket**. Este passo não é necessário se você já tiver um Cloud Bucket.
2. Faça o upload do arquivo `.tar.gz` em **Cloud Storage > Upload do arquivo**.
3. Acesse **Compute Engine > Storage > Imagens** e clique em **Criar imagem**.
4. Insira o **Nome da imagem**.
5. Selecione **Cloud Storage File** como a origem.
6. Selecione o arquivo `.tar.gz` que você fez o upload no passo 2.
7. Clique em **Criar** e aguarde até que o processo seja concluído.
8. A imagem de disco será exibida na lista de Imagens.


### Passo 2: Criar uma nova instância

1. Acesse **Compute Engine > Instâncias de VM** e clique em **Criar instância**.
2. Em **Disco de inicialização**, selecione **Imagem personalizada**.
3. Selecione a imagem criada no **Passo 1**.
4. Configure os parâmetros e políticas da VM de acordo com as necessidades da sua organização.

Após a criação, a VM será exibida na **lista de Instâncias**.
