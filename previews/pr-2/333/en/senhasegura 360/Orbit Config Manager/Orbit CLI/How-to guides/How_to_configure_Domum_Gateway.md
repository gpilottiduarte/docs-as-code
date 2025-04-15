# How to configure Domum Gateway

Using the `orbit domum-gateway` command you can set the gateway settings for the **Domum** module. 
```
mt4adm@vmdf-giskard:~$  sudo orbit domum-gateway -h
Usage: orbit domum-gateway <action>
            
Domum Gateway settings tools
            
Arguments:
<action>    Domum gateway action: [challenge|setup|rotate|status]
            
Flags:
    -h, --help                 Show context-sensitive help.
            
    -a, --activation=STRING    Activation string
    -c, --challenge=STRING     Challenge string
        --force                Force the command execution, never prompt
        --show      
```
## List the current state of the communication
To list the current state of the communication between senhasegura instance and the **Domum Gateway** use the command `–show` or `status`.
```mt4adm@vmdf-giskard:~$ sudo orbit domum-gateway status
            
Connection with Domum Gateway is UP!
            
PING 16.202.217.165 (16.202.217.165) 56(84) bytes of data.
64 bytes from 16.202.217.165: icmp_seq=1 ttl=64 time=48.5 ms
64 bytes from 16.202.217.165: icmp_seq=2 ttl=64 time=48.5 ms
64 bytes from 16.202.217.165: icmp_seq=3 ttl=64 time=48.7 ms
64 bytes from 16.202.217.165: icmp_seq=4 ttl=64 time=48.4 ms
64 bytes from 16.202.217.165: icmp_seq=5 ttl=64 time=53.4 ms
            
--- 169.254.251.125 ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 9ms
rtt min/avg/max/mdev = 48.403/49.489/53.356/1.950 ms
            
interface: Domum
    public key: 3pnqyBznY9Jxise6PneZRALBJwUfgASTpkUVtHOV6VU=
    private key: (hidden)
    listening port: 46008
            
peer: Z+yzMY4Z9kcA1FfaCEu5dXk+qR4ke73jhspDKjAuswg=
    endpoint: 52.27.111.109:51820
    allowed ips: 16.202.217.165/32
    latest handshake: 15 seconds ago
    transfer: 2.23 KiB received, 2.29 KiB sent
    persistent keepalive: every 25 seconds
```
If no configuration has been performed the command will print an error message:
```
mt4adm@vmdf-giskard:~$  sudo orbit domum-gateway status
        This instance is not connect to any Domum Gateway
        Setup needed
 ```
##  Configure the Domum Gateway
To configure the **Domum Gateway** first use the argument `challenge`, this action will generate a unique certificate for the instance that must be sent to our **Support** team, which will perform the configuration between the company VPN and the **Domum Gateway**.
```
mt4adm@vmdf-giskard:~$  sudo orbit domum-gateway challenge
    
Are you sure you want to proceed: y█
Your Domum gateway challenge
    
LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUZRekNDQXl1Z0F3SUJBZ0lVZktU
SHpIWGFPeWNxazFaR0FIYkxlZkdJUjVFd0RRWUpLb1pJaHZjTkFRRUwKQlFBd01URU9N
QXdHQTFVRUNnd0ZSRzl0ZFcweEh6QWRCZ05WQkFzTUZrTm9ZV3hzWlc1blpTQmpaWEow
YVdacApab3RWeFgza3ZYaFg2eVZsM3V5bXU4OFdkd255SE1QekNCOVJMOWFpTmlhcndI
cHZHMy81dHFzek43eFByM2IwCjVQYmpmYzdJSWFSMlRGVDlNd3RvL3NTYmpza2tGZC9B
ZjNRN0x4Yzg4am5PTEgvNmoydW5iRHVTUmdSdjhRei8KbEd1SFljVUR3TWY4ZGFDM2Nj
YnpJd2x2YkcwSjdtTTN2ME5DZ0pnT3Y0Q1plSG5LM2tUdE1RWFV5VDRzdXcyawpxbjFz
SERnbmlyRyt0ZDFwNUNVUWdaeVduTEFsL0ordCtFS0ZVUVlqSDFTSU9Hb214eTBBbVRD
dkZWUE1yZEZHCmZXM0pvS09MNDhtV210U0Vkd3hXb05nUTFwVDByODRmcG5abVljVEEr
elVWaVM1RE53Y1F5UmVtdStGVmhxY0EKZkMrYytPVlJLQjk3NXpRQkpHbnJDK3VyalR4
YzkzT0F1ajljR0I0YUdUTW5TNWh3MEdFTExQb1FITkh2Q1QwdgpjUXY3TDh0OFI5N3lk
RCtwWW1LN2tIcE5Zc1dOMnh1SFRUcmprd1FnSFN2enR4dWtXQksyMkVKdVQvZ2dUVFBa
ClIrUVYxRzM1WHIzQ1RtN0Z0eFNsaDg4elRxcllKc2daRTZoUUVvYkk1czhZZS9NVXJq
WjZLNWt0VDNTN05Zc2gKcWc3OFVZQ0NlL3BLSTVIUmJqZm5sK1pvaTFpeGlCZi9TMFNI
SStWcGNnNHduNExDcnAyK1NjZG5ta0VKQkNzLwpUUFpWWDhWRTRmQm9UUlZzMmkzZnJ0
TlBoS1V0WXlzK1p5eHlSbE9RNzVXL1lKd1pmV1cyNEdUeFFlY2pCM2dCClkyRjBaWE13
SGhjTk1qRXdOakE0TVRReU5URXhXaGNOTWpFd056QTRNVFF5TlRFeFdqQXhNUTR3REFZ
RFZRUUsKWkpXdjNITnNDTWdWdWxaclM1WEhUckVNSmphL2REZ1A2czZGVENKM1FSRGJr
em5hallCT3hFOUVwZWRiQlJGUwpXckZGZDZYMGVPY1doL3U5RXUvUkdMYXlaK05NdHh3
cUhnUmdSNHUwUkpZVVQvL2FmUFNwZWV2QUNMZTFsQzdCClJOTlhtd3lzZFlDM1VMUCtu
WTA3QU9QS05jaSsxNGtFMGxscXVnL3liR01QeXd6bmtoaXVpNTFjTjczL3NzV2EKNEVv
L0VrVkRCSWFxcysybzQwQmZJYVRWdFR4WjFZbzNhVXN2dGk0WDhuT0cyUWM1b3ErUDln
ZEtwalVTNmxRUQo5VEFlTVp3VzBsRDVFbTRYdDgwekhsYnp2bVdDcXNDd0Rmc0F1dzBk
K3JsRW9EalRUT003VHd2RndVZTRNNjlRCkFRSC9NQTBHQ1NxR1NJYjNEUUVCQ3dVQUE0
SUNBUUNrQTZZZE12djdwUWpFaDMxQmZQaGZkK1o3VnNtNDhhRjUKNkJBeUdHMWt5TFRL
NHJ0c0ZLeEo3ME1Mbmd5RlN6eWNzQko2RDZNQWtHUG1zUUlOT0d6UkFNUzdVamhUdzhj
MgpEQVZFYjIxMWJURWZNQjBHQTFVRUN3d1dRMmhoYkd4bGJtZGxJR05sY25ScFptbGpZ
WFJsY3pDQ0FpSXdEUVlKCktvWklodmNOQVFFQkJRQURnZ0lQQURDQ0Fnb0NnZ0lCQU12
ZnFTcXUwU1NLNzVkdVYra2tDVU1aSno0TGoyVS8KdlorbldubmVMNXdiQWdNQkFBR2pV
ekJSTUIwR0ExVWREZ1FXQkJSWHBEUWVIY2w5NklacC9QWVE0VVdmZWFaZwpTekFmQmdO
VkhTTUVHREFXZ0JSWHBEUWVIY2w5NklacC9QWVE0VVdmZWFaZ1N6QVBCZ05WSFJNQkFm
OEVCVEFECkVIb2hCZ0ZadlRtWnNRZ3BPRnJFZzhzQjZHcGNmaC9JNTRGZ0NMTTlnbkt0
ZHpzbVNwVks0d1hrNUJ4MFliVmMKWTNOemFFay90anN2azA0WWdoUkdrN0o3bWQ2T2Rr
RTh0Rm5pRS92cWpvNUJoejkxZllxdEN5T09TTjVHamVxdAo3d1A4amNoL1NIdFJVOTlO
bnVqM1hCZVU5OWJUMnlONVpUYkpBM2hMUVFreEJqTE03cXZGRHhTd3NFNUZDdFVyCm9k
UXd4eDV4RFhOTGg4MXVXaWZlTWlKcHppSG94TFpXNnRqaVJJcGVoM2pFRU9iUkppNHJV
ZGhOWXJFL21HSFUKWitQRDhyS1Zrdz09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0=
```
Our team will send a configuration string, with this string in hand, paste it next to the argument `setup –activation`.
```
mt4adm@vmdf-giskard:~$  sudo orbit domum-gateway setup --activation=MIIFgQYJKoZIhvcNAQcDoIIFcjCCBW4CAQAxggJlMIICYQIBADBJMDExDj
AMBgNVBAoMBURvbXVtMR8wHQYDVQQLDBZDaGFsbGVuZ2UgY2VydGlmaWNhdGVzAhR8pMfMd
do7JyqTVkYAdst58YhHkTANBgkqhkiG9w0BAQEFAASCAgAGt7dmmcGLjrX1rFcu+znkpsPo
0ucsKvbe3DeIt5RSsxW5yL6WEPvSeurYZ6wuenfI8p2U+LBATZOQ1bTygWx8V+4+bcrYdoI
uF7RtMKycZwv7oIpceDvWP+XoSfQqHJrXALoY+w1IfeB1KhealdQvr46YpIxZrwE3q5mc4Z
LbjU4pC8awGoJB3TO2dbSjY5PwIvE2Mo7Umu8r8yw1085Rohy8MDz6/eaRjyCdBvysijgqt
VAOf+yi4uUn6At6UkCFDL1Kny6RVlnAhIkuGVA4IJqgh64H9SaG4UtFfhIiSBa9urbj44pL
gjumiZB/rZN+Rjm1NirusrKeIRhg87RgrlebFE26VgFTIRTROLyn3N2c0J3ANXUf4okihti
jcrDAbdOa5B6y65UOB3LwR/bzWLazHnFk9Ddg05SzTLmCNXt1fOv60NieWpew9xyLa34kx5
bFGebbowvkgYGel/llvKiOXSzpi/TpDfqtcHz91NRbmg/mJmisTy61/NDbfVseqoTTCW+s5
4pH+/dt97rhH9HVHcEFtuczM5pe18oGnkXDXv7I3wmkseejaSjm0UnLbfoDNgYb77b1e1W4
nO9DXJt7+u7ziErPzZCg77zly8jZhhXc4BMvh5VcOXINZoXnRcahX/UieIt20KC2uxx0Rfu
mWd09aC8IpBuhkH/d0TCCAv4GCSqGSIb3DQEHATAdBglghkgBZQMEASoEEG3p8x0CI5FvmI
zDivfC52mAggLQhELSTxX/wfNg4p/Gj/9HN4l6THmQ8cHe5GcMO2PfVz7Wy3geoLC5pMByu
zvI3l+2vAcaLfwT7/ZZDCVsIZHbFM7hV5BHSWN8oAFzdgtZgKBqgD/khOEXdRnsSSItU5Te
p6ZO6Qp4VgFUH/OEWfEgpW4T3cas1e6FR/bBlxIlLFIme1KRRi2l8XyfexQ1080EDbmnZPc
iCC3kkT30BsULdOru3uSqf5MGH4R2upH9aTzPIQIZFN+KhezfZO3wOEmAD6kwysPEn0efKa
1tjeYG72Qj9xc8Bb1SqcBzZwm3Cjgx9MtsKxiCSa3D3dfekOdnmi+F9Wo+wfqkM7CnOLR/c
+NF5r1mCjWVvoX3ztuMaTl+rhHHyjWRjHEGFpC4c8h0AVFdKN7PPOOAmEbA/svELuyz2Hcc
PV5wQ67M4nceCICysNHqm8EyGAMGJ1FOElYg4c3+Hsg9s4D83qaDoNUa7nJOfTvcMGgPrCY
2OIM/Mrw6xhkxkx4mJ0fCTN7i+JIDGD8r2TcGQemsQ+GuNDffG6OhSoJlLNLFRfCX9cJaOq
Ab2oCv3u5s/Q64Qho1qTCBfmdDzxVt7DmiyOUXjMwJQpwmVwMHfELpipj8t6HR/DEt6uZJM
eLQjtO03MasC2tR0gcOEbpadTUjeEASnsVuYlBC8P9x7yKacjmiPtgWXva9qaymtwfGsgIY
gqKPm/P3b9rjhC/Bq4kXjsOPu/GkorM0RqGAuC5lYRKmUC2tnBbBw/h0Fnw6PQ9yIlLGFRb
llJoQxjGhw4HBWxx0VLwRBH7/A4Wfz7fheWrSTL2udkFanEVLXe5KrubWV8+wJqsyXuGfXz
9PWhqyGB4emlhgDJ9dHuMAlPmOtVdfrP93OG5S4OvBfgKU+1As8CuBPkvIIepm2Bry80QvB
dhweWFu5R+VNjo+qoTWN4TvT/RmbNOu+YK81TSCiAW4oP3wv7Hw
                    
        Are you sure you want to proceed: y█
        Done!
        No errors reported
```
With these steps, the configuration is done.

Once you have set up the instance with the gateway, you can request the keys to be changed.

## Perform a rotation
To perform a rotation, use the argument `rotate`.
:::(Warning) (Caution)
Using this argument will restart all active connections.
:::
```
mt4adm@vmdf-giskard:~$ sudo orbit domum-gateway rotate

Are you sure you want to proceed: y█
Connection with Domum Gateway is UP!

PING 16.202.217.165 (16.202.217.165) 56(84) bytes of data.
64 bytes from 16.202.217.165: icmp_seq=1 ttl=64 time=48.0 ms
64 bytes from 16.202.217.165: icmp_seq=2 ttl=64 time=48.0 ms
64 bytes from 16.202.217.165: icmp_seq=3 ttl=64 time=48.1 ms
64 bytes from 16.202.217.165: icmp_seq=4 ttl=64 time=48.2 ms
64 bytes from 16.202.217.165: icmp_seq=5 ttl=64 time=47.6 ms

--- 16.202.217.165 ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 8ms
rtt min/avg/max/mdev = 47.581/47.977/48.220/0.352 ms

interface: Domum
  public key: KTucX7gwxCCGKzuU63DccQ/J5eQtGkSEoCnQ+K+s4C8=
  private key: (hidden)
  listening port: 49538

peer: 7CqAnT/YsFnqCBQRbwybeIB4C6XMh6BcIQGBjDhfxgo=
  endpoint: 52.27.111.109:51820
  allowed ips: 16.202.217.165/32
  latest handshake: 5 seconds ago
  transfer: 828 B received, 1.42 KiB sent
  persistent keepalive: every 25 seconds
mt4adm@vmdf-giskard:~$
``` 
