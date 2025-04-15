# How to uninstall the EPM Linux agent

To uninstall the **EPM Linux** agent, type the following commands into the shell:

```bash
$ sudo secpack-uninstall
```

When you run the commands above, you'll see the uninstall output from the **EPM Linux** agent. It should look like the example below:

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

To finish uninstalling, make sure you restart the machine.  

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).