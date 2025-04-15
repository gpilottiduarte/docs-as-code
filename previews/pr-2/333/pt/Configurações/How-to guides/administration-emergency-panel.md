Este artigo é um guia sobre como realizar configurações essenciais no Painel de emergência. Essa funcionalidade permite encerrar todas as sessões em andamento ou congelar o acesso de dispositivos predefinidos. O painel permite ainda bloquear o acesso ao senhasegura, mesmo via API ou GO Endpoint Manager, por um período determinado.

## Requisitos

* Usuário com o Papel de [**System Administrator**](/v3-33/docs/pt/auditing-permissions). Esse é o único papel com a Permissão **System.EmergencyPanel.Control**
* [**MFA ativado**](/v3-33/docs/pt/user-management-add-multi-factor-authentication) para o usuário



---

## Encerrar sessões

CuidadoRealizar essa ação fará com que todas as sessões em andamento gerenciadas pelo senhasegura, sejam encerradas. Para evitar que usuários iniciem novas sessões, ative o Congelamento ou Lockdown.

Para encerrar sessões, siga estas etapas:

1. No canto superior direito, clique em **Painel de Emergência**, identificado pelo ícone de cuidado.
2. Selecione **Encerrar sessões.**
3. Na nova página, insira o **Token de acesso** gerado por sua solução MFA.
4. Clique em **Validar token**.
5. Digite a **Justificativa** e, se necessário, um [**Código de governança**](/v3-33/docs/itsm-integration).
6. Clique em **Aplicar** para concluir o encerramento.



---

## Congelamento

CuidadoQuando o congelamento é ativado, os usuários não poderão iniciar novas sessões em dispositivos predefinidos. Somente usuários administradores podem iniciar sessões durante congelamentos.### Requisitos

* Habilitar o campo **Bloquear durante congelamentos?**, nas configurações do Grupo de acesso do módulo PAM Core.

Para impedir o início de sessões em dispositivos específicos, siga estas etapas:  

1. No canto superior direito, clique em **Painel de Emergência**, identificado pelo ícone de cuidado.
2. Selecione **Congelamento.**
3. Na nova página, insira o **Token de acesso** gerado por sua solução MFA.
4. Clique em **Validar Token**.
5. Defina o **Início** e a **Duração** do congelamento**.**
6. Digite a **Justificativa** e, se necessário, um [**Código de governança**](/v3-33/docs/pt/itsm-integration).
7. Clique em **Salvar** para ativar o congelamento.

O congelamento será aplicado somente nos dispositivos dos [**Grupos de Acesso**](/v3-33/docs/pt/pam-session-access-group) com o campo **Bloquear durante congelamentos?**habilitado. Esses usuários serão informados que seus acessos aos dispositivos estão bloqueados até o fim do congelamento. Durante o período de congelamento, o usuário pode acompanhar quanto tempo falta para o término.

CuidadoEditar um grupo de acesso durante o período de congelamento pode alterar a lista de dispositivos afetados.### Cancelar congelamento

1. No canto superior esquerdo, clique no **Grid Menu ⁝⁝⁝**, identificado pela caixa de nove quadrados, e selecione **Relatórios**.
2. Selecione **Painel de Emergência ➔ Congelamento****.**
3. Localize o congelamento. Somente congelamentos com status pendente ou em andamento podem ser suspensos.
4. Clique em **Cancelar**, identificado pelo ícone da lixeira.
5. Na nova página, insira o **Token de acesso** gerado por sua solução MFA.
6. Digite a **Justificativa** e, se necessário, um **Código de governança**.
7. Clique em **Salvar** para encerrar o congelamento.

InfoNa coluna **Ação**, você também encontra os itens **Detalhes** e **Dispositivos** que fornecem mais informações sobre os eventos.

---

## Lockdown

CuidadoQuando o lockdown é ativado, todas os acessos ao senhasegura, incluindo interface web, chamadas de API e usuários GO Endpoint Manager serão bloqueados. Todas as sessões em andamento serão interrompidas e todos os usuários serão desconectados. Somente usuários administradores podem acessar o senhasegura via interface web durante o lockdown.  
ImportanteEssa opção pode causar downtime em um serviço que usa o senhasegura via API.

Para interromper todas as sessões, siga estas etapas:

1. No canto superior direito, clique em **Painel de Emergência**, identificado pelo ícone de cuidado.
2. Selecione **Lockdown****.**
3. Na nova página, insira o **Token de acesso** gerado por sua solução MFA.
4. Clique em **Validar Token**.
5. Defina o **Início** e a **Duração** do lockdown**.**
6. Digite a **Justificativa** e, se necessário, um [**Código de governança**](/v3-33/docs/pt/itsm-integration).
7. Clique em **Salvar** para ativar o lockdown.

Os usuários serão informados que seus acessos aos dispositivos estão bloqueados. Durante o período de lockdown, o usuário pode acompanhar quanto tempo falta para o término.

Chamadas API receberão a seguinte mensagem:


```
{
    "response": {
        "status": 503,
        "mensagem": "senhasegura is under Lockdown until 09/08/2022 22:54:00",
        "erro": true,
        "cod_erro": 100,
        "message": "senhasegura is under Lockdown until 09/08/2022 22:54:00",
        "error": true,
        "error_code": 100
    }
}

```
### Cancelar lockdown

1. No canto superior esquerdo, clique no **Grid Menu ⁝⁝⁝**, identificado pela caixa de nove quadrados, e selecione **Relatórios**.
2. Selecione **Painel de Emergência ➔ Lockdown****.**
3. Localize o lockdown. Somente lockdowns com status pendente ou em andamento podem ser suspensos.
4. Clique em **Cancelar**, identificado pelo ícone da lixeira.
5. Na nova página aberta, insira o **Token de acesso** gerado por sua solução MFA.
6. Digite a **Justificativa** e, se necessário, um **Código de governança**.
7. Clique em **Salvar** para encerrar o lockdown.

InfoNa coluna **Ação**, você também encontra o item **Detalhes** que fornece mais informações sobre os eventos.  


---

## Notificações do painel de emergência

Para adicionar notificações, siga estas etapas:

1. No canto superior esquerdo, clique no **Grid Menu ⁝⁝⁝**, identificado pela caixa de nove quadrados, e selecione **Configurações**.
2. Selecione **Notificações ➔ Configurações**.
3. No canto superior direito, clique em **Exibir ações**, identificado pelo ícone de três pontos verticais.
4. Selecione **Nova notificação**.
5. Em nome da notificação, defina um título.
6. Selecione como o usuário será notificado: E\-mail, Tela ou SMS.
7. Em **Enviar notificações apenas para contatos que possuem acesso às credenciais ou dispositivos**, marque se deseja restringir o recebimento.
8. Na aba **Notificações**, clique no ícone identificado pelo sinal de soma.
9. No campo **Categoria**, selecione **Painel de emergência**.
10. Clique em **Filtrar**.
11. Selecione entre as opções vinculadas ao Painel de emergência.
12. Clique em **Adicionar**.
13. Na aba **Contatos**, clique no ícone identificado pelo sinal de soma, para adicionar os usuários que receberão as notificações.
14. Clique em **Salvar** para ativar a notificação.

InfoPara saber mais sobre Notificações, consulte a [**seção sobre o tema**](https://docs.senhasegura.io/v3-33/docs/pt/notifications).

---

Você ainda tem dúvidas? Entre em contato com a [**Comunidade senhasegura**](https://community.senhasegura.io/).

