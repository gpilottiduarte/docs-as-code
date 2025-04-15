## Adicionar guardiões

Em cenários onde os participantes estão remotamente e não podem se reunir fisicamente por motivos especiais, o senhasegura disponibiliza uma maneira de realizar a cerimônia de **Chave Mestra** remotamente. Permitindo que os guardiões tenham cada um acesso às suas respectivas partes de maneira segura.

CuidadoEsta funcionalidade está presente apenas nas versões ***3\.6*** e superior. E é necessário que uma conta de e\-mail SMTP esteja configurada e determinada como padrão.

InfoOs seguintes eventos da cerimônia de **Chave Mestra** são exibidos no ***Syslog***:

* Início da cerimônia
* Visualização da parte da chave
* Download do arquivo PDF contendo parte da chave
* Encerramento da cerimônia
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1666920765623.png)Formulário para definir uma nova Chave Mestra 

  


Para realizar a cerimônia da chave mestra remotamente acesse o menu **Configurações ➔ Backup ➔ Definir uma nova chave mestra**.

1. Preencha a **Quantidade de partes para restaurar**
2. Adicione os **Guardiões**
3. Clique em **Gerar nova chave**

InfoO número mínimo de partes para restaurar é **2**.

CuidadoPor motivos de segurança, recomendamos que você escolha duas ou três vezes mais guardiões do que o número de partes necessárias para restaurar sua chave.

InfoÉ importante que os **Guardiões** selecionados tenham seus e\-mails cadastrados no sistema.

* Apenas usuários ativos no sistema poderão ser selecionados como **Guardiões**.
* Os **Guardiões** que fazem parte do processo de chave mestra devem pertencer ao perfil ***View password*** para ter acesso à parte da chave.
* O usuário não pode ser guardião de mais do que uma parte da chave.

É importante que estes guardiões sejam de confiança da organização, pois as chaves são um componente crítico para a segurança do sistema.

## Acompanhar andamento da cerimônia

É possível acompanhar o andamento da cerimônia e a relação dos guardiões com suas partes através do dashboard, acesse: **Configurações ➔ Backup ➔ Cerimônia de chave mestra**.  
Neste dashboard você poderá acompanhar:

* Informações dos guardiões, como: Nome, Telefone, E\-mail, status da cerimônia, status do usuário no cofre, último Login, última visualização e último download da parte.
* Quantidade mínima de guardiões para restauração
* Data e hora de início da cerimônia
* Data e hora de término da cerimônia
* Atalho para definir uma nova chave mestra

InfoPara visualizar o log do backup das informações, vá até **Setting ➔ Backup ➔ Backup logs**

