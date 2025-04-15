# Sobre compatibilidade com MS SQL Server legado

Por padrão, o **Database Proxy** do senhasegura suporta as seguintes versões:

* 2016
* 2017
* 2019
* 2022 

Ao utilizar as versões listadas acima com o **MS SQL Server** em conjunto com o *client* **DBeaver**, não é necessário realizar alterações na configuração padrão.

Entretanto, ao utilizar o **MS SQL Server** com o *client* **MS SQL Management Studio**, algumas alterações na configuração padrão são necessários. 

## MS SQL Server legado com MS SQL Management Studio

Devido às diferenças existentes no ciclo de pré-autenticação entre as versões atuais e legadas do **MS SQL Server**, ao usar o **Database Proxy** em conjunto com o *client* **MS SQL Management Studio** somente serão suportadas as versões mais recentes do **MS SQL Server**, sendo elas a 2022 (16.0.1125.1) e 2019 (15.0.2120.1).

Caso o **MS SQL Server** seja utilizado com as versões legadas 2017 (14.0.2060.1) ou anteriores, com o modo legacy ativo, a exibição da lista de tabelas disponíveis poderá apresentar inconsistências. 

Para mais informações sobre as versões do **MS SQL Server**, acesse o [link](https://learn.microsoft.com/en-us/troubleshoot/sql/releases/download-and-install-latest-updates){target=`_blank`} oficial.

## Habilitando o modo legado para o Database Proxy

Caso seja necessário fazer o uso da versão legada 2017 ou anterior, o **Database Proxy** do senhasegura conta com a opção de habilitar o modo legado de forma global, através do arquivo de configuração padrão localizado no caminho `etc/senhasegura/proxy/proxy-db-mssql.conf`.

Ao final do conteúdo do arquivo, a variável  `legacy-mode` já vem configurada com o valor padrão de `false`. Ao alterar essa variável para `true`, o modo legado será habilitado para todas as conexões realizadas via **Database Proxy** para **MS SQL Server**. 

:::(warning) (**Atenção**)
Com este modo legado habilitado, somente as versões legadas do **MS SQL Server** 2017 e/ou inferior serão suportadas . Para suporte das versões 2019 e 2022, mantenha o arquivo de configuração em sua versão original.
:::

:::(info) (**Info**)
Toda e qualquer alteração no arquivo de configuração padrão, só terá efeito após a reinicialização do serviço do **Database Proxy** para **MS SQL Server** (proxy-db-mssql).
:::
