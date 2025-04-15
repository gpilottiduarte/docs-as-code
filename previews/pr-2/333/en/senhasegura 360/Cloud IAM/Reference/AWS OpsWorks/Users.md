# AWS OpsWorks

<!-- Fix link -->
**Feature deprecation:** Starting from senhasegura version 4.0, this feature will be deprecated. To learn more about this deprecation, please refer to the [AWS OpsWorks](/v3-33/docs/cloud-iam-aws-opsworks-deprecation) deprecation article.Integration with providers allows you to manage access to virtual machines. You can use services such as AWS OpsWorks from Amazon Web Services (AWS) to manage users' SSH keys and launch recorded sessions to virtual machines.

AWS OpsWorks is the AWS configuration management service that lets you create automation to configure servers and manage Amazon EC2 service instances.

---

## Users

The user's report displays all users managed by the senhasegura Cloud IAM active on the AWS OpsWorks service.

These users have SSH keys managed by senhasegura to be able to access the Stacks' instances they have access to.

### Rotate the user's SSH key

You can rotate users' SSH keys in two ways:

1. Automatically, a password policy can be defined in the PAM Core module of the senhasegura. Please refer to the **Privileged Information Manual** to understand how to create a password policy.
2. Manually, via the AWS OpsWorks user report from the Cloud module.  
To manually request the rotation of the user's SSH key in the AWS OpsWorks service, follow the **Cloud IAM > Virtual Machines > AWS > OpsWorks > Users.**
3. In the report, look for the user you want to rotate the SSH key, click the corresponding action button, and choose the **Rotate SSH key** option.

**Caution:** The synchronization time of the new key with the Stacks' instances depends on AWS OpsWorks and not on senhasegura. Until it is synchronized with the instances, the user may not be able to access them.

### View the user's SSH key

To view the user's current SSH key in the AWS OpsWorks service, follow the menu: **Cloud IAM > Virtual Machines > AWS > OpsWorks > Users**.

In the report, look for the user you want to view the SSH key, click the corresponding action button, and choose the option **View SSH key**.

InfoThe senhasegura user, responsible for the **AWS OpsWorks user**, will be notified when another senhasegura user uses or views the key.

### View User Stacks

To view which Stacks a user has access to and what permissions they have on them in the AWS OpsWorks service, follow the **Cloud IAM > Virtual Machines > AWS > OpsWorks > Users**.

In the report, search for the user you want to view Stacks and permissions, click the corresponding action button, and choose the **Details** option.

---

## Stacks

OpsWorks Stacks allows you to set automatic scaling of servers according to predefined schedules or in response to changes in traffic levels. In addition, it uses lifecycle hooks to orchestrate changes as the environment scales.

You can deploy and configure Amazon EC2 instances on each layer or connect other resources, such as Amazon RDS databases.

To view the Stacks, follow the **Cloud IAM > Virtual Machines > AWS > OpsWorks > Stacks**.

---

## Instances

Instances are virtual machines of the Amazon EC2 service that are part of AWS OpsWorks Stacks.

When inside a Stack, they have the same configuration. In addition, users' SSH keys are replicated across all instances of the Stack they have access.

To view the instances, follow the menu **Cloud IAM > Virtual Machines > AWS > OpsWorks > Instances**.

---

## Remote Access

senhasegura ensures that users can run SSH sessions on Stacks instances in a monitored mode.

The accesses are performed using the SSH key of the user chosen in the report. This access is recorded on video and you can have its commands audited, depending on the rule set.

**Info:** The session videos can be viewed through the PAM Core module:  
**PAM Core > Access Control > Remote Sessions**  
See the **Proxy Manual** for more details.

### Access Instance

To perform instance access, follow the menu **Cloud IAM > Virtual Machines > AWS > OpsWorks > Remote access**.

In the report, search for the user and instance you want to start the session with and click the **Start session** icon.

**Caution:** Only user instances that the user is responsible for or according to the rules of the access group he belongs to will be displayed.
