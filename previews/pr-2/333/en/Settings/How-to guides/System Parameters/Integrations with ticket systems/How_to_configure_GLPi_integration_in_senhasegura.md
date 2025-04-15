# How to configure GLPi integration in senhasegura

This guide shows how to configure the integration between senhasegura and **GLPi ITSM** using the **REST API**. 

## Requirements

* GLPi ITSM API authentication data:  
  * GLPi ITSM API URL (the API endpoint).  
  * GLPi ITSM User.  
  * GLPi ITSM Application Token.  
  * GLPi ITSM Password.

## Configure GLPi ITSM

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **System Parameters \> Integrations with ITSM.**  
3. In the **Integrations with ITSM** report, in the top bar, click on **View actions** and select **New**.  
4. In the **Registration of integration with ITSM** window, select **GLPi ITSM**.  
5. In the **Registration of integration with ITSM** window, fill in the fields:  
   * **Integration name:** name of the integration in senhasegura.  
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

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).