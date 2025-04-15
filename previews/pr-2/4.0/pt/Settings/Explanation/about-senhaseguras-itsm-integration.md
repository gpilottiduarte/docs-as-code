# Sobre a integração do Segura com ITSM

A integração ITSM (*IT Service Management*) no Segura é uma funcionalidade poderosa que permite uma conexão direta entre o gerenciamento de acesso privilegiado e os sistemas de gerenciamento de serviços de TI. 

## O que é o Código de Governança?

O Código de Governança é um elemento central na integração ITSM. é um identificador único que:

1. Pode ser inserido pelos usuários no formulário de justificativa e autorização.  
2. Serve como um link entre a solicitação no Segura e um ticket correspondente no sistema ITSM.

## Como funciona a integração?

Abaixo, você pode visualizar um resumo do fluxo de trabalho para um processo de integração ITSM no Segura.

### Componentes principais

* **Usuário Administrador (Admin)**: inicia o processo de solicitação.  
* **Formulário de Solicitação**: interface para inserir o código ITSM.  
* **Sistema de Segurança (Segura)**: verifica as credenciais e o código ITSM.  
* **Solução ITSM**: o sistema final ao qual o acesso é solicitado.

### Processo de Solicitação e Verificação

1. O usuário administrador inicia o processo através de um formulário de solicitação.  
2. O administrador insere o código ITSM no formulário.

### Verificação de Segurança

1. O código ITSM é enviado para o sistema Segura.  
2. O Segura solicita credenciais adicionais para autenticação.

### Autenticação na Solução ITSM

1. O Segura comunica-se com a Solução ITSM.  
2. O Segura verifica se o código ITSM fornecido existe e é válido na Solução ITSM.

### Confirmação e Autorização

1. Se o código for válido, o Segura recebe uma confirmação.
    1. É possível visualizar também o status do ticket, exceto para a integração com o Jira Service Desk Manager.
2. O sistema então autoriza o usuário a prosseguir.

### Acesso Concedido

Após a verificação bem-sucedida, o usuário recebe acesso à solução ITSM.

## Aspectos de Segurança

* **Múltiplas Camadas de Autenticação**: o processo envolve tanto o código ITSM quanto credenciais adicionais.  
* **Verificação Centralizada**: o Segura atua como um ponto central de verificação e controle de acesso.  
* **Separação de Responsabilidades:** o formulário de solicitação, o sistema de segurança e a solução ITSM são componentes distintos, aumentando a segurança.

## Benefícios da Integração ITSM

1. **Segurança Aprimorada**: garante que os acessos privilegiados estejam sempre associados a tickets de serviços aprovados.  
2. **Auditoria Melhorada**: facilita o rastreamento de acessos privilegiados até os tickets de serviços correspondentes.  
3. **Conformidade**: ajuda a manter a conformidade com políticas de segurança e regulamentações.  
4. **Eficiência**: automatiza o processo de verificação de autorizações, reduzindo erros manuais.

## Como tornar o Código de Governança obrigatório

Para garantir que todas as solicitações de acesso privilegiado estejam vinculadas a um ticket ITSM, você pode tornar o Código de Governança obrigatório:

1. Acesse: **PAM core \> Configurações \> Acesso \> Grupos de acesso.**  
2. Crie um novo grupo ou edite um existente  
3. Na aba **Configurações**, na seção **Configurações da solicitação de acesso**, selecione **Sim** no campo **Obrigatório especificar código de governança ao justificar?**.

## Conclusão

A integração ITSM no Segura oferece uma camada adicional de segurança e controle sobre o acesso privilegiado. Ao vincular solicitações de acesso a tickets ITSM válidos, as organizações podem garantir que todos os acessos privilegiados sejam devidamente autorizados, documentados e auditáveis. Isso não apenas melhora a segurança, mas também ajuda a manter a conformidade com várias regulamentações e políticas de segurança.