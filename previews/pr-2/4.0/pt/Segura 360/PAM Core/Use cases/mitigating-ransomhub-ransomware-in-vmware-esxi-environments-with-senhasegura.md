# Mitigação de ransomware RansomHub em ambientes VMware ESXi com Segura

Caso de uso: Mitigação de ransomware RansomHub em ambientes VMware ESXi com Segura.

Neste documento, você encontra as recomendações necessárias para mitigar a ameaça do ransomware RansomHub em servidores VMware ESXi, utilizando a ferramenta de **Gestão de Acesso Privilegiado (PAM)** Segura. São apresentadas práticas recomendadas para a gestão de credenciais, troca de senhas e backup de dados, garantindo a integridade e segurança do ambiente.

## Requisitos
* Segura deve estar instalado e operacional.
* VMware ESXi deve estar configurado e em produção.
* Acesso administrativo concedido para todas as ferramentas e sistemas envolvidos.

#### **Ator: Administrador de TI**

### **Passo 1: Gestão de credenciais de alto privilégio**
* Armazena todas as credenciais administrativas de seus servidores VMware ESXi no cofre de senhas da instância.
* Implementa políticas para garantir que essas credenciais sejam gerenciadas de forma eficaz, atualizando as senhas regularmente.

Você pode encontrar mais detalhes sobre gestão de credenciais acesando o documento [Como configurar uma credencial no Segura](/v3-32/docs/pt/pam-how-to-set-up-a-credential-in-Segura).

### **Passo 2: Solicitações de acesso**
* Configura uma política para que os usuários solicitem acesso às credenciais.
* Define que o acesso às credenciais de alto privilégio só seja concedido quando necessário, reduzindo o risco de exposições acidentais.

Você pode encontrar mais detalhes sobre configurações de acesso acesando o documento [Como cadastrar um grupo de acesso](/v3-32/docs/pt/pam-session-how-to-add-an-access-group). 

### Passo 3: Troca gradual de senhas via SSH
* Automatiza a troca de senhas de alto privilégio através de SSH, utilizando o Segura.
* Garante que as credenciais sejam atualizadas regularmente sem intervenção manual, incrementando a segurança e robustez das mesmas.

Você pode encontrar mais detalhes sobre troca de senhas via SSH acesando o documento [Como configurar uma chave SSH](/v3-32/docs/pt/pam-how-to-set-up-an-ssh-key).

### Passo 4: Gerenciamento das partes da Chave Mestra
* Confirma que os portadores das partes da chave mestra são membros da corporação.
* Além de garantir que os portadores façam parte da empresa, é fundamental assegurar que eles possuam de fato as partes da chave mestre em sua posse, pois às vezes a cerimônia é realizada, mas a chave não é exportada.
* Caso contrário, realiza uma nova cerimônia para garantir que não haja problemas na abertura do backup de credenciais, se necessário.

Você pode encontrar mais detalhes sobre a cerimônia da chave mestra acessando o documento [Cerimônia da chave mestra](/v3-32/docs/pt/master-key-ceremony).

### Passo 5: Considerações para ambientes de cluster
* Em ambientes de cluster, verifica se não há duas instâncias do Segura hospedadas no mesmo servidor VMware ESXi.
* Distribui as instâncias do Segura em diferentes servidores para aumentar a resiliência do ambiente, minimizando os riscos em caso de um ataque hacker.

Você pode encontrar mais detalhes sobre o gerenciamento de cluster acessando o documento [Como gerenciar o cluster](/v3-32/docs/pt/orbit-cli-how-to-manage-the-cluster).

### Passo 6: Backups frequentes
* Configura rotinas de backups ativos e frequentes do Segura.
* Direciona esses backups para uma instância que não esteja localizada no mesmo servidor VMware ESXi, garantindo a recuperação rápida e segura dos dados em caso de um incidente.

Você pode encontrar mais detalhes de como configurar um backup acessando o documento [Como configurar o backup](/v3-32/docs/pt/orbit-cli-how-to-configure-backup).

 ---
Implementar essas práticas é essencial para reforçar a segurança e a gestão eficaz das credenciais de alto privilégio nos seus ambientes VMware ESXi, utilizando o Segura de forma otimizada.
