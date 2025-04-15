# Como gerar primeiro acesso à usuários limitados após importação em lote

Neste documento, você encontra um guia passo a passo sobre como ao efetuar uma importação em lote e gerar o primeiro acesso automático ao usuários contidos na planilha importada.

**Requisitos**

* Ser um usuário com permissão de solicitação de acessos.

## **Gerar primeiro acesso automático**

:::(warning) (Atenção)  
O acesso deve ser gerado apenas para usuários ativos.  
:::

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Domum Remote Access**.  
2. No menu lateral selecione **Configurações** \> **Importar usuários limitados**.  
3. Clique no ícone de três pontos verticais, localizado no canto superior direito da tela, e selecione **\+Importar**.  
4. Na janela **Importação em lote de terceiros**:  
   1. No campo **Planilha de usuários** clique em escolher arquivo e carregue a planilha com os usuários a serem importados.   
   2. No campo **Fornecer acesso automaticamente após a importação** selecione a opção **Sim**.  
      :::(info) (Info)  
      Esta opção só estará disponível para usuários que possuem permissão para solicitar acessos.  
      :::  
   3. Clique em **Importar dados**.  
5. Na janela **Solicitar acesso em lote \- usuário terceiro** que se abre:  
   1. No passo **Geral** preencha os campos solicitados:  
      1. **Justificativa\***: escreva um texto justificando a ação solicitada.  
      2. **Motivo\***: no dropdown menu selecione o motivo.  
      3. **Governance code**: digite o governance code caso exista.  
      4. Clique em **Próximo**.  
   2. No passo **Dispositivos**:  
      1. Clique no ícone de **adição** ao lado da palavra **Dispositivos**, na janela pop-up que se abre selecione os dispositivos que os usuários terão acesso.  
      2. Clique em **Próximo**.  
   3. No passo **Credenciais**:  
      1. Clique no ícone de **adição** ao lado da palavra **Credenciais**, na janela pop-up que se abre selecione as credenciais que os usuários terão acesso.  
      2. Selecione as permissões que serão dadas a cada credencial adicionada.  
      3. Clique em **Próximo**.  
   4. No passo **Restrição de acesso**:  
      1. **Período de permissão de acesso**: selecione a data e hora para o **Início** da permissão e em **Duração** selecione o tempo que a permissão irá durar.  
      2. **Dias da permissão de acesso**: selecione os dias que a permissão será válida.  
      3. **Horários da permissão de acesso**: selecione entre os horários disponíveis ou crie um horário personalizado que a permissão será válida.  
      4. **Sessões**: selecione **Ilimitado** ou a quantidade de sessões que será permitido o acesso.  
   5. No passo **Revisão**, revise todos os dados preenchidos para essa solicitação de acesso, se caso queira efetuar alguma mudança, clique no botão **Anterior** para voltar ao passo que deseja modificar.  
6. Com todas as informações revisadas clique no botão **Salvar** para criar a solicitação de acesso.

Ao final uma mensagem de sucesso será apresentada. A solicitação estará disponível na lista do relatório e os detalhes poderão ser acessados clicando no ícone de **lista** apresentado na coluna **Ação**.

Para confirmar que a importação e o acesso dos usuários foi realizado, no menu lateral vá até **Solicitar acesso \> Terceiros ou Solicitar acesso \> Usuários internos**, e consulte o na coluna **Estado** o status da solicitação.

:::(info)(Info)  
Um link de acesso será enviado ao email do usuário importado, assim como o email com o token de acesso.  
:::

:::(warning) (Atenção)  
A importação em lote é processada em segundo plano e pode apresentar erros em um ou mais usuários, ao acessar os detalhes do processo é possível identificar em quantas linhas ocorreu o erro.  
:::

Você ainda tem dúvidas? Entre em contato com a  [Comunidade senhasegura](https://community.senhasegura.io/).