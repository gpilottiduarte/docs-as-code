# Risk rating

<!-- Fix HTML -->
The certificate risk rating is a scale that assesses and sets a grade for certificates according to the following criteria:

- Encryption algorithm
- Encryption key size
- Signature algorithm
- Certificate authority
- Certificate expiration date
- Number of devices using the certificate
- Certificate responsible
- Certificate status

For each criterion, the certificate can gain or lose points. The final result is the sum of the points the certificate has received. This classification allows rapid risk assessment in environments where certificates are in use.

## Security rating

| Score | Rating |
|---|---|
| More than 80      | <span style="color:#037255">**A**</span> |
| Between 65 and 79 | <span style="color:#4ECC84">**B**</span> |
| Between 50 and 64 | <span style="color:#F9DE3E">**C**</span> |
| Between 35 and 49 | <span style="color:#FE9848">**D**</span> |
| Between 25 and 34 | <span style="color:#FE9848">**E**</span> |
| Between 0 and 24  | <span style="color:#F93E3E">**F**</span> |
| Less than 0       | <span style="color:#F93E3E">**NT**</span> (Not Trusted) |

The classification does not restrict the use of certificates. You can define whether or not to use a low-rated certificate on your systems.

<!-- Fix callout -->
:::(warning) (Warning)
We do not recommend using low-rated certificates in productive environments.
:::

---

## Rating criteria

The sum of the criteria below generates a total that falls within one of the ranges, resulting in the final security rating of the certificate.

### Encryption algorithm

| Type | Score |
|---|---|
| DSA | <span style="color:#F93E3E">**-100**</span> |
| Others | **0** |

### Encryption key size

#### RSA

| Size | Score |
|---|---|
| 4096 bits     | <span style="color:#71EA90">**+30**</span> |
| 2048 bits     | <span style="color:#71EA90">**+20**</span> |
| 1024 bits     | <span style="color:#71EA90">**+10**</span> |
| < 1024 bits   | <span style="color:#F93E3E">**-100**</span> |

#### EC/ECDSA

| Size | Score |
|---|---|
| 384 bits | <span style="color:#71EA90">**+40**</span> |
| 256 bits | <span style="color:#71EA90">**+25**</span> |
| 160 bits | <span style="color:#71EA90">**+5**</span> |
| < 160 bits | **0** |

### Signature algorithm

| Type | Score |
|---|---|
| SHA512 | <span style="color:#71EA90">**+30**</span> |
| SHA384 | <span style="color:#71EA90">**+20**</span> |
| SHA256 | <span style="color:#71EA90">**+10**</span> |
| Others | **0** |

### Certificate authority

| Type | Score |
|---|---|
| Has CA | <span style="color:#71EA90">**+10**</span> |
| Self-signed | **0** |

### Certificate expiration date

| Value | Score |
|---|---|
| Valid   | <span style="color:#71EA90">**+10**</span> |
| Expired | <span style="color:#F93E3E">**-100**</span> |

### Number of devices using the certificate

| Value | Score |
|---|---|
| Between 0 and 1 devices | <span style="color:#71EA90">**+10**</span> |
| Between 2 and 5 devices | <span style="color:#71EA90">**+5**</span> |
| More than 5 devices | **0** |

### Certificate responsible

| Value | Score |
|---|---|
| Has responsible | <span style="color:#71EA90">**+10**</span> |
| Does not have responsible | **0** |

### Certificate status

| Value | Score |
|---|---|
| Revoked* | <span style="color:#F93E3E">**-100**</span> |
| Others | **0** |

<!-- Fix callout -->
:::(Warning) (Warning)
The certificate is considered revoked when its intermediate or root certificate is revoked.
:::
