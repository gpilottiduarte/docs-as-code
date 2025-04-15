A política de acesso foi desativada, mas não foi removida na workstation. Como consequência, a política de acesso atualizada não é aplicada na workstation com o Agente instalado. 

#### Solução

O serviço `secpack-maestro` está sempre em execução e atualizando as regras conforme registradas no senhasegura. No entanto, se houver necessidade de intervenção manual na worktstation, execute o seguinte procedimento:

1. No terminal Linux, faça o login com o usuário root.
2. Pare o serviço através do comando:
```
service secpack-maestro stop 

```
3. Confirme que o serviço foi interrompido:
```
service secpack-maestro status 
```
4. Remova as políticas desejadas: 
```
echo 'delete 100 acl write path="/etc/oracle/tnsnames.ora"' | /usr/sbin/caitsith-loadpolicy 

```
5. Valide se a política foi removida verificando novamente o arquivo de políticas:
```
cat /sys/kernel/security/caitsith/policy 

```
6. Na plataforma senhasegura, inative a regra para que não seja aplicada novamente.
7. Reinicie o serviço secpack\-maestro`:`
```
service secpack-maestro start 

```
8. Verifique o status de sincronização entre a plataforma da senhasegura e o Agente:ShellShell
```
systemctl status secpack-maestro
```
9. Se necessário, visualize os logs de sincronização para identificar onde possíveis erros podem estar ocorrendo:
```
sudo tail -f /var/log/syslog
```



---

## Comunidade senhasegura

Para saber mais sobre este assunto, veja os artigos criados sobre o [GO Endpoint Manager.](https://community.senhasegura.io/search?q=GO%20Endpoint%20Manager%20tags%3Apt_BR)

Se precisar de mais assistência, pergunte no [senhasegura Community](https://community.senhasegura.io/). Lá, você pode contar com a ajuda dos outros usuários e dos nossos especialistas do senhasegura para obter uma resposta.

  


