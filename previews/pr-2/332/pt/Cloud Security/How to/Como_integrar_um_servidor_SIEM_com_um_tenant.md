# Como integrar um servidor SIEM com um tenant

Este tutorial apresenta um passo-a-passo sobre como adicionar integrações SIEM a um tenant no **Cloud Security**.

### Requisitos

- Ter a função **Cloud Security - Administrador do Tenant**.
- Ter um ou mais sockets SIEM configurados em um serviço externo.

## Adicionar uma integração com servidor SIEM

1. Em **Cloud Security**, clique no ícone do **Menu do usuário** no canto superior direito da tela.
2. No menu dropdown, selecione **Painel do administrador**.
3. Em **Configurações de tenant**, selecione **Servidores SIEM**.
4. Clique em **+ Add**.
5. Preencha os campos:
    1. **Nome**: digite um nome para a integração SIEM sendo criada.
    2. **Endereço**: no campo de seleção, escolha entre:
        1. **DNS**: preencha com o nome completo do host do socket SIEM.
        2. **IPv4**: preencha com o endereço IP do socket SIEM.
    3. **Porta**: preencha com a porta listener que deve receber os logs.
    4. **Protocolo**: no campo de seleção, escolha entre **TCP** ou **UDP**.
    5. **Tipo de mensagem**: no campo de seleção, escolha entre **Syslog** ou **CEF**.
    6. **Usar TLS**: no campo de seleção, selecione **Sim** para habilitar o handshake TLS para comunicação com o socket SIEM ou escolha **Não** se o **Cloud Security** não deve iniciar um handshake TLS.
6. Clique **Adicionar**.