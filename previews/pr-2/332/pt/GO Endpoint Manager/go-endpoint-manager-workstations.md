# Relatório

Você encontra no relatório de workstations, informações sobre:

* * *

## Ícones

| Item | Descrição |
| --- | --- |
| Mostrar os filtros | É identificado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela. |
| Atualizar | É identificado pelo ícone da seta no sentido anti-horário. Atualiza a página. |
| Exibir ações | É identificado pelo ícone de três pontos verticais. Exibe um menu suspenso com ações possíveis para os relatórios. |
| Novo | Opção do menu suspenso identificado pelo ícone de grupo. Abre uma nova página para adicionar um novo grupo de usuários internos. |
| Imprimir relatório | Opção do menu suspenso identificado pelo ícone da impressora. Abre uma nova página para impressão do relatório. |
| Exportar CSV | Opção do menu suspenso identificado pelo ícone da folha de papel. Baixa o relatório. |
| Agendar relatório | Opção do menu suspenso identificado pelo ícone do relógio. Abre o formulário Agendar relatório. |

* * *

## Campos de busca

| Item | Descrição |
| --- | --- |
| 	Código	|	Filtra o número de identificação da workstation.	|
| 	Hostname	|	Filtra o nome da workstation.	|
| 	Domínio	|	Filtra o nome do domínio da workstation.	|
| 	IP	|	Filtra o endereço de IP da workstation.	|
| 	Versão do go	|	Filtra.qual a versão do agente do Go Windows instalado.	|
| 	S.O	|	Filtra qual a versão do Sistema Operacional da workstation	|
| 	Última sessão	|	Filtra a data inicial que ocorreu a última sessão.	|
| 	até	|	Filtra a data final que ocorreu a última sessão.	|
| 	Última sincronização das políticas	|	Filtra a data inicial que foi realizada a última sincronização de políticas.	|
| 	até	|	Filtra a data final que ocorreu a última sincronização de políticas.	|
| 	Inclusão	|	Filtra a data inicial que o GO Endpoint Manager foi instalado na workstation.	|
| 	até	|	Filtra a data final que o GO Endpoint Manager está instalado na workstation.	|
| 	Data da autorização	|	Filtra a data inicial que a workstation foi autorizada.	|
| 	até	|	Filtra a data final que a workstation foi autorizada.	|
| 	Data da inativação	|	Filtra a data inicial quando a workstation foi desativada.	|
| até |	Filtra a data final que a workstation foi desativada.	|
| Estado | Qual a situação da workstation. **Inativo:** o administrador desabilitou a instalação ou uso do GO Endpoint Manager para Windows na workstation. **Pendente:** o administrador ainda não aprovou ou recusou a nova instalação. **Autorizado:** o administrador aprovou a instalação e uso do GO Endpoint Manager para Windows na workstation. |
| Tipo de client | Qual o tipo do client instalado: Sudo Manager, Privilege Manager, AD bridge e Caitsith.
 |
| Filtrar | Botão para executar o processo de filtragem configurado. |
| Limpar | Botão para limpar os campos preenchidos e iniciar uma nova busca. |

:::(Info) (Info)
O sistema mostrará o estado **Pendente** se a aprovação automática de estações de trabalho e usuários não estiver ativa. Por padrão, o GO Endpoint Manager para Windows vem com as opções inativas, forçando o administrador a aprovar estações de trabalho e usuários manualmente.
:::


Os resultados são exibidos em formato de lista, com colunas nomeadas conforme os campos correspondentes. A lista apresenta algumas informações que não constam nos campos de busca:

* **Usuários ativos:** quantos usuário estão ativos na workstation.

## Ação

| Item | Descrição |
| --- | --- |
| Detalhes | Visualizar detalhes sobre a situação da workstation. |
| Exibir ações | É identificado pelo ícone de três pontos verticais. Exibe um menu suspenso com ações possíveis para os relatórios. |
| Usuários | Permite visualizar quais usuários na workstation executaram o GO Endpoint Manager para Windows. |
| Eventos | Permite visualizar os eventos capturados pelos serviços do GO Endpoint Manager para Windows ou executados pelos usuários através dele nesta workstation.  |
| Autorizar | Permite autorizar o uso do GO Endpoint Manager para Windows na workstation. |
| Inativar | Permite inativar o uso do GO Endpoint Manager para Windows na workstation. |