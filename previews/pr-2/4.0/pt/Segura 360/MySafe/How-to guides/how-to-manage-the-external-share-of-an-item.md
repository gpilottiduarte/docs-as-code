# Como gerenciar o compartilhamento externo de um item

Neste documento, você encontra um guia passo a passo sobre como compartilhar, reenviar um link de acesso, revogar e visualizar detalhes de compartilhamentos temporários feitos com usuários externos ao **MySafe**.

## Compartilhar item externamente

## Requisitos

* Permissão mínima de **MySafe user**.
* Permissão de compartilhamento externo concedida pelo administrador.


> Administrador, acesse o documento sobre [Como configurar o MySafe](/v4/docs/pt/how-to-configure-mysafe) para mais informações.
---
Para compartilhar temporariamente um item com uma pessoa que não possui conta no **MySafe**, siga os passos abaixo:


1. No **Segura**, no canto superior esquerdo, clique no **Menu de produtos **, representado pelos nove quadrados, e selecione **MySafe**.
2. No menu lateral, selecione o menu do tipo de item que deseja compartilhar. As opções disponíveis são **Senhas, Segredo de API, Arquivos** e **Anotações**.
3. Na tela do item, identifique o item que deseja compartilhar.
4. Na coluna **Ação**, clique em **Compartilhar**.
5. Na tela **Compartilhar**, selecione o card **Externo**, representado pelo ícone de globo.
6. Na parte superior da tela **Compartilhamento único**, visualize os detalhes do item a ser compartilhado.
7. Na caixa de texto abaixo dos detalhes do item, digite o endereço de email da pessoa com quem deseja compartilhar.
8. Na seção **Detalhes de compartilhamento**, preencha:

   - **Data de validade***: clique na seta que aponta para baixo para selecionar o período em que o item compartilhado ficará disponível para acesso. As opções disponíveis são *1 hora, 24 horas, 1 semana, 30 dias* e *Customizado*. A opção **Customizado** habilita os campos de data e hora para seleção personalizada de uma data de validade.

   :::(warning) (Atenção)
   A data de validade não poderá exceder o período definido pelo administrador.
   :::

   - **Máximo de acessos***: selecione uma opção para definir quantas vezes a pessoa poderá acessar o item compartilhado dentro da data de validade estabelecida. As opções disponíveis são *Sem limite, Compartilhamento único* e *Customizado*. Por padrão, a opção **Compartilhamento único** exibe o numeral **1**. A opção **Customizado** habilita a seleção de um numeral que define a quantidade de vezes que a pessoa poderá acessar o item compartilhado. Digite o número manualmente ou utilize as setas que apontam para cima ou para baixo para selecionar um número.

   :::(info) (Info)
   Os itens com asterisco são obrigatórios.
   :::

9. Clique em **Salvar**.



## Revogar compartilhamento externo

Para revogar o compartilhamento temporário de um item antes mesmo da expiração automática, siga os passos abaixo:

## Requisitos

- Item compartilhado temporariamente com status **Aprovado**. Acesse a seção [Compartilhar item externamente](/v4/docs/pt/how-to-manage-the-external-share-of-an-item#compartilhar-item-externamente)  deste documento para mais informações.
---
1. No **Segura**, no canto superior esquerdo, clique no **Menu de produtos **, representado pelos nove quadrados, e selecione **MySafe**.
2. No menu lateral, selecione **Central de compartilhamento > Compartilhamento externo**.
3. Identifique o item cujo compartilhamento deseja revogar ou use os filtros para encontrá-lo.
4. Na coluna **Ação**, clique em **Revogar**, representado pelo ícone de lixeira.
5. Na janela **Confirmação**, clique em **Sim**.

A mensagem "**Dados salvos com sucesso**" confirma a ação, e a coluna **Estado** exibe **Cancelado**.

:::(info) (Info)
Ao revogar um compartilhamento temporário, a coluna **Expiração** passará a exibir a data e hora em que o compartilhamento foi revogado.
:::



## Visualizar histórico de item compartilhado externamente

## Requisitos

- Um item compartilhado temporariamente. Acesse a seção [Compartilhar item externamente](/v4/docs/pt/how-to-manage-the-external-share-of-an-item#compartilhar-item-externamente) deste documento para mais informações.
---

Para visualizar o histórico de um item compartilhado de forma temporária com um usuário que não possui conta no **MySafe**, siga os passos abaixo:

1. No **Segura**, no canto superior esquerdo, clique no **Menu de produtos **, representado pelos nove quadrados, e selecione **MySafe**.
2. No menu lateral, selecione **Central de compartilhamento > Compartilhamento externo**.
3. Identifique o item cujo histórico de compartilhamento deseja visualizar ou use os filtros para encontrá-lo.
4. Na coluna **Ação**, clique no ícone dos três pontos verticais e selecione **Histórico**. Para itens finalizados ou cancelados, clique no ícone de relógio.
5. Na tela **Histórico de compartilhamento externo**, visualize os detalhes do histórico de compartilhamento do item como **Evento, Código** e **Data**.

:::(info)(Info)
O relatório exibe 30 registros por tela. Para ir para as próximas telas, clique no botão de avançar ao final do relatório.
:::

 

## Reenviar URL de acesso

## Requisitos

- Item compartilhado temporariamente com status **Aprovado**. Acesse a seção [Compartilhar item externamente](/v4/docs/pt/how-to-manage-the-external-share-of-an-item#compartilhar-item-externamente) deste documento para mais informações.
---
Caso o acesso ao item tenha expirado e você precise reenviar o link de acesso, siga os passos abaixo:

1. No **Segura**, no canto superior esquerdo, clique no **Menu de produtos **, representado pelos nove quadrados, e selecione **MySafe**.
2. No menu lateral, selecione **Central de compartilhamento > Compartilhamento externo**.
3. Identifique o item cujo link deseja reenviar.
4. Na coluna **Ação**, clique no ícone dos três pontos verticais e selecione **Reenviar URL de acesso**, representado pelo ícone de carta.

:::(info) (Info)
Em caso de problemas com o envio do email, o administrador também pode reenviar a URL de acesso através do caminho **Menu de produtos  > Configurações > Notificações > Email > Caixa de saída**.  
No relatório **Emails enviados**, identifique o email com o item e, na coluna **Ação**, clique no ícone dos três pontos verticais e selecione **Reenviar e-mail**.  
Preencha as informações e clique em **Reenviar**.  
Acompanhe o status do envio na coluna **Estado** do relatório **Emails enviados**.
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target="_blank"}.

