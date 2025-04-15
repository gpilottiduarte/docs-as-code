# Perfis

Este documento fornece informações sobre a tela do relatório **Perfis**, que mostra os perfis de credenciais dinâmicas cadastradas no Segura.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Gerenciamento > Credenciais dinâmicas > Perfis.**

---
## Menu de ações
| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela **Perfil de provisionamento de credencial**. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de Busca
| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra o perfil por seu código de identificação dentro do Segura. |
| **Identificador** | Campo de texto | Filtra o perfil pelo nome de cadastro no Segura. |
| **Tipo** | Menu suspenso | Filtra o perfil  pelo tipo de template cadastrado no Segura. |
| **Status** | Menu suspenso | Filtra o perfil pelo seu estado de ativação. As opções são **Ativo** e **Inativo.** Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório
* **Código**.  
* **Identificador.**  
* **Tipo.**  
* **TTL padrão:** tempo de vida do perfil, em segundos.  
* **Status.**  
* **Ações:**  
  * **Editar:** abre a tela de cadastro **Perfil de provisionamento de credencial** para que sejam realizadas as alterações necessárias.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
## Tela Perfil de provisionamento de credencial
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Identificador*** | Campo de texto | Sim | Nome do perfil de provisionamento de credencial. |
| **Status*** | Botão *toggle* | Sim | Ativa ou desativa status do perfil cadastrado. |

#### Seção Tipo
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Tipo***| Menu suspenso | Sim | Seleciona o tipo de provisionamento dinâmico. As opções são de acordo com os templates cadastrados no Segura. |

#### Seção Credencial para executar
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Utilizar uma credencial cadastrada para acessar todos os dispositivos** | Caixa de seleção | Não | Selecione para utilizar uma credencial já existente para acesso aos dispositivos utilizando o perfil de provisionamento dinâmico. |
| **Credencial de acesso cadastrada do sistema** | Menu suspenso | Não | Seleciona a credencial de acesso previamente cadastrada no PAM. Nota: esse menu só fica habilitado caso a opção anterior seja selecionada. |
| **Username da credencial** | Campo de texto | Não | Indica o nome de usuário da credencial que será utilizada no acesso aos dispositivos através do perfil de provisionamento dinâmico. Nota: esse campo de texto só fica habilitado caso você não selecione a opção de **Utilizar credencial cadastrada para acessar todos os dispositivos**. |

#### Seção Modelo
| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Template de criação de credencial*** | Menu suspenso | Sim | Seleciona o template que será responsável pela criação da credencial de provisionamento dinâmico. Ao clicar no símbolo de adição, abre a janela de cadastro de templates de execução. |
| **Template de remoção de credencial*** | Menu suspenso | Sim | Seleciona o template que será responsável pela remoção da credencial de provisionamento dinâmico. Ao clicar no símbolo de adição, abre a janela de cadastro de templates de execução. |
| **Papéis** | Campo de texto | Não | Adicione os papéis e grupos aos quais a credencial de provisionamento dinâmico estará atrelada. Separe-os com vírgulas. |
| **Segundos** | Seletor de quantidade | Não | Selecione o tempo de vida, em segundos, da credencial de provisionamento dinâmico. O valor padrão é 3600 segundos. |

