# Servidores SIEM

Este documento fornece informações sobre a tela **Servidores SIEM** no menu **Configurações de tenant**, que exibe detalhes sobre os servidores SIEM conectados a plataforma **Cloud Security**, e permite usuários a configurar servidores terceiros para receber registros de auditoria.

É possível integrar tenants com a maioria das ferramentas de servidor SIEM disponíveis no mercado, como Microsoft Sentinel ou ElasticSearch. **Cloud Security** envia mensagens nos formatos CEF e Syslog (RFC 5424).

Qualquer servidor SIEM que pode receber mensagens do tipo CEF e Syslog podem ser integrados à plataforma **Cloud Security**.

Para receber os logs de eventos, é necessário configurar um socket UDP ou TCP de escuta no servidor SIEM. O host e a porta de escuta devem ser configurados no **Painel do administrador** do **Cloud Security**.

## Caminho para acesso

1. Acesse **Cloud Security**.  
2. No menu do usuário, clique em **Painel do administrador**.  
3. No menu lateral, clique em **Servidores SIEM**.

## Menu de ações

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **\+ Adicionar** | Botão | Abre a tela [Adicionar novo servidor SIEM](/v4/docs/pt/siem-servers#tela-adicionar-novo-servidor-siem). |

## Campos de busca

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Pesquisar** | Campo de texto | Filtra os servidores com base nas palavras inseridas. |
| **Limpar filtros** | Botão | Limpa os filtros aplicados. |
| **Exportar dados em CSV** | Botão | Abre a janela **Exportar dados em CSV**. |
| **Mostrar/Ocultar colunas** | Botão | Abre um *card* para gerenciar a exibição das colunas no relatório. |

## Campos do relatório

- Nome: nome do servidor.  
- Protocolo: protocolo utilizado pelo servidor.  
- Tipo de mensagem: tipo de mensagem do servidor.  
- Endereço: endereço do servidor.  
- Porta: porta utilizada pelo servidor.  
- Usar TLS: informa se o servidor utiliza o protocolo TLS.  
- Habilitado: informa se o servidor está habilitado ou não.  
- Ações:  
    - Editar: abre a tela [Adicionar novo servidor SIEM](/v4/docs/pt/siem-servers#tela-adicionar-novo-servidor-siem).

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Tela Adicionar novo servidor SIEM

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Nome \*** | Campo de texto | Sim | Nome do servidor SIEM. |
| **Endereço \***  | Campo de texto | Sim | Endereço do servidor SIEM. As opções são: **DNS** e **IPv4**. |
| **Porta \*** | Campo de texto | Sim | Porta do servidor SIEM. |
| **Protocolo \*** | Menu suspenso | Sim | Protocolo do servidor SIEM. As opções são: **TCP** e **UDP**. |
| **Tipo de mensagem \*** | Menu suspenso | Sim | Tipo de mensagem do servidor SIEM. As opções são: **CEF** e **Syslog**. |
| **Usar TLS \*** | Menu suspenso | Sim | Opção para definir se o servidor SIEM utiliza o protocolo TLS. As opções são: **Sim** e **Não**. |