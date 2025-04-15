# Requisitos

- Um host Docker (máquina Linux*) com:
    - Docker e docker-compose instalados
    - 2 vCPUs
    - 2GB RAM
    - 20 GB de armazenamento
:::(info) (Info)
A partição /var requer no mínimo 85% do espaço em disco atribuído ao servidor host do docker.
:::
- Portas firewall
    - Elasticsearch TCP ports 9300
    - Galera Cluster TCP 3306, 4567, 4568, 4444, e UDP port 4567
- Plataforma senhasegura versão 3.26 ou superior
- As instâncias do senhasegura devem estar na mesma versão
- Latência máxima de 30ms entre as instâncias Arbitrator e senhasegura

*Não é fornecida pelo senhasegura

---

## Artigos relacionados

- [Instalação do Arbitrator](/v3-33/docs/pt/arbitrator-installation)