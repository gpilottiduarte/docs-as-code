## Configurar diretório de armazenamento dos dados criptografados

Antes de criarmos a **Chave Mestra** é necessário configurar o local de exportação dos dados criptografados. Lembre\-se de que este diretório deve ser de conhecimento pelos detentores das partes.

CuidadoSe você está configurando uma instância senhasegura SaaS, esta etapa não é necessária. Vá para etapa **[Gerar cerimônia remota da chave mestra](/v3-33/docs/master-key-ceremony)**.

No módulo e menu **Settings ➔ Backup ➔ Servidores** você terá acesso aos registros de diretórios onde o senhasegura encaminha internamente o backup.

1. Crie um registro através do botão de ação de relatório **Novo**
2. Escolha o modo que será armazenado o backup
3. Preencha com o seu diretório

CuidadoCaso escolha o **Diretório local,** mantenha os dados padrão e clique em **Salvar**.

4. Preencha com o **Host**, **Porta** e a **Credencial para autenticação**
5. Clique em **Salvar**

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1666920435348.png)Cadastro do servidor de Backup 

  


Este diretório é o mesmo diretório onde foi configurado o backup da base de dados e arquivos de sessão. Os arquivos da **Chave Mestra** são encaminhados para esse mesmo diretório e automaticamente direcionado ao diretório remoto configurado na etapa do backup.

