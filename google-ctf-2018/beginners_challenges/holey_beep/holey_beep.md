**Challenge: Holey Beep**

Last challenge!

Holey Beep was a big vulnerability back in the day. First google result: https://holeybeep.ninja/

We need to cat /secret_cake_recipe/, but the file is only readable by admin(1338) while we are user(1337). To gain privesc we need to exploit holey_beep application which is again SETUID binary.

Binary has ASLR\PIE and NX enabled.

Lets check out the binary. First it adds signal handler for SIGTERM (kill -l shows list of signals, but it can be guessed based on handler name which is handle_sigterm). Passing any arguments it opens dev/console and moves the handler to cs:device register. 
Then it convert nth parameter to int with atoi and calls ( ioctl(device, 0x4B2F, input). 
If an error occurs it prints proper message and later (in both cases) it closes the device and increments counter. The proccess repeats for each parameter and after it the application exits.

To avoid timeouts (going too fast) we will need to force the binary to pring more than 65536 bytes, pipe its stderr to anything that will give us time to execute jobs -p and then send SIGTERM

> /home/user/holey_beep $(seq 1 10000) 2>&1 | ( sleep 3;cat - )&<br/>
> kill -15 `pidof /home/user/holey_beep`<br/>

Exploit: [Holey Beep](https://github.com/robbie-re/CTF/blob/CTF/google-ctf-2018/beginners_challenges/holey_beep/data/exploit.py "")

flag: CTF{the_cake_wasnt_a_lie}

