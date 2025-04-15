# Solicitar acesso - usuário terceiro

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Domum Remote Access**.  
2. No menu lateral, selecione **Solicitar acesso \> Terceiros** e clique em **Adicionar**.

## Aba Geral

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Fornecedor \*** | Menu suspenso | Sim | Seleciona o fornecedor. |
| **Usuário \*** | Menu suspenso | Sim | Seleciona o usuário. |

### Detalhes da solicitação

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Justificativa \*** | Campo de texto | Sim | Insira uma justificativa para o acesso. |
| **Motivo \*** | Menu suspenso | Sim | Selecione o motivo do acesso. As opções são: *Alteração*, *Incidente* e *Trabalho remoto*. |
| **Código de governança** | Campo de texto | Não | Insira o código de governança. |

## Aba Dispositivos

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Adicionar / Remover selecionados** | Botão | Não | Adiciona ou remove os dispositivos selecionados. |
| **Tabela de Dispositivos** | Tabela | Não | Os campos da tabela são: *Código*, *Dispositivo*, *Modelo*, *Tipo de Dispositivo*, *Site*, e *Domínio*. |
| **Código** | Campo de texto | Não | Código do dispositivo. |
| **Dispositivo** | Campo de texto | Não | Dispositivo a ser acessado. |
| **Modelo** | Campo de texto | Não | Modelo do dispositivo. |
| **Tipo do dispositivo** | Campo de texto | Não | Tipo do dispositivo. |
| **Site** | Campo de texto | Não | Site relacionado ao dispositivo. |
| **Domínio** | Campo de texto | Não | Domínio relacionado ao dispositivo. |

## Aba Credenciais

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Adicionar / Remover selecionados** | Botão | Não | Adiciona ou remove as credenciais selecionadas. |
| **Tabela de Credenciais** | Tabela | Não | Os campos da tabela são: *Código*, *Tipo de Credencial*, *Nome de Usuário*, *Dispositivo*, *Domínio*, *Iniciar Sessão*, e *Visualizar Senha*. |
| **Tipo de Credencial** | Campo de texto | Não | Tipo da credencial. |
| **Nome de Usuário** | Campo de texto | Não | Nome de usuário atribuído à credencial. |
| **Dispositivo** | Campo de texto | Não | Dispositivo associado à credencial. |
| **Domínio** | Campo de texto | Não | Domínio associado à credencial. |
| **Iniciar Sessão** | Caixa de seleção | Não | Permite que a credencial inicie uma sessão. |
| **Visualizar Senha** | Caixa de seleção | Não | Permite que a credencial visualize senhas. |

## Aba de Restrição de acesso

### Período de permissão de acesso

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Início** | Seletor de data e hora | Seleciona a data e a hora de início do acesso permitido. |
| **Duração** | Campo de texto | Define a duração do acesso. |

#### Seção Dias de permissão de acesso

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Todos os dias** | Botão toggle e caixa de seleção | **Não** | Se ativada, o usuário terá que solicitar aprovação todos os dias. Caso desativada, selecione os dias da semana em que os usuários membros do grupo precisarão pedir aprovação. |

#### Seção Horários de permissão de acesso

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Todos os horários** | Botão toggle | **Não** | Ativa ou desativa o período de horário que o usuário terá que pedir aprovação. |
| **Personalizado** | Botão toggle e seletor de hora | **Não** | Ativa ou desativa uma faixa de horário específica em que o usuário terá que pedir aprovação. Quando ativada dois seletores de hora serão habilitados para que seja estipulado o começo e o fim do período. |

### Seção Sessões

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Ilimitado** | Caixa de seleção | Seleciona se o número de sessões é ilimitado. |
| **Quantidade Máxima** | Seletor de quantidade | Se o campo **Ilimitado** não estiver selecionado, defina o número máximo de sessões permitidas. |

## Revisão

Use a aba **Revisão** para verificar todas as informações inseridas nas abas anteriores.
