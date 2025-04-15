## Configurar lista de aprovadores

1. Acesse a plataforma senhasegura.
2. Vá até **GO Endpoint Manager➔Configurações➔Aprovadores.**
3. No canto superior direito, selecione o ícone **(⁝) Exibir ações** e após, **\+Novo.**
4. Selecione **\+Aprovadores.**
5. Na lista de usuários marque quais usuários serão aprovadores.
6. Escolha**Adicionar.**
7. No campo **Nível**, selecione entre os níveis 1 a 3\.
8. **Salvar.**

InfoO parâmetro global será definido como workflow padrão de aprovação para todos os aplicativos que não estejam configurados em uma lista de acesso.

---

## Criar lista de acesso com aprovação em níveis

1. Crie uma lista de acesso para qualquer categoria **(GO Endpoint Manager➔Políticas➔Windows➔Listas de acesso).**
2. Em **Workflow**, marque a opção **Exigir aprovação para elevar aplicações.**
3. Após, selecione**Aprovação em níveis.**
4. Defina a quantidade de**Aprovações necessárias.**
5. Defina a quantidade de **Reprovações necessárias para cancelar.**

CuidadoA quantidade de aprovações necessárias por nível não é igual ao número de níveis de aprovação. É preciso definir quantos aprovadores em cada nível serão necessários para aprovar a solicitação.Aprovações necessárias, por exemplo:



| Aprovações necessárias | Nível de aprovação | Quantidade de aprovadores por nível | Quantidade total de aprovadores |
| --- | --- | --- | --- |
| 4 | 1 | 4 | 4 |
| 4 | 2 | 4 | 8 |
| 4 | 3 | 4 | 12 |

A configuração de Controle de acesso é compartilhada com o **PAM Core**.  Caso queira permitir que o próprio usuário aprove a requisição, desde que também seja um aprovador do GO, vá até **GO Endpoint Manager➔Configurações➔Parâmetros➔Controle de acesso** e marque a opção **Permitir que um aprovador possa aprovar a própria solicitação?\*.**



---

## **Aprovar solicitações de acesso**

1. Acesse a plataforma senhasegura.
2. Vá até **GO Endpoint Manager➔Relatórios➔Minhas aprovações.**
3. Clique em **Ação.**
4. Escolha se deseja aprovar a solicitação.



---

## Solicitar acesso a uma aplicação no GO

1. Acesse a área de trabalho da estação de trabalho do usuário
2. Inicie a aplicação Core.
3. Escolha uma aplicação para elevar o privilégio.
4. Clique com o botão direito do mouse e clique em **Executar.**
5. Preencha a **Justificativa.**
6. Clique em **OK.**

CuidadoA aprovação é realizada por workstation e não por usuário. É necessário que apenas um usuário solicite a aprovação para elevar a aplicação e todos os usuários daquela mesma workstation poderam executar a aplicação quando for aprovada.  


---

## Acompanhar solicitações de acesso

1. Acesse a plataforma senhasegura.
2. Vá até **GO Endpoint Manager➔Relatórios➔Minhas solicitações.**
3. Clique em **Ação** para visualizar a solicitação.

  




---

  


## Visualização de Registros e Justificativas do Workflow de Aprovação

Para visualizar os registros do workflow de aprovação relacionados à execução de aplicações no agente GO:

1. Acesse a plataforma senhasegura.
2. Navegue até **GO Endpoint Manager \> Relatórios \> Eventos.**
3. Clique no ícone de lupa na coluna **Ação** para ver os detalhes do evento.

Os eventos gerados a partir da execução de uma aplicação são classificados como Evento de Justificativa de Execução.

Para visualizar os registros do workflow de aprovação para o uso das credenciais do **PAM senhasegura** no agente GO:

1. Acesse a plataforma senhasegura.
2. Navegue até **PAM Core \> Controle de Acesso \> Solicitações.**
3. Clique no ícone de lupa na coluna **Ação** para ver os detalhes do evento.

  


  


