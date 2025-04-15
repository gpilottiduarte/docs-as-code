# Cadastro da credencial

Este documento fornece informações sobre a tela do formulário **Cadastro da credencial**, onde é possível cadastrar credenciais para serem utilizadas para iniciar as sessões no Segura.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Credenciais > Todas credenciais > Adicionar.**

---
## Aba Informações
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Nome de usuário*** | Campo de texto | Sim | Nome de usuário da credencial que será utilizada para autenticação das sessões que deve corresponder à credencial do sistema remoto. |
| **Tipo da Senha*** | Menu suspenso | Sim | Tipo de senha que define o modelo das credenciais usadas para segmentar os usuários e atribuir permissões com base nos grupos de acesso. O tipo de senha pode assumir três valores: Usuário de domínio, Administrador local e Local user. |
| **Dispositivo*** | Menu suspenso | Sim | O dispositivo onde a credencial poderá iniciar sessões. |
| **Domínio** | Menu suspenso | Não | A qual domínio a credencial pertence, podendo ser utilizada para iniciar sessões em outros dispositivos do mesmo domínio. |
| **Informação Adicional** | Campo de texto | Não | Opção para complementar o uso da credencial no dispositivo alvo, como, por exemplo, em conexões de banco de dados. O campo também serve para uso em troca automatizada de senhas e macros RemoteApp. |
| **Situação** | Botão *toggle* | Sim | Situação da credencial, as opções são **Ativa** e **Inativa**. |
| **Definir senha atual*** | Botão *toggle* | Não | Habilita o campo Senha e permite definir uma nova senha. |
| **Senha** | Campo de texto | Não | Senha da credencial. Limite de 256 caracteres. |
| **Gerar** | Botão | Não | Gera uma senha aleatória conforme a Política de senha. |
| **Tags** | Campo de texto | Não | Identificador para segregação de credenciais. |

#### Seção Política da senha  
Observe a caixa informativa das políticas de senha que devem ser consideradas ao criar a senha para a credencial, assim garantindo a criação de uma senha mais segura.  
Saiba mais sobre a as regras aplicadas nas senhas em Políticas.

## Aba Configurações de execução  
:::(warning) (**Atenção**)  
A credencial filha sempre irá assumir a mesma senha da credencial pai. Porém a existência de uma credencial pai não impede que a senha da credencial filha seja alterada manual ou automaticamente.  
:::

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Credencial pai** | Menu suspenso | Não | Selecione uma credencial para ser considerada a credencial “pai”. A partir desse ponto, a credencial “filha” sempre assumirá a mesma senha da credencial pai. |

#### Seção Configuração da troca de senha da credencial
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Ativar troca automática** | Caixa de seleção | Não | Selecione para habilitar a troca automática de credencial. |
| **Habilitar troca via agente** | Caixa de seleção | Não | Selecione para habilitar recurso que permite usuários alterarem suas senhas por meio de um processo automatizado e facilitado por um agente de software. |
| **Plugin de troca** | Menu suspenso | Não | Selecione o plugin utilizado para conectar e executar a troca no dispositivo. Este plugin está vinculado a vários protocolos de conexão, não há validação de que o dispositivo está com sua conectividade ativa. |
| **Template de troca** | Menu suspenso | Não | Selecione o template que será executado pelo plugin executor. Na solução PAM Segura, o usuário tem acesso a uma ampla variedade de templates desenvolvidos e regularmente atualizados. |

#### Seção Configuração de autenticação
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Utilizar a própria credencial para conectar** | Caixa de seleção | Não | Selecione para utilizar a própria credencial para conectar com o dispositivo e realizar a troca de senha. |
| **Credencial de autenticação** | Menu suspenso | Não | Caso não utilize a própria credencial para alterar a senha automatizada, selecione qual credencial será utilizada para conectar ao dispositivo. |
:::(info) (**Info**)  
É possível utilizar uma credencial para iniciar sessões no dispositivo e outra que já esteja cadastrada para realizar a alteração de senha.  
:::

#### Seção Configuração da credencial de reconciliação
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Situação*** | Botão de opção | Sim | Habilita a reconciliação de credenciais. Marque Ativo ou Inativo para definir a situação da credencial. |
| **Execução automática** | Botão de opção | Não | Habilita a reconciliação automatizada de senhas para credenciais. Marque Ativa ou Inativa. |
| **Credencial de reconciliação** | Menu suspenso | Não | Credencial de reconciliação |
| **Plugin de reconciliação** | Menu suspenso | Não | Plugin de reconciliação. |
| **Template de reconciliação** | Menu suspenso | Não | Template de reconciliação. |

## Aba Configurações de execução
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Conectividades** | Caixa de seleção | Não | Selecione quais protocolos a credencial pode utilizar. Apenas as conectividades selecionadas estarão disponíveis para iniciar uma sessão. |

#### Seção Configuração de aplicativo remoto
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Restringir o acesso apenas para aplicativo remoto** | Caixa de seleção | Não | Selecione essa opção para utilizar a credencial apenas em sessões proxy RemoteApp. Essa opção impossibilita utilizar uma sessão de proxy que forneça a área de trabalho ou terminal do dispositivo, pois não impede a disponibilização da senha para o usuário. |
| **Macro de automação (RemoteApp)** | Tabela | Não | Adicione as macros RemoteApp vinculadas à credencial e disponíveis para usuários proxy. |
| **Utilizar a própria credencial para conectar** | Caixa de seleção | Não | Indique se a mesma credencial será utilizada para autenticar o dispositivo alvo e o RemoteApp. |
| **Credencial de autenticação** | Menu suspenso | Não | Caso não utilize a credencial do RemoteApp, indique qual credencial será utilizada para a etapa de autenticação. |
| **Dispositivo de autenticação** | Menu suspenso | Não | Selecione o dispositivo onde a credencial será autenticada e a macro rodada. Caso preenchido, o dispositivo registrado na aba Informações será ignorado. |

#### Seção Certificado
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Arquivo do certificado** | Campo de *upload* | Não | Inclua o arquivo que contém o certificado. |
| **Arquivo Key** | Campo de *upload* | Não | Inclua o arquivo que contém a *Key* do certificado. |
| **Senha da key** | Campo de texto | Não | Adicione uma senha para o certificado adicionado. |

## Aba Configurações adicionais
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Identificador (para webservice)** | Campo de texto | Não | Adicione identificadores para a credencial acionada via A2A web services. |
| **Usuário dono da credencial** | Menu suspenso | Não | Selecione o usuário dono da credencial. Este usuário proprietário sempre terá acesso à credencial. |
| **Caminho no servidor** | Campo de texto | Não | Direção para o arquivo que armazena a credencial. |
| **Secret key (TOTP)** | Campo de texto | Não | O TOTP usa uma chave secreta para gerar senhas temporárias para autenticação. |
| **Criticidade** | Menu suspenso | Não | Defina a criticidade da credencial em *Baixa*, *Média* ou *Alta*. |

#### Seção Campos adicionais para autenticação
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Novo campo extra** | Tabela | Não | Adicione novos campos para autenticação, os campos são *Nome*, *Apelido* e *Valor*. |
| **Observações** | Campo de texto | Não | Adicione notas gerais, se necessário. |

## Aba Configurações de execução
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Configuração de Just In Time*** | Botão de opção | Sim | Opção para que a credencial tenha configuração JIT. Selecione Ativo ou Inativo. |
| **Tipo de Just in time** | Menu suspenso | Não | Selecione uma das duas opções: Criação e exclusão de credencial ou Habilitar/Desabilitar a credencial. |

#### Seção Campos adicionais para autenticação
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Utilizar a própria credencial para conectar** | Caixa de seleção | Não | Habilite este campo para utilizar uma credencial auxiliar para realizar a conexão. Note que este campo precisará, obrigatoriamente, estar habilitado caso você escolha a opção de Habilitar/Desabilitar credencial. |
| **Credencial de autenticação** | Menu suspenso | Não | Indique qual credencial fará a autenticação na etapa JIT. |

#### Seção Habilitar/Desabilitar a credencial
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Plugin de habilitação de credencial** | Menu suspenso | Não | Escolha um dos plugins de habilitação para a credencial JIT. |
| **Template de habilitação de credencial** | Menu suspenso | Não | Escolha um dos templates de habilitação para a credencial JIT. |
| **Plugin de desativação de credencial** | Menu suspenso | Não | Escolha um dos plugins de desativação para a credencial JIT. |
| **Template de desativação de credencial** | Menu suspenso | Não | Escolha um dos templates de desativação para a credencial JIT. |

#### Seção Criação e exclusão de credencial
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Plugin de criação de credenciais** | Menu suspenso | Não | Escolha um dos plugins de criação para a credencial JIT. |
| **Template de criação de credencial** | Menu suspenso | Não | Escolha um dos templates de criação para a credencial JIT. |
| **Plugin de remoção de credenciais** | Menu suspenso | Não | Escolha um dos plugins de remoção para a credencial JIT. |
| **Template de remoção de credencial** | Menu suspenso | Não | Escolha um dos templates de remoção para a credencial JIT. |

## Aba Revisão  
Esta seção fornece informações resumidas sobre as escolhas feitas nos passos anteriores. As informações estão agrupadas por cada aba respectivamente.