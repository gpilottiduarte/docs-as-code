# Como a gestão de permissões e dependências de aplicações afetam o senhasegura.go

Algumas aplicações possuem dependências e interações com arquivos ou aplicações terceiras, por exemplo, DLLs, arquivos de configuração, ou outras aplicações.

Para que essas aplicações funcionem de forma correta, é necessário que o usuário tenha a permissão concedida no sistema operacional para executar, além da aplicação, suas devidas dependências.

Se o administrador de uma estação de trabalho específica revogar o acesso de um usuário às dependências essenciais de uma aplicação, tal aplicação poderá exibir erros ou falhar em seu funcionamento tanto ao ser executada pelo senhasegura.go client quanto ao ser rodada diretamente pelo sistema operacional.

Essas permissões são configurações do sistema operacional e não devem ser confundidas como parâmetros de funcionamento do senhasegura ou do senhasegura.go client. O senhasegura.go client funciona como um facilitador de gerenciamento de aplicações e respeita as permissões estabelecidas no sistema operacional.

Exemplo:

A aplicação `calculadora.exe` depende de mais dois arquivos específicos, `soma.dll` e `multiplicacao.dll`. Se a permissão de acesso ao arquivo `multiplicacao.dll` for removida, a aplicação vai ser executada, as operações de soma serão realizadas com sucesso, mas as operações de multiplicação retornarão um erro.
