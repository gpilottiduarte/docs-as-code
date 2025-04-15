# User Behavior

O **User Behavior** disponibiliza relatórios que avaliam o comportamento dos usuários ao interagirem com os recursos do Segura. 

## Funcionalidades

- **Estabelecimento de comportamento padrão**: o sistema analisa o comportamento de um usuário ao interagir com os recursos do Segura e define um padrão comportamental para esse usuário. Ações que divergem desse padrão são consideradas suspeitas.  
    
- **Pontuação de usuário**: ações suspeitas podem resultar na perda de pontos para o usuário. Quanto mais aderente às políticas de segurança o comportamento do usuário for, maior será sua pontuação.  
    
- **Identificação contínua**: acompanhamento dos registros de verificação de identidade dos usuários. 
    
- **Geração de logs**: o **User Behavior** possibilita a geração de logs detalhados, que podem ser consumidos por sistemas de Gerenciamento de Informações e Eventos de Segurança (SIEM).

## Aplicabilidade

O módulo **User Behavior** é útil em diversos cenários, como:

* **Configuração dos comandos auditados**

Administradores podem definir os comandos que serão auditados durante uma sessão e as ações que serão executadas quando o usuário digitar tais comandos.

* **Identificação contínua e verificação de identidade**

Na configuração do sistema, o administrador pode definir pontuações específicas para ações como visualização de senhas ou início de sessões. Quando essas pontuações são atingidas, o recurso de **Identificação contínua** é acionado, solicitando que o usuário se re-autentique para continuar utilizando o Segura. Através do menu **Logs de re-autenticação**, o administrador pode visualizar um relatório detalhado com informações sobre todas as re-autenticações solicitadas, ajudando na análise de ações suspeitas e na gestão de segurança.

* **Logs individualizados**

Na seção **User Posture,** é possível selecionar um usuário específico e visualizar dashboards com todas as suas interações relevantes e consideradas suspeitas.

* **Priorização de usuários de alto risco**

O relatório disponível na seção **Classificação dos usuários** exibe os usuários e o risco do comportamento, começando do mais suspeito para o menos suspeito, facilitando a adoção de medidas proativas para mitigar ameaças à segurança dos dados.

* **Visão detalhada do comportamento dos usuários**

Os relatórios disponíveis na seção **Análise de comportamentos** proporcionam uma análise minuciosa das interações dos usuários com a aplicação, identificando ações suspeitas referentes aos logs de re-autenticação, alteração de senha, eventos da sessão e eventos de visualização de credenciais.

* **Auditoria de comandos** 

A seção **Logs de comandos auditados** registra os comandos auditados que foram executados pelos usuários dentro do Segura. Através desses relatórios, é possível rastrear ocorrências detalhadas por comando, dispositivo, credencial e usuário. Além disso, é possível observar todas as sessões em que ocorreram quaisquer tipos de incidentes, permitindo um monitoramento abrangente e preciso das atividades realizadas no sistema.

* **Fortalecimento da segurança organizacional**

A utilização do **User Behavior** promove uma cultura de conscientização e responsabilidade entre os usuários, oferece insights valiosos para aprimorar políticas de segurança e implementar medidas preventivas e contribui para garantir a integridade dos dados sensíveis e fortalecer a postura de segurança da organização.

## Caso de uso

**Monitoramento de atividades suspeitas**

**Ator principal:** Alex (administrador de segurança de TI)

**Resumo**: este caso de uso descreve como Alex utiliza o **User Behavior** para monitorar e mitigar potenciais ameaças à segurança dos dados sensíveis em uma rede corporativa.

**Observação**: o **User Behavior** é projetado para analisar o comportamento dos usuários e identificar atividades suspeitas dentro do Segura. Este caso de uso é aplicável para organizações que buscam fortalecer sua postura de segurança ao identificar e responder a comportamentos anômalos dos usuários.

**Fluxo básico:**

**1.** **Geração de logs e visualização de pontuações**
   - O módulo **User Behavior** gera logs detalhados, atribuindo pontuações aos comportamentos dos usuários com base em ações suspeitas ou anômalas.   
   - Alex visualiza esses logs e pontuações para obter uma visão inicial das atividades dos usuários.

**2.** **Análise e identificação de cenários que necessitam de tratamento**  
   - Alex analisa os logs e pontuações gerados pelo **User Behavior** para identificar cenários que apresentam comportamentos suspeitos ou violações de segurança.  
   - Isso inclui tentativas de acesso em horários incomuns, modificações frequentes de senhas ou acessos incomuns a credenciais.

**3**. **Configuração de comandos auditados e Identificação contínua**  
   - Com base na análise, Alex cria comandos auditados específicos para monitorar atividades críticas.  
   - Ele também configura o recurso de **Identificação contínua** para solicitar re-autenticação dos usuários ao realizarem ações suspeitas ou ao atingirem uma determinada pontuação.

**4. Visualização de ações pós-configuração**  
   - Após a configuração, Alex monitora as ações realizadas pelos usuários, observando os logs atualizados e as pontuações atribuídas após a implementação das novas medidas de segurança.

**5. Investigação e adoção de medidas**  
   - Alex investiga as ações que continuam a ser suspeitas ou que desencadeiam alertas no sistema.  
   - Com base nas investigações, ele toma medidas proativas para mitigar potenciais ameaças, como bloquear sessões, suspender usuários ou implementar políticas de segurança adicionais.

**Pós-condição:**  
Alex utiliza o **User Behavior** para monitorar, identificar e responder eficientemente a comportamentos suspeitos dos usuários. Essas ações fortalecem a postura de segurança da organização, protegendo dados sensíveis e mitigando potenciais ameaças de forma proativa.

##  Conclusão  
O produto **User Behavior** do Segura é uma ferramenta crucial para aprimorar a segurança organizacional, fornecendo relatórios detalhados que analisam o comportamento dos usuários e detectam atividades suspeitas. Ao compreender os padrões de comportamento dos usuários, o Segura possibilita que os administradores atribuam pontuações a comportamentos anômalos e priorizem usuários de alto risco. Isso permite que os administradores adotem medidas proativas para mitigar possíveis ameaças à segurança dos dados, configurando parâmetros do sistema e monitorando individualmente as interações dos usuários. O **User Behavior** promove uma cultura de conscientização e responsabilidade, sendo fundamental para proteger os dados sensíveis e fortalecer a postura de segurança da organização.