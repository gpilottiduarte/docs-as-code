# Referência para filtragem de dispositivos

Em todos os módulos da seção de Dispositivo da plataforma senhasegura, existe a opção de filtrar os resultados de acordo com vários parâmetros passados através do formulário constante na barra de tarefas, localizada na parte superior da página inicial de cada módulo.

Contanto, cada módulo tem particularidades em relação aos seus parâmetros de filtragem.

## Filtrar para a seção dispositivos e para a seção dispositivos sem credenciais.

| Campo | Descrição |
| --- | --- |
| Código | Código de cadastro do dispositivo. |
| Nome | Nome de cadastro do dispositivo. |
| Gerenciamento | IP, hostname ou URL de gerenciamento desse dispositivo. |
| Tipo | Tipo de dispositivo. (API, Database, Web Application, etc.). |
| Fabricante | Fabricante do dispositivo. |
| Modelo | Modelo do dispositivo (Microsoft, AWS, Facebook, etc.). |
| Site | Localização do dispositivo. |
| Conectividade | Tipo de conexão do dispositivo (SSH, Telnet, etc.). |
| Domínios | Domínio do dispositivo |
| Tags | Tags do dispositivo. Úteis para agrupar dispositivos com funções semelhantes. |
| Conectável | Status da conexão (Conectável ou Não Conectável). |
| Ativo | Se o dispositivo está ativo ou não. |

## Filtrar importação em lote.

| Item | Descrição |
| --- | --- |
| Código | Código da operação de importação em lote. |
| Nome do arquivo | Nome do arquivo de importação em lote. |
| Usuário | Usuário que gerou um novo processo de importação. |
| Período de Importação | Período de início da importação. |
| até | Período final da importação. |

## Filtrar testes de conectividade

| Item | Descrição |
| --- | --- |
| Data | Seletor de data de início do filtro. |
| até | Seletor de data do final do filtro. |
| Dispositivo | Nome do dispositivo. |
| Conectividade | Tipo de conexão do dispositivo (SSH, Telnet, etc.). |
| Conectável | Status da conexão (Conectável ou Não Conectável). |
| Resultado | Resultado da requisição: *Conexão recusada*, *Erro desconhecido*, *Sucesso* e *Timeout*. |

## Configurações

Em configurações, temos diversos módulos, cada qual com a sua forma de filtragem.

### Filtrar modelos

| Item | Descrição |
| --- | --- |
| Tipo de dispositivo | Tipo de aplicação que roda no dispositivo (Database, Web Application, etc.). |
| Fabricante | Fabricante do dispositivo. |
| Modelo | Modelo do dispositivo (Microsoft, AWS, Facebook, etc.). |
| Tipo | Built-in ou Customizado |
| Ativo | Status do modelo de dispositivo, **Sim** ou **Não**. |

### Filtrar tipos de dispositivo

| Item | Descrição |
| --- | --- |
| Nome | Nome do tipo de dispositivo. |
| Tipo | Built-in ou Customizado.  No senhasegura, para modelos de dispositivos é possível utilizar modelos que veem por padrão no senhasegura (Bult-in) ou criar modelos personalizados de dispositivo (Customizado). |
| Ativo | Status do dispositivo, **Sim** ou **Não**. |

### Filtrar fabricantes

| Item | Descrição |
| --- | --- |
| Nome | Nome do fabricante do dispositivo. |
| Tipo | Built-in ou Customizado. No senhasegura, para modelos de dispositivos é possível utilizar modelos que veem por padrão no senhasegura (Bult-in) ou criar modelos personalizados de dispositivo (Customizado). |
| Ativo | Status do dispositivo, **Sim** ou **Não**. |

### Filtrar Sites

| Item | Descrição |
| --- | --- |
| Nome | Nome do site. |
| Ativo | Status do site: Sim ou Não. |

### Filtrar Conectividades

| Item | Descrição |
| --- | --- |
| Código | Código de cadastro da conectividade. |
| Nome | Nome da conectividade. |
| Porta | Porta do dispositivo utilizada para realizar a conexão. |

## Conectores de rede

Na subseção Conectores de redes, temos duas opções.

### Filtrar Connectors

| Item | Descrição |
| --- | --- |
| Código | Código de cadastro do conector de rede. |
| Nome | Nome do conector de rede. |
| IP | IP do conector de rede. |
| Porta | Porta do conector de rede. |
| Data de Cadastro | Seletor de data para filtrar pela data de cadastro do conector de rede. Selecione a data de início do filtro. |
| até | Seletor de data para filtrar pela data de cadastro do conector de rede. Selecione a data de final do filtro. |
| Última mudança | Seletor de data para filtrar os resultados conforme a data da última mudança ocorrida. Selecione a data de início do filtro. |
| até | Seletor de data para filtrar os resultados conforme a data da última mudança ocorrida. Selecione a data de final do filtro. |
| Ativo | Status do conector de rede: **Sim** ou **Não**. |

### Filtrar Logs

| Item | Descrição |
| --- | --- |
| Código | Código do log. |
| Evento | Menu suspenso para selecionar o evento para o filtro. Apresenta três opções:  *Creation*, *List* e *Deletion*. |
| Connector IP | IP do conector. |
| Connector Port | Porta do conector. |
| Mensagem | Mensagem do log. |
| Code | Código do erro ocorrido durante a execução. Se nenhum erro ocorrer, o campo ficará em branco. |
| Data/Hora | Seletor de Data/Hora para início do filtro. |
| até | Seletor de Data/Hora para fim do filtro. |

:::(Info) (Info)

Em todos os Itens de filtragem, teremos dois botões: **Filtrar** e **Limpar**. O botão **Filtrar** irá executar a filtragem dos resultados conforme os parâmetros passados nos Itens e o botão **Limpar** irá limpar todos os parâmetros passados nesses Itens.

:::