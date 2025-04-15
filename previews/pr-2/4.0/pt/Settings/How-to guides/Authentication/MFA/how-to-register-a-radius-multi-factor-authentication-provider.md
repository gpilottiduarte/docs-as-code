# Como cadastrar um provedor de autenticação de multifator Radius

Para utilizar a autenticação via Radius, você precisa ter um provedor do tipo Radius devidamente cadastrado no Segura.

## Cadastrar um provedor MFA Radius

1. No Segura, passe o mouse sobre o **Menu de Produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **MFA \> Provedores**.  
3. No relatório **Provedores**, clique no botão **Adicionar**.  
4. Na tela **Selecione o provedor,** selecione **Radius**.  
5. Na tela **Cadastro do Provider**, preencha os campos:  
   1. **Nome**: nome identificador do provedor Radius..  
   2. **Ativo**: escolha se o provedor será criado ativo ou inativo.  
   3. **Hostname**: hostname ou IP onde o servidor Radius está configurado.  
   4. **Porta**: porta onde o servidor está acessível.  
   5. **Chave**: chave do servidor Radius.  
   6. **Timeout (s)**: tempo, em segundos, de espera para ser considerado timeout.  
6. Clique em **Salvar**.