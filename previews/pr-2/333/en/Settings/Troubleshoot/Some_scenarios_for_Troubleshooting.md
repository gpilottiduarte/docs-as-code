## Some scenarios for Troubleshooting



---

**Error:** senhasegura does not import all users from Active Directory.

**Solution:** some users may not be imported after configuring and integrating Active Directory with senhasegura. This error is a result of the wrong configuration of the bind.



---

**Error:** CPU usage at 100% in senhasegura.

**Solution:** one of the leading causes of senhasegura consuming 100% of CPU is sessions stuck in the environment. Run the command `ps aux | grep guacd` through the mt4adm credential and check the consumption of the displayed sessions.

