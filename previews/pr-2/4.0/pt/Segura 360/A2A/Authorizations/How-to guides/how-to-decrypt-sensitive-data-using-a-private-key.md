# Como descriptografar dados sensíveis usando uma chave privada no A2A

Este documento fornece um guia passo a passo para descriptografar dados sensíveis que foram criptografados utilizando uma chave pública. A descriptografia é essencial para acessar informações seguras transmitidas ou armazenadas no sistema.

## Pré-requisitos

* **Chave privada disponível**: você precisa ter acesso à chave privada correspondente à chave pública utilizada para criptografar os dados. Saiba mais em Como gerenciar autorizações \> Baixar chave de descriptografia.

* **Ferramentas compatíveis**: o ambiente de desenvolvimento ou sistema deve suportar o algoritmo de criptografia usado (por exemplo, RSA com OAEP).

* **Permissão necessária:** você precisa ter o papel de administrador do sistema ou um papel personalizado com essa permissão.
---
## Preparar o ambiente

1. Verifique se as bibliotecas e ferramentas de criptografia necessárias estão instaladas e configuradas corretamente.  
2. Garanta que você tem as permissões necessárias para acessar a chave privada e realizar operações de descriptografia.

## Carregar a chave privada

1. Localize o arquivo da chave privada (`.pem`) no sistema.  
2. Use uma função ou comando apropriado para carregar a chave em memória de forma segura.

## Realizar a descriptografia

1. Utilize o algoritmo e o esquema de *padding* (por exemplo, OAEP) que foram usados na criptografia para garantir a compatibilidade.  
2. Execute o processo de descriptografia, fornecendo:  
   1. O texto criptografado (em formato base64, se necessário).  
   2. A chave privada carregada.

## Validar os dados descriptografados

1. Após a descriptografia, verifique se os dados foram recuperados corretamente e estão completos.  
2. Caso encontre erros, revise o algoritmo e a chave privada para garantir a compatibilidade.

## Exemplo prático

A seguir, um exemplo de código em PHP para realizar a descriptografia:

```json
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

## Informações importantes

* A chave privada é um elemento crítico da segurança do sistema. Armazene-a em local seguro e evite acessos não autorizados.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).