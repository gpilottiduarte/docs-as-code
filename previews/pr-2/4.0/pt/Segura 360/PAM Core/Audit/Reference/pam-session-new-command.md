# Novo comando

Este documento fornece informações sobre as telas de formulário de **Cadastro de comando global**, **Cadastro de comando por credencial**, **Cadastro de comando por dispositivo** e **Cadastro de comando por grupo**, onde é possível adicionar novos comandos auditados de uso global, ou segregados por credencial, dispositivo ou grupo.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Gerenciamento > Sessões > Comandos auditados.**  
3. Na tela do relatório clique no menu **Ações > Novo comando.**

---
## Seção Comando  
Esta seção fornece informações que são comuns em qualquer tipo de comando auditado que esteja sendo cadastrado, seja ele global, por credencial, por dispositivo ou por grupo.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Nome*** | Campo de texto | Sim | Nome de identificação do comando a ser cadastrado. |
| **Tipo de sessão*** | Menu suspenso | Sim | Tipo de sessão em que aquele comando será auditado, quando utilizado. As opções são *Todos*, *Terminal* e *Banco de dados*. |
| **Criticidade*** | Botão de opção | Sim | Define a criticidade do comando. As opções são *Baixa*, *Média* e *Alta***.** Limpe o campo para habilitar a opção **Todos**. |
| **Ação durante a sessão*** | Menu suspenso | Sim | Selecione a ação que acontece na sessão em decorrência da execução do comando. As opções são *Permitir a execução*, *Bloquear a execução*, *Interromper* e *Obrigar*. |
| **Ocorrências (mínimo)** | Seletor de quantidade | Não | Selecione o número de vezes que o comando pode ser utilizado até que seja realizada a ação escolhida no campo anterior. As opções são de 1 a 10. |
| **Bloquear e inativar o usuário?** | Menu suspenso | Não | Opção somente habilitada quando o campo **Ação durante a sessão** for *Bloquear a execução* ou *Interromper a execução*. As opções são **Sim** ou **Não**. |
| **Comando (ex: passwd * ou expressão regular: .+reboot.+$)*** | Campo de texto | Sim | Digite a expressão regular do comando a ser auditado conforme a regra. Por exemplo: `/.*passwd.*/` |
| **Descrição*** | Campo de texto | Sim | Informações gerais sobre o comando auditado. |

---
### Tela Cadastro de comando por credencial  

#### Seção Credencial

| **Item**  | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Buscar** | Campo de texto | Não | Busca pela credencial na lista de credenciais incluídas. |
| **Adicionar** | Botão | Não | Abre a tela de credenciais do Segura, para que sejam incluídas. |
| **Tabela de credenciais** | Tabela | Não | Dados de cada credencial adicionada contendo *os campos, caixa de seleção*, *Código, Tipo de credencial, Nome do usuário, Dispositivo,* *Tipo de dispositivo, Modelo, Fabricante* e *Site.* |

---
### Tela Cadastro de comando por dispositivo  

#### Seção Dispositivo

| **Item**  | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Dispositivos** | Campo de texto | Não | Busca pelo dispositivo na lista de dispositivos incluídos. |
| **Adicionar** | Botão | Não | Abre a tela de dispositivos do Segura, para que sejam incluídos. |
| **Tabela de dispositivos** | Tabela | Não | Dados de cada dispositivo adicionado contendo *os campos caixa de seleção*, *Código, Nome do dispositivo, Gerenciamento,* *Site, Modelo, Tipo* e *Fabricante.* |

---
### Tela Cadastro de comando por grupo   

#### Seção Grupos

| **Item**  | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Grupos** | Campo de texto | Não | Busca pelo nome do grupo na lista de grupos incluídos. |
| **Adicionar** | Botão | Não | Abre a tela de grupos do Segura, para que sejam incluídos. |
| **Tabela de grupos** | Tabela | Não | Dados de cada grupo adicionado contendo *os campos caixa de seleção*, *Código, Grupo, Parte da senha, Visualizar senha, Aprovação para visualizar, Permissão para sessão* e *Aprovação para sessão.* |

---
## Seção Revisão  
Esta seção, é comum nos cadastros de comando auditado do tipo por credencial, por dispositivo ou por grupo, nela estão as informações que foram adicionadas nos passos anteriores, para que seja analisada e caso necessite de alguma mudança, já seja feita antes de finalizar o cadastro. As informações estão agrupadas por cada aba respectivamente.