ImportanteA criptografia de um backup é gerada com base na chave mestra que estava ativa no sistema naquele exato momento. Caso tenha ocorrido uma nova cerimônia de chave mestra, resultando na geração de uma nova chave criptográfica, não será possível acessar um backup criado anteriormente, pois o mesmo encontra\-se vinculado a chave mestra anterior.

InfoO nosso sistema realiza backups diariamente e atualiza automaticamente sempre que houver qualquer alteração nas credenciais. Consulte sempre o backup mais recente, garantindo a segurança e atualização das informações.## Como abrir arquivos no Windows

### Requisito

* Você deve ter instalado **[AES Crypt para Windows](https://www.aescrypt.com/windows_aes_crypt.html)** para descriptografar os arquivos do backup.
1. Acesse a pasta compartilhada que recebem os dados de backup do senhasegura.
2. Localize a pasta onde os arquivos estão armazenados e procure pela pasta **secrets.**
3. Procure pelo arquivo que você deseja abrir para realizar a abertura do arquivo.
4. Clique no arquivo desejado que contém a extensão **.aes.**
5. Restaure os dados criptografados utilizando a Chave Mestra.

O software decodificará o arquivo de backup, gerando um arquivo com a extensão CSV no mesmo diretório que o arquivo de backup. Ao abrir o arquivo CSV, você pode visualizar todas as credenciais e senhas cadastradas e salvas no arquivo de backup.



---

## Como abrir arquivos no Linux

### Requisito

* Você deve ter instalado o **[AES Crypt para Linux](https://www.aescrypt.com/download/)** para descriptografar os arquivos do backup.
1. Acesse a pasta compartilhada que recebem os dados de backup do senhasegura.
2. Localize a pasta onde os arquivos estão armazenados e procure pelo caminho **/srv/backup\_remoto/secrets/** caso tenha salvado no diretório local.
3. Escolha a pasta com a data que deseja acessar o backup.
4. Escolha a informação.
5. Escolha a pasta que contém o arquivo com a extensão **.aes.**
6. Digite `aescrypt -d -p SenhaChaveMestra arquivo.aes` para descriptografar o arquivo.
