# Troubleshooting: API Authorization Error When Trying to Open the Agent

## Erro de Autorização de API ao Tentar Abrir o Agente

Ao tentar abrir o agente do Go, você pode encontrar um erro de autorização de API. Esse problema pode ocorrer devido à falta de instalação ou inicialização do container `senhasegura-api-authorization-service`. Este guia fornece um passo a passo para resolver esse problema, garantindo que o serviço necessário esteja corretamente instalado e em funcionamento.

### Sintoma

- Erro de autorização de API ao tentar abrir o agente.

### Provável Causa 

- O container `senhasegura-api-authorization-service` não está instalado ou não foi iniciado corretamente.

### Solução

Siga os passos abaixo para resolver o erro de autorização de API:

1. **Listar os Containers Ativos:**
   - Abra o terminal e execute o comando abaixo para verificar os containers em execução:
     ```bash
     docker ps
     ```
   - Confirme se o container `senhasegura-api-authorization-service` está na lista. Se ele não estiver, prossiga com os próximos passos.

2. **Reinstalar o Pacote:**
   - Caso o container não esteja presente ou instalado, reinstale o pacote necessário com o seguinte comando:
     ```bash
     apt reinstall senhasegura-api-authorization-service
     ```
   - Isso garantirá que o container seja baixado e instalado novamente.

3. **Iniciar o Serviço:**
   - Após a reinstalação, inicie o serviço com o comando abaixo:
     ```bash
     systemctl start senhasegura-api-authorization
     ```
   - Esse comando garantirá que o serviço esteja em execução.

4. **Gerar Nova Chave de API:**
   - Com o serviço em execução, gere uma nova chave de API utilizando o comando:
     ```bash
     orbit api keygen
     ```
   - Este comando cria uma nova chave de API que será utilizada para autorização.

5. **Reiniciar o Serviço:**
   - Por fim, reinicie o sistema para garantir que todas as alterações foram aplicadas corretamente:
     ```bash
     systemctl restart senhasegura-api-authorization
     ```

### Conclusão

Após seguir os passos acima, o problema de autorização de API ao tentar abrir o agente deve ser resolvido. Caso o erro persista, entre em contato com o suporte técnico para assistência adicional.
