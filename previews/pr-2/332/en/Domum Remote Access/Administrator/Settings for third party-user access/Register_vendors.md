After creating a vendor access group, you must register vendors and third\-party users.

  




---

## Register vendors

1. Access the senhasegura platform.
2. Go to **Domum Remote Access➔Settings➔Vendors.**
3. On this screen, you will see the report of all the vendors already registered at senhasegura and the Contract Number, contract, and other details.
4. In the upper\-right corner, click the **(⁝) View Actions icon.**
5. Select **\+ New.**
6. In the **New Vendor registration** window, complete the information on the **Registration**tab:
	* In the **Vendor****\*** field, enter the name of the vendor.
	* In the **Access group\*** field, select a [group created previously.](/v3-32/docs/domum-create-access-group-for-vendor)
	* If desired, complete the **Contract** and **Document ID** fields.
	* In the field **Start date****\***, select the date the contract regarding the access consent began.
	* If applicable, complete the **Due date** field.
	* Select an image to represent the vendor in the Photo field if desired.
		+ The image must be in PNG or JPG format and up to 5MB. It will be displayed on the **Vendor** Dashboard.
		+ To view the image, access the vendor report, click the action button for the vendor record, and choose the **Dashboard** option.
7. Go to the **Location** tab and complete the information.
8. In the **Allowed location** field, check the option **Restrict access****to these locations**only if you want to delimit the origin of legitimate accesses.
	* This setting is not mandatory.
9. If you have not checked the access restrictions for locations, click**Save**
10. If you checked the access restriction for locations, select the **Country** and **Region** of origin of accesses considered legitimate.
11. Click **Add.**
12. You can define more than one location if you want.
13. **Save.**



---

## Register third\-party users

With the vendor registration completed, you can register the service provider user related to that vendor.

1. Access the senhasegura platform.
2. Go to **Domum Remote Access➔Settings➔Third\-party users** menu.
3. On this screen, you will see the report of all third\-party users already registered at senhasegura, which vendors they belong to, and their contact data.
4. In the upper\-right corner, click the **(⁝) View Actions icon.**
5. Select **\+ New.**
6. Complete the information on the **Personal****Data**tab in the **New third\-party registration** window.
	* **Vendor.** Select the vendor created earlier.
	* **Name\***
	* **Email\*.**Enter a valid email account to send the Domum access URL.
	* **Mobile phone\***. Enter a valid cell phone number to send the token if the parameter is set to SMS.
		+ This step does not send the link to the user. It happens in the [Grant first access for third parties](/v3-32/docs/domum-grant-first-access-for-third-parties) step.
	* **Picture.**If desired, select an image to represent the user.
		+ The image must be in PNG or JPG format and up to 5MB. It will be displayed on the **Third\-party** Dashboard.
		+ To view the image, go to the third\-party user report, click the third\-party record action button, and choose the **Dashboard** option.
7. **Save.**
