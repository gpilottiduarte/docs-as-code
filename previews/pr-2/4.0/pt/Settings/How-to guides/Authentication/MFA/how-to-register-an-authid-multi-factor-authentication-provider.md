# Como cadastrar um provedor de autenticação multifator AuthID

Este documento descreve o processo sistemático de implementação da autenticação AuthID no ambiente do Segura. O AuthID fornece recursos robustos de autenticação multifator (MFA), exigindo registro e configuração adequados do provedor

### Cadastrar um provedor MFA do tipo AuthID

1. No Segura, passe o mouse sobre o **Menu de Produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **MFA \> Provedores**.  
3. No relatório **Provedores,** clique no botão **Adicionar**.  
4. Na tela **Selecione o provedor,** selecione **AuthID**.  
5. Na tela **Registro Provider**, preencha os campos:  
   1. **Nome**: nome identificador do provedor AuthID.  
   2. **Ativo**: escolha se o provedor será criado ativo ou inativo.  
   3. **External ID**: identificador único externo fornecido pelo AuthID para este provedor específico.  
   4. **API Key Value**: chave de API fornecida pelo AuthID para autenticar as requisições deste provedor.  
6. Clique em **Salvar**.