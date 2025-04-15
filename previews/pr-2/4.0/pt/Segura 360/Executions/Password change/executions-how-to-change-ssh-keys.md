# Como trocar chaves SSH

A troca de chaves SSH é a prática de substituir regularmente as chaves usadas para a autenticação em um sistema remoto. Esse método envolve gerar um novo par de chaves, atualizá-lo, para depois atualizar a chave pública em todos os dispositivos onde a chave privada pode autenticar.

Quando um novo par de chaves é gerado, a chave privada permanece somente no Segura, enquanto a chave pública é enviada aos dispositivos respectivos.

Para o gerenciamento de chaves SSH, o processo é semelhante ao descrito para a [alteração de senhas](/v4/docs/pt/password-change-example), com algumas distinções nas telas e menus utilizados. Assim como as credenciais de usuário e senha, as chaves SSH devem ser associadas aos dispositivos correspondentes.

## Requisitos

- Ter permissão de PAM user no Segura.
- Ter o conteúdo da chave pública inserida no `authorized_keys` do diretório `.ssh` do usuário.
- Habilitar o login por chave SSH no [dispositivo](/v4/docs/pt/devices).

## Como configurar a troca de chaves SSH

Crie uma [credencial](/v4/docs/pt/pam-how-to-set-up-a-credential-in-Segura) e [gere uma chave SSH](/v4/docs/pt/pam-how-to-set-up-an-ssh-key). Após, adicione os seguintes dados:

### Na aba Configurações adicionais:
1. No campo **Usuário dono da credencial** você pode definir se a credencial terá algum dono. Caso sim, você deverá selecionar o usuário a partir do menu suspenso.
2. Na sessão **Configuração da renovação da chave ssh**:
3. Ao marcar o campo **Ativar troca automática**, você permite a troca automática de chaves. Ao habilitar essa opção, é necessário especificar se a troca acontecerá utilizando a mesma chave ou outra. Caso utilize a mesma chave, marque o campo **Utilizar a própria chave para conexão**. Senão, selecione o usuário correspondente no menu suspenso **Credencial ou chave SSH para autenticação**.

### Na aba Dispositivos 
Indique os dispositivos-alvo nos quais deseja realizar a conexão utilizando a chave SSH em questão. Note que todos os dispositivos devem ter a mesma credencial para conexão e a chave pública no arquivo `authorized_keys`.

Para finalizar, clique em **Salvar.**

:::(Info) (Info)
Se houver vários dispositivos cadastrados para conexão com a chave SSH em questão, eles serão ordenados de acordo com seus respectivos IDs. A troca de chaves ocorrerá primeiro no dispositivo original e, após, seguirá a ordem dos IDs, um por vez.
:::
## Próximos passos

- [Solicitar uma alteração de senha](/v4/docs/pt/password-change-operations)

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).