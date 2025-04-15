# Como conectar-se utilizando uma credencial JIT

Uma vez configurada a sua credencial JIT, você poderá acessá-la seguindo os passos a seguir:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Credenciais > Just In Time**.
3. Na listagem, identifique a credencial JIT configurada anteriormente e clique em **Iniciar sessão**, dentro do menu de **Ações**, botão **Ações**.
4. Uma nova janela ou aba será aberta no seu navegador com a seguinte mensagem: **Conectado ao Segura. Provisionando a credencial no dispositivo.**
    1. Em caso de sucesso, você será redirecionado para a sessão no dispositivo configurado.
    2. Em caso de insucesso, uma mensagem de erro indicará que não foi possível provisionar o acesso com a seguinte mensagem: **Ocorreu um erro ao provisionar a credencial.**

:::(Warning) (Cuidado)
- Quando utilizado a modalidade **Habilitar/Desabilitar credencial**, a própria credencial ao qual a configuração está sendo realizada, será alvo do template de habilitação e desativação. Neste caso, utilize outra credencial para autenticar-se na etapa JIT.
- Quando utilizado a modalidade **Criação e exclusão de credencial**, a credencial onde está sendo configurada o JIT não será o alvo do template. Uma nova credencial dinâmica será criada no dispositivo alvo utilizando o padrão `senseg9999999` (prefixo senseg seguido de 7 dígitos). Neste caso, a própria credencial pode ser utilizada para se autenticar no dispositivo alvo.
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).