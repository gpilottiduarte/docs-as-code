# Reference for command for partial release of browser tabs in VNCHTTP sessions

This command releases the display of the browsers tab bar on the proxy.


```Text
sudo orbit fajita tabs enable|disable
```

```Text
sudo orbit fajita --help
Usage: orbit fajita <component> [<action>]
Fajita access proxy management tools
Arguments:
 <component>    Fajita configuration component: [interface|import-ca|flash|netproxy|tabs]
 [<action>]     Action command: [enable|disable]
Flags:
 -h, --help                 Show context-sensitive help.
     --url=STRING           The site URL to import CA
     --proxy=STRING         Specifies the network proxy to use on http sessions.
     --port=8888            Specifies the network proxy port to use on http sessions.
     --user=STRING          Specifies the network proxy user to use on http sessions.
     --password=STRING      Specifies the network proxy user password to use on http sessions.
     --no-proxies=STRING    Comma separated list of sites, ips or domains should not be accessed via the network proxy.
     --force                Force the command execution, never prompt
act
 --show
```

