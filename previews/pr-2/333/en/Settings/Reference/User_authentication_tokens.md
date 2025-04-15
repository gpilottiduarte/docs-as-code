# User authentication tokens

This document provides a general overview about the **User authenticatioon tokens** functionality.

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Authentication > User authentication tokens**.

## Top bar

| Item                 | Description                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------- |
| **Show filters**    | Represented by the magnifying glass icon. Displays or hides the search fields on the screen. |
| **Update**          | Represented by the counterclockwise arrow icon. Refreshes the page.                          |
| **View actions**    | Represented by the three vertical dots icon. Displays the possible actions for the page.     |
| **Print report**    | Represented by the printer icon. It opens a new page for printing the report.                |
| **Export CSV**      | Represented by the sheet of paper icon, downloads the report.                                |
| **Schedule report** | Represented by the clock icon. It opens the window for scheduling the report.                |

## Search fields

| Item      | Description                                                                                                                                                                                                                                                                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **User**      | Used to search for the token by the user's personal name.                                                                                                                                                                                                                                                                                               |
| **Username**  | Used to search for the token by username.                                                                                                                                                                                                                                                                                                               |
| **Validated** | Used to search for the token by validation. It can be **All** (for all tokens), **Yes** (for validated tokens only) and **No** (for non-validated tokens only). **Note:** a user is considered validated when they have completed the token generation procedure and validated it with the generated code. |

## Report fields

The results are displayed as a list on the screen, with columns named according to the corresponding fields. The list shows the following fields:

* **User**.
* **Username**.
* **Set on**: date of the authentication configuration.
* **Validated**.
* **Rely on IP**: IP address from which the user can log in.
* **Trust to**: date set according to the configuration in the system parameters.
* In the **Action** column, you can **Delete Token** by clicking on the option represented by the trash can icon.

## Footer

In the bottom right corner, you have two more options:

| Item                                 | Description                                                                                         |
| ------------------------------------ | --------------------------------------------------------------------------------------------------- |
| **Delete token**                    | Opens the confirmation modal for deleting the token.                                                |
| **Delete tokens and disable users** | Opens the confirmation modal for deleting the record and inactivating the user linked to the token. |