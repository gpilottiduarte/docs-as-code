# Automações de sessões web

Este documento fornece informações sobre a tela do relatório **Automações de sessões web**, que mostra uma lista com todos os parâmetros de sessões web criadas no módulo **PAM Core**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Configurações > Sessões > Automações de sessões web**.

---
## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as sessões web pelo número que identifica a ordem em que os parâmetros foram cadastrados. |
| **Modelo** | Campo de texto | Filtra as sessões web pelo dispositivo-alvo da sessão. |
| **Login Url** | Campo de texto | Filtra as sessões web pela URL da página de login do site que será utilizado. |
| **HTTP Auth Realm** | Campo de texto | Filtra as sessões web pela autenticação HTTP usada, caso seja exigido pelo site. |
| **Firefox legacy** | Menu suspenso | Filtra as sessões web pela opção de uso de um navegador Firefox de versões antigas. As opções são **Sim** e **Não**. Limpe o campo para habilitar a opção **Todos**. |
| **Ignorar erro de certificado** | Menu suspenso | Filtra as sessões web pela opção por ignorar o erro de certificado, se aplicável. As opções são **Sim** e **Não**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código.**  
* **Modelo.**  
* **Login Url.**  
* **HTTP Auth Realm.**  
* **Firefox legacy.**  
* **Ignorar erro de certificado.**  
* **Ações:**  
  * **Editar:** abre a janela **Parâmetros de Sessão Web** para que sejam realizadas as alterações necessárias.  
  * **Clonar**: realiza uma cópia exata do registro a ser clonado. Na janela de confirmação clique em **Sim** para confirmar a ação.  
  * **Desativar:** desabilita o cadastro. Na janela de confirmação clique em **Sim** para confirmar a ação.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
## Tela Parâmetros de sessão web

Esta seção fornece informações sobre a tela de formulário **Parâmetros de sessão web** que possibilita adicionar e editar os parâmetros de sessão web.

:::(info) (**Info**)  
O parâmetro **Utilizar firefox legacy** só funcionará se o navegador utilizado for o Firefox. Caso seja utilizado outro navegador, este parâmetro não terá impacto.  
:::

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Modelo Equipamento*** | Menu suspenso | Sim | Exibe as opções de dispositivo a serem acessados pela sessão. |
| **Utilizar firefox legado*** | Bottão *toggle* | Sim | Habilita ou desabilita a opção de uso de um navegador Firefox de versões antigas. |
| **Ignorar erro de certificado** | Bottão *toggle* | Sim | Habilita ou desabilita a opção de ignorar os possíveis erros de certificado ao acessar a sessão. |
| **Login Url** | Campo de texto | Não | Possibilita inserir o endereço URL que será acessado. |
| **HTTP Auth Realm** | Campo de texto | Não | Possibilita inserir a autenticação HTTP, se aplicável. |
| **Adicionar/Remover selecionado** | Botão | Não | Adiciona uma nova linha ou remove uma linha da tabela **Configuração Personalizada**. |
| **Configuração Personalizada** | Tabela | Não | Exibe e possibilita a configuração de cada parâmetro. As colunas são *Aguardar (MS), Ação, Campo, Valor, Tentativas e. Intervalo (MS)*. **Nota:** consulte a descrição dos campos na seção **Configuração Personalizada** abaixo. |

Para cada ação inserida na tabela existe uma configuração para o preenchimento deste padrão. Saiba mais em [Sobre Configuração personalizada dos parâmetros de sessão web].