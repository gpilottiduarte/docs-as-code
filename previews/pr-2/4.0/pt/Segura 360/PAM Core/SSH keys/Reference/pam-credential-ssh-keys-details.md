# Detalhes chave SSH

 Este documento fornece informações sobre a tela do relatório **Chave SSH**, onde é possível acessar informações detalhadas sobre a chave SSH e os eventos ocorridos.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Credenciais > Chaves SSH > Chaves SSH.**  
3. Na lista de chaves SSH apresentadas no relatório, na coluna **Ações**, clique no botão e selecione a opção **Detalhes.**

---
## Seção Detalhes
### Card Geral
| **Item** | **Descrição** |
| :---- | :---- |
| **Nome de usuário** | Nome de usuário da chave SSH. |
| **Tipo** | Tipo da chave SSH. |
| **Expiração** | Data e hora que a credencial irá expirar. |
| **Criada em** | Data e hora que a credencial foi criada. |
| **Alteração** | Data e hora que a credencial foi alterada. |
| **Consulta** | Data e hora que ocorreu a consulta de senha na credencial. |
| **Observação** | Texto com observações sobre a credencial. |

### Card Configuração de troca
| **Item** | **Descrição** |
| :---- | :---- |
| **Configuração** | Tipo da configuração de troca de senha. |
| **Troca automática** | Indica se existe troca automática configurada para a credencial. |
| **Template** | Template que será utilizado para realizar a troca de senha. |
| **Usuário** | Nome do usuário que solicitou a troca. |
| **Controle de Status** | Indica se está habilitado o controle de status da credencial. |
| **Template de ativação** | Indica qual o template será utilizado na ativação. |
| **Template de inativação** | Indica qual o template será utilizado na inativação. |

### Card Dispositivo
| **Item** | **Descrição** |
| :---- | :---- |
| **Hostname** | Nome do dispositivo. |
| **IP de gerenciamento** | Número de IP do dispositivo. |
| **Fabricante** | Nome do fabricante do dispositivo. |
| **Tipo** | Tipo do dispositivo. |
| **Modelo** | Modelo do dispositivo. |
| **Conectividade** | Tipo da conectividade do dispositivo. |

### Card Política
| **Item** | **Descrição** |
| :---- | :---- |
| **Nome** | Nome da política de senha relacionada com a credencial. |
| **Força da senha** | Nível da força da senha da credencial. |
| **Expiração decurso** | Tempo da expiração da política da senha. |
| **Expiração de consulta** | Tempo da expiração da consulta. |
| **Visualização Simultânea** | Indica se a política concede a visualização simultânea da senha. |
| **Sessão Simultânea** | Indica se a política concede o acesso a sessões de forma simultânea. |

### Cards
| **Item** | **Descrição** |
| :---- | :---- |
| **Período de maior uso** | Exibe o período do dia que teve o maior uso da credencial. |
| **Credencial pai** | Exibe a existência da credencial pai. |
| **Total de consultas** | Exibe o número total de consultas realizadas na credencial. |
| **Total de acessos** | Exibe o número total de acessos realizados com a credencial. |
| **Duração da sessão (média)** | Exibe em segundos o tempo médio das sessões acessadas com a credencial. |
| **Equipamentos** | Exibe o número de equipamentos que utiliza a credencial. |

### Gráficos
| **Item** | **Descrição** |
| :---- | :---- |
| **Usuários por grupo de acesso** | Exibe o número de usuários divididos por seu grupo de acesso que possui acesso a credencial. |
| **Usuários com acesso** | Exibe o número de usuários do Segura que possuem e os que não possuem acesso a credencial. |

### Linha do tempo
| **Item** | **Descrição** |
| :---- | :---- |
| **Eventos** | Exibe uma linha do tempo com todas as ações realizadas na credencial, divididas por data e exibe a ação e qual foi o usuário que as realizou. |

## Listas  
### Últimos acessos
| **Item** | **Descrição** |
| :---- | :---- |
| **Usuário** | Nome do usuário que realizou o último acesso a credencial. Ao clicar no nome abre a tela Perfil de usuário. |
| **Data** | Data e hora que foi realizado o acesso. |
| **Score** | Exibe o score atribuído ao acesso realizado. |
| **Lupa** | Abre a tela Detalhes do acesso. |

### Os usuários com a custódia
| **Item** | **Descrição** |
| :---- | :---- |
| **Código** | Número de identificação no Segura. |
| **Usuário** | Nome do usuário que possuía a custódia da credencial. Ao clicar no nome abre a tela Perfil de usuário. |
| **Última consulta** | Data e hora da última consulta a credencial. |
| **Início da custódia** | Data e hora do início da custódia da credencial. |
| **Duração** | Tempo de duração que a credencial estava sob custódia. |

### Equipamentos associados
| **Item** | **Descrição** |
| :---- | :---- |
| **Código** | Código de identificação do dispositivo dentro do Segura. |
| **Nome do dispositivo** | Nome de cadastro do dispositivo |
| **Gerenciamento** | Endereço IP do dispositivo. |
| **Tipo** | Tipo do dispositivo. |
| **Fabricante** | Fabricante do dispositivo. |
| **Modelo** | Modelo do dispositivo. |

