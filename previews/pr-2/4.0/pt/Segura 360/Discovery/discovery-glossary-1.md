# Glossário do Discovery

Por meio dos glossários do Discovery, é possível automatizar o processo de importação de dispositivos e credenciais encontradas nos Discoveries. Isso ocorre porque é possível predefinir nos glossários informações como site, tipo, fabricante e modelo do dispositivo, além de definir o tipo de credencial padrão e privilegiado, troca automática de senha e conectividade.

Dessa forma, o Segura reconhece automaticamente os dispositivos na sequência de identificação definida no glossário e executam importações se esta opção estiver ativada nas configurações do Discovery.
:::(Warning) (**Atenção**)
 Se você optar por importar dispositivos e credenciais é essencial criar um glossário antes de criar uma descoberta, ou o recurso de importação não funcionará.

Verifique os Glossários Padrão se não tiver certeza de como criar um glossário.
:::

## **Criar um glossário de dispositivo**

Acesse o menu **Discovery ➔ Configurações ➔ Glossário de dispositivos**

Nesta tela, você pode visualizar os glossários criados juntamente com uma série de informações como padrão de identificação, tipo de senha padrão, tipo de senha privilegiada e alteração de senha ativada ou não selecionada.

No botão ação de relatório, clique no botão ***Novo glossário***.

Complete os campos a seguir:

| Campo | Descrição |
| ----- | ----- |
| Nome do glossário | Nome para identificação deste glossário |
| ID da versão String | Esta é a string que definirá a quais dispositivos do Discovery este dicionário será aplicado. O valor inserido neste campo será comparado ao nome do Sistema Operacional do dispositivo. É possível utilizar o caractere *para simbolizar qualquer valor para a string. Por exemplo, a string ”Windows*” selecionará qualquer dispositivo Windows |
| Ativo | Indica se este glossário está ativo ou não |
| Ordem | Ordem de prioridade de aplicação deste glossário, se mais de um glossário se aplicar ao mesmo dispositivo. Prioridades menores têm precedência sobre prioridades maiores |
| Site | Site físico do dispositivo. Todos os sites registrados no Segura serão listados |
| Tipo | Tipo de dispositivo (por exemplo: servidor, estação de trabalho etc.). Todos os tipos de dispositivos registrados no Segura serão listados |
| Fabricante | Fabricante do dispositivo (por exemplo, Cisco, CheckPoint). Todos os fabricantes registrados no Segura serão listados. |
| Modelo | Modelo de dispositivo (por exemplo: Cisco ASA, etc ...). Todos os modelos registrados no Segura serão listados |
| Tipo de credencial padrão | Tipo de credenciais padrão (por exemplo, local, domínio etc.). Todos os tipos de credenciais padrão registrados no Segura serão listados |
| Tipo de credencial privilegiada | Tipo de credenciais privilegiadas (por exemplo, local, domínio, etc.). Todos os tipos de credenciais privilegiadas registrados nas senhas serão listados |
| Ativar troca automática | Indica se a troca automática de senha de credencial está ativada |
| Plug-in de execução | Plug-ins para executar o Discovery. Todos os plugins de execução registrados no Segura serão listados |
| Template de troca de senha | Template usado para realizar a troca de senha. Todos os modelos registrados no Segura serão listados. |
| Use sua própria credencial para conectar-se | Se esta opção for selecionada, a credencial do usuário será usada para conectar |
| Credencial de acesso | Credencial de acesso cadastrada no cofre. Todas as credenciais de acesso registradas no Segura serão listadas. |
| Conectividade | Protocolos usados para acesso ao dispositivo. A conectividade padrão do Segura será exibida |
| Porta | Número da porta de comunicação. O campo é preenchido com o número da porta do protocolo padrão. |

Preencha os campos e clique no botão ***Salvar*** para finalizar.

## **Criar um glossário de domínio**

No botão de ação de relatório, clique em ***Novo glossário de domínio***.

Os campos desta tela são os mesmos da anterior, exceto que o bloco de informações do dispositivo não é apresentado.

Preencha os campos e clique em ***Salvar*** para concluir.

## **Glossários padrão**

Os exemplos a seguir devem ajudá-lo a criar qualquer glossário ou ter um glossário para poder importar dispositivos e credenciais de sua pesquisa de descoberta.

### **Glossário Linux Genérico**

1. Crie um novo dispositivo de produto, vá para **Dispositivos ➔ Configurações ➔ Produtos** e clique em **\+ Novo**  
2. Defina o **nome** como **Linux genérico**  
3. **Tipo** para **Servidor**  
4. **Fornecedor** para **Linux**  
5. Clique em **Salvar**

Agora crie um glossário do Linux Genérico. Vá para **Descoberta ➔ Configurações ➔ Glossário de dispositivos**:

1. Clique em **⁝** e **\+ Novo glossário**  
      
2. Dê o **nome** como **Generic Linux**  
3. Defina a String de ID da versão para **\*linux\***  
4. Defina a *configuração de dispositivo*:  
   * **Site**: padrão  
   * **Tipo**: Servidor  
   * **Fornecedor**: Linux  
   * **Produto**: Linux Genérico  
5. Defina a *configuração de credenciais*:  
   * **Tipo de credencial padrão**: Usuário local  
   * **Tipo de credencial padrão**: Administrador Local  
6. Clique em **Salvar**

### **Glossário Windows genérico**

1. Crie um novo dispositivo de produto, vá para **Dispositivos ➔ Configurações ➔ Produtos** e clique em **\+ Novo**  
     
2. Defina os campos do produto do dispositivo:  
   * **nome** para **Windows genérico**  
   * **Tipo** para **Servidor**  
   * **Fornecedor** para **Windows**  
3. Clique em **Salvar**

Agora crie um glossário do Windows genérico. Vá para **Descoberta ➔ Configurações ➔ Glossário de dispositivos**:

1. Clique em **⁝** e **\+ Novo glossário**  
      
2. Dê o **nome** como **Windows genérico**  
3. Defina a string de ID da versão como \***\*windows\***  
4. Defina a *configuração de dispositivo*:  
   * **Site**: padrão  
   * **Tipo**: Servidor  
   * **Fornecedor**: Windows  
   * **Produto**: Windows genérico  
5. Defina a *configuração de credenciais*:  
   * **Tipo de credencial padrão**: Usuário local  
   * **Tipo de credencial padrão**: Administrador Local  
6. Clique em **Salvar**

### **Glossário genérico**

1. Crie um novo dispositivo de produto, vá para **Dispositivos ➔ Configurações ➔ Produtos** e clique em **\+ Novo**  
     
2. Defina os campos do produto do dispositivo:  
   * **nome** para **Servidor Genérico**  
   * **Tipo** para **Servidor**  
   * **Fornecedor** para **Outro**  
3. Clique em **Salvar**

Agora crie um glossário do Windows genérico. Vá para **Descoberta ➔ Configurações ➔ Glossário de dispositivos**:

1. Clique em **⁝** e **\+ Novo glossário**  
2. Dê o **nome** como **Glossário genérico**  
3. Defina a String de ID da versão para *\**\*  
4. Defina a *configuração de dispositivo*:  
   * **Site**: Padrão  
   * **Tipo**: Servidor  
   * **Fornecedor**: Outro  
   * **Produto**: Servidor Genérico  
5. Defina a *configuração de credenciais*:  
   * **Tipo de credencial padrão**: Usuário local  
   * **Tipo de credencial padrão**: Administrador Local  
6. Clique em **Salvar**

## **Editar um glossário**

Clique no botão ***Alterar glossário***.

A tela é igual à criação de um glossário e funciona da mesma maneira.

Faça as alterações e clique no botão ***Salvar*** para concluir.

