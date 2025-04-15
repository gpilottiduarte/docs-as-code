# Passwords

In this document, you’ll find detailed information regarding **MySafe**'s **Passwords** screen on **senhasegura** mobile app.


## Path to access
1. Go to the **Products** screen of the senhasegura mobile app and select **MySafe**.
2. In the top bar, click the three horizontal bars icon, and select **Passwords**.




## Top bar
| Item | Description |
| --- | --- |
| **Side menu*** | Represented by the three horizontal bars icon in the upper-left corner of the screen, it opens a drop-down menu with the user’s profile picture, username, and email, as well as the options *Passwords, Notes*, and *Log out*.|
| **Search field*** | URL of the website where the password is being used. |
| **Username*** | Username used to access the account. |
| **Password*** | The password being added. |
| **Tags** | Keywords to help identify the password. |
| **Notes** | Observations about the password. |


### Passwords’ compact card 
The table below describes the icons and information displayed in the compact version of the password card.

### Requirements
* An active password saved in **MySafe**.

| Item | Description |
| --- | --- |
| **Name*** | Name assigned to the password.|
| **Username*** |Username associated with the credential. |
| **Copy username*** |Represented by the two sheets of paper icon, it copies the password to the user’s clipboard.|
| **Edit password*** | Represented by a paper and pencil icon, it opens the **Edit password** screen. |



### Password expanded card
The table below displays the details and available actions for the password card in its expanded format.

| Item | Description |
| --- | --- |
| **URL*** | URL of the website where the password is being used.|
| **Tags*** |Keywords associated with the password.|
| **TOTP*** |The token generated based on the secret key provided along with a clock indicating the remaining valid time for the token.|
| **View password*** | Button that opens a card at the bottom of the screen with the options to view the password, represented by the eye icon, and copy the password, represented by the two sheets of paper icon. |
| **Copy password*** | Button that copies the account username to the user’s clipboard. |
| **Copy TOTP*** | Button that copies the TOTP. |

### Add new password/Edit password screens

#### Path to access the Add new password screen

1. At the bottom of the app’s **MySafe** screen, click the **plus** icon. 

***

#### Path to access the Edit password screen



1. Under **Passwords**, on the app’s **MySafe** screen, locate the password you want to edit and click the **paper and pencil** icon.

| Item | Description |
| --- | --- |
| **Name*** | Name assigned to the password.|
| **URL*** | URL of the website where the password is being used.|
| **Username*** |Username associated with the credential.|
| **Password** |The password that’s being added or edited. The **eye** icon displays or hides the password typed. The **refresh** icon automatically generates a safe password for the user.|
| **Secret key (TOTP)** |The base32-encoded secret key provided by the service for multi-factor authentication. <br>**Note**: the token must contain at least 10 characters. |
| **Tags*** |Keywords associated with the password.|
| **Notes*** | Observations about the password. |

:::(Info) (Info)
The items with an asterisk are mandatory.
:::