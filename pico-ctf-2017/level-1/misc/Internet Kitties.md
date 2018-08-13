**Internet Kitties**

> Internet Kitties
> I was told there was something at IP shell2017.picoctf.com with port 2720. How do I get there? Do I need a ship for the port?

>  HINTS
> Look at using the netcat (nc) command!
> To figure out how to use it, you can run "man nc" or "nc -h" on the shell, or search for it on the interwebz

In this challenge hint literally says it all. We use Netcat to connect to the server and grab the flag. If you are not familliar with Netcat
arguments, check them out because Netcat is extremely powerful tool. Very old but still rockin. For good documentation and how to install
it on Windows if you use it, Cygwin emulation see: https://www.poftut.com/netcat-nc-command-tutorial-examples/

But in general it is best even if you are Windows user to have a Linux Virtual Machine running. So far challenges are very easy but some
tools just work best on Linux. Your choice.

So back to the task, in a shell we do:

nc shell2017.picoctf.com 53382

and...

> Yay! You made it!
> Take a flag!
> e7791aeada4dcc5dd89a0023f4f8bbce

flag: e7791aeada4dcc5dd89a0023f4f8bbce

If you try the challenge now, you will have to connect to port 2720 instead of 53382. But everything is the same:

> Yay! You made it!
> Take a flag!
> 0385d4bad438ffd596c049d5796e83a2

flag: 0385d4bad438ffd596c049d5796e83a2

