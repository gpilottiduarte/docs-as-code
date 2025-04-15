# Error (1332) when running an application with an impersonated user

## Error (1332) when running an application with an impersonated user

### Scenario

This document addresses an issue where the "The User Profile Service service failed the sign-in. User profile cannot be loaded" error occurs after performing user impersonation with **EPM Windows**.  This can lead to desktop icon changes, an altered background, and inaccessible shortcuts, including the Windows Start menu and Task Manager.

### Symptom

- The following error message appears upon attempting to log in: **"The User Profile Service service failed the sign-in. User profile cannot be loaded."**  
- Desktop icons may be rearranged or changed.  
- The desktop background may be altered.  
- Shortcuts, including the Windows Start menu and Task Manager, may become inaccessible.

### Likely Cause

This behavior can occur during impersonation scenarios due to manipulation of another user's profile.  Registry entries related to the user profile may become corrupted or point to non-existent directories.

### Solution

The following steps outline how to resolve the user profile sign-in failure by correcting registry entries.

**Caution** Modifying the Windows Registry incorrectly can cause serious system problems.  Proceed with caution and ensure you have a backup of your registry before making any changes.

1. **Boot into Safe Mode:** If possible, boot the affected system into Safe Mode.  The method for entering Safe Mode may vary depending on your Windows version. Consult Microsoft documentation for specific instructions.  
     
2. **Open the Registry Editor:**  
     
   * Press the **Windows key \+ R** to open the **Run** dialog box.  
   * Type `regedit` and click **OK**.

   

3. **Navigate to the ProfileList Key:**  
     
   * In the **Registry Editor** window, navigate to the following key:

```
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList
```

4. **Inspect ProfileImagePath Entries:**  
     
   * Under the `ProfileList` key, you will see several subkeys (usually starting with `S-1-5`).  Examine each subkey.  
   * Within each subkey, locate the `ProfileImagePath` value.  
   * Verify that the path specified in `ProfileImagePath` corresponds to an *existing* user profile directory.

   

5. **Correct or Delete Invalid Entries:**  
     
   * If a `ProfileImagePath` entry points to a non-existent directory, *carefully* delete the corresponding subkey (e.g., the entire `S-1-5-xx` key that contains the incorrect `ProfileImagePath`).  
   * **Alert\!** Deleting the wrong registry key can cause significant system issues.  Double-check the subkey before deleting it.

   

6. **Restart the Computer:**  
     
   * Close the **Registry Editor**.  
   * Restart the computer.  
   * Attempt to log in to the affected user account.

### Conclusion

After following these steps, the user profile sign-in error should be resolved, and the user should be able to log in successfully. If the issue persists, contact **Segura** technical support for further assistance.