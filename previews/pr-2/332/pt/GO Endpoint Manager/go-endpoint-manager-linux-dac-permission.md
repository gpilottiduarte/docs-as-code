# Permissão

Neste artigo, você aprenderá como funciona a permissão DAC e como pode usá-la no Go Linux.

## Funcionamento da permissão DAC no Go Linux

O GO Endpoint Manager para Linux oferece suporte às máscaras de execução para a permissão do tipo Discretionary Access Control (DAC). Você pode utilizar valores variando de 0 a 07777 para definir as permissões.

* * *

## Descrição dos valores da Permissão DAC
Os valores seguem a seguinte distribuição:

* O primeiro valor, 0, indica o início da máscara de permissão para o sistema.
* O segundo valor refere-se as permissões especiais que um usuário pode ter.
* O terceiro valor refere-se as permissões de escrita, leitura e execução para o dono do arquivo ou diretório.
* O quarto valor refere-se as permissões de escrita, leitura e execução para o grupo em relação ao arquivo ou diretório.
* O quinto valor refere-se as permissões de escrita, leitura e execução para outros usuários do arquivo ou diretório.

* * *

## Valores da Permissão DAC
Na tabela abaixo, temos as faixas de valores e constantes específicas:


| Constantes | Intervalos de valores para o path.perm |
| --- | --- |
| setuid | 04000 até 07777. |
| setgid | 02000 até 03777 e 06000 até 07777. |
| sticky | 01000 até 01777, 03000 até 03777, 05000 até 05777, e 07000 até 07777. |
| owner_read | 00400 até 00777,  01400 até 01777, e 02400 até 02777. |
| owner_write | 00200 até 00377, 00600 até 00777, e 01200 até 01377. |
| owner_execute | 00100 até 00177, 00300 até 00377, e 00500 até 00577. |
| group_read | 00040 até 00077, 00140 até 00177, e 00240 até 00277. |
| group_write | 00020 até 00037, 00060 até 00077, e 00120 até 00137.|
| group_execute | 00010 até 00017, 00030 até 00037, e 00050 até 00057. |
| others_read | 00004 até 00007, 00014 até 00017, e 00024 até 00027. |
| others_write | 00002 até 00003, 00006 até 00007, e 00012 até 00013. |
| others_execute | 00001 até 00003, 00005 até 00007, e 00011 até 00013. |


* * *

## Próximos passos

* [Como criar uma política de acesso de permissão DAC](/v3-32/docs/pt/go-endpoint-manager-linux-create-dac-permission-policy).