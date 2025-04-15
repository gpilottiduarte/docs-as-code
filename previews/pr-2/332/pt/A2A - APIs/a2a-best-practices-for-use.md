# Boas práticas

Este artigo apresenta um conjunto de boas práticas para garantir o uso seguro do módulo WebService **A2A**. Em caso de dúvidas, entre em contato com nosso time de suporte.

## Configure apenas uma credencial por autorização WebService A2A
Para minimizar riscos, configure apenas uma credencial por autorização WebService **A2A**. Essa prática garante que cada autorização esteja vinculada a uma única credencial, centralizando o rastreamento de atividades. Em caso de vulnerabilidade, é mais fácil dar uma resposta ágil tendo apenas uma credencial para desativar, eliminando a necessidade de gerenciar várias.

## Restrinja o IP de origem para autorização WebService A2A
Restrinja o IP de origem das autorizações WebService **A2A** aos servidores (e suas redundâncias) que gerenciam aplicações que requerem acesso às credenciais do senhasegura. Aplique o princípio do menor privilégio, definindo uma política que concede acesso apenas aos servidores que necessitam do uso de credenciais gerenciadas pelo senhasegura.

## Prefira OAuth 2.0 em vez de OAuth 1.0
Escolha o OAuth 2.0 como seu método de autenticação em vez do OAuth 1.0 para uma segurança aprimorada. Priorize sempre o uso dos padrões mais recentes alinhados a níveis robustos de segurança e compatíveis com seus ativos tecnológicos.

## Habilite a criptografia e a segmentação da informação
Ative a criptografia de informações sensíveis para consultas por meio da API do senhasegura. Segmente o módulo de consulta de credenciais e o módulo de descriptografia de informações sensíveis, atribuindo essas tarefas a diferentes desenvolvedores para evitar o acesso completo a informações por parte de um único indivíduo.

## Implemente a recuperação dinâmica de credenciais durante a execução
Implemente um mecanismo para recuperar dinamicamente credenciais durante a execução da aplicação, evitando a necessidade de armazená-las em arquivos. Armazenar credenciais fora do gerenciamento do senhasegura as expõe a acessos não autorizados, comprometendo a rastreabilidade de consultas e correndo o risco de uso irresponsável.

## Crie um cache local de credenciais
Oriente os desenvolvedores a criar um cache local de credenciais com tempo de vida controlado. Essa prática garante a funcionalidade contínua da aplicação, mesmo em caso de indisponibilidade do senhasegura, permitindo consultas a partir do cache local.

## Ajuste o tempo de vida do cache local ao tempo de rotação da senha
Ajuste o tempo de vida do cache local ao tempo de rotação da senha do senhasegura. Isso assegura que a senha armazenada no cache local permaneça atualizada, evitando problemas de autenticação devido a credenciais desatualizadas durante uma possível indisponibilidade do senhasegura.

## Lide com erros de conectividade e verifique a rotação de senha
Oriente os desenvolvedores a verificar novamente o senhasegura em caso de erro de conectividade com a consulta de senha. Dadas as frequentes rotações de senha com base nas configurações do senhasegura, verificar a atualização da senha é crucial para evitar obsolescência do cache local e possíveis falhas de autenticação.