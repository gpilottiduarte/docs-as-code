# Parâmetros do sistema - Controle de Acesso

Este documento fornece informações sobre a tela do formulário **Parâmetros do sistema**, na aba **Controle de acesso**, que se refere às parametrizações de dos acessos no Segura.

:::(warning) (**Cuidado**)  
Alguns parâmetros em versões anteriores do Segura não estão mais presentes nesta documentação. Sugerimos que você evite mudar os parâmetros que não estão listados neste documento.  
:::

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Parâmetros do sistema > Global > Controle de acesso**.

:::(warning) (**Atenção**)  
Todos os campos vêm preenchidos com um valor padrão, recomendado pelo Segura. Contudo, você pode fazer modificações conforme sua necessidade.  
::: 

---
## Aba Controle de acesso

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Partes da senha*** | Seletor de quantidade | Sim | Quantidade de partes em que a senha será dividida para grupos com custódia múltipla. Podendo escolher entre os números 1 e 5. Por padrão: **2** |
| **Tempo de exibição da senha (s)*** | Seletor de quantidade | Sim | Tempo máximo em segundos que a janela da senha ficará aberta. Selecione zero para não fechar. Por padrão: **30** |
| **Tempo validade justificativa (min)*** | Seletor de quantidade | Sim | Tempo que a justificativa de acesso a uma senha vale. Neste período o usuário não precisará colocar outra justificativa para acessar a senha novamente. Por padrão: **60** |
| **Tempo validade aprovação (min)*** | Seletor de quantidade | Sim | Tempo padrão que a aprovação de uma solicitação irá valer, em minutos. Por padrão: **60** |
| **Aprovador pode alterar validade da aprovação?*** | Botão de opção | Sim | Parâmetro para permitir que o aprovador altere o parâmetro de validade da aprovação. Por padrão: **Sim** |
| **Permitir somente um grupo por usuário?*** | Botão de opção | Sim | Parâmetro para definir se um usuário pode ou não fazer parte de mais de um grupo de acesso. Por padrão: **Não** |
| **Listar somente aprovadores com permissão?*** | Botão de opção | Sim | Parâmetro para decidir se somente os aprovadores com permissão poderão ser listados. Por padrão: **Não** |
| **Permitir que um aprovador possa aprovar a própria solicitação?*** | Botão de opção | Sim | Parâmetro para definir se um aprovador pode aprovar a própria solicitação. Por padrão: **Não** |
| **Permitir cadastrar credenciais duplicadas?*** | Botão de opção | Sim | Parâmetro para definir se será permitido cadastrar credenciais duplicadas. Por padrão: **Não** |
| **Permitir cadastrar dispositivos com IP duplicado?*** | Botão de opção | Sim | Parâmetro para definir se será permitido cadastrar dispositivos com IP duplicado. Por padrão: **Sim** |
| **Permitir aprovação em lote?*** | Botão de opção | Sim | Parâmetro para definir se a importação em lote será permitida. Por padrão: **Não** |
| **Forçar regra de acesso por domínio de dispositivo*** | Botão de opção | Sim | Parâmetro para desabilitar a regra de maior restrição para os grupos. A solicitação de cada dispositivo segue a configuração do grupo de acesso de seu respectivo grupo. Por padrão: **Sim** |
| **É necessária aprovação para mudar as funções dos usuários?*** | Botão de opção | Sim | Parâmetro para definir se será necessário aprovação para mudar as funções dos usuários. Caso não haja aprovadores para Gerenciamento de Usuários, as alterações serão aplicadas sem aprovação. Por padrão: **Sim** |
| **Tornar obrigatório o preenchimento dos campos abaixo:** | Caixa de seleção | Não | Define se será obrigatório para **Usuários** e **Aprovadores** o preenchimento dos campos a seguir. Por padrão: **Usuários** e **Aprovadores**. |
| **Notificar o solicitante do resultado da solicitação através de:** | Caixa de seleção | Não | Parâmetro para definir se o solicitante será notificado sobre a solicitação por E-Mail e/ou Tela. Por padrão: **E-mail** e **Tela**. |
| **Notificar o aprovador de novas solicitações através de:** | Caixa de seleção | Não | Parâmetro para definir  se o aprovador será notificado para solicitações por E-Mail e/ou Tela. Por padrão: **E-mail** e **Tela**. |
| **Nome de exibição para campos "Código de Governança"*** | Campo de texto | Sim | Parâmetro para definir uma mensagem para Governance Code. Por padrão: **Governance Code**. |

### Seção Mobile App

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Autorizar o uso por todos os usuários*** | Botão de opção | Sim | Parâmetro para definir se todos os usuários terão acesso ao aplicativo mobile. Por padrão: **Sim**. |
| **Solicitar aprovação de dispositivo*** | Botão de opção | Sim | Parâmetro para definir se será necessário solicitar aprovação do dispositivo que está sendo utilizado para o acesso. A solicitação de conexão do App deverá ser aprovada por um administrador. Por padrão: **Não**. |

:::(info) (**Info**)  
Revise as configurações de rede para garantir a conectividade do aplicativo.  
:::