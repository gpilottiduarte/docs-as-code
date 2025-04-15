# Como desinstalar o agente do EPM Linux

Para realizar a desinstalação do agente **EPM Linux**, digite os comandos no shell:

```bash
$ sudo secpack-uninstall
```

Ao executar os comandos acima, você verá a saída de desinstalação do agente do **EPM Linux.** Ela deve se parecer com o exemplo abaixo:

```bash
Stopping senhasegura PEDM service...
Removing PAM senhasegura module...
Files removed successfully!
Removing kernel module...

-------- Uninstall Beginning --------
Module:  caitsith
Version: 3.28.0
Kernel:  4.19.0-22-amd64 (x86_64)
-------------------------------------

Status: Before uninstall, this module version was ACTIVE on this kernel.

caitsith.ko:
 - Uninstallation
   - Deleting from: /lib/modules/4.19.0-22-amd64/updates/dkms/
 - Original module
   - No original module was found for this module on this kernel.
   - Use the dkms install command to reinstall any previous module version.

depmod......

DKMS: uninstall completed.

------------------------------
Deleting module version: 3.28.0
completely from the DKMS tree.
------------------------------
Done.
Kernel module removed!
Uninstallation completed!
A system reboot is required for completing the uninstallation process.
```

Para finalizar a desinstalação, certifique-se de reiniciar a máquina.  

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).