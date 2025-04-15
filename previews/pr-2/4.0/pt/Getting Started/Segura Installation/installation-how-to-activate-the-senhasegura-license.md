# Como ativar a licença do Segura

Este artigo fornece um guia sobre como ativar a licença do Segura.

## Requisitos
* Acesso ao portal Affinity.

::: (info) (Info)
O portal Affinity é exclusivamente destinado a parceiros do Segura e o acesso a este portal é restrito a eles.
:::

## Ativar a licença do Segura
Para ativar a licença do Segura, siga estas etapas:

1. Abra seu navegador da web (Chrome, Firefox ou Edge).
2. Digite o endereço IP da instância do Segura na barra de endereços do navegador. Você será redirecionado para a tela de ativação.
3. Uma vez na tela de ativação, um código de ativação será exibido. Copie este código para continuar.
4. Abra uma nova janela do navegador e acesse o [portal Affinity](https://affinity.senhasegura.io/flow/auth/signin){target=`_blank`}.
5. Use suas credenciais para fazer o login.
6. Após a autenticação, vá para **Ativação > Ativação > Solicitar Código de Ativação**.
7. Preencha os campos obrigatórios no formulário de ativação:
    * **Hostname ou IP do servidor**: use as informações definidas em sua instância do Segura.
    * **Licença**: selecione a licença desejada.
    * **Dias de validade** *: este campo é válido apenas para *Ambientes de Prova de Conceito* e define a validade da licença.
    * **Ambiente**: selecione entre *Prova de Conceito*, *Produção*, *Contingência* e *Aceitação*.

:::(warning) (Cuidado)
Os termos de licenciamento do Segura são determinados pelo acordo contratual entre o cliente e a MT4 Tecnologia. É crucial entender que esta licença afeta diretamente a capacidade de adicionar usuários e dispositivos à aplicação.
:::

8. Cole o código de ativação que você copiou no passo 3 no campo **Solicitar código**.
9. Selecione os módulos do Segura que você deseja disponibilizar nesta instância.
10. Clique em **Gerar chave de ativação** para iniciar a geração de um código de licença. 

:::(Info) (Info)
Enquanto o contrato de suporte adquirido estiver ativo, a última versão do produto comprado será sempre disponibilizada e ativada, independentemente da versão originalmente contratada. A licença gerada está vinculada à duração do contrato e à máquina na qual foi ativada, não à versão do software. Isso garante que a versão adquirida não chegue ao fim de vida útil (END OF LIFE).
:::

11. Copie o código de licença gerado no campo **Código de ativação** e cole-o na tela de ativação de sua instância do Segura.
12. Após inserir o código de licença, clique em **Ativar aplicação**.

::: (warning) (Cuidado)
Após inserir a chave de ativação, certifique-se de clicar no botão **Ativar aplicação** apenas uma vez. Clicar acidentalmente sem uma licença válida preenchida resultará na desativação da aplicação, exigindo que você repita o processo de ativação da licença.
:::

:::(info) (Info)
Você receberá um resumo detalhado da licença, incluindo informações como o nome do solicitante, a data de início da validade da licença, data de vencimento, configurações de bloqueio automático e os módulos da instância, entre outros detalhes.
:::

Após seguir essas etapas, sua licença do Segura estará ativa, e os módulos selecionados estarão disponíveis para sua instância. Com a licença ativada, você pode habilitar e usar a aplicação Segura.

## Ativar a licença do Segura com o Multi-Tenant

Se você estiver usando o Segura *Multi-Tenant* (disponível em todas as instâncias do Segura a partir da versão 3.33), você pode ativar a licença usando o seguinte caminho: **Grid Menu > Configurações > Ativação da aplicação**.

Observe que essa opção é um atalho para o mesmo recurso encontrado em **Grid Menu > Orbit Server Manager > Ativação da aplicação**. No entanto, esse atalho só estará disponível após a conclusão do processo de ativação inicial, necessária após a instalação.

* * *
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.senhasegura.io/){target=`_blank`}.