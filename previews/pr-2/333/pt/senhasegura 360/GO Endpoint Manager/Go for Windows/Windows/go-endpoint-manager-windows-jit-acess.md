O acesso**Just\-in\-Time (JIT)** permite o usuário elevar privilégios como administrador do sistema. Assim, quando o JIT estiver ativo, o usuário aparecerá no grupo de Administradores. 



---

## Configurar o acesso JIT

1. Acesse a plataforma senhasegura.
2. Vá até **GO Endpoint Manager ➔ Configurações ➔ Parâmetros ➔ go Windows.**
3. Na seção **Métodos JIT/Elevação,**marque a opção **Habilitar acesso JIT?** como **Sim.**
4. Marque **Bloquear elevação de privilégio** como **Não.**



---

## Ativar o acesso JIT

1. Vá até a área de trabalho da workstation do usuário.
2. Inicie o Core.
3. Ative o JIT clicando no botão **Just\-In\-Time.**

![Captura de tela 2022-12-21 142710.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/Captura%20de%20tela%202022-12-21%20142710.png)  
Ativação do acesso JIT 

InfoConfigurar a aplicação para gravar permite visualizar o que aconteceu durante o acesso JIT. Nos [Relatórios de gravação](https://docs.senhasegura.io/v3-33/docs/pt/go-endpoint-manager-windows-record#relat%C3%B3rio-de-grava%C3%A7%C3%B5es), a gravação estará disponível. Pode levar de 10 a 20 minutos após o término da sessão para o visualizar na plataforma senhasegura.

---

## Desativar o acesso JIT

1. Vá até a área de trabalho da workstation do usuário.
2. Inicie a aplicação Core.
3. Desative o JIT clicando no botão **Just\-In\-Time.**

![Captura de tela 2022-12-21 142748.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/Captura%20de%20tela%202022-12-21%20142748.png)Desativação do acesso JIT 

ImportanteQuando o JIT for desativado:

* O usuário será deslogado.
* O usuário será retirado do grupo de administradores.
* A máquina será reiniciada.


---

## Gerenciar os administradores do sistema

Para ter a confirmação de que o usuário foi inserido ou retirado do grupo de **Administradores** **do Sistema**, siga os passos:

1. Acesse a workstation do usuário.
2. Vá até **Gerenciamento do Computador ➔ Usuários de Grupo Locais ➔ Grupos ➔ Administradores**
3. Visualize se o usuário faz parte do grupo de usuários administradores
