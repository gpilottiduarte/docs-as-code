# About Proxy 2.0

In this document, you’ll find all the information about proxy technology, the particularities of Proxy 2.0 and the new functions implemented by senhasegura.

## Proxy technologies
Refer to systems and servers that act as intermediaries between a client (such as a web browser) and an end server (such as a web server). The main function of a proxy is to receive requests from users and forward them to the end server, returning the responses back to the user.

## Particularities

* New protocols and updated libraries that increase the security and efficiency of sessions.
* For multi-tenant it’s mandatory to use Proxy 2.0.
* More pleasant application layout.
* Improvement in the RDP Proxy connection.

## New Proxy Features
Using Proxy 2.0 brings with it new exclusive features, such as:

* **Heatmap of the session**: when viewing the recorded video or during the live stream, the timeline shows the peaks of user interaction during the session, where there was a higher incidence of clicks and typing. This functionality is available for all types of Web Proxy sessions.
* **Session audio recording**: during Web RDP Proxy sessions, audio will be transmitted and recorded, whether on video sites such as YouTube or even in video calls. Input audio (microphone/user speaking) and output audio (user listening) are recorded.
:::(Warning) (Attention)
Due to the recording of video and audio sessions, it is essential that the client obtains the explicit consent of employees to make these recordings. Additionally, it is mandatory to inform employees at the beginning of each session that it will be recorded, covering both audio and video. Proper configuration of the banner message is crucial to ensure that all participants are properly informed and aligned with privacy and compliance policies.
:::
* **Touchscreen support**: Web Proxy sessions will support clicks coming from the touch on screen via the device browser.
* **Authentication with Kerberos**: RDP Proxy now supports authentication via Kerberos, a protocol renowned for its security in communications between clients and servers

:::(info) (**Info**)
All features present in the previous proxy have not been modified and the same applies to Proxy 2.0 as well.
:::
