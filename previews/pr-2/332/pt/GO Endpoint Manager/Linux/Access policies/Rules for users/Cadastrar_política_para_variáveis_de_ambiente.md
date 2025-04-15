# Cadastrar política para variáveis de ambiente

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. Clique em **⁝** e selecione a opção **Nova regra para usuário.**
4. No formulário **Registro de regras para usuário**, na aba **Principal**, preencha os campos:
    * **Nome da política:**  escolha um nome que seja facilmente identificável.
    * **Ativo:** se a opção **Sim** está selecionada, a política é considerada nos dispositivos alvo.
    * **Diretriz:** selecione o tipo de política **Executar binário.**
    * **Permitir ou bloquear:** defina como **Permitir.**
    * **Texto da regra:** preencha com, handler="/usr/bin/secpack-trec-triggered"
5. Clique em **Adicionar.**
6. Vá para a aba **Variáveis de ambiente**. As variáveis de ambiente podem ser usadas de maneira dinâmica para programas ou processos em execução no sistema. 
7. Preencha os campos:
    * **Nome da variável:** preencha com o nome da variável.
    * **Valor da variável:** preencha com o valor da variável.
8. Vá para a aba **Usuários.**
9. Selecione **Usuários+.**
10. Marque os usuários que deseja adicionar para a segregação.
11. Clique em **Adicionar.**
12. Clique em **Salvar.**

:::(Warning) (Cuidado)
Caso já exista alguma variável de ambiente cadastrada, ela será substituída pelo novo valor cadastrado.
:::

* * *

## Verificar variáveis de ambiente criadas

1. Acesse o terminal do Linux.
2. Digite o comando: 

```shell
cat /etc/senhasegura/environment_rules
```

:::(Info) (Info)
As variáveis de ambiente funcionam apenas na segregação por usuários.
:::

