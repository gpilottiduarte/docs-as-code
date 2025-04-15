# Fluxo de Aprovação para Alterações de Permissão de Usuário

O processo de aprovação para alterações de funções de usuário garante que as solicitações sejam avaliadas e aprovadas pelas pessoas certas. Dessa forma, as alterações nas permissões de usuário são devidamente revisadas e aprovadas.

## Pré-requisitos

- Deve ter acesso de administrador aos Parâmetros do Sistema do Segura
- Deve ter habilitado a opção "Requer aprovação para alterar funções de usuário?" nas configurações do sistema

## Como Usar o Workflow

Para configurar o fluxo de aprovação para alterações de permissão de usuário, siga estas etapas:

1. Faça login no Segura como administrador.
2. Vá para "Configurações → Parâmetros do sistema → Controle de acesso".
3. Procure pela opção "Requer aprovação para alterar funções de usuário?" e selecione "Sim".
4. Clique em "Salvar".

## Como Usar o Fluxo de Trabalho

Uma vez que você tenha habilitado essa funcionalidade, quaisquer mudanças nas permissões de usuário do Segura exigirão aprovação por meio de um fluxo de aprovação.

1. Os Aprovadores de Parâmetros do Sistema são responsáveis pela aprovação das alterações.
2. Se não houver aprovadores para Gerenciamento de Usuários, as alterações serão aplicadas sem aprovação.
3. Um administrador não pode aprovar sua própria solicitação, portanto, outro aprovador a gerenciará.
4. A aprovação automática ocorrerá se um administrador fizer uma solicitação.

Confira [Workflow de acesso](/v4/docs/pt/user-management-access-workflow) para mais informações sobre o fluxo de trabalho.