Neste artigo você encontra os diferentes tipos de arquitetura suportados pelo senhasegura.

Info

Todas as arquiteturas mencionadas neste artigo também são compatíveis com sistemas híbridos, que incluem uma combinação de data centers locais e provedores de serviços em nuvem (CSPs).

## Arquiteturas suportadas

O senhasegura suporta as seguintes arquiteturas:

### Um Virtual Appliance sem Backup (DR)

![](https://lh7-us.googleusercontent.com/97334u4gxAv2VcPLSlqQLdDIL745YIoUQqT7RBL_7F9LwTz2ydUHfbcTDUPDoogN-uE8pbRCCaFRiBPO20uSQP7P7JsNfVHc-U7UUDK-QSFaowL4LSEpucxwein5Rl6IzLNE7nokEQ275zumC_BQyIg)

Esta arquitetura emprega um único **Virtual Appliance** no **Site 1**, sem backup (DR).

### Dois Virtual Appliances com local de Backup (DR)

![](https://lh7-us.googleusercontent.com/yuW7iZ0f_MS5DrKTJPBo2SCxZ2mR5UEuyTfxUIMXtf48MyDloni3CADtBczKXWKFtO2N3MQZABW9IpJfStYUTXMFtt1ak6MpWUUId3xWLCWX3ioxqtCmmcTeXT0BLGNeFSoBmNMoCPK6mHJVJu5CeXc)  
**Dois Virtual Appliances** são implantados no **Site 1** com Backup de **Recuperação de Desastres**.

### Dois Virtual Appliances com Contingência Remota (DR)

![](https://lh7-us.googleusercontent.com/VK2GBNpHq64DQbYEWR3I3OmmoJBFJEV0Xxcrt401noAvziYAo7m2z0k7ooc6zYnyNH5IyZlmwIESytBC54dMF6S53Z1lGAj10gb5ymjpruGDEkBqDCDo0P_o0VXht_jIVsd96pRO_ayihbpCedgkDBo)  
**Um Virtual Appliance** está localizado no **Site 1**, enquanto outro está no **Site 2**. Esta arquitetura conta com **Recuperação de Desastres**com**Contingência Remota**.

### Um PAM Crypto Appliance sem backup (DR)

![](https://lh7-us.googleusercontent.com/97334u4gxAv2VcPLSlqQLdDIL745YIoUQqT7RBL_7F9LwTz2ydUHfbcTDUPDoogN-uE8pbRCCaFRiBPO20uSQP7P7JsNfVHc-U7UUDK-QSFaowL4LSEpucxwein5Rl6IzLNE7nokEQ275zumC_BQyIg)  
Este cenário envolve **um único PAM Crypt**o Appliance no**Site 1** sem backup (DR).

### Dois PAM Crypto Appliances com HA e sem backup (DR)

![](https://lh7-us.googleusercontent.com/OKalxAAK6NKiV0pjdgLCjAf4lN7pq0n8dpu-mVTivgKATqnTf0heoneJVNZ4ZdLWn8uVsmr2DRu2dgXcVcUmxsHFTLH0kdkDxdPU0UgD2HNUQ6KBBtpVp_VtPSpeC5qBcNNlnxDhoJHHXm1ajuM8E1M)

**Dois PAM Crypto Appliances** no **Site 1**. Esta arquitetura inclui **Alta Disponibilidade** (HA).

### Três PAM Crypto Appliances com HA e backup (DR) sem HA

![](https://lh7-us.googleusercontent.com/joZ3KIQUndI7azZS4x55-7F_j_gg_Tw9AlP-IiOBZt3crDoQepyVxJWoCaivrMvmu_P2MU7qYxZx5C9XNUfktKrLcjTbJCjT-j15F_0clg78vIyEaXninAWJ-LFaqEWTT4EXYkD0zVaovRtPh7c4V3I)

**O Site 1** hospeda **dois PAM Crypto Appliances** (primário e secundário), com **Alta Disponibilidade** entre eles. **Um PAM Crypto Appliance** está situado no **Site 2**. A **Alta Disponibilidade** é exclusiva para conexões entre sites, e o backup (DR) não inclui **Alta Disponibilidade**.

### Quatro PAM Crypto Appliances com HA e backup (DR) com HA

![](https://lh7-us.googleusercontent.com/87wZoYsSjxME-2KoLz2kuUrbeV77sWKgyOyjzAtKk4e3BObwltg-B25Feg-eFMJGswecg_VWU6mkZqGHMV2sDsAJ9CfmEdIR_KXzUXgRWwuoLGubwsftlcmTIXGjRfv4QkcO598Uw2BJM75VZil-KPc)

**Dois PAM Crypto Appliances** (primário e secundário) estão no **Site 1**, e **dois** **PAM Crypto Appliance**estão no**Site 2**. Este cenário apresenta **Alta Disponibilidade** entre os sites e inclui backup (DR).

### Seis PAM Crypto Appliances com HA e dois backups (DR) com HA

![](https://lh7-us.googleusercontent.com/duPXbVnt9ezhA2MdeAwX2-KkHH_4dxCpFeFHwUCDM1Lx5KVZpWqt7Mx666zgivqzdHdK3sCLUqJgHiTrbpghjzqzNHihK2tX8IHBQWzSv5THGLu6O90aTjiLs4E5UXtGXPrEPQa4nPa2tjQkxwTH8ak)

Esta arquitetura abrange **3 Sites**, cada um com **dois PAM Crypto Appliances** (primário e secundário). Oferece **Alta Disponibilidade** entre os sites e inclui dois backups (DR) com **Alta Disponibilidade**.

