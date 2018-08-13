**Challenge: Gatekeeper**

After downloading the attachment, we get a 64bit binary. If you try to use hex editor and search for "flag" or such, no luck. If we
try CTF, we get just: "CTF{%s}\n" so further steps are required. Always check for this :) It is 10 seconds and flag might actually be
there.

So, lets disassemble it in IDA (or your disassembler of choice). Starting from the top and doing some quick recon we see this at address:

![gflag](https://github.com/robbie-re/CTF/blob/CTF/google-ctf-2018/beginners_challenges/gatekeeper/data/gatekeeper.png)


Strings are always important in binary analysis so it is good to always pay attention to them. This is actually quite readable. Normal:

lea     rsi, aZll1ksD4mT0gI ; "zLl1ks_d4m_T0g_I" 

but in reverse: I_g0T_m4d_sk1lLz

Interesting. And we see it is lea so it is load effective address and puts it directly into rsi. 
Usually with lea there is [register+ptr\offset] because lea loads some offset from memory and adds it to the register in question.

In this case we can assume there is some reverse string algo going on and then comparing it to this. Cant hurt to try. If it isnt it,
we will continue. Just put CTF{string} like previous challenges (and IDA also shows it) and paste it into the challenge flag. 
Voila, it works :D

flag: CTF{I_g0T_m4d_sk1lLz}

