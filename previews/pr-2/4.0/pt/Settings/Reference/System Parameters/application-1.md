# Aplicação

Neste documento, você vai encontrar todas as informações e os parâmetros de configuração para a aplicação Segura.

## Caminho para acesso

1. No Segura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações.**  
2. No menu lateral, selecione **Parâmetros de sistemas \> Parâmetros de sistema.**  
3. No relatório **Parâmetros de sistema**, selecione **Aplicação**

## Aplicação

Neste relatório é possível configurar diversos aspectos do Segura,

### Parâmetros de conexão da aplicação

| Item | Descrição |
| :---- | :---- |
| **Network Connector** | Menu suspenso. Selecione o network connector que será utilizado na aplicação. **Nota**: Será o agent padrão para conexões com sistemas externos |

### Parâmetros de credenciais e dispositivos

| Item | Descrição |
| :---- | :---- |
| **Forçar a alteração da senha na importação em lote?\*** | *Radio button*. Força a alteração da senha da credencial importada ao realizar a importação em lote.  Padrão: **Não**. |
| **Usar as informações adicionais na chave única?\*** | *Radio button.* Esta opção permite que o sistema verifique o campo especificado para determinar se deve atualizar um registro existente ou criar um novo. Padrão: **Não**. |
| **Usar o tipo da credencial na chave única?\*** | *Radio button*. Se esta opção estiver ativada, o sistema avaliará o campo em questão para decidir se atualiza um registro já existente ou se cria um novo registro. Padrão: **Não.** |
| **Nome de campo adicional (1)** | Este campo é usado para o dispositivo. |
| **Nome de campo adicional (2)** | Este campo é usado para o dispositivo. |

### Configuração de relatórios

| Item | Descrição |
| :---- | :---- |
| **Registros por página\*** | Selecione a quantidade de registros que cada página de relatório mostrará. Padrão: **30**. |
| **Registros por página (máx)\*** | Selecione a quantidade máxima de registros que poderão ser mostradas.  Padrão: **100\. Nota:** este é o valor máximo de registros que o usuário pode solicitar que apareça em tela. |
| **Ocultar filtros por padrão?\*** | *Radio button*. Oculta a barra superior de filtros dos relatórios assim que acessar o relatório. Padrão: **Não**. |
| **Adicionar hora e minuto ao filtro de intervalo de datas?\*** | *Radio button.* Adiciona a opção e hora e minuto no filtro de datas dos relatórios. Padrão: **Não.** |

### Configurações gerais da aplicação

| Item | Descrição |
| :---- | :---- |
| **Idioma padrão\*** | Menu suspenso. Selecione o idioma padrão do Segura. As opções são *Deutsch, English, Español, Français, Polski, Português* e *Pусский*. Padrão: **English**. |
| **Ativar banner de login?** | *Radio button*. Ativa o banner de login no Segura. Padrão: **Não**. |
| **Redirecionar ao alterar módulo?** | *Radio button*. Ao selecionar um módulo no menu, o Segura mudará automaticamente para a tela principal do módulo escolhido.. Padrão: **Sim**. |
| **Banner de login** | Campo de texto. Preencha com a mensagem de login que será exibida no Segura. **Nota**: caso a opção de **Ativar banner de login** esteja ativada e não exista um texto para o banner, o Segura irá mostrar o seguinte texto padrão: **“Essa aplicação é exclusivamente de uso interno e restrito a usuários autorizados”**. |
| **Credencial de backup remoto** | Menu suspenso. Indique a credencial que será usada no processo de backup remoto do Segura. |

### Configuração de IPs confiáveis

| Item | Descrição |
| :---- | :---- |
| **IPs da aplicação** | Campos de texto. Preencha com o número de IP que deseja adicionar como confiável no senhasegua. Adicione os quatro octetos em cada um dos campos de texto. |
| **IPs confiáveis** | Indica quais foram os IPs adicionados ao Segura. |

### Cerimônia da chave mestra

| Item | Descrição |
| :---- | :---- |
| **MFA obrigatório para cerimônia de chave mestra?** | *Radio button*. Ativa obrigatoriedade da autenticação MFA para a cerimônia da chave mestra. Padrão: **Sim**. |