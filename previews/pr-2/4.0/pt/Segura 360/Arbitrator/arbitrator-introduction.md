# Introdução

O Arbitrator do Segura realiza e garante a alta disponibilidade do aplicativo para que o banco de dados e os clusters do Elasticsearch continuem funcionando sem nenhuma interferência.

Pode ser usado nos casos em que dois servidores Segura verificam as instâncias e validam se a comunicação está ativa. Se constatar que um dos nós está indisponível, manterá a instância que está disponível em operação.

![Arbitrator Architecture.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/Arbitrator%20Architecture.png)

:::info (Info)
O Arbitrator ajuda a evitar cenários de split-brain, quando uma das duas instâncias não tem certeza de qual informação está mais atualizada.
:::

---

## Artigos relacionados

- [Instalação do Arbitrator](/v4/docs/pt/arbitrator-installation)
- [Atualização do Arbitrator](/v4/docs/pt/arbitrator-update)