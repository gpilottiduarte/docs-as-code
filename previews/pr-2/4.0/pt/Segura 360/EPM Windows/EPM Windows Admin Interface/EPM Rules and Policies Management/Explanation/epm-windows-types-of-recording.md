# Gravação de sessões

Este documento descreve como configurar parâmetros para gravação de sessões no Segura EPM.

## Possiveis cenarios de gravação de sessões
O parâmetro global (ou parametro segragado) e a [politica de acesso](/v4/docs/epm-windows-how-to-create-access-policy) estão habilitados e relacionados à gravação.
Aplicações incluídas na Politica de acesso de acesso serão gravadas, incluindo aplicações fora do EPM Windows.
O parâmetro global está ativo e não há lista de acesso existente.
Qualquer operação no EPM Windows será gravada.
Quando o usuário inicia um processo JIT, todas as suas ações são auditadas por vídeo e encaminhadas para o servidor Segura, semelhante a uma elevação RunAs.

## Tipos de gravações

1. Qualquer execução:  
   * Aplicações principais (executar, painel de controle, adaptadores de rede, desinstalar).  

2. Just-in-time:  
   * Toda a sessão é gravada até que o usuário faça logoff ou cancele o just-in-time.  

3. Automação:  
   * Toda a automação é realizada no processo.  

::: (error) (Alerta)  
Ações realizadas em Adaptadores de Rede e retirada de credenciais não são gravadas.  
:::