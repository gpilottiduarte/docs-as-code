# How to configure GLPi integration in Segura

This guide shows how to configure the integration between Segura and **GLPi ITSM** using the **REST API**. 

## Requirements

* GLPi ITSM API authentication data:  
  * GLPi ITSM API URL (the API endpoint).  
  * GLPi ITSM User.  
  * GLPi ITSM Application Token.  
  * GLPi ITSM Password.

## Configure GLPi ITSM

1. On Segura, in the navigation bar, hover over the Products menu and select **Settings**.  
2. In the side menu, select **Security policies and network > ITSM**.  
3. In the **ITSM** report, in the top bar, click on **Add**.  
4. In the **Registration of integration with ITSM** screen, select **GLPi ITSM**.  
5. In the **Registration of integration with ITSM** screen, fill in the fields:  
   * **Integration name:** name of the integration in Segura.  
   * **Enabled:** select **Yes**  
   * **API URL:** GLPi ITSM API endpoint.  
   * **User:** user with access to tickets in GLPi ITSM.  
   * **Application token:** authentication token in GLPi ITSM  
   * **Password:** GLPi ITSM user password.  
6. Click **Save**.

:::(info) (Info)

It’s necessary that the option **Enable login with credentials** is enabled in the GLPi API settings.

:::

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).