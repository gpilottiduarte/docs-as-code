# Enable third parties to request and extend access

You can enable third-party users to request access to an already approved credential or device. Allowing the user to extend an already authorized access in Domum Remote Access is also possible.

---

## Requirements

- The third-party user may request access or extension only for itself.
- The request must come from the third party's desktop. Thus, only third parties with active links can request access or its extension.
- Only third parties with authorization in the company's registration may request access or extension.
- The third-party user may only request access to credentials or devices already approved in the past.
- The third-party user may request the extension only for active accesses.

---

## Authorize third parties to request their access

The access request follows the same extension rule, and you enable the two actions in the same parameter. The difference is that the access has already expired in the new request. On extension, access to the credential or device is still active.

<!-- Fix link -->
1. Access the senhasegura platform.
2. Go to **Domum Remote Access > Access Control > Access Groups.**
3. Follow the instructions to [Limited access group](/v3-33/docs/domum-limited-access-group).
   - As another option, locate an existing vendor access group and click the **Edit** button in the right column.
4. In the **Access request settings** field, answer **Yes** to **Can third-party users request their own access?\***
5. **Save.**

**Info:** Once registered, requests will follow the same approval workflow defined in the Access Group.
