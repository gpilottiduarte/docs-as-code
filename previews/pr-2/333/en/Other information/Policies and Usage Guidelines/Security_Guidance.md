# Security Guidance

## Defining a security vulnerability
 
What is a security vulnerability? This document aims to present the definition of a security vulnerability according to the understanding of senhasegura's technical team.
 
For the software security team, a bug is an unexpected behavior in the application and a security vulnerability is a bug that allows any type of access or shows any information that the user or attacker would not have otherwise. This document will help you understand what types of issues are addressed in security bulletins regarding security breaches.
 
Defining the concept of security vulnerability is extremely complex because it means assertively reducing among the whole range of problems, those that directly or indirectly attack the reliability of the product and the brand. The goal of our security vulnerabilities reporting program is to increase transparency and cooperation when it comes to product security. By understanding how big of a challenge defining this concept is, our definition serves as a broader filter for reporting new vulnerabilitie\s, rather than being the final word.
 
## Putting the concept into practice

Below are some examples of issues already reported that are not considered security vulnerabilities because they do not meet our definition of security vulnerability:

- Self-signed digital certificate
- Default login credentials 
- HTTP connections allowed 
- Redirect script on non-accessible URLs 
- System package versions in old senhasegura versions 
- Support for older versions of TLS 
- senhasegura as the target of an already established man-in-the-middle (MITM)
 
## Next steps

After reading our definition of security vulnerabilities, if you believe you have found a security vulnerability in senhasegura, be sure to contact us via [Vulnerability Handling Guidelines](/vulnerability-handling-guidelines/).

For known vulnerabilities, please refer to our [Product Security Center Advisories](/security-center-advisories/).