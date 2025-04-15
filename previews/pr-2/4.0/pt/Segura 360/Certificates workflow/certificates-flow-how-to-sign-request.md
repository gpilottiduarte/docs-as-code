# Como assinar uma requisição

A assinatura de uma requisição garante a autenticidade e integridade dos dados, verificando sua origem e prevenindo alterações durante a transmissão. 

Este artigo ensina como assinar uma requisição. 

## Requisitos
* Uma requisição listada na página principal de **Requisições**.

## Assinar uma requisição

Para assinar uma requisição, siga estes passos: 

1. No canto superior esquerdo, clique em **Grid Menu**, identificado pelo ícone de nove quadrados e, em seguida, selecione **Certificate Manager**.
2. No menu lateral, selecione **Configurações** e, em seguida, **Requisições**.
3. Localize a requisição que deseja assinar. 
4. Na coluna **Ação** correspondente, clique no ícone dos três pontos verticais.
5. Selecione **Solicitar assinatura**; isso abrirá o formulário **Solicitar assinatura do request**.
6. Na aba **Geral**, preencha as informações:
    1. Em **Auto-assinado?**, marque **Sim** somente se você confia no dispositivo que fará a assinatura.
    2. Em **Escolha a CA**, selecione a autoridade que fará a assinatura. O campo só é habilitado ao marcar a opção **Não** no campo 'Auto-assinado'.
    :::(Info) (Info)
    **Auto-assinado:** é recomendado para dispositivos que se comunicam somente com outros localizados em redes internas. Ou seja, dispositivos conhecidos que se reconhecem e atestam a assinatura do outro como válida porque confiam na autenticidade um do outro. 
    **Assinado por uma AC:** é recomendado para dispositivos que se comunicam com outros fora de sua rede. Como não existe uma relação de confiança estabelecida entre os dispositivos, ambos confiam na assinatura de uma autoridade conhecida e com propriedade para dizer que o dispositivo é quem diz ser.
    :::
    3. Em **Justificativa**, explique porque deseja assinar a requisição.
    4. Em **Motivo**, selecione entre as opções cadastradas. 
    5. Em **Governance code**, preencha com um código para ajudar na organização/localização interna da requisição. 
:::(Info) (Info)
Ao escolher a **autoridade da Microsoft** para a assinatura, uma segunda aba chamada **Template de assinatura** aparece. Selecione o template desejado para concluir o processo.
:::
7. Clique em **Salvar**.

Na página principal de **Requisições**, a requisição mudará seu status para 'Assinado'. 
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).



