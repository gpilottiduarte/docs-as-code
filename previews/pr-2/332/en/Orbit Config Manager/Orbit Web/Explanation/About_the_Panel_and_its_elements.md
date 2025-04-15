# About the Panel and its elements

The **Orbit Web** system presents a different interface compared to other operational screens of the system. Its forms and reports, despite featuring slight design changes, follow the same operational principles.

## Instance Type
The instance type determines its intended use. This distinction results in variations in the behavior of license usage.

### Production

This type of instance will cease to function 7 days after the license expiration. While active, all functionalities will be active according to the applied license type, and emails and notifications will be sent to recipients.

### Contingency

Similar to production, this type of instance will only be activated for user use by administrator decision or intelligent balancing mechanisms. In versions prior to senhasegura 3.0.0, the contingency could not operate in conjunction with the production instance. This limitation no longer exists. However, users will be alerted by a banner on the login screen indicating that they are accessing a contingency instance.

### Testing

This type of instance will stop functioning immediately after the license expiration. However, the email recipients will always be replaced by the requester's email to avoid confusion between the productive environment and the testing environment that may jeopardize the corporation's operation.

### POC

In this type of instance, the license expiration immediately prevents the use of the web interface, proxy systems, and asynchronous services. It is an instance used by potential clients; therefore, its functionalities are similar to a production environment.

## Application status

senhasegura instance can be distinguished between *Active* and *Inactive*. The *Active* status indicates that this instance can be accessed by users in all functionalities. When *Inactive*, only administrators can log in, and they will be limited to using only the **Orbit Web** interface.
:::(Warning) (Caution)
The application being active does not necessarily mean that asynchronous services (known as robots) are active in this instance. However, whenever the application is inactive, the asynchronous services are also inactive.
:::

## Replication Status

When in a cluster, the senhasegura instance can be *Active* or *Inactive* regarding its presence in the cluster. Additionally, the instance can be configured as *Secondary Cluster* or *Primary Cluster*.

### Primary Cluster

When the instance acts as the *Primary* instance, it means that this is where the main asynchronous services will be executed, such as backup and master key procedures.

### Secondary Cluster

Indicates that this instance won't execute the main asynchronous services. It can be used by users as long as the **Application Status** is *Active*.

## Main Dashboard

The **Orbit** menus follow the same pattern as the rest of the system. However, some actions can be quickly accessed through the main dashboard.

In this panel, you have access to a toolbar that may display indicators of pending tasks in its upper right corner. Pay attention to these indicators, as configuration pending tasks may affect the platform's operation.

Some instance information and server information are displayed in frames to assist in the instance identification process.

* **Yellow exclamation mark:** Indicates items recommended for configuration, especially if the infrastructure uses this functionality, or when one of the configurations is disabled.

* **Green checkmark:** Indicates that all configurations are activated.

* **Circle with bumbers:** Represents the quantity of items within the button, usually associated with incidents.
:::(Warning) (Attention)
A red banner may appear at the top whenever an incident occurs. Pay attention to the incidents displayed in this banner to prevent service and data unavailability.
:::
:::(Info) (Info)
If you wish to access all alerts and incidents, click on the Incidents button.
:::

### Normalize

The **Normalize** button will not redirect to a specific screen accessible through the menu. This button should be used if, after an update, the system presents the absence of important records such as **A2A WebService**. In these cases, by activating normalization, senhasegura will recreate the fixed system records.
:::(Warning) (Attention)
It's not recommended to manipulate this control without the supervision of the Support team.
:::
### Wizard

This button doesn't direct to a specific page but rather "groups" the main system configurations into steps.
:::(Info) (Info)
When starting a new senhasegura instance, the **Wizard** is presented to the user to perform the main instance configurations.
:::


