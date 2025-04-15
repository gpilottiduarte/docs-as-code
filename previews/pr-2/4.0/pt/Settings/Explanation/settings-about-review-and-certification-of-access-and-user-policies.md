# Sobre revisão e certificação de políticas de acesso e usuários

Este documento fornece informações sobre o processo para revisão e recertificação automática das políticas de acesso e usuários.

## **Benefícios**

**Segurança reforçada**: apoia os administradores garantindo que os privilégios de acesso sejam adequados e alinhados com as necessidades da organização. Através de um processo automatizado de verificação, assegurando que as permissões sejam constantemente revisadas e ajustadas, minimizando riscos e garantindo conformidade com as políticas de segurança.

**Conformidade simplificada**: o processo é auditável e facilita a conformidade com normas de segurança, como ISO 27001, Bafin/BAIT, GDPR e PCI DSS, que exigem revisões periódicas dos acessos privilegiados.

**Eficiência operacional**: a automação libera os administradores de tarefas manuais e repetitivas.

**Visibilidade e controle aprimorados**: a auditoria e os relatórios fornecem visibilidade e controle sobre os acessos privilegiados, facilitando a identificação de riscos e a tomada de medidas corretivas.

**Redução de custos**: a remoção de privilégios desnecessários e contas desatualizadas otimiza o uso de licenças de software e reduz os custos associados à gestão de acessos.

## **Notificações Automatizadas** 

O sistema gera automaticamente notificações e lembretes para os revisores e aprovadores responsáveis, informando sobre a necessidade de realizar a recertificação dos componentes atribuídos. 

:::(info) (**Info**)  
Estas notificações acontecem tanto no processo de revisão de usuário quanto na revisão de políticas de acesso.  
:::

Os **revisores** responsáveis pela recertificação recebem as seguintes notificações:

* Quando o processo de revisão é cadastrado e os componentes precisam ser revisados.  
* Quando o tempo para revisão está chegando ao fim e a ação do revisor ainda não foi feita.

Os **aprovadores** responsáveis pela revisão recebem as seguintes notificações:

* Quando a revisão feita pelo revisor já foi efetuada e agora esta revisão precisa ser aprovada ou rejeitada.

Os **usuários** recebem a seguinte notificação:

* O usuário recebe a notificação que a revisão de seu acesso foi efetuada.

## Processo de revisão

O processo de revisão consiste em duas possíveis ações que serão feitas pelos **revisores** responsáveis, que são:

**Aprovar**: 

    * O revisor confirma os privilégios de acesso sem fazer nenhuma alteração.

**Rejeitar e solicitar modificação**:

* O revisor rejeita a solicitação como um todo sem realizar nenhuma alteração.  
* O revisor identifica que os privilégios de acesso não são mais necessários ou foram alterados indevidamente e faz alterações, como remover um usuário ou uma política indevida indevido.


## Processo de aprovação

Após o processo de revisão ter sido realizado, caso o fluxo de aprovação esteja habilitado, o aprovador do sistema também terá ações a serem realizadas no processo de revisão e certificação de usuários ou políticas de acesso.

:::(info) (**Info**)  
O fluxo de aprovação deve ser habilitado nos Parâmetros do sistema, a habilitação de usuários e políticas de acesso são independentes.  
:::

A aprovação da revisão consiste em duas possíveis ações que serão feitas pelos **aprovadores** responsáveis, que são:  
**Aprovar**: 

* O revisor confirma os privilégios de acesso sem fazer nenhuma alteração e as alterações são implementadas automaticamente pelo sistema.

**Rejeitar modificações**:

* As alterações são recusadas, e o revisor é notificado com a justificativa da recusa.

## Registro de Auditoria

O sistema registra todos os passos e ações realizados pelos revisores e aprovadores em um log de auditoria. Ele também gera relatórios sobre o status do processo de recertificação, permitindo que os administradores acompanhem o progresso, identifiquem atrasos e analisem as decisões tomadas.

## Relatórios e Histórico

Os administradores e revisores podem acessar o histórico de certificação de usuários ou de políticas de acesso específicas por meio de relatórios dedicados. Cada acesso ao histórico é realizado a partir de relatórios específicos.
