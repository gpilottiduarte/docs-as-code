# Eventos

O Segura executa Eventos automaticamente ou por um usuário, como alteração de senha, backups, inserção de novas informações e muito mais. Esses eventos são relevantes para serem rastreados por quem uma operação foi executada no sistema, porque eles são configurados pelo administrador.

É importante saber se as configurações do sistema esperadas pela *política de segurança* da empresa estão sendo alcançadas.

Você pode imprimir os dados sobre como o sistema está funcionando pelas configurações. Acessando o menu **Reports ➔ Eventos**.

## **Operação de senhas**

Este relatório mostra todas as operações de senhas realizadas pelo sistema. Esse documento é importante para saber como o sistema está executando as operações relacionadas às senhas definidas pelo administrador.

As operações da senha devem atingir as *políticas de senha* e as expectativas de segurança da empresa. O *R**elatório de operação da senha*** imprimirá as seguintes informações:

* ***Código: Identificador único da operação***  
* ***Nome do usuário:*** é o nome de usuário usado para realizar a operação  
* ***Dispositivo:*** onde a operação da senha foi realizada  
* **Modelo:** adicione um template  
* **Site:** Preencha com o seu site  
* **Tags:** que deseja associar com essa nota, utilizado para busca  
* ***Tipo de credencial:*** da senha que admitiu a operação  
* ***Estado:*** relacionado com a operação concluída  
  * Agendada  
  * Aguardando aprovação  
  * Cancelada  
  * Efetuada com sucesso  
  * Em execução  
  * Erro  
  * Expirada  
* ***Operação:*** a senha admitida  
* ***Data de agendamento:*** Hora e a data em que a operação foi agendada.  
* ***Data de execução:*** Hora e a data em que a operação foi executada  
* ***Última tentativa:*** Hora e a data em que o sistema tentou executar a operação  
* ***Tentativas:*** Número de vezes que o sistema tentou executar a operação  
* ***Solicitante:*** Nome do usuário, tarefa ou conjunto que solicita a operação para o sistema  
* **Ação:** Visualize detalhes da operação  
  * Solicitar a execução imediata  
  * Cancelar operação  
  * Visualizar tentativas

Também é possível reiniciar uma operação que terminou com erro ou precisa ser executada novamente clicando no ícone de ação do registrador reiniciar execução, ou exibir os detalhes da tentativa clicando em ***visualizar tentativas***.

## **Solicitar a troca de senha**

1. Selecione a credencial  
2. Selecione a data de agendamento que deseja que esta operação ocorra

## **Visualização de senhas**

Este relatório mostra toda a exibição de senha, Segura que intercede para solicitações de usuários. Esse documento é importante para apresentar todo o fluxo de acesso que o sistema suporta e o tipo de acesso configurado pelo administrador, isso pode ser útil para comparar as configurações de fluxo de acesso e acesso ao sistema com a *política de acesso* e as expectativas de segurança da empresa.

O ***Relatório de visualização de senha*** imprimirá as seguintes informações:

* ***Data:*** a visualização conforme realizada  
* ***Operação:*** o sistema intercede  
* ***Usuário:*** que solicitou o acesso  
* ***IP:*** usado para acessar o sistema  
* ***Tipo de credencial:*** da senha visualizada  
* ***Dispositivo:*** é o ativo que a senha visualizada tem acesso  
* ***Username:*** é o usuário ao qual a senha visualizada pertence  
* ***Motivo:*** é o tipo de justificativa que o usuário fornece para visualizar a senha  
* ***Código de Governança:*** é o código usado para rastrear a exibição em Segura  
* ***Justificativa:*** é o texto justificativo que o usuário fornece para executar a visualização  
* ***Mensagem:*** é o que o sistema imprime no solicitante, relacionado às permissões e muito mais.  
* ***Origem:*** a plataforma usada para acessar.

Também é possível ver mais detalhes sobre as visualizações clicando no ícone de ação do registro.

### **Dashboard de visualização de senhas**

Também é possível ter uma visão geral da visualização de senhas realizada pelos usuários no menu do painel de controle, para ver o acesso a este painel: **Painel ➔ PAM Core ➔ User Behavior**.

## **Backups efetuados**

Este relatório mostra todos os backups executados pela solicitação Segura para serem exportados. Esse documento é importante para provar que o backup está sendo produzido corretamente e na hora e data definidas pela *política de backup* da empresa e as expectativas de segurança da empresa e dos padrões.

O ***Relatório de exibição de senha*** imprimirá as seguintes informações:

* ***Tipo:*** de backup. Indica se os dados recuperam os dados completos ou parciais.  
* ***Motivo:*** como o backup foi realizado. 
* ***Início:*** é o dia e a hora que os dados começaram a ser transferidos para o backup.  
* ***Fim:*** é o dia e a hora em que os dados pararam para serem transferidos para o backup.  
* ***Solicitado por:*** é o nome do usuário que solicitou a exportação do backup.

Também é possível fazer o download do backup realizado clicando no ícone de ação do registro.

## **Audit tracking**

Este relatório resume todas as trilhas, Segura registradas para as ações executadas no sistema, também possui uma consulta fácil e rápida para visualizar os registros da trilha.

O ***Relatório audit tracking*** imprimirá as seguintes informações:

* ***Operação:*** que o sistema intercede.  
* ***Entidade:*** que a operação foi realizada.   
  * No campo de filtro você pode escolher a entidade que deseja filtrar. Por exemplo: Caso necessite de um relatório com as alterações dos usuários, utilize o filtro **"Usuário"**.  
  * Opções de parâmetros do filtro de busca:  
    * Active Directory  
    * Automação de operações  
    * Certificado  
    * Comandos auditados   
    * Configuração de notificação  
    * Controle de acesso  
    * Credencial  
    * Dispositivo  
    * Domum  
    * Forca da senha  
    * Grupo do acesso  
    * ACL do usuário  
    * Parâmetros por credencial  
    * Parâmetros do go  
    * Informação protegida  
    * MyVault  
    * Conector de rede  
    * Parâmetros globais  
    * Parâmetros por dispositivo  
    * Parâmetros por grupo  
    * Parâmetros por origem  
    * Perfil de publicação  
    * Política de senha  
    * Request do certificado  
    * Templates de execução  
    * Usuário  
* ***Nome da entidade:*** que a operação foi realizada.  
* ***Origem:*** é o módulo Segura usado para executar a alteração.  
* ***Usuário:*** é o nome do usuário que será detalhado.  
* ***Username:*** é o nome de usuário usado para acessar Segura.  
* ***IP:*** do dispositivo do usuário para executar a alteração.  
* ***Alteração:*** Indica se a operação foi alterada ou não.  
* ***Data / Hora:*** que o rastreio foi registrado.  


