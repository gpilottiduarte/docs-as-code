# About filling in the template file

In order to perform a correct import, it’s crucial to check that the entities have been filled in properly. Otherwise, there may be unnecessary registrations of devices or credentials.

The import spreadsheet can be used both, to update devices and credentials already registered in the environment, and to insert new records. When you download the template file, you must fill in the spreadsheet with the required values.

## Action for Registration

In this field, you must indicate the action to be performed in relation to the records in the worksheet. Use **I** to insert, **U** to update and **D** to delete records.

### Note

If this field remains blank, the system will search for the devices and/or credentials. If no references are found, the default action is to insert new records. On the other hand, if references are found, the default action is to update existing data.

## Caution

If there are any inactive devices or credentials on the senhasegura platform that have the same names as those in the import table, those records won’t be duplicated. Instead, any devices or credentials that are inactive will be updated and may require manual activation if needed.