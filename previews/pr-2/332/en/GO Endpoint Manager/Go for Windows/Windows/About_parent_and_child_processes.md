# About parent and child processes

Any application launched with the **PEDM GO Endpoint Manager** client is considered, in the operating system, as a parent process and, therefore, can have child processes.

This document explains how the **PEDM GO Endpoint Manager** client processes are identified and treated according to lists and rules created in senhasegura.

## Parent and child processes

Each time an application or process is launched in the **PEDM GO Endpoint Manager** client, it is called P1 and is evaluated based on the following conditions:

1. If no access list has been created:
    * General parameters will be applied for this process.
2. If there is no access list for parent or child processes:
	 * "Common" access lists will be used for this process.
3. If there are parent process lists:
	 * The immediate parent process of P1 will be found, considering it as P0. Once this P0 process is found, the access lists for parent processes will be used to evaluate it, and if it doesn’t comply with any of the lists, the general parameters will be applied.
4. If there are only child process lists:
	 * The PEDM GO Endpoint Manager client will try to find the parent process of P1, if it finds it, it means it’s a child process. Therefore, the child process lists will be applied to P1.
5. If there are parent process lists and child process lists.
	 * Parent process lists are evaluated first, following their rules. If any parent process list agrees, it’ll be applied. Otherwise, the PEDM GO Endpoint Manager client checks for child processes lists. If they exist, validation will be done with them. If none agree, the "common" access lists will be used. If there’s still no match, the general parameters will be applied.

## Precedence order

Order of precedence and priority of execution of lists on PEDM GO Endpoint Manager client processes.

1. **Parent processes list**.
2. **Child processes list.**
3. **“Common” access list**.
4. **General parameters**.
