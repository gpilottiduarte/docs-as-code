In this article, you’ll find the different types of architecture supported by senhasegura. 

Info

All the architectures mentioned below are also compatible with hybrid systems, which include a combination of on\-premises data centers and Cloud Service Providers (CSPs).

## Supported architectures

senhasegura supports the following architectures:

### Single Virtual Appliance with no Backup (DR)

![](https://lh7-us.googleusercontent.com/PhOj3NS78G5Tb49WtxnV-ZcFifCDOkZn0Pd2pM5FmM4HTNeEgAwQJHSTpUjtaMJEsIYUZVFsLlD_zL39mLyjA21lg_zlBwx8P2fsdBkL_TgZE-TtEWCwraPpMOKcLfiWg00b5Y9McVClRvz_wZ8O05E)  


This architecture deploys a **single Virtual Appliance** on **Site 1** without **Disaster Recovery** backup.

### Two Virtual Appliances with a Backup Location (DR)

![](https://lh7-us.googleusercontent.com/3pYUonA5u2PWPiyQyO3NhIOf4o2Ga2NQrVHl8idi3ax9NeNCx9jGokGBFJVqVaxscEdc4ivkRZP6KQO6Ve1Lf6DZMN17EZpYn8kjzbvjOcbAL21YCqp4-SE_pZdSwwoUZnm4A7vApSP-oLmY53a62MI)  


**Two Virtual Appliances** are deployed on **Site 1** with **Disaster Recovery** backup.

### Two Virtual Appliances with Remote Contingency (DR)

![](https://lh7-us.googleusercontent.com/1_nzjtSsSmuHz1Xh6M_e2L0sYd4ha4GDHPbM6R1JIMqH4WOoM2VS6uowyGy4L-2III0E6niMfelTBfqc5SIxJvOM8OwYhKYddx2ZeFfuaMawc6eVoxq-Gc26e7gMMpNdUBjGqIFs3OOWTFtVbotKt4w)  


**One Virtual Appliance** is situated at **Site 1**, while another is at **Site 2**, featuring **Remote Contingency Disaster Recovery**.

### One PAM Crypto Appliance with no Backup (DR)

![](https://lh7-us.googleusercontent.com/PhOj3NS78G5Tb49WtxnV-ZcFifCDOkZn0Pd2pM5FmM4HTNeEgAwQJHSTpUjtaMJEsIYUZVFsLlD_zL39mLyjA21lg_zlBwx8P2fsdBkL_TgZE-TtEWCwraPpMOKcLfiWg00b5Y9McVClRvz_wZ8O05E)  


This scenario involves a **single PAM Crypto Appliance** on **Site 1** and no **Disaster Recovery** backup.

### Two PAM Crypto Appliances with HA and no Backup (DR)

![](https://lh7-us.googleusercontent.com/AG5WPxOpTEzBiaXNQtIImO_y0DpdQtGzhSvKaVjquBo07U-MMiifowhAq4sY8M2EanvWeKap2BbHHzhDd_1e_KYno5gsDSD_ux4hid7NnxHY9JWnn7isNC2klC80Y9C7Lb3v_N3veWgwOCruFyerFU4)

**Two PAM Crypto Appliances** are deployed on **Site 1** with **High Availability (HA**) between the appliances. No backup (DR) is included.

### Three PAM Crypto Appliances with HA and a Backup (DR) without HA

![](https://lh7-us.googleusercontent.com/WnjnFqgwRV6SZINcPW4udMCBg85SaWe4m80fiKBZAlwAek1dAeRbO6ztHNBnot3hbT9a5CgD1IdkPCsiy8BfdCl-lGPLY3cCUZ5JwHYzDJdStaq3wzlLKshrt0MCKvksegC5jj6yhuFgO_fUmqAFJ6k)  


**Site 1** hosts **two PAM Crypto Appliances** (primary and secondary), with **High Availability** between them. **One PAM Crypto Appliance** is situated on **Site 2**. **High Availability** is exclusive to inter\-site connections, and DR backup doesn’t include HA.

### Four PAM Crypto Appliances with HA and a Backup (DR) with HA

![](https://lh7-us.googleusercontent.com/tKQRk-tTrT_BVGWlYqGvddIqnI4Z99kw1kRgflvh4g9_Ge4pXa5DKXBEtuqI-BXV_JvhBHpORwSd14SJ22ATrFDCAHKNxaBgU6J0jil4245Ax74ZDlWhWLlz_0oUu8NcrPJmw9hb2KDkEfBIgnS8gEU)  


**Two PAM Crypto Appliances** (primary and secondary) are on **Site 1**, and **two PAM Crypto Appliances** are on **Site 2**. This scenario features **High Availability** between sites and includes DR backup.

### Six PAM Crypto Appliances with HA and two Backups (DR) with HA

![](https://lh7-us.googleusercontent.com/nMDCoeoerhaOvwLE5kBmdrpVgY7oszr2WFNtnNQan5v3loLmNuZbarDXLC37KNbIZctPPdChs_sOdmSC-ViKc0Kjk35Fs_BgNVpMvl51CmRAHPie-MSRkl-s4ADEO9V-ooPysCL3YqlnZdHKG1_tVpI)  


This architecture spans **3 Sites, each with two PAM Crypto Appliances** (primary and secondary). It provides **High Availability** between sites and includes two backups with HA.

  
