# Vídeo da sessão

Neste documento, você encontrará todas as informações sobre a página **Vídeo da sessão** que mostra as informações da sessão remota e a possibilidade de visualização e download da gravação da sessão.

:::(info) (**Info**)
Para que seja possível realizar o download da sessão o parâmetro **Habilitar o download do vídeo da sessão**, precisa estar com a opção **Sim** ativa. Para saber mais sobre os parâmetros do sistema acesse a documentação [Parâmetros do sistema - Sessão remota](/v3-33/docs/pt/pam-session-proxy-settings).
:::

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, identificado pelo ícone de nove quadrados e, em seguida, selecione **PAM Core**.
2. No menu lateral, selecione **Controle de acesso** > **Sessões remotas**.
3. Na lista com as sessões remotas já finalizadas, na coluna **Ação**, clique no ícone de **play**.

:::(warning) (**Atenção**)
À partir da versão 3.33 o ícone para visualização do vídeo da sessão só estará disponível para os papéis PAM Administrator, PAM Auditor e System Administrator que possuírem a permissão **PAM.SessionManagement.Recording** incluída em seu papel.
:::

---
## Seções da tela Vídeo da sessão

#### Aba Dados da Sessão
| **Item** | **Descrição** |
|---|---|
| **Código** | Identificação da sessão realizada. |
| **Início** | Data e hora do início da sessão. |
| **Fim** | Data e hora do fim da sessão. |
| **Tipo** | O protocolo utilizado pela sessão. |
| **Host** | Número do IP do dispositivo acessado. |
| **Nome do usuário** | Nome de usuário da credencial utilizada. |
| **Mensagem de erro** | Mensagem de erro exibida ao usuário, caso ocorra. |



#### Aba Dados do usuário
| **Item** | **Descrição** |
|---|---|
| **Usuário** | Nome do usuário que realizou o acesso. |
| **IP do usuário** | Endereço de IP da máquina que realizou o acesso. |

#### Aba Sessão
| **Item** | **Descrição** |
|---|---|
| **Tamanho** | Exibe o tamanho do arquivo de vídeo da sessão |
| **Tempo** | Exibe o tempo em que a sessão estava ativa |
| **Visualizar*** | Botão que abre a janela de visualização do vídeo da sessão. |
| **Gerar vídeo para download** | Botão que exibe uma caixa de mensagem pedindo a confirmação da realização do download do vídeo. Ao clicar Sim uma mensagem de geração do vídeo é exibida. |

:::(warning) (**Atenção**)
*A função de **Visualizar** que for utilizada através do Proxy 2.0 contará com um novo navegador de visualização onde será possível acessar o mapa de calor através da linha do tempo do vídeo assim como o keydstroke log. Também todo o áudio disponível durante a sessão terá sido gravado e será reproduzido juntamente com a visualização do vídeo. Para saber mais sobre essa função acesse o documento [Sobre o Vídeos da sessão - Heatmap e áudio no vídeo da sessão](/v3-33/docs/pt/pam-session-about-video-session#heatmap-and-audio-in-the-session-video).
:::

:::(info) (**Info**)
* O download do vídeo é disponibilizado por email assim que a conversão for finalizada.
* Se o senhasegura estiver sendo utilizado em um cluster, os vídeos podem levar alguns segundos ou minutos para sincronizar com outros membros do cluster, antes que o vídeo esteja disponível.
* Após receber o email com o aviso da geração do vídeo, volte para a página de Vídeo da sessão para realizar o download do vídeo.
:::

#### Aba Vídeo da sessão
| **Item** | **Descrição** |
|---|---|
| **Tamanho** | Tamanho final do vídeo gerado. |
| **Tempo** | Tempo total do vídeo gerado. |
| **Formato** | Tipo do formato do vídeo gerado. |
| **Download do vídeo** | Botão para realizar o download do vídeo. | 

:::(warning) (**Cuidado**)
Em vídeos de sessões do tipo **Database Proxy**, ao realizar consultas em tabelas do banco de dados, não será possível ter a visualização do registro dos resultados. Isso ocorre para a segurança das informações, no log somente estará registrado a mensagem de sucesso, em alguns casos com a quantidade de linhas que a consulta retornou, ou a mensagem de erro em casos de insucesso.
:::
