# Relatório

Neste relatório você encontra informações sobre:

## Ícones
| Item | Descrição |
| --- | --- |
| 	Mostrar os filtros	|	É identificado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela.	|
| 	Atualizar	|	É identificado pelo ícone da seta no sentido anti-horário. Atualiza a página.	|
| 	Exibir ações	|	É identificado pelo ícone de três pontos verticais. Exibe um menu suspenso com ações possíveis para os relatórios.	|
| 	Novo	|	Opção do menu suspenso identificado pelo ícone de “+”. Abre uma nova página para adicionar uma nova automação.	|
| 	Imprimir relatório	|	Opção do menu suspenso identificado pelo ícone da impressora. Abre uma nova página para impressão do relatório.	|
| 	Exportar CSV |	Opção do menu suspenso identificado pelo ícone da folha de papel. Baixa o relatório em formato CSV.	|
| 	Agendar relatório	|	Opção do menu suspenso identificado pelo ícone do relógio. Abre o formulário **Agendar relatório.**	|

* * *

## Campos de busca
| Item | Descrição |
| --- | --- |
| 	Código	|	Filtra pelo número de identificação da automação.	|
| 	Nome	|	Filtra pelo nome da automação.	|
|  Tipo | Filtra pelos tipos de autenticação: Autenticação Web e Autenticação de aplicativos. |
|  Caminho do aplicativo | Filtra pelo caminho do aplicativo no sistema. Por exemplo, **para aplicativos**: C:\Program Files (x86)\Microsoft SQL Server\110\Tools\Binn\ManagementStudio\Ssms.exe, %windir%\system32\mmc.exe, etc. **Para Web:** https://facebook.com, https://twitter.com, etc. |
| 	Tags	|	Filtra pelas tags utilizadas para ajudar na busca pela automação.	|
| 	Ativo	|	Filtra pelo estado de uma automação. Pode assumir dois valores: **Sim** ou **Não.**	|
| 	Filtrar	|	Botão para executar o processo de filtragem configurado.	|
| 	Limpar	|	Botão para limpar os campos preenchidos e iniciar uma nova busca.	|

Os resultados são exibidos em formato de lista, com colunas nomeadas conforme os campos correspondentes. A lista apresenta algumas informações que não constam nos campos de busca:

* **Criação:** exibe a data e o horário que a automação foi criada.	
* **Autor:** exibe o nome do usuário que criou a automação.

* * *

## Ação
| Item | Descrição |
| --- | --- |
| 	Alterar	|	Permite realizar alterações na automação cadastrada.	|
| 	Exibir ações |	É identificado pelo ícone de três pontos verticais. Exibe um menu suspenso com ações possíveis para os relatórios.	|
| 	Clonar	|	Permite clonar a automação cadastrada.	|
| 	Inativar  |	Permite inativar a automação.	|

* * *

## Automação agente GO Windows
Neste relatório você encontra informações sobre a descrição dos campos do agente **GO Windows** instalado em sua workstation.

### Descrição da aplicação Automation

* No canto superior esquerdo, está a barra de busca.
* No canto superior direito, está o botão atualizar.
* No centro, aparecem as automações configuradas na plataforma do senhasegura.
    * **Automação:** nome da automação.
    * **Tipo:** qual o tipo de execução da automação.
    * **Credencial associada:** mostra qual credencial está associada à automação. Podem existir dois tipos de automação, a cadastrada no módulo do **GO Endpoint Manager** e a que é cadastrada através do módulo **PAM Core** usando a funcionalidade **RemoteApp**. Veja abaixo a diferença entre elas.
        * **Automações RemoteApp:** são registradas no **PAM Core** para **RemoteApp** estão sempre associadas a uma credencial. Ao ter acesso à visualização da credencial, a execução da automação é permitida. Por exemplo, considere uma situação em que parâmetros de autenticação tenham sido configurados no **RemoteApp**, a automação será executada com base nas informações da credencial associada a ela.
        * **Automações:** são registradas no **GO Endpoint Manager para Windows** e são acessíveis aos usuários por meio de listas de acesso categorizadas como "automação". Caso haja parâmetros de autenticação configurados para a automação, a aplicação **GO Automation** solicitará ao usuário que selecione uma credencial para realizar a execução. No entanto, se não houver parâmetros de autenticação configurados, a seleção de uma credencial não será necessária.