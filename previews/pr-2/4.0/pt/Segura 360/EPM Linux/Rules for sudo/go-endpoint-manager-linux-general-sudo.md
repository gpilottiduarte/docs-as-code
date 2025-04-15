# Cadastrar regra geral

1. Acesse a plataforma senhasegura.
2. Vá para **GO Endpoint Manager➔Políticas➔Linux➔Regras para sudo.**
3. Clique em **⁝** e selecione a opção **Nova regra de sudo geral.**
4. No formulário **Cadastro de regras para sudo**, na aba **Principal**, preencha os campos:
    * **Nome de identificação:** defina um nome para identificar a regra.
    * **Ativo:** defina o status da regra.
    * **Comandos para aplicação de regra (deve ser usado o caminho completo):** preencha com o caminho do comando que pode executar como sudo e elevar privilégios. Para descobrir o caminho de um comando no terminal do Linux, execute **which [digite o comando desejado].**
    * **Deve ser NOPASSWD?:** se você definir como **Sim**, não será solicitada uma senha ao usuário para executar o comando como sudo. Caso defina como **Não**, será solicitada a senha ao usuário.
    * **Descrição:** adicione uma breve descrição sobre esta regra.
5. Clique em **Salvar.**

* * *

## Validar as regras de sudo no dispositivo de destino

1. Acesse o terminal do Linux.
2. Digite este comando para verificar:

```shell
cat /etc/sudoers.d/senhasegura
```