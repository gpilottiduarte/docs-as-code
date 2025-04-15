# SCIM

Segura's SCIM API (*System for Cross-domain Identity Management*) allows for the automated management of identities between different systems via REST API calls. This documentation details how to use SCIM endpoints to share and synchronize identity information with the Segura platform.

## Prerequisites
You need to obtain the `client_id` and `client_secret` values for authentication. To obtain these values you must do the following:

1. In Segura, in the navigation bar, hover over the **Product menu** and select **Settings**.
2. In the side menu, select **Provisioning > Identity Management (IGA) > Providers**.
3. On the provider of your choice, click on the **Actions** button and select **Provider details**.
4. On the **Register Identity management provider** screen, you will be able to obtain the values indicated above.

## Compatibility

The API is compatible with any tool that supports the SCIM 2.0 protocol, allowing easy integration with various identity management systems.

For more details on how to configure an IGA provider in Segura, see the article [Identity management providers (IGA)](/v4/docs/en/identity-management-providers-iga).

This documentation presents the available endpoints and usage examples for implementing the SCIM API in your environment.