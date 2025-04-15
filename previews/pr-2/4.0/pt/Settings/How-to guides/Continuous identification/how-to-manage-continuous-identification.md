# Como gerenciar o Identificação contínua

Este documento fornece um guia passo a passo sobre como configurar o recurso de **Identificação contínua** para solicitar que o usuário se reautentique no Segura após eventos suspeitos, bem como visualizar os logs de reautenticação gerados.

## Pré-requisitos  
- Permissão de administrador.

---

## Configurar Identificação contínua  
Para configurar os gatilhos que solicitarão a reautenticação do usuário no Segura siga os passos abaixo:

:::(info) (Informação)  
Este recurso está desativado por padrão. Para ativá-lo, defina os parâmetros com um valor diferente de zero.  
:::  

1. No **Segura**, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Políticas de seguranças e rede > Segurança de autenticação**.  
3. Na tela de **Segurança de autenticação**, vá até a seção **Identificação contínua**.  
4. Na seção **Identificação contínua**, preencha:  
   - **Queda no rating**: defina quantos pontos o usuário deve perder para que a reautenticação seja acionada.  
     **Nota**: os pontos perdidos para cada ação são definidos em **User Behavior > Gerenciamento > Configurações de sessão**.  
   <br>
   - **Sessões de alto risco**: defina quantas sessões de alto risco o usuário deve realizar para que a reautenticação seja acionada.  
     **Nota**: as definições de sessões de alto risco estão vinculadas aos comandos auditados e suas criticidades, que podem ser configurados e visualizados em **User Behavior > Configurações > Comandos auditados**.  
   <br>
   - **Comandos bloqueados**: defina quantos comandos auditados o usuário deve executar em uma sessão para que a reautenticação seja acionada.  
     **Nota**: comandos bloqueados são comandos auditados configurados como **Bloquear** ou **Interromper execução**, e podem ser configurados e visualizados em **User Behavior > Gerenciamento > Comandos auditados**.  
   <br>
   - **Tentativas de sessão em horário proibido**: defina quantas vezes o usuário deve tentar iniciar uma sessão em um horário proibido para a política de acesso que está inserido antes que a reautenticação seja acionada.  
     **Nota**: as permissões de acesso por horário são definidas e visualizadas em **PAM Core > Controle de acesso > Políticas de acesso**.  
   <br>
   - **Tentativas de visualização em horário proibido**: defina quantas vezes o usuário deve tentar visualizar uma senha em um horário proibido para a política de acesso que está inserido antes que a reautenticação seja acionada.  
     **Nota**: as permissões de horário para visualização de senhas são definidas e visualizadas em **PAM Core > Controle de acesso > Políticas de acesso**.  

:::(warning) (Atenção)  
Após a reautenticação bem-sucedida do usuário, a contagem de tentativas será reiniciada. Isso significa que, por exemplo, se o parâmetro **Tentativas de visualização em horários proibidos** estiver definido como 3, após o usuário realizar essas 3 tentativas e se reautenticar no Segura, a reautenticação só será solicitada novamente se ele realizar outras 3 tentativas em sua próxima sessão ativa.  
:::  

## Visualizar logs de reautenticação  
Para visualizar os logs de reautenticação solicitados aos usuários devido a ações suspeitas, siga os passos abaixo abaixo:

1. No menu lateral da tela **User Behavior**, selecione **Análise de comportamento > Logs de re-autenticação**.  
2. Na tela **Logs de re-autenticação**, encontre o evento desejado ou use os filtros de busca.  
3. Clique no **botão Ações** e selecione **Detalhes**.  
4. Na tela **Detalhes da re-autenticação**, obtenha informações sobre o evento de reautenticação, como **Usuário**, **Gatilho**, **Método de autenticação**, **IP**, **Status**, **Data de verificação**, **Navegador** e **Localização**.  

---

Ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target="_blank"}.  