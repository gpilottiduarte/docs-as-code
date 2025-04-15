# Erro ao conectar a extensão do navegador ao MySafe

Este documento fornece orientações para resolver problemas comuns ao tentar conectar a **extensão do navegador** ao **MySafe**. Cada problema é descrito com uma mensagem de erro, possíveis causas e soluções recomendadas. Siga as instruções passo a passo para solucionar o problema.

## Sumário de problemas

| Problema  | Mensagem de erro      | Causa principal  | Solução  |
| :---- | :---- | :---- | :---- |
| Problema 1 | “Não foi possível se comunicar com sua instância do Segura, por favor verifique se você tem acesso à internet e à sua instância.” | Falta de conexão com o servidor Segura. Configuração incorreta da **URL base** no **MySafe**. Certificado autoassinado no servidor Segura. |  [Solução 1 ](/v4/docs/pt/error-connecting-the-browser-extension-to-mysafe#solução-1-verificar-conexão-ao-Segura)[Solução 2](/v4/docs/pt/error-connecting-the-browser-extension-to-mysafe#solução-2-revisar-configurações-do-sistema) [Solução 3](/v4/docs/pt/error-connecting-the-browser-extension-to-mysafe#solução-3-configure-o-navegador-para-certificados-autoassinados)  |
| Problema 2 | “Houve um erro inesperado, tente novamente em alguns instantes ou contate nosso time de suporte.” | URL da aplicação incorretamente configurada no **Orbit Server Manager.**  | [Solução 4](/v4/docs/pt/error-connecting-the-browser-extension-to-mysafe#solução-4-verificar-configurações-no-orbit-config-manager-solução4-verificarconfiguraçõesnoorbitconfigmanager)    |
| Problema 3 | “Código inválido.”     | Aplicação criada incorretamente como tipo **mobile app.**    | [Solução 5](/v4/docs/pt/error-connecting-the-browser-extension-to-mysafe#solução-5-verificar-o-tipo-da-aplicação-criada-solução5-verificarotipodaaplicaçãocriada) |

## Soluções

### Solução 1: Verificar conexão ao Segura

Certifique-se de que o dispositivo tem uma conexão estável com o servidor Segura.

**Conclusão da etapa**: após verificar a estabilidade da conexão, tente novamente conectar a **extensão do navegador** ao **MySafe**. Caso o erro persista, continue para a próxima solução.

### Solução 2: Revisar configurações do sistema 

* **Pré-requisito**: permissão de administrador da instância Segura.

:::(warning) (**Atenção**)  
Peça ao administrador que verifique as configurações do sistema e as suas permissões de acesso.   
:::

1. No menu de produtos, acesse  **MySafe \> Administração global \> Opções de compartilhamento**.  
   1. Insira um e-mail para notificações relacionadas ao **MySafe**.  
   2. Em **Url base**, insira a URL do cofre **MySafe** sem o prefixo `https://`. **Exemplo:** `empresa.mt4.com`

   :::(info) (Info)

   Os demais campos da tela são relacionados à funcionalidade de **Compartilhamento externo**, disponível apenas para a versão web. Saiba mais em [Como configurar o MySafe](/v4/docs/pt/how-to-configure-mysafe).

   :::

**Conclusão da etapa**: após configurar a URL base, tente novamente conectar a **extensão do navegador** ao **MySafe**. Caso o erro persista, continue para a próxima solução.

### Solução 3: Configure o navegador para certificados autoassinados

1. Se o servidor Segura estiver usando um certificado autoassinado, feche o navegador e inicie com a flag `--ignore-certificate-errors`. Por exemplo, se estiver usando o navegador Google Chrome, insira `chrome.exe --ignore-certificate-errors`.

   

**Conclusão da etapa**: após reiniciar o navegador com a configuração correta, tente novamente conectar a **extensão do navegador** ao **MySafe**. Caso o erro persista, continue para a próxima solução.

### Solução 4: Verificar configurações no Orbit Server Manager 

* **Pré-requisito**: permissão de administrador da instância Segura.

:::(warning) (**Atenção**)  
Peça ao administrador que verifique as configurações do **Orbit Server Manager**.   
:::

1. Em **Orbit Server Manager**, acesse **Configurações \> Aplicação**.  
2. Verifique se a **URL da aplicação** está configurada corretamente.  
   1. Caso necessário, clique em **Alterar** no canto superior direito e ajuste a URL.

**Conclusão da etapa**: após corrigir a URL da aplicação, tente novamente conectar a **extensão do navegador** ao **MySafe**. Caso o erro persista, continue para a próxima solução.

###  Solução 5: Verificar o tipo da aplicação criada 

1. Em **MySafe \> Meus apps**, clique em **Adicionar**.  
2. Em **Tipo da aplicação\***, selecione **Extensão**.  
3. Clique em **Salvar**.

**Conclusão da etapa**: após verificar e corrigir o tipo da aplicação, tente novamente realizar a conexão da **extensão do navegador** ao **MySafe**. Caso o erro persista após seguir as instruções, entre em contato com o suporte técnico para assistência adicional.
