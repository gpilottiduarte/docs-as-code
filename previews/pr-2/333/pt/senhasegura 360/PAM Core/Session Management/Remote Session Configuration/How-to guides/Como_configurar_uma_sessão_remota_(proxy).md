# Como configurar uma sessão remota (proxy)

Neste documento, você encontra um passo a passo sobre como configurar os parâmetros globais para sua sessão remota.

## Configurar uma sessão

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. Selecione **Parâmetros do sistema** >  **Parâmetros do sistema**. 
3. Na aba **Sessão remota**, preencha os campos obrigatórios, identificados com o asterisco.
    :::(info) (**Info**)
    Para entender o significado de cada parâmetro, acesse o documento [Parâmetros do sistema - Sessões Remotas](/v3-33/docs/pt/pam-session-proxy-settings).
    :::
    :::(warning) (**Cuidado**)
    Todos os campos vêm preenchidos com um valor padrão, recomendado pelo senhasegura. Contudo você pode fazer modificações conforme sua necessidade. 
    :::
4. Na seção **Geral**, caso necessário, modifique os parâmetros abaixo:
    1. Habilitar transferência de arquivos para Download?*
    2. Habilitar transferência de arquivos para Upload?*
        :::(error) (**Importante**)
        O parâmetro **Habilitar transferência de arquivos** passou por uma atualização beta e foi dividido em dois parâmetros: **Habilitar download de arquivos** e **Habilitar upload de arquivos**. Atualmente, se você selecionar **Sim** para qualquer um desses parâmetros, as funções de download e upload serão ativadas. Para **desativar** completamente a transferência de arquivos, selecione **Não** para **ambos** os parâmetros.
        :::
    3. Habilitar o uso de Ctrl+Alt+Del?*
    4. Habilitar copiar e colar?*
    5. Permitir o uso de credenciais pessoais?*
    6. Habilitar gatilhos para transferência de arquivos?*
    7. Converter /r/n para /n em sessões SSH realizadas no navegador?*
    8. Habilitar o download para acesso local?*
    9. Diretório de instalação do PuTTY*: digite o executável onde se encontra o diretório.
    10. O usuário pode alterar o diretório de instalação PuTTY?*
    11. Interface do IPv6 do servidor senhasegura*
    12. Profundidade de cor: mantenha a opção padrão ou escolha entre 8 e 32 bits.
    13. Letra da unidade RDP*: mantenha a opção padrão ou escolha entre as letras D à Z.
    14. Habilitar suporte para credenciais de domínio SSH?*
    15. Máscara para string de conexão ao utilizar credenciais de domínio SSH*
    16. Banner de conexão: escreva a mensagem que será exibida no ínicio da sessão.
5. Na seção **Proxy SSH**, caso necessário, modifique os parâmetros abaixo:
    1. Habilitar automação de SUDO em sessões Linux?*
    2. Tipo de terminal SSH*
6. Na seção **Proxy RDP**, caso necessário, modifique os parâmetros abaixo:
    1. Ignorar erros de certificado?*
    2. Habilitar RAIL over RDP?*
    3. Habilitar wallpaper em sessões RDP?*
    4. Incluir hostname no login local em sessões RDP?*
7. Por fim na seção **Gravação**, caso necessário, modifique os parâmetros abaixo:
    1. Indexar textos das sessões?*
    2. Habilitar importação de índice de textos Input?*
    3. Habilitar importação de índice de textos Output?*
    4. Habilitar gravação de input do usuário?*
    5. Habilitar gravação de sessão?*
    6. Habilitar RemoteApp na sessão?*
    7. Ativar expurgo das sessões?*
    8. Quantidade de dias para expurgo*
    9. Quantidade de sessões simultâneas do usuário (zero indica ilimitado)*
    10. Qualidade de imagem da sessão Web*
    11. Quantidade de quadros do vídeo (fps)*
    12. Layout do Teclado*
    13. Tipo de imagem de sessão Web*
    14. Habilitar livestream em tempo real?*
    15. Idioma dos textos da sessão (OCR)*
    16. Ativar fluxo de aprovação para vídeos da sessão?*
    17. Habilitar o download do vídeo da sessão?*
    :::(warning) (**Cuidado**)
    Em sessões RDP via Web Proxy em dispositivos Windows, após selecionar o **Layout do Teclado** e o **Idioma dos textos da sessão (OCR)**, certifique-se de realizar a mudança dentro da sessão nas configurações do Windows para o mesmo teclado e idioma selecionado durante as configurações da sessão.
    :::
8. No canto inferior direito, clique em **Salvar**.

Ao concluir, uma mensagem de confirmação de dados salvo com sucesso aparecerá e sua sessão estará configurada e pronta para uso.

***
### Próximos passos:
[Parâmetros do sistema - Sessão remota](/v3-33/docs/pt/pam-session-proxy-settings)
[Níveis de segregação](/v3-33/docs/pt/pam-session-segregation-level)
[Parâmetros segregados](/v3-33/docs/pt/pam-session-segregated-parameters)

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target="_blank"}.