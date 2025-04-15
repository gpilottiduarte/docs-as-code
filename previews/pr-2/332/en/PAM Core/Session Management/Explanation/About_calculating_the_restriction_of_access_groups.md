# About calculating the restriction of access groups

To add another layer of security to access control, the senhasegura platform implements a priority and restriction calculation for the Access Groups feature. During password view or login requests, the platform calculates these based on the date and time of the vault.

## The calculation process

All access groups are represented by eight digits:

1. The first group consists of one digit. This is the identifier digit. It will always take the value 1.
2. The second group consists of three digits that take on a binary value, 0 or 1, indicating **FALSE** or **TRUE**. These are:
    1. The first digit of this group analyzes the user's permission for the requested action.
    2. The second digit in this group identifies whether or not the user needs a justification for the action requested.
    3. The third digit of this group analyzes whether or not the user needs approval to carry out the requested action.
    4. The calculation of the second group is based on the permissions of each user in each group and also on the time the request is made, as follows:
        1. If a user cannot perform the requested action, they’ll have the value `000` in this group; if the user can perform the action, they’ll have the value `100` in this group.
        2. If the user needs to justify the requested action, they’ll have the value `110` in this group.
        3. If the user needs authorization to perform the requested action, they’ll have the value `111` in this group.
        4. **For example**, if a user, however, requests an action in a time window that they aren't authorized for, the value of the second group will change. So, suppose a user needs authorization to carry out an action between 13:00 and 17:00; if the user does this request at 14:00, they will have `111` as a value in the second group. Likewise, if this same user carries out this same request at 17:01, he will have `110` as a value in the second group.
3. The third group comprises four digits and identifies the access group. This group is the access group ID and will always consist of four digits. For example, if the group ID is 45, this group will consist of the digits `0045`.

## The analysis process

The first value to be analyzed will be the second group value. The access groups with the highest value in this group will be applied, as they’re the most restrictive.

Suppose two access groups have the same value in the second group. In that case, the third group will be analyzed, and the lowest value in this third group will indicate which access group will be applied (access, in this case, will be according to the access group with the lowest ID number).