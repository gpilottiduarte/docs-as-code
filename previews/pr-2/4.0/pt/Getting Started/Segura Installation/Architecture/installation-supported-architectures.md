# Arquiteturas suportadas

Neste artigo você encontra os diferentes tipos de arquitetura suportados pelo Segura.
:::(info) (**Info**)
Todas as arquiteturas mencionadas neste artigo também são compatíveis com sistemas híbridos, que incluem uma combinação de data centers locais e provedores de serviços em nuvem (CSPs).
:::

## **Arquiteturas suportadas**

O Segura suporta as seguintes arquiteturas:

### **Um Virtual Appliance sem Backup (DR)**

Esta arquitetura emprega um único **Virtual Appliance** no **Site 1**, sem backup (DR).

### **Dois Virtual Appliances com local de Backup (DR)**

**Dois Virtual Appliances** são implantados no **Site 1** com Backup de **Recuperação de Desastres**.

### **Dois Virtual Appliances com Contingência Remota (DR)**

**Um Virtual Appliance** está localizado no **Site 1**, enquanto outro está no **Site 2**. Esta arquitetura conta com **Recuperação de Desastres** com **Contingência Remota**.

### **Um PAM Crypto Appliance sem backup (DR)**

Este cenário envolve **um único PAM Crypt**o Appliance no **Site 1** sem backup (DR).

### **Dois PAM Crypto Appliances com HA e sem backup (DR)**

**Dois PAM Crypto Appliances** no **Site 1**. Esta arquitetura inclui **Alta Disponibilidade** (HA).

### **Três PAM Crypto Appliances com HA e backup (DR) sem HA**

**O Site 1** hospeda **dois PAM Crypto Appliances** (primário e secundário), com **Alta Disponibilidade** entre eles. **Um PAM Crypto Appliance** está situado no **Site 2**. A **Alta Disponibilidade** é exclusiva para conexões entre sites, e o backup (DR) não inclui **Alta Disponibilidade**.

### **Quatro PAM Crypto Appliances com HA e backup (DR) com HA**

**Dois PAM Crypto Appliances** (primário e secundário) estão no **Site 1**, e **dois** **PAM Crypto Appliance** estão no **Site 2**. Este cenário apresenta **Alta Disponibilidade** entre os sites e inclui backup (DR).

### **Seis PAM Crypto Appliances com HA e dois backups (DR) com HA**

Esta arquitetura abrange **3 Sites**, cada um com **dois PAM Crypto Appliances** (primário e secundário). Oferece **Alta Disponibilidade** entre os sites e inclui dois backups (DR) com **Alta Disponibilidade**.

