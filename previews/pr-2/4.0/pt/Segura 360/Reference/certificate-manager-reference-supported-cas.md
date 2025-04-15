# Plugins de autoridades certificadoras

Atualmente, o Segura integra-se com as autoridades listadas abaixo. 

Esse documento descreve apenas os campos específicos de configuração do plugin de cada CA. 

:::(info) (Info)
Para outras informações de cadastro, veja o documento [Como configurar autoridades](/v4/docs/pt/certificate-manager-settings-how-to-configure-authorities) para outras informações de cadastro.
:::

## Autoridade externa

Opção para gerenciar certificados de autoridades não integradas ao Segura.

| Item | Descrição |
| :---- | :---- |
| **Nome** | Identificação da AC externa. |
| **Ativo** | Habilita a autoridade para utilização. Use as opções **Sim** e **Não** para confirmar a ativação ou desativação da autoridade. |

## GlobalSign

| Item | Descrição |
| :---- | :---- |
| **Nome de usuário** | Usuário GlobalSign. |
| **Senha** | Senha GlobalSign. |

## Let's Encrypt

| Item | Descrição |
| :---- | :---- |
| **Emails (separados por vírgula)** | E-mail utilizado para cadastrar a conta Let’s Encrypt. |
| **Senha da chave privada** | Senha Let’s Encrypt. |
| **Utilizar conta existente** | Caixa de seleção que habilita o preenchimento dos campos abaixo. |
| **Chave privada** | Valor da chave privada. |
| **Chave pública** | Valor da chave pública. |

:::(info) (Info)
Se você não tem uma conta Let’s Encrypt, é possível preencher apenas o campo **Email** com uma conta válida e salvar o registro. Com o registro salvo, basta clicar em **Alterar** para visualizar as chaves pública e privada geradas pelo Segura.
:::

## Site Blindado

| Item | Descrição |
| :---- | :---- |
| Nome de usuário | Usuário Site Blindado. |
| Senha | Senha Site Blindado. |
| Usar a API de teste? | Caixa de seleção para testar a funcionalidade de integração. Use as opções **Sim** e **Não** para confirmar a execução. Esta ação testará a integração, mas não garante a validade do certificado. |

## DigiCert

| Item | Descrição |
| :---- | :---- |
| Nome de usuário | Usuário DigiCert. |
| ID da Conta | ID DigiCert. |
| API key | Chave de API DigiCert. |

## GoDaddy

| Item | Descrição |
| :---- | :---- |
| **Chave** | Chave GoDaddy. |
| **Secret** |  Segredo da chave GoDaddy. |

## Requisitos para a autoridade Microsoft CA

* Um Windows Server executando os Serviços de Certificados do Active Directory (AD CS).  
* O protocolo WinRM habilitado com HTTP ou HTTPS. A porta selecionada deve corresponder ao protocolo escolhido.  
* A autenticação NTLM ou NTLMv2 habilitada no Windows Server que hospeda a autoridade de certificação (CA).  
* A conta de usuário do Windows usada como credencial de acesso deve ter:  
  * Privilégios administrativos no Windows Server.  
  * Permissões para se inscrever em certificados em nome de terceiros nas configurações de segurança da CA.

## Microsoft CA

| Item | Descrição |
| :---- | :---- |
| **IP para conexão com a CA** | IP do Windows Server usado como Autoridade de Certificação. |
| **Hostname da CA** | Hostname da CA. |
| **Plugin para conexão** | Plugin WinRM. |
| **Porta** | Porta 5985 (HTTP) ou 5986 (HTTPS). |
| **Credencial de acesso** | Credencial de acesso cadastrada no PAM para acessar a máquina Windows. |
:::(info) (Info)
*   Se um Modelo de Certificado não for definido, o Segura usará o Modelo de Certificado padrão criado pelo Windows, chamado 'webserver'.
* Se você utiliza o Network Connector para a conexão com a Microsoft, defina o conector de rede padrão em **Configurações ➞ Parâmetros do sistema ➞ Parâmetros do sistema ➞ Aplicação ➞ Conector de rede**. Com esta definição você garante que ele será utilizado para a conexão na hora da assinatura.
:::

## Requisitos para Entrust

* Integração com PKI Entrust , possibilita o gerenciamento completo do ciclo de vida dos certificados e o gerenciamento operacional em todas as suas Autoridades Certificadoras (CAs).  
* Obter chaves de acesso de API para sua CA PKI existente para acessar a API. Entre em contato com nossa equipe de operações Entrust através de seus canais normais.
Atualmente para a assinatura são suportados os certificados do tipo RSA e podem ser utilizados os seguintes profiles:

* Web Server Certificate \- CSR  
* SMIME Certificate \- CSR  
* PIV 1-Key Pair \- PIV Digital Signature \- CSR  
* Person Network Authentication Certificate \- CSR No Directory 
* ACME Public  
* PIV 1-Key Pair \- PIV Authentication \- CSR  
* PIV 1-Key Pair \- PIV Key Management \- CSR  
* PIV 1-Key Pair \- Card Authentication  \- CSR  
* Network Authentication Certificate \- CSR  
* People Network Authentication Certificate \- CSR  
* People SMIME Certificate \- CSR  
* Devices Network Authentication Certificate \- CSR.

## Entrust

| Item | Descrição |
| :---- | :---- |
| **Nome** | Identificação externa da CA. |
| **Ativo** | Habilita a autoridade para utilização. Use as opções **Sim** e **Não** para confirmar a ativação ou desativação da autoridade. Por padrão o parâmetro vem preenchido com a opção Sim. |
| **Arquivo do certificado** | O botão **Escolher arquivo** busca pelo certificado e realiza seu upload. |
| **Senha da key** | Senha do certificado. |