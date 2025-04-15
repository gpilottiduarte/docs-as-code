# Senhas

Este documento fornece informações sobre a tela **Senhas** do **MySafe** no aplicativo móvel **Segura**.

## Caminho para acesso

1. Na tela **Produtos** do aplicativo móvel **Segura**, selecione **MySafe**.  
2. Na barra superior, no canto esquerdo, clique no menu lateral e selecione **Senhas**.

## Barra superior

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Menu lateral** | Menu suspenso | Exibe foto de perfil do usuário, nome de usuário e email e as opções *Início, Senhas, Anotações,* e *Sair*. |
| **Pesquisar** | Botão | Abre um campo de texto para pesquisar itens salvos no **MySafe**. |
| **Menu de produtos** | Menu suspenso | Abre a tela **Produtos**. |

## Card de senha compacto

A tabela a seguirdescreve os ícones e as informações exibidas na versão compacta do *card* de senha.

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Nome** | Texto | Nome de identificação da senha. |
| **Username** | Texto | Nome de usuário associado à senha. |
| **Copiar senha** | Botão  | Copia a senha para a área de transferência. |
| **Editar senha** | Botão  | Abre a tela **Editar senha**. |

## Card de senha expandido

A tabela a seguirdescreve os ícones e as informações exibidas na versão expandida do *card* de senha.

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **URL** | Texto | Endereço do site onde a senha está sendo usada. |
| **Tags** | Texto | Palavras-chave associadas à senha. |
| **TOTP** | Texto | *Token* temporário vinculado à senha, utilizado como um fator adicional na autenticação multifator (MFA). Um ícone de tempo exibe a contagem regressiva para a geração de um novo TOTP, que ocorre automaticamente a cada 30 segundos. <br> **Nota:** disponível se uma chave secreta tiver sido adicionada para a senha.  |
| **Ver senha** | Botão  | Abre um *card* na parte inferior da tela com os botões para *Ir para a URL*, *Copiar,* e *Visualizar a senha*. |
| **Copiar username** | Botão  | Copia o nome de usuário associado à senha para a área de transferência. |
| **Copiar TOTP** | Botão | Copia o *token* gerado para a área de transferência. <br> **Nota:**  disponível se uma chave secreta tiver sido adicionada para a senha. |

### Telas Nova senha/Editar senha

As telas **Nova senha** e **Editar senha** compartilham os mesmos campos.

### Caminho para acesso da tela Adicionar nova senha

1. Na seção **Senhas** da tela **MySafe** do app, clique em **Adicionar** no canto inferior direito.

### Caminho para acesso da tela Editar senha

1. Na seção **Senhas** da tela **MySafe** do app, identifique a senha que deseja editar.  
2. Clique em **Editar**.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Cancelar** | Botão | Não | Cancela a ação e retorna para a tela **Senhas**. |
| **Salvar** | Botão | Não | Salva a senha.  |
| **Nome**\* | Campo de texto | Sim | Nome de identificação da senha. |
| **URL** | Campo de texto | Não | Endereço do site onde a senha será usada. |
| **Username**\* | Campo de texto | Sim | Nome de usuário associado à senha. |
| **Senha**\* | Campo de texto | Sim | A senha que está sendo criada ou editada.  |
| **Mostrar/senha** | Botão | Não | Mostra ou esconde a senha inserida. |
| **Configurar** | Botão | Não | Define os seguintes critérios da senha: *Tamanho da senha, Maiúsculas, Minúsculas, Números*, e *Símbolos*.  |
| **Gerar senha** | Menu suspenso | Não | Gera uma senha automática com base nos critérios definidos.  |
| **Confirmar** | Botão | Não | Salva os critérios selecionados para geração automática da senha. |
| **Força da senha** | Barra de progresso | Não | Indica a força da senha: <br> - **Senha muito forte:** quatro barras verdes. <br> - **Senha forte:** .uma barra vermelha, uma barra amarela e uma barra verde. <br> -**Senha média:** uma barra vermelha e uma barra amarela. <br> - **Senha fraca:** uma barra vermelha.   |
| **Chave secreta (TOTP)** | Campo de texto | Não | Chave secreta usada para gerar um *token* temporário, TOTP (*Time-based One-time password*), para contas que demandam autenticação multifator. <br> **Nota**: a chave deve ter, pelo menos, 10 caracteres, letras maiúsculas de A-Z e  números de 2-7.  |
| **Mostrar/Esconder chave secreta (TOTP)** | Botão | Não | Mostra ou oculta a chave secreta (TOTP). |
| **Tags** | Campo de texto | Não | Palavras-chave para categorizar a senha. |
| **Anotações** | Campo de texto | Não | Informações gerais sobre a senha. |

