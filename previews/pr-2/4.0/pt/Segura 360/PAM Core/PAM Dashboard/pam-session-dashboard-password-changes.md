# Trocas de senhas

Este documento fornece informações sobre o dashboard **Trocas de senhas**, que traz as informações das trocas de senhas efetuadas no Segura.

:::(info) (**Info**)  
O dashboard poderá ser acessado apenas por usuários que possuam a permissão de administrador ou de auditor do sistema.  
:::

A quantidade de credenciais e seus status são apresentadas considerando as seguintes regras:

* As credenciais filhas só serão consideradas neste dashboard se suas respectivas credenciais pais estiverem com a troca automática ativa. Em alguns casos o sistema não agenda uma troca específica para a credencial filha, criando e executando a troca no momento da execução da troca da credencial pai.   
* Os cards de Aguardando e Erro não vão exibir necessariamente a soma de Atualizadas e Expiradas, pois dependem do comportamento de cada troca.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Dashboard > Trocas de senhas.**

---

## Fluxo de senhas

| **Item** | **Descrição** |
| :---- | :---- |
| **Total** | Exibe o número total de credenciais existentes. |
| **Gerenciadas** | Exibe o número de credenciais com senhas gerenciáveis. |
| **Não gerenciadas** | Exibe o número de credenciais sem troca automática de senha habilitada. |
| **Atualizadas** | Exibe o número de credenciais com senhas atualizadas. |
| **Expiradas** | Exibe o número de credenciais com senhas expiradas. |
| **Aguardando** | Exibe o número de credenciais com senhas aguardando a troca de senha. |
| **Erro** | Exibe o número de credenciais que ocorreu erro na troca de senha. |

## Gráficos

| **Item** | **Descrição** |
| :---- | :---- |
| **Trocas por site** | Exibe a relação dos sites e os status da tentativa de troca de senha. |
| **Trocas executadas com sucesso** | Exibe as trocas que tiveram sucesso em sua execução, divididas por datas. |
| **Status da execução** | Exibe os possíveis problemas de execução. As opções são: *Nenhum problema*, *Algum problema com até dois robôs simultaneamente (todos ativos)* e *Algum problema com 3 robôs simultaneamente ou um dos robôs inativos*. |