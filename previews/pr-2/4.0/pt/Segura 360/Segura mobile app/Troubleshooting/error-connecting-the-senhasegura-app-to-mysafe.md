# Erro ao conectar o aplicativo Segura ao MySafe

Este documento fornece orientações para resolver problemas comuns ao tentar conectar o aplicativo móvel **Segura** ao **MySafe**. Cada problema é descrito com uma mensagem de erro, possíveis causas e soluções recomendadas. Siga as instruções passo a passo para solucionar o problema.

## Sumário de problemas

| Problema  | Mensagem de erro      | Causa principal  | Solução  |
| :---- | :---- | :---- | :---- |
| Problema 1 | “Não foi possível conectar à sua instância do Segura. Verifique se o seu dispositivo está conectado na Internet e tem acesso à instância.”  | Falta de conexão com o servidor Segura. Configuração incorreta da **URL base** no **MySafe.** |  [Solução 1](/v4/docs/pt/error-connecting-the-Segura-app-to-mysafe#solução-1-verificar-conexão-ao-Segura-solução1-verificarconexãoaoSegura)  [Solução 2](/v4/docs/pt/error-connecting-the-Segura-app-to-mysafe#solução-2-revisar-configurações-do-sistema-e-permissões-de-acesso-solução2-revisarconfiguraçõesdosistemaepermissõesdeacesso) |
| Problema 2 |  “Houve um erro inesperado, tente novamente em alguns instantes ou contate nosso time de suporte”   | URL incorreta configurada no **Orbit Server Manager.**  | [Solução 3](/v4/docs/pt/error-connecting-the-Segura-app-to-mysafe#solução-3-verificar-configurações-no-orbit-config-manager-solução3-verificarconfiguraçõesnoorbitconfigmanager)    |
| Problema 3 | “Código inválido”     | Aplicação criada incorretamente como tipo **Extensão.**    | [Solução  4](/v4/docs/pt/error-connecting-the-Segura-app-to-mysafe#solução-4-verificar-o-tipo-da-aplicação-criada-solução4-verificarotipodaaplicaçãocriada) |

## Soluções

### Solução 1: Verificar conexão ao Segura 

Certifique-se de que o dispositivo tem uma conexão estável com o servidor Segura.

**Conclusão da etapa**: após verificar a estabilidade da conexão, tente novamente conectar o aplicativo **Segura** ao **MySafe**. Caso o erro persista, continue para a próxima solução.

### Solução 2: Revisar configurações do sistema e permissões de acesso 

* **Pré-requisito**: permissão de administrador da instância Segura.

:::(warning) (**Attention**)  
Peça ao administrador que verifique as configurações do sistema e as suas permissões de acesso.   
:::

1. No **Menu de produtos** do Segura, acesse **Configurações \> Parâmetros do sistema \> Global \> Controle de acesso**.  
2. Na seção **Mobile app**, habilite a opção **Autorizar uso por todos os usuários\*** e defina se é necessário **Solicitar aprovação de dispositivo\*.**  
3. Em seguida, no **Menu de produtos**, acesse **MySafe \> Administração global \> Opções de compartilhamento**.  
   1. Insira um e-mail para notificações relacionadas ao **MySafe**.  
   2. Em **Url base**, insira a URL do cofre **MySafe** sem incluir `https://`. **Exemplo:** `empresa.mt4.com`

   :::(info) (Info)

   Os demais campos da tela são relacionados à funcionalidade de **Compartilhamento externo**, disponível apenas para a versão web. Saiba mais em [Como configurar o MySafe](/v4/docs/pt/how-to-configure-mysafe).

   :::

**Conclusão da etapa**: após configurar a **URL base**, tente novamente conectar o **aplicativo móvel** **Segura** ao **MySafe**. Caso o erro persista, continue para a próxima solução.

### Solução 3: Verificar configurações no Orbit Server Manager 

* **Pré-requisito**: permissão de administrador da instância Segura.

:::(warning) (**Attention**)  
Peça ao administrador que verifique as configurações do **Orbit Server Manager**.   
:::

1. Em **Orbit Server Manager**, acesse **Configurações \> Aplicação**.  
2. Verifique se a **URL da aplicação** está configurada corretamente.  
   1. Caso necessário, clique em **Alterar** no canto superior direito e ajuste a URL.

**Conclusão da etapa**: após corrigir a **URL da aplicação**, tente novamente conectar o aplicativo **Segura** ao **MySafe**.

###  Solução 4: Verificar o tipo da aplicação criada 
1. Em **MySafe \> Meus apps**, clique em **Adicionar**.  
2. Em **Tipo da aplicação\***, selecione **Aplicativo móvel**.  
3. Clique em **Salvar**.

:::(error) (Alerta)  
Se a opção **Tipo da aplicação\*** não estiver disponível, você não possui permissão para usar o aplicativo **Segura**, e o QR code gerado será válido apenas para a **extensão**. Peça ao administrador que autorize o uso do **aplicativo móvel**.  
:::

**Conclusão da etapa**: após verificar e corrigir o **Tipo de aplicação**, ou obter a autorização necessária, tente novamente realizar a conexão do **aplicativo móvel Segura** ao **MySafe**.  
Caso o erro persista após seguir as instruções, entre em contato com o suporte técnico para assistência adicional.  