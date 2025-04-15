# Como desabilitar a regra de restrição por credenciais e dispositivos

Na configuração padrão do controle de acesso no senhasegura, quando um usuário está inserido em mais de um grupo de acesso com diferentes regras, a plataforma seguirá a restrição baseada na credencial e no dispositivo.

Por exemplo, se a credencial está cadastrada em dois ou mais grupos com regras de acesso diferentes, quando esta credencial for realizar o acesso ou visualização de senha em algum dispositivo, o senhasegura irá ler todos os grupos em que esta credencial está cadastrada e ver a regra tanto pela credencial quanto pelo dispositivo, para permitir o acesso.

Para desabilitar esta regra de restrição e deixar as configurações do grupo de acesso apenas pela regra mais restritiva da credencial, siga os passos deste artigo.

:::(info) (**Info**)
Para descrições detalhadas dos campos disponíveis na configuração de Controle de acesso, acesse o documento de referência, [Parâmetros do sistema - Controle de acesso](/v3-33/docs/pt/pam-session-system-parameters-access-control).
:::

## Requisitos

* Ser um usuário administrador.

---
## Desativar regra padrão

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral selecione **Parâmetros do sistema** >  **Parâmetros do sistema**.
3. Nas abas disponíveis, selecione **Controle de acesso**.
4. No parâmetro **Forçar regra de acesso por dispositivo de domínio?***, selecione **Não**.
5. Clique em **Salvar**.

Uma mensagem de confirmação será exibida pelo sistema. Agora o senhasegura irá restringir o acesso do usuário cadastrado em mais de um grupo de acesso, de acordo com o grupo com a regra mais restritiva, somente avaliando a credencial.

---
### Exemplo da regra de restrição senhasegura

#### Padrão senhasegura
**Forçar regra de acesso por dispositivo de domínio**: Sim
**Nome da credencial**: Teste
Grupos em que a credencial **Teste** está inserida:

* **Grupo A**: acesso ao dispositivo 1 sem justificativa.
* **Grupo B**: acesso ao dispositivo 2 com justificativa.
* **Grupo C**: acesso ao dispositivo 3 com justificativa e aprovação.

Pela regra padrão do senhasegura, ao realizar um acesso ao dispositivo será levado em conta a regra estabelecida na credencial **Teste** e no dispositivo que está sendo acessado, ou seja, ao fazer o acesso ao **dispositivo 1** não será pedido a justificativa, já que esta é a regra do **Grupo A**, na qual este dispositivo pertence.

#### Padrão alterado
**Forçar regra de acesso por dispositivo de domínio**: Não
**Nome da credencial**: Teste
Grupos em que a credencial **Teste** está inserida:

* **Grupo A**: acesso ao dispositivo 1 sem justificativa.
* **Grupo B**: acesso ao dispositivo 2 com justificativa.
* **Grupo C**: acesso ao dispositivo 3 com justificativa e aprovação.

Quando a regra está desativada, o campo **Forçar regra de acesso por dispositivo de domínio** está com o valor de **Não**, ao tentar acesso ao **dispositivo 1**, o usuário terá que fornecer uma justificativa e aguardar por aprovação, já que a regra que irá valer é a do **Grupo C**, pois a regra mais restritiva é a que será imposta, independentemente do dispositivo que está sendo acessado, já que só a regra aplicada na credencial é levada em conta.

---
## Próximos passos:
[Parâmetros do sistema - Controle de acesso](/v3-33/docs/pt/pam-session-system-parameters-access-control)

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.