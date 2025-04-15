# Como realizar a integração com SAML 2.0

O Segura suporta a integração com provedores que tenham suporte ao protocolo SAML 2.0.  O protocolo SAML 2.0 oferece uma robustez consideravelmente maior, mais funcionalidades e melhor interoperabilidade quando comparado com o protocolo SAML 1.1.

## Importante

A partir da versão 3.32, toda vez que um usuário iniciar uma nova sessão no Segura utilizando SSO via SAML, será necessário se autenticar novamente no provedor de identidade (Azure, Okta, etc.), independentemente de já estar autenticado no provedor. Isso garante que apenas o usuário legítimo possa acessar o sistema.

Este comportamento adiciona uma camada de segurança, assegurando que, mesmo que agentes maliciosos consigam acessar os dados de navegação relacionados à autenticação externa — seja através de ataques de *phishing*, sequestro de sessão ou XSS (Cross-Site Scripting) — eles não poderão utilizá-los para invadir o Segura. Ao exigir que os usuários se reautentiquem constantemente, previne-se potenciais desvios, garante-se a aderência a normas regulatórias, mitigam-se diversos vetores de ataque e preserva-se a integridade e a validade das sessões dos usuários.

Os principais benefícios desta abordagem são:

* **Camada de segurança adicional:** a solicitação regular de reautenticação atenua o risco de sequestro de sessão, funcionando como uma camada de segurança adicional. Se um invasor obtiver acesso aos dados da sessão ou aos *cookies*, ele ainda precisará das credenciais do usuário para prosseguir.  
* **Conformidade e auditoria:** muitas estruturas normativas e padrões do setor exigem reautenticação periódica para garantir que os controles de acesso não se baseiam apenas em dados de sessão obsoletos.  
* **Mitigação de ameaças:** a exigência de reautenticação minimiza o impacto de vários vetores de ataque, como *phishing*, CSRF (*Cross-Site Request Forgery*) ou XSS (*Cross-Site Scripting*), em que os invasores podem explorar cookies ou tokens de sessão obsoletos.  
* **Garantia de identidade do usuário:** ao verificar continuamente a identidade do usuário, o sistema garante que a pessoa que está acessando recursos privilegiados é realmente quem afirma ser, reduzindo a probabilidade de acesso não autorizado.

## Requisitos

* Para que o Segura seja integrado a um serviço SSO com suporte ao protocolo SAML 2.0, é necessário que este serviço já esteja configurado e com usuários embarcados.  
* O SAML só poderá ser utilizado como provedor de autenticação WEB para essa aplicação.

## Integrar SAML 2.0

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação > Provedores**.  
3. No relatório **Provedores**, ative o provedor SAML.  
4. Acesso, no menu lateral, acesse **Autenticação > SAML > Provedores**.  
5. No relatório **Provedores**, clique no botão **Adicionar**.  
6. Na janela **Registro de provedor SAML**, preencha os campos:  
   1. Seção **Informações principais**:  
      1. **Tipo**: tipo de provedor SSO SAML. Utilize a opção **SAML provider** caso não encontre o modelo de seu provedor  
      2. **ID da entidade**: código de identificação do Segura no provedor SAML  
      3. **URL de metadados do provider SAML**: URL do serviço SAML publicado pelo provedor (role descriptor). Este XML contém os elementos de interface, *signing keys* ou *encryption keys*, e os SSO *protocol endpoints*.  
      4. **Domínio ou IP público para URL de redirecionamento**: adicione o domínio ou IP para o Segura gerar uma URL própria de redirecionamento.  
           
         :::(info) (Info)
         Essa configuração só irá funcionar se o domínio ou IP inserido estiver público e acessível.
         :::
    	
      5. **URL de redirecionamento**: URL do Segura que receberá os passos de autenticação. Padrão: `*https://Segura.mycompany/flow/saml/auth/assert/*`, onde o domínio de exemplo, `Segura.mycompany`, deve ser substituído pelo IP ou domínio de acesso da instância Segura.
    6. Seção **Configuração de URLs**:
          7. **SSO Login URL (Sign-in URL)**: URL que o prestador SSO SAML fornece ao Segura para ser acessada no momento de login.  
          8. **SSO Logout URL (Sign-out URL)**: URL que o prestador SSO SAML fornece ao Segura para ser acessado no momento de logout.
          9. **Tipo de redirect bind**: selecione o tipo de redirect.
   2. Seção **Security SAML:**  
      1. **Certificado (formato PEM)**: insira as informações do certificado fornecido pelo seu provedor usando SAML.  
7. Clique em **Salvar**.

Após realizar o processo, o botão **Login utilizando SAML** é exibido na tela de login do Segura. As regras de tempo de validade da autenticação são de controle do prestador SSO SAML.  

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).