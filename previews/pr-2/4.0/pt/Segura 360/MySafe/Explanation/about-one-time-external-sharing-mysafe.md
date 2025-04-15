# Sobre compartilhamento externo temporário

O **Compartilhamento externo temporário** é uma funcionalidade que possibilita que usuários do **MySafe** compartilhem seus itens como senhas, anotações, arquivos e segredos de API de forma temporária com usuários externos ao **MySafe**.

É importante ressaltar que, embora não seja necessário que o destinatário de um item compartilhado tenha uma conta no **MySafe**, ele só poderá acessar o item se estiver conectado ao Segura localmente ou via VPN.

## Funcionalidades

A segurança sempre foi a nossa principal prioridade no desenvolvimento do **MySafe**. Ao compartilhar um item temporariamente com um usuário externo, as seguintes medidas de segurança são aplicadas:
- **Criptografia de ponta a ponta**: garante que somente o destinatário, com o link exclusivo, possa acessar o conteúdo.
- **Links de acesso exclusivos e temporários**: cada link gerado é único e pode ser revogado a qualquer momento pelo proprietário do item, garantindo controle total sobre o acesso.
- **Configuração de tempo de acesso e visualizações**: você decide por quanto tempo o link de compartilhamento permanecerá válido e quantas vezes o destinatário poderá acessar o item dentro desse período. Defina limites de tempo específicos, como 24 horas ou 7 dias, e limite o número de visualizações permitidas para garantir ainda mais segurança.

## Aplicabilidade

O **Compartilhamento externo** oferece uma solução prática e segura para diversas situações, como:
- **Colaboração com clientes e fornecedores**: compartilhe dados de acesso a sistemas ou arquivos específicos de um projeto sem precisar fornecer credenciais de acesso completas.
- **Trabalho remoto e equipes híbridas**: facilite o acesso a informações importantes para membros da equipe que não estão no escritório ou não possuem uma conta MySafe.
- **Compartilhamento de senhas Wi-Fi com visitantes**: crie um acesso seguro e temporário à rede Wi-Fi da sua empresa para clientes e parceiros durante suas visitas.
- **Envio de dados sensíveis para departamentos externos**: compartilhe arquivos confidenciais, como relatórios financeiros ou contratos, com departamentos que não possuem acesso ao seu cofre MySafe.

## Caso de uso

**Compartilhamento seguro de segredos de API para suporte técnico**

- **Ator principal**: Clara (desenvolvedora de software em uma empresa de tecnologia e soluções de software)

- **Resumo**: esse caso de uso demonstra como Clara utiliza o recurso de compartilhamento único do **MySafe** para compartilhar de forma segura e temporária segredos de API com a equipe de suporte da empresa para solucionar um problema de integração entre sistemas.

**Fluxo básico**:

1. **Identificação da necessidade de acesso** 
    1. Clara identifica um problema de integração que necessita de assistência de outra equipe da empresa que não possui acesso ao **MySafe**. 
    2. Ela decide fornecer a essa equipe acesso temporário aos segredos de API relevantes para solucionar o problema.

2. **Configuração do compartilhamento seguro** 
    1. Clara acessa o **MySafe** e localiza os segredos de API que precisam ser compartilhados. 
    2. Ela configura as permissões para acesso de visualização temporário, limitando o tempo de acesso a 1 hora, conforme o necessário para a resolução do problema.

3. **Envio do link de compartilhamento**
    1.  O **MySafe** gera um link de acesso seguro, juntamente com um token de acesso único, e ambos são enviados para o e-mail da equipe de suporte. 
    2.  O link e o token são enviados em mensagens separadas para maximizar a segurança.

4. **Utilização e expiração do acesso**
    1.  A equipe de suporte, utilizando o link e o token recebidos, acessa os segredos de API e utiliza as informações para solucionar o problema de integração. 
    2.  Após 1 hora, conforme estabelecido por Clara, o acesso expira automaticamente, garantindo que não haja acesso contínuo às credenciais sensíveis.

**Benefícios**:

- **Controle de acesso**: Clara consegue fornecer acesso de forma controlada e por um período definido, minimizando riscos de segurança.
- **Eficiência na solução de problemas**: o compartilhamento rápido e seguro dos segredos de API permite que o problema de integração seja solucionado eficientemente pela equipe de suporte.
- **Segurança reforçada**: a expiração automática do acesso impede que informações sensíveis permaneçam acessíveis após a conclusão da tarefa, mantendo a integridade dos segredos de API.
- **Rastreabilidade e auditabilidade**: todas as ações de compartilhamento são registradas e podem ser facilmente auditadas para conformidade e revisão posterior.

## Conclusão

Com essa funcionalidade, o **MySafe** remove as barreiras da colaboração, permitindo o compartilhamento de informações confidenciais de forma segura e controlada com qualquer pessoa que tenha acesso ao Segura, independentemente de utilizarem o **MySafe** ou não.