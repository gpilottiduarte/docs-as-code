# How to configure sessions for recording

This document describes how to configure parameters for session recording in **Segura EPM**.

::: (info) (Go Agent Recording Rules) 
The agent's recording logic for applications executed using the Go Agent is influenced by access list rules as follows:

* Application Non-Recording List: If an application is on the list marked to prevent recording, it will not be recorded.  
* Absence of a List: The application will not be recorded if there is no list.  
* Permitted Recording List: An application will be recorded only if it is on a permitted recording list and there is no list denying recording for that application.
:::

## How to enable recording sessions

1. On Segura, in the navigation bar, hover over the **Products menu** and select **EPM**.
2. In the side menu, select **Management \> Settings \> Parameters**.  
3. Find the **General Settings** section.  
4. Check the option **Enable recording session?\*** as **Yes**.  
5. Click on **Save**.
