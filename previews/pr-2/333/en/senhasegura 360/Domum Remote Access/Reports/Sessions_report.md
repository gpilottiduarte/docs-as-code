# Sessions report

This article provides descriptions of the information available in **Domum Remote Access** session reports.

<!-- Fix callout -->
:::(Info) (Info)

Paths to access:

- **Domum Remote Access > Reports > Sessions**
- **Domum Remote Access > Dashboards > Vendors > Behavior > Current accesses**
- **Domum Remote Access > Dashboards > Internal user groups > User behavior > Current access**

:::

The reports show session details and allow you to check credentials and devices used.

---

## Icons

In the upper right corner, you have the following icons:

<!-- Fix link -->
| Item | Description |
| --- | --- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page.|
| **View actions** | Represented by the three vertical dots icon, it displays a dropdown menu with possible actions for reports. |
| **Print Report** | Represented by the printer icon, it opens a new page for printing the report.|
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the [Schedule report](/v3-33/docs/general-information-how-to-issue-download-and-schedule-device-reports) form. |

---

## Search fields

If you activate the magnifying glass icon in the top right corner of the screen, you can access search options for the reports. Once you have applied the desired filters, the system displays the results in a list format.

| Item | Description |
| --- | --- |
| **ID** | Used to search for the session by its identification code.|
| **Credential** | Used to search for the session by the used credential.|
|**Device** | Used to search for the session by the device the user accessed. |
| **Vendor** | Used to search for the session by the vendor's name linked to the user who performed the session. |
| **User** | Used to search for the session by the name of the user who performed the session.|
|**Session start** |Used to search for the session by date. It displays a calendar to set a start date and create a time range.|
| **until** | Used to search for the session by date. It displays a calendar to set a final date and create a time range. |
| **Filter** | The button to execute the configured filtering process.|
| **Clear** | The button to clear the fields with information. |

The displayed list provides additional information that complements the search fields:

- **Origin IP**:  user's IP address at the time of access.
- **Protocol**:  the protocol used to perform the session.
- **Session ID**:  the session ID code.
- **End**:  when the session has ended.
- **Time**:  the session duration.

<!-- Fix callout -->
:::(Info) (Info)
senhasegura stores the remote sessions that occurred via Domum, making them available for consultation.
:::
