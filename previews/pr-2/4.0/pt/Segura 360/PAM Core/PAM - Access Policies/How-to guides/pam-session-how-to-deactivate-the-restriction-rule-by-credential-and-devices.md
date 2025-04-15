# Como desabilitar a regra de restrição por credenciais e dispositivos

Na configuração padrão do controle de acesso no Segura, quando um usuário está inserido em mais de uma política de acesso com diferentes regras, a plataforma seguirá a restrição baseada na credencial e no dispositivo.

Por exemplo, se a credencial está cadastrada em duas ou mais políticas com regras de acesso diferentes, quando esta credencial for realizar o acesso ou visualizar a senha em algum dispositivo, o Segura irá ler todas as políticas em que esta credencial está cadastrada e ver a regra tanto pela credencial quanto pelo dispositivo, para permitir o acesso.

Para desabilitar esta regra de restrição e deixar as configurações da política de acesso apenas pela regra mais restritiva da credencial, siga os passos deste documento.

Para descrições detalhadas dos campos disponíveis na configuração de Controle de acesso, acesse o documento [Parâmetros do sistema - Controle de acesso](/v4/docs/pt/pam-session-system-parameters-access-control).

## Requisitos

* Ser um usuário administrador.

---
## Desativar regra padrão

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.
2. No menu lateral selecione **Parâmetros do sistema** >  **Global**.
3. Selecione a aba **Controle de acesso**.
4. No parâmetro **Forçar regra de acesso por dispositivo de domínio?***, selecione **Não**.
5. Clique em **Salvar**.

Uma mensagem de confirmação será exibida pelo sistema. Agora o Segura irá restringir o acesso do usuário cadastrado em mais de uma política de acesso, de acordo com a política que contém a regra mais restritiva, somente avaliando a credencial.

---
### Exemplo da regra de restrição Segura

#### Padrão Segura
**Forçar regra de acesso por dispositivo de domínio**: Sim
**Nome da credencial**: Teste
Política em que a credencial **Teste** está inserida:

* **Grupo A**: acesso ao dispositivo 1 sem justificativa.
* **Grupo B**: acesso ao dispositivo 2 com justificativa.
* **Grupo C**: acesso ao dispositivo 3 com justificativa e aprovação.

Pela regra padrão do Segura, ao realizar um acesso ao dispositivo será levado em conta a regra estabelecida na credencial **Teste** e no dispositivo que está sendo acessado, ou seja, ao fazer o acesso ao **dispositivo 1** não será pedido a justificativa, já que esta é a regra do **Grupo A**, na qual este dispositivo pertence.

#### Padrão alterado
**Forçar regra de acesso por dispositivo de domínio**: Não
**Nome da credencial**: Teste
Política em que a credencial **Teste** está inserida:

* **Grupo A**: acesso ao dispositivo 1 sem justificativa.
* **Grupo B**: acesso ao dispositivo 2 com justificativa.
* **Grupo C**: acesso ao dispositivo 3 com justificativa e aprovação.

Quando a regra está desativada, o campo **Forçar regra de acesso por dispositivo de domínio** está com o valor de **Não**, ao tentar acesso ao **dispositivo 1**, o usuário terá que fornecer uma justificativa e aguardar por aprovação, já que a regra que irá valer é a do **Grupo C**, pois a regra mais restritiva é a que será imposta, independentemente do dispositivo que está sendo acessado, já que só a regra aplicada na credencial é levada em conta.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.