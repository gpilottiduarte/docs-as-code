# Sobre a custódia de credenciais

A custódia de credenciais em sistemas de Gerenciamento de Acesso Privilegiado (PAM) diz respeito a prática de manter, de forma segura e criptografada, as credenciais utilizadas para autenticação de acesso a recursos privilegiados. Essa prática ajuda a proteger informações importantes do acesso não autorizado, garantindo que apenas pessoas autorizadas possam acessar as credenciais necessárias para fazer tarefas importantes no sistema.

## Minha custódia na plataforma Segura

:::(info) (Info)
No Segura, o processo de custódia de credenciais é análogo ao procedimento de account check-in, enquanto a liberação da custódia é análoga ao procedimento de account check-out.
:::

Acesse a área de custódia de credenciais da plataforma Segura a partir do **Grid Menu**, identificado pelos nove quadrados no canto superior esquerda, e então selecione **Pam Core**. No menu lateral, localize **Credenciais** e selecione a opção **Minha Custódia**.

As credenciais que o usuário em questão detém a custódia serão listadas na página principal.

:::(Info) (Info)
Para obter a custódia de uma credencial, basta que o usuário visualize a senha através da listagem de senhas na plataforma Segura. Essa custódia será usada para liberar o acesso e permitir que outros usuários acessem essa credencial.
:::

A custódia de senhas é organizada de acordo com o dispositivo ao qual esta credencial está atrelada (por exemplo: `AWS`, `100.66.120.101`, entre outros). Para saber mais sobre os dispositivos no contexto do Segura, acesse a documentação sobre [Dispositivos](/v4/docs/pt/devices). Para saber mais sobre credenciais, acesse a documentação sobre [Credenciais](/v4/docs/pt/pam-credentials).

## Filtro de credenciais

E possível filtrar as credenciais as quais o usuário tem a custódia. Para isso, use qualquer campo de filtro na parte superior da página inicial. Este filtro tem os seguintes campos:

| Campo | Descrição |
| --- | --- |
| **Código** | Código da credencial. |
| **Tipo de credencial** | Tipo da credencial. Pode ser: Usuário do domínio, Adminstrador local, Local User, Chave SSH. |
| **Dispositivo** | Dispositivo ao qual a credencial faz parte. |
| **Nome de usuário** | Nome de usuário cadastrado para a credencial. |
| **Informação adicional** | Informações adicionais cadastradas para a credencial. |
| **Situação** | Situação da credencial. Pode ser: Ativa ou Inativa. |
| **Filtrar** | Botão para filtrar os resultados conforme os valores preenchidos. |
| **Limpar** | Botão para limpar os campos e reiniciar a filtragem. |

Na listagem de credenciais, ainda tem-se outras informações:

- **Data de Expiração**: data que a credencial expira.
- **Última troca**: data da última troca de custódia da credencial.
- **Inicio da custódia**: data de início da custódia.
- **Última consulta**: data da última consulta à credencial.
- **Duração**: duração da última consulta à credencial.
- **Ação**: ao desmarcar o *checkbox* você libera a credencial para que outros usuários fiquem com a custódia. Para liberar a credencial, responda **Sim** quando aparecer o modal de confirmação.