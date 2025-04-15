# Relatório de Identidades

O Cloud Entitlements oferece um relatório das identidades registradas nas contas dos seus Provedores de Serviços em Nuvem (CSP). Neste artigo você encontra uma descrição das informações contidas no relatório. 

Para acessar o **Relatório de Identidades**, clique em **Identidades**, localizado no menu lateral esquerdo.



| **Item** | **Descrição** |
| --- | --- |
| **Provedor de Serviços em Nuvem** |Exibe um ícone que representa o CSP associado à identidade.
|**Ambiente** |Informa o nome do ambiente dentro do Cloud Entitlements ao qual a identidade está associada.
| **Tipo** |Indica o tipo da identidade. |
| **Principal** | Fornece o nome da identidade dentro do CSP. |
| **Impacto** | Fornece o nível de risco associado ao impacto da identidade em seu ambiente. O nível de impacto é categorizado de A a E, onde A representa o impacto mais baixo e E representa o mais alto. |
| **Recomendações**| Indica o número de recomendações vinculadas à identidade. Os níveis de criticidade das recomendações são indicados por cores. Vermelho indica alto, laranja indica médio e amarelo indica baixo.
| **Última atualização do scan** |Informa a data e hora exatas em que ocorreu a sincronização com a identidade.

::: (error) (Importante)
Se uma chave de acesso da conta AWS não for mais válida, um alerta vermelho será exibido ao lado do ícone da conta e, como resultado, a data e hora da última sincronização de varredura não serão mais atualizadas.
:::
::: (info) (Info)
O Cloud Entitlements escaneia os ambientes a cada 4 minutos.
:::


Utilize a barra de pesquisa na parte superior do relatório para buscar uma identidade específica.

Ao lado da barra de pesquisa, você encontrará filtros que permitem refinar o relatório com base em:

* Provedor.
* Ambiente.
* Tipo de Identidade.
* Administrador.


::: (info) (Info)
Você pode combinar filtros para aprimorar seus resultados de pesquisa.
:::

Os relatórios podem ser exportados para o formato CSV clicando no botão representado por uma flecha apontando para baixo, localizado na lateral direita do relatório.