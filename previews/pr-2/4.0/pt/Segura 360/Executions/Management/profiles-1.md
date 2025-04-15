# Perfis

Em alguns cenários, você tem várias credenciais que usam o mesmo modelo de alteração de senha e compartilham um recurso comum entre **Fabricante**, **Tipo de dispositivo** ou **Tipo de credencial**. É preferível que eles recebam a alteração de senha de configuração imediatamente após o registro. Isso evita o risco de esquecimento ou configuração errada por parte de quem registra a credencial.

O Segura oferece a possibilidade de criar *perfis* de configuração de alteração de senha para **Credenciais** e **Dispositivos**.

---

## **Perfis de credenciais**

Você tem acesso a todos os perfis de credenciais através do menu **Execuções ➔ Configurações ➔ Perfis de credenciais**.

Por exemplo, usaremos um cenário onde todos os dispositivos do tipo **Server** dos fabricantes **CentOS** e **Debian** que contenham credenciais do tipo **Local User** recebam o template **Linux \- Alterar Senha Própria** no momento do registro da credencial.
:::(Warning) (**Atenção**)
Os perfis de credencial e de dispositivo servem como modelo para novas credenciais em dispositivos que se encaixam em um desses tipos de perfil. Mas depois de registrar a credencial, você tem total liberdade para alterar as configurações de execução da credencial. A alteração de perfis também não altera as configurações de credenciais já registradas. 
:::

1. Clique no botão **Novo perfil de alteração**  
2. Na guia, Informações, preencha os seguintes campos:  
   * **Nome:** nome do perfil de execução da credencial. Apenas para identificação;  
   * **Prioridade:** Prioridade de uso do perfil. Quanto maior o número, maior a prioridade. Pode variar de 1 a 255\. Para nosso exemplo, preencha com 10;  
   * **Ativo?:** Se esta opção for selecionada, o modelo estará ativo para uso;  
   * **Mudança de senha imediata?:** Caso esta opção seja selecionada, assim que a credencial que se enquadra neste perfil for cadastrada, será agendada uma tarefa de alteração de senha. Para nosso exemplo, selecione **Sim**;  
   * **Intervalo da primeira alteração (em minutos):** Este campo estará ativo somente quando o campo **Mudança imediata de senha?** estiver marcado. Indica o intervalo em minutos em que ocorrerá a primeira alteração automatizada. Para o nosso exemplo, preencha com 1 minuto;  
3. Na guia. Configurações **de execução**, você terá os mesmos campos do cadastro de credenciais. Este é o modelo em si. Preencha os campos:  
   * **Ativar alteração automática:** indica se as credenciais devem ser configuradas com alteração automática de senha. Para nosso exemplo, digite **Sim**;  
   * **Plugin:** Executor a ser usado para a alteração. Para nosso exemplo do Linux, selecione **Net SSH**;  
   * **Modelo de alteração automática de senha:** Modelo usado para alterar a senha. Para nosso exemplo selecione **Linux \- Change Own Password**;  
   * **Gerenciar status da conta:** Se selecionado, o processo de ativação e desativação de credenciais no dispositivo de destino será usado. Para nosso exemplo, mantenha o campo desmarcado;  
   * **Plugin de ativação de conta:** Plugin utilizado para ativar a credencial no dispositivo alvo;  
   * **Modelo de ativação de conta:** Modelo usado para ativar a credencial no dispositivo de destino;  
   * **Use sua própria senha para se conectar:** se esta opção for selecionada, a própria credencial será utilizada para alterar sua própria senha. Para nosso exemplo, mantenha este campo marcado;  
   * **Credencial de autenticação:** Caso a credencial não seja utilizada para autenticação no dispositivo remoto, você pode selecionar qual credencial será utilizada;  
   * **Nome de usuário da credencial:** Pode acontecer que a credencial indicada no campo **Credencial de autenticação** não tenha acesso a todos os dispositivos que se enquadram neste perfil. Mas todos os dispositivos terão uma credencial com o mesmo nome de usuário – e uma senha diferente – cadastrada e gerenciada pelo Segura. Nesses casos, preencha este campo com o nome de usuário correspondente à credencial que tem acesso ao dispositivo;
:::(info) (**Info**)
Por exemplo, no campo **Credential Username**, imagine que todos os servidores Linux contenham um usuário local com nome de usuário **usrpwdchg** cuja responsabilidade é alterar as demais senhas hospedadas no mesmo servidor. E que esse usuário tenha senhas diferentes de servidor para servidor.

No entanto, como essa credencial é gerenciada pelo Segura, você pode preencher o **Nome de usuário da credencial** com o nome de usuário **usrpwdchg** para que o Segura use a credencial correta de dispositivo para dispositivo.
:::

4. Na guia **Critérios**, preencha os seguintes campos:  
   * **Modelo (separado por vírgula):** Modelo do dispositivo no qual o perfil será aplicado. Deixe em branco em nosso exemplo  
   * **Fabricante:** Lista de fabricantes aos quais o perfil será aplicado. Selecione **CentOS** e **Debian** para nosso exemplo  
   * **Tipo de dispositivo:** selecione a quais tipos de dispositivo este perfil será aplicado. Selecione **Servidor** para nosso exemplo  
   * **Tipo de credencial:** selecione a quais tipos de credenciais este perfil será aplicado. Selecione **Usuário local** em nosso exemplo  
5. Clique no botão **Salvar** para concluir o registro.

Seguindo estes passos do nosso exemplo, o próximo dispositivo **Debian** ou **CentOS** que estiver registrado como tipo **Servidor**, terá suas credenciais do tipo **Usuário local** configuradas com a troca de senhas como o **Perfil de credencial** que acabamos de configurar.

---

## **Perfis de dispositivos**

Ainda no exemplo anterior, imagine um cenário em que todos os servidores **CentOS** respeitem o perfil de credencial. Mas há apenas 1 dispositivo CentOS que precisa de uma credencial de acesso diferente e um modelo de execução diferente. Isso pode ocorrer em sistemas legados ou em servidores onde o gerenciamento é compartilhado.

Nesses casos, recomendamos que você configure diretamente a alteração de senha na credencial de destino ou crie um perfil por dispositivo. Neste segundo caso, cada credencial cadastrada no dispositivo detentor do perfil receberá a configuração de alteração de senha indicada. Para acessar os perfis de dispositivos cadastrados, acesse o menu **Executions ➔ Settings ➔ Device profiles**.

Encontre o dispositivo desejado no relatório e clique na ação de registro **Configurar perfil**:

* **Equipamento Alvo:** Dispositivo;  
* **Plugin de alteração de senha:** Plugin de execução que será utilizado nas novas credenciais deste dispositivo;  
* **Modelo de alteração de senha e Plugin:** Modelo de execução a ser utilizado.  
  Caso as novas credenciais deste dispositivo necessitem de um processo de ativação antes do uso, indique qual plugin será utilizado;  
* **Modelo e Plugin de Ativação:** Template que será executado pelo plugin de ativação.  
  Caso as novas credenciais deste dispositivo exijam um processo de inativação antes do uso, indique qual plugin será utilizado;  
* **Modelo de inativação:** Template que será executado pelo plugin de inativação;  
* **Credencial de acesso:** Credencial a ser utilizada para realizar o processo de mudança. Como estamos lidando diretamente com o dispositivo gerenciado pelo Segura, você deve selecionar uma credencial válida. Não há possibilidade de indicar um nome de usuário curinga como no caso de **Perfis de credenciais**;

Clique no botão **Salvar** para concluir a configuração.

No campo de ação é possível editar e remover um perfil de execução do dispositivo clicando nos ícones correspondentes.

Todas as novas credenciais do dispositivo serão configuradas automaticamente com esse perfil de alteração.

