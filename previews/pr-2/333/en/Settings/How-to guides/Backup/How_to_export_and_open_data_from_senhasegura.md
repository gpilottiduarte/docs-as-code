# How to export and open data from senhasegura

## Requirements

* Have the System Administrator role.

## Path to access

1. In senhasegura, in the upper-left corner, click the Grid Menu, represented by nine squares, and select **Settings**.  
2. In the side menu, select **Backup \> Export history**

## Export data

1. In the **Export history** report, in the lower-right corner, click **Export info**.  
2. You'll be directed to the **Export info** window. In this window, fill in the following fields:  
   1. **Key mode**: select one of the two options:  
      1. **Parts**: you'll need to enter the parts of the master key.  
         1. In this case, you should enter one part per line in the text field **Parts of ley (one per line)**, which is located just below the two options.  
      2. **Complete key**: you'll need to enter the master key obtained in the master key ceremony.  
         1. In this case, you should enter the complete master key in the text field **Master key**, just below the **Parts of key** field.  
3. Click **Export data**.

A message indicating the success of the operation will appear, and the export request record will be displayed in the **Export history** report. To download the data, you'll need to wait until it becomes available. When the download is ready, the **Download** option will be available in the **Action** column of the report.

## Open the backup file 

The encryption of a backup is generated based on the master key that was active in the system at that exact moment. If a new master key ceremony has occurred, resulting in the generation of a new cryptographic key, it won't be possible to access a backup created earlier, as it's linked to the previous master key.

### Requirements

* [You must have AES Crypt](https://www.aescrypt.com/) installed, according to the operating system you're using, to decrypt the backup files.  
* The procedures described below assume that the directories and paths indicated are the default directories and paths.

## Open files on Windows

1. After clicking **Download**, a `tar.gz` file will be downloaded. You'll need to unzip this file.  
2. After unzipping the backup file, navigate through the folder structure to the data you want to decrypt.

## Directory structure

The directory structure for saved files follows this pattern:

```
YYYY-MM-DD/
├── Credentials/
│   ├── [device1]/
│   │   └── credential_1.aes
│   ├── [device2]/
│   │   └── credential_2.aes
│   └── [deviceN]/
│       └── credential_N.aes
└── Sshkeys/
    └── ...
```

Where:

* YYYY-MM-DD represents the file creation date (year-month-day).  
* \[dispositivo1\], \[dispositivo2\], etc., are the names of devices registered in the vault.

## Locating and decrypting process

1. Access the folder with the desired date (for example, `2024-09-13`).  
2. Access the `Credentials` subfolder.  
3. Choose the folder of the specific device (for example, `ubuntu`, `debian`, `win2000`).  
4. Locate the `.aes` file corresponding to the desired credential (for example, `credencial_1.aes`). To decrypt the `.aes` file, use the **AES Crypt**.

### Example

For a file created on September 13, 2024, containing credentials for an Ubuntu device:

1. Access the `2024-09-13` folder.  
2. Enter the `Credentials` subfolder.  
3. Open the `ubuntu` folder.  
4. Locate the `credential_1.aes` file.  
5. Use **AES Crypt** to decrypt `credential_1.aes`.

:::(info) (Info)  
Make sure you have the necessary permissions and the correct decryption key when using AES Crypt.  
:::

## Open files on Linux

1. Through the command line, access the shared folder that receives the senhasegura backup data.  
2. Locate the folder where the files are stored and look for the path `/srv/backup_remoto/secrets/`.  
3. Choose the folder with the date you want to access the backup.  
4. Choose the file with the `.aes` extension. In the terminal, type the command `aescrypt -d -p <MasterKeyPassword> <file.aes>` to decrypt the backup file.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).