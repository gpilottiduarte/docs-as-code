# Certificados

Este documento fornece informações sobre o relatório **Certificado** que apresenta informações sobre os certificados disponíveis no servidor.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Orbit Server Manager**.  
2. No menu lateral, selecione **Servidor \> Certificados**.

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Alterar** | Botão | Direciona para a tela **Certificados** para atualizar ou registrar um certificado. |

## Segurança

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Série** | Campo de texto | Número de série único que identifica o certificado digital. |
| **Assunto** | Campo de texto | Informações sobre o proprietário do certificado, incluindo país, estado, organização, etc. |
| **Início** | Campo de texto | Data e hora em que o certificado digital começou a ser válido. |
| **Validade** | Campo de texto | Data e hora em que o certificado digital irá expirar. |
| **Ação** | Botão | Opção para instalar ou gerenciar o certificado no sistema. |

## Certificados

Acessível ao clicar no botão **Alterar** no canto superior direito. Permite o upload de certificados digitais e suas respectivas chaves privadas.

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Certificado** | Área de upload | Área para arrastar e soltar o arquivo contendo o certificado digital (.crt, .pem). |
| **Chave do certificado** | Área de upload | Área para arrastar e soltar o arquivo contendo a chave privada do certificado (.key). |
| **Salvar** | Botão | Botão para salvar os arquivos enviados e aplicar o certificado no sistema. |