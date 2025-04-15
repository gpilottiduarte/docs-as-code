# Rotação de chaves SSH

Para Chaves SSH, o Segura pode usar o mesmo fluxo de trabalho de operação descrito para alteração de senhas. A diferença são apenas as telas e menus usados para gerenciar as chaves SSH.

Como credenciais usando nomes de usuário e senhas, as Chaves SSH devem estar relacionadas aos dispositivos.

1. Acesse o menu **PAM Core ➔ SSH Keys ➔ SSH Keys** para ter acesso a todas as SSH Keys cadastradas.  
2. Clique no botão de ação do relatório **Novo** e preencha os seguintes campos:  
3. Na guia de **Informações**:  
   * **Nome de usuário (proprietário da chave):** Usuário do sistema operacional proprietário da chave  
   * **Dispositivo:** Dispositivo em que a chave SSH está instalada  
   * **Nome da chave:** Um alias para identificação interna do Segura  
   * **Caminho da chave:** a localização física da chave no sistema de arquivos do dispositivo  
   * **Status:** Sinalize se a chave pode ser usada dentro do Segura  
   * **Tags:** Definidas pelo usuário para segregação de dados e filtros dentro do Segura  
4. Na guia **Dados-chave**:  
   * **Definir senha atual:** Caixa de seleção para definir manualmente a senha da chave atual  
   * **Mostrar senha:** Caixa de seleção para definir se o campo de senha exibirá a senha em texto simples sem máscara  
   * **Senha:** insira a senha atual  
   * **Chave privada:** insira o valor da chave privada em texto simples como formato PEM  
   * **Chave pública:** insira o valor da chave pública em texto simples

5.  Na guia de **Configurações de sessão:**  
   * **Restringir o acesso apenas para aplicativo remoto:** Marque esta opção se deseja que apanas aplicativos remotos possam acessar essa chave SSH.  
   * **Macro de automação (RemoteApp):** Adicione qual Macro do RemoteApp será usada com o tipo de Conectividade.  
   * **Utilizar a própria credencial para conectar:** Marque esta opção caso a credencial cadastrada nesta chave SSH seja a mesma que irá executar o aplicativo remoto.  
   * **Credencial de autenticação:** Digite IP, Hostname ou Username caso seja uma credencial diferente do cadastrado.  
   * **Dispositivo de autenticação:** Digite IP ou Hostname caso seja um dispositivo diferente do cadastrado.  
       
6. Na guia de **Configurações de adição**:  
   * **Habilitar alteração automática:** Marque se deseja que o Segura habilite esta chave para ser alterada automaticamente  
   * **Use a própria chave para se conectar:** Verifique se deseja usar a própria chave para autenticar a sessão SSH de destino  
   * **Credencial ou chave SSH para autenticação:** se você optar por não usar a própria chave para autenticação, poderá escolher outra credencial para executar o processo de alteração
7. Na guia **Dispositivos** você pode vincular todos os dispositivos aos quais esta chave está publicada. Assim, o Segura substituirá a chave no dispositivo proprietário e ecoará a chave pública nos dispositivos relacionados;

Finalizado o registro da Chave SSH, você pode executar uma solicitação de operação de alteração conforme explicado anteriormente.

