# Aba critérios

Neste documento você encontrará todas as informações sobre a aba de **Critérios** da tela de cadastro de um novo grupo de acesso. Nesta seção será decidido quais serão os dispositivos e credenciais que os usuários do grupo poderão ter acesso.

:::(info) (**Info**)
Para saber como fazer o cadastro de um grupo de acesso, acesse a documentação [Como cadastrar um grupo de acesso](/v3-33/docs/pt/pam-session-how-to-add-an-access-group).
:::

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Configurações** > **Acesso** > **Grupos de acesso** > **+ Novo**.
3. Ou na lista selecione o grupo que deseja alterar, clicando no ícone de lápis e papel

---
## Cadastro de grupo de acesso - Critérios
**Item**|**Descrição**
---|---
**Dispositivo (sep. por vírgula)**|Nome de cadastro do dispositivo. No texto [Campo Dispositivo](#campo-dispositivo) estão as possíveis formas de se preencher este campo.
**Modelo (sep. por vírgula)**|Modelo do dispositivo.
**Username (sep. por vírgula)**|Nome de usuário da credencial. No texto [Campo Username](#campo-username) estão as possíveis formas de se preencher este campo.
**Informação adicional (sep. por vírgula)**|Texto com informações adicionais sobre o cadastro
**Tags do dispositivo (sep. por vírgula)**|Tags cadastradas para os dispositivos.
**Tags da credencial (sep. por vírgula)**|Tags cadastradas para as credenciais.
**Site***|Checkbox para selecionar os tipos de sites que serão visíveis ao grupo. As opções são: *Todos* e *Default*.
**Tipo de dispositivo***|Checkbox para selecionar os tipos de dispositivos que serão visíveis ao grupo. As opções são definidas conforme os tipos de dispositivos cadastrados.
**Tipo de credencial***|Checkbox para selecionar os tipos de credenciais que serão visíveis ao grupo. As opções são: *Todos, Chave SSH, Domain Admin, Domain User, Local User* e *Local administrator*.

### Campo Dispositivo
O campo **Dispositivo** poderá ser preenchido com algumas combinações que facilita a escolha dos dispositivos que estarão disponíveis para aquele grupo de acesso.

As combinações são:

* O nome de cadastro do dispositivo mais o número IP do dispositivo. Por exemplo: **`DEVICE-ABC(100.100.100.100)`**, estará disponível ao grupo o dispositivo que possui **exatamente** esse nome e IP.
* Um asterisco no início mais uma parte que contém no nome do dispositivo mais um asterisco ao final. Por exemplo: **`*device*`**, estará disponível ao grupo o dispositivo que contém a palavra **device** em alguma parte do nome.
* O início do nome do dispositivo mais um asterisco ao final. Por exemplo: **`device*`**, estará disponível ao grupo o dispositivo que possui a palavra device no **início** do nome.
* O início do nome do dispositivo um asterisco no meio e o final do nome do dispositivo. Por exemplo: **`device*final`**, estará disponível ao grupo o dispositivo que **começa** com device no nome, alguma **outra palavra no meio** e **termina** o nome com a palavra final.

### Campo Username
Quando o nome de usuário da credencial corresponder ao nome de usuário do senhasegura, você pode usar a máscara **`USERNAME`** para garantir que apenas as credenciais visíveis sejam aquelas com o mesmo nome de acesso do usuário senhasegura.

Por exemplo: O nome de usuário utilizado para acessar a instância senhasegura é **“joao”**, e a regra do grupo será que apenas João terá acesso às credenciais com o mesmo nome de usuário, ou seja, apenas as credenciais em que o nome de usuário da credencial também seja **“joao”**.

Para que isso seja possível, a seguinte sintaxe será utilizado para preencher o campo:

* **`[#USERNAME#]`** que trará somente as credenciais que possuem exatamente o nome de joao.
* **`[#USERNAME#]*`** que trará todas as credenciais que possuir joao no começo do nome da credencial independentemente de como esteja o final.
* **`*[#USERNAME#]*`** que trará todas as credenciais que possuir joao no meio do nome da credencial, independentemente de como esteja o começo e o final.

Para entender mais sobre os grupos de acesso do senhasegura, acesse o documento [Grupos de acesso - Os critérios para determinar quais dados são acessíveis](/v3-33/docs/pt/user-management-access-groups#os-critérios-para-determinar-quais-dados-são-acessíveis).

