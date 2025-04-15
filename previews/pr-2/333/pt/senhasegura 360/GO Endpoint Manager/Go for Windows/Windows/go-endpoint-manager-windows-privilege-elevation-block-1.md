Quando o parâmetro **Bloquear elevação de privilégio** estiver habilitado, qualquer tentativa de executar uma aplicação que esteja na lista de acesso e não forem realizadas pelo GO Endpoint Manager serão bloqueadas, mesmo que não sejam elevação de privilégio.

## Configurar o bloqueio de elevação de privilégio

1. Acesse a plataforma senhasegura.
2. Selecione o módulo **GO Endpoint Manager ➔****Configurações** ➔ **Parâmetros ➔****go Windows.**
3. Defina como **Sim** para ativar a opção **Bloquear elevação de privilégio?.**

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1672679444390.png)Parâmetro de bloqueio de privilégio 

CuidadoSe a opção **Bloquear usuário**estiver definida como **Sim**, o usuário que tentar elevar uma aplicação excedendo a quantidade de **Ocorrências(mínimo)**definidas terá seu usuário bloqueado e não conseguirá acessar a plataforma senhasegura. Este processo gera e envia os eventos sobre o bloqueio para a plataforma senhasegura.

---

## Verificar eventos de bloqueio de elevação de privilégio

1. Acesse a plataforma senhasegura.
2. Selecione o módulo **GO Endpoint Manager ➔ Relatórios** ➔ **Windows ➔ Eventos.**
3. Filtre no campo**Evento** por**Elevação de privilégio bloqueada.**
