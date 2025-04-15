# Configurações de backup da aplicação

Este documento fornece informações sobre o formulário **Configurações de backup da aplicação** que exibe informações sobre as configurações de backup para toda a aplicação Segura.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Orbit Server Manager**.  
2. No menu lateral, selecione **Configurações \> Backup**.

## Menu de Ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Alterar** | Botão | Direciona para a tela **Configuração de backup da aplicação**. |

## Configurações de backup da aplicação

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Status do backup da aplicação** | Campo de texto | Indica a situação  atual do backup da aplicação. |
| **Status do backup de sessão** | Campo de texto | Indica a situação atual do backup de sessão. |
| **Modo do backup de arquivos** | Campo de texto | Define o modo de backup de arquivos utilizado. |
| **Servidor** | Campo de texto | Especifica o endereço do servidor de backup configurado. |
| **Caminho** | Campo de texto | Caminho de destino do backup no servidor configurado. |

## Configurações de Backup da Aplicação

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Gostaria de habilitar o backup da aplicação?** | Botão toggle | Não | Ativa ou desativa o status do backup. |
| **Gostaria de ativar também o backup de arquivos da sessão?** | Botão toggle | Não | Ativa ou desativa o status dos backups relacionados aos arquivos de sessão. |
| **Como será o modo de envio dos arquivos de backup?** | Menu suspenso | Sim | Define o modo de envio dos arquivos de backup. As opções são *Enviar para um servidor Linux remoto (via RSYNC)* ou *Montar uma partição remota (via CIFS ou NFS).* |

