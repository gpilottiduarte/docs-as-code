# Register environment variables policies

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Linux➔Access Policies.**
3. Click **⁝** and select the option **New rule for user**.
4. At the **Rules register by user** form, in the **Main** tab, complete the fields:
    * **Policy name:** define an easy-to-identify name. 
    * **Enabled:** if enabled, the policy will be applied across devices.
    * **Guideline:** select **Run Binary.**
    * **Allow or block:** set to **Allow.**
    * **Rule text:** fill with handler="/usr/bin/secpack-trec-triggered"
5. Click **Add.**
6. Go to the **Environment variables** tab. Environment variables can be used dynamically for programs or processes running on the system.
7. Fill in the fields:
    * **Variable name:** add the name of the variable.
    * **Variable value:** add the value of the variable.
8. Go to the **Users** tab.
9. Select **Users+.**
10. Choose the users you want to add to the segregation.
11. Click **Add.**
12. Click **Save.**


:::(Warning) (Caution)
If there is already an environment variable registered, it will be replaced by the new registered value.
:::

* * *

## Check environment variables created

1. Access the Linux terminal.
2. Enter the command: 

```shell
cat /etc/senhasegura/environment_rules
```

:::(Info) (Info)
Environment variables only work in segregation by users.
:::