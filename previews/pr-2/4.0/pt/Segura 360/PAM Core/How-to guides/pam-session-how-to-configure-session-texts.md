# Como configurar os textos das sessões

Este documento fornece informações sobre o passo a passo para configurar uma sessão para registrar seus textos de entrada e saída em um log.

## Requisitos

* Ser um usuário administrador.

---
## Configurar o log dos textos
:::(warning) (**Cuidado**)
O uso deste recurso consome uma grande quantidade de recursos da máquina.
:::

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.
2. No menu lateral, selecione **Configurações** > **Parâmetros do sistema** > **Global**.
    :::(info) (**Info**)
    Esta configuração também pode ser realizada nos **Segregados** na aba, **Gravação**, de qualquer tipo de segregação criada.
    :::
3. Na aba **Sessão remota**, vá até a seção **Gravação** e habilite os seguintes campos:
    1. **Indexar textos das sessões?***: selecione **Sim**.
    2. **Habilitar importação de índice de textos Input?***: selecione **Sim**.
    3. **Habilitar importação de índice de textos Output?***: selecione **Sim**.
    :::(warning) (**Atenção**)
    Ao habilitar o campo **Indexar textos das sessões**, ao menos um dos campos, input ou output, deve ser habilitado para que haja o registro dos textos nos logs. Caso contrário, os textos não serão registrados.
    :::
4. Clique em **Salvar**.

O sistema apresenta uma mensagem de confirmação. Todas as sessões iniciadas após essa configuração terão seus textos gravados nos logs da sessão.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.