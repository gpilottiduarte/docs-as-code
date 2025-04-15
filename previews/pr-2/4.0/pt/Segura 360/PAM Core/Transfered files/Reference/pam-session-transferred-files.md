# Arquivos transferidos

Este documento fornece informações sobre a tela do relatório **Arquivos transferidos**, onde se encontra a relação de transferências de arquivos (*download* e *upload*) realizadas durante uma sessão remota.

Para rastrear os arquivos transferidos é necessário habilitar este parâmetro. Saiba mais em Como habilitar uma transferência de arquivo em sessões remotas.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Auditoria > Sessões > Arquivos transferidos**.

---
## Menu de ações

| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de Busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Arquivo** | Campo de texto | Filtra as transferências pelo nome do arquivo com a extensão. |
| **MIME Type** | Campo de texto | Filtra as transferências pelo tipo de mídia do arquivo que foi transferido. Por exemplo: *text/x-shellscript*, *text/html*, *text/plain*, *inode/x-empty*, *image/jpeg*, *image/png*, entre outros. |
| **SHA256 Checksum** | Campo de texto | Filtra as transferências pela sequência alfanumérica única que verifica a integridade e autenticidade dos dados |
| **Inclusão** | Campo de texto | Filtra as transferências pelo período em que foi realizada a transferência do arquivo na sessão. |
| **IP do usuário** | Campo de texto | Filtra as transferências pelo número do IP do usuário que realizou a transferência. |
| **Usuário** | Campo de texto | Filtra as transferências pelo nome do usuário que realizou a transferência. |
| **Host** | Campo de texto | Filtra as transferências pelo número do IP host da sessão.  |
| **Porta** | Campo de texto | Filtra as transferências pelo número da porta usada na sessão. |
| **Usuário remoto** | Campo de texto | Filtra as transferências pelo usuário remoto dono da sessão. |

## Campos do relatório

* **Código:** número de identificação da ordem de transferência de arquivos realizadas.  
* **Arquivo.**  
* **Size Bytes:** tamanho do arquivo transferido em bytes.  
* **MIME Type.**  
* **Inclusão.**  
* **Cód. do usuário:** código de cadastro do usuário.  
* **IP do usuário.**  
* **Host.**  
* **Porta.**  
* **Usuário remoto.**  
* **SHA256 Checksum.**  
* **Detalhe:** texto com informações adicionais da transferência.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::
