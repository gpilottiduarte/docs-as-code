# About server information

This document provides an overview of the server monitoring tool, which enables you to monitor various aspects of the server, including general information, memory usage, network interfaces, internal firewall, and NTP configuration.

## General Information

This section provides general information about the server. It includes the hostname, IP address, server uptime, and the number of available CPUs on that server. You can also find the server's average workload.

## Memory

The memory section provides information about the server's memory usage. You can check the total amount of memory installed, the amount used, and the amount of memory available.

:::(Info) (Info)
High RAM usage can be expected since senhasegura designed the system to allocate a significant percentage of RAM for use by their application.
:::

## Interfaces

The Interfaces section displays the network interfaces available on the server. You can check each interface's IP address, netmask, and status.

## DNS

The DNS section displays the server's DNS (Domain Name System) configuration. You can see the configured DNS servers and the domains they are responsible for resolving. 

## Internal Firewall

The Internal Firewall section displays the status of the server's internal firewall. You can see which services are allowed through the firewall and which ports are open.

## NTP

The NTP section displays the server's NTP (Network Time Protocol) configuration. You can see which NTP servers the server is configured to use and whether the NTP service is running.