# Como conectar uma organização da AWS

Neste artigo, você irá aprender como conectar uma organização da Amazon Web Services (AWS), incluindo todas as contas sob a unidade organizacional (OU), ao **Cloud Entitlements**.

## Requisitos

- Uma organização AWS.
- Uma conta de gerenciamento sob uma unidade organizacional (OU).
- Acesso confiável para StackSets dentro da AWS Organizations.

## Conectar uma organização AWS

Para conectar sua organização AWS ao **Cloud Entitlements**, siga estas etapas:

1. Acesse o menu esquerdo do **Cloud Entitlements**.
2. Clique em **Configuração** para abrir um menu suspenso.
3. Selecione **Amazon Web Services**.
4. No canto superior direito, clique em **+ Conectar**.
5. Selecione a opção **Organização**.
6. Em outra aba ou janela, acesse o **Console AWS** como um usuário root.
7. Acesse **AWS Organizations**.
8. Crie uma nova organização ou selecione uma já existente.
9. Copie o **ID root da organização** e cole-o no campo **ID da organização** do Cloud Entitlements.
10. Baixe o arquivo YAML do **Template do CloudFormation**.
11. No **Console AWS**, navegue até **CloudFormation** e crie uma nova **Pilha**.

:::(Info) (Info)
Certifique-se de ativar o acesso confiável na área **StackSets** dentro do **CloudFormation**.
:::

12. Faça upload do arquivo YAML de template.

:::(Info) (Info)
Este template já cria todas as funções IAM necessárias e um StackSet para integrar o Cloud Entitlements com sua organização AWS. Você não precisa modificar nada sobre a pilha nesse momento.
:::

13. Clique no botão **Próximo** e marque o checkbox *Entendo que o AWS CloudFormation pode criar recursos do IAM com nomes personalizados*.
14. Uma vez que o processo de criação da pilha esteja concluído, copie o valor do **ARN da Role** na guia **Outputs**.
15. Cole o valor do **ARN da Role** no **Cloud Entitlements**.
16. Clique em **Conectar**.

Se conectado com sucesso, sua organização AWS aparecerá na lista de organizações conectadas.

:::(Error) (Important)
Se a conexão não for bem-sucedida, você deve reiniciar o processo. Primeiro, no Console AWS, delete o StackSet criado pelo template CloudFront e, em seguida, delete a pilha. Além disso, remova a organização do Cloud Entitlements antes de criar outra. Você não pode conectar uma organização que já está conectada ao Cloud Entitlements.
:::

Além disso, você pode ativar ou desativar a organização alternando o **Status switch**.