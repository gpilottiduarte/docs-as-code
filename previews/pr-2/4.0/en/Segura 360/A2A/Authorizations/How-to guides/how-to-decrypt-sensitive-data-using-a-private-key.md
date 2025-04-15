# How to decrypt sensitive data using a private key

This document provides a step-by-step guide for decrypting sensitive data that was encrypted using a public key. Decryption is essential to access secure information transmitted or stored in the system.

## Prerequisites

* **Private key availability**: you need access to the private key corresponding to the public key used to encrypt the data. More information in How to manage authorizations \> Download decryption key.  
* **Compatible tools**: the development environment or system must support the encryption algorithm used (for example, RSA with OAEP).  
* **Required permissions**: you need to have the system administrator role or a custom role with this permission.

---
## Prepare the environment

1. Ensure the necessary encryption libraries and tools are installed and correctly configured.  
2. Ensure that you have the required permissions to access the private key and perform decryption operations.

## Load the private key

1. Locate the private key file (.pem) in the system.  
2. Use an appropriate function or command to securely load the key into memory.

## Perform decryption

1. Use the algorithm and padding scheme (for example, OAEP) that were used during encryption to ensure compatibility.  
2. Execute the decryption process by providing:  
   1. The encrypted text (in base64 format, if necessary).  
   2. The loaded private key.

## Validate decrypted data

1. After decryption, verify that the data was correctly retrieved and is complete.  
2. If errors occur, review the algorithm and private key to ensure compatibility.

## Practical example

Below is an example of PHP code to perform decryption:

```php
<?php

function decryptData($encryptedData, $privateKeyPath) {
    $privateKey = file_get_contents($privateKeyPath);
    $privateKeyResource = openssl_pkey_get_private($privateKey);

    if (!$privateKeyResource) {
        die('Failed to load private key.');
    }

    $decrypted = '';
    if (openssl_private_decrypt($encryptedData, $decrypted, $privateKeyResource, OPENSSL_PKCS1_OAEP_PADDING)) {
        return $decrypted;
    } else {
        die('Decryption failed.');
    }
}

// Example usage of the function
$encryptedData = 'Base64_encoded_encrypted_data_here';
$privateKeyPath = 'path/to/your/private/key.pem';
$decryptedData = decryptData($encryptedData, $privateKeyPath);
echo "Decrypted Data: " . $decryptedData;

?>
```

## Important information

* The private key is a critical security element in the system. Store it in a secure location and prevent unauthorized access.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target="\_blank"}.