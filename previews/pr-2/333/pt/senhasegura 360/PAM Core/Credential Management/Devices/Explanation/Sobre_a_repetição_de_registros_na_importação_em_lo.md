# Sobre a repetição de registros na importação em lote

Ao realizar uma Importação em Lote, é essencial compreender como as repetições são tratadas em cada cenário:

1. **Dispositivos Correspondentes**: quando um dispositivo preenchido na planilha possui o mesmo nome de um dispositivo já registrado no senhasegura, o dispositivo existente será atualizado com as novas informações da planilha.
2. **Mais de um Usuário para um Dispositivo:** se desejar registrar mais de um usuário em um mesmo dispositivo, é necessário repetir o processo de preenchimento dos campos obrigatórios do dispositivo na planilha. Isso manterá o dispositivo intacto e associará automaticamente as novas credenciais.
3. **Exclusão de Credenciais**: caso alguma credencial seja adicionada indevidamente e precise ser excluída, basta preencher a primeira coluna da planilha com a letra **D**. Isso efetivará a ação de exclusão e desativará a credencial correspondente.

## Ao importar o arquivo, os seguintes cenários serão considerados

- **Dispositivos e Credenciais Não Cadastrados**: serão criados registros dos dispositivos e das credenciais associadas a eles, caso ainda não existam no senhasegura.

:::(Info)(Info)
Ao inserir uma credencial não cadastrada, é importante incluir o hostname ou IP do dispositivo ao qual ela será associada.
:::

- **Dispositivos Cadastrados e Credenciais Não Cadastradas**: os registros associados ao dispositivo serão atualizados, e as credenciais serão cadastradas com as informações preenchidas na planilha.
- **Dispositivos e Credenciais Cadastrados:** os registros existentes serão atualizados com as informações preenchidas na planilha.