# Usuário

Este documento fornece informações sobre a tela do relatório **Usuário**, que exibe informações sobre a revisão e certificação de usuário no Segura.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Controle de acesso \> Revisão e certificação \> Usuários.**

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra os usuários por seu código de identificação dentro do Segura. |
| **Nome** | Campo de texto | Filtra os usuários pelo seu nome dentro do Segura. |
| **Nome de usuário** | Campo de texto | Filtra os usuários pelo seu nome de usuário dentro do Segura. |
| **Revisor** | Campo de texto | Filtra os usuários pelo nome do seu revisor dentro do Segura. |
| **Última revisão** | Campo de data | Filtra os usuários pelo período em que foram revisados pela última vez  dentro do Segura. |
| **Próxima revisão** | Campo de data | Filtra os usuários pelo período para a próxima revisão  dentro do Segura. |
| **Status** | Menu suspenso | Filtra os usuários por seu estado de revisão. As opções são Aprovada, *Revisado, Revisão Pendente, Aprovação pendente ou Reprovada*. Limpe o campo para habilitar a opção **Todos**. |
| **Aprovador** | Campo de texto | Filtra os usuários pelo nome do aprovador do cadastro  dentro do Segura. |
| **Status de aprovação** | Menu suspenso | Filtra os usuários por seu estado de aprovação. As opções são Aprovada, *Revisado, Revisão Pendente, Aprovação pendente ou Reprovada*. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código.**  
* **Nome.**  
* **Nome de usuário.**  
* **E-mail: e-mail do usuário.**  
* **Revisor.**  
* **Última revisão.**  
* **Próxima revisão.**  
* **Status.**  
* **Aprovador.**  
* **Status de aprovação.**  
* **Ações:**   
  * **Revisão e certificado**: direciona para a tela **Revisão e Certificado**.  
  * **Histórico da certificação**: direcionado para a tela **Histórico de revisão e certificação de usuário**.

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Tela Revisão e Certificado

Esta seção fornece informações sobre a revisão do usuário.

### Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Botão de olho** | Botão | Ao posicionar o cursor sobre este botão, são exibidas informações detalhadas sobre o usuário que criou o registro e o último usuário que o modificou. |

### Aba Configurações

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome** | Campo de texto | Sim | Nome identificador do usuário no Segura. |
| **Nome de usuário** | Campo de texto | Sim | Nome de usuário identificador do usuário no Segura. |
| **Departamento** | Menu suspenso | Não | Departamento do usuário no Segura. |
| **E-mail** | Campo de texto | Não | Endereço de e-mail do usuário no Segura. |
| **Telefone** | Campo de texto | Não | Número de telefone do usuário no Segura. É informado no padrão `XX-XX-XXXXXXXX`. |
| **Estado** | Botão de opção | Não | Define o estado do usuário. As opções **Sim** ou **Não**. |
| **Ignorar autenticação multifator?** | Botão de opção | Não | Define se a autenticação MFA será ignorada por este usuário. As opções **Sim** ou **Não**. |
| **Grupos de usuário** | Campo de texto | Não | Define os grupos de usuário ao qual o usuário faz parte. |

### Aba Papéis

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Papel** | Campo de texto | Não | Papel do usuário no Segura. |
| **Built-in** | Campo de texto | Não | Indica se o papel é um dos papéis padrão do Segura. |
| **Descrição** | Campo de texto | Não | Descrição do papel. |

### Aba Políticas de acesso

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Política** | Campo de texto | Não | Nome da política de acesso. |
| **Module** | Campo de texto | Não | Módulo ao qual a política de acesso se aplica. |
| **Descrição** | Campo de texto | Não | Descrição da política de acesso. |
| **Devices** | Botão | Não | Abre o modal **Dispositivos**, que exibe todos os dispositivos que fazem parte da política de acesso. |

:::(warning) (Atenção)  
Usuários inseridos em mais de uma política de acesso do mesmo módulo podem ter configurações diferentes do esperado.  
:::

### Aba Justificativa

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Justificativa** | Campo de texto | Sim | Campo para que o revisor descreva a justificativa para a sua decisão sobre o usuário. |

## Tela Histórico de revisão e certificação de usuário

Esta tela compartilha os mesmos campos de busca e relatório disponíveis na tela Usuário . No entanto, possui funcionalidades específicas: ao selecionar a opção **Detalhes**, o sistema direciona para a tela **Certification history**, que contém os seguintes campos:

### Aba General

#### Seção User information

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Name** | Campo de texto | Indica o nome do usuário. |
| **Username** | Campo de texto | Indica o nome de usuário do usuário. |
| **E-mail** | Campo de texto | Indica o endereço de e-mail do usuário. |
| **Telephone** | Campo de texto | Indica o número de telefone do usuário. |
| **Department** | Campo de texto | Indica o departamento do usuário. |
| **Ignore multi-factor authentication?** | Campo de texto | Indica se o usuário irá ignorar a autenticação multifator. |
| **User group** | Campo de texto | Indica o grupo de usuários do usuário. |

#### Seção Review and certification details

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Reviewer** | Campo de texto | Indica o nome do revisor para aquele registro de usuário. |
| **Review date** | Campo de texto | Indica a data em que a revisão foi feita. Exibida no formato `DD/MM/AAAA HH:MM:SS`. |
| **Status** | Campo de texto | Indica o status do registro do usuário. |
| **Review justification** | Campo de texto | Exibe o texto da justificativa conforme escrito pelo revisor. |

### Aba Papéis

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Papel** | Campo de texto | Papel do usuário no Segura. |
| **Built-in** | Campo de texto | Indica se o papel é um dos papéis padrão do Segura. |
| **Descrição** | Campo de texto | Descrição do papel. |
| **Ação** | Campo de texto | Indica a ação que foi realizada pelo revisor em relação aos papéis. |

### Aba Access Policy

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Access policy** | Campo de texto | Nome da política de acesso. |
| **Module** | Campo de texto | Módulo ao qual a política de acesso se aplica. |
| **Descrição** | Campo de texto | Descrição da política de acesso. |
| **Devices** | Botão | Abre o modal **Dispositivos**, que exibe todos os dispositivos que fazem parte da política de acesso. |
| **Ação** | Campo de texto | Indica a ação que foi realizada pelo revisor em relação à política de acesso. |

## Modal Dispositivos

Comum aos relatórios **Certification History** e **Revisão e Certificado**. Acessível ao clicar no botão **Devices** na aba de **Políticas de Acesso**.

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Buscar** | Campo de texto | Filtra os dispositivos de acordo com o texto inserido. |
| **Device name** | Campo de texto | Nome do dispositivo. |
| **Gerenciamento** | Campo de texto | Hostname ou endereço de IP do dispositivo. |
| **Tipo** | Campo de texto | Tipo do dispositivo. |
| **Fabricante** | Campo de texto | Fabricante do dispositivo. |
| **Modelo** | Campo de texto | Modelo do dispositivo. |
