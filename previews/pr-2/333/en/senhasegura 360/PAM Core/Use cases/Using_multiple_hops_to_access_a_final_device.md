# Using multiple hops to access a final device

## Use case: Avoid using multiple connection hops in order to access a device.

In this document, you’ll find the necessary recommendations for accessing the end device without using multiple hops.

### Solution
To avoid latency and reduce security visibility and control over secondary sessions, ideally, **the final device to be accessed must be registered in senhasegura**, thus providing direct access and eliminating the need for multiple jumps.

If you wish to use multiple hops, be aware that using senhasegura in this format causes the limitations mentioned here:

* **Increased latency**: with each hop, network performance is compromised and can impact operations.
* **Loss of control and security**: after the first jump, senhasegura will no longer have control over what is carried out; that is, there will be no auditing and no control of subsequent sessions.

:::(warning) (**Caution**)
senhasegura doesn’t recommend the use of **more than one** use of Multihop in the session. Although senhasegura manages the first hop efficiently, subsequent hops won’t be controlled by senhasegura, opening loopholes and facilitating unauthorized activity.
:::
