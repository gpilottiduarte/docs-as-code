## Visão geral

Para administrar situações onde é necessário gerenciar permissões para aplicações, usuários e workstations, o GO Endpoint Manager para Windows oferece as listas de acesso denylists e allowlists.

Muitas vezes, o administrador não quer permitir alguns aplicativos (Microsoft Powershell ou Windows Command Line (CMD), por exemplo) para todos os usuários. Nesses casos, você pode:

* Criar regras de lista de negação global.
* Criar regras de lista de acesso de segregação por workstation
* Permitir que apenas alguns usuários tenham acesso aos aplicativos escolhidos.
* Criar listas de acesso para [aplicações](https://docs.senhasegura.io/v3-32/docs/pt/go-endpoint-manager-windows-application-access-lists-1-1), [automações](https://docs.senhasegura.io/v3-32/docs/go-endpoint-manager-windows-agent-automation#configure-automation-on-the-senhasegura-platform-go) e [desinstaladores](https://docs.senhasegura.io/v3-32/docs/pt/go-endpoint-manager-windows-uninstallers).

InfoOs registros dos submódulos de **aplicativos, a****utomaçõe****s, desinstalador, paine****l de controle** e **DLL**podem ser separados por lista de negação e listas de permissões. Eles também permitem a segregação usando níveis globais e por workstations.

---

## Fluxo de prioridade em uma l**ista de acesso**

Ordem de prioridade:

1. Allowlist (pode elevar)
2. Allowlist (sem elevar)
3. Denylist
4. Parâmetro segregado (pode elevar)
5. Parâmetro segregado (sem elevar)
6. Parâmetro global (pode elevar)
7. Parâmetro global (sem elevar)

ImportanteEste fluxo de prioridade tem funcionamento diferente do módulo PAM Core, onde as denylists são mais restritivas que as allowlists. No GO Endpoint Manager para Windows, allowlists sobrepõem as denylists.1. **Allowlist (sobrepõem as demais regras):** permite que as regras criadas sejam aplicadas para programas específicos e o que não está na regra é tratado por parâmetros segregados caso existam, e por último parâmetros gerais. A execução do aplicativo em allowlist pode ser limitada através do workflow de acesso. É possível definir restrições de acesso que dependam de uma justificativa e aprovação para acessar a aplicação.
2. **Denylist:** nega todos os programas que façam parte da regra e permite tudo que está fora da regra.
3. **Parâmetros segregados:**este parâmetro sobrepõe o parâmetro geral do sistema.
4. **Parâmetros gerais do sistema:** são aplicados para todas as workstations. Eles não serão aplicáveis caso exista uma lista de acesso de denylist ou allowlist.

InfoSe a aprovação é necessária, o administrador deve cadastrar [usuários aprovadores no sistema](https://docs.senhasegura.io/v3-32/docs/pt/go-endpoint-manager-windows-approval-workflow).

---

## Leia mais

* [Telas comuns](https://docs.senhasegura.io/v3-32/docs/pt/general-information-graphical-user-interface?highlight=telas%20comuns#telas-comuns)
* [Automação](https://docs.senhasegura.io/v3-32/docs/pt/go-endpoint-manager-windows-agent-automation)
* [Workflow de aprovação para aplicações](https://docs.senhasegura.io/v3-32/docs/pt/go-endpoint-manager-windows-approval-workflow)
