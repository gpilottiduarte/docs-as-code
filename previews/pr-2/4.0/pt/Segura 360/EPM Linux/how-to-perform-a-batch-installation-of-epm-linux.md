# Como realizar uma instalação em lote do EPM Linux

É possível realizar a instalação em lotes do EPM Linux, de forma silenciosa e automatizada. Essa abordagem elimina a intervenção manual no momento da instalação, garante a compatibilidade multiplataforma e simplifica o *rollout* em larga escala.

## Script de instalação

Para realizar a instalação em lote, utilize o seguinte `shell script`:

```shell
#!/bin/bash
secpack-installer-4.0.0-1.run --quiet -- --IP="10.66.33.48" --BOOTSTRAP_TOKEN="0191b316-aa90y887-738b-8eb4-ffb7a942d87a"
```

No caso, você deverá passar dois parâmetros:

* `IP`: endereço IP da sua instância do senhasegura.  
* `BOOTSTRAP_TOKEN:` valor do token obtido na sua instância do senhasegura. Este é o mesmo token de instalação utilizado  na instalação simples.

Você pode salvar esse script em um arquivo `.sh` e executá-lo ou digitá-lo diretamente no terminal. Ambas as opções  funcionam do mesmo modo.

## Validar a instalação

Para validar a instalação, execute o comando: `systemctl status secpack-maestro`  
A saída deverá ser:

```shell
secpack-maestro.service - senhasegura security pack daemon
   Loaded: loaded (/etc/systemd/system/secpack-maestro.service; enabled; vendor preset: disabled)
   Active: active (running) since Mon 2025-01-27 11:45:00 -3; 58s ago
 Main PID: 3348 (secpack-maestro)
   CGroup: /system.slice/secpack-maestro.service
           └─3348 /usr/bin/secpack-maestro
```

Alternativamente,  verifique se as regras estão sincronizadas executando o seguinte comando: `sudo` `cat /etc/sudoers.d/senhasegura/`

A saída deverá ser assim:

```shell
%gonix ALL=(ALL:ALL) /usr/bin/lsusb
%gonix ALL=(ALL:ALL) NOPASSWD: /usr/bin/groups
%gonix ALL=(ALL:ALL) NOPASSWD: /usr/bin/cat
%gonix ALL=(ALL:ALL) NOPASSWD: /usr/sbin/reboot
%gonix ALL=(ALL:ALL) NOPASSWD: /usr/bin/ld
```

As duas saídas confirmam que o serviço está funcionando corretamente.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).  