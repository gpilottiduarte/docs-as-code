## Overview

You can use segregated configurations for specific workstation scenarios. This feature is available at:

* Control of directories and files
* Scan of directories and files
* Segregated parameters
* access lists
* Commands

  


For segregation by users, this feature is available at:

* Segregated parameters
* Commands

  




---

## Configure segregated settings

The workstation may belong to a user who requires special attention or differentiated use.

To configure a segregated parameter, follow these steps:

1. Access the senhasegura platform.
2. Enter the **GO Endpoint Manager****➞****Settings ➞****Segregated parameters**.
3. Go to the **⁝** icon, and select **New segregation for workstations.**
4. On the **General** tab, set the desired parameters for the workstation.
5. On the **Workstations** tab, define the workstations to which the rules will be applied.
6. Click **Save**.

  




---

## Segregation for Users

Segregation allows users of the GO Endpoint Manager module to access their machines when using more than one workstation. In cases where the user needs access to several different workstations, you can create a single policy for the user instead of a policy for each machine. Segregation for the user also applies if a list for the user and the workstation overlapping. The rule will be applied and respect the order of priority first allowlist, denylist, and parameters.

InfoUsers using more than one workstation appeared twice in the same report. In the segregation list, the user appears only once.  




---

## Configure segregation by users

To configure a segregated parameter, follow these steps:

1. Access the senhasegura platform.
2. Access menu **GO Endpoint Manager➞Settings➞Segregated Parameters.**
3. Click **⁝** and select the **New segregation for users option.**
4. Give the segregation a name and set the status.
5. On the **General** tab, define the desired parameters for the user.
6. On the **Users** tab, define the users to which the parameters apply.
7. Click **Save.**



---

## Parameter combinations

Segregated parameters take precedence over global parameters. Thus, four situations are possible:

CautionThe system default considers the settings defined in the global parameter.  


  




| Combinations | Global Parameter | Segregated Parameter | Final status |
| --- | --- | --- | --- |
| Situation 1 | Inactive | Active | Segregated parameter \= active |
| Situation 2 | Active | Inactive | Segregated parameter \= inactive |
| Situation 3 | Active | System default | Global parameter \= active |
| Situation 4 | Active | Active | Segregated parameter \= active |
| Situation 5 | Inactive | Inactive | Segregated parameter \= inactive |
| Situation 6 | Inactive | System default | Global parameter \= inactive |



---

## Leia mais

* [Typical screen](https://docs.senhasegura.io/v3-33/docs/en/general-information-graphical-user-interface#typical-screen)

  


