# Gatilhos do executor

Um gatilho é uma ação executada no módulo cliente. Pode ser executado pelo plugin Executor suportado pela tecnologia do módulo cliente. Essa arquitetura permite que nossos desenvolvedores criem  plugins e gatilhos para cada sistema de destino que suporte algum tipo de interação automatizada.

Por padrão, os seguintes módulos podem ser acionados para iniciar uma operação de execução:

## Gatilhos de PAM

| Gatilho | Descrição |
| ----- | ----- |
| Habilitar credencial | Habilite uma credencial bloqueada em um dispositivo de destino. Também pode ser usado para criar uma credencial JIT. |
| Desativação de credenciais | Desabilite uma credencial de destino após o uso do proxy Segura. Também pode ser usado para realizar uma destruição de credencial JIT. |
| Alteração de senha | Alterar alguma credencial ou segredo de chave SSH. |

## Gerenciador de segredos de DevOps

| Gatilho | Descrição |
| ----- | ----- |
| Automação | Gatilhos de automação secreta do DSM. |

## Gerenciador de certificados

| Gatilho | Descrição |
| ----- | ----- |
| Desativação do certificado | Revogar um certificado SSL de destino no dispositivo de destino. |
| Publicação de certificados | Publicar um certificado SSL de destino no dispositivo de destino. |

## Gerenciador de tarefas

| Gatilho | Descrição |
| ----- | ----- |
| Gerenciador de Tarefas | Tarefas automatizadas em dispositivos de destino que podem ser agendadas ou executadas por solicitação do usuário. |

## Provisionamento

| Gatilho | Descrição |
| ----- | ----- |
| Novo grupo | Criação de grupo no sistema alvo. |
| Novo usuário | Criação de usuário no sistema de destino. |
| Apagar grupo | Exclusão de grupo no sistema de destino. |
| Exclusão de usuário | Exclusão do usuário no sistema de destino. |
| Usuário excluir no grupo | Removendo um usuário de um grupo no sistema de destino. |
