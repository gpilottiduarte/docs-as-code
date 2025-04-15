# Como configurar um dispositivo

Para o funcionamento adequado da solução, é essencial um registro correto dos dispositivos. As discrepâncias podem afetar o comportamento do software.

Para acessar a área de configuração de **Dispositivos**, siga um dos passos seguintes:

1. **Ações Rápidas:** clique no ícone (representado por uma folha de papel com o sinal de soma), selecione **Dispositivo**. Essa ação irá abrir uma janela pop-up com o formulário **Dispositivo**.
2. **Grid Menu:** no canto superior esquerdo, clique no ícone (representado por uma caixa de nove quadrados), selecione **Dispositivos**.

Caso selecione a segunda maneira, você precisará selecionar **Dispositivos** no menu lateral. Para fazer isso, siga os passos abaixo:

1. Selecione, no menu lateral, **Dispositivos** para carregar a lista de dispositivos. 
2. Clique no ícone **Exibir Ações**, indicado pelo três pontos verticais, e selecione **+ Novo**.

Uma janela pop-up mostrará a tela de **Cadastro de Dispositivo** com os dados a serem preenchidos.

## Como configurar dispositivos

Preencha os dados a seguir para configurar seu dispositivo:

### Aba de Informações

1. **IP, hostname ou URL:** preencha o endereço ao qual o dispositivo está registrado e acessível.
2. **Nome do dispositivo:** preencha um nome para uso interno.
3. **Tipo de dispositivo:** selecione tipo desejado.
4. **Fabricante:** selecione fabricante relevante.
5. **Modelo:** selecione modelo do dispositivo.
6. **Site:** selecione a divisão à qual pertence.
7. **Tags:** preencha com as tags desejadas.

Na sessão **Configurações de domínios**, selecione o Domínio desejado. Para adicionar outros domínios, clique no ícone **Adicionar**, identificado pelo símbolo de soma.

:::(Info) (Info)
Os campos **Tipo de dispositivo**, **Fabricante**, **Modelo** e **Site** podem ser registrados diretamente na tela de inscrição do dispositivo se o valor inserido não existir.

Todas as operações de registro, modificação e inativação dos dispositivos são enviadas via `Syslog`.
:::

:::(Warning) (Importante)
Mudanças e desativações podem afetar o acesso aos dispositivos e credenciais.
:::

### Aba de Conectividades

1. **Conector de rede:** selecione o conector de rede necessário.
2. **Conectividade:** selecione o protocolo de conexão (HTTP, Telnet, VNC, etc.).
3. **Porta:** preencha a porta para comunicação.

:::(Info) (Info)
Os testes de conectividade são realizados via soquete TCP. É possível configurar a plataforma para usar o dispositivo com dois aplicativos e o mesmo protocolo, mas você deverá configurar portas diferentes.
:::

:::(Warning) (Importante)
Quando a porta padrão é modificada, a alteração se reflete apenas no dispositivo específico que está sendo editado.
:::

### Aba de Configurações adicionais

1. **Criticidade:** selecione o grau de criticidade (Alto, Médio ou Baixo).
2. **Configuração de sessão remota:** adicione expressões regulares para lidar com autenticações personalizadas.
3. Clique em **Salvar**.

:::(Info) (Info)
É recomendável utilizar protocolos com suporte a criptografia, se possível.
:::

:::(Info) (Info)
Caso precise de informações mais detalhadas sobre os campos adicionais dos dispositivos, acesse a documentação de [Referência para dispositivos](/v3-33/docs/pt/pam-reference-for-devices).
:::

## Próximos passos
1. [Como configurar categorias de dispositivos](/v3-33/docs/pt/pam-how-to-configure-devices).
2. [Como gerenciar dispositivos](/v3-33/docs/pt/pam-how-to-edit-clone-disable-or-reactivate-a-device).
3. [Como gerenciar dispositivos sem credenciais](/v3-33/docs/pt/pam-devices-without-credentials)
4. [Como verificar a conectividade dos dispositivos](/v3-33/docs/pt/pam-devices-connectivity-test).
5. [Referência para dispositivos](/v3-33/docs/pt/pam-reference-for-devices).
6. [Referências de filtragem de dispositivos](/v3-33/docs/pt/pam-reference-for-device-filters).


***

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io).