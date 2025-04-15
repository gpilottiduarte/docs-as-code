# Notification types

The ***Notification*** module has four notifiers:

## E-Mail

The email notifier sends notifications as follows:

-   ***Subject:*** Event Type

-   ***Email Body:*** Message + Event Values

All notifications sent by e-mail use the same template, which is not customizable.

:::(info) (Info)
See the ***Apendices*** chapter for the list of notifications that can be sent by e-mail.
:::

## Screen

The onscreen notifier uses Orbini's notification system to display an on-screen popup with the following information:

-   ***Title:*** Event Type

-   ***Text:*** Event Message.

Event values are not transmitted by this notifier.

## SMS

The SMS notifier only sends the event message to users.
