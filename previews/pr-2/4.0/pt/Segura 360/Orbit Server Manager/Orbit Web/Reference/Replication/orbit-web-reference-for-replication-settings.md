# Configurações de replicação

Este documento fornece informações sobre o formulário **Configurações de replicação** que exibe as informações sobre a replicação do Segura e permite a configuração de *clusters* para a aplicação**.**

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Orbit Server Manager**.  
2. No menu lateral, selecione **Configurações \> Replicação \> Configurações**.

## Configurações de Replicação

:::(info) (Info)  
Caso a replicação não esteja ativada, será necessário ativá-la.  
:::

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Modo de operação** | Menu suspenso | Sim | Ativa ou desativa o status do modo de operação. |
| **Ativar replicação** | Botão toggle | Não | Ativa ou desativa o status replicação de ativação da aplicação. |
| **Sincronizadores** | Botão toggle | Não | Ativa ou desativa o status dos sincronizadores. |
| **Sync Timeout (seconds)** | Seletor de quantidade | Sim | Tempo máximo em segundos para sincronização dos membros. |

### **Membros do Cluster**

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Membro primário** | Campo de texto | Sim | Define o membro principal do *cluster*. |
| **Membros adicionais** | Campo de texto | Não | Lista de membros adicionais no *cluster*. |
| **Membro árbitro** | Campo de texto | Não | Define o membro árbitro responsável por desempates. |

### **Configurações Avançadas de Replicação**

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Membros estão em diferentes datacenters** | Botão toggle | Não | Ativa ou desativa o status dos membros do *clusters* em diferentes datacenters. |
| **Latência entre os membros** | Menu suspenso | Sim | Seleciona a latência entre membros. As opções são *Baixa (0-10 ms), Média (10-30ms)* ou *Alta (\> 30 ms)*. |
| **Segmento de rede** | Campo de texto | Não | Define o segmento de rede para os *nodes* no mesmo *datacenter*. |
| **Mensagem de exibição da tela de recovery** | Campo de texto | Não | Mensagem personalizada exibida na tela de recuperação. |

:::(info) (Info)  
Após você configurar a replicação, será necessário reiniciar o serviço do banco de dados da sua instância do Segura.  
:::