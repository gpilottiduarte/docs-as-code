# Como integrar o DSM ao Kubernetes

## Requisitos:

1. Ter o Kubernetes instalado corretamente.
2. Ter a ferramenta `kubectl` instalada.

:::(info) (Info)
Para maiores informações sobre ambos processos, siga as instruções de instalação fornecidas em [Getting started - External Secrets Operator](https://external-secrets.io/v0.6.1/guides/getting-started/) e [Segura DevOps Secrets Management (DSM)](https://external-secrets.io/v0.6.1/provider/Segura-dsm/).
:::

## Configuração no Segura

1. Criar um **Grupo de Acesso** no DSM.
2. Criar um **Secret** no Segura.
3. Criar uma **Aplicação** no Segura.
4. Criar uma **Autorização para a aplicação** recém-criada.
5. Adicione o **Secret** à **Autorização da aplicação**.
6. Copie os valores dos campos **Client ID** e **Client Secret** da autorização da aplicação.
7. Crie um arquivo com a extensão `.yml` no Kubernetes.
8. Preencha o arquivo `.yml` com os valores de **Client ID** e **Client Secret** que você copiou anteriormente.
9. Execute o seguinte comando: `kubectl apply -f nomedoarquivo.ymlc`

No Kubernetes, siga os passos da documentação do Segura sobre External Secrets, disponível em [Segura DevOps Secrets Management (DSM)](https://external-secrets.io/v0.6.1/provider/Segura-dsm/).

Seguindo esses passos, a integração entre o DSM e o Kubernetes via External Secrets estará configurada, garantindo uma gestão segura e eficaz das informações sensíveis necessárias para a operação de seu ambiente

## Validar a integração

| Command                                                                 | Description                                                                    |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `kubectl get externalsecret -o wide`                                  | Verificar o status da sincronização.                                         |
| `kubectl describe externalsecret example-secret`                      | Verifica o status da sincronização.                                          |
| `kubectl get pods -A`                                                 | Verifica a criação do pod.                                                   |
| `kubectl get secrets/example-secret -n namespace -o yaml`             | Verifica o conteúdo do External Secrets.                                      |
| `kubectl get secrets/example-secret -o yaml`                          | Verifica se o segredo sincronizado foi criado e se os dados foram recuperados. |
| `kubectl logs -f pod/external-secrets-<CHANGEME> -n external-secrets` | Verifica os logs do External Secrets                                           |

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).