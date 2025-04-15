# Senhas

Este documento fornece informações sobre o card **Detalhes da senha** da extensão **MySafe** e as telas **Adicionar senha** e **Editar senha**.

A seção **Senhas** da tela inicial da extensão **MySafe** exibe uma lista das senhas armazenadas pelo usuário ou compartilhadas com ele. Cada senha é representada por um card próprio. Por padrão, os cards são exibidos em um formato compacto. Ao clicar no nome da senha, o card se expande e exibe informações mais detalhadas sobre a senha, oferecendo opções para gerenciar a senha.

## Requisitos

* Uma senha ativa. Saiba mais em [Como gerenciar senhas usando a extensão MySafe](/v4/docs/pt/mysafe-extension-manage-passwords).

## Caminho para acesso

1. Clique na extensão **MySafe** na barra de ferramentas do navegador.  
2. No menu inferior, clique em **MySafe**.  
3. Em **Senhas**, clique na senha desejada.

---

## Card de senha compacto

A tabela a seguir exibe as informações e ações disponíveis para o card de senha em seu formato compacto.

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Nome** | Texto | Nome de identificação da senha. |
| **Ir para URL** | Botão | Direciona para o site onde a senha está cadastrada. |
| **Preencher credenciais** | Botão | Identifica campos de login no site acessado e os preenche com os dados da senha selecionada. Em caso de não identificação de campos de login, a mensagem de erro “**Não foi possível preencher os campos de login**” é exibida. |
| **Copiar senha** | Botão | Copia a senha para a área de transferência. |

## Card de senha expandido

A tabela a seguir exibe as informações e ações disponíveis para o card de senha em seu formato expandido.

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **URL** | Texto | Endereço do site onde a senha está sendo usada. |
| **Nome de usuário** | Texto | Nome de usuário associado à senha. |
| **Tags** | Texto | Palavras-chave associadas à senha. |
| **TOTP** | Texto | Token temporário vinculado à senha, utilizado como um fator adicional na autenticação multifator (MFA). Um ícone de **tempo** exibe a contagem regressiva para a geração de um novo TOTP, que ocorre automaticamente a cada 30 segundos. <br>**Nota:** disponível se uma chave secreta tiver sido configurada durante a criação ou edição da senha.  |
| **Copiar nome de usuário** | Botão | Copia o nome de usuário associado à senha para a área de transferência. |
| **Copiar senha** | Botão | Copia a senha para a área de transferência. |
| **Copiar TOTP** | Botão | Copia o *token* gerado para a área de transferência.<br>**Nota:**  disponível se uma chave secreta tiver sido fornecida no momento de criação ou edição da senha.  |
| **Editar senha** | Botão | Abre a tela **Editar senha**. <br>**Nota:** disponível se o usuário tiver permissão para editar a senha. |
| **Desativar** | Botão | Abre o *pop-up* de confirmação de desativação da senha com as opções **Sim** e **Não.** |

### Telas Adicionar/Editar senha 

As telas **Adicionar senha** e **Editar senha** compartilham os mesmos campos.

### Caminho para acesso da tela Adicionar senha

1. Clique na extensão **MySafe** na barra de ferramentas do navegador.  
2. No menu inferior, clique em **Adicionar item**.

---

### Caminho para acesso da tela Editar senha

1. Clique na extensão **MySafe** na barra de ferramentas do navegador.  
2. No menu inferior, clique em **MySafe**.  
3. Em **Senhas**, clique no card da senha desejada e selecione **Editar**.

---

### 

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome**\* | Campo de texto | Sim | Nome de identificação da senha. |
| **URL**\* | Campo de texto | Sim | Endereço do site onde a senha será usada. <br>**Nota:** esse campo é automaticamente preenchido com o endereço do site acessado no momento da criação da senha. |
| **Nome de usuário**\* | Campo de texto | Sim | Nome de usuário associado à senha. |
| **Senha**\* | Campo de texto | Sim | A senha que está sendo criada ou editada. |
| **Mostrar/esconder** | Botão | Não | Exibe ou oculta a senha criada ou editada. |
| **Gerar senha** | Botão | Não | Gera uma senha automática com base nos critérios definidos.  |
| **Configurar** | Botão | Não | Define os seguintes critérios da senha: *Tamanho da senha, Números, Símbolos, Maiúscula e Minúscula.* |
| **Força da senha** | Barra de progresso | Não | Indica a força da senha. <br>- **Senha muito forte**: quatro barras verdes. <br>- **Senha forte**: três barras verdes. <br>- **Senha média**: duas barras amarelas. <br>- **Senha fraca**: uma barra vermelha. |
| **Segredo** | Campo de texto | Não | Chave secreta usada para gerar um token temporário, TOTP (*Time-based One-time password*), para contas com autenticação multifator. <br> **Nota**: a chave secreta deve ter, pelo menos, 10 caracteres e incluir letras maiúsculas de A-Z e  números de 2-7. |
| **Mostrar/esconder** | Botão | Não | Mostra ou esconde o segredo. |
| **QR code** | Botão | Não | Escaneia o segredo gerado a partir de um QR code. |
| **Tags** | Campo de texto | Não | Palavras-chave para categorizar a senha. |
| **Anotação** | Campo de texto | Não | Informações gerais sobre a senha. |