## Visão geral

O GO Endpoind Manager para Windows disponibiliza a consulta de credenciais em modo offline. Quando o GO Endpoint Manager tenta estabelcer uma conexão com a plataforma senhasegura e falha três vezes, o modo offline é ativado automaticamente. Não há necessidade de configuração ou ativação por parte do usuário. 

Caso as aplicações (Core e Vault) fiquem sem conexão com a plataforma senhasegura, o usuário poderá realizar ações com base nas últimas políticas sincronizadas. As políticas, por padrão, são sincronizadas a cada 15 min.

CuidadoA sincronização das credenciais ocorre a cada 15 minutos, por padrão. Não é recomendado definir um intervalo de tempo inferior a 15 minutos porque o excesso de consultas pode influenciar no desempenho do servidor senhasegura.

---

## Habilitar modo offline

O modo offline é habilitado nas seguintes situações:

* Logo após o registro do agente na plataforma senhasegura.
* Antes de realizar qualquer requisição à plataforma senhasegura.
* Sempre que o Go Service reiniciar.
* Se houverem mudanças nos adaptadores de rede da máquina.

### Visualizar eventos

O GO Endpoint Manager sincroniza os logs das ações realizadas pelo usuário com a plataforma senhasegura, assim que a aplicação volta ao modo online. Durante o período em que a aplicação está offline, os registros são armazenados localmente de maneira segura. Veja o artigo Relatório de eventos para mais informações sobre os logs. 

InfoCaso existam restrições como Denylists, as regras continuarão a ser aplicadas.### Funcionalidades indisponíveis quando não há conexão com a plataforma senhasegura

InfoO usuário receberá uma mensagem em sua workstation ao tentar realizar uma dessas ações.* Atualização
* Análise de malware
* Acesso às credenciais
* Automação
* UAC
* Atualização de políticas
* Single sign\-on
* Workflow de aprovação

CuidadoApenas o workflow de aprovação com acesso emergencial funciona no modo offline.

A criação do compartilhamento de rede não depende de credenciais. Seu funcionamento é igual ao do modo online, ou seja, o compartilhamento é sempre com o usuário que executou o GO Endpoint Manager.

  


