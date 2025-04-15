# Cadastro da chave SSH

Este documento fornece informações sobre a tela do formulário **Chave SSH**, onde é possível cadastrar chaves SSH para serem utilizadas para iniciar as sessões no Segura.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Credenciais > Chaves SSH > Chaves SSH > Adicionar.**

---
## Aba Informações
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Nome da chave*** | Campo de texto | Sim | Nome de identificação para rastrear detalhes, visualizações e outras aparições no Segura. |
| **Situação*** | Botão *toggle* | Sim | Situação da chave SSH, as opções são **Ativa** e **Inativa**. |
| **Tags** | Campo de texto | Não | Identificador para a chave SSH. |
| **Dono da chave SSH** | Menu suspenso | Não | Nome do usuário que será o dono da chave. As opções são de acordo com os usuários cadastrados no Segura. |

:::(info) (**Info**)  
Se o campo **Dono da chave SSH** for preenchido, a chave SSH é de propriedade exclusiva deste usuário e somente este usuário pode acessar e modificar a chave, além de visualizar sua senha e utilizá-la em sessões proxy.  
:::

## Aba Dados da chave
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Nome de usuário*** | Campo de texto | Sim | Nome de usuário associado à chave SSH. |
| **Definir senha atual** | Botão *toggle* | Não | Habilita o campo Senha e permite definir uma nova senha. |
| **Senha** | Campo de texto | Não | Senha da chave SSH. Limite de 256 caracteres. |
| **Gerar** | Botão | Não | Gera uma senha aleatória conforme a Política de senha. |
| **Chave Privada*** | Campo de texto | Sim | Chave privada que será mantida no Segura. |
| **Chave Pública*** | Campo de texto | Sim | Chave pública do tipo RSA, gerada no terminal através do comando `ssh-keygen -t RSA -m PEM`. |

## Aba Dispositivos
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Dispositivo principal*** | Menu suspenso | Sim | Selecione o dispositivo associado a chave SSH. |
| **Cadastrar um novo equipamento** | Botão | Não | Abre a janela para cadastrar um novo dispositivo. |
| **Dispositivos** | Campo de texto | Não | Busca um dispositivo na tabela de dispositivos adicionados. |
| **Adicionar / Remover selecionados** | Botão | Não | Abre a janela com a lista dos dispositivos cadastrados no Segura. Se um registro da tabela estiver selecionado é possível excluí-lo. |
| **Tabela de dispositivos** | Tabela | Não | Relação dos dispositivos adicionados a chave, os campos são *caixa de seleção*, *Código*, *Nome do dispositivo*, *Gerenciamento*, *Tipo*, *Fabricante* e *Modelo*. |

## Aba Configurações da sessão
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Utilizar a própria credencial para conectar** | Botão *toggle* | Não | Selecione para usar a mesma chave para se autenticar no dispositivo de destino. |
| **Credencial de autenticação** | Menu suspenso | Não | Caso não utilize a própria chave SSH, selecione qual credencial será utilizada para conectar ao dispositivo. |
| **Dispositivo de autenticação** | Menu suspenso | Não | Selecione qual será o dispositivo utilizado para a autenticação da sessão. |
| **Macro de automação (RemoteApp)** | Tabela | Não | Adicione as macros RemoteApp vinculadas à credencial e disponíveis para usuários proxy. |
| **Restringir o acesso apenas para aplicativo remoto** | Botão *toggle* | Não | Selecione essa opção para utilizar a credencial apenas em sessões proxy RemoteApp. Essa opção impossibilita utilizar uma sessão de proxy que forneça a área de trabalho ou terminal do dispositivo, pois não impede a disponibilização da senha para o usuário. |

## Aba Renovação de chave
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Ativar troca automática** | Botão *toggle* | Não | Ative para habilitar a troca automática de credencial. |
| **Defina uma senha ao renovar a chave*** | Botão *toggle* | Sim | Ative para definir uma senha quando a renovação automática estiver ativada. |
| **Utilizar a própria chave para conectar** | Botão *toggle* | Não | Ative para usar a chave que está sendo criada/editada no momento. |
| **Credencial ou chave ssh para autenticação** | Menu suspenso | Não | Escolha o dispositivo que contém a chave de autenticação no menu suspenso. Essa opção estará disponível apenas se a opção **Utilizar a própria chave para conectar** estiver desativada. |

## Aba Revisão  
Esta seção fornece informações resumidas sobre as escolhas feitas nos passos anteriores. As informações estão agrupadas por cada aba respectivamente.