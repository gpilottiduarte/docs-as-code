# About encryption keys

Encryption keys play a crucial role in information security and are fundamental to implementing encryption algorithms. They are essential for guaranteeing the confidentiality, integrity, authenticity, and, in some cases, non-repudiation of information.

There are two main types of cryptographic keys: symmetric keys and asymmetric keys:

1. **Symmetric Keys:** use the same key to encrypt and decrypt data. Both parties involved in the communication must have the same secret key.
2. **Asymmetric (or Key Pair) Keys:** use a pair of public and private keys. The public key is shared, while the private key is kept secret.

The choice between symmetric and asymmetric keys often depends on the system's requirements. Frequently, systems use a combination of both to take advantage of each approach. Secure key management is crucial to ensuring the effectiveness of encryption and protecting sensitive information.

In Segura's **DevOps Secret Manager**, you'll find options for asymmetric and symmetric keys.

For symmetric keys, Segura offers the following protocols:

* **AES** algorithm operates on fixed data blocks and supports different key sizes. In Segura, you can use AES encryption with key sizes of 128 and 256 bits.

For asymmetric keys, Segura offers the following protocols:

* **RSA** is an algorithm that bases itssecurity on the difficulty of factoring the product of two large prime numbers. The public key consists of two values: an integer n (the modulus) and a public exponent (usually called e). The private key has two values: the same integer n and a private exponent (d). The specific values of n, e, and d are calculated to satisfy specific mathematical properties. At Segura, you can use RSA encryption with key sizes of `2048`, `3072`, and `4096` bits.
* **ECDSA** is an algorithm that uses the mathematics of elliptic curves on finite bodies, where specific mathematical equations represent these curves and offer cryptographic properties that make them suitable for encryption algorithms. Segura offers the `p256`, `p384`, and `p521` variants, where each number refers to the size of the elliptic curve.