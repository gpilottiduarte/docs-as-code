# Sobre o Preenchimento do arquivo modelo

Para realizar uma importação correta, é crucial verificar se as entidades foram preenchidas adequadamente. Caso contrário, pode haver registros desnecessários de dispositivos ou credenciais.

A planilha de importação pode ser utilizada tanto para atualizar dispositivos e credenciais já cadastrados no ambiente quanto para inserir novos registros. Ao fazer o download do arquivo modelo, você deve preencher a planilha com os valores necessários.

## Ação para Registro

Neste campo, é necessário indicar a ação a ser realizada em relação aos registros da planilha. Use **I** para inserir, **U** para atualizar e **D** para excluir registros.

## Observação

Se esse campo permanecer em branco, o sistema buscará pelos dispositivos e/ou credenciais. Se não forem encontradas referências, a ação padrão será inserir novos registros. Por outro lado, se forem encontradas referências, a ação padrão será atualizar os dados existentes.

## Cuidado

Caso existam dispositivos ou credenciais inativas no Segura com os mesmos nomes na tabela de importação, esses registros não serão criados novamente. Em vez disso, os dispositivos e credenciais inativos serão atualizados, e você precisará ativá-los manualmente, se necessário.