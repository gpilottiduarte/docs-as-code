# Informação pessoal

## **Visão Geral**
:::(error) (**Alerta**)
Este recurso foi descontinuado a partir da versão 3.26 do Segura. Utilize o [MySafe](/v4/docs/pt/mysafe) para adicionar e compartilhar suas informações pessoais.
:::

No menu **Informação**, você tem acesso ao relatório de informações protegidas. Você só verá suas informações registradas ou as informações de outros usuários às quais você tem acesso com uma concessão direta ou por um grupo de acesso.

Através de ações de comunicação ou pelo atalho de ação rápida, você pode registrar as novas informações.

Há quatro características principais que compõem as informações protegidas:

1. As informações podem ser compostas de arquivo, texto e senha. Estas informações serão protegidas.  
2. A informação tem um nome, um tipo, um identificador para serviços web, e pode receber uma data de expiração obrigatória.  
3. As informações podem ser vinculadas a uma URL e a um serviço, sem o uso de Segura a esses atributos. Isto será usado somente para fins de organização do mantenedor.  
4. As informações podem ser acessadas mesmo que inativas. O status das informações diz respeito apenas ao seu uso no plano de negócios.

Observe que na aba **Informações*,*** você pode preencher os dados que serão protegidos, como um arquivo, notas e senha, e também pode preencher os atributos abertos destas informações, como nome, tipo, serviço e URL.

Na aba **Configurações adicionais**, você pode preencher as observações desta custódia.
:::(Warning) (**Atenção**)
Não confunda o campo **Observação** desta guia com o campo **Anotações sigilosas** da guia Informação. O campo **Observação** não será protegido! 
:::

Você também pode determinar a validade das informações, um identificador para a recuperação de informações através de métodos de serviço web e indicar manualmente o status dessas informações.

Na aba **Controle de acesso**, você pode determinar quais usuários terão acesso às informações, por quanto tempo e em que contexto.

Ao vincular um usuário que poderá utilizar a informação, o dono da informação poderá determinar qual será a data limite de acesso à informação preenchendo o campo **Data de expiração**. Caso a informação deva permanecer disponível por tempo indeterminado, basta manter o campo **Data de expiração** vazio.

Observe que, neste caso, o proprietário da informação terá pleno conhecimento de quais usuários poderão utilizar o segredo, ao invés de informações compartilhadas com grupos de acesso, onde a composição do grupo não é de responsabilidade do proprietário do segredo.

Você pode selecionar um **Tipo de informação** se já existir, ou se não existir, digitar um novo registro que será salvo com a nova Informação Protegida.
:::(Warning) (**Atenção**)
Você pode configurar uma data de expiração compulsória através do campo **Data de expiração** na aba **Informações adicionais**. 
:::

Quando a informação alcançar a data de expiração, todos os usuários perdem o acesso e apenas o dono da informação poderá editar ou acessar a informação.

Na aba **Notificações** você poderá configurar os usuários que devem ser notificados antes que a informação protegida expire. Você pode configurar uma regra única para todos os usuários relacionados no **Controle de acesso**, ou criar regras especiais de notificação para usuários fora do controle de acesso.

---

## **Registrando uma credencial pessoal**

Com o alto nível de complexidade no padrão senhas que alguns sistemas apresentam, é comum que usuários deixem suas senhas anotadas em locais pouco seguros.

A função **Credenciais protegida*s*** visa disponibilizar um “cofre pessoal” para que os usuários do sistema armazenem suas credenciais protegidas de acesso, por exemplo, a:

* Contas de e-mail  
* Aplicativos  
* Serviços de armazenamento de arquivos  
* Outros

Desta forma os usuários armazenam essas credenciais onde o acesso a estas será exclusivamente seu, podendo consultá-las quantas vezes achar necessário.

Além disso, poderão gerar senhas e compartilhar as credenciais com outros usuários, sem a necessidade de enviá-las por e-mail ou aplicativos de mensagem que podem não ser tão seguros. Gestores também podem se beneficiar desta funcionalidade quando necessitarem compartilhar senhas e usernames genéricos para os membros de sua equipe.
:::(Warning) (**Atenção**)
Essas credenciais protegidas não têm relação com as credenciais associadas a dispositivos cadastrados no cofre, para saque de senha e sessões remotas. 
:::

Para inserir uma credencial pessoal no Segura siga as instruções:

1. Acesse o menu: **Informações > Credenciais pessoais > Credenciais pessoais.**  
2. Clique no botão de ação do relatório e escolha a opção **Nova credencial pessoal.**  
3. Digite o **username** da sua credencial.  
4. Se desejar insira a **URL**desta crendencial.       
5. Selecione no campo **Tipo** qual o tipo desta credencial.  
6. Defina se esta credencial pessoal estará **Ativa** ou **Inativa.**  
7. Também é possível gerar a senha desta credencial. Para isso clique na opção **Definir senha atual.**  
8. Digite a senha ou clique na opção **Gerar senha** onde o sistema criará uma senha para sua credencial.  
9. Siga para a guia **Controle de acesso** para adicionar usuários aos quais deseja compartilhar esta credencial. Se a credencial não deve ser compartilhada, siga para a próxima etapa.  
10. No campo **Usuário** selecione entre as opções o usuário com quem deseja compartilhar as informações desta credencial, em seguida clique no botão **Adicionar.**  
11. Na tabela abaixo será exibida uma caixa de seleção na coluna **Escrita**, selecione esta caixa se desejar que o usuário realize alterações nas informações da credencial.  
12. Defina a **Data de expiração**até quando o usuário deve ter acesso à credencial pessoal.        
13. Siga para a guia **Configurações adicionais;**  
14. No campo **Identificador** você pode inserir um código ou nome para identificação desta credencial. Se desejar insira uma **Observação**com detalhes e outras informações sobre a credencial;       
15. Siga para a guia **Notificações;**      
16. Caso esta credencial tenha uma **Data de Expiração** digite no campo ou clique para que o calendário seja exibido; 
17. Clique na caixa de seleção do campo **Notificar usuários com** para receber uma notificação quando a data de expiração estiver próxima, em seguida selecione com quantos **dias de antecedência** o sistema deverá notificar os usuários;  
18. Em **Notificações especiais**, defina o **Usuário** que irá receber esta notificação, e com quantos **dias de antecedência;**  
19. Clique em **Salvar*.***

