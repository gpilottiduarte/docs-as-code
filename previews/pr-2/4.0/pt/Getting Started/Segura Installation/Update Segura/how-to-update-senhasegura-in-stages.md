# Como atualizar o Segura em versão muito antiga

O Segura funciona sob o sistema operacional Linux. A cada nova versão do sistema operacional, o Segura recebe atualizações. Caso esteja utilizando uma versão muito antiga e precise atualizar para a versão mais nova, será necessário realizar o processo de atualização mais de uma vez, até chegar na versão mais nova. 

## Sequência de atualização
Se você estiver utilizando a versão 3.13 do Segura, deverá atualizar seguindo esta sequência de versões:

* 3.13 para 3.14.
* 3.14 para 3.28.
* 3.28 para 3.32.
* 3.32 para 3.33.

## Requisitos

- **Acesso SSH**: acesso SSH ao servidor onde o Segura está instalado.
- **Privilégios Elevados**: permissão para executar comandos com privilégios elevados (sudo).
- **Licença Ativa**: licença ativa para o Segura.
- **Novo Repositório Segura**: saiba como configurar o [novo repositório Segura](/v4/docs/pt/installation-how-to-change-Segura-to-use-the-new-repository).

:::(error) (Aplicação indisponível durante a atualização)
Quando o Segura iniciar o processo de atualização, todos os recursos estarão indisponíveis até que todos os nós do cluster sejam totalmente atualizados.
:::

## Exemplo de atualização
Assumindo que você está atualizando um ambiente que está na versão 3.13 do Segura e pretende atualizar até a versão 3.33. Para realizar essa atualização, siga os passos abaixo:

Para cada atualização, você deve realizar a atualização dos repositórios do Linux, a instalação do `orbit-cli` e forçar a atualização para o novo pacote do `orbit-cli` utilizando a flag `--force`.

### Atualização de versões

```bash
sudo apt-get update #Atualização dos repositórios
sudo apt-get install orbit-cli #Instalação do pacote orbit-cli
sudo orbit upgrade --force #Atualização do Segura
```

Repita os comandos acima até chegar na versão mais atualizada.

:::(error) (Atenção!)
É essencial que você realize as atualizações na ordem indicada na **Sequência de atualização** até chegar na versão mais atual. 
:::

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).
