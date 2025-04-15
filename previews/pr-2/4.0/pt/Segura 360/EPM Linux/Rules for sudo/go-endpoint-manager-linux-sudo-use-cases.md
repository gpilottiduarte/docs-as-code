# Casos de uso

## Geral

### Caso 1: Permitir que qualquer usuário execute o comando **"cat"** como sudo

1. Acesse a plataforma Segura.
2. Vá para **GO Endpoint Manager➔Políticas➔Linux➔Regras para sudo.**
3. Clique em **⁝** e selecione **Nova regra de sudo geral**.
4. No formulário **Regras de registro para sudo**, na aba **Principal**, preencha os campos:
    * **Nome de identificação:** defina um nome para identificar a regra.
    * **Ativo:** marque como **Sim**.
    * **Comandos para aplicação da regra:** deve ser usado o caminho completo. Adicione o caminho do comando **/usr/bin/cat**
    * **Deve ser NOPASSWD?:** defina como **Sim** para não solicitar que o usuário digite a senha.
    * **Descrição:** adicione uma breve descrição sobre esta regra.
5. Clique em **Salvar.**


* * *

## Workstation
### Caso 1: Permitir qualquer usuário de executar o comando **"cat"** como sudo para uma estação de trabalho específica

1. Acesse a plataforma Segura.
2. Vá para **GO Endpoint Manager➔Políticas➔Linux➔Regras para sudo.**
3. Clique em **⁝** e selecione **Nova regra de sudo para workstation.**
4. No formulário **Cadastro de regras para sudo por workstation**, na aba **Principal**, preencha os campos:
    * **Nome de identificação:** defina um nome para identificar a regra.
    * **Ativo:** marque como **Sim**.
    * **Comandos para aplicação de regra:** deve ser usado o caminho completo. Adicione o caminho do comando **/usr/bin/cat**
    * **Deve ser NOPASSWD?:** defina como **Sim** para não solicitar que o usuário digite a senha.
    * **Descrição:** adicione uma breve descrição sobre esta regra.
6. Vá para a aba **Workstations.**
7. Selecione **Workstations+.**
8. Marque as workstations desejadas.
9. Clique em **Adicionar.**
10. Clique em **Salvar.**



