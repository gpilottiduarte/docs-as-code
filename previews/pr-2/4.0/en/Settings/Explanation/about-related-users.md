# About Related Users

The Related Users function in Segura allows associating a single system user with multiple credential usernames used across various devices. This is done through the use of the `[#USERNAME#]` mask in access group criteria.

## **How does this work in practice?**

Let's use the example of a user named **Alice Woods**. In Segura, her username is `awoods`. However, in the company, Alice uses the username `woods` to access device A and `alicewoods` to access device B.

### **Standard use of the \[\#USERNAME\#\] mask**

In a conventional scenario, when using the \[\#USERNAME\#\] mask in an access group, the associated credentials are those that strictly correspond to the username in Segura, which, in Alice's case, is `awoods`. This means that, without additional adjustments, only the credentials linked to `awoods` would be accessible through this group.

### **Expanding access with Related Users**

With the **Related Users** functionality, it's possible to extend Alice's access to other usernames associated with her. By configuring `alicewoods` as a **Related User** for Alice, the use of the `[#USERNAME#]` mask in an access group can then include credentials associated with both `awoods` (the default name) and `alicewoods` (the related name).

This functionality ensures greater flexibility and efficiency in managing user access to various devices, simplifying the authentication process without compromising security.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).