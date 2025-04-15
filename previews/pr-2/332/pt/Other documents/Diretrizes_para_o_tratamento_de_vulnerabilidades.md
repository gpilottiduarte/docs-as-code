# Diretrizes para o tratamento de vulnerabilidades

A equipe de segurança do senhasegura, chamada SEGI9, procura por vulnerabilidades de segurança e responde proativamente àquelas que são relatadas nos produtos senhasegura e nos seus componentes.

Essa equipe trabalha com membros da comunidade, como empresas de segurança, auditorias externas de segurança, equipes externas de segurança de clientes e usuários finais.

O senhasegura está comprometido em abordar rapidamente as vulnerabilidades que afetam nossos clientes, e fornecer orientações claras sobre a solução, impacto, gravidade e mitigação dessas vulnerabilidades.

## **Como relatar uma possível vulnerabilidade de segurança**

Se você encontrou alguma possível vulnerabilidade de segurança em um produto senhasegura, entre em contato com a equipe do SEGI9, através do e-mail cve@senhasegura.com. É muito importante incluir os seguintes detalhes:

- Os produtos afetados e suas versões.
- Data da última atualização.
- Descrição detalhada da vulnerabilidade.
- Informações sobre como explorar o problema relatado.

As informações de vulnerabilidade são extremamente confidenciais. Recomendamos enfaticamente que você criptografe todos os relatórios de vulnerabilidade de segurança, utilizando a chave PGP do senhasegura CVE abaixo:

**CVE senhasegura PGP key**
    
```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCfsnxfQiPZxBRHfG55UTX0vY/omPIojBVWQ0C2o0bXDXzUjOj6/8A3sZMRNOIDSTwCmWZxERQ5nmc7cWOF3/i+Pv5fdz8I20a+Mxhs+XoE2SHdOnF5IsRAFrdKObnA/THRZOdHT4aUzsekoDynKlUAmws2Rz3Fz8xx6El4+DJclGPkqd0N/5uTj9DpBt5ywJQS8YBF0Fgp2iCSHJPPymrZC5ZkBHO+WkdJGBjfDFKVdEfeSxiSU/11KQfcpyaMbSqhVb6jOcmb0ENBaKzilObzaRPKrorsw2yTscTebEcmUqqbWRXfEfkWzWEMOZwg/ytC46n6TN+imrWy7XlscOwmlS7CWdLft48TCGX/6zuMNPp/IDAssQa5NOA0i8z9cDKJAyaWoCO9PXHmwSWfeRxcnpuRiw8FE7JVsbMugDN3DMqsyXgT/6/apvais611YZ86ZSDz+na7WYwGWhiKkS8/DvapTnReuPZxTFYts65sGkyLcbWhY7wv7OJBC+raHeEvyac9SdS8uumv7dHyoA6DaQp+JwDhMNXZrcsneRolQ+rjRCpiqrpEB40wyaRrPvC6gADQ1ShL+LGs4jedxhEengOQoMBrwR5HFtJDGriuU7NAtKu2iUsb19psweMmZDBYNfU5uSNf+kpY5Og84v5wLxOc+E2pHo7nwxmZR2UzOQ== cve@senhasegura.com
```
    

## **Publicação de informações de segurança**

O senhasegura publica informação de segurança no Centro de Segurança do produto senhasegura.

## **Avisos de segurança**

Forneça informações sobre vulnerabilidades de segurança identificadas nos produtos senhasegura, incluindo quaisquer correções, soluções alternativas ou outras ações.

## **Processo de tratamento de vulnerabilidades**

As vulnerabilidades de segurança nos produtos senhasegura são gerenciadas ativamente por um processo bem definido. O tempo de resposta varia conforme o escopo do problema. O processo consiste em quatro etapas principais: relatório, avaliação, solução e comunicação. Cada etapa é descrita a seguir:

### **Relatório**

O processo começa quando a equipe do SEGi9 toma conhecimento de uma potencial vulnerabilidade de segurança nos produtos senhasegura. O relator recebe uma confirmação e é atualizado no decorrer do processo.

### **Avaliação**

A equipe do SEGi9 confirma a potencial vulnerabilidade potencial, avalia o risco, determina o impacto e atribui uma prioridade. Caso a vulnerabilidade seja total ou parcialmente confirmada na versão estável, um esquadrão técnico especial é criado para analisar e corrigir o problema. Este esquadrão é polivalente, e composto por desenvolvedores, analistas de segurança, analistas de produto e analistas de qualidade.

### **Solução**

Depois que o problema for corrigido, o patch de segurança será inserido na versão instável e entregue à equipe de qualidade para que a modificação seja testada e aprovada. Nos casos de vulnerabilidade com alto risco, o senhasegura entregará um patch diretamente para todas as versões do senhasegura.

### **Comunicação**

O senhasegura publica um aviso de segurança para problemas graves. Casos menos graves são comunicados por outros métodos. Os avisos são postados na Central de Segurança do Produto senhasegura, e divulgados simultaneamente para todos os clientes.

---

## **Programa de Bug Bounty**

Nosso **Programa de Bug Bounty** é projetado para incentivar pesquisadores de segurança, hackers éticos e especialistas em tecnologia de todo o mundo a colaborarem na melhoria contínua da segurança de nossos produtos e serviços. Valorizamos a segurança de nossos usuários e acreditamos que a comunidade global desempenha um papel crucial na identificação de vulnerabilidades que podem comprometer a integridade de nossos sistemas.

Convidamos você, como pesquisador, a nos ajudar a encontrar vulnerabilidades de segurança em nossos sites, aplicações e soluções de segurança. Em contrapartida, oferecemos recompensas financeiras baseadas na gravidade e no impacto da vulnerabilidade relatada.

### **Como funciona**

1. **Vulnerabilidade Potencial:** Submeta uma vulnerabilidade potencial seguindo as diretrizes em “Reportando uma Potencial Vulnerabilidade de Segurança”.
2. **Análise pela Nossa Equipe de Segurança:** Nossa equipe de segurança analisará cuidadosamente cada submissão. Se o problema for validado e considerado fora do conhecimento interno, ele se qualificará para uma recompensa.
3. **Recompensas Baseadas na Gravidade:** O relator será recompensado de acordo com a classificação de gravidade da vulnerabilidade descoberta.

### **Classificação e Recompensas**

**Severidade Baixa**

- **Descrição:** Vulnerabilidades com impacto limitado, afetando apenas alguns usuários ou exigindo condições específicas para serem exploradas. Esses defeitos tipicamente não comprometem diretamente a segurança, mas podem representar pequenos riscos ou inconveniências para os usuários.
- **Recompensa:** U$ 250,00

**Severidade Média**

- **Descrição:** Essas vulnerabilidades podem ser exploradas sob certas condições e impactam a confidencialidade, integridade ou disponibilidade de maneira mais significativa, mas não levam ao comprometimento total do sistema ou de dados críticos.
- **Recompensa:** U$ 500,00

**Severidade Alta**

- **Descrição:** Essas vulnerabilidades representam um risco crítico para o sistema e seus usuários, pois podem resultar em controle completo sobre sistemas, roubo de dados sensíveis ou interrupção severa de serviços.
- **Recompensa:** U$ 1.000,00

### **Termos e Condições**

- Os participantes devem cumprir as leis locais e internacionais.
- O uso de técnicas de exploração que interrompam serviços ou prejudiquem usuários é proibido.
- Qualquer ação que viole nossos termos de uso pode desqualificar o participante do programa.

Estamos comprometidos em trabalhar junto com a comunidade de segurança para garantir que nossas soluções proporcionem o mais alto nível de proteção para nossos clientes e usuários em todo o mundo. Juntos, podemos construir um ambiente digital mais seguro.