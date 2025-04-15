# Importar usuários limitados - cadastro

Neste documento você encontrará todas as informações sobre a tela inicial **Importação em lote de terceiros**, onde lista todas as importações em lote deste tipo que foram realizadas e a criação de uma nova importação.

### **Caminho para acesso**

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Domum Remote Access**.  
2. No menu lateral, selecione **Configurações \> Importar usuários limitados \> \+Importar**.

**Importação em lote de terceiros**

| Item | Descrição |
| :---- | :---- |
| **Planilha de usuários\*** | Campo obrigatório. Exibe o botão **Escolher arquivo** para selecionar o arquivo de importação. |
| **Fornecer acesso automaticamente após a importação\*** | Checkbox para fornecer acesso automático após a importação para os usuários contidos na planilha, sendo as opções **Sim** e **Não**. Quando escolhido a opção **Sim** a tela **Solicitar acesso em lote \- usuário terceiro**  |
| **Arquivo de modelo** | Botão localizado no canto inferior direito da tela que dá início ao download do arquivo `.xlxs` de importação para ser preenchido. |
| **Importar dados** | Botão localizado no canto inferior direito da tela para confirmar a importação do arquivo escolhido. |

:::(warning) (Atenção)  
Para preencher o modelo, leia as instruções sobre como os campos devem ser preenchidos na planilha.  
:::

## **Tela Solicitar acesso em lote \- usuário terceiro**  

:::(info)(Info)  
Esta tela só estará disponível quando a opção **Fornecer acesso automaticamente após a importação** estiver selecionado como **Sim**.  
:::  

### **Passo Geral**

| Item | Descrição |
| :---- | :---- |
| **Nome do arquivo** | Campo obrigatório. Exibe o botão **Escolher arquivo** para selecionar o arquivo de importação. |
| **Justificativa\*** | Texto de justificativa para solicitar o acesso. |
| **Motivo\*** | Motivos previamente cadastrados que justificam a solicitação. |
| **Código de governança** | Código de governança utilizado. |

### **Passo dispositivos**

| Item | Descrição |
| :---- | :---- |
| **Dispositivos** | Lista com todos os dispositivos disponíveis cadastrados no senhasegura. |
| **Lixeira** | Este item aparece ao lado dos dispositivos já adicionados a lista, para serem excluídos se necessário. |
| **Código** | Código de identificação do dispositivo. |
| **Dispositivo** | Nome do dispositivo. |
| **Modelo** | Modelo do dispositivo. |
| **Tipo de dispositivo** | O tipo do dispositivo. |
| **Site** | URL do dispositivo. |
| **Domínio** | Nome de domínio do dispositivo. |

### **Passo credenciais**

| Item | Descrição |
| :---- | :---- |
| **Credenciais** | Lista com todas as credenciais disponíveis cadastrados no senhasegura. |
| **Lixeira** | Este item aparece ao lado das credenciais já adicionadas a lista, para serem excluídas se necessário. |
| **Código** | Código de identificação da credencial. |
| **Tipo de credencial** | O tipo da credencial. |
| **Nome do usuário** | Nome de usuário da credencial. |
| **Dispositivo** | Dispositivo associado a credencial. |
| **Domínio** | Domínio associado a credencial. |
| **Iniciar sessão** | Checkbox para conceder permissão para iniciar a sessão. |
| **Visualizar senha** | Checkbox para conceder permissão para visualizar a senha. |

### **Passo restrição de acesso**  
#### **Seção período de permissão de acesso**

| Item | Descrição |
| :---- | :---- |
| **Início\*** | Drop-down menu com as opções de data para o início do período de permissão. |
| **Duração\*** | Quanto tempo a permissão será válida, tendo como opção **Horas**, **Minutos**, **Dias** e **Meses**. |

**Seção Dias de permissão de acesso:** Checkbox de opções para os dias que a permissão será válida. As opções são **Todos os dias, Domingo, Segunda, Terça, Quarta, Quinta, Sexta e Sábado.**  
**Seção Horários de permissão de acesso:** Checkbox de opções para os horários que a permissão será válida. As opções são **Todos os horários, 08:00-12:00, 12:00-16:00, 16:00-20:00, 20:00-24:00, 24:00-04:00 e 04:00-08:00.** Na opção **Personalizado** é possível escolher a faixa de horário conforme a necessidade.  
**Seção Sessões:** Checkbox com a opção de **Ilimitado** ou selecione o número de sessões na opção **Quantidade máxima.**

#### **Seção revisão**

| Item | Descrição |
| :---- | :---- |
| **Nome do arquivo** | Nome do arquivo que contém a lista de usuários que terão o acesso solicitado. |
| **Justificativa** | O texto com a justificativa fornecida. |
| **Motivo** | Motivo escolhido para a solicitação. |
| **Código de governança** | Código de identificação do **Código de governança**, quando fornecido. |
| **Credenciais** | As credenciais e as permissões que foram concedidas a cada uma delas. |
| **Restrição de acesso** | As informações de restrição de acesso que foram configuradas. |