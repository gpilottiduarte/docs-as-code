# Referência para filtragem de credenciais

Para acessar o relatório de credenciais, acesse **Grid Menu > PAM Core > Credenciais > Todas.**

## Barra superior

| Item                          | Descrição                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------------ |
| **Mostrar os filtros**  | Representado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela.          |
| **Atualizar**           | Representado pelo ícone da seta no sentido anti-horário. Atualiza a página.                   |
| **Exibir ações**      | Representado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Novo**                | Representado pelo ícone de adição, abre o formulário de cadastro de credencial.              |
| **Imprimir relatório** | Representado pelo ícone de impressora. Abre uma nova página para impressão do relatório.     |
| **Exportar CSV**        | Representado pelo ícone de folha de papel, baixa o relatório.                                  |
| **Agendar relatório**  | Representado pelo ícone do relógio, abre a janela para efetuar o agendamento do relatório.    |

Ao clicar em **Mostrar filtros**, uma série de campos é mostrada. Eles são utilizados para refinar os resultados da sua busca. São eles:

| Campo                            | Descrição                                                                                                                                                    |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Código**                | Filtra pelo código de cadastro da credencial no senhasegura.                                                                                                  |
| **Dispositivo**            | Filtra pelo dispositivo cadastrado no senhasegura ao qual a credencial está atrelada.                                                                         |
| **Nome do usuário**       | Filtra pelo nome do usuário cadastrado no senhasegura.                                                                                                        |
| **Tipo de credencial**     | Menu suspenso. Filtra pelo tipo de credencial.<br />As opções são: *Domain Admin, Usuário do domínio, Administrador local, Local User e Chave SSH.*      |
| **Just in time (JIT)**     | Menu suspenso. Filtra levando em conta se credencial tem acesso JIT ativado. Pode ser **Sim** ou **Não**.                                          |
| **Informação adicional** | Filtra pela informação adicional que tenha sido cadastrada junto à credencial.                                                                              |
| **Tipo de dispositivo**    | Menu suspenso. Filtra de acordo com o tipo de dispositivo.                                                                                                     |
| **Modelo**                 | Filtra de acordo com o modelo do dispositivo ao qual a credencial está atrelada.                                                                              |
| **Fabricante**             | Menu suspenso. Filtra pelo fabricante do dispositivo que a credencial está atrelada.                                                                          |
| **Domínio**               | Menu suspenso. Filtra pelo domínio da credencial.                                                                                                             |
| **Site**                   | Menu suspenso. Filtra pelo site que está cadastrado no senhasegura.                                                                                           |
| **Conectividade**          | Menu suspenso. Filtra de acordo com o protocolo de conectividade que a credencial possui.                                                                      |
| **Tags da credencial**     | Filtra de acordo com as tags que estão atreladas à credencial.                                                                                               |
| **Tags do dispositivo**    | Filtra de acordo com as tags que estão atreladas ao dispositivo.                                                                                              |
| **Identificador**          | Campo de texto, filtra de acordo com a Identificação da senha para acesso via webservice.                                                                    |
| **Situação**             | Menu suspenso. Filtra pelo status da credencial no senhasegura. Pode ser **Ativo** ou **Inativa**.                                                  |
| **Última utilização**   | Abre um calendário para que você escolha a última data em que a credencial foi utilizada. Essa data servirá como data inicial do intervalo do filtro. |
| **até**                   | Abre um calendário para que você escolha a última data em que a credencial foi utilizada. Essa data servirá como data final do intervalo do filtro.   |
| **Senha preenchida?**      | Menu suspenso. Filtra de acordo com o estado de preenchimento do campoSenhada credencial. Pode ser **Sim** ou **Não**.                             |

Além dessas opções, você tem dois botões: **Filtrar**, que aplica os parâmetros que foram passados nos campos e **Limpar**, que limpa todos os parâmetros.

Abaixo, será apresentada a listagem de todas as credenciais e dispositivos que estiverem de acordo com os critérios de filtragem. Os resultados são agrupados por dispositivo e apresentados da seguinte forma:

* **Nome do dispositivo**: indica o nome do dispositivo no senhasegura seguido do endereço de IP ou hostname, quando aplicável.
  * Por exemplo: `Debian10 (127.0.0.1)`.
    * O nome do dispositivo é seguido por algumas informações sobre o dispositivo, obedecendo a ordem: **Tipo de dispositivo | Modelo do dispositivo | Site do dispositivo | Código do dispositivo.**
      * Por exemplo: **Server | Ubuntu | Local | 100.**

:::(info) (Info)
Note que o nome do dispositivo é clicável. Ao clicar no nome do dispositivo você será direcionado para a janela de **Cadastro do dispositivo**. Para maiores informações sobre essa janela, acesse a referência sobre dispositivos ou o documento sobre como adicionar um dispositivo ao senhasegura.
:::

Assim, dentro de cada seção agrupada por dispositivo, você tem as informações sobre as credenciais que estão atreladas ao dispositivo e que condizem com os critérios de filtragem aplicados. Os campos das credenciais são apresentados conforme abaixo:

* **Código**.
* **Tipo**.
* **Just in time (JIT).**
* **Nome de usuário.**
* **Adicional**: refere-se a informação adicional. Este campo é preenchido ao cadastrar uma nova credencial, mais especificamente no campo **Informação adicional** do formulário de cadastro de credencial.
* **Domínio**.
* **Tags**.
* **Última consulta**: refere-se à última consulta à credencial.
* **Estado da sessão.**
* Na coluna **Ação**, você tem três opções:
  * **Iniciar sessão**: representado pelo ícone do computador, inicia a sessão no dispositivo indicado com a credencial indicada.
  * **Visualizar**: abre o formulário de Exibição e transferência de senha segura da credencial.
  * **Três pontos verticais:** abre o menu suspenso com as ações possíveis para a credencial. São elas:
    * **Detalhes.**
    * **Histórico.**
    * **Editar.**
    * **Clonar.**
    * **Acesso excepcional.**
    * **Excluir.**