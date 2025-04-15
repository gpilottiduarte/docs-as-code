# Adicionar template

Templates podem ser utilizados para definir como os usuários Segura realizaram o provisionamento de usuários e contas de serviço nos provedores de Cloud sem infringir as regras da organização.

## **Criar template de configuração**

Vá para o menu: **Cloud IAM ➔ Cloud IAM ➔ Templates**.

1. No relatório clique no botão de ação e escolha a opção **Add Template;**  
2. Insira o nome do template e selecione se ele estará ativo para o uso;  
3. No campo **Máscara,** defina como o nome das contas de serviço deve ser criado. Você pode inserir um prefixo e/ou sufixo e também, entre chaves, a quantidade de letras e números. Por exemplo: `segura-aaa-000`. Aqui, o prefixo é “segura-”, e todas as contas de serviço criadas deverão começar desta forma. Também está definido que devem conter três letras, um hífen e três números. Ao usuário, cabe escolher quais letras e números serão usados, mas sempre seguindo o limite do template;   
4. Ao selecionar um departamento no campo **Departamento,** você definirá que ao usar este template os usuários que poderão ser provisionados devem estar associados a este departamento selecionado;
:::(info) (**Info**)
Esse campo não é obrigatório, porém restringe a lista de usuários disponíveis para o processo de provisionamento de usuários pessoais. Então, se não desejar que certos usuários deem provisionamento àqueles fora de um departamento específico, é aconselhável preencher este campo.
:::
5. Para finalizar, clique em **Confirmar**.

