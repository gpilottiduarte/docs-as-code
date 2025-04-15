# Servidores SIEM

**Cloud Security** permite a integração de servidores SIEM externos para rastrear ações realizadas por usuários registrados sob um tenant. Você pode conectar soluções SIEM para receber logs de eventos de **Cloud Security** e **Cloud Entitlements** para monitoramento e automação.

É possível integrar tenants com a maioria das ferramentas de servidor SIEM disponíveis no mercado, como Microsoft Sentinel ou ElasticSearch. **Cloud Security** envia mensagens nos formatos CEF e Syslog (RFC 5424).

:::(Info) (Info)
Qualquer servidor SIEM que pode receber mensagens do tipo CEF e Syslog podem ser integrados à plataforma **Cloud Security**.
:::

Para receber os logs de eventos, é necessário configurar um socket UDP ou TCP de escuta no servidor SIEM. O host e a porta de escuta devem ser configurados no **Painel do administrador** do **Cloud Security**.

## **Lista de servidores SIEM**

A tela de lista de servidores SIEM mostra todos os servidores SIEM configurados:

| Item | Description |
| --- | --- |
| Nome | A coluna **Nome** mostra o nome dos servidores SIEM integrados com o tenant. |
| Protocolo | A coluna **Protocolo** mostra o protocolo usado para enviar os logs de eventos. Possíveis valores incluem: *TCP* e *UDP*. |
| Tipo de mensagem | A coluna **Tipo** de mensagem mostra o tipo de mensagem enviada ao servidor SIEM. Possíveis valores incluem: *Syslog* e *CEF*. |
| Endereço | A coluna **Endereço** contém o endereço do servidor. Possíveis valores incluem: um hostname em formato DNS ou um IP em formato IPv4. |
| Porta | A coluna **Porta** mostra a qual porta listener os logs de evento estão sendo enviados. |
| Usar TLS | A coluna **Usar TLS** mostra o status do uso de TLS na conexão com o servidor. Pode estar habilitado ou desabilitado. |
| Habilitado | A coluna **Habilitado** mostra o status da integração com o servidor SIEM. Pode estar habilitado ou desabilitado. |