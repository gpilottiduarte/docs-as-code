# Como adicionar uma autorização de chave de acesso

Neste documento, você encontra um guia passo a passo sobre como adicionar uma autorização de chave de acesso.

## Adicionar uma autorização de chave de acesso

1. No Segura, no canto superior direito, clique no **Menu de produtos **, e selecione **MySafe**.
2. No menu lateral, selecione **+ Integrações > Chaves de acesso**.
3. No canto superior direito, clique em **Exibir ações**, representado pelo ícone de três pontos verticais.
4. No menu suspenso, selecione **Nova**.
5. Na janela **Nova chave de acesso**, preencha os campos em cinco passos:
    1. Em **Aplicação**, preencha:
        1. **Nome***: nome do aplicativo cliente que usará a autorização de chave de acesso.
        2. **Descrição**: descrição opcional da autorização de chave de acesso.
        3. **Tags**: palavras-chave opcionais para ajudar a identificar a autorização de chave de acesso.


6. Clique em **Próximo**.
    1. Em **Segurança**, preencha:
        1. **Criptografar dados sensíveis**: opcionalmente marque essa caixa se você quiser que os dados sejam criptografados.
        2. **IPs autorizados (use * para permitir qualquer IP)**: clique no ícone de **adição** para abrir o campo **Endereço** e adicionar os endereços de IP que terão acesso permitido à autorização de chave de acesso. Clique no ícone de **lixeira** para remover o endereço de IP adicionado.
        3. **HTTP referers autorizados (por padrão qualquer origem é permitido)**: clique no ícone de **adição** para abrir o campo **Referer** e adicione as URLs que terão acesso permitido à autorização de chave de acesso. Por padrão, qualquer origem é permitida. Clique no ícone de **lixeira** para remover os referers adicionados. 
        4. **Validação de certificados**: opcionalmente informe uma impressão digital do certificado para uma camada adicional de proteção.

7. Clique em **Próximo**.
    1. Em **Dados**, preencha:
        1. **Acesso total**: marque essa caixa se você quiser que as aplicações possam recuperar todas as informações que seu usuário tem acesso.
        2. **Especificar dados**: caso você queira selecionar dados específicos que seu usuário tem acesso, desmarque a caixa de seleção **Acesso total**. Isso mostrará a seção **Especificar dados**, e você poderá, então, digitar palavras-chave para buscar por informações que você tem acesso. Clique no ícone da **lixeira** para remover os dados adicionados.


8. Clique em **Próximo**.
    1. Em **Período Opcional**, preencha:
        1. **Validade**: opcionalmente selecione uma data e hora para que a autorização de chave de acesso expire.
9. Clique em **Próximo**.
    1. **Revisão**: resumo das informações inseridas nos passos anteriores.

:::(Info) (Info)
Os itens com asterisco são obrigatórios.
:::

10. Clique em **Anterior** para retornar e alterar qualquer informação antes de salvar.
11. Clique em **Salvar** para finalizar o cadastro.

Uma janela pop-up com a mensagem **“Autorização de API registrada com sucesso”** confirma a ação. Abaixo da mensagem, clique em **Ver autorização do aplicativo** para ser direcionado à tela **Autorização da aplicação** que mostra todas as informações sobre a autorização de chave de acesso; ou clique em **Fechar** para fechar a janela.


Para visualizar as autorizações de chaves de acesso, vá até **MySafe > Chaves de acesso**.


***

Você ainda tem dúvidas? Entre em contato com a [Segura Community](https://community.Segura.io/){target="_blank"}.