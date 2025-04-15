# Como realizar um Teste de Recuperação de Desastres

Neste artigo, você encontra um guia passo a passo sobre como realizar um teste de Recuperação de Desastres (DR) executando um failover manual.


::: (error) (Importante)
Para realizar este teste com sucesso, o membro **Primário** deve ser desligado de forma abrupta. 


:::

## Requisitos

* Duas instâncias do Segura devem estar disponíveis.
* As instâncias devem estar no mesmo cluster e operando corretamente. Para mais informações sobre as configurações de um cluster, consulte o artigo [Como criar um cluster](/v4/docs/pt/installation-data-replication-how-to-create-a-cluster).

* Tirar um snapshot de ambas as instâncias.

Este teste é destinado a duas instâncias como membros do cluster. Antes de iniciar,  certifique-se de verificar as seguintes tags na parte inferior de cada um dos membros:


#### Membro A (Principal):

* **Application**: Produção e Habilitado.

* **Replication**: Primário.

#### Membro B (Secundário - contingência)

* **Application**: Contingência e Desabilitado.

* **Replication**: Não primário (Non-primary).

## Passo 1: Tirar snapshots

Antes de realizar o teste, é crucial tirar um snapshot das instâncias como precaução, pois o desligamento abrupto pode causar danos.

::: (error) (Importante)
Sempre tire os snapshots na ordem reversa do cluster. Neste caso, tire primeiro o snapshot do **Membro B** e, posteriormente, do **Membro A**.

:::

Para tirar um snapshot, siga estes passos:

1. Acesse a instância.
2. Execute o seguinte comando para desligá-la:

```Shell
sudo orbit shutdown

```
3. Quando a instância estiver completamente desligada, tire o snapshot no hipervisor.
4. Em seguida, reinicie a instância e verifique se o funcionamento foi reestabelecido. 

## Passo 2: Validar o cluster

1. Acesse **Orbit Server Manager > Replicação > Elasticsearch**. 
2. Na tabela **Cluster de pesquisa de dados**, e na tabela **Membros do cluster**, verifique se o tamanho do cluster corresponde a **2**.

## Passo 3: Configurar o Recovery

1. No **Membro B**, acesse **Orbit Server Manager > Configurações > Recuperação**.
2. Insira os **IPs permitidos para executar a recuperação do sistema**. 

:::(warning) (Cuidado)
Certifique-se de não utilizar *Wildcards* (*).

:::
::: (info) (Info)
Esta lista tornará o botão **Assumir como Primário** visível para os usuários.
:::

:::(warning) (Cuidado)
Ao utilizar máscaras de sub-rede, deve-se adotar a notação CIDR, por exemplo, `192.168.1.0/24`.
:::

## Passo 4: Executar o Teste de Recuperação de Desastres

1. Force um desligamento abrupto no **Membro A**. 
::: (warning) (Cuidado)
Certifique-se de que seja um desligamento abrupto; caso contrário, o cluster detectará a desativação e o **Membro B** não irá exibir a página de **Recovery**.

:::
2. Uma vez que o **Membro A** esteja inativo devido a um comportamento inesperado, o **Membro B** entrará em *split brain*, bloqueando qualquer alteração de banco de dados até que instruções manuais sejam aplicadas. 

3. Em seguida, a página de **Recovery** será exibida na aplicação web.
4. Clique em **Assumir como Primário**. 
5. Confirme clicando em **Sim**. Isso configurará o **Membro B** como o novo membro **Primário**. Esse processo pode levar alguns minutos.

::: (info) (Info)
Certifique-se de que o botão apareça; caso contrário, consulte [Como habilitar o Recovery](/v4/docs/pt/installation-data-replication-how-to-enable-recovery) para garantir que os IPs estejam configurados corretamente.

:::
6. Assim que a interface Orbit Web estiver disponível no **Membro B**, verifique se a tag está indicando que esta instância é agora o membro **Primário**.

7. Para acessar os demais módulos do Segura, é necessário habilitar a aplicação. Vá para **Orbit > Configurações > Aplicação** e alterne o botão **Ativar aplicação** para a posição ativa.

8. Clique em **Salvar**. 
:::(info) (Info)
Se a cor verde for apresentada, então a aplicação estará ativada.

:::
9.  Faça logoff e login novamente para acessar os outros módulos.

Após seguir estes passos, todas as funcionalidades do Segura estarão disponíveis e operacionais no **Membro B** de DR.


## Passo 5: Recuperar o Membro Primário

1. Ative o **Membro A** e aguarde a sincronização com o outro banco de dados do cluster. Isso pode levar alguns minutos.


::: (info) (Info)
O **Membro A** identificará o problema, e o **Membro B**, atualmente **Primário**, iniciará a sincronização automática das novas informações entre os membros.

:::
2. Após a sincronização, a página de login será exibida na interface principal da aplicação web.
3. Faça login na aplicação web do **Membro A** e clique em **Assumir como Primário** para restaurá-lo como como membro **Primário**.

4. No **Membro B**, vá para **Orbit Server Manager > Configurações > Aplicativo** e alterne o botão **Ativar aplicativo** para a posição inativa.
5. Clique em **Salvar**. 
:::(info) (Info)
Certifique-se de que a cor verde não esteja sendo exibida.

:::

## Passo 5.1 (alternativo): Recuperar o Membro Principal via SSH


1. Inicie uma sessão SSH no **Membro A** utilizando a porta **59022** com o usuário `mt4adm`. 

2. Execute o comando `sudo orbit application status` para verificar as seguintes informações: 
```Shell
 sudo orbit application status

Application: Active
Replication: Active
Instance:    Cluster
Primary:     memberB
Main:        No

```
3. Em seguida, execute o comando `sudo orbit application primary` para definir o **Membro A** como **Primário**: 

```Shell
sudo orbit application primary

Application: Active
Replication: Active
Instance:    Cluster
Primary:     memberA
Main:        Yes

```
