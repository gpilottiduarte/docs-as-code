# Como criar uma nova segregação por origem

Neste documento, você encontra um guia passo a passo sobre como configurar os parâmetros segregados por origem em uma sessão remota.

## Requisitos

* Ter criado uma configuração de sessão remota global. Para saber como configurar acesse a documentação sobre [Como configurar uma sessão remota (proxy)](/v4/docs/pt/pam-session-configure-remote-session-proxy).

***

## Criar nova parametrização

Ao criar uma parametrização segregada por origem, você pode escolher entre **Padrão do sistema**, que irá manter o que foi configurado na parametrização global, ou então **Sim** ou **Não** que irá sobrepor o que foi escolhido globalmente. Essa parametrização afeta somente a origem escolhida durante a criação do novo parâmetro.

1. No Segura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. Selecione **Parâmetros do sistema** >  **Parâmetros segregados**.
3. No canto superior direito, clique no ícone **Exibir ações**, representado pelos três pontos verticais.
4. Selecione **Nova segregação por origem**.
5. Na janela **Parâmetros segregados por origem**, preencha os campos obrigatórios:
    1. **Nome***: digite o nome do parâmetro a ser criado.
    2. **Situação***: por padrão a opção Ativo já vem selecionada.
    :::(info) (**Info**)
    Para entender o significado de cada parâmetro, acesse o documento [Parâmetros do sistema - Sessão Remota](/v4/docs/pt/pam-session-proxy-settings).
    :::
    :::(warning) (**Cuidado**)
    Todos os campos vêm preenchidos com a opção Padrão do sistema. Contudo, você pode fazer modificações conforme sua necessidade.
    :::
6. Na aba **Sessão remota**, preencha os campos obrigatórios, identificados com o asterisco:
    1. Permitir o uso de credenciais pessoais?*.
    2. Habilitar transferência de arquivos para Download?*.
    3. Habilitar transferência de arquivos para Upload?*.
        :::(error) (**Importante**)
        O parâmetro **Habilitar transferência de arquivos** passou por uma atualização beta e foi dividido em dois parâmetros: **Habilitar download de arquivos** e **Habilitar upload de arquivos**. Atualmente, se você selecionar **Sim** para qualquer um desses parâmetros, as funções de download e upload serão ativadas. Para **desativar** completamente a transferência de arquivos, selecione **Não** para **ambos** os parâmetros.
        :::
    4. Habilitar o uso de Ctrl+Alt+Del?*.
    5. Habilitar copiar e colar?*.
    6. Ignorar erros de certificado?*.
    7. Habilitar automação de SUDO em sessões Linux?*.
    8. Habilitar gatilhos para transferência de arquivos?*.
    9. Habilitar RAIL over RDP?*.
    10. Habilitar wallpaper em sessões RDP?*.
    11. Tipo de terminal SSH*.
    12. Profundidade de cor.
        :::(info) (**Info**)
        Observe que, no campo Profundidade de cor, você pode escolher que profundidade usar pelo tipo de conectividade, como: HTTP/HTTP, RDP, VNC e X11 Forward, de forma  a se adequar ao desempenho desejado. As opções variam de 8 bits a 32 bits.
        :::
    12. Incluir hostname no login local em sessões RDP?*.
    13. Converter /r/n para /n em sessões SSH realizadas no navegador?*.
    14. Layout do Teclado*.
    15. Idioma dos textos da sessão (OCR)*.
        :::(warning) (**Cuidado**)
        Em sessões RDP via Web Proxy em dispositivos Windows, após selecionar o Layout do Teclado e o Idioma dos textos da sessão (OCR) certifique-se de realizar a mudança dentro da sessão nas configurações do Windows para o mesmo teclado e idioma selecionado durante as configurações da sessão.
        :::
    16. Letra da unidade RDP*.
    17. Quantidade de sessões simultâneas do usuário (zero indica ilimitado)*.
    18. Habilitar suporte para credenciais de domínio SSH?*
    19. Máscara para string de conexão ao utilizar credenciais de domínio SSH*
    20. Banner de conexão: escreva uma mensagem a ser exibida no início da sessão.
7. Na aba **Gravação**, preencha:
    1. Habilitar gravação de input do usuário?*.
    2. Habilitar gravação de sessão?*.
    3. Habilitar livestream em tempo real?*.
    4. Indexar textos das sessões?*.
    5. Habilitar importação de índice de textos Input?*.
    6. Habilitar importação de índice de textos Output?*.
    7. Permitir o uso de macro em sessão?*.
    8. Habilitar o download do vídeo da sessão?*
8. Na aba **Segurança**, preencha:
    1. Forçar Autenticação de multifator para visualizar senha?*.
    2. Forçar autenticação de multifator para iniciar sessão?*.
    3. Ignorar a opção 'Confiar neste computador' para visualizar senha?*.
    4. Ignorar a opção 'Confiar neste computador' para iniciar sessão?*.
    5. Forçar conexão segura (SSL) nas execuções de troca de senha?*.
    6. Habilitar troca de senha após abertura da sessão?*.
    7. Forçar autenticação com certificado para o Proxy RDP?*.
    8. Forçar autenticação com certificado para o Proxy SSH/Telnet?*.
    9. Modo de segurança RDP*.
    10. Tempo de inatividade da sessão*.
    11. Habilitar filtro de IPs com permissão para iniciar uma sessão.
    12. IPs com permissão para iniciar sessão (essa opção só é disponibilizada se a anterior for habilitada).
9. Por fim, na aba **Origens**:
    1. Preencha o número de IP e clique em **Adicionar**.
    2. Os IPs serão exibidos na lista abaixo, onde é possível excluir caso necessário, clicando no ícone da **lixeira**.
10. Ao finalizar, no canto inferior direito, clique em **Salvar**.

Ao concluir, uma mensagem de confirmação de dados salvos com sucesso aparecerá. Agora sua parametrização por origem está configurada e pronta para o uso.

***
### Próximos passos:
[Nível de segregação](/v4/docs/pt/pam-session-segregation-level)
[Parâmetros segregados](/v4/docs/pt/pam-session-segregated-parameters)

Você ainda tem dúvidas? Entre em contato com a  [Comunidade Segura](https://community.Segura.io/){target="_blank"}.