## Visão geral

As configurações segregadas são utilizadas para cenários específicos de uma workstation. Esta funcionalidade está disponível em: 

* Controle de diretórios e arquivos
* Scan de diretórios e arquivos
* Parâmetros segregados
* Listas de acesso
* Comandos

  


Para segregação por usuário, a funcionalidade está disponível em: 

* Parâmetros segregados
* Comandos



---

## Configurar os parâmetros segregados para workstations

A workstation pode pertencer a um usuário que demanda atenção especial ou uso diferenciado.

Para configurar um parâmetro segregado, siga as etapas:

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager ➞****Configurações ➞****Parâmetros segregados.**
3. Clique em **⁝** e selecione a opção **Nova segregação para workstations.**
4. Dê um nome para a segregação e defina o status.
5. Na aba **Geral**, defina os parâmetros desejados para a workstation.
6. Na aba **Workstations**, defina as workstations para as quais os parâmetros serão aplicadas.
7. Clique em **Salvar.**



---

## Parâmetro segregado para usuários

A segregação para usuários permite que os usuários que fazem parte do módulo do GO Endpoint Manager possam ter acesso as suas máquinas quando utilizam mais de uma workstation. Em casos que o usuário precisa acessar várias workstations diferentes, você pode criar uma única política para o usuário em vez de uma política para cada máquina. A segregação para o usuário também se aplica se houver sobreposição de uma lista para o usuário e a estação de trabalho. A regra será aplicada e respeitará a ordem de prioridade primeiro lista de permissões, lista de proibições e parâmetros.  


InfoOs usuários que utilizam mais de uma workstation apareceram duas vezes no mesmo relatório. Na lista de segregação o usuário aparece uma única vez.  




---

## Configurar os parâmetros segregados para usuários

Para configurar um parâmetro segregado, siga as etapas:

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager➞Configurações➞Parâmetros segregados.**
3. Clique em**⁝**e selecione a opção **Nova segregação para usuários.**
4. Dê um nome para a segregação e defina o status.
5. Na aba **Geral**, defina os parâmetros desejados para o usuário.
6. Na aba **Usuários**, defina os usuários aos quais os parâmetros se aplicam.
7. Clique em **Salvar.**



---

## Combinações de parâmetros

Os parâmetros segregados têm prioridade sobre os parâmetros globais. Assim, são possíveis quatro situações:

CuidadoO padrão do sistema considera as configurações definidas no parâmetro global.  




| Combinações | Parâmetro global | Parâmetro segregado | Status final |
| --- | --- | --- | --- |
| Situação 1 | Inativo | Ativo | Parâmetro segregado \= ativo |
| Situação 2 | Ativo | Inativo | Parâmetro segregado \= inativo |
| Situação 3 | Ativo | Padrão do sistema | Parâmetro global \= ativo |
| Situação 4 | Inativo | Ativo | Parâmetro segregado \= ativo |
| Situação 5 | Inativo | Inativo | Parâmetro segregado \= inativo |
| Situação 6 | Inativo | Padrão do sistema | Parâmetro global \= inativo |

  




---

## Leia mais

* [Telas comuns](https://docs.senhasegura.io/v3-33/docs/pt/general-information-graphical-user-interface?highlight=telas%20comuns#telas-comuns)

  


