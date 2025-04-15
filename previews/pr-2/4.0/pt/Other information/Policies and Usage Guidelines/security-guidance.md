# Security Guidance

## Definindo uma vulnerabilidade de segurança
O que é uma vulnerabilidade de segurança? Este documento tem como objetivo apresentar a definição de uma vulnerabilidade de segurança de acordo com o entendimento da equipe técnica do Segura.

Para a equipe de segurança de software, um bug é um comportamento inesperado no aplicativo e uma vulnerabilidade de segurança é um bug que permite qualquer tipo de acesso ou mostra qualquer informação que o usuário ou invasor não teria de outra forma. Este documento ajudará você a entender quais tipos de problemas são abordados em boletins de segurança relacionados a violações de segurança.

Definir o conceito de vulnerabilidade de segurança é extremamente complexo, pois significa reduzir de forma assertiva, dentre toda a gama de problemas, aqueles que atacam direta ou indiretamente a confiabilidade do produto e da marca. O objetivo do nosso programa de relatórios de vulnerabilidades de segurança é aumentar a transparência e a cooperação no que diz respeito à segurança do produto. Ao entender o tamanho do desafio de definir esse conceito, nossa definição serve como um filtro mais amplo para relatar novas vulnerabilidades, em vez de ser a palavra final.

## Colocando o conceito em prática

Abaixo estão alguns exemplos de problemas já relatados que não são considerados vulnerabilidades de segurança porque não atendem à nossa definição de vulnerabilidade de segurança:

- Certificado digital autoassinado
- Credenciais de login padrão
- Conexões HTTP permitidas
- Redirecionar script em URLs não acessíveis
- Versões do pacote do sistema em versões antigas do Segura
- Suporte para versões mais antigas do TLS
- Segura como alvo de um man-in-the-middle (MITM) já estabelecido
 
 ##  Segurança no Ciclo de Vida de Desenvolvimento de Software (SSDLC)
Nosso processo de desenvolvimento adota integralmente o SSDLC (Secure Software Development Life Cycle), garantindo que segurança esteja presente em todas as fases do ciclo de vida do software.

Aplicamos práticas como análise de riscos, design seguro, codificação com boas práticas de segurança, validação contínua (SAST, DAST, testes de dependências e pentests), além de processos controlados de implantação e monitoramento ativo de incidentes.

Nossa equipe é treinada continuamente em segurança, assegurando que cada entrega esteja alinhada aos princípios de proteção, qualidade e conformidade.

* * *

## Próximos passos

Depois de ler nossa definição de vulnerabilidades de segurança, se você acredita ter encontrado uma vulnerabilidade de segurança no Segura, entre em contato conosco por meio das [Vulnerability Handling Guidelines](/vulnerability-handling-guidelines/).

Para vulnerabilidades conhecidas, consulte nossos[Product Security Center Advisories](/security-center-advisories/).