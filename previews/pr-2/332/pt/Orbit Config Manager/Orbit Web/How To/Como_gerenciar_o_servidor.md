# Como gerenciar o servidor

Este documento descreve como verificar e explorar as informações do seu servidor. 
:::(Info) (Info)
Estas práticas não estão ligadas diretamente às funcionalidades específicas do senhasegura. 
:::
:::(Info) (Info)
Neste documento concentraremos nossa atenção nas configurações comuns encontradas nos sistemas operacionais **Linux**.
:::

## Listar informações de hardware
Através do menu **Orbit Config Manager > Servidor > Informações** você poderá visualizar o **Uptime do servidor**, **IP**, carga de **Load da CPU**, **Memória**, detalhes das **interfaces de rede**, configuração de **DNS**, regras aplicadas de **firewall** e configuração com status do serviço de **NTP**.

## Gerenciar discos e partições
:::(Info) (Info)
Recomenda-se alocar um tamanho de backup remoto que seja pelo menos 150% do tamanho do espaço em `/var` do seu senhasegura. 

Por exemplo, se o tamanho de `/var` for de 10GB no servidor senhasegura, é sugerido ter pelo menos 15GB para backup remoto. Isso ajudará você a planejar futuros registros com base na frequência de uso.
:::
Através do menu **Orbit Config Manager > Servidor > Discos e Partições** você poderá visualizar as partições que estão montadas no sistema operacional senhasegura. As visualizações possíveis são:
* **Utilização de disco:** Descreve como está o uso de espaço pelas partições.
* **Utilização de inodes:** Apresenta como está a utilização de inodes pelas partições. Um alto uso de inodes pode levar a indisponibilidade de serviços.
* **Partições:** Apresenta quais a relação entre partições virtuais e físicas, seus UUIDs e tipos de partição.

Nesta tela é possível adicionar partições remotas utilizando protocolos **CIFS** e **NFS**. 

Preencha os métodos de autenticação com base no protocolo desejado. O **Orbit** montará automaticamente a partição sem reiniciar a instância.
:::(Warning) (Cuidado)
Atente-se a partição montada como `/var`. Esta partição recebe os arquivos de sessões gravadas e os arquivos de backup. O **Orbit** irá monitorar o crescimento e alertar através de incidente quando ela estiver próxima do esgotamento.
:::
:::(Warning) (Atenção)
As senhas não devem conter os caracteres `\`, `&` e `!` no mapeamento de partições remotas.
:::
### Redimensionamento de disco
Nesta mesma tela é possível expandir o espaço livre do disco físico nas partições virtuais. O próprio **Orbit** irá coordenar esse redimensionamento, sem na necessidade de intervenção do usuário.
:::(Error) (Alerta!)
Execute um snapshot da instância antes de executar essa operação.
:::

O disco primário onde o senhasegura está instalado pode ser expandido até 2TB. Este limite de tamanho é por conta do esquema de **partição MBR**, escolhido como padrão pelo senhasegura para garantir que antigos virtualizadores possam hospedar a solução.

Para expandir a **partição LVM** para tamanhos superiores a 2TB, você deve adicionar um novo hard disk e redimensionar utilizando a interface **Orbit**.
:::(Warning) (Cuidado)

* Para redimensionar o disco principal ou adicionar um novo disco, você deve desligar a instância. 
* Em um ambiente de cluster, mantenha cada instância com o mesmo perfil de hardware para evitar problemas de replicação.

:::

### Adicionar um bucket AWS S3 para backup
Esta subseção específica a instalação do cliente **AWS S3** e o formato de administração para o carregamento dos arquivos de backup senhasegura.

Para uso geral, o comando AWS de configuração é a maneira mais rápida de configurar a instalação **AWS CLI**, para isso utilize `aws configure`.

Em seguida, digite o **ID da Chave de Acesso**, **Chave de Acesso Secreta** e, se necessário, preencha o restante das informações.

As chaves de acesso consistem de uma chave de acesso ID e uma chave de acesso secreta, usadas para assinar pedidos programáticos que você faz à AWS. Se você não tiver chaves de acesso, você pode criá-las no **Console de Gerenciamento AWS**.

1. Para começar a sincronizar os dados com o bucket, use o seguinte comando:

```
aws s3 sync /var/orbini/backup/senhasegura s3://meubucket/folder
``` 

2. Altere as informações `//meubucket/folder` conforme a configuração do bucket utilizado.

Uma vez feito isso, o bucket está configurado e pronto para receber os dados de backup do senhasegura .

3. Para automatizar o processo de backup via bucket, você precisa criar um arquivo da seguinte forma:
`vim /etc/cron.d/aws_sync` 

4. Neste arquivo, digite as seguintes informações:

```
*/1 * * * * root /usr/local/bin/aws s3 sync /var/orbini/backup/senhasegura/ s3://mybucket/folder/ 2> /dev/null 1>/dev/null
*/10 * * * * root /usr/local/bin/aws s3 sync /var/senhasegura/arz/ s3://mybucket/folder/ 2> /dev/null 1>/dev/null
*/1 * * * * root /usr/local/bin/aws s3 sync /srv/cache/coba/ s3://mybucket/folder/ 2> /dev/null 1>/dev/null
```
:::(Info) (Info)
Se você não quiser fazer backup de vídeos, use os seguintes parâmetros:
```
*/1 * * * * root /usr/local/bin/aws s3 sync /var/orbini/backup/senhasegura/ s3://mybucket/folder/ 2> /dev/null 1>/dev/null
*/1 * * * * root /usr/local/bin/aws s3 sync /srv/cache/coba/ s3://mybucket/folder/ 2> /dev/null 1>/dev/null
```
:::

5. Para aplicar as configurações, salve o arquivo e execute o comando para reiniciar o serviço usado para chamar backups `service cron restart`.

### Controle de serviços básicos do sistema
Através da interface **Orbit Web** você poderá visualizar e controlar o estado de alguns serviços do servidor. Através da interface **Orbit Command Line** você tem acesso a todos os serviços, mas por questões de segurança, através da interface Web suas escolhas estão limitadas.

Acesse o menu **Orbit Config Manager > Servidor > Serviços** para visualizar e controlar os serviços **CRON**, **Zabbix Agent**, **Open VMWare Tools**, **Banco de dados** e **servidor SSH**.
:::(Error) (Alerta!)
Não recomendamos que os serviços CRON, Banco de dados e servidor SSH sejam desligados ou reiniciados sem necessidade. Entre em contato com nosso suporte se for necessário realizar este tipo de operação.
:::

### Alterar o Certificado SSL da aplicação
:::(Warning) (Atenção)
A troca de certificado irá reiniciar o serviço de servidor Web.
:::
:::(Warning) (Atenção)
Na instalação padrão do senhasegura consta instalado um certificado SSL de 512 bits autoassinado. É extremamente recomendado que você troque este certificado por um certificado de mercado válido.
:::
Acesse o menu **Orbit Config Manager > Servidor > Certificados** para acessar a tela onde você poderá realizar o upload de um novo par de arquivos do certificado e sua chave.

Sendo um certificado válido, este será listado na relação de certificados instalados na aplicação. 

Para aplica-lo, clique no botão **Instalar** do certificado desejado. Nesse momento, o **Orbit** irá aplicar o certificado no servidor Web e reiniciar o serviço.
:::(Warning) (Atenção)
* O certificado deve ser do tipo **PEM**. Sendo um arquivo de extensão `crt` para o certificado e um arquivo extensão `key` para a chave.
* Certificados do tipo **DER** ou **PKCS#12** (PFX, P7B e P12) devem ser convertidos.

:::
## Serviços de rede
### DNS
:::(Warning) (Atenção)
Apesar de constar no processo do **Orbit Wizard**, você pode alterar as configurações de DNS a qualquer instante. Esteja apenas ciente de que essa ação, apesar de não reiniciar serviços na instância, pode colocar o senhasegura em uma situação de rede que o impedirá de alcançar dispositivos que antes eram acessíveis.
:::
Acessando o menu **Orbit Config Manager > Servidor > Configurações** você tem acesso aos campos de configuração de DNS, podendo informar até três endereços de servidores DNS, Informações de domínio e Informações de busca.

Ao alterar, aplique as mudanças com o botão **Salvar** e aguarde o **Orbit** executar as operações necessárias.

### NTP
O servidor NTP também pode ser alterado mesmo após executar os passos do **Orbit Wizard**. Ao alterar o servidor NTP você estará alterando o fuso horário de todo sistema. 
:::(Warning) (Atenção)
Usuários poderão ser deslogados da plataforma.
:::
Acessando o menu **Orbit Config Manager > Servidor > Configurações** você tem acesso aos campos de configuração servidor NTP primário e servidor NTP secundário.

### Informações de firewall
Acessando o menu **Orbit Config Manager > Servidor > Informações** você terá acesso a todas as regras de firewall aplicadas no senhasegura. 
:::(Warning) (Atenção)
Essas regras não podem ser modificadas através da interface web. Atualizações do sistema irão sempre normalizar as regras de firewall removendo regras que não sejam padrões.
:::

### Bloqueio HIDS (Wazuh)
O senhasegura utiliza um sistema HIDS integrado baseado no **Wazuh** para proteger o acesso ao servidor. Ele impede tentativas de conexões SSH malsucedidas, garantindo a integridade dos recursos.

Após três tentativas de senha fracassadas, o sistema bloqueia o IP/host por um período de tempo crescente: *1 minuto*, *10 minutos*, *1 hora* e *24 horas*.
O bloqueio é removido automaticamente passado o tempo limite.

O IP/host bloqueado é adicionado à lista de bloqueio do firewall do senhasegura, impedindo futuras conexões. O administrador pode desbloquear manualmente o IP.

O IP bloqueado será registrado como um incidente e poderá ser visualizado em detalhes acessando o Grid Menu, indicado pela caixa de nove quadrados, **Orbit Config Manager > Aplicação > Incidentes**.  

Para desbloquear manualmente, o administrador deve acessar o Grid Menu, indicado pela caixa de nove quadrados e selecionar o menu **Orbit Config Manager > Servidor > Segurança**, encontrar o IP na lista de bloqueio e excluir o bloqueio. 
:::(Info) (Info)
O desbloqueio pode levar alguns minutos.
:::
:::(Warning) (Atenção)
O bloqueio de uma conta senhasegura, devido a tentativas falhas através da interface web, não é considerado no bloqueio Wazuh. Porém, o bloqueio ocorre seguindo os mesmos critérios, e com liberação manual por parte do administrador.
:::

### Tuning do servidor
Quando ocorre uma mudança no perfil de uso ou na configuração do hardware, recomenda-se que os parâmetros de carga do servidor web e banco de dados sejam reconfigurados para que a senhasegura sempre funcione na melhor configuração do hardware que está hospedado e dentro do perfil de uso do usuário.

Você pode realizar esta manutenção de forma prática a partir do menu **Orbit Config Manager > Servidor > Tuning do sistema**. Nesta tela você pode escolher entre diferentes perfis de uso do sistema, que irão calcular a melhor configuração com os recursos de hardware disponíveis.

Esse cálculo pode apresentar baixa ou nenhuma variação de valores caso o hardware disponível não seja suficiente para uma alteração de perfil de uso.
:::(Warning) (Atenção)
Esta ação reiniciará os sistemas e afetará o comportamento de senhasegura. Esteja atento ao tempo de inatividade.
:::

