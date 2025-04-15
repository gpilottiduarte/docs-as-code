# Global search

This guide aims to provide a comprehensive understanding of the **Global Search** functionality, allowing users to quickly find information in multiple system modules.

## First steps

1. You can access the global search in two ways:  
2. By shortcut, press `Ctrl+G` to focus on the search field.  
3. Through the icon and search bar, click on the search icon in the navigation bar.

After accessing the global search, proceed as indicated:

1. Select the modules where you want to perform the search, type in the term for your search and press `Enter`.  
2. You will be directed to the results screen.

:::(info) (Info)

- If you do not select any modules, the search won’t be carried out.  
- The search results screen will be sorted according to the results found in the selected modules.

:::

The global search interface has the following options:

* Main text field.  
* Module selector.  
* History of recent searches (shows the last 5 searches carried out).

## How to use the global search

As an example, we will search the **PAM Core** module for the term `debian` to find any credential or device that contains the word debian.

1. In the Segura, in the top bar, click on the search field to select it.  
2. Enter the search term: `debian`.  
3. Select the module: `PAM Core`.  
4. Press `Enter` to start the search.  
5. The system will process the search throughout **PAM Core** and display the results in a search report.

The search report will display the following results:

1. The module of each result.  
   2. The relevant information for each record.  
   3. The details displayed in the reports.

You can interact with the search results, obtaining details about each result. To interact with a result, click the **Actions** button and select one of the available options.

:::(info) (Info)  

The options for interacting with the search results will vary according to the type of result. For example, a **Credential** will display options such as **Credential History**, while a **Device** will display options such as **Credentials** (related to the device). Thus, each result will have different options for interaction.  

:::

## Possibilities for searching

Currently, the global search is enabled to search for the following cases:

| Module | Report | Search for |
| :---- | :---- | :---- |
| **PAM Core** | Credentials (all types, including domain) | **Credential:** Username, additional information, tags, domain, identifier (webservice). |
|  |  | **Device:** Name, management, vendor, product, tags. |
| **Devices** | Devices | Device name, management, vendor, product, tags |
| **MySafe** | Items (all MySafe item types) | **Passwords, APIs and Notes:** Name, URL, Username, tags, notes. |
|  |  | **Files**: File name, tags, notes. |
| **Domum Remote Access** | Credentials (all types, including domain) | **Credentials:** Username, additional information, tags, domain. |
|  | Devices | **Device:** Name, management, vendor, product, tags. |
| **Certificate Manager** | Certificates | **Requests**: Request name, common name, organization, tags, environment, system. |
|  | Requests | **Certificates**: CA name, common name, organization, tags, environment, system, project. |
| **DevOps Secret Manager** | Secrets, Applications, and Authorizations | **Secrets**: Name, identifier, tags, environment, system. |
|  |  | **Cloud credentials:** user, access key. |
|  |  | **Credentials**: Name, hostname, username, additional information. |
|  |  | **Ephemeral credentials**: Name, hostname, username, additional information. |
|  |  | **Key/Value**: Key. |
| **Cloud IAM** | Credentials | **Credentials**: tags, environment, system. |
|  |  | **User/Service account:** Username, tags. |
| **A2A** | Applications and Authorizations | Name, tags, environment, system. |
| **EPM** | Devices | **Devices**: Hostname, domain, IP. |
|  | Users | **Users:** Name, username, domain, department. |
| **Discovery** | Discovery | Name, IP/Domain, website. |
| **Task Manager** | Tasks | Name, tags, environment and system. |