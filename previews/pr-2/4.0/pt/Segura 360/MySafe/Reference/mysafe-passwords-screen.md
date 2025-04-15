# Senhas

Este documento fornece informações sobre a tela do relatório **Senhas** que exibe as senhas acessíveis ao seu usuário do **MySafe** e possibilita visualizar, adicionar, editar, compartilhar, desativar, ativar e restaurar versões anteriores dos itens.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **MySafe**.  
2. No menu lateral, selecione **Senhas**.

---

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela **Adicionar senha.** |
| **Ativar** | Botão | Disponível após a seleção de pelo menos um item, ativa múltiplos itens simultaneamente.  |
| **Desativar** | Botão | Disponível após a seleção de pelo menos um item, desativa múltiplos itens simultaneamente. |
| **Compartilhar** | Botão | Disponível após a seleção de pelo menos um item, compartilha múltiplos itens simultaneamente. |
| **Ações** | Menu suspenso | Exibe as opções *Importação em lote, Imprimir relatório, Exportar CSV* e *Agendar relatório.* |

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as senhas pelo código de identificação no Segura. |
| **Nome** | Campo de texto | Filtra as senhas pelo nome de identificação. |
| **URL** | Campo de texto | Filtra as senhas pelo endereço do site em que estão cadastradas. |
| **Nome do usuário** | Campo de texto | Filtra as senhas pelo nome de usuário associado. |
| **Tags** | Campo de texto | Filtra as senhas pelas palavras-chave associadas. |
| **Compartilhada** | Menu suspenso | Filtra as senhas pelo seu status de compartilhamento. As opções são **Sim** ou **Não**. Limpe o campo para habilitar a opção **Todos**. |
| **Proprietário** | Campo de texto | Filtra as senhas pelo nome do usuário que as adicionou ao **MySafe**. |
| **Último uso** | Seletor de data | Filtra as senhas pelo período em que foram visualizadas.  |
| **Status** | Menu suspenso | Filtra as senhas pelo seu estado de ativação. As opções são **Ativo** ou **Inativo.** Limpe o campo para habilitar a opção **Todos.** |

## Campos do relatório

* **Caixa de seleção**: usada para ações em lote.  
* **Código**.  
* **Nome**.  
* **URL**.  
* **Nome de usuário**.  
* **Tags**.  
* **Compartilhada**.  
* **Proprietário**.  
* **Último uso**.  
* **Status**.  
* **Ações:**  
  * **Copiar:** copia a senha para a área de transferência.  
  * **Visualizar senha**: abre a tela **Detalhes da senha** com todas as informações sobre a senha.  
  * **Compartilhar:** abre a tela **Compartilhar.**  
  * **Editar:** abre a tela **Editar senha.**  
  * **Desativar:** abre um pop-up de confirmação com as opções **Sim** ou **Não.**  
  * **Histórico:** abre a tela do histórico de versões do item.  

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.  
:::

### Tela Detalhes da senha

#### Aba Geral

Nesta aba, usuários visualizam informações gerais do item.

| Item | Descrição |
| :---- | :---- |
| **Nome** | Nome de identificação da senha. |
| **Proprietário** | Usuário que adicionou a senha ao **MySafe**. |
| **Url** | Endereço do site onde a senha está cadastrada. O botão **Ir para a URL** abre o site em outra aba. |
| **Nome do usuário** | Nome de usuário associado. |
| **TOTP** | Token temporário vinculado à senha, utilizado como um fator adicional na autenticação multifator (MFA). Um ícone de **tempo** exibe a contagem regressiva para a geração de um novo TOTP (*Time-based One-time Password*), que ocorre automaticamente a cada 30 segundos. <br>**Nota:** disponível se uma **Secret Key (TOTP)** tiver sido configurada durante a criação ou edição da senha. |
| **Último uso** | Data e hora em que a senha foi visualizada pela última vez. |
| **Tags** | Palavras-chave associadas à senha. |
| **Observações** | Informações gerais sobre a senha. |
| **Visualizar senha** | Botão que abre a janela pop-up **Senha.** Ajuste a barra de **Contraste** para visualizar a senha. |
| **Copiar a senha** | Botão que copia a senha para área de transferência do usuário e muda para **“Copiado\!”** por alguns segundos quando acionado. |

::: (warning) (Atenção)  
Ao clicar em **Copiar a senha**, a informação é adicionada à área de transferência e outros programas podem acessá-la.  
:::

#### Aba Compartilhamento

Esta aba exibe informações sobre o compartilhamento do item com outros usuários **MySafe.**

| Item | Descrição |
| :---- | :---- |
| **Membro** | Nome do usuário **MySafe** com acesso à senha. |
| **Pode visualizar** | Permissão de visualização sobre os detalhes da senha. Sempre que um item é compartilhado, essa coluna fica marcada com **Sim**. |
| **Pode editar** | Permissão de edição sobre os detalhes da senha. As opções são **Sim** ou **Não**. |

### Tela Compartilhar

Nesta tela, usuários podem selecionar as opções **Interno** para compartilhar suas senhas com usuários **MySafe** por tempo indeterminado ou **Externo** para compartilhar senhas temporariamente com pessoas que não possuem conta no **MySafe.**

#### Compartilhamento interno

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Usuários** | Menu suspenso | Busca usuários **MySafe** por nome ou grupos pessoais. |
| **Permissão de acesso** | Caixa de seleção | Define as permissões de acesso à senha. As opções são **Pode visualizar** (padrão) e **Pode editar**.   |
| **Remover usuário** | Botão | Remove o usuário selecionado. |

#### Compartilhamento externo/único

#### Pré-requisitos

* Permissão de **Compartilhamento externo** concedida pelo administrador do **MySafe**. Saiba mais em [Como configurar o MySafe](/v4/docs/pt/how-to-configure-mysafe).

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Nome** | Texto | Não | Exibe o nome de identificação da senha. |
| **Url** | Texto | Não | Exibe o endereço do site onde a senha está cadastrada. |
| **Tipo** | Texto | Não | Exibe o tipo do item. As opções são *Senha, Arquivo, Anotação* e *Segredo de API*. |
| **E-mail do destinatário** | Campo de texto | Sim | Insere o(s) email(s) da(s) pessoa(s) com quem a senha será compartilhada. |

**Seção Detalhes de compartilhamento**

A **Data de validade** está condicionada às permissões definidas pelo administrador no menu **Administração global \> Opções de compartilhamento.** 

Se o administrador definiu a data de validade em **1 hora**, o usuário que tentar selecionar uma data superior a 1 hora, por exemplo, 24 horas, receberá uma mensagem de erro informando que o período selecionado excede o limite máximo definido pelo administrador.

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Data de validade**\* | Menu suspenso | Sim | Seleciona o período em que o item compartilhado ficará disponível para acesso. As opções são *1 hora, 24 horas, 1 semana, 30 dias* e *Customizado*. A opção **Customizado** habilita os campos de data e hora para seleção personalizada de uma data de validade. |
| **Máximo de acessos**\* | Botão de opção | Sim | Define quantas vezes o destinatário poderá acessar o item compartilhado dentro do período estabelecido. As opções são *Sem limite, Compartilhamento único* e *Customizado*.  Por padrão, a opção **Compartilhamento único** exibe o numeral **1**.  A opção **Customizado** habilita a seleção de um numeral que define a quantidade de vezes que a pessoa poderá acessar o item compartilhado. Digite o número ou utilize o seletor de quantidade. |

### Telas Adicionar/Editar senha

As telas **Adicionar senha** e **Editar senha** compartilham os mesmos campos.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome**\* | Campo de texto | Sim | Nome de identificação da senha. |
| **Nome do usuário**\* | Campo de texto | Sim | Nome de usuário associado à senha. |
| **URL** | Campo de texto | Não | Endereço do site onde a senha será usada. |
| **Nova senha** | Campo de texto | Não | A senha que está sendo criada ou editada. <br>**Nota:** a senha fica oculta na tela **Editar senha.** Deixe o campo em branco para manter a senha atual. |
| **Exibir** | Botão | Não | Exibe ou oculta a senha digitada.  |
| **Gerar**  | Botão | Não | Gera uma senha automática com base nos critérios definidos.  |
| **Configurar** | Botão | Não | Define os seguintes critérios da senha: *Tamanho da senha, Maiúsculas, Minúsculas, Números*, e *Símbolos*.  |
| **Confirmar** | Botão | Não | Salva os critérios selecionados para geração automática da senha.  |
| **Força da senha** | Barra de progresso | Não | Indica a força da senha.  <br>- **Senha muito forte**: quatro barras verdes. <br> - **Senha forte**: três barras verdes. <br> - **Senha média**: duas barras amarelas. <br> - **Senha fraca**: uma barra vermelha. |
| **Secret key (TOTP)** | Campo de texto | Não | Chave para gerar o token temporário TOTP, em caso de conta com autenticação multi-fator. <br> **Nota:** a chave secreta deve ter, pelo menos, 10 caracteres e incluir apenas letras maiúsculas de A-Z e números de 2-7. |
| **Tags** | Campo de texto. | Não | Palavras-chave para categorizar a senha. |
| **Anotações** | Campo de texto. | Não | Informações gerais sobre a senha. |

### Tela Histórico

Nesta tela, usuários visualizam e restauram as versões anteriores de uma senha.

#### Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Nome ou URL** | Campo de texto | Filtra as versões da senha pelo nome ou endereço do site em que a senha está cadastrada. |
| **Autor** | Campo de texto | Filtra as versões da senha pelo usuário que realizou alguma alteração. |
| **Versão** | Campo de texto | Filtra as senhas pelo número da versão. |
| **Data da versão** | Seletor de data | Filtra as senhas pelo período em que foram alteradas. |

### 

#### Campos do relatório

* **Nome ou URL**.  
* **Autor**.  
* **Versão**.  
* **Data da versão**.  
* **Ações**:  
  * **Visualizar senha**: abre a tela **Detalhes da versão**.  
  * **Restaurar versão:** restaura a senha para a versão escolhida.

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.

:::

#### Tela Detalhes da versão

Essa tela exibe informações sobre a versão selecionada do item.

| Item | Descrição |
| :---- | :---- |
| **Nome** | Nome de identificação da senha. |
| **Criador**  | Nome do usuário que adicionou a senha ao **MySafe**. |
| **Editor** | Nome do usuário que alterou a senha.  |
| **Url** | Endereço do site onde a senha está cadastrada. O botão **Ir para Url** abre o site em outra aba. |
| **Nome do usuário** | Nome de usuário associado. |
| **Tags** | Palavras-chave associadas à senha. |
| **Anotações** | Informações gerais sobre a senha. |
| **Data de início** | Data e hora em que a senha foi adicionada ao **MySafe**. |
| **Data de fim** | Data e hora em que que a senha foi alterada. |
| **Visualizar senha** | Botão que abre a janela pop-up **Senha.** Ajuste a barra de **Contraste** para visualizar a senha. |
| **Copiar a senha** | Botão que copia a senha para área de transferência do usuário e muda para **“Copiado\!”** por alguns segundos quando acionado. |
| **Restaurar versão** | Botão que retorna a senha para a versão selecionada e muda para **“Restaurado\!”** por alguns segundos quando acionado. |
