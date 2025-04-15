# Senhas

Neste documento, você vai encontrar todas as informações sobre a página **Senhas** do **MySafe**.

## **Caminho para acesso**

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **MySafe**.  
2. No menu lateral, selecione **Senhas**.

---

## **Barra superior**

| Item | Descrição |
| ----- | ----- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Adicionar senha** | Representado pelo ícone de soma, abre a tela **[Adicionar senha](/v3-33/docs/pt/mysafe-passwords-screen#telas-adicionareditar-senha)**. |
| **Importação em lote** | Representado pelo ícone de seta apontando para cima, abre a tela para importação de senhas em lote. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio, abre o formulário **[Agendar relatório](/v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports)**. |



## **Campos de busca**

| Item | Descrição |
| ----- | ----- |
| **Código** | Campo que filtra as senhas pelo seu código único de identificação. |
| **Nome** | Campo que filtra as senhas pelo seu nome. |
| **URL** | Campo que filtra as senhas pela URL do site em que está cadastrada. |
| **Nome do usuário** | Campo que filtra as senhas pelo nome de usuário associado à credencial. |
| **Tags** | Campo que filtra as senhas pelas palavras-chave associadas. |
| **Compartilhada** | Campo que filtra as senhas pelo seu status de compartilhamento. As opções disponíveis são **Sim** e **Não**. Clique em **Limpar** para habilitar a opção **Todos**. |
| **Proprietário** | Campo que filtra as senhas pelo nome do usuário que a cadastrou. |
| **Último uso** | Campo que filtra as senhas pelo período em que a senha foi visualzada. Formato `DD/MM/AAAA`. Utilize esse campo para inserir a data inicial do período. A seta que aponta para baixo abre um calendário. |
| **até** | Campo que filtra as senhas pelo período em que a senha foi visualizada. Formato `DD/MM/AAAA`. Utilize esse campo para inserir a data final do período. A seta que aponta para baixo abre um calendário. |
| **Ativo** | Campo que filtra as senhas pelo seu status de ativação. As opções disponíveis são **Sim** e **Não**. Clique em **Limpar** para habilitar a opção **Todos**. |



## **Campos do relatório**

* **Checkbox**: usada para ações em lote.  
* **ID**.  
* **Nome**.  
* **URL**.  
* **Nome do usuário**.  
* **Tags**.  
* **Compartilhada**.  
* **Proprietário**.  
* **Último uso**.  
* **Ativo**.  
* **Ação**: nessa coluna, você encontra as seguintes opções:  
  * **Visualizar senha**: representado pelo ícone de chave, abre a tela [**Detalhes da senha**](https://portal.document360.io/v3-33/docs/pt/mysafe-password-details-screen\#tela-detalhes-da-senha) com todas as informações sobre a senha.  
  * **Ícone dos três pontos verticais**: abre um menu suspenso com as opções: *Compartilhar, Editar, Inativar* e *[Histórico de informações](/v3-33/docs/pt/mysafe-passwords-screen#tela-histórico-de-informações-da-senha)*.

:::(info) (Info)
O relatório exibe 30 registros por tela. Para ir para as próximas telas, clique no botão de avançar ao final do relatório.
:::

## **Botões inferiores**

* **Ativar**: botão para ativação em lote.  
* **Inativar**: botão para inativação em lote.  
* **Compartilhar**: botão para compartilhamento em lote.

### **Tela Detalhes da senha**

Neste seção, você vai encontrar todas as informações sobre a tela **Detalhes da senha**.

| Item | Descrição |
| ----- | ----- |
| **Nome** | Nome atribuído à senha. |
| **URL** | URL do site onde a senha está cadastrada. |
| **Nome do usuário** | Nome de usuário associado à credencial. |
| **Token** | TOTP associado à senha para autenticação multi-fator. |
| **Dono** | Usuário que cadastrou a senha. |
| **Último uso** | Data e hora em que a senha foi usada pela última vez. |
| **Tags** | Palavras-chave associadas à senha. |
| **Observações** | Observações sobre a senha. |
| **Visualizar senha** | Representado pelo ícone de asterisco, abre a janela pop-up **Visualizar senha**. Como medida de segurança, use a barra **Contraste** para visualizar a senha. |
| **Copiar senha** | Representado pelo ícone de duas folhas de papel, copia a senha para área de transferência do usuário. Assim que a senha é copiada, o botão fica verde e seu nome muda para **“Copiado!”** por alguns segundos. |

:::(warning) (Atenção)  
Ao clicar em **Copiar senha**, a informação será adicionada à área de transferência e outros programas poderão acessá-la.  
:::

#### **Seção Usuários com acesso à informação**

| Item | Descrição |
| ----- | ----- |
| **Membro** | Nome do usuário **MySafe** com acesso à senha. |
| **Pode visualizar?** | Indica permissão de visualização sobre os detalhes da senha. Por padrão, sempre que uma senha é compartilhada, essa coluna fica marcada com **Sim**. |
| **Pode editar?** | Indica permissão de edição sobre os detalhes da senha. As opções disponíveis são **Sim** e **Não**. |

### **Telas Adicionar/Editar senha**

Nesta seção, você vai encontrar todas as informações sobre as telas **Adicionar senha** e **Editar senha** que possuem os mesmos campos.

| Item | Descrição |
| ----- | ----- |
| **Nome**\* | Campo para inserção de um nome para a senha. |
| **Nome do usuário**\* | Campo para inserção de um nome de usuário associado à credencial. |
| **URL** | Campo para inserção do URL do site onde a credencial será usada. |
| **Senha** | Campo para inserção da senha que está sendo criada ou editada. O ícone de olho exibe a senha. |
| **Gerar uma senha** | Localizado ao lado do campo **Senha**, botão que gera uma senha segura para você. |
| **Ícone dos três pontos verticais** | Do lado direito do botão **Gerar uma senha**, abre uma caixa para definição dos parâmetros da senha. Cada uma das seguintes opções possui uma caixa de seleção disponível: *Tamanho da senha, Maiúsculas, Minúsculas, Números*, e *Símbolos*. O botão **Confirmar** salva as definições selecionadas. |
| **Força da senha** | Representado por quatro linhas horizontais, indica a força da senha. Quatro linhas verdes indicam força máxima, enquanto uma linha verde indica força mínima. |
| **Secret key (TOTP)** | A chave secreta usada para gerar um TOTP para contas que demandam autenticação multi-fator. |
| **Tags** | Palavras-chave associadas à senha. |
| **Anotações** | Observações sobre a senha. |
| **Ícone de olho** | Presente somente na tela **Editar senha**, ícone que mostra informações sobre quem adicionou a senha e quando, bem como quem fez a última alteração e quando. |

:::(Info) (Info)
Os campos com asterisco são obrigatórios.
:::


### **Tela Histórico de informações da senha** 

Nesta seção, você vai encontrar todas as informações sobre a tela em que é possível visualizar os históricos de versão de uma senha.

### **Campos de busca**

| Item | Descrição |
| ----- | ----- |
| **Nome ou URL** | Campo que filtra as senhas por seu nome ou URL. |
| **Autor** | Campo que filtra as senhas pelo usuário que realizou alguma alteração. |
| **Versão** | Campo que filtra as senhas pela sua versão de alteração. |
| **Data do histórico** | Campo que filtra as senhas pelo período em que a alteração foi realizada. Formato `DD/MM/AAAA`. Utilize esse campo para inserir a data inicial do período. A seta que aponta para baixo abre um calendário. |
| **até** | Campo que filtra as senhas pelo período em que a alteração foi realizada. Formato `DD/MM/AAAA`. Utilize esse campo para inserir a data final do período. A seta que aponta para baixo abre um calendário. |

### **Campos do relatório**

* **Nome ou URL**.  
* **Autor**.  
* **Versão**.  
* **Data do histórico**.  
* **Ação**: nessa coluna, você acessa:  
  * **Visualizar senha**: representado pelo ícone de lupa, abre a tela **[Detalhes da senha](/v3-33/docs/pt/mysafe-passwords-screen#tela-detalhes-da-senha)**.

:::(info) (Info)  
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.

:::