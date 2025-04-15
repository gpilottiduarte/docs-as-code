# Provider by user

This document provides a general view for the **Provider by user** functionality.

## Path to access

1. On senhasegura, in the upper-left cornet, click the **Grid Menu**, represented by the nine squares, and select **Settings**.
2. On the side menu, select **Authentication > Provider per user.**

## Top bar

| Item                      | Description                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| **Show filters**    | Represented by the magnifying glass icon. Displays or hides the search fields on the screen. |
| **Update**          | Represented by the counterclockwise arrow icon. Refreshes the page.                          |
| **View actions**    | Represented by the three vertical dots icon. Displays the possible actions for the page.     |
| **New**             | It opens the **New provider** by userform.                                                  |
| **Print report**    | Represented by the printer icon. It opens a new page for printing the report.                |
| **Export CSV**      | Represented by the sheet of paper icon, downloads the report.                                |
| **Schedule report** | Represented by the clock icon. It opens the window for scheduling the report.                |

## Search fields

| Item          | Description                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **ID**       | Used to search for the configuration (specific provider for a specific user) by its identification number in the system. |
| **User**     | Used to search for the configuration by the user's first name.                                                           |
| **Username** | Used to search for the configuration by the person's username.                                                           |
| **Provider** | Used to search for the configuration by the configured provider.                                                         |
| **Enabled**  | Used to search for the configuration by its status in the system. It can be **Yes** or **No**.                         |

## Report fields

The results are displayed in a list format on the screen, with columns named according to the corresponding fields. The list provides information that is not included in the search fields:

* **ID**.
* **User**.
* **Username**.
* **Provider**.
* **Order**: the number represents the position of the provider for use by the system to authenticate the specific user.
* **Enabled**.
* The **Action** column contains two options:
  * **Delete**: Represented by the trash can icon, it opens a pop-up message to confirm the deletion of the configuration.
  * **Edit**: Represented by the pencil and paper icon, it opens the form to set the provider and order of use for a specific user.