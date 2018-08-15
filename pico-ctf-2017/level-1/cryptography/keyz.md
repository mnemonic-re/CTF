**keyz**

> keyz
> While webshells are nice, it'd be nice to be able to login directly. 
> To do so, please add your own public key to ~/.ssh/authorized_keys, using the webshell. Make sure to copy it correctly! 
> The key is in the ssh banner, displayed when you login remotely with ssh, to shell2017.picoctf.com

>  HINTS
> There are plenty of tutorials out there. 
> This one covers key generation: https://confluence.atlassian.com/bitbucketserver/creating-ssh-keys-776639788.html
> Then, use the web shell to copy/paste it, and use the appropriate tool to ssh to the server using your key

**Writeup**

Ahh.. Cryptography :)

This challenge teaches how to to add your own public key to a list of authorized_keys on the remote webserver. 

Must Read: https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/

So, lets do it. First we need to generate our key, both private and public.

> ssh-keygen -t rsa -b 4096 -C "robbie@example.com" - create ssh key with RSA 4096 encryption

After that it will ask you where to save it. Just at end type: ./your_username so it saves it as new:

> Generating public/private rsa key pair.<br/>
> Enter file in which to save the key (/root/.ssh/id_rsa): ./your_username<br/>
> Enter passphrase (empty for no passphrase): <br/>
> Enter same passphrase again: <br/>
> Your identification has been saved in ./your_username.<br/>
> Your public key has been saved in ./your_username.pub.<br/>
> The key fingerprint is:<br/>
> ....<br/>

That will generate private and public keys.

Next step is adding the key:

> ssh-add <your_username><br/>
> Enter passphrase for your_username: <br/>
> Identity added: picoctf (your_username)<br/>

Now your identity is the same as the ssh session running.

You must now do: cat your_username.pub

This will display your public key. You need this so copy everything starting from ssh-rsa to end of your email address. IMPORTANT.

Go back to the WebShell of the PicoCTF (Browser) and there type:

> cat > authorized_keys

Small prompt will apear and here you paste your public key. Then press enter and ctrl+z to exit and that key will be added to the list
of authorized_keys for ssh.

Finally, SSH to the server and get the flag.

> ssh shell2017.picoctf.com

also in some cases you can add your username and do:

> ssh your_username@shell2017.picoctf.com

Lot of different options with SSH. Complicated stuff but worth investigating!

flag: who_needs_pwords_anyways


