# Notes screen

In this document, you’ll find detailed information regarding **MySafe**’s **Notes** page.

## Path to access

1. On senhasegura, in the upper-left corner, click the Grid Menu, represented by the nine squares, and select **MySafe**.
2. In the side menu, select **Notes**.

***

## Top bar

| **Item**| **Description**|
|------|------|
| **Show filters**| Represented by the magnifying glass icon, it displays or hides the search fields on the screen.|
| **Update**| Represented by the counterclockwise arrow icon, it refreshes the page.|
| **View actions**| Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report. |
| **Add note**| Represented by the plus sign, it opens the **[Add note](/v3-33/docs/mysafe-notes-screen#addedit-note-screen)** screen.|
| **Print report**| Represented by the printer icon, it opens a new page for printing the report.|
| **Export CSV**| Represented by the paper sheet icon, it downloads the report.|
| **Schedule report** | Represented by the clock icon, it opens the **[Schedule report](/v3-33/docs/general-information-how-to-issue-download-and-schedule-device-reports)** screen.|

## Search fields
| **Item**| **Description**|
|----|----|
| **ID**| Field that filters notes by their unique identification code.|
| **Name**| Field that filters notes by their name.|
| **Tags**| Field that filters notes by associated keywords.|
| **Shared**| Field that filters notes by their sharing status. The available options are **Yes** and **No**. Click Clear to enable the **All** option.|
| **Owner**| Field that filters notes by the name of the user who registered it.|
| **Last use**| Field that filters notes by the period during which the notes were viewed. Format `MM/DD/YYYY`. Use this field to enter the start date of the period. The downward arrow opens a calendar. |
| **until**   | Field that filters notes by the period during which the notes were viewed. Format `MM/DD/YYYY`. Use this field to enter the end date of the period. The downward arrow opens a calendar.|
| **Enabled** | Field that filters notes by their activation status. The available options are **Yes** and **No**. Click Clear to enable the **All** option.|

## Report fields

- **Checkbox**: used for batch actions.
- **ID**
- **Name**
- **Tags**
- **Shared**
- **Owner**
- **Last use**
- **Enabled**
- **Action**: in this column, you’ll find the following options:
  - **View note**: represented by the key icon, it opens the **[Note details](/v3-33/docs/mysafe-notes-screen#note-details-screen)** screen with all information about the password.
  - **Three vertical dots icon**: opens a drop-down menu with the options: *Share, Edit, Disable*, and* Information history*.

:::(Info) (Info)
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.
:::



## Bottom buttons

- **Enable**: button used for batch activation.
- **Disable**: button used for batch deactivation.
- **Share**: button used for batch sharing.


### Note details screen  
In this section, you’ll find all the information about the **Note details** screen.

| **Item**| **Description**|
|-----|------|
| **Name**| Name assigned to the note.|
| **Owner**| The user who registered the note.|
| **Last use**| The date and time when the note was last viewed.|
| **Tags**| Keywords associated with the note.|
| **Notes**| Observations about the note.|
| **View the information**| Represented by the list icon, it opens the Protected information pop-up window which displays the content of the note.|

:::(Warning) (Attention)
By clicking **Copy password**, the information will be added to the clipboard and other programs will be able to access it.
:::

#### Users with access to information section

| **Item**=| **Description**=|
|-----|-----|
| **Member**| Name of the **MySafe** user with access to the note.|
| **Can view?**| Indicates viewing permission for the note details. By default, whenever a note is shared, this column is marked with **Yes**.|
| **Can edit?**| Indicates editing permission for the note details. The available options are **Yes** and **No**.|

### Add/Edit note screen
In this section, you’ll find all the information about the **Add note** and **Edit note** screens, which have the same fields.

| **Item**| **Description**|
|----|-----|
| **Name***| Field for entering a name for the note.|
| **Note***| Text box for entering the note you want to protect. <br>**Limit**: 900 characters.|
| **Tags**| Keywords associated with the note.|

:::(Info) (Info)
The items with an asterisk are mandatory.
:::

### Note history information screen

In this section, you’ll find all the information about the screen where you can view the version histories of a note.

### Search fields


| **Item**| **Description**|
|-----|----|
| **Name**| Field that filters notes by their name.|
| **Author**| Field that filters notes by the user who made a change.|
| **Version**| Field that filters notes by their version change.|
| **History date** | Field that filters notes by the period during which the change was made. Format `MM/DD/YYYY`. Use this field to enter the start date of the period. The downward arrow opens a calendar. |
| **until**| Field that filters notes by the period during which the change was made. Format `MM/DD/YYYY`. Use this field to enter the end date of the period. The downward arrow opens a calendar.|

### Report fields

- **Name**
- **Author**
- **Version**
- **History date**
- **Action**: in this column, you access
  - **View note**: represented by the magnifying glass icon, it opens the **[Note details](/v3-33/docs/mysafe-notes-screen#note-details-screen)** screen.

:::(Info) (Info)
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.
:::