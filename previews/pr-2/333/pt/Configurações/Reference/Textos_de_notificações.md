# Textos de notificações

Neste documento, você vai encontrar todas as informações sobre o relatório **Textos de notificações**, que exibe informações sobre as notificações do senhasegura.

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações.**
2. No menu lateral, selecione **Notificações > Textos.**

## Barra superior

| Item | Descrição |
| --- | --- |
| Atualizar | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| Exibir ações | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| Imprimir relatório | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| Exportar CSV | Representado pelo ícone da folha de papel, baixa o relatório. |
| Agendar relatório | Representado pelo ícone do relógio, abre o formulário **Agendar relatório**. |

## Campos do relatório

- **Código:** código da notificação.
- **Tipo:** tipo da notificação.
- **Assunto:** string com o assunto da notificação.
- Na coluna **Ação** você poderá acessar as configurações do texto que é enviado por e-mail. Para isso, clique em **Alterar texto**, representado pelo ícone do lápis e papel.
    - Caso você não tenha configurado nenhum texto, a opção estará nomeada como **Configurar Texto**.

:::(info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

## Janela Cadastro de texto de notificações

Ao clicar em Alterar texto, você é direcionado para a janela de Cadastro de texto de notificações, que contém os campos abaixo.

| Item | Descrição |
| --- | --- |
| Tipo de texto | Menu suspenso que informa o tipo de texto da notificação. Como o texto é cadastrado no senhasegura, esse menu suspenso é desabilitado. |
| Ativo | Radio button. Selecione se você deseja que o novo texto seja utilizado. Por padrão é marcado como Sim. Caso seja marcada a opção Não, o texto padrão é usado. |
| Visualizar TAGs | Label que informa as TAGs disponíveis para uso no texto do email. Para maiores informações, acesse a documentação de referência de notificações. |
| Assunto | Campos de texto para criação da string que será utilizada como assunto do e-mail de notificação. Aceita as TAGs do senhasegura. |
| Texto do E-mail | Editor de texto para criação do texto que será enviado no e-mail de notificação. Aceita as TAGs do senhasegura. |