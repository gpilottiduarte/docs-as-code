# Senhas

Neste documento, você encontrará informações detalhadas sobre o **card Detalhes da senha** da extensão **MySafe**, as telas **Nova senha** e **Editar senha**.

Na tela inicial da extensão **MySafe**, dentro da seção **Senhas**, você encontrará uma lista das senhas armazenadas no **MySafe**. Essas senhas foram adicionadas pelo usuário ou compartilhadas com sua conta por outro usuário do **MySafe**. Cada senha é representada por um card próprio. Por padrão, os cards são exibidos em um formato compacto. No entanto, clicar no nome da senha revela um card expandido, fornecendo informações mais detalhadas sobre a senha e oferecendo opções para realizar ações.

## Caminho para acesso

1. Clique na **extensão MySafe** na barra de ferramentas do navegador.
2. No menu inferior, clique em **MySafe**, representado pelo ícone de chave.
3. Em **Senhas**, clique na senha que você deseja gerenciar.

## Requisitos

- Uma senha ativa. Para adicionar uma senha ao **MySafe** usando a extensão, acesse o documento sobre [Como gerenciar senhas usando a extensão MySafe](/v3-33/docs/pt/mysafe-extension-manage-passwords).

---

## Card de senha compacto

A tabela abaixo exibe as informações e ações disponíveis para o card de senha em seu formato compacto.

| Item                | Descrição                                                                                                 |
|---------------------|-----------------------------------------------------------------------------------------------------------|
| **Nome**            | Do lado esquerdo do card, representado pelo ícone de globo, é exibido o nome atribuído à senha.           |
| **Ir para URL**     | Do lado direito do card, representado pelo ícone de link externo, direciona para o site onde a senha está registrada. |
| **Login**           | Do lado direito do card, representado pelo ícone de login, procura por campos de login na página atual e os preenche com os dados da credencial selecionada. |
| **Copiar senha**    | Do lado direito do card, representado pelo ícone de duas folhas de papel, copia a senha registrada para a área de transferência do usuário. |

## Card de senha expandido

A tabela abaixo exibe as informações e ações disponíveis para o card de senha em seu formato expandido.

| Item                | Descrição                                                                                                         |
|---------------------|-------------------------------------------------------------------------------------------------------------------|
| **URL**             | URL do site onde a senha está sendo usada.                                                                       |
| **Nome de usuário** | Nome de usuário da credencial.                                                                                     |
| **Tags**            | Palavras-chave associadas à credencial.                                                                           |
| **TOTP**            | O token gerado com base na chave secreta fornecida, juntamente com um relógio indicando o tempo válido restante para o token. Este campo só estará disponível se uma chave secreta codificada em base32 tiver sido fornecida ao criar ou editar a senha. |
| **Copiar nome de usuário** | Representado pelo ícone de duas folhas de papel, copia o nome de usuário associado à senha para a área de transferência do usuário. |
| **Copiar senha**    | Representado pelo ícone de duas folhas de papel, copia a senha para a área de transferência do usuário.          |
| **Copiar TOTP**     | Representado pelo ícone de duas folhas de papel, copia o token gerado. Este campo só estará disponível se uma chave secreta codificada em base32 tiver sido fornecida ao criar ou editar a senha. |
| **Editar senha**    | Representado pelo ícone de lápis e papel, abre a tela **[Editar senha](/v3-33/docs/pt/mysafe-extension-passwords#telas-nova-senhaeditar-senha)**. Este botão só estará disponível se o usuário tiver permissão para editar a senha. |

---

### Telas Nova senha/Editar senha

## Caminho para acesso da tela Nova senha

1. Clique na **extensão MySafe** na barra de ferramentas do navegador.
2. No menu inferior, clique em **Novo item**, representado pelo ícone de adição.

***

### Caminho para acesso da tela Editar senha

1. Clique na **extensão MySafe** na barra de ferramentas do navegador.
2. No menu inferior, clique em **MySafe**, representado pelo ícone de chave.
3. Em **Senhas**, clique na senha que deseja gerenciar.
4. Assim que o card da senha expandir, clique em **Editar**, representado pelo ícone de lápis e papel.

***

### Campos do formulário

| Item              | Descrição                                                                                                            |
|-------------------|----------------------------------------------------------------------------------------------------------------------|
| **Nome***         | Campo para inserção de um nome para a senha.                                                                        |
| **URL***          | Campo para inserção da URL do site onde a senha está sendo usada.                                                     |
| **Nome de usuário*** | Campo para inserção do nome de usuário da credencial.                                                               |
| **Senha***        | Campo para inserção da senha que está sendo adicionada ou editada. O ícone de **olho** exibe ou esconde a senha que você está digitando. O ícone de **atualizar** gera ou atualiza automaticamente uma senha segura para você. |
| **Segredo**       | A chave secreta codificada em base32 usada para gerar o TOTP. O ícone de **olho** revela a chave secreta. O ícone de **QR code** permite escanear e ler a chave secreta a partir de um QR code. |
| **Tags**          | Palavras-chave associadas à senha.                                                                                   |
| **Anotação**      | Observações sobre a senha.                                                                                           |

::: (Info) (Info)
Os itens com asterisco são obrigatórios.
:::
