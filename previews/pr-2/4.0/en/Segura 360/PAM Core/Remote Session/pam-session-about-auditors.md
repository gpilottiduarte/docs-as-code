# About Auditors

In Segura, at the end of a session, it’s possible to configure an auditor for that specific session, that is, define one or more users, who have the role of auditor, so that they carry out an audit in the session and it is possible to validate what was done during access.

In this type of manual audit, the PAM administrator or operator, with due permission, can add users as auditors directly to the session record on the [Remote Sessions] screen. The sessions will then be displayed on the [Audit Sessions] screen so that the appointed auditors can carry out the audit.

Another possible type of auditor is the [Default Auditors], who will be an auditor for sessions considered suspicious so that he can analyze potential unwanted behaviors in more detail.

In this type of automatic audit, there is an option in the [Behavior User Parameters] called **Submit high-risk sessions to audit?** if this option is activated, sessions that are considered high-risk, based on the audited commands, will be automatically sent for audit.

However, for this to happen, it’s necessary to [configure default auditors]. These will be the users responsible for auditing high-risk sessions. These sessions will also be available on the [Audit sessions] screen, but only visible to previously registered standard auditors.
