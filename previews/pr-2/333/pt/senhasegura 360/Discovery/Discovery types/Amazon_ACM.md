# Amazon ACM

1. Acesse **Discovery ➔ Configurações ➔ Discovery**
2. Clique no ícone `⁝` , selecione a opção **+ Novo**
    
![h.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/h%283%29.png){height="" width=""}
    

1. Selecione a opção **Amazon ACM.**
2. Adicione as seguintes informações:

![s.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/s.png){height="" width=""}

- Nome: Nome que identificará a ação.
- Ativo: Indicação para saber se a ação está ativada ou não

## Conta Cloud ACM

- Conta Cloud ACM: Conta da Amazon na qual se refere a CA
- Importar todos os certificados encontrados: Todos os certificados Amazon ACM que forem encontrados serão importados para o senhasegura
- Exportar chave do certificado?: As chaves dos certificados Amazon ACM encontrados serão exportadas para o senhasegura.

## Execução

![tt.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/tt.png){height="" width=""}

- Manter scan ativo apos importação?: A verificação de credenciais que permanecerão ativa após a importação de credenciais ou não
- Dias permitidos para execução: Dias que serão permitidos para realizar a execução.
- Períodos permitidos para execução: Horários que será permitidos para a execução.
- Intervalo minimo entre as execuções (em horas): Intervalo mínimo, em horas, entre execuções de varreduras.

Este critério leva em consideração os valores informados nos campos Dias permitidos para execução e Períodos permitidos para execução.

:::(info)

Não é indicado adicionar um intervalo inferior a 8 Horas

:::