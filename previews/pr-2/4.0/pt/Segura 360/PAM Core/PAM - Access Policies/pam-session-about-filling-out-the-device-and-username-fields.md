# Sobre Preenchimento do campo Dispositivo e Username

## Campo dispositivo  
O campo de texto **Dispositivo (sep. por vírgula)** poderá ser preenchido com algumas combinações que facilitam a escolha dos dispositivos que estarão disponíveis para aquela política de acesso.

As combinações são:

* O nome de cadastro do dispositivo mais o número IP do dispositivo. Por exemplo: `DEVICE-ABC(100.100.100.100)`, estará disponível ao grupo o dispositivo que possui **exatamente** esse nome e IP.  
* Um asterisco no início mais uma parte que contém no nome do dispositivo mais um asterisco ao final. Por exemplo: `*device*`, estará disponível ao grupo o dispositivo que contém a palavra **device** em alguma parte do nome.  
* O início do nome do dispositivo mais um asterisco ao final. Por exemplo: `device*`, estará disponível ao grupo o dispositivo que possui a palavra device no **início** do nome.  
* O início do nome do dispositivo um asterisco no meio e o final do nome do dispositivo. Por exemplo: `device*final`, estará disponível ao grupo o dispositivo que **começa** com device no nome, alguma **outra palavra no meio** e **termina** o nome com a palavra final.

---
## Campo Username

Quando o nome de usuário da credencial corresponder ao nome de usuário do Segura, você pode usar a máscara `**USERNAME**` para garantir que apenas as credenciais visíveis sejam aquelas com o mesmo nome de acesso do usuário Segura.

Por exemplo: O nome de usuário utilizado para acessar a instância Segura é **“joao”**, e a regra do grupo será que apenas João terá acesso às credenciais com o mesmo nome de usuário, ou seja, apenas as credenciais em que o nome de usuário da credencial também seja **“joao”**.  
Para que isso seja possível, a seguinte sintaxe será utilizado para preencher o campo:

* `[#USERNAME#]` que trará somente as credenciais que possuem exatamente o nome de **joao**.  
* `[#USERNAME#]*` que trará todas as credenciais que possuir **joao** no começo do nome da credencial independentemente de como esteja o final.  
* `*[#USERNAME#]*` que trará todas as credenciais que possuir **joao** no meio do nome da credencial, independentemente de como esteja o começo e o final.