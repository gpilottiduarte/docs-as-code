# Como fazer restauração de backup e logs

:::(Warning) (Atenção)
Os arquivos de backup do Segura são criptografados usando a criptografia **AES-256**. Para realizar este procedimento, você deve entrar em contato com a equipe de suporte do Segura.
:::

## Restaurar um backup
:::(Warning) (Atenção)
Os arquivos de backup do Segura são criptografados. Para realizar este procedimento, você deve entrar em contato com a equipe de suporte do Segura.
:::

Os backups executados são exportados para o drive remoto da escolha do cliente. No entanto, uma cópia do backup é mantida dentro da instância para acelerar o processo de restauração, se necessário.

O engenheiro do Segura executará o procedimento de abertura do arquivo de backup (descriptografar) para preparar o arquivo de backup para ser restaurado.

Uma vez que o arquivo de backup estiver descriptografado, o engenheiro do Segura deve usar a ferramenta de linha de comando `orbit backup` para restaurar a versão alvo.
:::(Error) (Alerta!)
Este procedimento restaurará todos os dados e esquemas do banco de dados para o momento desejado no passado. Você deve restaurar todos os outros binários se um upgrade do sistema foi realizado entre o momento atual e o arquivo de backup selecionado. Os arquivos binários da aplicação podem ser restaurados usando a **ferramenta Debian APT**.
:::

## Logs
Você pode observar a execução do backup através do agendamento **CRON** no relatório **Orbit Server Manager > Logs > Backup**.

## Relatório de Backup
No relatório de Backup de Credenciais em **Configurações > Backup > Credenciais**, você obtém informações se a credencial está em conformidade com as políticas de senha.

1. **Política de Senha:** Lista a política de senha relacionada à credencial, conforme configurado. Por exemplo:
   * Baixo
   * Médio
   * Alto
2. **Conformidade:**
   * **Sim**: Em verde, se a credencial estiver em conformidade com a política relacionada.
   * **Não**: Em vermelho, se a credencial não estiver em conformidade com a política relacionada.
:::(Info) (Informação)
No momento do backup, o Segura verifica a composição da senha com a política e atualiza as informações sobre se está aderente ou não.
