# Virtual Appliances

Neste artigo você encontra os requisitos mínimos para executar o aplicativo Segura virtualmente, bem como os formatos disponíveis e os Provedores de Serviço em Nuvem (CSPs) suportados.

É importante ressaltar que os requisitos reais podem variar de acordo com as condições de uso; tais como o número de sessões em execução, gravações e outros fatores. Para informações mais detalhadas, consulte o artigo [Especificações técnicas](/v4/docs/pt/general-information-Segura-technical-specification).

Para instruções sobre como baixar um Virtual Appliance, consulte o artigo [Como fazer o download do Virtual Appliance](/v4/docs/pt/installation-how-to-download-a-virtual-appliance).

:::(Warning) (Atenção) 
Sempre utilize a versão mais recente do Virtual Appliance do Segura.
:::
## Requisitos
Ao optar pela instalação do Segura no modelo Virtual Appliance, certifique-se de atender aos seguintes requisitos:



| Item | Requisito  |
| --- | --- |
| **vCPUs** | 8 |
| **Memória** | 16 GB |
| **Disco Rígido** | 250 GB|
| **Rede** | Gigabit 1000 Mbps |


:::(Error) (Importante) 
Por padrão, a instância virtual do Segura vem configurada com **2 vCPU's**, **4 GB de RAM** e **100 GB** de disco rígido. No entanto, para garantir o desempenho adequado, é fundamental ajustar esses valores para atender aos requisitos mínimos mencionados acima.
:::

:::(Error) (Aviso Importante sobre Requisitos de Hardware para HA)
Ao implantar o Segura em um ambiente de cluster, especialmente para configurações de alta disponibilidade (HA), é crucial garantir que **todas as instâncias (membros) no cluster tenham especificações de hardware idênticas**.

**Configurações de hardware incompatíveis entre os membros do cluster podem levar a inconsistências de desempenho e problemas de confiabilidade.**

Para referência, por favor, consulte nosso artigo sobre [Requisitos Mínimos de Hardware](#) para garantir que cada instância atenda aos padrões necessários.
:::

## Formatos de Virtual Appliance disponíveis

- OVA.
- VMDK.
- RAW.
- VHD.
- QCOW2

:::(Info) (Info)
O Segura não oferece Virtuais Appliances em formato de arquivo ISO.
:::
## Provedores de Serviços em Nuvem suportados
- AWS.
- GCP.
- Azure.