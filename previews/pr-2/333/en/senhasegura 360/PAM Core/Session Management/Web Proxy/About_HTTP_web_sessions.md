# About HTTP web sessions

The **HTTP web session** takes place in an isolated environment containing an optimized and protected browser to access websites. User interactivity is similar to the RDP session.

The browser is configured to prevent opening new tabs. All graphical components of the browser are hidden. Even the interaction menus and hotkeys are locked.
:::(info) (**Info**)
It’s possible to release some interface elements, access the [Command for partial release of browser tabs in VNCHTTP sessions](/v3-33/docs/orbit-cli-reference-for-command-for-partial-release-of-browser-tabs-in-vnchttp-sessions) document, to carry out this release.
:::

To access a website, a complementary procedure is required in relation to that required for other devices, which normally only need connectivity and an access credential.

Websites require authentication configuration. This configuration allows our embedded browser to automate login steps.

During this authentication process, the user will be presented with a protective banner that prevents the user from interfering and seeing the authentication in progress. Your interactivity will be returned only when the login process ends with success or failure.

:::(info) (**Info**)

* Modern websites have confirmation steps using **Captcha** and **MFA Tokens** to prevent automated systems from carrying out unwanted access. In these cases, the Web Proxy returns interactivity for the user to continue the authentication step.
* The **MFA Token** can be used automatically. Configure the tag (`token_totp`) in the web session parameterization to do this. For more information, access the documents Web sessions and How to register a new web session parameter.

:::

