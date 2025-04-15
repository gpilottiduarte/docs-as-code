# Sobre o Orbit CLI

**Orbit CLI** é o console do senhasegura criado para fornecer ferramentas para configuração do sistema e rotinas administrativas. 

Com essa ferramenta, os administradores podem facilmente conectar-se a serviços de rede, garantir que os binários estejam sempre atualizados e realizar operações essenciais de manutenção e configuração de forma centralizada. Isso reduz a complexidade da gestão do sistema, aumenta a eficiência das operações e permite uma administração mais ágil e segura.

## Principais funcionalidades

1. **Atualização do sistema:** A atualização do sistema é uma operação exclusiva do **Orbit CLI**.

1. **Configuração de Cluster:** A configuração de clusters é uma operação que pode ser realizada tanto através da interface web quanto do **Orbit CLI**. 

1. **Configuração de rede:** A configuração de rede é uma operação exclusiva do **Orbit CLI**.

1. **Configuração de Backup:** O backup pode ser configurado tanto através da interface de web quanto através do **Orbit CLI**.

:::(Warning) (Atenção)
Essas operações requerem privilégios elevados, sendo restritas aos usuários `root` e `mt4adm`. É importante destacar que, no caso do usuário `mt4adm` é necessário executar o comando com a permissão de **superusuário (sudo)**, caso contrário, o **Orbit CLI** retornará a mensagem:
```
mt4adm@vmdf-senseg:~$ orbit -h
This program must be run with root permissions!
```
:::


