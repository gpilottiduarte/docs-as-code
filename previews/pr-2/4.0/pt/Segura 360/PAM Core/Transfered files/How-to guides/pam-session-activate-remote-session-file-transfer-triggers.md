# Como habilitar gatilhos para transferência de arquivo em sessões remotas

Neste documento, você encontra um guia passo a passo sobre como habilitar gatilhos para transferência de arquivo em sessões remotas. Após essa ação, você terá os registros dos arquivos transferidos.

## Habilitar os gatilhos

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.
2. No menu lateral selecione **Gerenciamento** >  **Sessões** > **Gatilhos de transferência**. 
3. No filtro **Ativo**, selecione **Não** e clique em **Filtrar**.
4. Na lista, localize o item **Auditoria de transferência**.
5. Na coluna **Ação**,  clique no botão Ações e selecione **Ativar**.
    1. Clique **Sim** na caixa de confirmação.
6. Ainda na plataforma, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.
7. No menu lateral selecione **Parâmetros do sistema** > **Global**.
8. Na aba **Sessão remota**, na seção **Geral**:
    1. Localize o parâmetro **Habilitar gatilhos para transferência de arquivos?*** e escolha a opção **Sim**.
9. No canto inferior direito clique em **Salvar**.

Ao concluir será possível realizar a transferência de arquivos de sua máquina para a sessão remota iniciada e tê-los registrados no relatório de [Arquivos transferidos](/v4/docs/pt/pam-session-transferred-files).

:::(warning) (**Cuidado**)
Quando os logs de transferência de arquivos estiverem habilitados, as sessões que usam SFTP vão parar de funcionar devido às restrições da tecnologia.
:::

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target="_blank"}.