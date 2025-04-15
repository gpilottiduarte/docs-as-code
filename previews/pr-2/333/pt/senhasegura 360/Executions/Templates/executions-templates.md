Os templates são componentes importantes do senhasegura. São instruções passo a passo para realizar alterações no sistema.

O administrador do sistema ou qualquer outro usuário credenciado pode criar templates de acordo com suas necessidades e executá\-los em dispositivos que possuam conectividade compatível com o senhasegura.

Templates prontos para usoO senhasegura é instalado com mais de 250 templates prontos para uso. E você tem acesso a todos os templates criados pela nossa equipe senhasegura e pela comunidade aqui: [projeto Github](https://github.com/senhasegura/execution-templates).

Para listar todos os templates cadastrados, acesse o menu **Execuções ➔ Configurações ➔ Templates**.



---

## Registrando um template

1. Clique no botão **Novo template** e, na tela exibida, preencha os seguintes campos:
* **Nome do template:** Nome para melhor identificação;
* **Executor:** Tecnologia de comunicação entre o senhasegura e o dispositivo alvo. Confira mais informações abaixo;
* **Tipo de execução:** Tipo de alteração para a qual o template será utilizado. Pode ser qualquer ação acionada por módulos clientes de execução instalados;
* **Ativo:** Indica se o template de alteração está disponível para uso ou não;
* **Conteúdo do template:** uma área de texto para compor a instrução do script. Verifique cada sintaxe de Executor posteriormente;
2. Clique no botão **Salvar** para concluir o registro



---

## Modificando um template

Clique no botão **Alterar template** no registro do modelo para modificar um template de execução de alteração de senha.

Os templates recebem uma versão incremental, identificada em seu relatório pela coluna **Versão**.

Você tem acesso às versões anteriores e aos dados sobre os usuários que modificaram o template por meio da ação de registro **Histórico de alterações do template**.



---

## Compondo um template

Todo plugin Executor tem sua sintaxe. Mas você pode usar valores de propriedades reais de credenciais e dispositivos para substituir algumas propriedades de tags. A substituição ocorrerá quando a operação for executada.  
O dispositivo e a credencial disponíveis para uso no momento da operação serão definidos pelo módulo do cliente.

CuidadoEssas propriedades serão substituídas pelas regras do módulo do cliente. As propriedades que representam a alteração de senha serão consideradas apenas pelas operações de alteração de senha. Por exemplo, as operações do **Gerenciador de tarefas** substituirão apenas as propriedades das tags de conexão.



---

## Biblioteca de templates

Nossa equipe e comunidade senhasegura oferecem centenas de templates gratuitamente através do Github.

Você pode encontrar e compartilhar os templates que criou em nosso repositório público.

[senhasegura Execution Templates Github](https://github.com/senhasegura/execution-templates)



---

## Fluxo de aprovação de template

Após criar ou editar um template de execução, é necessária a validação de um aprovador registrado. Você pode configurar os aprovadores pelo menu **Configurações ➔ Parâmetros do sistema ➔ Aprovadores**:

InfoPara realizar os passos a seguir é preciso ter registrado um template de execução.  


1. Selecione a opção **Novo** no menu de ações
2. Selecione o módulo **Execuções**
3. Adicione um aprovador
4. **Salvar**

**Execuções ➔ Configurações ➔ Modelos**: o mesmo usuário não pode criar e aprovar um modelo de execução.



---

### O status de uma aprovação

* **Aprovado**: Quando o usuário aprovador aceita a alteração ou criação de um template.
* **Pré\-cadastrado**: Quando o usuário aprovador ainda não aceitou a solicitação para criar um template ou alterar o conteúdo do template.

Em **Execuções ➔ Configurações ➔ Parâmetros** em Configurações do sistema **Execuções**:

1. Selecione **Sim** para ativar o **Fluxo de aprovação de templates**
2. **Salvar**

Aprovação em nívelA opção [**Level Approval**](https://docs.senhasegura.io/v3-33/docs/pt/pam-access-workflow) pode ser habilitada para grupos de acesso e usuários com permissão para aprovar.



---

### Estes podem ter os status

* **Execuções ➔ Controle de Templates**
* **Pendente**: aguardando aprovação ou reprovação após a criação.
* **Aprovado**: após um administrador aprovar o template.
* **Reprovado**: impedido de ser executado após reprovação do administrador.
* **Cancelado**: após o usuário cancelar a solicitação de registro ou alterá\-la para um template.
* **Expirado**: após expirar o tempo definido para aprovar ou reaprovar.



---

## Artigos relacionados

* [Tags de templates](https://docs.senhasegura.io/v3-33/docs/pt/execution-template-tags)
