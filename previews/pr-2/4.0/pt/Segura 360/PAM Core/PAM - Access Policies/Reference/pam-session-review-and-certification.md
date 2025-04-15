# Revisão e certificação de políticas de acesso

Este documento fornece informações sobre o relatório **Revisão e certificação de políticas de acesso**, que mostra a lista das políticas de acessos do PAM Core que precisam ser revisados. 

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Controle de acesso > Revisão e certificação de políticas de acesso.**
ou
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Controle de acesso > Revisão e certificação > Políticas de acesso.**

---
## Menu de ações

| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de Busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo número de identificação da ordem do cadastro da política de acesso. |
| **Nome da política** | Campo de texto | Filtra pelo nome de cadastro da política de acesso. |
| **Revisor** | Campo de texto | Filtra pelo nome do usuário que realizou a revisão. |
| **Última revisão** | Seletor de data | Filtra as revisões pelo período em que foi realizada a última revisão da política de acesso. |
| **Próxima revisão** | Seletor de data | Filtra as revisões pelo período em que a revisão da política irá expirar. |
| **Status** | Menu suspenso | Filtra as políticas por seu estado. As opções são **Revisado**, **Revisão Pendente** e **Aprovação Pendente.** Limpe o campo para habilitar a opção **Todos**. |
| **Status de aprovação** | Menu suspenso | Filtra as revisões por sua situação. As opções são **Pendente**, **Aprovada**, **Reprovada**, **Expirada** e **Cancelada.** Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código.**  
* **Políticas de acesso.**  
* **Tipo.**  
* **Revisor.**  
* **Última revisão.**  
* **Próxima revisão.**  
* **Status.**  
* **Aprovador:** nome do usuário que realizou a aprovação da política.  
* **Status de aprovação.**  
* **Ações:**  
  * **Revisar**: abre a tela de **Revisão e certificação de política de acesso** para que a revisão seja realizada.  
  * **Histórico**: abre a tela **Histórico de revisão e certificação de usuário**.  

Assim que uma política foi revisada, o campo **Status** mudará para **Revisado**.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
### Tela Revisão e certificação de política de acesso

Nesta tela contém as regras que foram cadastradas na política de acesso, aqui o revisor tem a possibilidade de excluir usuários, aprovadores e critérios. Não é possível realizar adição ou alterar o nome da política. Na aba Justificativa é possível deixar comentários sobre as decisões tomadas durante a revisão.

#### Aba Geral

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Nome da política de acesso** | Campo de texto | Nome da política de acesso a ser revisada. |
| **Status** | Botão *toggle* | Status da política de acesso. |
| **Descrição** | Campo de texto | Texto descritivo da política de acesso. |

#### Aba Usuários

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Usuários** | Tabela | Tabela que contém todos os usuários inseridos na política de acesso. |

#### Aba Aprovadores

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Aprovadores** | Tabela | Tabela que contém todos os usuários inseridos na política de acesso. |
| **Obrigatório especificar código de governança ao justificar?** | Botão *toggle* | Ativa ou desativa a obrigatoriedade se o requerente deve digitar o código ITMS no momento da justificativa. |
| **Sempre adicionar o gestor do usuário aos aprovadores?** | Botão *toggle* | Ativa ou desativa se o usuário responsável pelo departamento do usuário cadastrado deve ser consultado automaticamente como um aprovador adicional a esta política. Dessa forma, este usuário será alertado com os outros aprovadores da aba Aprovadores. |

#### Aba Critérios

:::(info) (**Info**)  
Os filtros são combinações do tipo "E" e não alternativas do tipo "OU".  
:::

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Site*** | Menu suspenso | Opções com os tipos de sites que são visíveis à política. As opções disponíveis serão conforme cadastrado no Segura. |
| **Tipo de dispositivo*** | Menu suspenso | Opções com os tipos de dispositivos que serão visíveis à política. As opções são definidas conforme os tipos de dispositivos cadastrados. |
| **Tipo de credencial*** | Menu suspenso | Opções com os tipos de credenciais que serão visíveis à política. As opções são: *Todos, Chave SSH, Usuário do domínio, Local User* e *Administrador local*. |
| **Dispositivo** | Botão *toggle* | Ativa ou desativa o campo de texto para inclusão dos dispositivos. |
| **Dispositivo (sep. por vírgula)** | Campo de texto | Nome de cadastro do dispositivo. No texto [Campo Dispositivo](https://docs.senhasegura.io/v4/docs/pt/pam-session-about-filling-out-the-device-and-username-fields) estão as possíveis formas de se preencher este campo.|
| **Modelo** | Botão *toggle* | Ativa ou desativa o campo de texto para inclusão dos modelos de dispositivos. |
| **Modelo (sep. por vírgula)** | Campo de texto | Nome dos modelos de dispositivo. |
| **Nome de usuário** | Botão *toggle* | Ativa ou desativa o campo de texto para inclusão dos nomes de usuários. |
| **Username (sep. por vírgula)** | Campo de texto | Nome de usuário da credencial. No texto [Campo Username](https://docs.senhasegura.io/v4/docs/pt/pam-session-about-filling-out-the-device-and-username-fields) estão as possíveis formas de se preencher este campo.|
| **Informação adicional** | Botão *toggle* | Ativa ou desativa o campo de texto para inclusão de informações adicionais. |
| **Informação adicional (sep. por vírgula)** | Campo de texto | Texto com informações adicionais sobre o cadastro. |
| **Tags do dispositivo** | Botão *toggle* | Ativa ou desativa o campo de texto para inclusão de tags para os dispositivos. |
| **Tags do dispositivo (sep. por vírgula)** | Campo de texto | Tags cadastradas para os dispositivos. |
| **Tags da credencial** | Botão *toggle* | Ativa ou desativa o campo de texto para inclusão de tags para credenciais. |
| **Tags da credencial (sep. por vírgula)** | Campo de texto | Tags cadastradas para as credenciais. |

#### Aba Justificativa

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Justificativa** | Campo de texto | Texto com a justificativa do revisor. |

#### Aba Revisão
Estão as informações que foram adicionadas nos passos anteriores, para que seja analisada e caso necessite de alguma mudança, já seja feita antes de finalizar o cadastro. As informações estão agrupadas por cada aba respectivamente.

---
### Tela Histórico de revisão e certificação de usuário

### Menu de ações

| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

### Campos de Busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo número de identificação da ordem do cadastro da política de acesso. |
| **Nome** | Campo de texto | Filtra pelo nome de cadastro da política de acesso. |
| **Nome de usuário** | Campo de texto | Filtra pelo nome de usuário que realizou o cadastro da política. |
| **Revisor** | Campo de texto | Filtra pelo nome do usuário que realizou a revisão. |
| **Última revisão** | Seletor de data | Filtra as revisões pelo período em que foi realizada a última revisão da política de acesso. |
| **Próxima revisão** | Seletor de data | Filtra as revisões pelo período em que a revisão da política irá expirar. |
| **Status** | Menu suspenso | Filtra as políticas por seu estado. As opções são **Aprovada**, **Revisado**, **Revisão Pendente**, **Aprovação pendente** e **Reprovada**. Limpe o campo para habilitar a opção **Todos**. |
| **Aprovador** | Campo de texto | Filtra pelo nome do aprovador da política. |
| **Status de aprovação** | Menu suspenso | Filtra as revisões por sua situação. As opções são **Aprovada**, **Revisado**, **Revisão Pendente**, **Aprovação pendente** e **Reprovada**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código.**  
* **Políticas de acesso.**  
* **Tipo.**  
* **Criador por.**  
* **Revisor.**  
* **Última revisão.**  
* **Próxima revisão.**  
* **Status.**  
* **Aprovador:** nome do usuário que realizou a aprovação da política.  
* **Status de aprovação.**  
* **Ações:**  
  * **Detalhes**: abre a tela **Histórico de revisão e certificação de políticas de acesso**.

---
### Tela Histórico de revisão e certificação de políticas de acesso

### Menu de ações

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ícone de olho** | Ícone | Ao posicionar o cursor sobre este ícone, são exibidas informações detalhadas sobre o usuário que criou o registro e o último usuário que o modificou. |

#### Aba Geral

**Seção políticas de acesso**

| **Item** | **Descrição** |
| :---- | :---- |
| **Nome** | Nome da política de acesso. |
| **Criado por** | Nome de usuário do criador da política. |
| **Visualizar senha** | Opção selecionada para a regra de visualização de senha para política cadastrada. |
| **Iniciar sessão** | Opção selecionada para a regra de iniciar sessão para política cadastrada. |

**Seção Revisão e certificação**

| **Item** | **Descrição** |
| :---- | :---- |
| **Aprovador** | Nome do aprovador da política. |
| **Data** | Data e hora que a aprovação foi realizada. |
| **Status** | Status da situação da política. |
| **Justificativa** | Texto com a justificativa dada pelo aprovador. |

#### Aba Usuários

| **Item** | **Descrição** |
| :---- | :---- |
| **Usuários** | Tabela com as informações de todos os usuários incluídos na política de acesso. |

#### Aba Aprovadores

| **Item** | **Descrição** |
| :---- | :---- |
| **Aprovadores** | Tabela com as informações de todos os aprovadores incluídos na política de acesso. |

#### Aba Critérios

| **Item** | **Descrição** |
| :---- | :---- |
| **Site** | Opção selecionada dos sites disponíveis na política de acesso. |
| **Tipo de Equipamento** | Opção selecionada dos equipamentos disponíveis na política de acesso. |
| **Tipo de Credencial** | Opção selecionada dos tipos de credenciais disponíveis na política de acesso. |
