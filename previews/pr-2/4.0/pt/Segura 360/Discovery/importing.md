# Importar

## **Importar dispositivos encontrados**

Para importar dispositivos encontrados nos Discoveries, vá para **Discovery ➔ Discovery ➔ Dispositivos.**
 
O botão de ação de registro possui as seguintes opções:

* Importar dispositivo  
* Credenciais do dispositivo  
* Grupos  
* Chaves SSH  
* Certificados de dispositivo  
* Serviços de dispositivo  
* Visualizar Registro de Scan  
* Sincronizar  
* Editar registro

Nesta tela, você pode ver os dispositivos encontrados com uma série de informações, como tempo de pesquisa e mensagem de resultado.

Selecione o dispositivo a ser importado e clique no botão ***Importar dispositivos***.

Uma janela de confirmação será aberta. Clique em ***Sim*** para importar os dispositivos selecionados.

Os dispositivos com um IP já registrado não serão importados. Uma nova conectividade será criada se não existir.

Preencha os seguintes campos:

| Campo | Descrição |
| ----- | ----- |
| IP de gerenciamento | IP fixo do dispositivo |
| Nome do dispositivo (nome do host, IP, URL ou nome do site, nome do aplicativo ...) | Descrição do dispositivo ou nome do host / IP (nome de identificação do sistema) |
| Site | Site físico do dispositivo. Todos os sites registrados no Segura serão listados |
| Tipo | Tipo de dispositivo (por exemplo: servidor, estação de trabalho etc). Todos os tipos de dispositivos registrados no Segura serão listados |
| Fabricante | Fabricante do dispositivo (por exemplo, Cisco, CheckPoint). Todos os fabricantes registrados no Segura serão listados. |
| Modelo | Modelo de dispositivo (por exemplo: Cisco ASA, etc ...). Todos os modelos registrados no Segura serão listados |
| Conectividade | Protocolos usados para acesso ao dispositivo. A conectividade de padrão de Segura será exibida. |
| Porta | Número da porta de comunicação. O campo é preenchido com o número da porta do protocolo padrão. |

Clique em ***Salvar*** para finalizar.
:::(Warning) (**Atenção**)
É extremamente importante que os campos relacionados ao dispositivo estejam preenchidos corretamente, caso contrário, não será realizada a importação. 
:::

### **Importar credenciais encontradas**

Para importar credenciais encontradas nos Scans realizados, vá para o menu **Discovery ➔ Discovery ➔ Credenciais**

O botão de ação de registro possui as seguintes opções: Exibir detalhes do registro, acesso à credencial e visualizar os últimos registros.

Nesta tela, você pode ver as credenciais encontradas junto com uma série de informações, como privilegiadas, data e hora do último acesso e pesquisa. Você pode visualizar detalhes e acessos da credencial.

Selecione as credenciais que deseja importar e clique no botão ***Importar credenciais***.

Uma tela de confirmação será exibida. Clique em ***Sim*** para concluir.

### **Importar chaves SSH encontradas**

Acesse o menu **Discovery ➔ Discovery ➔ Chaves SSH.**

O botão de ação de registro tem as seguintes opções: Exibir teclas e exibir dispositivos autorizados. Nesta tela, você pode visualizar as chaves SSH encontradas junto com uma série de informações como dispositivo, nome, tipo e caminho da chave. Além disso, você pode ver os detalhes da chave SSH.
:::(Warning) (**Atenção**)
O relatório também exibe as informações se a credencial encontrada é privilegiada ou não, portanto, ao importar, preste atenção a este item para importar a credencial correta. 
:::

Para importar chaves SSH, selecione as credenciais que deseja importar e clique no botão ***Importar chaves***. Se o registro já houver sido importado, ele não poderá ser selecionado.

Uma tela de confirmação será exibida: Clique em ***Sim*** para concluir.

### **Importar certificados encontrados**

Para importar certificados encontrados nos Scans, vá para **Discovery ➔ Discovery ➔ Certificados.**

Clique no botão de ação ***Importar certificado***, uma tela de confirmação será exibida. Clique em Sim para finalizar.

Vá para o menu **Certificados ➔ Certificados** menu para visualizar o certificado importado.

### **Importar autoridades locais encontradas**

Para visualizar as autoridades locais encontradas nos Scans realizados, vá para **Discovery ➔ Discovery ➔ Autoridades Locais.**

Clique no botão de ação ***Importar autoridade***, uma tela de confirmação será exibida. Clique em ***Sim*** para finalizar.

