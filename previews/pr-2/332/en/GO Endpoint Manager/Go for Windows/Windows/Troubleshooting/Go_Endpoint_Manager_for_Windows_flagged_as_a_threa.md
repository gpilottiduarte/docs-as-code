# Go Endpoint Manager for Windows flagged as a threat in antivirus scanners

## Scenario

While running the antivirus software on the system, the Go Endpoint Manager agent is being detected as a threat, compromising the functioning and performance of senhasegura's PEDM solution.

* * *

## Cause

Some antivirus programs may create an alert about the PEDM solution because of access to specific system resources. This warning can happen even when updates and new versions are released to improve the product's functionality and security. The antivirus database may not immediately recognize these changes, leading to a false positive alert.

* * *

## Solution

To solve the problem, follow these steps:


1. In the antivirus software, locate the exclusion list.
2. Add the [exceptions](/v3-32/docs/go-windows-antivirus-exclusions).


The antivirus will no longer inspect the directories and files you’ve added. The Go Endpoint Manager for Windows agent can now perform all its features without any interference that could compromise its performance and integrity.

* * *
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.
