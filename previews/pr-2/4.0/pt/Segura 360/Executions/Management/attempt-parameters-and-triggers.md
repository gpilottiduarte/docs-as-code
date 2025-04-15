# Parâmetros de tentativa e gatilhos

Os gatilhos podem ser configurados nas **políticas de senha** e as tentativas nos **Parâmetros de Execução**.

---

## **Políticas de credenciais**

As políticas de credenciais são o ponto de união entre a força da senha e a credencial. Também trazem configurações sobre quando a credencial terá sua senha reciclada e os intervalos desses acionadores.

Você pode encontrar as políticas de credenciais por meio do menu **PAM Core ➔ Settings ➔ Credenciais➔ Políticas de credenciais**.

O formulário para registro de novas políticas assemelha-se à configuração de Grupos de Acesso, pois sua lógica é semelhante. Segregaremos alguns dispositivos e credenciais de seus atributos, e então o Segura usará o valor mais alto do campo **Prioridade** se houver empate na política.

Vá até **Configurações** identifique como o uso da credencial será afetado pela política de senha.

A política foi estabelecida para tratar de um sistema de intranet antigo no departamento de Marketing. Este sistema usa a senha forçada **Somente números**, criada especialmente para sistemas que aceitam apenas senhas numéricas de 5 dígitos.

Como a senha é fraca, o administrador decide isolar o sistema Marketing em uma regra de segurança com a seguinte configuração:

* **Permitir visualização simultânea?:** A retirada da senha não poderá acontecer simultaneamente. Quando um usuário realizar a retirada de senha ele ficará sob custódia, e outro usuário só poderá fazer a retirada se o usuário que detém a custódia liberar o uso;  
* **Permitir sessão simultânea?:** Os usuários que desejarem realizar sessões proxy com a credencial poderão realizar acessos simultâneos, pois nesses casos a senha não será exposta;  
* **Prioridade:** Defina a prioridade de aplicação da política caso o Segura encontre mais de uma política que se aplique à credencial. Quanto maior a prioridade, maior o número deste campo;  
* **Tempo de expiração por visualização:** O intervalo de tempo em que o Segura alterará automaticamente a senha após visualização por um usuário. Neste exemplo, a senha será alterada automaticamente após 1 hora da retirada;  
* **Tempo de expiração por período:** O intervalo de tempo em que a senha expira após um longo período sem uso. Ou seja, ninguém usou a senha por retirada ou por sessão de proxy, mas a senha ainda deve ser reciclada;  
* **Reutilizar a mesma senha para:** O intervalo de tempo em que a senha será reutilizada após o uso por uma sessão de proxy. Diferentemente da retirada de senha, quando a senha é utilizada via proxy não há exposição direta ao usuário. É recomendado, apesar disso, que a senha seja reciclada após a sessão de proxy. Esse intervalo determina por quanto tempo o Segura deve permitir a reutilização de senha em outras sessões até que a troca automática seja realizada;  
* **Dias de validade:** algumas credenciais não podem ser recicladas diariamente, seja devido às políticas de segurança do dispositivo de destino ou pelos impactos que isso pode ter nos negócios. Então, nestes campos você pode configurar em quais dias a troca de senha pode ocorrer;  
* **Horário de vencimento:** Da mesma forma que no campo anterior, alguns negócios só permitem a negociação em determinados horários;

Observe que todos esses campos determinam ações que influenciam a regra de negócios do cliente ou as regras de segurança do dispositivo de destino. Erros de configuração desses campos podem levar à indisponibilidade da credencial.

É por isso que é importante conhecer e separar os sistemas de destino em políticas de senha dedicadas. Use a guia **Critérios** para realizar a segregação, conforme você já aprendeu nos capítulos do Grupo de Acesso.

Veja então que o Segura identifica imediatamente a política de senha correta para a credencial no momento em que vinculamos um dispositivo que corresponde ao tipo e determinamos uma credencial com a tag configurada.

Se você alterar a política de senha de uma maneira que não se aplique mais à credencial, a credencial usará uma nova política que atenda às características do seu dispositivo e da credencial.

Para definir os parâmetros de alteração de senha no cofre, acesse o menu **Executions ➔ Settings ➔ Parameters**. Os seguintes campos estão disponíveis para ajustes:

* **Número de tentativas de alteração:** Número de vezes que o Segura tentará realizar a operação em caso de falha  
* **Tempo limite(s) de conexão:** Tempo limite máximo de conexão, em segundos  
* **Tempo limite(s) de leitura:** Tempo máximo de espera da saída alvo, em segundos  
* **Total de registros por ciclo:** Número de credenciais a serem consideradas para cada ciclo de execução automatizada  
* **Intervalo entre tentativas (min):** Intervalo, em minutos, entre as tentativas de alteração de uma senha que deu erro. Torne essa faixa adequada para dispositivos que já possuem histórico de alta latência ou interrupção intermitente. Esse intervalo se refere às tentativas determinadas no campo **Número de tentativas de alteração**  
* **Intervalo entre tentativas com erro (min):** Caso o Segura esgote as tentativas de alteração de senha, esta execução será marcada como falha e uma nova execução automatizada será somente realizada no intervalo determinado por este campo

Clique no botão **Salvar** para concluir as configurações.

