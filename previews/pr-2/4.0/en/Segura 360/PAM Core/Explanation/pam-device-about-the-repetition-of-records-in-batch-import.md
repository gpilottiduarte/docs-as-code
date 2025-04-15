# About the repetition of records in batch import

When performing a **Batch Import**, it's essential to understand how repetitions are handled in each scenario:

1. **Matching devices:** when a device populated in the spreadsheet has the same name as a device already registered in Segura, the existing device will be updated with the new information from the spreadsheet.
2. **More than one user for one device:** if you want to register more than one user on the same device, you need to repeat the process of filling in the required fields of the device in the spreadsheet. This will keep the device intact and automatically associate the new credentials.
3. **Deletion of credentials:** in case any credential is added improperly and needs to be deleted, simply fill in the first column of the spreadsheet with the letter **D**. This will perform the deletion action and deactivate the corresponding credential.

## Scenarios to be considered

When importing the file, the following scenarios will be considered:

- **Unregistered devices and credentials:** if the devices and their credentials aren't currently registered in Segura, appropriate records will be created for them.

:::(Info) (Info)
When entering an unregistered credential, it’s important to include the hostname or IP of the device to which it’ll be associated.
:::

- **Registered devices and unregistered credentials:** the records will be updated and credentials registered based on spreadsheet info.

- **Registered devices and credentials:** the existing records will be updated with the information filled in the spreadsheet.