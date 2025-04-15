# Usuários

Neste documento, você vai encontrar todas as informações sobre o relatório **Usuários**, que exibe informações sobre os usuários cadastrados no senhasegura.

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações.**  
2. No menu lateral, selecione **Gestão de usuários \> Usuários.**

## Barra superior

| Item | Descrição |
| ----- | ----- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Novo** | Representado pelo ícone de soma, abre a tela **Usuário** que possibilita o cadastro de novos usuários. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio, abre o formulário **Agendar relatório**. |

## Campos de busca

| Item | Descrição |
| ----- | ----- |
| **Código** | Campo de texto. Filtra pelo código de cadastro do usuário no senhasegura. |
| **Nome** | Campo de texto. Filtra pelo nome do usuário no senhasegura. |
| **Nome do usuário** | Campo de texto. Filtra pelo *username* do usuário no senhasegura. |
| **Departamento** | Menu suspenso. Permite selecionar os departamentos cadastrados no senhasegura para filtrá-los. |
| **E-Mail** | Campo de texto. Filtra pelo endereço de e-mail do usuário. |
| **Tipo de criação** | Menu suspenso. Permite selecionar o tipo de criação do usuário para filtrá-los. |
| **Ativo** | Menu suspenso. Permite selecionar a situação do usuário no senhasegura para filtrá-los. |

## Campos do relatório

* **Código.**  
* **Nome.**  
* **Nome do usuário.**  
* **E-mail.**  
* **Código customizado.**  
* **Tipo de criação.**  
* **Criado em:** exibe a data de criação do usuário no formato `DD/MM/AAAA HH:MM`  
* **Último login:** exibe a data do último login do usuário no formato `DD/MM/AAAA HH:MM`.  
* **Ativo.**  
* **Data de desativação:** exibe a data que o usuário foi inativado no formato `DD/MM/AAAA HH:MM`.  
* Na coluna **Ação** você tem duas opções:  
  * **Alterar**: representado pelo ícone de lápis e papel, abre a janela **Usuário**.  
  * Ao clicar nos três pontos verticais, você tem duas opções:  
    * **Histórico**: representado pelo ícone do relógio, abre a janela **Histórico do usuário**.  
    * **Esquecer usuário**: representado pelo ícone de **X**, esquece o usuário.

## Janela Usuário

A janela **Usuário** é utilizada tanto para cadastro de novos usuários quanto para alteração de dados de um usuário. Esta janela é composta por três abas.

### Aba Configurações

| Item | Descrição |
| ----- | ----- |
| **Nome** | Campo de texto. Nome do usuário no senhasegura. Exemplo: Teste. |
| **Nome do usuário** | Campo de texto. Username do usuário no senhasegura. Exemplo: testesenhasegura. |
| **Senha** | Campo de texto. Senha do usuário no senhasegura. Por padrão este campo estará desabilitado. |
| **Definir senha atual** | Caixa de seleção. Ao clicar nessa caixa o campo **Senha** será habilitado e você poderá definir a senha do usuário. |
| **Exibir senha** | Caixa de seleção. Exibe a senha do usuário. |
| **Gerar uma senha** | Link. Ao clicar nesse link é gerada uma senha aleatória que é inserida no campo **Senha** do usuário. |
| **Departamento** | Menu suspenso. Permite selecionar um departamento para atrelar o usuário. |
| **E-mail** | Campo de texto. Endereço de e-mail do usuário. Exemplo: teste@teste.com. |
| **Telefone** | Campo de texto. Número de telefone do usuário. Exemplo: \+55 51 123456789\. |
| **Estado** | *Radio button*. Situação do usuário no senhasegura. Pode ser **Ativo** ou **Inativo**. |
| **Ignorar autenticação multifator?** | *Radio button*. Seleciona se o usuário irá ignorar a autenticação multifator ou não. **Nota**: Esta opção só é exibida se o usuário editado não for o usuário logado |
| **Adicionar \+** | Botão que permite adicionar um menu suspenso para seleção do Grupo de usuários ao qual o usuário pertencerá. É possível cadastrar mais de um grupo de usuários. |
| **Ícone de lixeira** | Apaga o grupo de usuários selecionado. |

### Aba Papéis

Na aba **Papéis** você encontra o botão de adicionar papéis, ele é representado pelo sinal de soma ao lado da palavra **Papéis**. Ao clicar no sinal de soma o modal **Papéis** é aberto.

#### Papéis

| Item | Descrição |
| :---- | :---- |
| **Ícone de lixeira** | Apaga o papel. |
| **Papel** | Nome do papel no senhasegura. |
| **Built-in** | Indica se o papel é um dos papéis da instalação padrão do senhasegura. Pode ser **Sim** ou **Não**. |
| **Descrição** | Breve descrição da funcionalidade do papel no senhasegura. |

#### Modal Papeis

**Campos de busca**

| Item | Descrição |
| :---- | :---- |
| **Papel** | Campo de texto. Filtra pelo nome do papel no senhasegura. |
| **Built-in** | Campo de texto. |

**Campos do relatório**

| Item | Descrição |
| :---- | :---- |
| **Papel** | Nome do papel no senhasegura. |
| **Built-in** | Indica se o papel é um dos papéis da instalação padrão do senhasegura. Pode ser **Sim** ou **Não**. |
| **Descrição** | Breve descrição da funcionalidade do papel no senhasegura. |

### Aba Grupo de acesso

A aba de **Grupo de acesso** é dividida conforme os módulos. Cada módulo compõe uma sessão da aba composta de caixas de seleção que são referentes aos grupos de acesso cadastrados no senhasegura. Nesta aba serão apresentados os grupos de acesso cadastrados no senhasegura. 

| Item | Descrição |
| :---- | :---- |
| **Título** | Cada módulo é apresentado de forma separada, com o seu nome em negrito. |
| **Caixas de seleção** | Seleciona o grupo de acesso ao qual o usuário fará parte. Pode ser mais de um. Cada grupo de acesso é apresentado abaixo do título do módulo e conforme o nome cadastrado no senhasegura. |

