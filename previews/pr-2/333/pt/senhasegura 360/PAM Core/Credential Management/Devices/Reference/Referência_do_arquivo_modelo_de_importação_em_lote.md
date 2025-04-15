# Referência do arquivo modelo de importação em lote

## Informações do dispositivo

As informações de Tipo, Fabricante, Modelo e Site serão registradas automaticamente caso ainda não estejam cadastradas.

| Campo | Descrição |
| --- | --- |
| Hostname | Hostname do dispositivo, IP, URL, nome do website ou nome da aplicação para identificação. |
| IP Gerenciamento | Endereço IP ou URL para gerenciamento do dispositivo. |
| Tipo | Tipo do dispositivo desejado (será registrado automaticamente caso não esteja cadastrado). |
| Fabricante | Fabricante do dispositivo. |
| Modelo | Modelo específico do dispositivo. |
| Site | Localização do dispositivo. |
| Tags | Etiquetas para agrupar ou filtrar dispositivos (separadas por vírgulas). Observe que o campo Tags tem um limite de 250 caracteres, incluindo vírgulas e espaços. |
| Domínio | Domínio DNS do dispositivo. |

## Conectividade dos dispositivos

| Campo | Descrição |
| --- | --- |
| Conectividade | Conectividade e portas do equipamento, separadas por vírgula, no formato: Tipo:Porta. |
| Network Connector | Nome do Network Connector usado para acessar a rede. |
| Agente | Nome do Agente do Network Connector usado para acessar a rede. |

## Configurações adicionais do dispositivo

| Campo | Descrição |
| --- | --- |
| Criticidade do Dispositivo | Nível de criticidade do dispositivo (Alta, Média ou Baixa). |
| Conectividade de Expressão | Expressão de login para conexão. |
| Expressão Esperada | Expressão regular esperada para login. É recomendado o uso de protocolos com criptografia. |
| Valor de Preenchimento | Valor para preenchimento da expressão de login. |
| Adicional 1 | Campo para adicionar mais informações, como plataforma. |
| Adicional 2 | Campo para adicionar mais informações, como sistema. |

## Informações da credencial

| Campo | Descrição |
| --- | --- |
| Usuário | Nome de usuário para identificação da credencial. |
| Tipo de Senha | Tipo de credencial já cadastrado. |
| Domínio | Domínio DNS da credencial. |
| Informação Adicional | Informações adicionais sobre a credencial, útil para instâncias de banco de dados, trocas de senhas, etc. |
| Situação | Status da credencial (Ativa ou Inativa) ao ser cadastrada. |
| Senha | Valor da senha. Caso não seja preenchido, a senha não será atualizada. |
| Tags | Tags de senha separadas por vírgula, utilizadas para agrupar ou filtrar credenciais. Observe que o campo Tags tem um limite de 250 caracteres, incluindo vírgulas e espaços. |

## Configuração de execução da credencial

| Campo | Descrição |
| --- | --- |
| Usuário da Credencial Pai | Usuário para identificar a credencial pai. |
| Hostname da Credencial Pai | Hostname que contém a credencial pai. |
| Ativar Troca Automática | Opção para habilitar a troca automática da senha (Sim ou Não). |
| Plugin de Troca | Plugin usado pelo modelo de troca. |
| Modelo de Troca | Modelo utilizado para efetuar a troca de senha. |
| Usuário para Conexão | Usuário para conectar ao equipamento e realizar operações de troca e controle de status. |
| Hostname para Conexão | Hostname utilizado para conectar ao dispositivo e realizar operações de troca e controle de status. |
| Situação da Credencial de Reconciliação | Status da configuração da credencial de reconciliação (Ativa ou Inativa). |
| Usuário para Reconciliação | Usuário utilizado para efetuar a reconciliação de credencial. |
| Hostname para Reconciliação | Hostname utilizado para efetuar a reconciliação de credencial. |
| Plugin de Reconciliação | Plugin usado pelo modelo de reconciliação de credencial. |
| Modelo de Reconciliação | Modelo utilizado para efetuar a reconciliação da credencial. |

## Configuração da sessão da credencial

| Campo | Descrição |
| --- | --- |
| Macro do RemoteApp | Macro de automação do RemoteApp. |
| Conectividade da Macro | Conectividade da automação do RemoteApp. |
| Restringir Acesso | Opção para restringir acesso apenas para o aplicativo remoto (Sim ou Não). |
| Usuário para Credencial de Autenticação | Usuário utilizado para conectar ao Sistema Operacional. |
| Hostname ou IP para Credencial de Autenticação | Hostname ou IP usado para conectar ao Sistema Operacional. |
| Hostname ou IP para o Dispositivo de Autenticação | Hostname ou IP usado para conectar ao Sistema Operacional. |

## Configurações adicionais da credencial

| Campo | Descrição |
| --- | --- |
| Dono da Credencial | Usuário dono da credencial. Apenas o usuário poderá iniciar sessão e acessar a credencial. |
| Criticidade da Credencial | Nível de criticidade da credencial (Alta, Média ou Baixa). |
| Observações | Observações adicionais sobre a credencial. |

## Configurações JIT da credencial

| Campo | Descrição |
| --- | --- |
| Controlar Status | Opção para indicar se o status do JIT estará ativo (Sim ou Não). |
| Plugin Ativação | Plugin utilizado pelo template de ativação. |
| Template Ativação | Template utilizado para efetuar a ativação da credencial. |
| Plugin Inativação | Plugin utilizado pelo template de inativação da credencial. |
| Template Inativação | Template utilizado para efetuar a inativação da credencial. |