# How to Collect Personal Information

The Personal Information Report feature enables users to export a PDF report that contains all of their personal information. This report complies with LGPD and GDPR regulations and can be requested by the user at any time.

The following information will be displayed in the report:

- Name
- Username
- Email
- Phone
- Department
- Access history

## How to Extract the Report

The report can be extracted in two ways:

**As user**

1. To extract the report, follow these steps:
2. Click on the personal menu in the upper right corner.
3. Select "History".
4. The report will be available for download.

**As administrator**

To extract the report as an administrator, follow these steps:

1. Log in to the system with a user account that has the permission role "Settings.UserManagement.Write.”
2. Go to the **User management → Users** screen.
3. Click on the "History" action.
4. The report will be available for download.

## Personal Information Log Generation

For the access history section of the report, the following information will be included for each access:

- Date and time
- IP address
- Country
- Region
- Operating system
- Browser
- Browser version

To access the report that records all downloads of the personal information report, follow these steps:

1. Log in to the system with a user account that has the same permission as others in the "Traceability" menu.
2. Go to the **Reports > Traceability > User history download** screen.
3. Look for the specific download in the list of downloads.
4. The report will contain information about who downloaded the personal information report and whose information it contains.

:::(info) (Note)
Note that the access history can be obtained in the report "/flow/log/usuario/acesso/report".
:::

:::(info) (Note)
Notifications will be generated in the syslog whenever a report is generated, informing who downloaded it and whose information it contains.
:::