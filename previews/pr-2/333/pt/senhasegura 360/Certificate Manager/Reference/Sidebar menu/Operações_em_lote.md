# Operações em lote

Este artigo fornece descrições das informações disponíveis na página principal de **Operações em lote**.
:::(Info) (Info)
Caminho para acessar: **Certificate Manager > Operações em lote**.  
:::

## Ícones
Esses ícones estão presentes nas quatro opções de menu: **Renovação em lote**, **Revogação em lote**, **Desativação em lote** e **Verifique certificados revogados**.
|Item|Descrição|
|-|-|
| **Mostrar os filtros** |Representado pelo ícone da lupa, exibe ou oculta os campos de busca na tela.|
| **Atualizar** |Representado pelo ícone de seta no sentido anti-horário, atualiza a página.|
| **Exibir ações** |Representado pelo ícone de três pontos verticais, exibe um menu suspenso com possíveis ações para o item.|
| **Imprimir relatório** |Representado pelo ícone da impressora, abre uma nova página para impressão do relatório.|
| **Exportar CSV** |Representado pelo ícone da folha de papel, baixa o relatório.|
| **Agendar relatório** |Representado pelo ícone do relógio, abre o formulário **[Agendar relatório](/v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports)**. |
***
## Campos de busca - operações em lote
Os campos de busca abaixo estão presentes em **Renovação em lote**, **Revogação em lote** e **Desativação em lote**. 

|Item|Descrição|
|-|-|
|**Código**|Utilizado para buscar o certificado pelo número identificador do evento.|
|**Autoridade certificadora**|Utilizado para buscar o certificado pela autoridade escolhida para assinatura.|
|**Nome comum**|Utilizado para buscar o certificado pelo CN cadastrado.|
|**Origem**|Utilizado para buscar o certificado pela origem. Exibe um menu suspenso com as opções: *Scan e discovery*, *Request* ou *Importação manual*.|
|**Data de vencimento**|Utilizado para buscar o certificado pela data de vencimento. Exibe um calendário para selecionar uma data específica ou para definir uma data inicial e criar um intervalo de tempo.
|**até**|Utilizado para buscar o certificado pela data de vencimento. Exibe um calendário para definir uma data final e criar um intervalo de tempo.|
|**Estado**|Utilizado para buscar o certificado pelo status. Exibe um menu suspenso com as opções: *Válido*, *Revogado*, *Renovação Requisitada* ou *Vencido*.|
|**Filtrar**|Botão para executar o processo de filtragem configurado.|
|**Limpar**|Botão para limpar os campos preenchidos e iniciar nova busca.|

Os resultados são exibidos em formato de lista na tela, com colunas nomeadas conforme os campos correspondentes. A lista apresenta informações que não constam nos campos de busca:

* **Organização:** a organização cadastrada nas configurações do componente.
* **Tipo de validação:** a validação definida no cadastro da requisição. Pode ser: *DV SSL, EV SSL* ou *OV SSL*.
* **Tipo de domínio:** o domínio definido no cadastro da requisição. Pode ser: *único, múltiplos* ou *wildcard*.
* **Tags:** marcadores de identificação inseridos no cadastro da requisição.
* **Dispositivos:** quantos dispositivos estão vinculados ao certificado.
* **Ambientes:** o ambiente cadastrado nos parâmetros do sistema.
* **Sistemas:** o sistema cadastrado nos parâmetros do sistema.
* **Projeto:** o nome do projeto definido no cadastro da requisição.
* **Responsável:** o usuário responsável pelo certificado.

:::(Info) (Info)
Os três menus apresentam um botão azul, localizado no canto inferior direito da tela, que executa a operação em lote correspondente. 
:::
***
## Campos de busca - certificados revogados
Os campos de busca abaixo estão presentes em **Verifique certificados revogados**.

|Item|Descrição|
|-|-|
|**Código**|Utilizado para buscar a verificação pelo número de identificação do evento. |
|**Comece de verificação**|Utilizado para buscar a verificação pela data de início. Exibe um calendário para selecionar uma data específica ou para definir uma data inicial e criar um intervalo de tempo.|
|**até**|Utilizado para buscar a verificação pela data de início. Exibe um calendário para definir uma data final e criar um intervalo de tempo.
|**Fim da verificação**|Utilizado para buscar a verificação pela data de término. Exibe um calendário para selecionar uma data específica ou para definir uma data inicial e criar um intervalo de tempo.|
|**até**|Utilizado para buscar a verificação pela data de término. Exibe um calendário para definir uma data final e criar um intervalo de tempo.
|**Tem um erro?**|Utilizado para buscar a verificação pela ocorrência de erro no processo. Exibe um menu suspenso com as opções *Sim* e *Não*. 
|**Estado**|Utilizado para buscar a verificação pelo status. Exibe um menu suspenso com as opções *Aguardando*, *Em processo*, *Finalizado* ou *Sem certificados*. 
|**Filtrar**|Botão para executar o processo de filtragem configurado.|
|**Limpar**|Botão para limpar os campos preenchidos e iniciar nova busca.|

Os resultados são exibidos em formato de lista na tela, com colunas nomeadas conforme os campos correspondentes. A lista apresenta informações que não constam nos campos de busca:

* **Tempo de execução:** a duração do processo de execução. 
* **Certificados:** quantos certificados foram verificados.
* **Esperando:** quantos certificados estão aguardando verificação.
* **Sucesso** 
* **Erro** 
* **Progresso:** a barra de evolução do processo.

### Ação
Esta coluna apresenta botões de ação para executar tarefas relacionadas ao componente.
|Item|Descrição|
|-|-|
|**Verificação detalhes**|Representado pelo ícone da lupa. Abre a página *Verificação detalhes*, que informa se houve algum erro de verificação com os certificados ou se eles foram revogados. |

:::(Info) (Info)
A tela inicial apresenta o botão azul **Verificar certificados**, localizado no canto inferior direito da tela, que aciona a verificação. 
:::
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
