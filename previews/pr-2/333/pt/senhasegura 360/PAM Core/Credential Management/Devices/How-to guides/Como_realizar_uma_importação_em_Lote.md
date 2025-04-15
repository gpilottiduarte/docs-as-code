# Como realizar uma importação em Lote

## Como criar a importação

:::(Warning) (Atenção)
Leia as instruções sobre como os campos devem ser preenchidos na planilha.
As instruções podem ser encontradas no arquivo de modelo.
**Evite reutilizar planilhas, sempre utilize o modelo mais recente**.
:::

:::(error) (Importante)
É importante observar que, ao importar credenciais para o Microsoft Excel, ele considera o caractere ponto e vírgula (;) como um separador. Devido a motivos técnicos relacionados à arquitetura do Excel, a planilha de importação desconsiderará o caractere ponto-e-vírgula e executará o processo de importação sem erros. Portanto, evite usar ponto e vírgula em suas credenciais ao importar via planilha. No entanto, se você cadastrar suas credenciais diretamente na plataforma, poderá usar ponto e vírgula sem problemas.
:::

Realize o upload do arquivo de importação. Para fazer isso, siga os seguintes passos:

1. Na plataforma senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Dispositivos**.
2. No menu lareral, selecione **Importação em lote**.
3. Na barra superior, clique em **Exibir ações**, representado pelos três pontos verticais,  e selecione a opção **+ Importar**.
4. Na janela pop-up, clique em **Escolher arquivo**, e selecione o arquivo desejado.
5. Clique em **Importar dados**.

* * *

## Rastreamento do processamento de arquivos

Para verificar o upload do relatório, acesse **Dispositivos > Importação por lotes**

Os arquivos que ainda estão sendo processados ficarão em estado de espera, uma vez finalizado o processamento, o status será alterado para **Finalizado**.

No caso do processo ser invalidade, o registro ficará vermelho e a coluna **Erro** será marcada com **Sim**. 

:::(Info) (Info)
Verifique os detalhes de processamento usando a ação de registro **Detalhes do processo**.
:::

Na tela de detalhes de importação,realize o download das informações geradas na operação. Este arquivo  terá a linha em que o detalhe ocorreu, o tipo de alerta e a descrição da ação tomada pela senhasegura .

É importante mencionar que mesmo que um arquivo tenha sido finalizado com um erro, isso não significa que os dispositivos e credenciais não foram criados ou alterados durante o processo. Portanto, corrija as informações indicadas pelo senhasegura e continue importando a planilha até que o resultado desejado tenha sido alcançado.

:::(Info) (Info)
A planilha de importação de dispositivos em lote por padrão para outros idiomas está em inglês.
:::

***

## Próximos passos
1. [Como realizar o download do arquivo modelo para importação em lote](/v3-33/docs/pt/pam-devices-batch-import-template).
2. [Referência do arquivo modelo de importação em lote](/v3-33/docs/pt/pam-batch-import-template-file-reference).
3. [Sobre a repetição de registros na importação em lote](/v3-33/docs/pt/pam-about-the-repetition-of-records-in-batch-import).
4. [Sobre o Preenchimento do arquivo modelo](/v3-33/docs/pt/pam-about-filling-in-the-template-file).

***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).