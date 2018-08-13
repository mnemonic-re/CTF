**Challenge: Security by Obscurity**

This is a weird one but it teaches some of the stuff old-timers had to do a lot. MANUAL WORK =)

Ok, download the attachment and save it into your ctf directory. You can already see it is a weird file:

> password.x.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.p.o.n.m.l.k.j.i.h.g.f.e.d.c.b.a.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p

Open it in your favorite Hex editor and voila - "PK". Archive. For this task also we will use 7zip. You can use it on Windows or Linux.
You do not have to rename it to .zip or such. 7zip can extract it AS IS.
Now comes the manual work ;)

Each file you extract is archive again simillar but is missing a letter of the alphabet. So just enjoy and start extracting!

An alphabet later you will end up with:

> password.x

This file is password protected. Lets go back to the challenge description a bit... 

> ... some guy named "John" created the firmware ... You fetch it and find "John" packed the firmware with an unknown key. <br/>
> Can you recover the package key?<br/>

If you dont know, John the Ripper is probably one of oldest password crackers there is that still "lives" today. It is a awesome tool
for brute forcing all kinds of passwords, hashes and whole bunch of things. Most PenTest distributions have it already but if you dont,
just download and install it.

So, lets fire up our Linux VM and set up "John". First just rename the file so there isnt any issues. Name it password

To use John the Ripper against our password we need to set it up so it can work with the zip hashes. There is a special tool for making
hashes for zip files in JtR named "zip2john". Sometimes it can happen tool isnt installed so you might wanna search for it.
I have it in the /usr/sbin/zip2john so, cd /usr/sbin and then:

> $./zip2john <PATH_TO_THE_DIRECTORY> password > password.hashes

We get:

> $./zip2john password > password.hashes<br/>
> ver a  efh 5455  efh 7875  password->password.txt PKZIP Encr: 2b chk, TS_chk, cmplen=44, decmplen=32, crc=4341BA5D<br/>

And also a password.hashes is created. Final step is to crack the password with John the Ripper. So rip it!

> ./john -show password.hashes
> password:asdf:::::/password.zip

And we can see the password. Use the password to grab the flag:

flag: CTF{CompressionIsNotEncryption}


