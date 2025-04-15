# FAQ

## Atualizações e Manutenção 

### Snapshots da instância

- **Quem é responsável por tirar snapshots da instância?**   
  - O Segura é responsável por tirar esses snapshots diariamente e antes da manutenção programada.

### Atualizações de Versão 

- **Como são realizadas as atualizações de versão?**   
  - No modelo SaaS, as atualizações são tratadas pelo suporte de acordo com a programação do fabricante.

## Arquitetura e backup 

### Snapshots Vs. backups regulares 

- **Por que são tirados snapshots em vez de backups regulares?**   
  - Os snapshots capturam uma imagem completa da aplicação, permitindo a restauração em caso de indisponibilidade ou incidente.

### Backup Local 

- **Por que há um backup local?**   
  - Backups locais permitem procedimentos de “*break the  glass*” sem necessidade de acesso à nuvem, garantindo acesso ao dispositivo durante a indisponibilidade.

### Armazenamento de Backup 

- **Onde são armazenadas as cópias de backup?**   
  - Backups de credenciais são armazenados na rede do cliente para procedimentos de "*break the glass*".

### Opções de Provedores de Nuvem

- **Posso usar outro provedor de nuvem?**   
  - A Segura define o provedor de serviços para o SaaS. Clientes que preferem outro provedor devem optar pela versão on-premises.

### Redundância e Recuperação de Desastres 

- **Há redundância entre diferentes regiões?**   
  - Por padrão, não. O Segura utiliza os serviços de contingência do Google para a disponibilidade dos dados.

### Arquitetura Ativo-Ativo 

- **Há uma arquitetura ativo-ativo disponível?**   
  - Sim, o Segura SaaS possui seu próprio sistema de ativo-ativo entre instâncias. Além disso, o ambiente GCP do Google inclui sistemas de backup específicos para cada região. Os serviços de backup entre regiões estão disponíveis separadamente.

### Configurações personalizadas de backup

- **É possível criar backups em outros provedores de nuvem?**   
  - Os clientes podem fazer backup de vídeos e credenciais em um servidor gerenciado pessoalmente, seja baseado em nuvem ou físico. Os snapshots diários do Segura são armazenados no GCP na mesma região que a instância.

## Regulamentos e segurança 

### Planos de contingência 

- **Qual é o plano de contingência em caso de falha na região hospedada?**   
  - Os múltiplos data centers do GCP em cada região garantem failovers transparentes, minimizando riscos de falha.

### Teste de intrusão 

- **Com que frequência são realizados testes de intrusão no ambiente da aplicação?**   
  - Testes de intrusão coincidem com cada atualização de software no ambiente de hospedagem, utilizando ferramentas padrão de mercado e consultores externos.

### Segurança dos dados 

- **O que garante que a máquina do cliente não será clonada ou copiada?**   
  - Segura emprega políticas operacionais abrangentes certificadas pela ISO 27001 para prevenir erros.

## Gerenciamento e acesso remotos

### Acesso de Suporte

- **Como o Segura fornece suporte remoto para clientes SaaS?**   
  - Na modalidade SaaS, o suporte do Segura realiza de forma transparente a manutenção do ambiente. Caso seja necessário acessar os dados da aplicação do cliente, esse acesso é realizado exclusivamente em conjunto com o cliente.

### Acesso ao Painel Orbit

- **Há acesso ao painel Orbit no SaaS?**   
  - No modelo SaaS, apenas o suporte Segura pode acessar o menu Orbit.

## Gerenciamento de Backups 

### Responsabilidade pelos backups 

- **Quem gerencia os backups no SaaS e SaaS Privado?**   
  - No modelo SaaS, o Segura gerencia os backups do sistema, enquanto os backups de senhas são de responsabilidade do cliente via rsync.

