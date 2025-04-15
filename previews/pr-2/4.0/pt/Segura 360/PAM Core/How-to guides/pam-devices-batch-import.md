# Como realizar uma importação em Lote

## Como criar a importação

:::(Warning) (Atenção)
Leia as instruções sobre como os campos devem ser preenchidos na planilha.
As instruções podem ser encontradas no arquivo de modelo.
**Evite reutilizar planilhas, sempre utilize o modelo mais recente**.
:::

:::(error) (Alerta)
É importante observar que, ao importar credenciais para o Microsoft Excel, ele considera o caractere ponto e vírgula (;) como um separador. Devido a motivos técnicos relacionados à arquitetura do Excel, a planilha de importação desconsiderará o caractere ponto-e-vírgula e executará o processo de importação sem erros. Portanto, evite usar ponto e vírgula em suas credenciais ao importar via planilha. No entanto, se você cadastrar suas credenciais diretamente na plataforma, poderá usar ponto e vírgula sem problemas.
:::

Realize o upload do arquivo de importação. Para fazer isso, siga os seguintes passos:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione  **Dispositivos**.
2. No menu lateral, selecione **Importação em lote**.
3. No canto inferior direito, clique em **+ Importar.**
4. Na tela de **Importação em Lote**, clique em **Arraste e solte o arquivo aqui**, e selecione o arquivo desejado.
5. Clique em **Salvar**.

* * *

## Rastreamento do processamento de arquivos

Para verificar o upload do relatório, acesse **Dispositivos > Importação em lotes**

Os arquivos que ainda estão sendo processados ficarão em estado de espera, uma vez finalizado o processamento, o status será alterado para **Finalizado**.

No caso do processo ser invalidade, o registro ficará vermelho e a coluna **Erro** será marcada com **Sim**. 

:::(info) (Info)
Verifique os detalhes de processamento usando a ação de registro **Detalhes do processo**.
:::

Na tela de detalhes de importação, realize o download das informações geradas na operação. Este arquivo  terá a linha em que o detalhe ocorreu, o tipo de alerta e a descrição da ação tomada pela Segura .

É importante mencionar que mesmo que um arquivo tenha sido finalizado com um erro, isso não significa que os dispositivos e credenciais não foram criados ou alterados durante o processo. Portanto, corrija as informações indicadas pelo Segura e continue importando a planilha até que o resultado desejado tenha sido alcançado.

:::(info) (Info)
A planilha de importação de dispositivos em lote por padrão para outros idiomas está em inglês.
:::

***
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).