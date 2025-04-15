# How to perform disk management

This article describes the procedure for disk management in a virtual environment using the `orbit disk`.

## orbit disk command
The `orbit disk` command provides tools for disk management, including virtual disk expansion and obtaining information about their partitions.

```
orbit disk --help
Usage: orbit disk
Disks management tools
Flags:
-h, --help: Show context-sensitive help.
--force: Force the command execution, never prompt
Actions:
--expand: Process of disk expansion
--show: Show disk information
```
### Disk expansion
To expand a virtual disk and consume new allocated spaces in the hypervisor, use the `--expand` argument.
:::(Warning) (Caution)
The disk expansion procedure is very delicate. It is recommended that the instance be in maintenance mode and that a backup and server snapshot have been taken.
:::

```
orbit disk --expand
The disk expansion process is extremely delicate, be sure to take a snapshot
of the server before performing this procedure.
All previously unallocated disk resources will be distributed across current
partitions.
Are you sure you want to expand the disk: y
Done!
No errors reported
```
