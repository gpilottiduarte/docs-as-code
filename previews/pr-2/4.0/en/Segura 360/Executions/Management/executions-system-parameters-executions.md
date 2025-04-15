# System parameters - Executions

This document provides information about the **System parameters** form screen, which refers to the parametrization of the module.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **System Parameters > Global > Executions**.

---
:::(warning) (**Attention**)  
All fields are set with a default value, as recommended by Segura. However, you can customize your session according to your needs.  
:::

## Executions tab

| **Item** | **Type** | **Required** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Number of change attempts*** | Quantity input | Yes | Defines the quantity that can be swapped. The values can range from a minimum of 1 to a maximum of 10. Default value: **1**. |
| **Connection timeout (s)*** | Quantity input | Yes | Defines the inactivity time before closing a connection. The values can range from a minimum of 1 to a maximum of 300. Default value: **5**. |
| **Read timeout (s)*** | Quantity input | Yes | Defines the maximum time to read a command response. The values can range from a minimum of 1 to a maximum of 300. Default value: **5**. |
| **Total records per cycle*** | Quantity input | Yes | Number of records that will be swapped per execution cycle. The minimum value is 200 and the maximum is 10000. Default value: **200**. |
| **Interval between attempts (min)*** | Quantity input | Yes | Defines the interval time between execution attempts. The minimum value is 0 and the maximum is 1440. Default value: **0**. |
| **Interval between failed attempts (min)*** | Quantity input | Yes | Defines the minimum time to retry swapping a password after a failed attempt. The minimum value is 30 and the maximum is 10080. Default value: **30**. |