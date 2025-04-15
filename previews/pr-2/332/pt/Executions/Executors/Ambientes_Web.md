Os executores do senhasegura representam *protocolos*, *conectividade de sistemas* e a capacidade de interagir nativamente.

As execuções ocorrerão somente quando o artefato de destino (por exemplo, credencial a ser alterada) estiver configurado com um executor e um template a ser utilizado. Cada **Template** pertence a apenas um **Executor**.

Cada executor pode interagir com um sistema. A camada de abstração senhasegura permite que nossa equipe de desenvolvimento crie executores para alcançar protocolos, provedores de nuvem, APIs, interfaces de sites, comandos de SO, etc.

  




---

## Ambientes Web

AtençãoAs instruções em um modelo de execução não podem conter nenhuma interação humana, como um MFA, durante a execução ou podem não funcionar conforme o esperado.  
Por exemplo, se um modelo de execução alterar uma senha de usuário e exigir qualquer autenticação multifator, a operação para alterar a senha não funcionará.



| Executor | Descrição |
| --- | --- |
| **cURL** | Executor de requisições para páginas web simples. Páginas sem ambiente JavaScript ou eventos HTML. Você pode usar este executor para sistemas legados baseados em arquitetura HTML4 pura |
| **HTTP** | Executor de requisições a páginas web complexas onde é necessária mais interatividade utilizando elementos JavaScript e triggers de eventos |
| **Selenium** | Selenium é uma solução de automação de aplicações web criada para dar suporte a equipes durante testes automatizados, simulando um usuário |



---

## Protocolos diversos



| Executor | Descrição |
| --- | --- |
| **LDAP** | Interatividade com navegações e operações em servidores LDAP |
| **SSH** | Execução de comandos através de uma conexão SSH |
| **SSH Legacy** | Execução de comandos via conexão SSH de dispositivos legados e versões SSH antigas |
| **Telnet** | Execução de comandos através de uma ligação Telnet |



---

## Ambientes Windows



| Executor | Descrição |
| --- | --- |
| **Windows RM** | Interatividade com dispositivos Windows através do Windows RM |
| **Windows RPC** | Interatividade com dispositivos Windows através do Windows RPC. É possível executar comandos via PowerShell |



---

## Bancos de dados

InfoO senhasegura pode interagir com um grande número de bancos de dados. Sua implementação pode ser solicitada à nossa equipe de Vendas ou Suporte, se necessário. Por padrão, o senhasegura vem com apenas esses quatro principais fornecedores de banco de dados instalados.



| Executor | Descrição |
| --- | --- |
| **MySQL** | Execução de comandos em banco de dados MySQL |
| **Oracle** | Execução de comandos em banco de dados Oracle |
| **PostgreSQL** | Execução de comandos em banco de dados PostgreSQL |
| **SQL Server** | Execução de comandos em banco de dados SQL Server |
| **MongoDB** | Execução de comandos em um banco de dados Cassandra |
| **Cassandra** | Execução de comandos em um banco de dados Cassandra |
| **Elasticsearch** | Execução de comandos em um banco de dados Elasticsearch |



---

## Produtos e binários específicos



| Executor | Descrição |
| --- | --- |
| **Tk Expect** | Interatividade binária no dispositivo remoto via conexões SSH, Telnet, SQL\*Plus ou TDS (Tabular Data Stream). Perfeito para interagir em aplicativos de linha de comando onde a interface precisa ser interpretada |
| **VMWare ESXi** | Alterar senhas usando o cliente VMWare ESXi |
| **x3270: IBM Terminal Emulator** | x3270 abre uma conexão telnet com um host IBM em uma janela X. Ele implementa RFCs 2355 (TN3270E), 1576 (TN3270\) e 1646 (seleção de nome de LU) e suporta transferência de arquivo IND$FILE. A janela criada pelo x3270 pode usar sua fonte para exibir caracteres, portanto, é uma representação relativamente precisa de um IBM 3278 ou 3279\. É semelhante ao tn3270(1\), exceto que é baseado em X, não baseado em curses |
| **IBM 3270 Terminal** | O s3270 abre uma conexão telnet com um host IBM e permite que um script controle a sessão de login do host. Ele é derivado do x3270(1\), um emulador do X\-windows IBM 3270\. Ele implementa RFCs 2355 (TN3270E), 1576 (TN3270\) e 1646 (seleção de nome de LU) e suporta transferência de arquivo IND$FILE |

  


