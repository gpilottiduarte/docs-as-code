# Políticas de acesso

Este documento fornece informações sobre a tela **Políticas de acesso** no menu **Controle de acesso**, que exibe a lista de políticas de acesso registradas no **Domum Remote Access**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **Domum Remote Access**.  
2. No menu lateral, selecione **Controle de acesso \> Políticas de acesso**.

## Menu de ações

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Adicionar** | Botão | Direciona para a tela [Adicionar políticas de acesso](/v4/docs/pt/access-policies#tela-adicionareditar-políticas-de-acesso). |
| **Sincronizar** | Botão | Reprocessar as políticas cadastradas. |
| **Ações** | Menu suspenso | Exibe as opções: *Imprimir relatório*, *Exportar CSV*, e *Agendar relatório*. |

## Campos de busca

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Nome** | Campo de texto | Filtra as políticas pelo nome de identificação. |
| **Visualizar** | Menu suspenso | Filtra as políticas com permissão para visualizar a senha. As opções são: **Sim** ou **Não**.  Limpe o campo para habilitar a opção **Todos**. |
| **Aprovação para visualizar** | Menu suspenso | Filtra as políticas pela necessidade de aprovação para visualizar a senha. As opções são: **Requer aprovação** ou **Não requer aprovação**. Limpe o campo para habilitar a opção **Todos**. |
| **Sessão** | Menu suspenso | Filtra as políticas pela permissão de iniciar uma sessão. As opções são: **Sim** ou **Não**. Limpe o campo para habilitar a opção **Todos**. |
| **Aprovação para sessão** | Menu suspenso | Filtra as políticas pela necessidade de aprovação para iniciar uma sessão. As opções são: **Requer aprovação** ou **Não requer aprovação**. Limpe o campo para habilitar a opção **Todos**. |
| **Status** | Menu suspenso | Filtra as políticas pelo status de ativação. As opções são: **Ativo** e **Inativo**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

- **Código**: exibe o código de identificação das políticas de acesso.  
- **Nome**.  
- **Permissão**:  exibe as permissões concedidas às políticas de acesso.  
- **Aprovação**.  
- **Status**.  
- **Ações**:  
    - **Editar**: abre a tela [Editar política de acesso](/v4/docs/pt/access-policies#tela-adicionareditar-políticas-de-acesso).  
    - **Clonar**: realiza uma cópia exata do registro a ser clonado. Na caixa de confirmação, clique em **Sim** para confirmar a ação.  
    
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

## Tela Adicionar/Editar políticas de acesso

Esta seção fornece informações sobre as telas **Adicionar política de acesso** e **Editar política de acesso** que compartilham os mesmos campos.

### Aba Geral

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Nome da política de acesso \*** | Campo de texto  | Sim | Nome de identificação da política de acesso. |
| **Status** | Botão de opção | Não | Define o estado de ativação das políticas. As opções são: **Ativo** ou **Inativo.** |
| **Descrição** | Campo de texto | Não | Informações gerais sobre as políticas de acesso. |
| **Usuários Limitados podem solicitar seus próprios acessos?**\* | Botão de opção | Sim | Permite que um usuário limitado solicite acesso. As opções são: **Sim** ou **Não**. |

### Aba Senha

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Permitir usuários a visualizar senhas** | Botão toggle | Não | Permite que usuários visualizem senhas.  |
| **Requer aprovação para visualizar uma senha** | Botão toggle | Não | Ativa um fluxo de trabalho para aprovações de visualização de senha. É necessário definir limites de aprovação. |
| **Aprovações necessárias para visualizar** | Seletor de quantidade | Não | Define o número de aprovações necessárias para permitir a visualização de uma senha. |
| **Reprovações necessárias para cancelar** | Seletor de quantidade | Não | Define o número de reprovações necessárias para rejeitar a visualização de uma senha. |
| **Aprovação em níveis** | Botão toggle | Não | Especifica que as aprovações são concedidas hierarquicamente em diferentes níveis. |

### Aba Sessões

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Permitir usuários a iniciar sessões** | Botão toggle | Não | Permite que usuários iniciem sessões. |
| **Requer aprovação para iniciar sessão** | Botão toggle | Não | Ativa um fluxo de trabalho para aprovações de início de sessão. |
| **Aprovações necessárias** | Seletor de quantidade | Não | Define o número de aprovações necessárias para iniciar uma sessão. |
| **Reprovações necessárias para cancelar** | Seletor de quantidade | Não | Define o número de reprovações necessárias para rejeitar o início de uma sessão. |
| **Aprovação em níveis** | Botão toggle | Não | Especifica que as aprovações de sessão são concedidas hierarquicamente em níveis. |

### Aba Aprovadores

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Adicionar / Remover selecionados** | Botão | Não | Adiciona ou remove os aprovadores selecionados. |
| **Tabela de aprovadores** | Tabela | Não | Exibe a lista de aprovadores com os campos: *ID*, *Nome*, *Usuário*, *Email*, *Tipo de criação*, *Departamento*, *Adicionado por*, *Adicionado em* e *Nível*. |
| **Código** | Text field | Não | Exibe um identificador único para cada aprovador. |
| **Nome** | Campo de texto | Não | Exibe o nome completo do aprovador. |
| **Usuário** | Campo de texto | Não | Exibe o nome de usuário do aprovador. |
| **Email** | Campo de texto | Não | Exibe o endereço de email do aprovador. |
| **Tipo de criação** | Campo de texto | Não | Indica se o aprovador foi adicionado manualmente ou por processo automatizado. |
| **Departamento** | Campo de texto | Não | Exibe o departamento associado ao aprovador. |
| **Adicionado por** | Campo de texto | Não | Exibe o nome do usuário que adicionou o aprovador à lista. |
| **Adicionado em** | Campo de texto | Não | Exibe a data e hora em que o aprovador foi adicionado à lista. |
| **Nível** | Menu suspenso | Não | Exibe o nível atribuído ao aprovador. |
| **Obrigatório especificar código de governança ao justificar?\*** | Botão toggle | Sim | Exige que os usuários forneçam um código ITSM ao justificar sua solicitação de acesso. |

### Aba Revisão

Use a aba **Revisão** para verificar todas as informações inseridas nas abas anteriores.