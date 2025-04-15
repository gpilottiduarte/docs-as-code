# Como alterar o Segura para usar novo repositório.

Este documento fornece orientações sobre como atualizar o senhasegura para usar um novo repositório. Esta atualização é necessária para garantir que seu sistema receba futuras atualizações.

::: (error) (Importante)
Após alterar o senhasegura para usar o novo repositório, se você está usando uma versão anterior à 3.33 e deseja atualizar o senhasegura para a versão 3.33 ou posterior, consulte o artigo [Como atualizar versões anteriores à 3.33](/v4/docs/pt/how-to-update-senhasegura-in-stages).
:::

## Requisitos

- Cliente Secure Shell (SSH)  
- Credenciais de administrador para o servidor senhasegura  
- O arquivo do script "aptfix" do senhasegura, que você pode obter a partir do [link do arquivo](https://downloads.senhasegura.io/d/other/aptfix)

:::(warning) (Atenção)
A partir de **19 de agosto de 2024**, todas as atualizações utilizarão o novo repositório senhasegura. O repositório antigo não estará mais disponível após essa data.  
:::

## Caminho para acesso

Para configurar o uso do novo repositório, primeiro, inicie uma [sessão de administração SSH](/v4/docs/administration-ssh-access) no seu servidor senhasegura.

## Etapas para Atualizar

1. Baixe o arquivo “aptfix”.  
    ```bash
    wget https://downloads.senhasegura.io/d/other/aptfix
    ```
2. Inicie uma [sessão de administração SSH](/v4/docs/administration-ssh-access).  
3. Transfira o arquivo para o servidor senhasegura usando SSH e credenciais de administrador.  
4. **Execute o script** com `sudo` em qualquer diretório, usando o seguinte comando.  
    ```bash
    sudo chmod +x aptfix
    ```
    ```bash
    sudo ./aptfix
    ```
5. Aguarde a conclusão do script.  
6. Uma vez concluído, **execute** os comandos:
    ```bash
    sudo apt update
    ```
    ```bash
    sudo apt install orbit-cli
    ```
:::(warning) (Atenção)
Caso a configuração do repositório precise ser atualizada, a plataforma indicará as ações a serem seguidas.
:::

7. Após a conclusão, para atualizar a solução senhasegura, siga nossa documentação que melhor se adequa às suas necessidades:

    - [Atualizar senhasegura online](/v4/docs/pt/installation-how-to-update-senhasegura-online).
    - [Atualizar senhasegura offline](/v4/docs/pt/how-to-update-senhasegura-offline).
    - [Como atualizar senhasegura em cluster](/v4/docs/pt/installation-how-to-update-cluster).
    - **Se você está usando uma versão anterior à 3.33**, consulte o artigo [Como atualizar versões anteriores à 3.33](/v4/docs/pt/how-to-update-senhasegura-in-stages).

* * *

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).

