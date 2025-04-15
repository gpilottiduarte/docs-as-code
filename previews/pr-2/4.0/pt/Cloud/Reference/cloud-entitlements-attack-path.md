# Caminhos de ataque

Neste documento, você encontra todas as informações sobre a tela **Caminhos de ataque**. Esse relatório mostra quais ações ou permissões podem ser usadas para disparar um ataque, escalar privilégios ou explorar uma vulnerabilidade dentro de suas contas AWS conectadas. Você pode acessar um mapa detalhado sobre como cada política é anexada a um usuário ou grupo para mitigar a vulnerabilidade adequadamente.

## Caminho para acessar

1. Acesse o **Cloud Security**.  
2. No produto Cloud Entitlements, clique em **Acessar**.  
3. No menu esquerdo, clique em **Caminhos de Ataque**.

## Relatório de Caminhos de ataque

| Item | Descrição |
| :---- | :---- |
| **Ataque** | O nome dos ataques. Há quatro tipos de ataque no total: *Attach Policy*, *Create Policy Version*, *Set Default Policy Version* e *Update Assume Role*. |
| **Identidades**  | O número de identidades às quais foi atribuído o ataque. |

Use o filtro no topo do relatório para localizar ataques específicos com base no provedor.

Ao clicar em qualquer ataque da lista, a página será atualizada para uma nova tela de ataque específico. Nesta tela, você terá as seguintes informações sobre o ataque:

| Item | Descrição |
| :---- | :---- |
| **Ambiente**  | Contém a conta AWS conectada ao **Cloud Entitlements**. |
| **Tipo**  | Indica o tipo da identidade. Os tipos são: **Usuário** e **Grupo**. |
| **Principal**  | Mostra o nome do principal. |
| **Código da conta**  | Mostra o ID da conta AWS. |

Use a barra de pesquisa no topo da lista para localizar identidades específicas. Ao lado da barra de pesquisa, você encontrará filtros que permitem filtrar o relatório com base no **Tipo**.

Ao clicar em qualquer campo do relatório, você acessa o modal **Detalhes da identidade** para a identidade selecionada.

### Modal de detalhes da identidade

O modal de Detalhes da identidade mostra uma representação gráfica de como a identidade possui a política anexada. Ele exibe um mapa interativo dos **Serviços**, **Usuários**, **Grupos**, **Ações**, **Recursos**, **Funções** e **Políticas** que levam ao caminho do ataque. O modal também exibe a **Descrição**, **Requisitos**, e **Impacto** deste ataque. Este mapa pode ser usado para identificar qual ação deve ser tomada para mitigar a vulnerabilidade, seja desanexando uma política ou uma função de um usuário, removendo um usuário de um grupo, ou reconfigurando recursos ou ações.

| Item | Descrição |
| :---- | :---- |
| **Filtro**  | Campo para filtrar a busca por elementos do mapa. Quando um termo se encaixa no padrão inserido, os elementos são destacados visualmente. |
| **Configurações**  | Botão para expandir as opções de configuração do mapa. |
| **Modelos**  | Campo para selecionar o modelo do mapa. Existem três modelos: **Radial out 2D**, **Force directed 2D**, e **Force directed 3D**. |
| **Zoom in**  | Botão para aumentar o zoom no mapa. |
| **Zoom out**  | Botão para diminuir o zoom no mapa. |
| **Resetar visualização**  | Botão para resetar o zoom no estado inicial. Não afeta o modelo de exibição escolhido. |