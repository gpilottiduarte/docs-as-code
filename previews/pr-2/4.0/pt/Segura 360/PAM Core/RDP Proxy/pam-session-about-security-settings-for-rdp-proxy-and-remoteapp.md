# Sobre configurações de segurança para RDP Proxy e RemoteApp

Em ambientes Active Directory é importante definir e aplicar políticas que vão além de auditar e gravar sessões através do Gerenciamento de Acessos Privilegiados (PAM). 

Essas definições servem para diminuir o acessos não autorizados, ou seja, usuários com privilégios além do necessário representam um risco significativo à segurança da informação. 

Tendo essa situação em vista, recomenda-se a implementação de uma estratégia robusta de GPOs (Objetos de Política de Grupo) baseada em recomendações do NIST (Instituto Nacional de Padrões e Tecnologia) e utilizando configurações pré-definidas pela DISA (Agência de Sistemas de Informação de Defesa).

## Vantagens de implementar GPOs

* **Acesso restrito a aplicações críticas**: limitação do acesso a ferramentas poderosas como Painel de Controle, Prompt de Comando (cmd), PowerShell, Editor do Registro e Explorador de Arquivos.
* **Privilégio mínimo como padrão**: usuários recebem apenas as permissões essenciais para realizar suas tarefas, reduzindo o risco de erros e atividades maliciosas.
* **Alinhamento com as melhores práticas**: as configurações de GPO recomendadas pela DISA e pelo NIST garantem conformidade com padrões de segurança amplamente reconhecidos.
* **Segurança proativa**: ao restringir o acesso aos recursos do sistema, as organizações adotam uma postura proativa de segurança contra ameaças internas e externas.

## Próximos passos

* **Avaliar e implementar as GPOs da DISA**: as organizações devem cuidadosamente analisar as configurações de GPO da DISA e adaptá-las às suas necessidades e requisitos específicos.
* **Monitorar e ajustar continuamente**: o acesso privilegiado deve ser constantemente monitorado e as políticas ajustadas conforme necessário para atender às demandas e aos desafios em constante evolução da organização.

Para entender melhor como implementar de forma eficiente os GPOs, os adaptando a diferentes sistemas operacionais e personalizando para atender a necessidades específicas de cada organização. Acesse o guia completo disponível no documento [Windows Security Hardening Through Group Policy](https://drive.google.com/file/d/10Px2c-5g7co0ua0gqDKTPo_W1fNMWf-0/view?usp=drive_link){target=`_blank`}.