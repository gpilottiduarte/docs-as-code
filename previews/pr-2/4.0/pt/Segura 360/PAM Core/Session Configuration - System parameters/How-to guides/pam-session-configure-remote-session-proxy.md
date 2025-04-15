# Como configurar uma sessão remota (proxy)

Este documento fornece informações sobre o passo a passo sobre como configurar os parâmetros globais para sua sessão remota.

## Configurar uma sessão
Para entender o significado de cada parâmetro, acesse o documento [Parâmetros do sistema - Sessões Remotas](/v4/docs/pt/pam-session-proxy-settings).

:::(warning) (**Atenção**)
Todos os campos vêm preenchidos com um valor padrão, recomendado pelo Segura. Contudo você pode fazer modificações conforme sua necessidade. 
:::
    

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.
2. Selecione **Parâmetros do sistema** >  **Global**. 
3. Na aba **Sessão remota**, preencha os campos obrigatórios, identificados com o asterisco.
4. Na seção **Geral**, caso necessário, modifique os parâmetros abaixo:
    1. Ativar livestream em tempo real?*
    2. Ativar RemoteApp na sessão?*
    3. Quantidade de sessões simultâneas do usuário (zero indica ilimitado)*
    4. Ativar transferência de arquivos para Download?*
    5. Ativar transferência de arquivos para Upload?*
        :::(error) (**Importante**)
    7. O parâmetro **Ativar transferência de arquivos** passou por uma atualização beta e foi dividido em dois parâmetros: **Ativar download de arquivos** e **Ativar upload de arquivos**. Atualmente, se você selecionar **Sim** para qualquer um desses parâmetros, as funções de download e upload serão ativadas. Para **desativar** completamente a transferência de arquivos, selecione **Não** para **ambos** os parâmetros.
        :::
    9. Ativar copiar e colar?*
    10. Ativar gatilhos para transferência de arquivos?*
    11. Ativar o download para acesso local?*
    12. O usuário pode alterar o diretório de instalação PuTTY?*
    13. Ativar suporte para credenciais de domínio SSH?*
    14. Máscara para string de conexão ao utilizar credenciais de domínio SSH*
    15. Interface do IPv6 do servidor Segura*
    16. Diretório de instalação do PuTTY*: digite o executável onde se encontra o diretório.
    17. Layout do Teclado*
    18. Idioma dos textos da sessão (OCR)*
    19. Banner de conexão: escreva a mensagem que será exibida no ínicio da sessão.
5. Na seção **Web Proxy**, caso necessário, modifique os parâmetros abaixo:
    1. Converter /r/n para /n em sessões SSH realizadas no navegador?*
    2. Profundidade de cor: mantenha a opção padrão ou escolha entre 8 e 32 bits.
6. Na seção **Terminal Proxy**, caso necessário, modifique os parâmetros abaixo:
    1. Ativar automação de SUDO em sessões Linux?*
    2. Tipo de terminal SSH*
7. Na seção **Proxy RDP**, caso necessário, modifique os parâmetros abaixo:
    1. Ignorar erros de certificado?*
    2. Letra da unidade RDP*: mantenha a opção padrão ou escolha entre as letras D à Z.
    3. Ativar o uso de Ctrl+Alt+Del?*
    4. Ativar RAIL over RDP?*
    5. Ativar wallpaper em sessões RDP?*
    6. Incluir hostname no login local em sessões RDP?*
8. Por fim na seção **Gravação**, caso necessário, modifique os parâmetros abaixo:
    1. Indexar textos das sessões?*
    2. Ativar importação de índice de textos Input?*
    3. Ativar importação de índice de textos Output?*
    4. Ativar gravação de input do usuário?*
    5. Ativar gravação do vídeo da sessão?*
    6. Ativar expurgo das sessões?*
    7. Quantidade de dias para expurgo*
    8. Qualidade de imagem da sessão Web*
    9. Quantidade de quadros do vídeo (fps)*
    10. Tipo de imagem de sessão Web*
    11. Ativar o download do vídeo da sessão?*
    12. :::(warning) (**Cuidado**)
        Em sessões RDP via Web Proxy em dispositivos Windows, após selecionar o **Layout do Teclado** e o **Idioma dos textos da sessão (OCR)**, certifique-se de realizar a mudança dentro da sessão nas configurações do Windows para o mesmo teclado e idioma selecionado durante as configurações da sessão.
        :::
9. No canto inferior direito, clique em **Salvar**.

Ao concluir, uma mensagem de confirmação de dados salvo com sucesso aparecerá e sua sessão estará configurada e pronta para uso.

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target="_blank"}.