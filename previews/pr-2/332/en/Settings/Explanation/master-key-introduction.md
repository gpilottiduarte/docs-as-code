The **Master Key** is the key that encrypts and opens the data. This key is generated using the **[Shamir](https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing)** algorithm and distributed in different parts to the **Key Keeper Masters**.

senhasegura exports all privileged information to the configured storage directory, such as:

* Cloud IAM credential
* Cloud IAM User
* Credential
* DSM Secret
* Secret
* SSH key
* Others

They are encrypted using the advanced encryption standard **[AES\-256](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)** and made available in separate files for each piece of information and respecting the different values it may have. By putting together the parts of each guardian's key, it is possible to access the complete **Master Key** and use it to recover the encrypted backup.

InfoThe process of issuing and distributing the key parts is called the **Master Key Ceremony**.

To configure the **Master Key**, follow the steps below:

* [Configure Storage Directory](/v3-32/docs/master-key-backup-directory)
* [Generate remote ceremony from the master key](/v3-32/docs/master-key-ceremony)
* [View parts of the Master Key](/v3-32/docs/master-key-view-parts)
* [Revealing the Master Key](/v3-32/docs/master-key-reveal)
* [Open backup files](/v3-32/docs/master-key-open-backup-files)
* [Follow the progress](/v3-32/docs/master-key-follow-the-progress)
