ImportantThe encryption of a backup is generated using the master key that was active in the system at that precise moment. If a new master key ceremony has taken place, resulting in the creation of a new cryptographic key, it won’t be possible to access a previously created backup since it’s associated with the previous master key.

InfoOur system automatically generates daily backups and updates whenever there are changes to credentials. Always refer to the most recent backup to ensure the security and currency of your information.

## How to open backups on Windows

### Requirement

* You must have installed **[AES Crypt for Windows](https://www.aescrypt.com/windows_aes_crypt.html)** to decrypt the backup files.
1. Access a shared folder that receives the senhasegura backup data.
2. Locate a folder where the stored files are stored and get it from the **secret** folder.
3. Search for the file you want to open the file.
4. Click on the desired file that contains the **.aes** extension.
5. Restore encrypted data using Master Key.

The software decodes the backup file, generating a file with the CSV extension in the same directory as the backup file. By opening the CSV file, you can view all the credentials and passwords that were registered and saved in the backup file.



---

## How to open backups on Linux

### Requirement

* You must have installed **[AES Crypt for Linux](https://www.aescrypt.com/download/)** to decrypt the backup files.
1. Access a shared folder that receives the senhasegura backup data.
2. Locate a folder where the stored files are stored and look for the path **/srv/backupremoto/secrets/** if you have saved it in your local directory.
3. Choose a folder that contains the data you want to back up.
4. Choose the information.
5. Choose the folder that contains the file with the extension **.aes.**
6. Type `aescrypt -d -p MasterKeyPassword file.aes` to decrypt the file.
