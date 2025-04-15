# Identities report

Cloud Entitlements offers a report of the identities registered within your Cloud Service Providers (CSP). In this article, you’ll find a description of the information contained in the report. 

To access the **Identities report**, click **Identities**, located on the left side menu. 


| **Item** | **Description** |
| --- | --- |
| **Cloud Service Provider** | Displays an icon representing the associated CSP for the identity.
|**Environment** |Informs the name of the environment within Cloud Entitlements to which the identity is associated.
| **Type** | Indicates the type of the identity. |
| **Principal** | Provides the name of the identity within the CSP. |
| **Impact** | Provides the risk level associated with the identity's impact on your environment. The impact level is categorized from A to E, with A representing the lowest impact and E representing the highest. |
| **Recommendations**| Provides the number of recommendations linked to the identity. The criticality levels of the recommendation are indicated by colors. Red indicates high, Orange indicates medium, and Yellow indicates low.
| **Date and time of the Last scan synchronization** | Informs the exact date and time when the synchronization with the identity occurred.

::: (error) (Important)
If an AWS account access key is no longer valid, a red alert will be displayed next to the account icon, and as a result, the date and time of the last scan synchronization will no longer be updated.
:::



:::(info) (Info)
Cloud Entitlements scans the environments every 4 minutes.
:::

Use the search bar at the top of the report to look for a specific identity.

Next to the search bar, you'll find filters that allow you to refine the report based on:

* Provider.
* Environment.
* Identity Type.
* Admin.

::: (info) (Info)
You can combine filters to enhance your search results.
:::
The reports can be exported to CSV format by clicking on the button represented by a downward arrow, located on the right side of the report.