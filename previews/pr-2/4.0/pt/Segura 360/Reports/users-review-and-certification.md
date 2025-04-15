# Revisão e certificação de usuários

Este documento fornece informações sobre a tela do relatório **Usuário**, que exibe informações sobre a revisão e certificação de usuário no senhasegura.

## Caminho para acesso

1. No senhasegura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Relatórios**.  
2. No menu lateral, selecione **Revisão e certificação \> Revisão e certificação de usuários.**

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
| **Código** | Campo de texto | Filtra os usuários por seu código de identificação dentro do senhasegura. |
| **Nome** | Campo de texto | Filtra os usuários pelo seu nome dentro do senhasegura. |
| **Nome de usuário** | Campo de texto | Filtra os usuários pelo seu nome de usuário dentro do senhasegura. |
| **Revisor** | Campo de texto | Filtra os usuários pelo nome do seu revisor dentro do senhasegura. |
| **Última revisão** | Campo de data | Filtra os usuários pelo período em que foram revisados pela última vez  dentro do senhasegura. |
| **Próxima revisão** | Campo de data | Filtra os usuários pelo período para a próxima revisão  dentro do senhasegura. |
| **Status** | Menu suspenso | Filtra os usuários por seu estado de revisão. As opções são Aprovada, *Revisado, Revisão Pendente, Aprovação pendente ou Reprovada*. Limpe o campo para habilitar a opção **Todos**. |
| **Aprovador** | Campo de texto | Filtra os usuários pelo nome do aprovador do cadastro  dentro do senhasegura. |
| **Status de aprovação** | Menu suspenso | Filtra os usuários por seu estado de aprovação. As opções são Aprovada, *Revisado, Revisão Pendente, Aprovação pendente ou Reprovada*. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código.**  
* **Nome.**  
* **Nome de usuário.**  
* **Donos:**  
* **Revisor.**  
* **Última revisão.**  
* **Próxima revisão.**  
* **Status.**  
* **Aprovador.**  
* **Status de aprovação.**  
* **Ações:**   
  * **Detalhes:** direciona para a tela **Revisão e certificado**.

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Tela Revisão e Certificado

Se um usuário já tiver sido revisado, você poderá acessar os detalhes da revisão ao clicar em **Detalhes** no botão de **Ações** no relatório **Revisão e certificação de usuários**.

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
| **Papel** | Campo de texto | Papel do usuário no senhasegura. |
| **Built-in** | Campo de texto | Indica se o papel é um dos papéis padrão do senhasegura. |
| **Descrição** | Campo de texto | Descrição do papel. |

### Aba Access Policy

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Access policy** | Campo de texto | Nome da política de acesso. |
| **Module** | Campo de texto | Módulo ao qual a política de acesso se aplica. |
| **Descrição** | Campo de texto | Descrição da política de acesso. |
| **Devices** | Botão | Abre o modal **Dispositivos**, que exibe todos os dispositivos que fazem parte da política de acesso. |

### Modal Dispositivos

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Buscar** | Campo de texto | Filtra os dispositivos de acordo com o texto inserido. |
| **Device name** | Campo de texto | Nome do dispositivo. |
| **Gerenciamento** | Campo de texto | Hostname ou endereço de IP do dispositivo. |
| **Tipo** | Campo de texto | Tipo do dispositivo. |
| **Fabricante** | Campo de texto | Fabricante do dispositivo. |
| **Modelo** | Campo de texto | Modelo do dispositivo. |

### 