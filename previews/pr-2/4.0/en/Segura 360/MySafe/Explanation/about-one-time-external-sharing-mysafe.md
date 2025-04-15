# About one-time external sharing

**One-time external sharing** is a feature that enables **MySafe** users to temporarily share their items, such as passwords, notes, files, and API secrets, with users outside of **MySafe**.

It’s important to note that, although the recipient of a shared item doesn’t need to have a **MySafe** account, they’ll only be able to access the item if they are connected to the Segura vault.

## Features  

Security has always been our top priority in the development of **MySafe**. When temporarily sharing an item with an external user, the following security measures are applied:

- **End-to-end encryption**: ensures that only the recipient, with the exclusive link, can access the content.
- **Exclusive and temporary access links**: each generated link is unique and can be revoked at any time by the item owner, ensuring full control over access.
- **Access time and views configuration**: you decide how long the sharing link remains valid and how many times the recipient can access the item within that period. Set specific time limits, such as 24 hours or 7 days, and limit the number of allowed views to ensure even more security.

## Applicability  

**External sharing** offers a practical and secure solution for various situations, such as:

- **Collaboration with clients and suppliers**: share access data to systems or specific project files without needing to provide full access credentials.
- **Remote work and hybrid teams**: facilitate access to important information for team members who aren’t in the office or don’t have a **MySafe** account.
- **Sharing Wi-Fi passwords with visitors**: create secure and temporary access to your company's Wi-Fi network for clients and partners during their visits.
- **Sending sensitive data to external departments**: share confidential files, such as financial reports or contracts, with departments that don’t have access to your **MySafe** vault.

## Use case  

**Secure API secrets sharing for technical support**

**Primary actor**: Claire (software developer at a technology and software solutions company)

**Summary**: this use case demonstrates how Claire uses **MySafe**'s unique sharing feature to securely and temporarily share API secrets with the company's support team to resolve an integration issue between systems.

**Basic flow**:

1. **Identifying the need for access**
    1.  Claire identifies an integration issue that requires assistance from another team in the company that doesn’t have access to **MySafe**. 
    2.  She decides to provide this team with temporary access to the relevant API secrets to resolve the problem.

2. **Setting up secure sharing**
    1.  Claire accesses **MySafe** and locates the API secrets that need to be shared. 
    2.  She configures the permissions for temporary view-only access, limiting the access time to 1 hour, as needed to resolve the issue.

3. **Sending the sharing link**
    1.  **MySafe** generates a secure access link, along with a unique access token, and both are sent to the support team's email. 
    2.  The link and token are sent in separate messages to maximize security.

4. **Utilization and expiration of access**
    1.  The support team, using the received link and token, accesses the API secrets and uses the information to resolve the integration issue. 
    2.  After 1 hour, as established by Claire, the access automatically expires, ensuring that there is no continued access to sensitive credentials.

 **Benefits**:

- **Access control**: Claire can provide access in a controlled manner and for a defined period, minimizing security risks.
- **Efficiency in problem-solving**: the quick and secure sharing of API secrets allows the support team to efficiently resolve the integration issue.
- **Enhanced security**: the automatic expiration of access prevents sensitive information from remaining accessible after the task is completed, maintaining the integrity of the API secrets.
- **Traceability and auditability**: all sharing actions are logged and can be easily audited for compliance and later review.

## Conclusion  

With this feature, **MySafe** removes collaboration barriers, allowing confidential information to be shared securely and controlled with anyone with access to Segura, regardless of whether they use **MySafe** or not.

---