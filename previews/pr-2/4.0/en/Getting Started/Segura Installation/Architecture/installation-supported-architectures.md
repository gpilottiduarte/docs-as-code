# Supported architectures

In this article, you’ll find the different types of architecture supported by Segura. 
:::(info) (**Info**)
All the architectures mentioned below are also compatible with hybrid systems, which include a combination of on-premises data centers and Cloud Service Providers (CSPs).
:::

## **Supported architectures**

Segura supports the following architectures:

### **Single Virtual Appliance with no Backup (DR)**

This architecture deploys a **single Virtual Appliance** on **Site 1** without **Disaster Recovery** backup.

### **Two Virtual Appliances with a Backup Location (DR)**

**Two Virtual Appliances** are deployed on **Site 1** with **Disaster Recovery** backup.

### **Two Virtual Appliances with Remote Contingency (DR)**

**One Virtual Appliance** is situated at **Site 1**, while another is at **Site 2**, featuring **Remote Contingency Disaster Recovery**.

### **One PAM Crypto Appliance with no Backup (DR)**

This scenario involves a **single PAM Crypto Appliance** on **Site 1** and no **Disaster Recovery** backup.

### **Two PAM Crypto Appliances with HA and no Backup (DR)**

**Two PAM Crypto Appliances** are deployed on **Site 1** with **High Availability (HA**) between the appliances. No backup (DR) is included.

### **Three PAM Crypto Appliances with HA and a Backup (DR) without HA**

**Site 1** hosts **two PAM Crypto Appliances** (primary and secondary), with **High Availability** between them. **One PAM Crypto Appliance** is situated on **Site 2**. **High Availability** is exclusive to inter-site connections, and DR backup doesn’t include HA.

### **Four PAM Crypto Appliances with HA and a Backup (DR) with HA**

**Two PAM Crypto Appliances** (primary and secondary) are on **Site 1**, and **two PAM Crypto Appliances** are on **Site 2**. This scenario features **High Availability** between sites and includes DR backup.

### **Six PAM Crypto Appliances with HA and two Backups (DR) with HA** 

This architecture spans **3 Sites, each with two PAM Crypto Appliances** (primary and secondary). It provides **High Availability** between sites and includes two backups with HA.

