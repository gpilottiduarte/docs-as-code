# Painel


Este documento fornece informações sobre a tela **Painel** do **MySafe** que possibilita que o administrador tenha uma visão geral das interações dos usuários com o **MySafe**.

## Requisitos

* Permissão de administrador do **MySafe**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **MySafe.**  
2. No menu lateral, selecione **Administração global \> Painel.**  
     
     
 ---

## Cards

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Total de usuários** | Card clicável | Total de usuários ativos no **MySafe**. Abre a tela do relatório **Total de usuários** que exibe dados dos usuários. |
| **Exclusivos** | Card clicável | Total de usuários ativos que possuem acesso apenas ao **MySafe.** Abre a tela do relatório **Exclusivos** que exibe dados dos usuários. |
| **Usuários sem itens** | Card clicável | Total de usuários ativos e com acesso ao **MySafe**, mas que não possuem nenhum item adicionado e ativo. Abre a tela do relatório  **Usuários sem itens** que exibe dados dos usuários. |
| **Total de itens** | Card | Soma da quantidade de *Senhas, Anotações, Arquivos e Segredos de API* ativos no **MySafe.** |
| **Grupos** | Card | Total de grupos pessoais ativos no **MySafe.** |
| **Consumo de disco** | Card | Total de espaço em disco ocupado pelos itens armazenados no **MySafe.** |

## Gráficos

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Itens por tipo** | Gráfico de donut | Exibe as quantidades de itens ativos agrupados por *Senha, Anotações, Arquivos e Segredos de API*. |
| **Itens criados por dia** | Gráfico XY | Exibe a quantidade de itens criados nos últimos 7 dias e divididos por *Senha, Anotações, Arquivos e Segredos de API*. |
| **Senhas por força** | Gráfico de pizza | Exibe o total de senhas ativas, agrupadas pelo nível de força. Os níveis de força incluem *Muito fraca, Fraca, Boa, Muito forte* e *Não definido*. <br>**Nota:** o nível **Não definido** se aplica quando, em versões anteriores, o campo **Senha** foi deixado vazio durante a criação ou edição de uma credencial. |
| **Compartilhamento** | Gráfico XY | Exibe o total de compartilhamentos internos, representados por barras, e compartilhamentos externos, representados por linhas, de itens do **MySafe**, nos últimos 7 dias. |

## Lista

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Locais mais usados** | Tabela | Exibe os sites com maior número de senhas armazenadas no **MySafe.** Cada site apresenta informações como *Domínio*, data da *Última criação* e *Total de senhas* associadas a cada site.  |