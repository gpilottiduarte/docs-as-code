# Import information

## Overview
To make easy the deployment of senhasegura , in scenarios where multiple information was already managed by other solutions, the administrator can import through worksheets.

1.  On the menu **Information ➔ Batch import**;

2.  Click the report action menu ***Import***;

3.  On the import screen presented, click the footer button ***Template file*** to download the template Excel file;

4.  Fill out the file by obeying the instructions from each field:

    -   ***Name:*** Required field. It is the name of information that will be used for identification within senhasegura;

    -   ***Information Type:*** Required field. It is the category within the business rule. If the type typed does not exist, a new type with the value typed will be registered;

    -   ***Owner:*** Required field. Fill with the username of the user of the senhasgura that will be responsible for information;

    -   ***Service:*** A description of the service to which information belongs;

    -   ***URL:*** If the information is of a service hosted on a website, fill in with the access URL;

    -   ***Password:*** A password that complements the information. This password will be protected and will only be visible for users with permission to access to information;

    -   ***Secret notes:*** It is a free text field that will be protected by Senhasgura, getting visible only for users with permission to access to information;

    -   ***Expiration date:*** The date the information will expire. This information will be used to alert users linked so that an action is taken;

    -   ***Notificar users with:*** Number of days with which users will be notified in advance;

    -   ***Identifier:*** Information identifier for use in WebService A2A ;

    -   ***Note:*** General observations;

    -   ***Allowed users:*** Relationship of usernames, separated by commas, which will have read permission in information. To also assign writing permission, complement the desired username with the suffix `:edit`;

    - ***Users for special notification:*** Users selected to receive special notifications separated by comma (Example: user, admin);

    - ***Notify users of special notification with:*** Number of days before expiration for special user notification. Add the number of days for each entered user separated by comma (Example.: 2, 1)..


5.  At the end of the fill, perform the upload the file on the same screen where the template file has been obtained;

6.  Processing will generate a record in the import report so you can track the result of the operation;
