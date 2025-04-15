# Upgrade Notes

The goal of version 4.0 is to prioritize the end-user experience, ensuring that every interaction with Segura’s product is intuitive and valuable. We are confident that these improvements will transform the way you use our security tools.

With the significant usability enhancements introduced in version 4.0, our documentation team is actively working to update all articles and ensure they align with the new visual and structural standards.

As a result, some documents may not yet fully reflect the new layout. We appreciate your understanding. Check out all the details below:

### **New User Experience: Customization and Modernity**

Get ready for a refreshed look\! We have redesigned the platform’s layout to a more modern and clean standard. With this update, icons have been redesigned and iconography standardized, creating a more cohesive and intuitive environment. Additionally, menus have been restructured to provide a simpler and smoother navigation experience.

4.0:
<p style="text-align: center"><img src="https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/chrome_a7UkZvrtlz%281%29.png" style="width: auto; height: auto;"></p>


3.33:
<p style="text-align: center"><img src="https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/chrome_BQA38yQiLh%281%29.png" style="width: auto; height: auto;"></p>


### **Security Panel with Drag-and-Drop**

We have simplified security management with a customizable panel that offers intuitive and efficient interaction through drag-and-drop functionality.

4.0:
<p style="text-align: center"><img src="https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/chrome_br0RcLW08m%281%29.png" style="width: auto; height: auto;"></p>

### **Registration Wizards: More Clarity and Ease**

We have simplified the registration process, turning it into an intuitive step-by-step flow. Complex registrations, such as credentials and third-party registrations, have been broken down into simple and direct steps. This new system, based on a "Wizard," ensures clarity and optimizes workflow, making the user experience more efficient.

4.0:
<p style="text-align: center"><img src="https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/chrome_az094Z78Tf%281%29.png" style="width: auto; height: auto;"></p>

3.33:
<p style="text-align: center"><img src="https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/chrome_TZRyvv6b90%281%29.png" style="width: auto; height: auto;"></p>

### **Integrated Notification Center**

The new Notification Center unifies all alerts in a single panel, with practical options for quickly responding to necessary actions. Stay informed about the latest Segura updates in an effective and organized way.

For more information, access the [Notification Center](/v4/docs/central-de-notificações) documentation.

4.0:
<p style="text-align: center"><img src="https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/chrome_S5MGigBOQE%281%29.png" style="width: auto; height: auto;"></p>

3.33:
<p style="text-align: center"><img src="https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/chrome_7PWs1hdLnl%281%29.png" style="width: auto; height: auto;"></p>

### **PAM Core Access Panel**

The Access Panel was created to significantly improve usability. With a visual interface and optimized filters, you can directly access and manage credentials. The detailed history, which previously required reports, is now available within the interface, reinforcing Segura as an auditable tool.

For more information, access the [Access Panel](/v4/docs/pam-credendital-access-panel) documentation. 

4.0
<p style="text-align: center"><img src="https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/chrome_TQpw85XFux%281%29.png" style="width: auto; height: auto;"></p>

### **New Global Search**

The global search in version 4.0 is now even more powerful. It expands throughout the system, making information access more efficient.

#### **Key Features:**

* Keyboard shortcuts to speed up searches.

* Search in any module without restrictions.

* Search history for easier information tracking.

* Flexible search for "parts" of terms, providing broader results.

For more information, access the [Global search](/v4/docs/global-search) documentation.

4.0:
<p style="text-align: center"><img src="https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/chrome_PWjMRswWvi%281%29.png" style="width: auto; height: auto;"></p>

3.33:
<p style="text-align: center"><img src="https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/chrome_1mtdBUT8kX%281%29.png" style="width: auto; height: auto;"></p>


### **\[PAM Core\] Privileged Access Recertification**

We have strengthened security and compliance with our access recertification process. It ensures that only the right people have access to resources, with permissions always up to date. This means increased security, compliance, visibility, and operational efficiency. **Best of all, we are the only Traditional PAM solution with this feature\!**

For more information, access the [Privileged Access Recertification](/v4/docs/settings-about-review-and-certification-of-access-and-user-policies).

### **[EPM] -  Product Name Change from GO to Endpoint Privilege Manager (EPM)**

To enhance growth and market consolidation, "GO Endpoint Manager" is now called **Endpoint Privilege Manager (EPM)**. This change simplifies product identification and demonstrates our commitment to industry best practices. The change applies to all related products, including Windows, Linux, and macOS, ensuring consistency across the entire product line.

* * *

:::(Warning) (Attention)
Starting from August 19, 2024, all updates will utilize the new Segura repository. The old repository will no longer be available after this date.

If you are using a very old version of Segura, you will need to update incrementally, passing through each intermediate version until you reach the latest version, as described in our documentation.
:::
:::(Warning) (Attention)
Proxy 2.0 is in Beta. We do not recommend using Beta versions in production environments.
:::
:::(Warning) (Caution)

Before executing the Segura update, **always run a snapshot on your hypervisor** and perform the [running and restoring backup](/v4/docs/orbit-web-how-to-backup-restore-and-logs)

:::

:::(Warning) (Caution)

If you use the **Segura Arbitrator**, remove it from the cluster before updating Segura. [Learn more in our documentation](/v4/docs/arbitrator-update).

:::

:::(Warning) (Caution)

Zabbix users must reconfigure the application if it presents any problem after updating. Find instructions in the article [How to configure Zabbix via Orbit CLI](/v4/docs/orbit-cli-how-to-configure-zabbix-via-orbit-cli).

:::


