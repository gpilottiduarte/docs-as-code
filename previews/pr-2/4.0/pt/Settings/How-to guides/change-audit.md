# Change audit

## Sobre o Change Audit

Em servidores críticos, todas as mudanças são rigorosamente controladas. Normalmente, o usuário solicita acesso a um dispositivo, o administrador autoriza e, então, a tarefa é executada. O auditor deve conhecer o script, o dispositivo e o horário da atividade para assegurar conformidade, verificando fisicamente ou revisando os logs dos comandos executados.

Essas atividades apresentam alto risco, pois uma ação inadequada pode comprometer diretamente a produtividade da empresa. Exemplos incluem a interrupção de um servidor Apache que hospeda o site comercial ou ações intencionais para roubo de dados.

Para simplificar auditorias e garantir o compliance, o módulo **Change Audit** facilita o controle e aprovação de mudanças em servidores. Ele fornece um fluxo de aprovação e assegura que tudo o que foi planejado seja executado corretamente.

Além disso, o **Change Audit** avalia a eficácia das ações, indicando se o usuário atingiu o resultado esperado, realizou execuções desnecessárias ou não completou a mudança. Isso reforça a segurança do administrador responsável pelo ambiente.

Outro ponto importante é a possibilidade de dividir responsabilidades: um usuário pode planejar e criar o script, enquanto outro fica responsável por executá-lo.

## Benefícios do Módulo Change Audit:

* **Concessão de privilégios**: garante privilégios apenas no ambiente autorizado.  
* **Segurança**: previne, detecta e corrige anomalias de segurança.  
* **Trilha de Auditoria**: criação de trilhas invioláveis para operações privilegiadas.

## Como gerenciar o módulo Change Audit

### Cadastrar uma Mudança

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Change Audit**.  
2. No menu lateral, selecione **Alterações**.  
3. No relatório **Mudanças**, clique em **Adicionar**.  
4. Na aba **Informação principal**:  
   1. Na seção **Informações da alteração**:  
      1. **Código da alteração:** indique um código para essa alteração.  
      2. **Título:** indique um título para a alteração.  
      3. **Descrição:** indique uma descrição para a alteração.  
   2. Na seção **Janela de alteração**:  
      1. **Data de início**: indique a data e a hora de início da alteração.  
      2. **Data de vencimento**: indique a data e a hora de fim da alteração.  
   3. Na seção **Configurações de acesso**:  
      1. **Grupo de acesso**: selecione o grupo de acesso para essa alteração.  
5. Na aba **Script**, insira os comandos a serem executados.  
   1. Este *script* será usado como referência para auditoria, portanto, deve estar correto.  
6. Clique em **Salvar**.

### Aprovar uma mudança

:::(info) (Info)  
É necessário um aprovador diferente do usuário que criou a mudança.  
:::

### Solicitar uma mudança

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core.**  
2. No menu lateral, selecione **Credenciais \> Todas credenciais**.  
3. No relatório **Credenciais de acesso**, escolha o dispositivo que deseja acessar para a mudança.  
4. Clique em **Iniciar sessão**.  
5. Preencha uma justificativa, e selecione a alteração desejada  
6. Execute os comandos da alteração.

### Auditar sessões

Após uma mudança, é possível verificar o que foi realizado e comprovar se o script foi seguido.

* **Detalhes da mudança**: veja o tempo de execução, IP e o usuário.  
* **Auditoria da mudança**: exibe os comandos executados.  
  * Comandos que deveriam ter sido executados mas não foram são exibidos em vermelho.   
  * Comandos executados fora do script são exibidos em verde.  
* **Logs da sessão**: veja os logs detalhados da sessão.  
* **Vídeo da sessão**: assista à gravação do que foi realizado.