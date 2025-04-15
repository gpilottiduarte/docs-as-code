# Professional Services

## Teste de HA/DR

* **Nome do Serviço:** Teste de HA/DR.
* **Contratar com:** Revenda ou senhasegura.
* **Tempo contratado:** Mínimo de 4 horas, este tempo pode variar dependendo da estrutura implantada e dos testes a serem realizados. No momento da contratação será informado quantas horas serão necessárias.
* **Agendamento prévio:**
  * 5 dias úteis de antecedência para agendamento de teste.
* **Premissas para o serviço:** Prever o formato do teste de HA/DR.
  * Clone de instância senhasegura em ambiente segregado;
  * Teste de HA/DR em ambiente produtivo.
* **Cronograma de execução e descrição do Serviço:**
  * Clone de instância senhasegura em ambiente segregado:
    * Agendamento de execução. **Responsável**: Cliente e Revenda\senhasegura;
    * Clone de instância senhasegura. **Responsável**: Cliente;
    * Montagem de ambiente segregado com a instância do senhasegura. **Responsável**: Cliente;
    * Ativação da aplicação senhasegura e preparação para o teste. **Responsável**: Revenda\senhasegura.
  * **Teste de HA/DR em ambiente produtivo:**
    * Agendamento de execução, com previsão de indisponibilidade durante o teste. **Responsável**: Cliente e Revenda\senhasegura;
    * Execução de desligamento programado da instância senhasegura. **Responsável**: Cliente;
    * Recuperação do ambiente, se necessário. **Responsável**: Revenda\senhasegura.
 * **Resultado esperado:** 
  * Execução do teste de HA/DR com resultados mapeados e documentados, como RTO (Recovery Time Objective) e ações necessárias, em caso de desastre.
*  **Exemplos de necessidade:**
  * Teste de ambiente para compliance e auditoria;
  * Teste real de ambiente para elaboração de Plano de Continuidade de negócio.


## Teste de restore de sistema

* **Nome do Serviço:** Teste de Restore de sistema.
* **Contratar com:** senhasegura.
* **Tempo contratado**: Mínimo de 4 horas, este tempo pode variar dependendo da estrutura implantada e testes a serem realizados. No momento da contratação será informado quantas horas serão necessárias.
* **Agendamento prévio:**
  * 5 dias úteis de antecedência para agendamento de teste.
* **Premissas para o serviço:**
  * Realizar o deploy de uma nova instância do senhasegura e definir um IP de acesso para esta instância.
* **Cronograma de execução e descrição do Serviço:**
  * Agendamento da execução. **Responsável**: Cliente e senhasegura;
  * Realizar o deploy de uma nova instância do senhasegura e definir um IP de acesso para esta instância, antes do dia agendado para execução. **Responsável**: Cliente;
  * Realizar a configuração inicial da instância. **Responsável**: senhasegura;
  * Realizar o Restore de sistema a partir do backup. **Responsável**: senhasegura;
  * Ativação da aplicação senhasegura e preparação para o teste. **Responsável**: senhasegura ;
  * Realização de testes funcionais da aplicação senhasegura. **Resposnável**: Cliente.
* **Resultado esperado:**
  * Execução do teste de Restore de sistema com resultados mapeados e documentados, como RPO (Recovery Point Objective) e RTO (Recovery Time Objective) e ações necessárias, em caso de desastre.
* **Exemplos de necessidade**:
  * Teste de ambiente para compliance e auditoria;
  * Teste real de ambiente para elaboração de Plano de Continuidade de negócio.

## Atualização assistida

* **Nome do Serviço**: Atualização assistida.
* **Contratar com:** Revenda ou senhasegura.
* **Tempo contratado:** Mínimo de 6 horas, este tempo pode variar dependendo da estrutura implantada e testes a serem realizados. No momento da contratação será informado quantas horas serão necessárias.
* **Agendamento prévio:**
  * 5 dias úteis de antecedência para agendamento de teste.
* **Premissas para o serviço:**
  * Liberação de acesso da instâncias do senhasegura no ambiente para os mirrors de atualização:
    * deb.senhasegura.com:443
    * security.senhasegura.com:443
  * Execução de snapshots, no início da atividade de atualização.
* **Cronograma de execução e descrição do Serviço:**
  * Agendamento da execução. **Responsável:** Cliente e Revenda ou senhasegura;
  * Liberação de acesso da instâncias do senhasegura no ambiente para os mirrors de atualização. **Responsável:** Cliente.
    * deb.senhasegura.com:443
    * security.senhasegura.com:443
  * Execução de snapshots, no início da atividade atualização. **Responsável**: Cliente e Revenda ou senhasegura;
    * Desligamento individual de instâncias do senhasegura. **Responsável**: Revenda ou senhasegura;
    * Realização de snapshot e religamento de instância. **Responsável:** Cliente;
  * Realizar a atualização individual de instâncias do senhasegura. **Responsável:** Revenda ou senhasegura;
  * Validação inicial pós-atualização da aplicação senhasegura e preparação para o teste. **Responsável:** senhasegura;
  * Realização de testes funcionais da aplicação senhasegura. **Responsável:** Cliente.
* **Resultado esperado**:
  * Realização da atualização da aplicação senhasegura para a última versão, de forma assistida.
* **Exemplos de necessidade:**
  * Atualização para implementação de bugfixes ou melhorias e novas funcionalidades da aplicação senhasegura.



## Configurações assistidas

* **Nome do Serviço:** Configurações assistidas.
* **Contratar com:** Revenda ou senhasegura.
* **Tempo contratado:** Mínimo de 4 horas, este tempo pode variar dependendo do escopo de configurações definidas. No momento da contratação será informado quantas horas serão necessárias.
* **Agendamento prévio:**
  * 5 dias úteis de antecedência para agendamento.
* **Premissas para o serviço:**
  * Definir o escopo das configurações a serem realizadas.
* **Cronograma de execução e descrição do Serviço:**
  * Definir o escopo das configurações a serem realizadas. **Responsável**: Cliente;
  * Agendamento da execução.  **Responsável**: Cliente e Revenda ou senhasegura;
  * Execução das configurações assistidas.  **Responsável**: Cliente e Revenda ou senhasegura.
*  **Resultado esperado:**
  * Realização das configurações de forma assistida, resultando na configuração apropriada da aplicação senhasegura e a correta integração com o ambiente.
* **Exemplos da necessidade:**
  * Configuração de integração de autenticação;
  * Configuração de sincronização de grupos do AD;
  * Configuração do senhasegura, conforme necessidade.


## Template customizado de troca de senha

* **Nome do Serviço:** Template customizado de troca de senha.
* **Contratar com:** Revenda ou senhasegura.
* **Tempo contratado**: Mínimo de 4 horas, este tempo pode variar dependendo do escopo de dispositivos definidos, avaliação da possibilidade de integração e criação do template customizado. No momento da contratação será informado quantas horas serão necessárias.
* **Agendamento prévio:**
  * 5 dias úteis de antecedência para agendamento para implementação e testes de template, em caso de ser possível a realização da integração.
* **Premissas para o serviço:**
  * Definir o escopo de dispositivos a serem integrados com o senhasegura. **Responsável**: Cliente;
  * Avaliação da possibilidade de integração dos dispositivos. **Responsável**: Revenda ou senhasegura.
* **Cronograma de execução e descrição do Serviço:**
  * Definir o escopo de dispositivos a serem integrados com o senhasegura. **Responsável**: Cliente;
  * Avaliação da possibilidade de integração dos dispositivos. **Responsável**: Cliente e Revenda ou senhasegura;
  * Elaboração do template para troca de senha do dispositivo. **Responsável**: Cliente e Revenda ou senhasegura;
  * Agendamento para implementação e testes de template. **Responsável**: Cliente e Revenda ou senhasegura.
* **Resultado esperado:**
  * Integração de novos dispositivos para gerenciamento efetivo de suas credenciais.
* **Exemplos da necessidade:**
  * Integração de novos dispositivos de rede, aplicações web, etc;
  * Criação de templates customizados para alteração de senhas em arquivos.



## Registro de Dispositivos e Credenciais

* **Nome do Serviço:** Registro de Dispositivos e Credenciais.
* **Contratar com:** Revenda ou senhasegura.
* **Tempo contratado:** Mínimo de 4 horas, este tempo pode variar dependendo do escopo de dispositivos e credenciais definidos. No momento da contratação será informado quantas horas serão necessárias.
* **Agendamento prévio:**
  * 5 dias úteis de antecedência para agendamento para execução da importação em lote, depois de enviar a Planilha preenchida com os dispositivos e credenciais a serem importadas.
* **Premissas para o serviço:**
  * Definir o escopo de dispositivos e credenciais a serem importadas no senhasegura. **Responsável**: Cliente.
* **Cronograma de execução e descrição do Serviço:**
  * Definir o escopo de dispositivos e credenciais a serem importadas no senhasegura. **Responsável**: Cliente;
  * Preparar a planilha de importação em lote, baseada na planilha enviada pelo cliente, definindo também templates de execução de troca. **Responsável**: Cliente e Revenda ou senhasegura;
  * Agendamento para execução da importação em lote. **Responsável**: Cliente e Revenda ou senhasegura;
  * Execução da importação das planilhas de importação em lote. **Responsável**: Cliente e Revenda ou senhasegura;
  * Validação da importação em lote. **Responsável**: Cliente e Revenda ou senhasegura.
* **Resultado esperado:**
  * Importação de novos dispositivos para gerenciamento efetivo de suas credenciais.
* **Exemplos de necessidade:**
  * Rollout pós-implantação do senhasegura;
  * Adição de novo parque de dispositivos ou dispositivos de um novo Datacenter, no senhasegura.


## Migração de ambiente

* **Nome do Serviço:** Migração de ambiente.
* **Contratar com:** Revenda ou senhasegura.
* **Tempo contratado:** Mínimo de 4 horas, este tempo pode variar dependendo da estrutura implantada do senhasegura e o tipo de migração a ser realizada. No momento da contratação será informado quantas horas serão necessárias.
* **Agendamento prévio:**
  * 5 dias úteis de antecedência para agendamento para execução da migração, depois de cumpridas às premissas para o serviço.
* **Premissas para o serviço:**
  * Definir o escopo da migração, determinando se será necessário a alteração de IP de instâncias do senhasegura e demais configurações que podem ser impactadas devido a migração. **Responsável**: Cliente;
  * Para a data de execução da migração, ter as equipes responsáveis de virtualização, redes, infraestrutura e demais áreas necessárias para essa alteração. **Responsável**: Cliente.
* **Cronograma de execução e descrição do Serviço**
  * Atendimento de premissas para o serviço. **Responsável**: Cliente;
  * Agendamento de atividade de migração. **Responsável**: Cliente e Revenda ou senhasegura;
  * Desligamento de instâncias do senhasegura. **Responsável**: Revenda ou senhasegura;
  * Migração de instâncias do senhasegura para outro ambiente. **Responsável**: Cliente;
  * Ajuste de configurações das instâncias senhasegura. **Responsável**: Revenda ou senhasegura;
  * Ajuste de configurações do Cluster senhasegura. **Responsável**: Revenda ou senhasegura;
  * Validação inicial pós-migração da aplicação senhasegura e preparação para o teste funcional. **Responsável**: senhasegura.
  * Realização de testes funcionais da aplicação senhasegura. **Responsável**: Cliente.
* **Resultado esperado:**
  * Migração com sucesso da estrutura da aplicação senhasegura, com remontagem do Cluster em novo ambiente.
* **Exemplos de necessidade:**
  * Alteração de Datacenter utilizado pelo cliente;
  * Alteração da Tecnologia de virtualização utilizada no ambiente.

## Treinamento de Administradores

* **Nome do Serviço:** Treinamento de Administradores.
* **Contratar com:** Revenda ou senhasegura.
* **Tempo contratado:** 6 horas de Treinamento.
* **Agendamento prévio:**
  * 5 dias úteis de antecedência para agendamento de Treinamento
* **Premissas para o serviço:**
  * Agendamento prévio
* **Cronograma de execução e descrição do Serviço**
  * Agendamento prévio. **Responsável**: Cliente e Revenda ou senhasegura;
  * Execução do treinamento. **Responsável**:  Revenda ou senhasegura.
* **Resultado esperado:**
  * Orientação e instrução de analistas do cliente para administrar o senhasegura na estrutura;
* **Exemplos da necessidade:**
  * Aquisição de senhasegura com a necessidade de orientação e instrução de analistas do cliente para administração da aplicação.

## Treinamento de Usuários

* **Nome do Serviço:** Treinamento de Usuários.
* **Contratar com:** Revenda ou senhasegura.
* **Tempo contratado:** 2 horas de Treinamento.
* **Agendamento prévio:**
  * 5 dias úteis de antecedência para agendamento de Treinamento.
* **Premissas para o serviço:**
  * Agendamento prévio
* **Cronograma de execução e descrição do Serviço**
  * Agendamento prévio. **Responsável**: Cliente e Revenda ou senhasegura;
  * Execução do treinamento. **Responsável**:  Revenda ou senhasegura.
* **Resultado esperado:**
  * Orientação e instrução de analistas do cliente para utilizar o senhasegura na estrutura.
* **Exemplos da necessidade:**
  * Aquisição de senhasegura com a necessidade de orientação e instrução de analistas do cliente para utilização da aplicação.


## Implantação senhasegura

* **Nome do Serviço:** Implantação senhasegura
* **Contratar com:** Revenda ou senhasegura
* **Tempo contratado:** Mínimo de 5 dias, este tempo pode variar dependendo da estrutura a ser implantada e rollout a ser realizado. No momento da contratação será informado quantas horas serão necessárias.
* **Agendamento prévio:**
  * 3 dias úteis de antecedência para agendamento do kick-off
* **Premissas para o serviço:**
  * Validar a estrutura contratada do senhasegura. **Responsável**: Revenda ou senhasegura.
* **Cronograma de execução e descrição do Serviço:**
  * Kick-off. **Responsável**: Cliente e Revenda ou senhasegura;
  * Definição do cronograma. **Responsável**: Cliente e Revenda ou senhasegura;
  * Deploy das instâncias do senhasegura. **Responsável**: Cliente e Revenda ou senhasegura;
  * Configuração inicial de instâncias do senhasegura e montagem do Cluster. **Responsável**: Cliente e Revenda ou senhasegura;
  * Rollout de escopo definido; **Responsável**: Cliente e Revenda ou senhasegura;
  * Término da implantação. **Responsável**: Cliente e Revenda ou senhasegura.
* **Resultado esperado:**
  * Implantação e rollout inicial da aplicação senhasegura no ambiente do cliente.
* **Exemplos de necessidade:**
  * Aquisição do senhasegura e implantação no ambiente do cliente.

## Recuperação de senha de administrador da instância senhasegura

* **Nome do Serviço:** Recuperação de senha de administrador da instância senhasegura (mt4adm)
* **Contratar com:** senhasegura
* **Tempo contratado:** Valor fixo
* **Agendamento prévio:**
  * Conforme necessidade do cliente
* **Premissas para o serviço:**
  * Liberação de acesso da instância do senhasegura à Internet (Outbound). **Responsável**: Cliente.
  * Download do Live CD do Ubuntu. **Responsável**:  Cliente.
* **Cronograma de execução e descrição do Serviço:**
  * Execução do Live CD do Ubuntu na instância do senhasegura. **Responsável**:  Cliente;
  * Execução dos comandos na instância do senhasegura para acesso às ferramentas de recuperação de senha. **Responsável**: senhasegura;
  * Execução de recuperação da senha. **Responsável**: senhasegura;
  * Passagem da senha para o cliente. **Responsável**: Cliente e Revenda ou senhasegura.
* **Resultado esperado:**
  * Recuperação da senha do mt4adm da instância do senhasegura.
* **Exemplos de necessidade:**
  * Perda da senha da credencial de administração do senhasegura (mt4adm).
