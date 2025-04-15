# Amazon ACM

1. Go to **Discovery ➔ Settings ➔ Discovery;**
2. Click on the icon `⁝`, and choose the option **+ New;**

![chrome_wkKUkjUNku.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/chrome_wkKUkjUNku.png){height="" width=""}

3. Select **Amazon ACM;**
4. Add the information:

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-59TIHACA.png){height="" width=""}

- **Name:** name that will identify the search.
- **Enabled:** indicate if you want the device activated or not.

## Cloud ACM account

- Cloud ACM account: Amazon account to which the CA refers.
- Import all certificates automatically: all Amazon ACM certificates that are found will be imported into senhasegura.
- Export certificate key?: the keys of the Amazon ACM certificates found will be exported to senhasegura.

## Execution

![devicesexecution.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/devicesexecution%283%29.png){height="" width=""}

- **Keep scan active after import?:** credential verification that will remain active after credential import or not.
- **Days allowed for execution**: days that will be allowed to perform the execution.
- **Periods allowed for execution**: times that will be allowed for execution.
- **Interval between executions (in hours):** minimum interval, in hours, between scan runs. This criterion takes into account the values informed in the Days allowed for execution and Periods allowed for execution fields.

:::(info)

It is not recommended to add an interval of fewer than 8 hours.

:::