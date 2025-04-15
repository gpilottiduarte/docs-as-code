# Como exportar e abrir os dados do Segura

## Requisitos

* Ter o papel de System Administrator.

## Caminho para acessar

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Backup > Histórico de exportação**. 

## Exportar dados

1. No relatório **Backups efetuados**, clique no botão **Exportar dados**.  
2. Você será direcionado para a tela **Exportar dados**. Nesta janela, preencha os seguintes campos:  
   1. **Modo chave**: selecione uma das duas opções:  
      1. **Partes**: você precisará inserir as partes da chave mestra.  
         1. Neste caso, você deverá inserir uma parte por linha no campo de texto **Partes da Chave (uma por linha)**, que se encontra logo abaixo das duas opções.  
      2. **Chave completa**: você deverá inserir a chave mestra obtida na cerimônia da chave mestra.  
         1. Neste caso, você deverá inserir a chave mestra completa no campo de texto **Chave mestra**, logo abaixo do campo **Partes da Chave**.  
3. Clique em **Exportar Dados**.

Uma mensagem indicando o sucesso da operação irá aparecer, assim como o registro do pedido de importação será exibido no relatório **Histórico de exportação**. Para baixar os dados, você deverá esperar esperar que estes fiquem disponíveis. Quando os dados estiverem prontos, a opção **Download** ficará disponível na coluna **Ação do relatório**. 

## Abrir o arquivo de backup

A criptografia de um backup é gerada com base na chave mestra que estava ativa no sistema naquele exato momento. Caso tenha ocorrido uma nova cerimônia de chave mestra, resultando na geração de uma nova chave criptográfica, não será possível acessar um backup criado anteriormente, pois o mesmo encontra-se vinculado a chave mestra anterior.

### Requisitos

* Você deve ter instalado o [AES Crypt](https://www.aescrypt.com/), de acordo com o sistema operacional utilizado, para descriptografar os arquivos do backup.

Perceba que os procedimentos descritos abaixo assumem que os diretórios e caminhos indicados são os diretórios e caminhos padrão.

## Abrir os arquivos no Windows

1. Após clicar em **Download**, um arquivo tar.gz será baixado. Você deverá descompactar este arquivo.  
2. Após descompactar o arquivo de backup, navegue pela estrutura de pasta até o dado que você deseja desencriptar.

## Estrutura de Diretórios

A estrutura de diretórios para os arquivos salvos segue o seguinte padrão:

```txt
YYYY-MM-DD/
├── Credentials/
│   ├── [dispositivo1]/
│   │   └── credencial_1.aes
│   ├── [dispositivo2]/
│   │   └── credencial_2.aes
│   └── [dispositivoN]/
│       └── credencial_N.aes
└── Sshkeys/
    └── ...
```

Onde:

* YYYY-MM-DD representa a data de criação do arquivo (ano-mês-dia).  
* \[dispositivo1\], \[dispositivo2\], etc., são os nomes dos dispositivos cadastrados no cofre.

## Processo de localização e decriptação

1. Navegue até a pasta com a data desejada (por exemplo 2024-09-13).  
2. Acesse a subpasta Credentials.  
3. Escolha a pasta do dispositivo específico (por exemplo ubuntu, debian, win2000).  
4. Localize o arquivo .aes correspondente à credencial desejada (por exemplo credencial\_1.aes).  
5. Para decriptar o arquivo .aes, utilize o programa **AES Crypt**.

### Exemplo

Para um arquivo criado em 13 de setembro de 2024, contendo credenciais para um dispositivo Ubuntu:

1. Acesse a pasta 2024-09-13.  
2. Entre na subpasta Credentials.  
3. Abra a pasta ubuntu.  
4. Localize o arquivo credencial\_1.aes.  
5. Use o **AES Crypt** para descriptar credencial\_1.aes.

:::(info) (Info)  
Certifique-se de ter as permissões necessárias e a chave de decriptação correta ao utilizar o **AES Crypt**.  
:::

## Abrir os arquivos no Linux

1. Através da linha de comando, acesse a pasta compartilhada que recebe os dados de backup do Segura.  
2. Localize a pasta onde os arquivos estão armazenados e procure pelo caminho `/srv/backup_remoto/secrets/`.  
3. Escolha a pasta com a data que deseja acessar o backup.  
4. Escolha o arquivo com a extensão `.aes`.  
5. No terminal, digite o comando `aescrypt -d -p <SenhaChaveMestra> <arquivo.aes>` para descriptografar o arquivo de backup.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).