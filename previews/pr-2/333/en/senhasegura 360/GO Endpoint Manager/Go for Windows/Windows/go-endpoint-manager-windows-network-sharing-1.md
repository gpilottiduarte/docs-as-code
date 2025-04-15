This menu displays the shared network directories of the user. Credentials are used to access a directory without exposing or mapping it.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1674569344455.png)GO Endpoint Manager Core \- Network Sharing### Configure file sharing

* On Windows:
1. Access the user's desktop.
2. Locate the folder you want to share, or create a new one.
3. Select the folder.
4. Right\-click on it and choose **Properties**.
5. Select the **Sharing** tab and then the **Share** button.
6. Choose the users you want to share the folder with and click **Add.**
7. Click the **Share** button.
8. Copy the path. Example: \\WINDOWS10PRO\\Shared Folder
9. **Done**.
* On the GO application:
1. Start **Core**.
2. Click **Network Sharing**.
3. In the central area of the screen, right\-click and select **Add sharing**.
4. Enter the path of the folder that you will share. Example: \\WINDOWS10PRO\\Shared Folder
5. **OK**.
### Access or remove shared folders on GO

The user can access a shared folder using the selected credential. The credential is not necessarily a domain one.

1. Start **Core**.
2. Click **Network Sharing**.
3. Select the folder you want to access or unshare.
4. Right\-click and choose one of the following options from the context menu:
	* **Access sharing**
	* **Delete sharing**

InfoThe folders accessed by Core are registered and can be reaccessed due to the cache of credentials managed by Windows. These folders won't be mapped as a drive.### Access shared folders outside of GO

Once authenticated, Windows creates a local cache with network access allowing the folder to be viewed without GO Endpoint Manager.

