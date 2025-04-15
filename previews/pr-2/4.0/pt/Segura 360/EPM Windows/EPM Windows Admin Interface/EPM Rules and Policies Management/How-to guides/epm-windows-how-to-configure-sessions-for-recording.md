# How to configure sessions for recording

Este documento descreve como configurar parâmetros para gravação de sessões no **Segura EPM**.

::: (info) (Regras de Gravação do EPM Agent) 
A lógica de gravação do agente para aplicações executadas usando o Go Agent é influenciada pelas regras da lista de acesso da seguinte forma:

* Access List com Não Gravação de Aplicações: Se uma aplicação estiver na lista marcada para impedir gravação, ela não será gravada.  
* Ausência de uma Access List: Se não houver lista, a aplicação não será gravada.  
* Access List com Gravação Permitida: Uma aplicação será gravada apenas se estiver em uma Access List com permissão de gravação e não houver outra Access List negando a gravação para essa aplicação.
:::

## Como habilitar gravação de sessões nos parametros

1. No **Segura**, na barra de navegação, passe o mouse sobre o **Menu de Produtos** e selecione **EPM**.  
2. No menu lateral, selecione **Gerenciamento \> Configurações \> Parâmetros**.  
3. Encontre a seção **Configurações Gerais**.  
4. Marque a opção **Habilitar gravação de sessão?\*** como **Sim**.  
5. Clique em **Salvar**.
