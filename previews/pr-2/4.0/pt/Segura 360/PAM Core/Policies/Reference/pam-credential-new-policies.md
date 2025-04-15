# Cadastro de novas políticas de credenciais

Este documento fornece informações sobre a tela do formulário **Políticas**, onde é possível cadastrar as políticas das credenciais.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Gerenciamento > Credenciais > Políticas.**

---
## Aba Informações
Esta seção fornece informações sobre a aba Informação com os dados sobre a política a ser cadastrada.
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Nome da política de credenciais*** | Campo de texto | Sim | Nome identificador da política de credenciais. |
| **Status*** | Botão *toggle* | Sim | Ativa ou desativa o status da política que está sendo criada. |
| **Força da senha*** | Menu suspenso | Sim | Determina o nível da força da senha que a política terá. As opções são: *Alta*, *Média* e *Baixa*. |
| **Prioridade*** | Seletor de quantidade | Sim | Define a prioridade de aplicação da política se o Segura encontrar mais de uma política que se aplique à credencial. |
| **Permitir visualização simultânea?***  | Botão *toggle* | Sim | Ativa ou desativa a visualização simultânea da senha, independente do usuário com a custódia da senha, todos que fazem parte desta política terão acesso. |
| **Permitir sessão simultânea?*** | Botão *toggle* | Sim | Ativa ou desativa a possibilidade de iniciar sessões com a mesma credencial simultaneamente. |
| **Tempo de expiração por consulta** | Seletor de quantidade e menu suspenso | Não | Define o intervalo de tempo no qual o Segura mudará automaticamente a senha após a visualização por um usuário. Primeiro escolha um número e depois uma unidade a qual esse número irá se referir. As opções são: *Minutos*, *Horas*, *Dias* e *Meses*. |
| **Tempo de expiração por decurso** | Seletor de quantidade e menu suspenso | Não | Define o período máximo de validade de uma senha, contado a partir da última vez que ela foi alterada. Primeiro escolha um número e depois uma unidade a qual esse número irá se referir. As opções são: *Minutos*, *Horas*, *Dias* e *Meses*. |
| **Reutilizar a mesma senha por** | Seletor de quantidade e menu suspenso | Não | Define o período durante o qual todas as credenciais sob a mesma política compartilham a mesma senha, iniciando na primeira execução de troca de senha para qualquer credencial dessa política. As opções são: *Minutos*, *Horas*, *Dias* ou *Meses*. Durante esse tempo, todas as credenciais alteradas receberão a mesma senha. Por exemplo, se o período for definido em duas horas e ocorrerem 10 trocas de senha dentro desse intervalo, todas as 10 credenciais terão a mesma senha. |

:::(info) (**Info**)  
Por padrão, para senhas fortes o sistema garante que não sejam repetidas.  
:::

#### Seção Dias de expiração
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Todos os dias** | Caixa de seleção | Não | Se ativada, o usuário terá que solicitar aprovação todos os dias. Caso desativada, selecione os dias da semana em que os usuários membros do grupo precisarão pedir aprovação. |

### Seção Horas de expiração  
#### Adicionar hora por decurso
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Adicionar** | Botão | Não | Adiciona uma nova linha para que seja inserido uma nova hora. |
| **Tabela de horário** | Tabela | Não | Dados dos horários adicionados. |

#### Adicionar hora por consulta
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Adicionar** | Botão | Não | Adiciona uma nova linha para que seja inserido uma nova hora. |
| **Tabela de horário** | Tabela | Não | Dados dos horários adicionados. |

## Aba Critério  
Esta seção fornece informações sobre a aba Critérios com os critérios da política a ser cadastrada.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Dispositivo** | Botão *toggle* | Não | Ativa ou desativa o campo de texto para inclusão dos dispositivos. |
| **Dispositivo (sep. por vírgula)** | Campo de texto | Não | Nome de cadastro do dispositivo. No texto [Campo Dispositivo](/v4/docs/pt/pam-session-about-filling-out-the-device-and-username-fields) estão as possíveis formas de se preencher este campo. |
| **Modelo** | Botão *toggle* | Não | Ativa ou desativa o campo de texto para inclusão dos modelos de dispositivos. |
| **Modelo (sep. por vírgula)** | Campo de texto | Não | Nome dos modelos de dispositivo. |
| **Informação adicional** | Botão *toggle* | Não | Ativa ou desativa o campo de texto para inclusão de informações adicionais. |
| **Informação adicional (sep. por vírgula)** | Campo de texto | Não | Texto com informações adicionais sobre o cadastro. |
| **Tags do dispositivo** | Botão *toggle* | Não | Ativa ou desativa o campo de texto para inclusão de tags para os dispositivos. |
| **Tags do dispositivo (sep. por vírgula)** | Campo de texto | Não | Tags cadastradas para os dispositivos. |
| **Tags da credencial** | Botão *toggle* | Não | Ativa ou desativa o campo de texto para inclusão de tags para credenciais. |
| **Tags da credencial (sep. por vírgula)** | Campo de texto | Não | Tags cadastradas para as credenciais. |
| **Site*** | Menu suspenso | Sim | Opções com os tipos de sites que são visíveis na política. As opções disponíveis serão conforme cadastrado no Segura. |
| **Tipo de dispositivo*** | Menu suspenso | Sim | Opções com os tipos de dispositivos que são visíveis na política. As opções são definidas conforme os tipos de dispositivos cadastrados. |
| **Tipo de credencial*** | Menu suspenso | Sim | Opções com os tipos de credenciais que serão visíveis a política. As opções são: *Todos, Chave SSH, Usuário do domínio, Local User* e *Administrador local*. |

:::(warning) (**Atenção**)  
Para o preenchimento do campo **Dispositivo (sep. por vírgula)** há regras que precisam ser seguidas. Saiba mais em [Sobre Preenchimento do campo Dispositivo e Username](/v4/docs/pt/pam-session-about-filling-out-the-device-and-username-fields).  
:::

## **Aba Revisão**  
Esta seção fornece informações resumidas sobre as escolhas feitas nos passos anteriores. As informações estão agrupadas por cada aba respectivamente.