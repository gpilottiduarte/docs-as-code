# Arquivos trafegados

Neste documento, você encontrará todas as informações sobre o relatório com os arquivos transferidos durante uma sessão remota.

:::(info) (**Info**)
Para ativar o rastreio dos arquivos transferidos durante uma sessão, acesse o documento sobre [Como habilitar uma transferência de arquivo em sessões remotas](/v3-33/docs/pt/pam-session-activate-remote-session-file-transfer).
:::

### Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Controle de acesso** > **Arquivos trafegados**.
***

## Barra superior
**Item**|**Descrição**
|---|---|
**Mostrar os filtros**|Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela.
**Atualizar**|Representado pelo ícone da seta no sentido anti-horário, atualiza a página.
**Exibir ações**|Representado pelo ícone de três pontos verticais, exibe as ações possíveis para a página.
**Imprimir relatório**|Representado pelo ícone de impressora, abre uma nova página para impressão do relatório.
**Exportar CSV**|Representado pelo ícone de folha de papel, baixa o relatório.
| **Agendar relatório** | Representado pelo ícone de relógio, abre o formulário para agendar a geração do relatório em uma data e hora específicas. |


## Campos de Busca

**Item**|**Descrição**
|---|---|
**Arquivo**|Nome do arquivo com a extensão.
**MIME Type**|Tipo de mídia do arquivo que foi transferido. Por exemplo: text/x-shellscript, text/html, text/plain, inode/x-empty, image/jpeg, image/png, entre outros.
**SHA256 Checksum**|Sequência alfanumérica única que verifica a integridade e autenticidade dos dados
**Inclusão**|Data e hora em que foi realizada a transferência do arquivo na sessão.
**até**|Data final para a busca dos registros de transferência dos arquivos.
**IP do usuário**|Número do IP do usuário que realizou a transferência.
**Usuário**|Nome do usuário que realizou a transferência.
**Host**|Número do IP host da sessão. 
**Porta**|Número da porta usada na sessão.
**Usuário remoto**|Usuário remoto dono da sessão.

## Campos do relatório

* **Código**: número de identificação da ordem de transferência de arquivos realizadas.
* **Arquivo**.
* **Size Bytes**: tamanho do arquivo transferido em bytes.
* **MIME Type**.
* **Inclusão**.
* **Cód. do usuário**: código de cadastro do usuário.
* **IP do usuário**.
* **Host**.
* **Porta**.
* **Usuário remoto**.
* **SHA256 Checksum**.
* **Detalhe**: informações adicionais da transferência.

:::(info) (**Info**)
O relatório exibe 30 registros por tela. Para ir para as próximas telas, clique nos botões de avançar ao final do relatório.
:::
