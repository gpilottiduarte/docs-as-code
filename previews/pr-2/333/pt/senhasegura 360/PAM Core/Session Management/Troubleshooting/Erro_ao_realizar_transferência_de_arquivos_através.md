# Erro ao realizar transferência de arquivos através do senhasegura em sessões web proxy Windows

Neste artigo, você encontra um guia passo a passo sobre como verificar o possível problema ao realizar a transferência de arquivos em sessões web proxy Windows.

## Cenário
O senhasegura não conseguiu mapear um drive remoto, utilizado pelo senhesegura, em sessões web proxy Windows para a transferência de arquivos no dispositivo.
***

## Causa
O drive remoto não está visível no Explorador de Arquivos do usuário em razão de configurações erradas no Windows.
***

## Soluções
Para resolver este problema a configuração deverá ser feita em duas etapas, uma através de uma sessão remota iniciada no senhasegura para o Windows e outra na plataforma senhasegura.

#### Sessão remota web proxy Windows

1. Na barra de pesquisa do Windows digite: **Editar política de grupo**.
2. Clique no resultado correspondente.
3. Em **Configuração do Computador** selecione **Modelos Administrativos** > **Componentes do Windows** > **Serviços de Área de Trabalho Remota** > **Host de Sessão da Área de Trabalho Remoto** > **Redirecionamento de Dispositivo e Recurso**.
4. No item **Não permitir redirecionamento de unidade**, clique duas vezes e selecione **Desabilitado**.
5. Clique em **Aplicar**.
6. Clique em **OK**.
7. Feche esta janela.
8. Na barra de pesquisa do Windows digite: **Editor do Registro**.
9. Em **HKEY_LOCAL_MACHINE** > **SOFTWARE** > **Policies** > **Microsoft** > **Windows NT** > **Terminal Services**
10. No item **fDisableCdm**, clique duas vezes, no campo **Dados do valor** digite **0** (zero). 
1. Clique em **OK**.
2. Reinicie a máquina.
3. Clique no **Explorador de Arquivos** > **Este Computador** e confirme que o disco remoto foi mapeado (geralmente ele será indicado pela letra G:).

:::(warning) (**Importante**)
Caso o seu sistema já esteja utilizando a letra G para algum outro disco, outra letra será selecionada para o disco remoto. A mudança da letra deve ser realizada na plataforma senhasegura.
:::

#### Na plataforma senhasegura

1. Na plataforma senhasegura, no canto superior esquerdo, clique no **Grid Menu** e selecione **Configurações**.
2. No menu lateral selecione **Parâmetros do sistema** > **Parâmetros do sistema**. 
3. Na aba **Sessões Remotas**.
    1. **Habilitar transferência de arquivos?***: Selecione **Sim**.
    2. **Letra da unidade RDP***: Selecione **G:** ou a letra que representa o disco criado.

***

Você ainda tem dúvidas? Entre em contato com a [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.