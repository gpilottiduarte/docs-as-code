# Credenciais

Neste documento, você vai encontrar todas as informações sobre o relatório **Credenciais**, dentro do contexto de **Backup**, que exibe informações gerais sobre as credenciais cadastradas no senhasegura.

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelo nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Backup \> Credenciais**.

## Barra superior

| Item | Descrição |
| :---- | :---- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio, abre o formulário [Agendar relatório](/v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports). |

## Campos de busca

| Item | Descrição |
| :---- | :---- |
| **Código** | Campo de texto. Filtra pelo código da credencial no senhasegura. |
| **Dispositivo** | Campo de texto. Filtra pelo nome do dispositivo no senhasegura. Pode ser utilizando também o endereço de IP. |
| **Nome do usuário** | Campo de texto. Filtra pelo username no senhasegura. |
| **Integridade** | Menu suspenso. Filtra pelo status da integridade da credencial no senhasegura. Pode ser *Empty, Corrupted* ou *Healthy*. |
| **Conformidade** | Menu suspenso. Filtra pelo estado da conformidade da senha da credencial em relação à política de senha cadastrada. Pode ser **Sim** ou **Não**. |
| **Política de senha** | Menu suspenso. Filtra de acordo com a política de senha cadastrada no senhasegura. |
| **Último backup** | Apresenta um calendário para escolha da data de início do filtro. |
| **até** | Apresenta um calendário para escolha da data de fim do filtro. No campo adjacente, selecione a hora para finalizar o filtro. O menu suspenso mostra as horas em intervalos de 15 minutos. Para definir um horário personalizado, insira a hora desejada manualmente. |
| **Situação** | Menu suspenso. Filtra de acordo com o estado da credencial no senhasegura. Pode ser **Sim** ou **Não**. |

## Campos do relatório

* **Código.**  
* **Dispositivo.**  
* **Nome do usuário.**  
* **Tipo:** tipo de usuário.  
* **Última troca:** data e hora da última troca de senha realizada na credencial. Exibida no formato `DD/MM/AAAA HH:MM:SS`.  
* **Última consulta:** data e hora da última consulta realizada à credencial. Exibida no formato `DD/MM/AAAA HH:MM:SS`.  
* **Último backup:** data e hora de realização do último backup da credencial. Exibida no formato `DD/MM/AAAA HH:MM:SS`.  
* **Ativo:** status da credencial.  
* **Integridade.**  
* **Política de senha.**  
* **Conformidade.**  
* **Detalhe:** exibe a mensagem com detalhes sobre a senha da credencial. Caso a senha não esteja em conformidade, a mensagem será em relação ao que falta para a senha estar em conformidade.