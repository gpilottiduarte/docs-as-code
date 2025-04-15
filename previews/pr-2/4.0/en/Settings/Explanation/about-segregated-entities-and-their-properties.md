# About Segregated Entities and Their Properties

All screens that a user has access to display information about privileged entities are filtered by their **Access Group**. The actions that can be taken also affect these privileged entities. To prevent abuses, Segura consults the rules applied to the user connecting to the privileged entity.

If the user has more than one access group with access to privileged information, Segura applies the most restrictive group rule. The restriction levels are based on the number of steps and people aware of the operation:

1. Allows access to the information.  
2. Allows access requiring justification from the requester.  
3. Allows access within a time interval and with an approver.