# Home

The Cloud Entitlements’ homepage works as a central hub for monitoring your cloud identities and accessing important information about their health and security recommendations.

In this article, you can consult the key features and sections available on **Home**.

---

## Connect accounts
On the upper right corner of the Home page you can find a shortcut to connect your accounts to Cloud Entitlements. 

By clicking the icon **Connect**, you will open a drop-down menu. Choose a Cloud Service Provider (CSP) and click on it to be redirected to the **Cloud setup** page. 

---

## Filter data by tags

On the upper-left corner of the Home page, you can filter the accounts connected to **Cloud Entitlements** based on their tags.

You can attribute up to 10 tags to accounts.

Tags can be attributed when you connect a new account by clicking on **Connect** or editing an already connected account.

---
## Cloud health

At the top of the **Home** page, you'll find the **Cloud health** chart, providing insights into the security levels of your cloud environments registered in **Cloud Entitlements**.

The security of your cloud environments is assessed based on criticality levels, with 0% indicating an unsafe environment and 100% representing a fully secure environment.
:::(Info) (Info)
The **Cloud health** chart utilizes the criticality levels defined in your **Security policies** to determine the security percentage of the environments.

:::
By clicking the expand icon, identified by a box and an arrow, you’ll open a 3D chart that presents information in four levels:

1. **Tenant**: positioned at the center of the graph, this level provides an overview of the Cloud Entitlements tenant.
2. **CSPs**: displays the connected Cloud Service Providers associated with the Cloud Entitlements tenant.
3. **Accounts**: displays the accounts of the CSPs connected to the Cloud Entitlements tenant. It’s represented by a blue dot.
4. **Identities**: provides the identities associated with each CSP account connected to Cloud Entitlements. The representation uses dots in different colors to indicate the impact level of the identity in your environment:

| **Color**      | **Impact level**   |
|------------|-----------------|
| **Dark green** | Lowest impact   |
| **Light green**| Low impact      |
| **Yellow**     | Moderate impact |
| **Orange**     | High impact     |
| **Red**        | Highest impact  |

### Identity information view:
When clicking on an identity node in Cloud Health, it's possible to open a sidebar displaying a summary of relevant information about the identity. This information includes:

* Full name of the principal.
* Identity type.
* Identity account.
* Impact score.
* Number of high recommendations.
* Number of medium recommendations.
* Number of low recommendations.
* Shortcut to detail screen.

---

## Recommendations report
Here, you can find an overview of the identities that have received a high number of recommendations. 

This information helps you prioritize your actions and focus on improving the security and efficiency of your cloud resources.

---

## Criticality recommendations
Next to the Recommendations report, you can consult your number of recommendations, classified by the following levels of criticallity: 


* High
* Medium
* Low

The criticality levels are defined by the Security Policies. If you need more information about it, refer to the article [Security policies](/v4/docs/cloud-entitlements-security-policies). 


---

## Dashboards
The home page includes various dashboards that offer valuable insights into your cloud identities' health and recommendations. Here are the dashboards available:

* **Your Cloud Identities Health**: Monitor the overall health and status of your cloud identities based on two states:  **Vulnerable** and **Not vulnerable**.

* **Recommendations by Provider**: Track recommendations based on the CSPs you’re using.

* **Recommendations by Account**: Track recommendations based on the specific connected account.

* **Recommendations by Identity Type**: Displays recommendations based on different identity types.

---

## Suggested, followed, and pending recommendations
Here, you can find information about the total number of suggested recommendations, recommendations you have followed, and recommendations awaiting action. 

---

## Last seven days recommendations
On this graph, you have access to a history of issues and their resolutions from the last seven days.

---

## Identities visibility graph
Lastly, the home page features a graph showcasing the number of identities visible by Cloud Entitlements. 

This graph provides a comprehensive view of the identities being monitored. 

:::(Info) (Info)
You can generate a PDF report based on the displayed information in the dashboard using the export button.
:::