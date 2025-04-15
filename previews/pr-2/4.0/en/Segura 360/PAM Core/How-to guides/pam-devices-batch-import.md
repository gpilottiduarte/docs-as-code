# How to perform a batch import

## How to create the import

:::(warning) (Warning)
Read the instructions on how to fill in the fields in the spreadsheet.
The instructions can be found in the template file.
**Avoid reusing spreadsheets, always use the latest template**.
:::

:::(error) (Important)
It's important to note that when importing credentials to Microsoft Excel, it interprets the semicolon (;) character as a separator. Due to technical reasons related to Excel's architecture, the import spreadsheet will disregard the semicolon character and carry out the import process without errors. Therefore, you should avoid using semicolons in your credentials when importing via spreadsheet. However, if you register your credentials directly on the platform, you can use semicolons without issues.
:::

To upload the import file, follow these steps:

1.  On Segura, in the navigation bar, hover over the **Products menu** and select **Devices**.
2. In the side menu, select **Batch Import**.
3. In the bottom-right corner, click on **+ Import**.
4. At the **Batch import** screen, click on **Drag and drop the file here**, and select the desired file.
5. Click on **Save**.

## About the file processing trace

To verify the report upload, go to **Devices > Batch Import**

Files still being processed will be in a waiting state, once the processing is finished, the status will change to **Finished**.

If the import is invalidated by an error, the record will turn red, and the **Error** column will be marked **Yes**.

:::(Info) (Info)
Check the processing details using the registration action **Process Details**.
:::

On the import details screen, download the information generated in operation. This file will have the line in which the detail occurred, the type of alert, and the description of the action taken by Segura.

It is important to mention that even if a file ends with an error, this does not mean that devices and credentials were not created or changed during the process. Therefore, correct the information indicated by Segura and continue importing the spreadsheet until the desired result has been achieved.

:::(Info) (Info)
The batch device import worksheet by default for other languages is in English.
:::


***

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).