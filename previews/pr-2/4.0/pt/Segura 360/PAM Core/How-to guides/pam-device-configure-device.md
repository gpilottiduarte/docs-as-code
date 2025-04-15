# Como configurar um dispositivo

Para o funcionamento adequado da solução, é essencial um registro correto dos dispositivos. As discrepâncias podem afetar o comportamento do software.

Para acessar a área de configuração de **Dispositivos**, siga um dos passos seguintes:

1. **Adicionar Novo:** na barra de ferramentas, na parte superior da plataforma Segura, clique em **Adicionar Novo** e selecione **Dispositivo**.
2. **Menu Produtos**: na barra de navegação, passe o cursor sobre o **Menu Produtos** e selecione **Dispositivos**.

Caso escolha a **segunda opção**, será necessário selecionar **Dispositivos** no menu lateral. Para isso, prossiga da seguinte forma:

1. Selecione, no menu lateral, **Dispositivos** para carregar a lista de dispositivos. 
2. No canto inferior direito, clique em **+ Adicionar**.

Uma tela será exibida com o formulário  de **Cadastro do dispositivo**, contendo os dados a serem preenchidos para cadastrar um novo dispositivo na plataforma Segura.

## Como configurar dispositivos

Preencha os dados a seguir para configurar seu dispositivo:

### Aba de Informações

1. **Nome do dispositivo:** preencha um nome para uso interno.
2. **IP, hostname ou URL:** preencha o endereço ao qual o dispositivo está registrado e acessível.
3. **Tipo de dispositivo:** selecione tipo desejado.
4. **Fabricante:** selecione fabricante relevante.
5. **Modelo:** selecione modelo do dispositivo.
6. **Site:** selecione a divisão à qual pertence.
7. **Tags:** preencha com as tags desejadas.

Na seção **Domínio**, selecione o domínio desejado.

:::(info) (Info)
Os campos **Tipo de dispositivo**, **Fabricante**, **Modelo** e **Site** podem ser registrados diretamente na tela de inscrição do dispositivo se o valor inserido não existir.

Todas as operações de registro, modificação e inativação dos dispositivos são enviadas via `Syslog`.
:::

:::(Warning) (Atenção)
Mudanças e desativações podem afetar o acesso aos dispositivos e credenciais.
:::

### Aba de Conectividades

1. **Network connector:** selecione o conector de rede necessário.
2. **Conectividade:** selecione o protocolo de conexão (HTTP, Telnet, VNC, etc.).
3. **Porta:** preencha a porta para comunicação.

:::(info) (Info)
Os testes de conectividade são realizados via soquete TCP. É possível configurar a plataforma para usar o dispositivo com dois aplicativos e o mesmo protocolo, mas você deverá configurar portas diferentes.
:::

:::(Warning) (Atenção)
Quando a porta padrão é modificada, a alteração se reflete apenas no dispositivo específico que está sendo editado.
:::

### Aba de Configurações adicionais

1. **Criticidade:** selecione o grau de criticidade.
2. **Configuração de sessão remota:** adicione expressões regulares para lidar com autenticações personalizadas.
3. Clique no botão **Continuar** e, em seguida, em **Salvar**.

:::(info) (Info)
Recomenda-se utilizar protocolos com suporte a criptografia, sempre que possível.
:::

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io).