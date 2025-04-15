# Sobre a recuperação de dados no Segura

O Segura usa o [MariaDB Galera Cluster](https://mariadb.com/kb/en/what-is-mariadb-galera-cluster/){target=`_blank`} como tecnologia de cluster de alta disponibilidade para garantir a integridade e continuidade dos dados. 

## Transferência Estatal Incremental
Em situações de interrupção temporária da replicação entre os membros do cluster, a configuração padrão permite uma tolerância de aproximadamente 3 horas. Durante esse período, o cluster automaticamente realiza a Transferência Estatal Incremental (IST) para a ressincronização, enviando apenas os dados incrementais afetados.

 É importante destacar que essa abordagem elimina a necessidade de intervenção manual, pois o cluster é projetado para lidar automaticamente com a ressincronização durante interrupções temporárias.
 
## Transferência Estatal Instantânea
Em casos de interrupções mais prolongadas, a solução adotada é a realização de uma transferência completa de dados, conhecida como Transferência Estatal Instantânea (SST). Essa abordagem garante que todos os membros do cluster estejam sincronizados, preservando a consistência dos dados, com base na ressincronização a partir de um membro que tenha os dados confiáveis. 

Em geral, o cluster Segura é robusto e inteligente o bastante para solucionar automaticamente a ressincronização através da execução autônoma de uma transferência completa de dados (SST).

Para instruções sobre como realizar uma SST manualmente, consulte o artigo [Como realizar uma SST manualmente](/v4/docs/pt/installation-how-to-perform-a-sst-manually) em um cluster


